# 2) შექმენით სია სადაც გექნებათ რიცხვები. for loop-ის გამოყენებით იპოვეთ ამ სიაში ყველაზე დიდი რიცხვი
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
largestnumber = numbers[0]
for number in numbers:
    if number > largestnumber:
        largestnumber = number
print("largerst number is", largestnumber)  
# 3) შექმენით რიცხვების სია და დაბეჭდეს სიის თითოეული რიცხვის ფაქტორიალი
list = [1, 2, 3, 4, 5]
# 4) შექმენით სია სადაც გექნებათ რიცხვები. for loop-ის გამოყენებით იპოვეთ ამ სიაში ყველაზე პატარა რიცხვი
numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
smallestnum = numbers[0]
for number in numbers:
    if number < smallestnum:
        smallestnum = number
print("smalest num is",smallestnum) 
# 5) შექმენით რიცხვების სია სადაც გექნებათ დადებითი და უარყოფითი რიცხვები, შემდეგ შექმენით ახალი სია სადაც გექნებათ მხოლოდ უარყოფითი რიცხვები და დაბეჭდეთ ის(გამოიყენეთ while).
random= [-4, -3, -2, -1, 1, 2, 3, 4, 5]
negative =[]
index = 0
while index < (len(random)):
    if random[index] < 0:
        negative.append(random[index])
    index = index + 1
print(negative)
# 6) შექმენით რიცხვების სია და დაპრინტეთ სიის თითოეული ელემენტი უკუღმა(გამოიყენეთ range() ფუქნცია ან შექმენით ცვლადი)
random_nums = [1, 2, 3, 4]
for i in range(len(random_nums)-1,-1,-1):
    print(random_nums[i])
# 7) შექმენით სიმბოლოების სია, სადაც იქნება დუბლიკატები. შექმენით ახალი სია სადაც ყველა სიმბოლო მხოლოდ ერთხელ გვხვდება
symbolist=["/","!","%","*","()"]
newliast = (set(symbolist))
print(newliast)
# 8) შექმენით ცლვადი სადაც შეინახავთ string-ს, შემდეგ შექმენით ახალი ცვლადი სადაც შეინახავთ ამ სტრინგს შემოტრიალებულად და დაბეჭდეთ ის
text = "hello my friend"
reverse = text[::-1]
print(reverse)
# 9) დაწერეთ პროგრამა, რომელიც მომხამრებელს შემოატანინებს რიცხვს და აბრუნებს სიას, სადაც იქნება გამდოცემული რიცხვის ყველა გამყოფი
number = int(input("Enter a number: "))
divisors = []
for i in range(1, number + 1):
    if number % i == 0:
        divisors.append(i)
print(divisors)
# 10) შექმენით პროგრამა, რომელიც მომხარებელს შემოატანინებს წელს და დაპრინტავს რომელი საუკუნეა ის
years = int(input("Enter the number of years: "))
century = years // 100
remaining_years = years % 100
if remaining_years == 0:
    print(century)
else:
    print(century + 1)