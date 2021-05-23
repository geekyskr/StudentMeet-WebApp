# StudentMeet-WebApp
Capstone project

How to run project-

goto client folder and "npm install"

goto server folder and "npm install"

make sure you connected with your local MySQL database. You can find configuration in StudentMeet-WebApp/server/connection.js file. Set according to your local machine.

goto client folder and "npm start"

goto server folder and "npm start"

goto localhost:3000 and use the app.


Project Name : StudentMeet


Project objective

The objective of this project is to provide an interface to the student where he/she can collaborate with peers and share the activity.

What student can do here ?

Students can join the group according to the College.

Students can share posts which are a combination of name, description and tags.

Students can like,  share, comment and report the post.

Every group will be monitored by an admin which is chosen by group members.

Students are able to sort all the posts according to their need like new post, post with particular tag etc. 



Why is the particular project chosen ?


As a student we face lots of problems on meeting with seniors and we often miss great activity and learning opportunities so we decided to make an interface where students with similar backgrounds can connect and share their ideas and all the activity which is happening in the university campus.

Project scope

The capstone project is scalable and many functionality can be added on the existing model. Some of them are follow - 

Real time conversation between two students.

Students are able to share status.

Every post can be smartly detected by machine learning algorithms.



Details about the technology used


ReactJS - React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
In this project we use ReactJS for making user interfaces.


NodeJS - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
In this project we use NodeJS for executing Javascript code on our local machine and making RESTful API.


Express - Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
In this project we use ExpressJS for making RESTful API, several API gateway and user authentication.


MySQL- MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language.
In this project we use MySQL for storing students, posts  and related information.


Working methodology

Details of the API endpoints

./(get request) - Home Page - 

If a user is logged in He/She has an option for goto respective group.
If a user is not logged in He/She has the option for login or register.
In general this page contains information about the website and contact us details.

./login(post request) - Login Page -

Existing users have an option for login into the account after successful login users will be redirected to their group else back to Login Page.

./register(post request) - Register Page - 

New users have an option to register into the account after successful register details will be sent to admin and they can allow access.
If the username is already taken it will stay on the same page with error.
If Email already exists, the user will be redirected to the Login Page.

./username(get request) - User details page -

If a user logged in He/She can see the details, if not the user will be redirected to the Home Page.

./:UniversityId(get request) - University details - 

Everyone can see the university details. Logged in users have the option for goto their group and new users have the option to register.

./:UniversityId/group(get request) - A group -

Only logged in users with the right credential can see the group.Not logged in users will be directed to the Home Page  and unauthorized  users will be directed to their respective group.

Database schema

Student table - 

Username (Primary key), Name, Email, Phone number, Password, UniverityID(forign key).

University table - 

UniversityId(Primary key), Name, Address, Details, Admin((forign key)).

Post table - 

PostId(Primary key), username(foign key), name, Description, Post, tag.

