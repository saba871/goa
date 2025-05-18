def lowercase_count(string):
    count = 0
    for i in string:
        if i.islower():
            count += 1
    return count

def digitize(n):
    return [int(x) for x in str(n)[::-1]]

def merge_arrays(arr1, arr2):
    third = arr1 + arr2
    result = []
    for num in third:
        if num not in result:
            result.append(num)
    return sorted(result)

def compute_sum(n):
    total = 0
    for i in range(1,n + 1):
        if i < 10:
            total += i
        else:
            digits = str(i)
            digit_sum = 0
            for digit in digits:
                digit_sum += int(digit)
            
            total += digit_sum
    return total


def mine_location(field):
    index = 0
    for i in field:
        if i.count(1) == 1:
            return [index, i.index(1)]
        index += 1


def row_weights(array):
    team1 = 0 
    team2 = 0
    for i in range(len(array)):
        if i % 2 == 0:
            team1 += array[i]
        else:
            team2 += array[i]
    return team1 , team2

def DNA_strand(dna):
    result = ""
    for i in dna:
        if i == "A":
            result += "T"
        elif i == "T":
            result += "A"
        elif i == "C":
            result += "G"
        elif i == "G":
            result += "C"
    return result