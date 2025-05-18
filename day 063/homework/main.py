def prime_factors (n):
    result = []
    divisor = 2
    while n > 1:
        while n % divisor == 0:
            result.append(divisor)
            n =n // divisor
        divisor += 1
    return result


def vowel_indices(word):
    vowels = "aeiouyAEIOUY"
    result = []  
    for char in range(len(word)):
        if word[char] in vowels:
            result.append(char + 1) 
    return result


def arrays_similar(seq1, seq2): 
    if len(seq1) != len(seq2):
        return False
    for char in seq1:
        if seq1.count(char) != seq2.count(char):
            return False
    return True