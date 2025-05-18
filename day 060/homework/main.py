# 1
def double_integer(i):
    return i * 2
# 2
def sum_array(a):
    return sum(a)
# 3
def paperwork(n, m):
    if n > 0 and m > 0:
        return n * m
    else:
        return 0
# 4
def make_upper_case(s):
    return s.upper()
# 5
def simple_multiplication(number) :
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9
# 6
def invert(lst):
    if lst == []:
        return []
    result = []
    for i in lst:
        result.append(-i)
    return result
# 7
def find_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)
# 8
def grow(arr):
    if not arr: 
        return 1
    product = 1
    for num in arr:
        product *= num 
    return product
# 9
def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
    count_positives = 0
    sum_negatives = 0

    for num in arr:
        if num > 0:
            count_positives += 1
        elif num < 0:
            sum_negatives += num

    return [count_positives, sum_negatives]
# 10
def dna_to_rna(dna):
    return dna.replace("T","U")