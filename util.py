import ast
import inspect
import sys



# Load the Python file
with open("taskmanager/settings.py", "r") as f:
    source = f.read()

# Parse the source code
tree = ast.parse(source)

# Find the assignment node that defines the variable
for node in ast.iter_child_nodes(tree):
    if isinstance(node, ast.Assign) and len(node.targets) == 1:
        target = node.targets[0]
        if isinstance(target, ast.Name) and target.id == "my_variable":
            # Change the value of the variable
            node.value = ast.Num(n=42)
            break


# Generate the modified source code
modified_source = ""
lines = source.split("\n")
for node in ast.iter_child_nodes(tree):
    # Get the line number of the node
    line_number = node.lineno
    # Add the line to the modified source code
    modified_source += lines[line_number - 1] + "\n"

# Save the modified source code
with open("modified_example.py", "w") as f:
    f.write(modified_source)
