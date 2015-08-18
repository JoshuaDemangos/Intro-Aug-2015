# Notepad
In this assignment, you will be creating a WPF app version of Notepad.

This version of Notepad will be very simple. 
The two requirements are that it must be able to open a file, and it must be able to save the file.

## Tasks

**1. Set up your repository**
* Create a new repository on GitHub called **06-Notepad**.
* Clone the repository to your local machine in ```C:\dev\projects```.

**2. Create a Visual Studio WPF Project**
* Open Visual Studio 2015 Community
* Click File > New > Project
* Select **WPF Application** (If you do not see WPF Application, make sure you have selected Visual C# on the left)
* Enter ```Notepad``` in the Name field
* Enter ```C:\dev\projects\06-Notepad``` in the Location field
* Click OK to create the project

**3. Create the View**
* When you first create the project, a file called MainWindow.xaml is created and automatically opened for you by Visual Studio.
* Open the **Toolbox** by clicking View > Toolbox (Ctrl+W,X)
* Click and drag two Button control and one TextBox control into the designer view.
* Lay these two controls out so that it looks similar to the demo you were shown.
* Click on the first Button control, and in the Properties window - name it buttonOpen.
* Click on the second Button control, and in the Properties window - name it buttonSave.
* Click on the TextBox control, and in the Properties window - name it textWindow.

**4. Add some variables to MainWindow.xaml.cs**
* Add the following variable to the MainWindow class. 

```csharp
private string CurrentFile
```
   
   
* Add the following using statements to the top of MainWindow.xaml.cs

```csharp
using Microsoft.Win32;
using System.IO;
using System.Windows;
```

* After you've done these two tasks, your file should look like this.

```csharp
using Microsoft.Win32;
using System.IO;
using System.Windows;

namespace Notepad
{
    public partial class MainWindow : Window
    {
        private string CurrentFile;

        public MainWindow()
        {
            InitializeComponent();
        }
    }
}
```

**4. Wire up the file open event**
* Double click on the Open Button in the designer view. This automatically creates an Event Listener method in MainWindow.xaml.cs that will be called when our open button is clicked.
* In the method that was created, copy and paste the following commented code.
```csharp
// Creates an OpenFileDialog object
OpenFileDialog openFileDialog = new OpenFileDialog();

// Calls the ShowDialog method defined in the OpenFileDialog class
if (openFileDialog.ShowDialog() == true)
{
	// Save the location of the file for later
	CurrentFile = openFileDialog.FileName;

	// Calls the static ReadAllText method defined in the File class 
	// to read the text contained in the file, and place it in a string.
	string fileContents = File.ReadAllText(CurrentFile);

	// Sets the Text property of our textWindow object to the contents of the file.
	textWindow.Text = fileContents;
}
```

**5. Wire up the save event**
* Double click on the Save Button you created in the designer view.
* In the method that was created, copy and paste the following code
```csharp
// Calls the static WriteAllText method defined in the File class
// to write the text in our textWindow object to the location we saved earlier
File.WriteAllText(CurrentFile, textWindow.Text);

// Shows a messagebox to tell the user our save worked
MessageBox.Show("Save was successful");
```

### You're done!
You should now have a working, basic Notepad editor.


## Turn in instructions

* Push your changes to GitHub 
* [Click here to create an issue in the class repository](https://github.com/OriginCodeAcademy/Intro-Aug-2015/issues/new?title=05-ChangeCalculator&body=Repository URL%0A[Insert your repository URL here]%0A%0A1. What was the best thing you learned in this assignment?%0A%0A2. What was the hardest part about this assignment?%0A%0A3. What would you add to this project if you had extra time?)
	* Include a link to your repository in the description
	* Answer the questions filled out for you in the description