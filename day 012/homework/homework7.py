print(type(10))
print(type("10"))
print(type(5.5))



number = int(input("what's your number?" ))
print(type(number))



a = 5
b = 5
print(a == b) 

x = 10
y = 15
print(x != y)  


age = 18
required_age = 21
print(age < required_age) 


score = 75
passing_score = 60
print(score > passing_score)  

hours_worked = 40
standard_hours = 40
print(hours_worked <= standard_hours)


# and
print ( 5 < 10 and 5 < 15 )
print( 10 > 8 and 10 < 5 )
print( 15 < 10 and 15 > 30 )
print(5 > 15 and 5 > 3)
# or
print ( 5 < 115 or 5 < 15 )
print( 10 > 3 or 10 < 5 )
print( 15 < 10 or 25 > 30 )
print(5 > 15 or 50 > 33)


age = (str(input("what's your age? ")))
print(type(age))
age = (int(input("what's your age? ")))
print(type(age))
age = (float(input("what's your age? ")))
print(type(age))


name =(str(input("what's your name? "))) 
age = (int(input("what's your age? ")))
if age < 18:
    print('your are kid. ')
elif age >= 18:
    print("you are an adult. ")