# SEI Project 3 - Platester

[Link](https://app-platester.herokuapp.com/)

<br/>

***Project Members***

- [Lee Wiseman](https://github.com/leewiseman94)
- [Mariah Gilling](https://github.com/msgilling)
- [Edward Steer](https://github.com/EdSteer)

<br/>

***Timeframe***

7 Days

<br/>

***Brief***

In groups, build a full stack application storing data in a NoSQL (MongoDB) database using a Mongoose framework for the backend and React on the front end.

<br/>

***Overview & Concept***

This is the third project on the GA course. It is a group project is a recipe website built to discover new recipes and review them, with styling inspired by the Airbnb app. Once registered and logged in users can add recipes and reviews, update and delete them.

<br/>

***Technologies used***

- Back-end:
  - Node.js
  - MongoDB
  - Express
  - Bcrypt
  - Body-parser
  - Mongoose
  - jsonwebtoken

- Front-end :
  - JavaScript
  - React
  - Bulma
  - React Router Dom
  - CSS
  - Axios

<br/>
<br/>

***Approach Taken***

**Planning:**

Planning was an important part of this project, especially because this was a group project involving 4 people working on different parts of the app. We established an ERD, drew a basic wireframe and added a Trello board to divide our work.

<br/>

<img width="992" alt="Screenshot 2021-12-22 at 13 23 26" src="https://user-images.githubusercontent.com/69866434/148950237-d6431083-b0fd-43d5-80d7-73811f99175f.png">


<img width="995" alt="Screenshot 2021-12-22 at 13 24 22" src="https://user-images.githubusercontent.com/69866434/148950327-57599619-891a-4822-9546-0453aa6f7a76.png">

<br/>
<br/>

**Back-end:**

Back-end was done with the whole group, we wrote down our ERD with the different relationships we wanted between every one of our models, 
which helped a lot when defining the schemas in MongoDB.

<br/>

![Screenshot 2021-11-24 at 10 39 32](https://user-images.githubusercontent.com/69866434/148950421-871973b7-30c4-4445-a5c1-a04478c5afb6.png)

<br/>

Our routes were fairly simple, we really focused on CRUD functionality for the recipes, and replicated that for the reviews.

The last thing we did was making the user schema and adding the secure routes to the requests we wanted protected.

<br/>
<br/>


**Front-end:**

We divided the work in the front-end and used Trello to assign different elements and functionality to every person.

<br/>

<img width="780" alt="Screenshot 2022-01-11 at 13 27 43" src="https://user-images.githubusercontent.com/69866434/148951364-f50b84ee-fd4e-4113-8176-648badea8892.png">



I was assigned most forms on the website (Login/register, Add/update/Delete recipe, Add/update, delete review)

<br/>

*Login-register*

This was a fairly straightforward element functionality wise, I first focused on the logic and making it work, then reformatted the element so it would appear as a pop up (instead of a new URL).
Then I wanted to have a first step to check if the user was in the db, for that I realized I had to add another route in the back-end so I could send a request checking against a mandatory field (email in our case). Depending on the db response, the user would either be redirected to the register popup or login popup.

<br/>

<img width="812" alt="Screenshot 2021-12-22 at 13 07 41" src="https://user-images.githubusercontent.com/69866434/148951148-553816fd-aadf-4ce7-8f64-eb449de70f3a.png">

<br/>

The next challenge was being able to have our pop-up close and open on separate urls. I worked with another teammate and we used useState that we passed in separate elements to make this work.
Finally I wanted to pass on the information on the first field so the user would not have to rewrite their email once they had clicked on continue. This was simpler than expected and allowed for a smoother user experience.

<br/>

*Add / Update /Delete Recipe*

The add & delete recipe function was pretty straightforward.
Spent more time on the ‘update recipe’ component to pass on existing info. Another difficulty I faced was making every ingredient or method editable. I used a conditional statement to see if the user wanted to add a new recipe or change an existing one. Splice was a great way to change an existing item in the array.


<br/>

<img width="655" alt="Screenshot 2021-12-22 at 13 01 02" src="https://user-images.githubusercontent.com/69866434/148951199-e435a481-6c2b-4cea-9d10-4b197329c99a.png">

<br/>


*Add / Update / Delete Review*

This feature was first built by my teammate as a redirect to another url, and I then integrated this in the show recipe page for a better user experience. This came with its own challenges as I had to figure out the best way to re-render the page once the comment was added and when deleting the comment (updating comments and rating). Unfortunately I was not able to update the rating for every comment added / deleted.

<br/>
<br/>

**Wins:**

- Working successfully in a large group, and pushing to the main development branch without many merge conflicts.
- App is fully functional and aesthetically pleasing.

<br/>

**Challenges:**

- Update recipe form, especially when editing specific ingredients or step in a method.
- Making the design coherent on all components of the app.

<br/>

**Known bugs:**

- Users cannot delete their account.
 
<br/>

***Key learnings***

During this project, we used one GitHub repository and created different branches for every team member and every component we were working on. Pushing and pulling code into GitHub, and dealing with merge conflicts was the main challenge and takeaway. The support of the group when going through this process was essential in the success of this project.



