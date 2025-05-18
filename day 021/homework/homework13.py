# 2) for ციკლით მომხარებელს შემოატანინეთ 5 ელემენტი სიაში და დაბეჭდეთ სია
# I.for ციკლით შემოვიტანოთ 5 ელემენტი
Element = []
for i in range(5):
# II.ეს გავაკეთებინოთ მომხმარებელს  და შევიტანოთ სიაში 
    Element.append(int(input("enter eny symbol: " )))
# III.გამოვიტანოთ ტერმინალში
print(Element)

# 3) შექმენით ხილების სია, სადაც გექნებათ მინიმუმ 3 ელემენტი. მომხარებელს შემოატანინეთ თავისი საყვარელი ხილი, თუ სიის ბოლო ელემენტის ინდექსი არის ლუწი ჩაამატეთ შემოტანილი ხილი სიაში, სხვა შემთხვევაში არ ჩაამატოთ 
# I.შემოგვაქცს სია 
fruits = ["apple", "banana", "cherry", "orange"]

last_index = len(fruits) - 1

user_fav = input("Enter your favorite fruit: ")

if last_index % 2 == 0:
    fruits.append(user_fav)

print(fruits)

# 4) შექმენით სია შემდგარი სახელებისგან. მომხარებელს შემოატანინეთ მისი სახელი, თუ მისი სახელი იქნება 5 სიმბოლოს ტოლი ან მეტი. ჩაამატეთ სიაში, სხვა შემთხვევაში დაუბეჭდეთ "Name is too short"
# I.გავაკეთოთ სია სახელებით
names = ["saba","nika","luka","giorgi"]
# II.მომხმარებელს სემოვატანინოთ მისი სახელი რათა შევიტანოთ სიაში
name = (input("tell me your name: " ))
# III.თუ მისი სახელი იქნება 5 სიმბოლოზე ნაკლები ვუთხრათ "Name is too short" სხვა შემთხვევაში შევიტანოთ
if len(name) < 5:
    print("Name is too short")
else:
    names.append(name)
    print(names)

# 5) შექმენით სია შემდგარი 10 ელემენტისგან. დაპრინტეთ ის და მომხარებელს შემოატანინეთ რიცხვი 1-დან 10-ჩათვლით. შემდეგ წაშალეთ სიის ის ელემენტი რომელი რიცხვიც გადმოგეცათ და დაპრინტეთ განახლებული სია
# I.შევქმნათ სია
list = [0,1,2,3,4,5,6,7,8,9,10]
print(list)
# II.მომხმარბელს შემოვატანინოთ რიცხვი 1-იდან 10-ის ჩათვლით
user_number = int(input("enter any number form 1 to 10 :"))
list.pop(user_number - 1)
print(list)




#   # 0  1   2  3 4  5  6  7  8  9
# numbers = [12, 13, 21, 28, 27, 81, 92, 101, 108]

# evens = []
# odds = []

# # 0 1 2 3 4 5 6 7 8 9
# # print(range(len(numbers)))
        
# for index in range(len(numbers)):
#     if numbers[index] % 2 == 0:
#         evens.append(numbers[index])
#     else:
#         odds.append(numbers[index])

# print("Evens:", evens)
# print("Odds:", odds)


# numbers = [12, 13, 21, 28, 27, 81, 92, 101, 108]

# evens = []
# odds = []

# for number in numbers:
#     if numbers % 2 == 0:
#         evens.append(numbers)
#     else:
#         odds.append(numbers)