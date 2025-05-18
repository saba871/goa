def is_valid_IP(ip):
    if ip.count(".") != 3:
        return False
    numbers = ip.split(".")
    for number in numbers:
        if number.isdigit() and (number == "0" or number[0] != "0"):
            if not (int(number) >= 0 and int(number) <= 255):
                return False
        else:
            return False
    return True


def shortest_steps_to_num(num):
    step = 0
    while num > 1:
        if num % 2 == 0:
            num = num // 2
        else:
            num = num - 1
        step += 1
    return step