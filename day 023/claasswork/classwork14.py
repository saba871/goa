
# 1/ შექმენით ფუნქიცა, manual_find, რომელსაც გადაეცემა არგუმენტად სთრინგიმ და ერთი სიმბოლო,
#  რომელიც უნდა ვიპოვოთ ამ სთრინგში.

def manual_find(string,symbol):

    for i in range (len(string)):
        if string[i] == symbol:
            return i

result = manual_find("hello","l")
print(result)

# 2/ შექმენით ფუნქცია manual_count, რომელსაც არგუმენტად გადაეცემა რიცხვბის სია, და ერთი რიცხვი, 
# რომლის რაოდენობაც უნდა ვიპოვოთ ამ სიაში. დააბრუნეთ მიღებული რაოდენობა

def manuual_count(list_1,num):

    count = 0
    for number in list_1:
        if number == num:
            count += 1

    return count
    
print(manuual_count([1,1,1,1,1],1))