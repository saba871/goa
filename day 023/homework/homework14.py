# 6) შექმენით სია სადაც ჩაამატებთ 1-დან 100-მდე ყველა ლუწ რიცხვს. საბოლოოდ დაპრინტეთ ეს სია(გამოიყენეთ for loop)
even_nums =[]
for i in range (1,100):
    if i % 2 == 0:
        even_nums.append(i)
print(even_nums)
# 7) შექმენით სია სადაც ჩაამატებთ ყველა რიცხვს 1-დან 50-ის ჩათვლით. შემდეგ გადაუარეთ for loop-ით და ამ სიიდან წაშალეთ ყველა კენტი რიცხვი. საბოლოოდ დაპრინტეთ მიღებული სია
free_list =[]
for i in range (1,50 + 1):
    free_list.append(i) 
print(free_list)
free_list2 = [] 
for i in range(1,50 +1 ):
    if i % 2 == 0:
        free_list2.append(i)
print(free_list2)
# 8) შექმენით ხილების სია სადაც გექნებათ მინიმუმ 10 ელემენტი, while loop-ის გამოყენებით წაშალეთ სიის ბოლო ელემენტი იქამდე სანამ სიაში არ დარჩება ორი ელემენტი. ყოველი ელემენტის წაშლისას დაბეჭდეთ ხილების სია
fruits =["apple","orange","mango","banana","cherry","kiwi","avokado","plum","pear","fig"]
fruits2 = []
while len(fruits) > 4:
    fruits.pop()
    print(fruits)
# 9) შექმენით პროგრამა, რომელიც დაითვლის თუ რამდენჯერ შედის სიაში რიცხვი 1 numbers = [1,2,0,1,32,1,30,1,1,21,1,1,1] (ამისათვის გადაუარეთ სიას for loop-ით)
numbers = [1, 2, 0, 1, 32, 1, 30, 1, 1, 21, 1, 1, 1]
count = 0
for number in numbers:
    if number == 1:
        count = count + 1
print("The number one is included",count,"times")
# 10) შექმენით ორი ცარიელი სია, for loop-ის გამოყენებით მომხარებელს 5-ჯერ შემოატანინეთ ნებისმიერი სიტყვა. თუ შემოტანილი სიტყვის სიგრძე არ აღემატება 5-ს ჩაამატეთ პირველ სიაში, სხვა შემთხვევაში მეორეში. საბოლოოდ დაბეჭდეთ ორივე სია
list1 =[]
list2 =[]
for i in range(5):
    user_words = input("enter the world: ")
    if len(user_words) <= 5:
        list1.append(user_words)
    else:
        list2.append(user_words)
print(list1)
print(list2)