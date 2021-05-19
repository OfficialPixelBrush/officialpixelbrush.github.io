from PIL import Image
import os
from tkinter import Tk     # from tkinter import Tk for Python 3.x
from tkinter.filedialog import askopenfilename
from tkinter.filedialog import asksaveasfile

Tk().withdraw() # we don't want a full GUI, so keep the root window from appearing
img = askopenfilename() # show an "Open" dialog box and return the path to the selected file
im = Image.open(img)
pixels = im.load()
xSize, ySize = im.size

filename = input("Filename: ")
f = open(filename, "w")

f.write("P3\n")
f.write(str(xSize) + " " + str(ySize) + "\n")
f.write("256\n")

for y in range (int(ySize)):
    for x in range (int(xSize)):
        r,g,b = pixels[x,y]
        f.write(str(r) + " " +  str(g) + " " + str(b) + " ")
    f.write("\n")
f.close()
