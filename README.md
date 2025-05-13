# Mini SNS History

This project is a **16-day course** where students progressively learned and applied technologies like HTML, CSS, JavaScript, Node.js, Express, EJS, and Bootstrap to build a **Mini SNS Project**.  
Each step introduces new concepts and technologies, allowing students to understand the overall flow of web development through hands-on practice.

> **Note**: This repository contains only the **final Mini SNS Project** as a result of the learning process. Examples or practice files used during the course are not included.

---

## Language Selection

- [한국어](./README/README_KR.md)
- [Español](./README/README_ES.md)

---

## Course Overview

- **Goal**: Learn to build a complete SNS application starting from a static website, progressing to dynamic servers, database integration, and user authentication.
- **Approach**: Add new features and technologies daily, focusing on hands-on project development.
- **Technologies Used**:
  - **HTML/CSS**: Basic structure and styling of the web.
  - **JavaScript**: Implementation of dynamic features.
  - **Node.js & Express**: Server development and API design.
  - **EJS**: Dynamic rendering using a template engine.
  - **MongoDB**: Database integration and management.
  - **Bootstrap**: UI design and user experience enhancement.

---

## Explanation of the Process

This project was conducted by learning new technologies daily and progressively applying them to the Mini SNS Project.  
However, not every DAY resulted in direct changes to the project. Some DAYS focused on learning new technologies or reviewing and deepening previously learned content.

For example:

- **DAY1** and **DAY2** focused on learning the basics of HTML and CSS.  
  During this process, students built an understanding of the basic structure and styling of the web, which allowed them to start the Mini SNS Project from **DAY3**.
- **DAY3** utilized the knowledge from DAY1 and DAY2 to create the initial version of the Mini SNS Project, which was based on static HTML.

This alternating approach of learning and practice allowed students to apply what they learned in a practical setting, making the project a hands-on learning experience.

---

## Summary

The progress from `DAY3` to `DAY16` is as follows:

- **DAY3**: Initial version of the Mini SNS Project based on static HTML.
- **DAY4**: Added CSS styles to improve the design.
- **DAY8**: Implemented comment addition/deletion functionality using JavaScript.
- **DAY10**: Built a server using Node.js and Express.js.
- **DAY11**: Added session management and user authentication.
- **DAY12**: Introduced EJS template engine for dynamic rendering.
- **DAY14**: Integrated MongoDB for database-driven post management.
- **DAY15**: Added friend management functionality.
- **DAY16**: Enhanced UI, added likes and comments, and implemented password encryption.

---

## DAY3

- **Details**: The starting phase of the project, where the basic structure of the website was created using HTML.
- **Features**: A static HTML-based initial version of the Mini SNS Project.
- **Key Files**:
  - `index.html`: The homepage with links to "Write a Post" and "View Posts."
  - `write.html`: A simple form for writing posts.
  - `posts.html`: A static page displaying a list of posts.
- **Characteristics**: A static website without JavaScript or backend functionality.

---

## DAY4

- **Details**: Improved the website design using CSS.
- **Added Features**:
  - Added CSS files (`global.css`, `posts.css`, `write.css`) for basic styling.
  - Applied styling to `posts.html` and `write.html`.
- **Changes**:
  - Improved the design of the static HTML.
  - Still no JavaScript or backend functionality.

---

## DAY8

- **Details**: Added dynamic functionality using JavaScript.
- **Added Features**:
  - Added a JavaScript file (`posts.js`) to implement comment addition and deletion.
- **Changes**:
  - Enabled dynamic addition/deletion of comments on `posts.html`.
  - Updated the comment count in real-time.

---

## DAY10

- **Details**: Built a server using Node.js and Express.js.
- **Added Features**:
  - Implemented a basic server using Node.js and Express.js.
  - Served static files and handled routing in `app.js`.
- **Changes**:
  - Transitioned from a static website to a server-based application.
  - Added server logging using `chalk` and `morgan`.

---

## DAY11

- **Details**: Added session management and user authentication.
- **Added Features**:
  - Introduced `express-session` for session management.
  - Implemented access control based on login status.
- **Changes**:
  - Added login status checks to `write.html`.
  - Introduced session-based user authentication.

---

## DAY12

- **Details**: Introduced EJS template engine for dynamic rendering.
- **Added Features**:
  - Integrated EJS template engine.
  - Added a `views` directory and separated HTML into EJS files.
  - Used `express.urlencoded` to handle form data.
- **Changes**:
  - Transitioned from static HTML to dynamic template rendering.
  - Reused templates with `header.ejs` and `footer.ejs`.

---

## DAY14

- **Details**: Integrated MongoDB for database-driven post management.
- **Added Features**:
  - Connected to MongoDB using Mongoose.
  - Implemented functionality to save and retrieve posts.
- **Changes**:
  - Added a `models` directory with a `Feed` model definition.
  - Stored post data in the database and rendered it dynamically.

---

## DAY15

- **Details**: Added functionality for user interactions.
- **Added Features**:
  - Introduced friend management functionality (adding friends and viewing the friend list).
  - Added `friends.ejs` and related routes.
- **Changes**:
  - Expanded user interaction features.
  - Added `friends` database schema and API.

---

## DAY16

- **Details**: Final stage of the project, focusing on UI and security enhancements.
- **Added Features**:
  - Added comment and like functionality.
  - Used `bcrypt` for password encryption.
  - Improved UI using Bootstrap and Bootstrap Icons.
- **Changes**:
  - Evolved into a complete SNS application.
  - Enhanced user experience (UX) and security.
  - **More Information**:  
    The detailed overview of the DAY16 project can be found [here](./DAY16/mini-sns/README.md).

---
