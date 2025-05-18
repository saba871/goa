# შექმენით პროგრამა რომელიც მომხმარებელს შეეკითხება pin კოდს (4 ციფრიანი კოდი) მანამდე სანამ არ შეიყვანს 1234-ს
password = ""
while password != "1234":
    password = input("Enter your 4-digit PIN: ")
print("you PIN is correct, thank you for visiting. ")
# შექმნით რიცხვის გამოცნობის თამაში while ციკლით, რომელიც მომხმარებელს შეეკითხება რიცხვს 1-დან 10-მდე, სანამ მომხმარებელი არ შეიყვანს თქვენთვის სასურველ რიცხვს
number = 0
while number != 5:
    number =int(input("can you guess the number from 1 to 10? "))
    if number != 5:
        print("ooopsss you are wrong sorry for that, let's try again. ")
print("congratulations! you won <3 ")
# შექმენით პროგრამა while ციკლის საშვალებით რომელიც გამოთვლის ყველა ნატურალური რიცხვის ჯამს 1-იდან 50-მდე
sum = 0
number = 1
while number <= 50:
    sum = sum + number  
    number = number + 1
print("from 1 to 50 sum is", sum)