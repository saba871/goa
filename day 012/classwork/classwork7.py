
# შექმენით ცვლადი სადაც შეინახავთ პაროლს(მაგალითად: goa1234)სანამ მომხარებელი არ შემოიყვანს სწორ პაროლს მანამდე შემოატანინეთ ხელახლა. მომხარებელს ექნება 3 ცდა. თუ შემოიყვანა სწორი პაროლი დაუპრინტეთ "წვდომა მიღებულია", სხვა შემთხვევაში "სცადეთ ხელახლა" და დაპრინტეთ რამდენი მცდელობა დარჩა და გამოაკელით ცდას ერთი. როდესაც მცდელობები ამოიწურება გათიშეთ while loop-ი

secret_pass = "luka1234"
user_pass = ''

tries = 3

while tries > 0 and user_pass != secret_pass:
    user_pass = input("Enter your password (you have " + str(tries) + " tries left): ")
    tries = tries - 1

    if user_pass == secret_pass:
        print("Access granted!")
    elif tries == 0:
        print("You've reached the maximum number of tries. Access denied!")
    else:
        print("Access denied! Try again.") 