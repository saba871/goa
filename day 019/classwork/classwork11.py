# 1) შექმენით რიცხვების სია, შემდგარი მინიმუმ 10 ელემენტისგან. გადაუარეთ ამ საის while loop-ის გამოყენებით. გაიგეთ ცალკე ლუწი და კენტი რიცხვების ჯამი, საბოლოოდ შეადარეთ ისინი ერთმანეთს და დაპრინტეთ უდიდესი
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even = 0
odd = 0
index = 0
while index < len(numbers):
    if numbers[index] % 2 == 0:
        even = even + numbers[index]
    else:
        odd = odd + numbers[index] 
    index = index + 1
if even > odd:
    print(even)
else:
    print(odd)
# 2) შექმენით სიმბოლოების სია, გადაუარეთ მას for loop-ით და სიიდან ყველა სიმბოლოს შორის მოახდინეთ კონკადინაცია. ციკლის გარეთ დაგჭირდებათ ცვლადი სადაც შაამატებთ ამ სთრინგებს
symbols = ['saba ' , 'nika ' , 'luka ' , '5 ' , '7' , '12.5 ', 'a ']
strings_sum = ""
for symbol in symbols:
    strings_sum = strings_sum + symbol
print(strings_sum)