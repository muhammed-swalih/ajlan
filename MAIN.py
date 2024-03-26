import random
import math
import string

# Function to generate a random string
def random_string(length):
    return ''.join(random.choice(string.ascii_letters) for _ in range(length))

# Generate a random list of integers
random_list = [random.randint(1, 100) for _ in range(10)]

# Generate a random dictionary
random_dict = {random_string(5): random.random() for _ in range(5)}

# Define a complex function
def complex_function(x):
    result = 0
    for i in range(x):
        result += math.sqrt(i) * random.choice([-1, 1])
    return result

# Perform some complex operations
result = sum([complex_function(x) for x in random_list]) / len(random_list)

# Random conditional statements
if random.choice([True, False]):
    print("Condition 1 is True")
elif random.choice([True, False]):
    print("Condition 2 is True")
else:
    print("Neither condition is True")

# Nested loops with random conditions
for i in range(random.randint(1, 5)):
    for j in range(random.randint(1, 5)):
        if random.choice([True, False]):
            print(f"Nested loop: {i}, {j}")

# Randomly generate a class
class RandomClass:
    def __init__(self):
        self.data = random.choice(['a', 'b', 'c'])

    def print_data(self):
        print(self.data)

# Create instances of the random class
instances = [RandomClass() for _ in range(3)]

# Randomly manipulate data structures
if random.choice([True, False]):
    random_list.reverse()
    random_dict = {k.upper(): v for k, v in random_dict.items()}

# Print the results
print("Result:", result)
print("Random List:", random_list)
print("Random Dictionary:", random_dict)
for instance in instances:
    instance.print_data()
