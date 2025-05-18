# while ციკლის საშვალებით გამოიტანეთ რიცხვები 1-იდან 10-მდე
number = 0
while number < 10:
        number = number + 1
        print(number)
# while ციკლის საშვალებით გამოიტანეთ რიცხვები 20-იდან 0-მდე
number = 20
while number > 0:
        number = number - 1
        print(number)
# while ციკლის საშვალებით გამოიტანეთ 1-დან 20-მდე მხოლოდ ლუწი რიცხვები
number = 0 
while number < 20:
        print(number)
        number = number + 2
# while ციკლის საშვალებით გამოიტანეთ 1-იდან 100-მდე ყველა 5-ის ჯერადი რიცხვი
number = 0
while number < 100:
        number = number + 5
        print(number)
# while ციკლისა და input-ის საშვალებით მომხარებელს შემოატანინეთ პაროლი სანამ არ იქნება ის "goa123"-ის ტოლი       
password = ""
while password != "goa123":
    password = input("Enter your password: ")
