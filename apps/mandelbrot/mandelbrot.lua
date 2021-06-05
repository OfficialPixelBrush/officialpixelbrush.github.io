print("v1.5")

print("xSize: ")
xSize = 52--io.read()
print("ySize: ")
ySize = 21--io.read()
print("Zoom: ")
Zoom = 16 --io.read()
print("xCoord: ")
xCoord = -0.75 --io.read()
print("yCoord: ")
yCoord = 0 --io.read()
print("Iterations: ")
t = 200 --io.read()

--file = io.open ("out.txt", "a")
--io.output(file)

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

function refuelLoop()
	for f = 1, 16 do -- loop through the slots
	  turtle.select(f) -- change to the slot
	  if turtle.refuel(0) then -- if it's valid fuel
		local halfStack = math.ceil(turtle.getItemCount(f)/2) -- work out half of the amount of fuel in the slot
		turtle.refuel(halfStack) -- consume half the stack as fuel
	  end
	end
end

function blockLoop()
	if (thing) then 
		print("Need blocks")
		thing = io.read()
	end
end

function mapRange(a1, a2, b1, b2, s)
	return b1 + (s - a1) * (b2 - b1) / (a2 - a1);
end

function remapColor(c)
	c = math.floor(c)
	if (c==0) then
		term.setBackgroundColor(colors.black)
	end
	if (c==1) then
		term.setBackgroundColor(colors.gray)
	end
	if (c==2) then
		term.setBackgroundColor(colors.lightGray)
	end
	if (c==3) then
		term.setBackgroundColor(colors.white)
	end
end

for y=0,ySize-1 do
	for x=0,xSize-1 do
		-- print x,y
		--io.write("x,y\n")
		--io.write(x)
		--io.write(", ")
		--io.write(y)
		--io.write("\n")
		
		--if (y%2 == 0) then
			cx = mapRange(0, xSize-1, xCoord-30/Zoom, xCoord+30/Zoom, x);
		--else 
			--cx = mapRange(0, xSize-1, xCoord+20/Zoom, xCoord-20/Zoom, x);
		--end
		cy = mapRange(0, ySize-1, yCoord+20/Zoom, yCoord-20/Zoom, y);
		zx = cx
		zy = cy
		
		for i=1,t do
			--while (turtle.getFuelLevel() <= 1) do
			--	refuelLoop()
			--end
				
			tmp = zx
			zx = zx*zx - zy*zy + cx
			zy = 2*tmp*zy + cy
			
			if ((zx*zx + zy*zy) > 4) then
				remapColor(smoothColor(i,x,y))
				io.write(" ")
				break
			end 
			
			if (i == t-1) then
				term.setBackgroundColor(colors.black)
				io.write(" ")
				
				--blockLoop()
				--turtle.placeDown()
			end
		end
		--turtle.dig()
		--turtle.forward()
	end
	if (y < ySize-1) then
		io.write("\n")
	end
	if (y%2 == 0) then
		--turtle.turnRight()
		--turtle.dig()
		--turtle.forward()
		--turtle.turnRight()
	else 
		--turtle.turnLeft()
		--turtle.dig()
		--turtle.forward()
		--turtle.turnLeft()
	end
end

while (true) do

end
--io.close(file)
