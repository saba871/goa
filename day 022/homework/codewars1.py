# Write a function `greet` that returns "hello world!"
def greet():
    return "hello world!"
# This code does not execute properly. Try to figure out why.
def multiply(a, b):
    return a * b
print(multiply(5,3))
# Complete the solution so that it reverses the string passed into it.
def solution(string):
    return string[::-1]
# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative
def make_negative(n):
    if n >= 0:
        return -n
    else:
        return n
# You get an array of numbers, return the sum of all of the positives ones.
def positive_sum(arr):
    return sum(i for i in arr if i > 0)
# We need a function that can transform a number (integer) into a string.
def number_to_string(num):
    return str(num)
# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
def bool_to_word(boolean):
    return "yes" if boolean else "no"
# Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
def opposite(number):
    return -number
# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
def remove_char(s):
    return s [1:-1]
# Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
def repeat_str(repeat, string):
    return string * repeat
# Create a function that takes a number as an argument, and this function must print all numbers from 1 to the number passed
def summation(num):
    return sum(range(1, num + 1))