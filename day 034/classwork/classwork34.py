


def capitals(word):
    
    result = []
    for letter in range(len(word)):
        if word[letter].isupper():
            result.append(letter)
    return result
print(capitals("SaBA"))