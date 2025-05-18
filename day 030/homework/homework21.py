# 3) შექმენით ფუნქცია, რომელიც იღებს წინადადებას, სადაც ყოველი სიტყვის შორის ერთზე მეტი დაშორებაა(space). 
# თქვენი დავალებაა ჩამოაშოროთ გადმოცემულ წინადადებას ზედმეტი space-ები(სიტყვებს შორის მხოლოდ ერთი უნდა იყოს). 
# საბოლოოდ დააბრუნეთ ეს წინადადება

def random(proposal):

    
    result = proposal.split() 
    balance_proposal = " ".join(result)
    return balance_proposal


print(random("hello    world"))


# 4) შექმენით ფუნქცია, რომელიც იღებს წინადადებას, და მასში space-ების მაგივრად სიტყვებს შორის ჩასვამს ტირეს("-").
#  საბოლოოდ კი აბრუნებს მას

def random2(world):
    
    
    result = world.split()
    clean = "-".join(result)
    return clean


print(random2("hello   world"))


# 1) შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას, ფუნქციამ ამ წინადადების თითოეული სიტყვა უნდა შეინახოს სიაში,
#როგორც ცალკე ელემენტი. საბოლოოდ გადააქციეთ სია ისევ წინადადებად, სადაც სიტყვებს შორის არის მძიმე და ერთი დაშორება(", ")

def random(santance):


    words = santance.split()
    new_santance = ", ".join(words)
    return new_santance


santance = "i am 18 year old"
result = random(santance)
print(result)



# 5) შექმენით ფუნქცია, რომელსაც გადაეცემა წინადადება. თქვენი დავალებაა ამ წინადადების 
# სიტყვები შეაბრუნოთ და დააბრუნოთ(სიტყვების სიმბოლოები არ უნდა იყოს შებრუნებული)

def reverse_words(randoms):
    
    
    words = randoms.split()
    reverse = " ".join(words[::-1])
    return reverse


randoms = "hello my friend"
reverse = reverse_words(randoms)
print(reverse)


# 2) შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას და დაბეჭდავს მის თითოეულ სიტყვაში
#  სიმბოლოების რაოდენობას(ცალ-ცალკე)

def word_count(santance):
    
    
    words = santance.split()
    return len(words)


santance = "hello my friend"

count = word_count(santance)

print("Number of words:", count)

