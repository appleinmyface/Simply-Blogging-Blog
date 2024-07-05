**SimplyBlogging**
SimplyBlogging is a minimalistic blog application where users can post their thoughts, and view existing posts. This project supports light and dark themes, and the blog posts are stored in local storage to persist across sessions.

**Table of Contents**
Features
Technologies Used
Setup and Installation
File Structure
Usage
Customization
Responsive Design
Acknowledgements

**Features**
Post Creation: Users can create new blog posts by filling out a form.
View Posts: Users can view all the blog posts stored in local storage.
Dark Mode: Users can toggle between light and dark themes.
Responsive Design: The layout adjusts for mobile and desktop views.
Persisted Data: Blog posts are stored in local storage, so they persist across page reloads.

**Technologies Used**
HTML
CSS
JavaScript

**File Structure**
Simply-Blogging-Blog/
│
├── index.html
|── blog.html
|── README.MD
|
|────── Assets
|────CSS
├── styles.css
|── form.css
|── blog.css
|──── JS
├── form.js
├── blog.js
└── logic.js

index.html
The main HTML file that structures the layout of the webpage.

styles.css
Contains all the styles for the application, including both light and dark theme variables.

form.css
works hand in hand with the index.html with the flexboxes

blog.css
all formatting that is included in the blog posts

form.js
Handles the form submission for creating new blog posts.

blog.js
Handles the display of blog posts stored in local storage.

logic.js
Contains the core logic for saving posts to local storage and toggling between light and dark themes.

**Creating a Post**
Fill in the "Username", "Title", and "Content" fields in the form.
Click the "Submit" button to save the post.
Viewing Posts
Click the "View Blog Posts" button to see all the posts.
The posts will be displayed below the form in a vertical list.
Toggling Dark Mode
Click the sun icon (🌞) in the top right corner to switch to dark mode.
In dark mode, the icon will change to a moon (🌜). Click it again to switch back to light mode.

**Customization**
Changing the Theme Colors
You can change the theme colors by modifying the CSS variables in styles.css. The variables for both light and dark themes are defined under :root and [data-theme="dark"].

**Adjusting the Form Layout**
To change the layout of the form or the circle element, modify the styles under .form-container and .circle in styles.css.

**Responsive Design**
The application uses media queries to adjust the layout for different screen sizes. You can find the responsive styles under the /* Responsive Design */ section in styles.css.

**Mobile View**
The circle element moves above the form.
Blog posts are displayed in a single column.
Desktop View
The circle element is positioned next to the form.
Blog posts are displayed in a single column with more space.

**Acknowledgements**
This project was created by Derick Hernandez. 
Feel free to customize and enhance this project as per your requirements. Contributions and suggestions are welcome!