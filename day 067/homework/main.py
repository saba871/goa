def reverse_it(data):
    if type(data) == str:
        return data[::-1]
    elif type(data) == int:
        return int(str(data)[::-1])
    elif type(data) == float:
        return float(str(data)[::-1])
    return data


def largest_pair_sum(numbers): 
    m = sorted(numbers)
    count = 0
    count += m[-1] + m[-2]
    return count


def number(bus_stops):
    people_on_bus = 0
    for stop in bus_stops:
        people_on_bus += stop[0] 
        people_on_bus -= stop[1]
    return people_on_bus