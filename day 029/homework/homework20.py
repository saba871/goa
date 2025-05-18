# Create a function that takes a number as an argument, and this function must print all numbers from 1 to the number passed

def random(numbers):
  for i in range(1, numbers):
    print(i)
random(10)

# Create a function that takes two numbers as arguments and returns the first number to the power of the second number.

def multification(num1, num2):
  return num1 ** num2
print(multification(2, 3))
