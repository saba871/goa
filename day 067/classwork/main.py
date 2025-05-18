def dup(arry):
    result = []
    for string in arry:
        new_string = ""
        for i in range(len(string)):
            if i == 0 or string[i] != string[i-1]:
                new_string += string[i]
        result.append(new_string)
    return result



def pyramid(n):
    result = []  
    for i in range(n): 
        x = [1] * (i + 1)  
        result.append(x) 
    return result



def shortest_steps_to_num(num):
    step = 0
    while num > 1:
        if num % 2 == 0:
            num = num // 2
        else:
            num = num - 1
        step += 1
    return step


def count_smileys(arr):
    eyes = [':',';']
    noises = ['','-','~']
    mouses = [')','D']
    result = 0
    for eye in eyes:
        for noise in noises:
            for mouse in mouses:
                face = eye + noise + mouse
                result += arr.count(face)
    return result

print(count_smileys([':D',':~)',';~D',':)']))



def count_smileys(arr):
    eyes = [":", ";"]
    nose = ["-", "~"]
    mouth = [")", "D"]
    count = 0
    for emoji in arr:
        if len(emoji) == 2 and (emoji[0] in eyes and emoji[1] in mouth):
            count += 1
        elif len(emoji) == 3 and (emoji[0] in eyes and emoji[1] in nose and emoji[2] in mouth):
            count += 1
    
    return count