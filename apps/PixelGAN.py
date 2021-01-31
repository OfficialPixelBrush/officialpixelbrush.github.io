from tkinter import *
from PIL import ImageTk, Image
from tkinter import filedialog 
import random
import math
import time
import datetime

def makeNoise():
    distance_limit_get = int(distance_limit.get())
    size_x = int(x_scale.get())
    size_y = int(y_scale.get())
    range_scale_get = int(range_scale.get())
    brightness_get = int(brightness.get())
    pilImage = Image.new('RGB', (size_x, size_y), (0,0,0))
    pixel = pilImage.load()
    noise_dots_x = []
    noise_dots_y = []
    print("Rendering...")
    progress_label.config(text=("Rendering..."))
    for i in range(range_scale_get):
        noise_x = random.randrange(0,size_x)
        noise_y = random.randrange(0,size_y)
        noise_dots_x.append(noise_x)
        noise_dots_y.append(noise_y)
        progress_label.config(text=("\r{0}%             ".format((100/range_scale_get)*i)))
    for x in range(size_x):
        print("\r{0}%".format((100/size_x)*x), end = '', flush=True),
        for y in range(size_y):
            prev_red, prev_green, prev_blue = pixel[x,y]
            distance_total = math.sqrt(((x-noise_dots_x[0])**2)+((y-noise_dots_y[0])**2))
            for u in range(range_scale_get):
                noise_dots_x_temp = noise_dots_x[u]
                noise_dots_y_temp = noise_dots_y[u]
                distance_total_temp = math.sqrt(((x-noise_dots_x_temp)**2)+((y-noise_dots_y_temp)**2))
                if distance_total_temp <= distance_total:
                    distance_total = distance_total_temp
            if distance_total <= distance_limit_get:
                prev_red=prev_red+(brightness_get-int(distance_total))
                prev_green=prev_green+(brightness_get-int(distance_total))
                prev_blue=prev_blue+(brightness_get-int(distance_total))
            pixel[x,y]=(prev_red,prev_green,prev_blue)
    todays_date = datetime.date.today()
    current_time = datetime.datetime.now().strftime('%H_%M')
    pilImage.save("renders/render_{0}_{1}.png".format(todays_date, current_time))
    finalImg = ImageTk.PhotoImage(pilImage)
    label = Label(image=finalImg)
    label.image = finalImg # keep a reference!
    canvas.config(width=size_x, height=size_y)
    canvas.create_image(size_x/2,size_y/2,image=finalImg)
    progress_label.config(text=("Done"))

root = Tk()  
root.title("PixelGAN")

distance_limit_label = Label(text="Cirlce Radius Limit")
distance_limit_label.grid(row=1, column=1)
distance_limit = Entry(root, width=50)
distance_limit.grid(row=1, column=2)

range_scale_label = Label(text="Amount of Circles")
range_scale_label.grid(row=2, column=1)
range_scale = Entry(root, width=50)
range_scale.grid(row=2, column=2)

brightness_label = Label(text="Circle Brightness")
brightness_label.grid(row=3, column=1)
brightness = Entry(root, width=50)
brightness.grid(row=3, column=2)

x_scale_label = Label(text="Image Width")
x_scale_label.grid(row=4, column=1)
x_scale = Entry(root, width=50)
x_scale.grid(row=4, column=2)

y_scale_label = Label(text="Image Height")
y_scale_label.grid(row=5, column=1)
y_scale = Entry(root, width=50)
y_scale.grid(row=5, column=2)

render = Button(root, text ="Render", command = makeNoise)
render.grid(row=6)
canvas = Canvas(root, width=128, height=128, bg="black")
canvas.grid(row=7)
progress_label = Label(text="-")
progress_label.grid(row=10)
#img.show()
#print("/n")
#filename = input("Save as: ")
#img.save(filename + ".png")
root.mainloop()
