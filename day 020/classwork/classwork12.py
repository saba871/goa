# number = 0
# while number < 10:
#    number += 1
#    print("")


list1 = [1,2,4,3,5,6,7,8,9,10]
list2 = []
for i in list1:
    if i % 2 == 0:
        list2.append(i)

print(list2)