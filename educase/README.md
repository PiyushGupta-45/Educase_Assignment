# PopX App 

This project is a React + Vite replica of the PopX mobile onboarding UI from:

`https://popx-app-blond.vercel.app/`

It recreates the same visual flow inside a fixed mobile-style frame using React components and client-side routing.

## Tech Stack

- React
- Vite
- React Router DOM
- Plain CSS

## Page Flow

The app has four screens:

1. Welcome page (`/`)
   - Shows the PopX introduction text.
   - Has two actions:
     - `Create Account` -> goes to signup page
     - `Already Registered? Login` -> goes to login page

2. Login page (`/login`)
   - Contains email and password fields.
   - Login button is enabled only when both fields have values.
   - On submit, the app navigates to the profile page.

3. Signup page (`/signup`)
   - Contains:
     - Full Name
     - Phone number
     - Email address
     - Password
     - Company name
     - Agency selection
   - `Create Account` is enabled only when required fields are filled.
   - On submit, the app navigates to the profile page.

4. Profile page (`/profile`)
   - Shows account settings UI.
   - Displays avatar, name, email, and description text.

## Project Structure

- [src/App.jsx](c:/Users/pgupt/OneDrive/Desktop/assignment/educase/src/App.jsx)
  Main app UI and route-based page flow.

- [src/App.css](c:/Users/pgupt/OneDrive/Desktop/assignment/educase/src/App.css)
  Component and page styling for the PopX replica.

- [src/index.css](c:/Users/pgupt/OneDrive/Desktop/assignment/educase/src/index.css)
  Global styles and font setup.

- [index.html](c:/Users/pgupt/OneDrive/Desktop/assignment/educase/index.html)
  App entry HTML and page title.

## How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite, usually:

```bash
http://localhost:5173
```

## Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- Navigation is instant and does not use fake loading spinners.
- Form validation is basic and UI-focused, matching the frontend assignment style.
- This project is built as a visual replica, not a backend-connected authentication app.
