#include <conio.h>
#include <dos.h>
#include <stdio.h>
#include <string.h>
#include <time.h>
#include <mem.h>

#define COLOR_OFFSET 56
#define NUM_COLORS 16
int startcolor = 4;
#define SET_MODE 0x00
#define VIDEO_INT 0x10
#define VGA_256_COLOR_MODE 0x13
#define TEXT_MODE 0x03
#define SCREEN_HEIGHT 200
#define SCREEN_WIDTH 320

#define LEN 256
#define SETPIX(x,y,c) *(VGA+(x)+(y)*SCREEN_WIDTH)=c
#define GETPIX(x,y) *(VGA+(x)+(y)*SCREEN_WIDTH)
#define MAX(x,y) ((x) > (y) ? (x) : (y))
#define MIN(x,y) ((x) < (y) ? (x) : (y))

typedef unsigned char byte;

byte far *VGA=(byte far *)0xA0000000L;

double getAbs(double n) {
    if (n < 0) {
        n = (-1) * n;
    }
	return n;
}

void set_mode(byte mode) {
  union REGS regs;
  regs.h.ah = SET_MODE;
  regs.h.al = mode;
  int86( VIDEO_INT, &regs, &regs );
}

int intMod(int x, int y) {
	return (x - y*(x/y));
}

double smoothColor(int i, int x, int y) {	
	int out = intMod(i/4, NUM_COLORS)+COLOR_OFFSET+startcolor;
	int iModFour = i%4;
	
	/* Change dithering based on iteration */
	switch (iModFour) {
		case 0:
			/* 1 */
			if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
				out = out-NUM_COLORS+COLOR_OFFSET+startcolor;
			}
			return out;
		case 1:
			/* 2 */
			if (y%2) {
				if (x%2) {
					if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
						out = out-NUM_COLORS+COLOR_OFFSET+startcolor;
					}
				} else {
					++out;
					if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
						out = out-NUM_COLORS+COLOR_OFFSET+startcolor;
					}
				}
			} else {
				if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
					out = out-NUM_COLORS+COLOR_OFFSET+startcolor;
				}
			}
			
			return out;
		case 2:
			/* 3 */
			if (y%2) {
				if (x%2) {
					if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
						out = out-NUM_COLORS+COLOR_OFFSET+startcolor;
					}
				} else {
					++out;
					if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
						out = out-NUM_COLORS+COLOR_OFFSET+startcolor;
					}
				}
			} else {
				if (x%2) {
					++out;
					if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
						out = out-NUM_COLORS+COLOR_OFFSET+startcolor;
					}
				} else {
					if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
						out = out-NUM_COLORS+COLOR_OFFSET+startcolor;
					}
				}
			}
			
			return out;
		case 3:
			/* 4 */
			if (y%2) {
				if (x%2) {
					++out;
					if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
						out = out-NUM_COLORS+startcolor;
					}
				} else {
					if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
						out = out-NUM_COLORS+startcolor;
					}
				}
			} else {
					++out;
				if (out > NUM_COLORS+COLOR_OFFSET+startcolor) {
					out = out-NUM_COLORS+startcolor;
				}
			}
			
			if (out < COLOR_OFFSET+startcolor) {
				out = out-1;
			}
			return out;
	}
}

double mapRange(double a1, double a2, double b1, double b2, double s) {
	return b1 + (s - a1) * (b2 - b1) / (a2 - a1);
}

double funcX(int function, double zx, double zy, double cx, double setCx) {
	switch ( function ) {
		case 0:
			return (zx*zx - zy*zy + setCx);
		case 1:
			return (zx*zx - zy*zy + cx);
		case 2:
			return (zx*zx - zy*zy + cx);
		case 3:
			return (zx*zx*zx - 3*zx*zy*zy + cx);
		case 4:
			return (zx*zx*zx*zx - (6*zx*zx - zy*zy)*zy*zy + cx);
		case 5:
			return (zx*zx*zx*zx*zx + zx*zy*zy*(5*zy*zy - 10*zx*zx) + cx);
	}
}

double funcY(int function, double zy, double cy, double tmp, double setCy) {
	switch ( function ) {
		case 0:
			return 2*tmp*zy + setCy;
		case 1:
			return (getAbs((double)(2*tmp*zy)) + cy);
		case 2:
			return 2*tmp*zy + cy;
		case 3:
			return 3*tmp*tmp*zy - zy*zy*zy + cy;
		case 4:
			return 4*tmp*zy*(tmp*tmp - zy*zy) + cy;
		case 5:
			return zy*(5*tmp*tmp*(tmp*tmp - 2*zy*zy) + zy*zy*zy*zy) + cy;
	}
}

