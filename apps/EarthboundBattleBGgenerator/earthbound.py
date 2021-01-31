from PIL import ImageTk, Image
import time
import datetime
import random
import math
import os


# Loading of images       
img1 = str(input("BG Layer 1: "))
img2 = str(input("BG Layer 2: "))
osc_lvl_init = float(input("Horizontal Oscillation Level: "))
freq_init = float(input("Oscillation Frequency: "))
change_rate = float(input("Change Rate: "))
change_max = float(input("Change Max: "))
waves = int(input("Triangle(0) or Sine (1): "))
frames = int(input("Frames to Render: "))
iteration = 0
im1 = Image.open(img1 + ".png")
im2 = Image.open(img2 + ".png")
x_size, y_size = im1.size
pilImage = Image.new('RGB', (x_size, y_size), (0,0,0))

# Pixel initialization
pixel_final = pilImage.load()
pixel_1 = im1.load()
pixel_2 = im2.load()

# Interleaved Oscillation
def InterleavedOscillation():
    for y in range(y_size):
        print(str(y))
        # If Oscillation Level gets too high
        if osc_lvl>osc_lvl_init:
            freq = -freq
        # If Oscillation Level gets too low
        if osc_lvl<-osc_lvl_init:
            freq = -freq

        osc_lvl+=freq
        
        for x in range(x_size):
            if y % 2:
                pixel_final[x,y] = pixel_2[x,y]
            else:
                pixel_final[x,y] = pixel_1[x,y]

# Horizontal Oscillation Math
def HorizontalOscillationCalc(a, b, c):
    # Triangle
    if waves == 0:
        # If Oscillation Level gets too high
        if a>=osc_lvl_init*c:
            b = -b
        # If Oscillation Level gets too low
        if a<=-osc_lvl_init*c:
            b = -b

        return a-b, b

    # Sine
    if waves == 1:
        # If Oscillation Level gets too high
        if a>=osc_lvl_init*c:
            b = -b
        # If Oscillation Level gets too low
        if a<=-osc_lvl_init*c:
            b = -b
        return a-b, math.sin(b)
   

# Horizontal Oscillation
def HorizontalOscillation(change_rate):
    todays_date = datetime.date.today()
    current_time = datetime.datetime.now().strftime('%H_%M')
    cur_path = os.getcwd()
    path = ("\renders\{0}_{1}".format(todays_date, current_time, cur_path))
    if not os.path.exists("{2}\\renders\\{0}_{1}".format(todays_date, current_time, cur_path)):
        os.mkdir("{2}\\renders\\{0}_{1}".format(todays_date, current_time, cur_path))
        print ("Successfully created the directory %s " % path)
        iteration = 0
        b=change_rate
        c=0
        for i in range(frames):
            # If Oscillation Level gets too high
            if c>=change_max:
                b = -b
            # If Oscillation Level gets too low
            if c<=-change_max:
                b = -b
            
            c -= b
            iteration+=1
            print("Rendering Iteration: " + str(iteration))
            osc_lvl = 0
            global freq_init
            for y in range(y_size):
                osc_lvl, freq_init = HorizontalOscillationCalc(osc_lvl, freq_init, c)
                #print(str(y) + ", " + str(osc_lvl))
        
                for x in range(x_size):
                    if y % 2:
                        if x+osc_lvl >= x_size:
                            pixel_final[x,y] = pixel_2[x+osc_lvl-x_size,y]
                        else:
                            pixel_final[x,y] = pixel_2[x+osc_lvl,y]
                    else:
                        if x-osc_lvl < 0:
                            pixel_final[x,y] = pixel_1[x-osc_lvl+x_size,y]
                        else:
                            pixel_final[x,y] = pixel_1[x-osc_lvl-x_size,y]
            pilImage.save("renders/{0}_{1}/render_{0}_{1}_{2}.png".format(todays_date, current_time, iteration, path))

# Program
HorizontalOscillation(change_rate)




