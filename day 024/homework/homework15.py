# # mini chat_bot
# print("Bot: Hello! I am steve,your new virtual friend, so tell me how are you fell today? ")
# while True:
#     user = input("user: ")
#     if "i am not good" in user:
#         print("bot: Everything will be fine, the main thing is to believe in yourself and not to give up <3")
#     elif "i am so good" in user:
#         print("bot: Woww I am happy to you,")
#     elif "thanks" in user:
#         print("bot: Not a problem, have a nice day ")
#     elif "I have bad life " in user:
#         print("Remember there is no such thing as a bad life, there are bad days, never give up, I believe in you ")
#         break
#     else:
#         print("bot: sorry, i can't undestand :( ")
while True:
    print("Go on")
    user_input = input("Enter your question or 'exit' to quit: ").lower()

    if user_input == "how are you?":
        print("I'm doing well, thank you!")
    elif user_input == "what's the weather like?":
        print("It's sunny and warm today.")
    elif user_input == "give me bitcoin":
        print("I'm sorry, but I can't give you bitcoin.")
    elif user_input == "hack nasa":
        print("I'm not hacking NASA, I'm a Python programmer.")
    elif user_input == "exit":
        print("Goodbye!")
        break
    else:
        print("I'm not sure how to answer that.")