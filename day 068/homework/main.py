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


def pyramid(n):
    result = []  
    
    for i in range(n): 
        x = [1] * (i + 1)  
        result.append(x) 
        
    return result



def dup(arry):
    result = []
    
    for string in arry:
        new_string = ""
        for i in range(len(string)):
            if i == 0 or string[i] != string[i-1]:
                new_string += string[i]
        result.append(new_string)
    
    return result


def tringle(n):
    if n % 2 == 0: n -= 1
    spaces = n // 2

    for i in range(1, n + 1, 2):
        print(spaces * " " + "*" * i)
        spaces -= 1
tringle(5)