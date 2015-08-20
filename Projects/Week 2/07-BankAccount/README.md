# Bank Account
In this assignment, you will be creating a very simple Bank Account.

The requirements of this Bank account are as follows.

The Bank has many Accounts. It is the job of the Bank to Add/Remove Accounts.
Each Account has a Balance, and can either Withdraw or Deposit money to affect the Balance.

Write a console application in C# that uses a Bank class and an Account class to implement these requirements.

## Tasks
**1. Set up your repository**
* Create a new repository on GitHub called **07-BankAccount**.
* Clone the repository to your local machine in ```C:\dev\projects```.

**2. Create a Visual Studio Console Project**
* Open Visual Studio 2015 Community
* Click File > New > Project
* Select **Console Application** (If you do not see Console Application, make sure you have selected Visual C# on the left)
* Enter ```BankAccount``` in the Name field
* Enter ```C:\dev\projects\08-BankAccount``` in the Location field
* Click OK to create the project


**3. Create an Account class**
* Right click on your BankAccount project and select Add > Class (Alt+Shift+C)
* Add Properties and Methods until your Account class is complete.
* You will need the following private properties:
	* ```private decimal balance;```
* You will need the following public methods:
	* ```public decimal Withdraw(decimal amount)``` (This method needs to subtract amount from the balance, then return the balance)
	* ```public decimal Deposit(decimal amount)``` (This method needs to add amount to the balance, then return the balance)
	* ```public decimal GetCurrentBalance()``` (This method will simply return the balance)

**4. Create a Bank class**
* Right click on your BankAccount project and select Add > Class (Alt+Shift+C)
* Add Properties and Methods until your Bank class is complete.
* You will need the following private properties:
	* ```private List<Account> accounts``` (You need to INSTANTIATE this List<Account> in your constructor)
* You will need the following public methods:
	* ```public void AddAccount(Account account)``` (This method will add the given account to the List of Accounts.) Tip: Use **accounts.Add(account);**)
	* ```public void RemoveAccount(Account account)``` (This method will remove the given account from the List of Accounts. Tip: Use **accounts.Remove(account);**)
	* ```public void GetCurrentBalance()``` (This method will return the sum of all balances for all accounts)



**5. Use these objects in your Program**
Write a simple program that:

* **Instantiates** a Bank object.
* **Instantiates** a couple of Account objects, and adds them to the Bank.
* Writes the current balance of all the accounts.

### You're done!
You should now have a working, basic Bank object model that can be demonstrated with a Console application.


## Turn in instructions

* Push your changes to GitHub 
* [Click here to create an issue in the class repository](https://github.com/OriginCodeAcademy/Intro-Aug-2015/issues/new?title=07-BankAccount&body=Repository URL%0A[Insert your repository URL here]%0A%0A1. What was the best thing you learned in this assignment?%0A%0A2. What was the hardest part about this assignment?%0A%0A3. What would you add to this project if you had extra time?)
	* Include a link to your repository in the description
	* Answer the questions filled out for you in the description
