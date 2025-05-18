# 1.) შქმენეით სია სადაც, შეიტანთ მინიმუმ 10 რიცხვს, გადაუარეთ for ციკლის დახმარებით და დაბეჭდეთ თითოეული რიცხვი კენტია თუ ლუწი.
numbers = [14, 17, 13, 57, 63, 71, 22, 25, 12, 42]
for number in range(len(numbers)):
    if number % 2 == 0:
        print(number, "is even")
    else:
        print(number, "is odd")
# 2) შექმენით სახელების სია სადაც გექნებათ მინიმუმ 10 სახელი, დაბეჭდეთ ამ სიიდან მხოლოდ ის სახელები რომლების ინდექსებიც არის ლუწი
names = ["nika","luka","saba","valeri","torfin","ana","mari","nini","elene","sopo"]
for i in range(len(names)):
    if i % 2 == 0: 
        print(names[i])
# 4) შექმენით სია სადაც გექნებათ 10 რიცხვი, თქვენი დავალებაა გაიგოთ ამ სიაში ყველა ლუწი და კენტი რიცხვის ჯამი და დაბეჭდოთ
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_sum = 0 
odd_sum = 0   
for number in range(len(numbers)):
    if number % 2 == 0:
        even_sum = even_sum + number  
    else:
        odd_sum = odd_sum + number
print("even num's sum :", even_sum)
print("odd num's sum :", odd_sum)
# 5) შექმენით სია სადაც გექნებათ 10 რიცვი, შემდეგ შექმენით ახალი სია, სადაც ჩაამატებთ პირველი სიიდან ყველა ლუწ რიცხვს და გაიგებთ მათ საშუალო არითმეტიკულს.(ახალ სიაზე გამოიყენეთ len() ფუნქცია)
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even = []
for i in range(len(my_list)):
    if my_list[i] % 2 == 0:
        even.append(my_list[i])
print("evens: ", i)