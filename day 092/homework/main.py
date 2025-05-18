# 
def multiplication_table(size):
    result = []
    for i in range(1, size + 1):
        row = []
        
        for char in range(1, size + 1):
            row.append(i * char)
            
        result.append(row)
    return result