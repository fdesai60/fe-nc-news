# News Website

## Browse through a range of articles, while also being able to comment and vote

Visit my deployed version: https://fastreads.netlify.app/

---

## About This Project

This is a responsive news website where users can explore a range of articles, leave comments, and vote.

Current features include:  
- **User Login**: Access the website using pre-existing accounts or as a guest.  
- **Article Browsing**: Sort articles by topic, date, author, or votes.  
- **Interactive Comments**: Add, view, or delete your own comments.  
- **Voting**: Upvote or downvote articles with optimized rendering for error handling.  
- **Responsive Design**: A seamless experience across mobile and desktop screens.  
- **Footer Links**: Placeholder social media links for future integration.  

---

## How to Use This Project

### Header Navbar
- The homepage defaults to the **Topics page** in guest mode.  
- Navigate to the **Login page** to sign in with one of the existing usernames:  
  - `tickle122`, `grumpy19`, `happyamy2016`, `cooljmessy`, `weegembump`, `jessjelly`  
- Invalid usernames trigger a popup allowing guest access.  
- New user registration and password validation features are under development.

### Articles
- Select a topic from the Topics page to browse articles.  
- Sort articles by **date**, **author**, or **votes** (ascending or descending).  
- Choose an article to:  
  - **Read** the article with an accompanying image.  
  - **Comment** via a dropdown menu to:
    - View all comments.  
    - Add new comments (send button is disabled during submission).  
    - Delete your own comments (using the trash icon).  
  - **Vote** on the article (buttons disable after one vote).  

### Footer
- Placeholder links to social media (coming soon).  

---

## Planned Features

1. **User Registration and Password Validation**:  
   - Allow new users to sign up and validate passwords for security.
2. **Enhanced User Roles**:  
   - Provide exclusive features for signed-in users.
3. **Comment Voting**:  
   - Allow users to upvote or downvote comments.
4. **Social Media Integration**:  
   - Add links to active social media pages.
5. **Advanced Filters**:  
   - Enable filtering by popularity, topic relevance, and more.  
6. **Real-Time Updates**:  
   - Introduce live updates for comments and votes.

---

## Development Planning

- **Wireframes**:  
  Detailed designs for both **mobile** and **desktop** views to ensure responsiveness and usability.
- **Component Diagrams**:  
  Structured diagrams were used to define the app's architecture for better maintainability and scalability.


---

## Technical Stack

- **Frontend**: React (with Vite for development)  
- **Backend**: Node.js (minimum version v22.9.0) and Express.js  
- **Database**: PostgreSQL  

---

## Backend repo
Visit my backend on github: https://github.com/fdesai60/be-nc-news


---

## Deployment

The app is deployed using Netlify. Any future updates will involve:  
1. Building the project using `npm run build`.  
2. Deploying the draft or production version using Netlify CLI:  
   - `netlify deploy` (draft)  
   - `netlify deploy --prod` (production).  

---

## Running This Project Locally

Follow these steps to clone and run the project locally on your machine:

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v22.9.0 or later)
- **npm** 
- **Git**

### Steps to Clone and Run

1. **Clone the repository**  
    - git clone https://github.com/fdesai60/be-nc-news.git

2. **move into your project folder**
    - cd name-of-folder project-cloned-in>

3. **Install dependencies**:  
   - npm install

4. **Run in development mode**:  
   - npm run dev
   - Open link in terminal to your local host

---
NOTE:This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)







