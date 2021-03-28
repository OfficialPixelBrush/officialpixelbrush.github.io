from PIL import ImageTk, Image
import os
from tkinter import Tk     # from tkinter import Tk for Python 3.x
from tkinter.filedialog import askopenfilename
from tkinter.filedialog import asksaveasfile

Tk().withdraw() # we don't want a full GUI, so keep the root window from appearing
img1 = askopenfilename() # show an "Open" dialog box and return the path to the selected file
print(img1)
img2 = askopenfilename() # show an "Open" dialog box and return the path to the selected file
print(img2)

# Loading of images       
im1 = Image.open(img1)
im2 = Image.open(img2)
x_size, y_size = 639, 906
pilImage = Image.new('RGB', (x_size, y_size), (0,0,0))

# Pixel initialization
pixel_final = pilImage.load()
pixel_1 = im1.load()
pixel_2 = im2.load()

x_size_1, y_size_1 = im1.size
x_size_2, y_size_2 = im2.size

# Black Line
for x in range(x_size):
    for y in range(y_size):
        # First Image
        if y < y_size_1+10 and y > 9:
            if x < x_size_1+10 and x > 9:
                pixel_final[x,y] = pixel_1[x-10,y-10]
        # Second Image
        if y < y_size_1+20+y_size_2 and y > y_size_1+19:
            if x < x_size_1+10 and x > 9:
                pixel_final[x,y] = pixel_2[x-10,y-y_size_1-20]

                
        
savelocation = str(asksaveasfile(mode='w', defaultextension=".png"))
savelocation2 = savelocation.split("name='")[1]
savelocation3 = savelocation2.split("' mode")[0]

print(savelocation3)
pilImage.save(str(savelocation3))
