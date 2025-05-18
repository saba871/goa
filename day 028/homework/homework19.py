# შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა სახელი და დაბეჭდავს მისთვის მიესალმებას (მაგალითად: "Hello Nika"). გამოძახეთ ეს ფუნქცია 2-ჯერ და გადაეცით სხვადასხვა სახელი
def name():
    print("hello,saba")
    print("hello,luka")
name()
# შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა 2 რიცხვი. ფუნქციამ უნდა დაბეჭდოს ამ რიცხვების ნამრავლი. საბოლოოდ გამოიძახეთ ის
def multification (num1,num2):
    result = num1 * num2
    print(result)
multification(2,5)
# შექმენით ფუნქცია, რომელსაც გადასცემთ რიცხვების სიას. გადაუარეთ გადმოცემულ სიას for ციკლით და დააბრუნეთ ახალი სია, სადაც ჩამატებული იქნება გადმოცემული სიიდან მხოლოდ ის რიცხვები, რომლებიც მეტია 10-ზე. საბოლოოდ დააბრუნეთ ეს სია
def more_than_ten(numbers):
    result = []
    for num in numbers:
        if num > 10:
            result.append(num)
    return result
numbers = [12,23,4,5,6,7,12,13,15]
random = more_than_ten(numbers)
print(random)
# შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა სია. ფუნქციამ უნდა დაბეჭდოს ეს სია შებრუნებულად(არ გამოიყენოთ slicing-ი)
def reverse(my_list):
    for i in range(len(my_list)-1,-1,-1):
        print(my_list[i])
reverse ([1,2,3,4,5,6,7,8,9,10])
# შექმენით ფუნქცია, რომელსაც გადაეცემა სიმბოლოების სია. ფუნქციამ უნდა დააბრუნოს ეს სია პირველი და ბოლო ელემენტების გარეშე, გამოიყენეთ slicing
def random(symbols):
    return symbols[1:-1]
symbols = ['!', '@', '#', '$', '%', '&', '*']
print(random(symbols))
# შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. გადაუარეთ ამ სიას for ციკლით და ჩაამატეთ მხოლოდ ლუწი რიცხვები ახალ სიაში. საბოლოოდ დააბრუნეთ ეს სია
def random(numbers):
    result = []
    for num in numbers:
        if num % 2 == 0:
            result.append(num)
    return result
num = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
print(random(num))
# შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. შექმენით ახალის სია, სადაც ჩაამატებთ გადმოცემული სიიდან მხოლოდ იმ სახელებს, რომლებიც იწყება "N"-ზე`. საბოლოოდ დააბრუნეთ ეს სია
def random(names):
    result = []
    for name in names:
        if name[0]=="n":
            result.append(name)
    return result
names = ["saba","nika","luka","nini","nia"]
print(random(names))
# შექმენით ფუნქცია, რომელსაც გადაეცემა ორი რიცხვების სია, გადაურეთ ორივეს for ციკლით და გაიგეთ თითოეულ სიაში რიცხვების ჯამი(შეინახეთ ცალკე ცვლადებში), გაამრავლეთ ორივე ერთმანეთზე და დააბრუნეთ

def digitize(n):

    nums_in_list = []
    
    for number in str(n):
        if int(number) > 0:
            nums_in_list.append(int(number))
    return nums_in_list 
            

print (digitize(12345))