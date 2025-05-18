def points(games):
    point = 0
    for i in games:
        if i[0] > i[2]:
            point += 3
        elif i[0] == i[2]:
            point += 1
        elif i[0] < i[2]:
            point += 0
    return point

# 
def get_average(marks):
    return sum(marks) // len(marks)


# removre every second elemnt

def remove_every_other(lst):
    result = []
    for char in range(len(lst)):
        if char % 2 == 1:
            result.append(lst[char])
        return result


def no_boring_zeros(n):
    if n == 0:
        return 0
    while n % 10 == 0:
        n //= 10
    return n
    

def shorten_to_date(long_date):
    result = ""
    for i in long_date:
        if i != ',':
            result += i
        if i == ',':
            break
    return result
print(shorten_to_date("Monday February 2, 8pm"))


def is_uppercase(inp):
    if inp == inp.upper():
        return True
    return False
    