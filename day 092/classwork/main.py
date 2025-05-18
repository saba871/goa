def fake_bin(x):
    result = ""
    
    for digit in x:
        if int(digit) < 5:
            result += '0'
        else:
            result += '1'
    
    return result


# 
def longest_collatz(arr):
    result = []
    
    for number in arr:
        count = 0
        while number != 1:
            if number % 2 == 0:
                number /= 2
            else:
                number = 3 * number + 1
            count += 1
        result.append(count)
    
    index = result.index(max(result))
    
    return arr[index]

# 
def is_alt(s):
    vowels = "aeiou"
    
    for index in range(1, len(s)):
        if s[index] in vowels and s[index - 1] in vowels:
            return False
        elif s[index] not in vowels and s[index - 1] not in vowels:
            return False
    
    return True
# 
def elevator_distance(array):
    result = 0
    
    for index in range(1, len(array)):
        
        result += abs(array[index - 1] - array[index])
    return result