# User Profile App

A simple single-page React application that displays user profile information including personal details and skills.

## 📋 Features

- **Header Section** - App title with navigation menu (Home, Profile, Contact)
- **Profile Section** - Displays user information including:
  - Profile picture
  - Name and bio
  - Email and phone number
  - Contact button with click functionality
- **Skills Section** - Shows a list of technical skills in card format
- **Footer** - Simple footer with copyright information
- **Responsive Design** - Works on desktop, tablet, and mobile devices

## 🛠️ Technologies Used

- React 18
- JavaScript (ES6+)
- CSS3
- HTML5

## 📦 Installation and Setup

### Prerequisites
Make sure you have Node.js and npm installed on your system.

### Steps to Run

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd "React task -1"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   The app will automatically open at `http://localhost:3000`

## 📁 Project Structure

```
React task -1/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Profile.js
│   │   ├── Skills.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Components Overview

### App.js
Main component that holds the application state and renders all child components. Uses `useState` hook to manage user data.

### Header.js
Displays the app title and navigation menu with click handlers.

### Profile.js
Shows user profile information and a "Contact Me" button that triggers an alert with contact details.

### Skills.js
Renders a list of skills passed as props, displaying them in card format.

### Footer.js
Simple footer component with dynamic year display.

## 💡 Features Implemented

✅ Functional Components  
✅ React Hooks (useState)  
✅ Props for data passing  
✅ Click event handlers  
✅ Responsive design  
✅ Clean component structure  
✅ Static data (no backend required)

## 🔧 Customization

To customize the profile data, edit the `userData` and `skills` objects in `src/App.js`:

```javascript
const [userData] = useState({
  name: "Rani",
  bio: "I am a Frontend Developer learning React...",
  email: "raniachheylal24@navgurukul.org",
  phone: "9311831213",
  image: "https://github.com/Rani52057kumari.png"
});

const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];
```

## 📝 Notes and Assumptions

- Used GitHub profile picture for the profile image
- No actual routing implemented - navigation items show alerts on click
- All data is hardcoded in the App component
- Used basic CSS for styling to keep it simple
- Responsive breakpoints at 768px and 480px
- Contact button shows an alert instead of actual form submission

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs tests (if any)

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1000px+)
- Tablet (768px - 999px)
- Mobile (less than 768px)

## 🎯 Assignment Requirements Completed

- ✅ Single-page React application
- ✅ Functional components with useState
- ✅ Header with navigation
- ✅ Profile section with all required fields
- ✅ Skills section with 5 skills
- ✅ Footer with copyright
- ✅ Basic CSS styling
- ✅ Clean code structure
- ✅ Bonus: Responsive design
- ✅ Bonus: Contact button with alert
- ✅ Bonus: Props usage

## 👤 Author

Rani

## 📄 License

This project is created as part of a frontend internship assignment.

---

**Note:** This is a practice project created for learning purposes.
