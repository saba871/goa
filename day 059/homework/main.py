
def greet(name): 
    return f"Hello {name.capitalize()}!"

def generate_square(n):
        row = "+" * n  
        square = "\n".join([row] * n) 
        return square


def egged(year, span):
    if year == 0: return "No chickens yet!"
    if year == 1: return 900
    agg_count = 0
    span_list = [span,span,span]
    aggs_list = [300, 300, 300]
    
    for _ in range(year):
        new_span_list = []
        new_aggs_list = []
        for x in span_list:
            if x != 0:
                new_span_list.append(x - 1)
        span_list = new_span_list

        agg_count = sum(aggs_list)
        
        for x in range(len(aggs_list)):
            if new_span_list[x] != 0:
                new_aggs_list.append(aggs_list[x] - (aggs_list[x] * 20 // 100))
        aggs_list = new_aggs_list

        for x in range(3):
            span_list.append(span)
            aggs_list.append(300)
    return agg_count