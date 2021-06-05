pico-8 cartridge // http://www.pico-8.com
version 32
__lua__
w = 129
h = 129
t = 25
xSize = w
ySize = h
xSize = xSize-1
ySize = ySize-1
res = 0.5

xCoord = 0
yCoord = 0
Zoom = 10

NUM_COLORS = 4
COLOR_OFFSET = 1
startcolor = 0

function smoothColor(i, x, y)
	out = (i/4)%(NUM_COLORS+COLOR_OFFSET+startcolor)
	iModFour = i%4
	
	if (iModFour == 0) then
		if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
			out = out-NUM_COLORS+COLOR_OFFSET+startcolor
		end
	elseif (iModFour == 1) then
		if (y%2 > 0) then
			if (x%2 >0) then
				if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
					out = out-NUM_COLORS+COLOR_OFFSET+startcolor
				end
			else
				out = out+1
				if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
					out = out-NUM_COLORS+COLOR_OFFSET+startcolor
				end
			end
		else
			if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
				out = out-NUM_COLORS+COLOR_OFFSET+startcolor
			end
		end
	elseif (iModFour == 2) then
		if (y%2 > 0) then
			if (x%2 > 0) then
				if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
					out = out-NUM_COLORS+COLOR_OFFSET+startcolor
				end
			else
				out = out+1
				if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
					out = out-NUM_COLORS+COLOR_OFFSET+startcolor
				end
			end
		else
			if (x%2 > 0) then
				out = out+1
				if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
					out = out-NUM_COLORS+COLOR_OFFSET+startcolor
				end
			else
				if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
					out = out-NUM_COLORS+COLOR_OFFSET+startcolor
				end
			end
		end
	elseif (iModFour == 3) then
		if (y%2 > 0) then
			if (x%2 > 0) then
				out = out+1
				if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
					out = out-NUM_COLORS+startcolor
				end
			else
				if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
					out = out-NUM_COLORS+startcolor
				end
			end
		else
			out = out+1
			if (out > NUM_COLORS+COLOR_OFFSET+startcolor) then
				out = out-NUM_COLORS+startcolor
			end
		end
		
		if (out < COLOR_OFFSET+startcolor) then
			out = out-1
		end
	end
	return out
end

function mapRange(a1, a2, b1, b2, s) 
    return b1 + (s - a1) * (b2 - b1) / (a2 - a1)
end

function remapColor(c)
	c = flr(c)
	if (c==0) then
		return 0
	end
	if (c==1) then
		return 1
	end
	if (c==2) then
		return 13
	end
	if (c==3) then
		return 6
	end
	if (c==4) then
		return 7
	end
end

while (true) do	
	aButton = 0
	cls(0)
	if (res < 1) then res = 1 end
	
	xSizeScaled = xSize/res
	ySizeScaled = ySize/res
		
	for y=0,ySizeScaled  do
		for x=0,xSizeScaled do
			i = 0
		    cx = xCoord - 20 / Zoom + x * 40 / (Zoom * xSizeScaled)
			cy = yCoord + 20 / Zoom - y * 40 / (Zoom * ySizeScaled)
		    zx = cx
		    zy = cy
		   
			for i=0,t do
				tmp = zx
				zx = zx*zx - zy*zy + cx
				zy = 2*tmp*zy + cy
			   
			    if ((zx*zx + zy*zy) > 4) then
					pset(x, y, remapColor(smoothColor(i,x,y)))
					break
			    end
			   
			    if (i == t-1) then
					pset(x,y,0)
			    end
		   end
		end
	end
	cursor(0,0,7)
	print("x: ")
	cursor(8,0,7)
	print(xCoord)
	cursor(0,8,7)
	print("y: ")
	cursor(8,8,7)
	print(yCoord)
	cursor(0,16,7)
	print("i: ")
	cursor(8,16,7)
	print(t)

	while (aButton != 1) do
		if btn(0,0) then	
			xCoord = xCoord-2/Zoom
			aButton = 1
		end
		if btn(1,0) then	
			xCoord = xCoord+2/Zoom
			aButton = 1
		end
		if btn(2,0) then	
			yCoord = yCoord+2/Zoom
			aButton = 1
		end
		if btn(3,0) then	
			yCoord = yCoord-2/Zoom
			aButton = 1
		end
		if btn(4,0) then	
			Zoom = Zoom*1.25
			aButton = 1
		end
		if btn(5,0) then	
			Zoom = Zoom/1.25
			aButton = 1
		end
		if btn(0,1) then	
			t = t+25;
			aButton = 1
		end
		if btn(1,1) then	
			t = t-25;
			if (t < 25) then
				t = 25
			end
			aButton = 1
		end
		if btn(2,1) then	
			res /= 2
			aButton = 1
		end
		if btn(3,1) then	
			res *= 2
			aButton = 1
		end
	end
end

cursor(0,0,0)