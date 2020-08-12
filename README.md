# Let's Goal!

Let's Goal is a fully functional goal keeping app that allows you to keep track of short-term, mid-term, and long-term goals. Utilizing the actions features the user has a way to break down their goals in a more approachable and digestible manner.


# Project Setup

## Technologies Used

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

### Other Technologies
- [node.js](https://nodejs.org/en/) (JS Framework)
- [npm](https://www.npmjs.com/) (Pkg Manager)
- [Visual Studio](https://visualstudio.microsoft.com/) (Code Editor/Development Environment)
- [Google Firebase](https://firebase.google.com/) (Authentication)
- [Google Firebase](https://firebase.google.com/) is used for user authentication
- [date-fns](https://date-fns.org/) (Date Manipulation)
- [dbdiagram.io](https://dbdiagram.io/d) for planning the data structure
- [Sketchboard.me](https://sketchboard.io/) for wireframing

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
2. Navigate to the SQL folder within the LetsGoal application. Run 01_Db_Create.sql to create all the neccessary tables.
3. The second file, 02_Seed_Data.sql sets up the mood emojis, avatars, and user types. It also contains some seed user and post data. You will need to run the first half of the file, but the user data is optional. If you want to create your project without any initial users do not run the SQL commands after the comment on line 244.

### Setting up the users (only do this if you are using the user and post seed data)
On your Google Firebase project, click on the Authentication link. You will need to add users (there are 25 total) that have e-mail addresses that matches the ones in the database. Make sure that you have e-mail verification set to OFF before you add the seed users. Once you've added the users, replace their Firebase UID's in the SQL file with the ones matching your newly created Firebase Users. Then you can run the SQL file.

### Install missing dependencies
1. Navigate to the client folder in your terminal
2. run `npm install` to install any missing packages

## Running the App

1. Start your server. This can be done through Visual Studio. When running through Visual Studio do not use the IIS option!
2. Navigate to the client folder.
3. Type the command `npm start`

## Technology Utilized

1. Micorosoft SQL Server Express
1. Microsoft Visual C#
1. Entity Framework
1. Google Firebase Authentication
1. React.JS
1. React Routing
