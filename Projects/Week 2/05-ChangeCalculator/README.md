# Local Weather Project
In this assignment, you will be creating a console application that works as follows:

The user enters a **cost** and then the **amount** of money given. Your application must figure out the number of quarters, dimes, nickels and pennies needed to give the correct change.

For example:
```
How much does the item cost?
10.12

How much has the customer given you?
11

The customer's change is: $0.88
Quarters: 3
Dimes: 1
Nickels: 0
Pennies: 3
```


## Learning Goals
By completing this assignment, you will have learned: 

* How to read from/write to the Console
* The difference between certain number types in C#.
* How to use Visual Studio to write/debug C# code.

## Tasks

**1. Set up your repository**
* Create a new repository on GitHub called **05-ChangeCalculator**.
* Clone the repository to your local machine in ```C:\dev\projects```.

**2. Create a Visual Studio Console Project**
* Open Visual Studio 2015 Community
* Click File > New > Project
* Select **Console Application** (If you do not see Console Application, make sure you have selected Visual C# on the left)
* Enter **ChangeCalculator** in the Name field
* Enter **C:\dev\projects\05-ChangeCalculator** in the Location field
* Click OK to create the project

** 3. Write the application **
Here are some hints to get you started

* You will need two variables to begin with.
```csharp
decimal itemCost;
decimal givenAmount;
```

* You will need to print a message and read the input twice - once for itemCost and once for givenAmount. Here's a pattern you can reuse.
```csharp
Console.WriteLine("Please enter a value");
string input = Console.ReadLine();
decimal value = decimal.Parse(input);
```

* To figure out how many quarters needed to give somebody the correct change
```csharp
decimal change = givenAmount - itemCost;

decimal numberOfQuarters = Math.Floor(change / 0.25);
``` 

* To figure out how many dimes needed to give somebody the correct change
```csharp
decimal change = givenAmount - itemCost;

decimal numberOfQuarters = Math.Floor(change / 0.25);
decimal numberOfDimes = Math.Floor((change % 0.25) / 0.10);

// Note: The % character is known as a modulo operator. It finds the remainder after division of one number by another.
// Example: 5 % 2 = 1
//	  	 	0.88 % 0.25 = 0.13
```

* Try to follow this pattern and come up with the number of nickels and pennies needed.

## Turn in instructions

* Push your changes to GitHub 
* [Click here to create an issue in the class repository](https://github.com/OriginCodeAcademy/Intro-Aug-2015/issues/new?title=05-ChangeCalculator&body=Repository URL%0A[Insert your repository URL here]%0A%0A1. What was the best thing you learned in this assignment?%0A%0A2. What was the hardest part about this assignment?%0A%0A3. What would you add to this project if you had extra time?)
	* Include a link to your repository in the description
	* Answer the questions filled out for you in the description