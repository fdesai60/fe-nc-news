# FastReads News Website

<a href="https://fastreads.netlify.app/" target="_blank">🌐 Check Out My Live Deployed App!</a>     
<a href="https://github.com/fdesai60/be-nc-news" target="_blank">💻 Explore the Backend I Built!</a>

---

## Screenshots & Features

### 1. User Login & Guest Accounts
**1.1 Guest view**  
When browsing without signing in, users are automatically assigned a **guest account** with the username **cooljmessy**.  
Any comments added while browsing as a guest will appear under this name.  

<div align="center">
  <img src="assets/01-topics.png" width="600px">
</div>

**1.2 Logged in user**  
Sign in with an existing account.

<div align="center">
  <img src="assets/15-login.png" width="600px">
</div>

---

### 2. Topics Page
**2.1 No topic selected**  
Displays all topics.  

<div align="center">
  <img src="assets/01-topics.png" width="600px">
</div>

**2.2 Topic selected**  
Highlights the selected topic.  

<div align="center">
  <img src="assets/02-select-topic.png" width="600px">
</div>

---

### 3. Articles Page
**3.1 All articles for selected topic**  
Shows all articles under the chosen topic. Users can sort by **date, author, or votes**.  

<div align="center">
  <img src="assets/03-articles.png" width="600px">
</div>

**3.2 Selected article highlighted**  
The article you select is visually distinguished in a different color.  

<div align="center">
  <img src="assets/04-select-art.png" width="600px">
</div>

---

### 4. Reading a Single Article
**4.1 Full article view**  
Displays the full text of the chosen article.  

<div align="center">
  <img src="assets/05-art-read.png" width="600px">
</div>

**4.2 View comments dropdown**  
Clicking the comments button shows options to **view, add, or delete comments**.  
Clicking again hides these options.  

<div align="center">
  <img src="assets/08-hide-dropdown.png" width="600px">
</div>

---

### 5. Adding and Viewing Comments
**5.1 Send a comment**  
Users can write a comment for the article.  

<div align="center">
  <img src="assets/09-send-comm.png" width="600px">
</div>

**5.2 Sending feedback**  
Displays a temporary “sending” state while the comment is being processed.  

<div align="center">
  <img src="assets/10-comm-sending-msg.png" width="600px">
</div>

**5.3 Comment added**  
Shows the newly added comment in the list.  
> Reminder: The comment will display **your username**.  
> If browsing as a guest, this will appear as **cooljmessy**.

<div align="center">
  <img src="assets/11-see-comm-added.png" width="600px">
</div>

**5.4 Delete comment**  
Users can only delete **their own comments**. Comments written by others cannot be deleted.  

<div align="center">
  <img src="assets/12-del-comment.png" width="600px">
</div>

---

### 6. Voting
**6.1 Upvote an article**  
Users can vote on articles.  

<div align="center">
  <img src="assets/13-vote.png" width="600px">
</div>

**6.2 After voting**  
Displays a message confirming the vote and disables further voting.  

<div align="center">
  <img src="assets/14-voted.png" width="600px">
</div>  


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
