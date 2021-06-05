from PIL import Image
import PIL.ImageOps   

xCoord = -0.75 #float(input("xCoord: "))
yCoord = 0 #float(input("yCoord: "))
Zoom = 16 #float(input("Zoom: "))
xSize = 512 #float(input("xSize: "))
ySize = 512 #float(input("ySize: "))
t = 256 #int(input("Iterations: "))

def mapRange(a1, a2, b1, b2, s):
    return b1 + (s - a1) * (b2 - b1) / (a2 - a1)


im = Image.new('RGB', (int(xSize),int(ySize)), color = 'white')
pixels = im.load()

for y in range (int(ySize)):
    for x in range (int(xSize)):
        
            
            cx = mapRange(0, xSize-1, xCoord-20/Zoom, xCoord+20/Zoom, x)
            cy = mapRange(0, ySize-1, yCoord+20/Zoom, yCoord-20/Zoom, y)
            zx = cx
            zy = cy
            
            for i in range(int(t)):
                tmp = zx
                zx = zx*zx - zy*zy + cx
                zy = 2*tmp*zy + cy
                
                if ((zx*zx + zy*zy) > 4):
                    pixels[x, y] = (i, i, i)
                    break
            
            if (i == t):
                pixels[x, y] = (0, 0, 0)
im.save("pythong.jpg", "JPEG")
