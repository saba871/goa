# gamoaqvs chemi saxeli da gvari imdenejr ramdeni wlisac var 
for i in range(18):
        print("saba tabatadze ")
# gamoaqvs termialshi 1 idan 20 amde ciprebi nu
mber = 0
for i in range(20):
        number = number + 1
        print(number)
# gamoaqvs terminalshi 20 idan 1 amde ricxvebi ukutvlit
number = 20    
for i in range (20):
        number = number - 1
        print(number)
# bewdavs 1 idan 5 is chatvlit ricxvta kvadratebs
number = 0
for i in range(5):
        number = number + 1
        print(number * number )
# bewdavs 1 idan 10 amde yvela luwi ricxvis jasms
even_sum = sum(i for i in range(0,11) if i %2 == 0)
print (even_sum)
# bewdavs 1 idan 51 amde yvela ricxvis jams
total_sum = sum(range(1, 51))
print (total_sum)
# მომხარებელს შემოატანინეთ რიცხვი და შეინახეთ ცვლადში, შემდეგ კი 0-დან შემოტანილი რიცხვის ჩათვლით შეამოწმეთ, თუ ლუწია დაბეჭდეთ რიცხვი is Even, სხვა შემთხვევაში რიცხვი is Odd;(მაგალითად 4, ლუწია ამიტომაც დაბეჭდავთ "4 is Even")
number = int(input("Please enter a number: "))
for num in range(0,number + 1):
    if num % 2 == 0:
        print(str(num) + " is Even")
    else:
        print(str(num) + " is Odd")