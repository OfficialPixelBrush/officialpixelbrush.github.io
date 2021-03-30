#include <alloc.h>
#include <conio.h>
#include <dos.h>
#include <stdio.h>
#include <string.h>
#include <time.h>

#define NUM_COLORS 16
#define SET_MODE 0x00
#define VIDEO_INT 0x10
#define VGA_256_COLOR_MODE 0x13
#define TEXT_MODE 0x03
#define SCREEN_HEIGHT 200
#define SCREEN_WIDTH 320
#define PALETTE_INDEX 0x3C8
#define PALETTE_DATA 0x3C9

#define LEN 256
#define SETPIX(x,y,c) *(VGA+(x)+(y)*SCREEN_WIDTH)=c
#define GETPIX(x,y) *(VGA+(x)+(y)*SCREEN_WIDTH)
#define MAX(x,y) ((x) > (y) ? (x) : (y))
#define MIN(x,y) ((x) < (y) ? (x) : (y))

typedef unsigned char byte;

byte far *VGA=(byte far *)0xA0000000L;

void set_mode(byte mode) {
  union REGS regs;
  regs.h.ah = SET_MODE;
  regs.h.al = mode;
  int86( VIDEO_INT, &regs, &regs );
}

int intMod(int x, int y) {
	return (x - y*(x/y));
}

int main() {
	int x = 0;
	int y = 0;
	int iModFour;
	int flipMode = 0;
	
	set_mode( VGA_256_COLOR_MODE );
	for (y = 0; y < SCREEN_HEIGHT; ++y) {
		for (x = 0; x < SCREEN_WIDTH; ++x) {
			iModFour = y%4;
			switch (iModFour) {
				case 0:
					SETPIX(x,y, x);
				case 4:
					SETPIX(x,y, x);
			}
		}
	}
	
	printf("Press Escape to Exit\n");
		while (1) {
			if (getch() == 0x1b) {
				set_mode( TEXT_MODE );
				return 0;
			}
		}
}