"""
To create a command line utility for configuring Django projects, 
you can use the argparse module from the Python standard library to 
parse command line arguments and the Django API to create and configure 
Django apps, models, and views.

Here's an outline of how you can structure the utility:

    Define a function that takes the command line arguments and uses them 
    to create and configure a Django app. This function should use the 
    Django API to create the app, define models and views, and generate the necessary files and templates.

    Use the argparse module to define a command line parser that can parse 
    the necessary arguments for the utility. You can define different subcommands 
    for different tasks, such as creating an app, defining a model, or generating views.

    Use the argparse.ArgumentParser.parse_args() method to parse the command line arguments 
    and call the appropriate function based on the subcommand.

    Run the utility from the command line by calling python utility.py followed by the necessary arguments.

Here's an example of how you might implement this in code:

python configure.py create_model myapp MyModel
python configure.py create_view myapp MyView

"""
import argparse

from django.apps import apps
from django.db import models


def create_app(app_name):
    # Use the Django API to create a new app
    apps.create_app(app_name)


def create_model(app_name, model_name):
    # Get the app's models module
    models_module = apps.get_app_config(app_name).models_module
    # Define the model fields
    fields = {
        "name": models.CharField(max_length=100),
        "description": models.TextField(),
    }
    # Create the model and add it to the models module
    model = type(model_name, (models.Model,), fields)
    setattr(models_module, model_name, model)


# def create_model(app_name, model_name):
#     # Use the Django API to create a new model in the app
#     apps.create_model(app_name, model_name)


def create_view(app_name, view_name):
    # Use the Django API to create a new view in the app
    apps.create_view(app_name, view_name)


def main():
    parser = argparse.ArgumentParser()
    # Define all subcommands in a single call to add_subparsers
    subcommands = parser.add_subparsers(dest="command")
    # Define a subcommand for creating an app
    create_app_parser = subcommands.add_parser(
        "create_app", help="Create a new Django app"
    )
    create_app_parser.add_argument("app_name", help="Name of the app to create")

    # Define a subcommand for creating a model
    create_model_parser = subcommands.add_parser(
        "create_model", help="Create a new model in a Django app"
    )
    create_model_parser.add_argument(
        "app_name", help="Name of the app in which to create the model"
    )
    create_model_parser.add_argument("model_name", help="Name of the model to create")

    # Define a subcommand for creating a view
    create_view_parser = subcommands.add_parser(
        "create_view", help="Create a new view in a Django app"
    )
    create_view_parser.add_argument(
        "app_name", help="Name of the app in which to create the view"
    )
    create_view_parser.add_argument(
        "view_name", help="Name a subcommand for creating a view"
    )

    # Parse the command line arguments
    args = parser.parse_args()
    # Call the appropriate function based on the command
    if args.command == "create_app":
        create_app(args.app_name)
    elif args.command == "create_model":
        create_model(args.app_name, args.model_name)
    elif args.command == "create_view":
        create_view(args.app_name, args.view_name)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()


import ast
import inspect
import sys

# Load the Python file
with open("example.py", "r") as f:
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
modified_source = astor.to_source(tree)

# Save the modified source code
with open("modified_example.py", "w") as f:
    f.write(modified_source)
