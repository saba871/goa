# 2) დაითვალეთ რამდენი ლუწი რიცხვია 1-დან 50-ის ჩათვლით(გამოიყენეთ for loop-ი)
count = 0
for number in range(1, 51):
    if number % 2 == 0:
        count = count + 1
print(count)
# 3) დაბეჭდეთ 1-დან 100-მდე ყველა ლუწი რიცხვის საშუალო არითმეტიკული. გამოიყენეთ while loop-ი.(დაგჭირდებათ ორი ცვლადის შექმნა, ერთში შეინახავთ ჯამს, მეორეში რაოდენობას)
sum_even = 0  
count_even = 0  
number = 1 
while number <= 100:
    if number % 2 == 0: 
        sum_even += number  
        count_even += 1  
    number += 1
if count_even > 0:
    average_even = sum_even / count_even
    print("even num's average is: ", average_even)
# 4) დაბეჭდეთ ყველა რიცხვი 1-დან 30-მდე, რომელიც იყოფა 3-ზე(გამოიყენეთ while loop-ი)=
number = 1
while number <= 30:
    if number % 3 ==0:
        print(number)
    number += 1 
# 5) მომხარებელს შემოატანინეთ რიცხვი და დაბეჭდეთ მიღებული რიცხვის ყველა გამყოფი(გამოიყენეთ for loop-ი)
number = int(input("Enter any number: "))
for i in range(1, number + 1):
    if number % i == 0:
        print(i)
# 6) დაწერეთ პროგრამა, რომელიც მომხარებელს შემოატანინებს რიცხვს და დაბეჭდავს ეს რიცხვი დადებითია, უარყოფითია თუ 0-ია
user_number = int(input("enter any number: "))
if user_number < 0:
    print("your number is Negative")
else:
    print("your number is positive ")
# 8) მომხმარებელს შემოატანინეთ რიცხვი 1-დან 100-ის ჩათვლით(ეს იქნება მისი ქულა). თუ მაგალითად 90-დან 100-ის ჩათვლით ექნება ქულა გამოუტანეთ "Your grade is A", თუ 80-დან 90-მდე, გამოუტანეთ "Your grade is B", თუ 70-დან 80-მდე გამოუტანეთ "Your grade is C", სხვა შემთხვევაში გამოუტანეთ "Your grade is D"
score = int(input("Please enter your score: "))

if score >= 90 and score <= 100:
    print("Your grade is A")
elif score >= 80 and score < 90:
    print("Your grade is B")
elif score >= 70 and score < 80:
    print("Your grade is C")
else:
    print("Your grade is D")
# 7) დაწერეთ პროგრამა, რომელიც მომხარებელს შემოატანინებს წელს და გაიგებს არის თუ არა ის ნაკიანი(წელი როდესაც თებერვალში 29 დღე გვაქვს). ნაკიანი არის წელი თუ ის იყოფა 4-ზე და არ იყოფა 100-ზე ან იყოფა 400-ზე.(გამოიყენეთ and და or ოპერატორები)
year = int(input("Please entar a year: "))

if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
    print("Es aris nakiani weli")
else:
    print("Es ar aris nakiani weli")