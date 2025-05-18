    # 2)  შექმენით string-ების სია, გადაუარეთ მას for loop-ით და დაბეჭდეთ სიაში არსებული ყველა სიტყვის სიმბოლოთა რაოდენობა
strings = ["apple", "banana", "cherry", "date", "elderberry"]
for string in strings:
    print(string + "-symbol's sum is " + str(len(string)))
    # 3) შექმენით რიცხვების სია, while loop-ის გამოყენებით გაიგეთ ამ სიაში ყველა ლუწი რიცხვის ჯამი და დაპრინტეთ
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum = 0
index = 0
while index < len(numbers):
    if numbers[index] % 2 == 0:
        sum = sum + numbers[index]
    index = index + 1
print("even number's sum is ",sum)
    # 4) შექმენით სახელების სია, გადაუარეთ მას for loop-ით და დაბეჭდეთ ამ სიიდან მხოლოდ ის სახელები, რომლებიც იწყებიან "A"-ზე
names = ["saba","axmedi","luka","aladini","ani","mari"]
for name in names:
    if name [0] == "a":
        print(name) 
    # 5) შექმენით რიცხვების სია, სადაც გექნებათ დუბლიკატები. გადაუარეთ მას for loop-ით და დაბეჭდეთ მხოლოდ ისეთი რცხვების ჯამი, რომლებიც არ მეორდება სიაში
numbers = [1, 2, 3, 2, 4, 5, 7, 8, 9, 6, 7, 8, 9]
no_duplicants = []
for number in numbers:
    if no_duplicants.count(number) == 0:
        no_duplicants.append(number)
print(no_duplicants)
    # 7) შექმენით სია შემდგარი 5 ელემენტისგან. slicing-ის გამოყენებით დაბეჭდეთ მე-3 და მე-4 ელემენტები
symbols = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(symbols[2:4])
    # 8) შექმენით რიცხვების სია, შემდგარი 10 ელემენტისგან. slicing-ის გამოყენებით დაბეჭდეთ სიის ყოველი მეორე ელემენტი
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers[0:10:2])
    # 9) შექმენით ცვლადი, სადაც შეინახავთ string-ს. დაბეჭდეთ სთრინგის ბოლო სამი სიმბოლო(გამოიყენეთ slicing და მინუსიანი ინდექსები)
name = "cars"
print(name[1:5])
    # 10) შექმენით რიცხვების სია, დაბეჭდეთ სია თავიდან ბოლომდე slicing-ის გამოყენებით 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers[0:10])
#     # 6) შექმენით პროგრამა, რომელიც მომხარებელს შემოატანინებს რიცხვს და დაბეჭდავს 1-დან შემოტანილ რიცხვამდე ყველა მარტივ რიცხვს
number = int(input("Please enter a number: "))
result = []
for num in range(1, number):
    dividers = []
    for i in range(1, num + 1):
        if num % i == 0:
            dividers.append(i)
    if len(dividers) == 2:
        result.append(num)
print(result)