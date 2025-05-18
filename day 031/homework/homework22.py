# 2) შექმენით სია, სადაც გექნებათ 5 ელემენტი. წაშალეთ სიის მე-3 ელემენტი და დაამატეთ ახალი მე-0 ინდექსზე. 
# საბოლოოდ დააბრუნეთ ეს სია


numbers = ["a","b","c","d","r","f"]

del numbers[3]

numbers.insert(0,"d")

print(numbers)

# 4) შექმენით ფუნქცია manual_pop, რომელსაც გადაეცემა ორი არგუმენტი, სია და ინდექსი. წაშალეთ სიიდან, გადმოცემულ 
# ინდექსზე მყოფი ელემენტი. საბოლოოდ კი დააბრუნეთ ეს სია(არ გამოიყენოთ .pop ფუნქცია)


def manual_pop(numbers,index):

    for number in numbers:
        del numbers[index]

        return numbers
    
print(manual_pop([1,2,3,4,5,6],3))

# 3)შექმენით ფუნქცია manual_len, რომელსაც გადაეცემა სთრინგი ან სია, ხოლო ფუნქციამ უნდა დააბრუნოს გადმოცემული სთრინგის/სიის სიგრძე
# (არ გამოიყენოთ len-ი)

def manual_len(strirg,random_list):

    count = 0

    for i in strirg:

            count += 1

    return count

random_list = ["openhaimer"] 
print(manual_len('openhaimer',random_list))