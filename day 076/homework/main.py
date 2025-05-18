def filter_string(string):
    result=""
    for i in string:
        if i in "1234567890" :
            result= result + i
    return int(result)


def up_array(arr):
    if not arr:
        return None
    num_str = ''
    for num in arr:
        num_str += str(num)
    num = int(num_str) + 1
    result = []
    for digit in str(num):
        result.append(int(digit))
    
    return result


def highest_rank(arr):
    result = [arr[0]]
    
    count = arr.count(arr[0])
    
    for i in arr[1:]:
        if i not in result:
            if arr.count(i) > count:
                count = arr.count(i)
                result = [i]
            elif arr.count(i) == count:
                result.append(i)
    return max(result)