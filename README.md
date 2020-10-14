# Let's Goal!

Let's Goal is a fully functional goal keeping app that allows you to keep track of short-term, mid-term, and long-term goals. Utilizing the actions features, the user has a way to break down their goals in a more approachable and digestible manner.

# Project Setup

## Technologies Used

### Planning
- [dbdiagram.io](https://dbdiagram.io/d) (Entity Relationship Diagram)
- [Sketchboard.me](https://sketchboard.io/) (Used for Wireframing)

### Client-Side
* HTML, CSS, Javascript
* React
* ReactDOM
* React-Router-DOM

### Server-Side
* C# with .NET 
* ASP.NET Web API
* Entity Framework Core
* SQL Server Database

### Authentication
- [Google Firebase](https://firebase.google.com/) (Authentication)

### Other Technologies
- [npm](https://www.npmjs.com/) (Pkg Manager) Required
- [node.js](https://nodejs.org/en/) (JS Framework) Required
- [date-fns](https://date-fns.org/) (Date Manipulation) Required
- [Visual Studio](https://visualstudio.microsoft.com/) (Code Editor/Development Environment)

## Installation

### Initial Set-up
1. Clone this repository onto your local device.
2. Create a new [Google Firebase](https://firebase.google.com/) project.
3. Go to the project settings of your new Firebase project and take note of the Project ID and the API Key.
4. Open the appsettings.json file and replace the FirebaseProjectId value with your own.
5. Navigate into the client directory, copy the contents from the .env.local.example, put them into a new file called .env.local file, and replace the value with your Firebase project API Key.
6. Open Visual Sudio and select "Open a project or solution". When the file explorer appears navigate to wherever you cloned this repository and open the file called "LetsGoal.sln"

### Setting up the DB (This can be done through Visual Studio)
1. Connect to your SQL Server
2. Navigate to the SQL folder within the LetsGoal application. Run the contents of "Let'sGoal-SQL-script.sql" inside a new SQL query to create all the neccessary tables.
3. Now do the same with the contents of "Let'sGoal-SQL-seed.sql". Everything from line 1-9 is required but everything below that is optional. If you choose to run the rest be sure to create three equivilent users in your firebase project and replace the firebase user ids in the seed file with the ones you just created.

### Install missing dependencies
1. Navigate to the client folder in your terminal
2. run `npm install` to install any missing packages

## Running the App

1. Start your server. This can be done through Visual Studio. When running through Visual Studio do not use the IIS option! Instead, choose from the dropdown the "LetsGoal" option. 
2. From the terminal navigate to the client folder within the LetsGoal project.
3. Type the command `npm start`

## Let's Connect!
On [LinkedIn](https://www.linkedin.com/in/brantpippin/) or on
[GitHub](https://github.com/Brant2001)

If you find that anything is wrong with the app or you have any suggestions please feel free to email me at brant.pippin@gmail.com
