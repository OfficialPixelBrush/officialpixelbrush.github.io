#include <alloc.h>
#include <conio.h>
#include <dos.h>
#include <stdio.h>
#include <string.h>

#define NUM_COLORS 256

/* Mouse */
#define MOUSE_INT 0x33

#define INIT_MOUSE 0x00
#define SHOW_MOUSE 0x01
#define HIDE_MOUSE 0x02
#define GET_MOUSE_STATUS 0x03

/* Video */
#define VIDEO_INT 0x10

#define SET_MODE 0x00
#define SET_CURSOR 0x02
#define PRINT_CHAR 0x09
#define PRINT_STRING 0x13

#define TEXT_MODE 0x03
#define VGA_256_COLOR_MODE 0x13

#define SCREEN_HEIGHT 200
#define SCREEN_WIDTH 320

#define VRETRACE_BIT 0x08

#define INPUT_STATUS 0x3DA

typedef unsigned char byte;

byte far *VGA=(byte far *)0xA0000000L;

#define SETPIX(x,y,c) *(VGA+(x)+(y)*SCREEN_WIDTH)=c
#define GETPIX(x,y) *(VGA+(x)+(y)*SCREEN_WIDTH)
#define MAX(x,y) ((x) > (y) ? (x) : (y))
#define MIN(x,y) ((x) < (y) ? (x) : (y))

void set_mode(byte mode) {
  union REGS regs;
  regs.h.ah = SET_MODE;
  regs.h.al = mode;
  int86( VIDEO_INT, &regs, &regs );
}

/* initiliaze mouse */
int init_mouse() {
	union REGS regs;
	regs.x.ax = INIT_MOUSE;
	int86( MOUSE_INT, &regs, &regs );
	return 0xFFFF == regs.x.ax;
}

/* show mouse */
void show_mouse() {
	union REGS regs;
	regs.x.ax = SHOW_MOUSE;
	int86( MOUSE_INT, &regs, &regs );
}

/* hide mouse */
void hide_mouse() {
	union REGS regs;
	regs.x.ax = HIDE_MOUSE;
	int86( MOUSE_INT, &regs, &regs );
}

void get_mouse(int *x, int *y, int *left, int *right) {
  union REGS regs;
  regs.x.ax = GET_MOUSE_STATUS;
  int86( MOUSE_INT, &regs, &regs );
  *x = regs.x.cx / 2;
  *y = regs.x.dx;
  *left = regs.x.bx & 0x1;
  *right = regs.x.bx & 0x2;
}

int main() {
  byte *pal;
  int x,y,left,right;

	if (init_mouse()) {
		printf("Mouse found!\n");  
	} else {
		printf("No mouse found!\n"); 
	}
  
	set_mode( VGA_256_COLOR_MODE );
	show_mouse();
  
	printf("Press Escape to Exit\n");
	while (1) {
		get_mouse(&x, &y, &left, &right);
		printf("\n%d", x);
		printf("\n%d", y);
		if ( left ) {
			hide_mouse();
		}
		
		if ( right ) {
			show_mouse();
		}
		
		if (getch() == 0x1b) {
			set_mode( TEXT_MODE );
			return 0;
		}
	}
}