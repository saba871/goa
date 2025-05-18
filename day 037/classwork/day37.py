def reverseBits(n):
    bynary = bin(n)[2:]
    result = 0
    index = 0
    for i in bynary[::-1]:
        result += int(i) * (2 ** (len(bynary) - (index + 1)))
        index += 1
    return result
print(reverseBits(417))


def calculator(txt):
    strList = txt.split()
    
    s1 = len(strList[0])
    s2 = len(strList[2])
    
    if strList[1] == "+": return (s1 + s2) * "."
    elif strList[1] == "-": return (s1 - s2) * "."
    elif strList[1] == "*": return (s1 * s2) * "."
    
    return (s1 // s2) * "."