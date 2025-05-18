# 1) შექმენით სია შემდგარი მინიმუმ 5 ელემენტისგან. წაუშალეთ ამ სიას ბოლო ორი ელემენტი და დაბეჭდეთ ის
symbols = ["saba","nika","luka","levani","giorgi"]
print(symbols[0:3])
# 2) შექმენით ცვლადი, სადაც შეინახავთ სთრინგს. slicing-ის მეშვეობით დაბეჭდეთ ის უკუღმა
string = "saba"
reverse = string[::-1]
print(reverse)
# 3) შექმენით რიცხვების სია შემგარი 10 მინიმუმ ელემენტისგან. გაიგეთ ამ სიაში ყველაზე პატარა და დიდი რიცხვი, შემდეგ კი დაბეჭდეთ მათი ჯამი
numbers = [1,2,3,4,5,6,7,8,9,10]
min_number = numbers[0]
max_number = numbers[0]
for number in numbers:
    if number < min_number:
        min_number = number
    if number > max_number:
        max_number = number
sum = min_number  +max_number
print(sum)
# 5) შექმენით რიცხვების სია, გადაუარეთ მას for loop-ით, გაიგეთ რამდენი ლუწი და რამდენი კენტი რიცხვი გვაქვს სიაში და დაბეჭდეთ მათი რაოდენობა
nums = [1,2,3,4,5,6,7,8,9,10] 
even = 0 
odd = 0
for num in nums:
    if num % 2 == 0:
        even += 1
    else:
        odd += 1
print("evens: ",even)
print("odds:",odd)
# 6) შექმენით სია, სადაც გექნებათ 1-ანები და 0-ანები, შექმენით ახალი სია, რომელიც თავიდან იქნება ცარიელი. for loop-ით გადაუარეთ პირველ სიას და თუ საიტერაციო ცვლადის მნიშვნელობა იქნება 1, ახალ სიაში ჩაამატეთ True, სხვა შემთხვევაში False. საბოლოოდ დაბეჭდეთ ახალი სია
numbers = [1,0,1,0,1,1,0,0,1,1]
new = [] 
for number in numbers:
    if number == 1:
        new.append(True)
    else:
        new.append(False)
print(new)
# 4) შექმენით ცვლადი სადაც შეინახავთ სთრინგს და გაიგეთ, არის თუ არა ის პალინდრომი(პალინდრომი არის ისეთი სიტყვა, რომელიც ორივე მხრიდან ერთნაირად იკითხება, მაგალითად, "ana"...)
word = "ana"
reversed_word = ""
for i in range(len(word) - 1, -1, -1):
        reversed_word = reversed_word + word[i]
if word == reversed_word:
        print("word is palindrome")
else:
        print("word is not palindrome")