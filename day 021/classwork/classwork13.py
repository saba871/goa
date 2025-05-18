def upper_and_lower(text):
    upper_index = 1

    result = ""

    for i in text:
        if upper_index == 3:
            result += i.upper()
            upper_index = 0
        else:
            result += i.lower()

        upper_index += 1
    return result

print(upper_and_lower("HellO, MY namE IS Nika"))





''' capitalize ფუნქციის კლონი'''
def manual_capitalize(string):

    first_char = string[0].upper()
    other = string[1:].lower()

    return first_char + other
print(manual_capitalize("HELLO"))






'''title ფუნქციის კლონი '''
def manual_title(string1):
    is_space = False

    result = ""

    for i in string1:
        if i == " ":
            result += i
            is_space = True
        elif is_space:
            result += i.upper()
            is_space = False
        else:
            result += i.lower()

    return result[0].upper() + result[1:]


print(manual_title("hEllo mY NAME is NikA"))


def greet(name):
    name = ("enter your name: ")
    print("hello" + name)

name = ("enter your name: ")