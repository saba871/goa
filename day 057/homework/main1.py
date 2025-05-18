def gimme(input_arr):
    sorted_arr = sorted(input_arr)
    middle_value = sorted_arr[1]
    return input_arr.index(middle_value)

def sum_of_minimums(numbers):
    result = 0
    for number in numbers:
        result += min(number)
    return result

def even_fib(n):
    a , b = 0 , 1
    even = 0
    while a < n:
        if a % 2 == 0:
            even += a
        a,b = b, b + a 
    return even