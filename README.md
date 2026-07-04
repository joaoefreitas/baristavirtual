<div align="center">

![Barista Virtual](/static/Barista_Virtual_900.png)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
</div>

## 📌 About
**Barista Virtual** is a website made with purpose of helping my class to handle homework, notices, important dates and the class schedules, maintained by the students themselves.

Before this project, the management of important information, homework was exclusive in a chat group (creating a mess) or physically written on classroom. Now, anyone can easily see this information.
> [!NOTE]
> Fun fact: This name "Barista Virtual" was inspired by an school's website named "Marista Virtual", making a pun with words "Marista" (the name of school) and "Barista".

## ⚙️ Functionalities
- Public
    - Homeworks panel
    - Notice board
    - Important dates
    - Class schedules
- Only for contributors
    - Login/LogOut
    - Add/Remove homework
    - Add/Remove notices

## 🛠️ How it was built
The website is divided on 3 pages, the public dashboard ([`index.html`](index.html)), a login page ([`login.html`](login.html)) and the admin page ([`admin.html`](admin.html)).
The homework and notices are stored in the database, because they are constantly changing, the server is programed to every day at 00:05h delete all homework and notice expired, the important dates was implemented with Google Calendar, considering the easy way to share with other people, class schedules was directly typed in the HTML by reason of rarely changes. 
> [!NOTE]
> A Sign Up functionality was not implemented because the small number of contributors, making the addition of new contributors be manually.

The application was mainly based on client-side, the backend just take care of authentication and serve the data. All of the rendering and logical part are made in the browser.
### Why these technologies were used?
Searching for a free hosting, focused in 24/7 availability and speed, I conclude that the mix of GitHub Pages to serve the page, and Supabase to store data, was the best option to the scope of the project.

The fact that the Github Pages don't host servers, just statical pages, make necessary the all logical be processed on the user's browser.
> [!IMPORTANT]
> Security issues: The client-side processing creates some risks of improper handling of malicious attackers. Because that, all operations in database are managed with RLS (Row Level Security).An attacker can easily access the admin page, but he won't be able to do any operation.

## 🚀 Possible future of project
Depending of the project reception, in the future it may be expanded to include not only my class, but any class that need it. 
