
#  1) შექმენით ცვლადი, სადაც შეინახავთ string-ს. დაბეჭდეთ მისი თითოეული სიმბოლო და
#  გვერდით მიუწერეთ რიგით მერამდენეა ის.

string = "saba"
index = 0
for i in string:
    print(i + " " + str(index))
    index += 1


#  შექმენით manual_join ფუნქცია, რომელსაც გადაეცემა სთინგების სია და ერთი სთრინგი. 
# ამ ფუნქციამ უნდა შეართოს ეს სია და თითოეულ ელემენტს შორის ჩასვას გადმოცემული 
# სთრინგი
def manual_join(str_list,string2):
    result = ''
    for i in str_list:
        result = result + i + string2
    return result[:-1]

print(manual_join(list("phyton"),"-"))




# 3) შექმენით manual_count ფუნქცია, რომელსაც გადაეცემა სთრინგი ან სია და ელემენტი 
# რომლის რაოდენობაც უნდა გაიგოთ. დააბრუნეთ მიღებული შედეგი.
def manual_count(string1,element):
    count = 0
    for i in string1: 
        if i == element:
            count += 1
    return count



# შექმენით manual_range ფუნქცია, რომელიც იქნება range ფუნქციის კოლნი, 
# ამ ფუნქციას უნდა ჰქონდეს 3 არგუმენტი, მაგრამ თუ გამოძახებისას გადაეცა მხოლოდ 1 
# არგუმენტი default-ად start-ის მნიშვნელობა იქნება 0 და step-ის 1. ხოლო 2 არგუმენტის
#  შემთხვევაში მხოლოდ step-ი იქნება 1.

def manual_range(start,end,step):
    start = 0
    step = 1

    while start > end:
        start += start
    return start
        
print(manual_range(1,10,3))