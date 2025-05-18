from turtle import *

#we want to paint a house
speed(5)
width(5)# type: ignore
color("purple")

#step 1: draw a squre
forward(200) # type: ignore
left(90) # type: ignore

forward(200) # type: ignore
left(90)# type: ignore

forward(200) # type: ignore
left(90) # type: ignore

forward(200)# type: ignore
left(90)# type: ignore
# end of squre

# drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)    # height of the door 
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

color("purple")
right(-30)
forward(200)
right (90)
forward(200)
right(90)
forward(200)

right(30)
forward(200)

right(60)
forward(200)

color("red")
right(120)
forward(200)

color("purple")
right(60)
forward(200)

penup()
goto(150, 150)
pendown()
begin_fill()
color("brown")
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
end_fill()

penup()
goto(50, 150)
pendown()
begin_fill()
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
end_fill()



exitonclick() # type: ignore