def find_lowest(prices, lowest_day, highest_day):
    for i in range (0, prices.index(highest_day) - 1):
        if prices[i] < lowest_day:
            lowest_day = prices[i]
    return lowest_day



def picker(prices):
    highest_day = prices[1]
    lowest_day = prices[0]
    final_result = []

    # This is the loop to find the highest day, skips the first day
    for i in range(1, len(prices)):
        if prices[i] > highest_day:
            highest_day = prices[i]
    #This is the for loop for finding the lowest day
    lowest_day = find_lowest(prices, lowest_day, highest_day)

    # Ensures lower can't be greater than higher
    if lowest_day > highest_day:
        new_highest_day = 0
        for i in range (prices.index(highest_day) + 1, len(prices)):
            if prices[i] > new_highest_day:
                new_highest_day = prices[i]
                highest_day = new_highest_day
        #Checks for lowest one final time
        lowest_day = find_lowest(prices, lowest_day, highest_day)

    final_result.append(prices.index(lowest_day))
    final_result.append(prices.index(highest_day))

    return final_result
# print(picker([3,17,6,9,18,15,6,1,10]))
# print(picker([1,17,6,9,8,15,6,3,19]))



