Rabijan Ragupalan — Assignment Tracker (CRUD + Authentication)

Live Website:
GitHub Repository: https://github.com/RabijanR/Assignment-Tracker.git


Overview
The Assignment Tracker application allows users to track school assignments and provides full Create, Read, Update, and Delete (CRUD) functionality.

Pages included:
- Home page (splash page)
- Assignment List page
- Add Assignment page
- Edit Assignment page
- Delete Confirmation page
- Users page (placeholder)

public/
  Asset/images/logo.png
  Content/app.css
  script/app.js


Design and Styling
The application uses a dark theme with a white background throughout:
- Dark navigation bar
- Dark footer
- Dark hero section
- White and blue accent colors
- Font Awesome icons for navigation

Styling Tools Used:
- Bootstrap for responsive layout and UI components
- Custom CSS in public/Content/app.css
- Stylesheet used from class and own design
- Font Awesome for icons
- Logo Source: https://www.dreamstime.com/illustration/assignment-logo.html


Home Page
The home page serves as a splash page with:
- Application title and logo
- Short descriptive text
- Buttons for Assignment List and Add Assignment


Database and Security
The app uses MongoDB Atlas with Mongoose.

The MongoDB connection string is hidden using:
.env
with this format:
MONGO_URI=your-mongodb-url-here

Security:
- .env is included inside .gitignore
- Credentials are not pushed to GitHub
- db.js loads the environment variable using dotenv

Reference Used:
Hiding MongoDB Key Video:
https://www.youtube.com/watch?v=17UVejOw3zA


CRUD Functionality
The application supports full CRUD operations:

Create:
Route: /assignments/add
Adds a new assignment to the database.

Read:
Route: /assignments
Displays a list of assignments.

Update:
Route: /assignments/edit/:id
Allows editing an assignment.

Delete:
Route: /assignments/delete/:id
Includes a delete confirmation message.


Routing and Controllers
Core routes:
/
/assignments
/assignments/add
POST /assignments/add
/assignments/edit/:id
POST /assignments/edit/:id
/assignments/delete/:id



Sources and Dependencies

Main Libraries Used:
ExpressJS
Mongoose
Dotenv
EJS
Bootstrap
Font Awesome

Reference Sources:
Font Awesome: https://fontawesome.com/
Bootstrap: https://getbootstrap.com/
ExpressJS: https://expressjs.com/
Logo Source: https://www.dreamstime.com/illustration/assignment-logo.html
Hiding MongoDB Key Tutorial: https://www.youtube.com/watch?v=17UVejOw3zA


Code Commenting
All major files contain comments explaining:
- Route purposes
- CRUD logic
- Database operations
- View template roles


Cloud Deployment
The application is deployed using Renderer a cloud hosting provider.
It connects to MongoDB Atlas successfully and supports all CRUD operations online.