void clrscr() {
	int x,y;
	for (y = 0; y < SCREEN_HEIGHT; ++y) {
		for (x = 0; x < SCREEN_WIDTH; ++x) {
			SETPIX(x,y,0);
		}
	}
}

/* Main Program */
int main()
{	
	int mode, fullScr, soundToggle, xSize, ySize, t;
	double setCx, setCy, xCoord, yCoord, Zoom; 
	
	/* Setup stuffs */
	set_mode( TEXT_MODE );
	system("cls");
	printf("Mandelbrot Set (in C for MS-DOS)\n");
	printf("Written by PixelBrushArt (2021)\n");
	printf("v7.0\n");
	

	printf("\n- Render Mode -");
	printf("\nExit (0), Text (1), Screen (2), T&S (3), Dithered VGA (4), Exploration (5): ");
	scanf("%d", &mode);
	if (mode == 0) {
		return 0;
	}
	
	printf("\n- Function -");
	printf("\nBurning Ship (1), pow2 (2), pow3 (3), pow4 (4), pow5 (5): ");
	scanf("%d", &funcNum);
	printf("\nSet C values (0/1) ");
	scanf("%d", &juliaMode);
	
	if (juliaMode) {
		printf("\nc = _ + []i \n");
		scanf("%lf", &setCx);
		printf("\n c = [] + _i \n");
		scanf("%lf", &setCy);
	}
	
	if (mode == 5) {
		printf("\nFullscreen (0/1): ");
		scanf("%d", &fullScr);
	}
	
	if ((mode == 4) || (mode == 5)) {
		printf("\nSound (0/1): ");
		scanf("%d", &soundToggle);
		set_mode( VGA_256_COLOR_MODE );
	}

	if ((mode < 5)) {
		printf("\nxCoord: ");
		scanf("%lf", &xCoord);
		printf("\nyCoord: ");
		scanf("%lf", &yCoord);
		printf("\nZoom: ");
		scanf("%lf", &Zoom);
	}

	if ((mode > 0) && (mode < 4)) {
		if ((mode == 1) || (mode == 3)) {
			fp = fopen("c:\\mndlbrt.txt", "w");
		}
		printf("\nWidth: ");
		scanf("%lf", &xSize);
		printf("\nHeight: ");
		scanf("%lf", &ySize);
	}
	
	vga:
	if (mode != 5) {
		printf("\nIterations: ");
		scanf("%lf", &t);
	}

	/* Calculating */
	set_mode( VGA_256_COLOR_MODE );
	begin = clock();
	drawSetInMode();
	nosound();
	end = clock();
	time_spent = (double)(end - begin) / CLK_TCK;
	printf("%.2lfs - Press Escape to Exit\n", time_spent);
	while (1) {
		if (getch() == 0x1b) {
			goto reboot;
		}
	}
	
	set_mode( TEXT_MODE );
	return 0;
}

void drawSetInMode() {
	switch(mode) {
		case 4:
			set_mode( VGA_256_COLOR_MODE );
			xSize = SCREEN_WIDTH;
			ySize = SCREEN_HEIGHT;
		case 5:
			set_mode( VGA_256_COLOR_MODE );
			xSize = SCREEN_WIDTH;
			ySize = SCREEN_HEIGHT;
	}
	
	for (y = 0; y < ySize; y++) {
		for (x = 0; x < xSize; x++) {
			int i;
			double cy,cx,zy,zx;
			
			/* Julia sets */
			if (juliaMode) {
				cx = setCx;
				cy = setCy;
				
				zy = mapRange(0, ySize, yCoord+(ySize/10)/Zoom, yCoord-(ySize/10)/Zoom, y);
				zx = mapRange(0, xSize, xCoord-(xSize/10)/Zoom, xCoord+(xSize/10)/Zoom, x);
			} else {
				cx = mapRange(0, xSize, xCoord-(xSize/10)/Zoom, xCoord+(xSize/10)/Zoom, x);
				cy = mapRange(0, ySize, yCoord+(ySize/10)/Zoom, yCoord-(ySize/10)/Zoom, y);
				zy = cy;
				zx = cx;
			}
			
			for (i = 0; i < t; ++i) {
				double tmp = zx;
					zx = funcX(funcNum, zx, zy, cx);
					zy = funcY(funcNum, zy, cy, tmp);

				if ((zx*zx + zy*zy) > 4) {
					drawBasedOnMode(x,y,i);
					if ( soundToggle == 1 ) {
						sound(i+1);
					}
					break;
				} else {
					drawBasedOnMode(x,y,0);
				}
			}
		}
	}
}