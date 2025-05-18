def square_sum(numbers):
    result = 0
    
    for i in numbers:
        result += i ** 2
    return result

def smaller(arr):
    result = []
    for i in range(len(arr)):
        count = 0
        for x in arr[i+1:]:
            if arr[i] > x:
                count += 1
        result.append(count)
    return result

def missing_values(seq): 
    x = 0
    y = 0

    for i in seq:
        if seq.count(i) == 1:
            x = i
        elif seq.count(i) == 2:
            y = i
    return x * x * y

def largest_pair_sum(numbers): 
    return sum(sorted(numbers)[-2:])