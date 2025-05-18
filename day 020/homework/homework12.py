# 1) while ციკლის გამოყენებით დაპრინტეთ 1-დან 50-მდე ყველა 4-ის ჯერადი რიცხვის კუბი 

i = 4

while i < 50:
    print(i ** 3)
    i = i + 4
# 2) შექმენით რიცხვების დიაპაზონი 1-დან 100-მდე, შეამოწმეთ თუ რიცხვი იყოფა 3-ზე დაბეჭდეთ "Fizz" და გვერდზე მიუწერეთ რიცხვი. თუ რიცხვი იყოფა 5-ზე დაბეჭდეთ "Buzz" და გვერდზე მიუწერეთ რიცხვი, ხოლო თუ იყოფა 3-ზეც და 5-ზეც დაბეჭდეთ "FizzBuzz" და გვერდზე მიუწერეთ რიცხვი
num = 1
while num <= 99:
    if num % 3 == 0:
        print("fizz",num)
    elif num % 5 == 0:
        print("buzz", num)
    elif num % 5 and num % 3 == 0:
        print("fuzzbuzz",num)
    num +=1
print(num)
# 3) შექმენით ორი ცვლადი, პირველში შეინახეთ 1-დან 20-ის ჩათვლით ყველა ლუწი რიცხვის ჯამი, მეორეში კი ყველა კენტის. აიყვანეთ ორივე მე-5 ხარისხში და დაპრინტეთ ის, რომელიც არის მეტი
even_sum = 0
odd_sum = 0

for i in range(1, 21):
    if i % 2 == 0:
        even_sum = even_sum + i
    else:
        odd_sum = odd_sum + i


if even_sum ** 5 > odd_sum ** 5:
    print("Even sum is greater than odd sum", even_sum ** 5)
else:
    print("Odd sum is greater than even sum", odd_sum ** 5)
# 4) True or False and 5 > 3 or "name" == "name" and 123 == "123" and 5 >= 5 <--- გაიგეთ რას გამოიტანს ეს კოდი და ახსენით რატომ.

# ის პირობა ტერმინალში გამოიტანს true - ს

# 5) მომხარებელს შემოატანინეთ რიცხვი და გაიგეთ არის თუ არა ის მარტივი, თუ მარტივია დაპრინტეთ "Number is prime", სხვა შემთხვევაში "Number is not prime"(მარტივია რიცხვი, რომელიც იყოფა მარტო თავის თავზე და ერთზე)
num = int(input("Enter any number: "))
if num % 2 == 0 and num % 4 == 0:
    print("number is not prime ")
elif num % num == 0:
    print("number is prime ")