print("v1.5")

print("xSize: ")
xSize = 129--io.read()
print("ySize: ")
ySize = 129--io.read()
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

function refuelLoop()
	thingCoal = 1
	while (thingCoal) do
		slot = 1
		for f = 1, 16 do -- loop through the slots
		  turtle.select(f) -- change to the slot
		  if turtle.refuel(0) then -- if it's valid fuel
			turtle.refuel(turtle.getItemCount(f)) -- consume all the fuel
			break
		  end
		  slot = f
		end
		
		if (turtle.getItemCount(turtle.getSelectedSlot()) == 0) and (turtle.refuel(0)) then
			print("Need Coal")
			thingCoal = io.read()
		end
		break
	end
end

function blockLoop()
	thing = 1
	while (thing) do
		slot = 1
		for f = 1, 16 do -- loop through the slots
		  turtle.select(f) -- change to the slot
		  local data = turtle.getItemDetail(f)
		  if (turtle.getItemCount(f) > 0) then 
			print(data.name)
			  if (data.name == "minecraft:cobblestone") then -- if it's valid fuel
				break
			  end
		  end
		  slot = f
		end
		
		if (turtle.getItemCount(turtle.getSelectedSlot()) == 0) then
			print("Need Cobblestone")
			thing = io.read()
		end
		break
	end
end

function mapRange(a1, a2, b1, b2, s)
	return b1 + (s - a1) * (b2 - b1) / (a2 - a1);
end

for y=0,ySize-1 do
	for x=0,xSize-1 do
		-- print x,y
		io.write("x,y\n")
		io.write(x)
		io.write(", ")
		io.write(y)
		io.write("\n")
		
		if (y%2 == 0) then
			cx = mapRange(0, xSize-1, xCoord-20/Zoom, xCoord+20/Zoom, x)
		else 
			cx = mapRange(0, xSize-1, xCoord+20/Zoom, xCoord-20/Zoom, x-2)
		end
		cy = mapRange(0, ySize-1, yCoord+20/Zoom, yCoord-20/Zoom, y)
		zx = cx
		zy = cy
		
		for i=1,t do
			while (turtle.getFuelLevel() <= 1) do
				refuelLoop()
			end
				
			tmp = zx
			zx = zx*zx - zy*zy + cx
			zy = 2*tmp*zy + cy
			
			if ((zx*zx + zy*zy) > 4) then
				break
			end 
			
			if (i == t-1) then
				if (turtle.getItemCount(turtle.getSelectedSlot()) == 0) then
					blockLoop()
				end
				turtle.placeDown()
			end
		end
		turtle.dig()
		turtle.forward()
	end
	if (y < ySize-1) then
		if (y%2==0) then
			turtle.forward()
			turtle.turnRight()
			turtle.forward()
			turtle.turnRight()
		else 
			turtle.forward()
			turtle.turnLeft()
			turtle.forward()
			turtle.turnLeft()
		end
	end
end
io.close(file)
