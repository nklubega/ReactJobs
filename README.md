
# ReactJobs

ReactJobs is a job listing platform built with React, providing full CRUD (Create, Read, Update, Delete) functionality.
Users can browse job listings, add new jobs, edit existing ones, and delete jobs.

## Features

- Browse a list of job postings
- View detailed information about each job
- Add new job listings
- Edit existing job listings
- Delete job listings
- Responsive design for various devices
- User-friendly interface with toast notifications

## Technologies Used

- React
- React Router DOM
- React Icons
- React Toastify
- Vite (for development and build)
- JSON Server (for mock backend)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nklubega/ReactJobs.git
   cd ReactJobs
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

4. **Start the JSON Server (mock backend):**

   ```bash
   npm run server
   # or
   yarn server
   ```

   The JSON Server will run at `http://localhost:8000`.

## Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev`: Starts the development server.
- `npm run build` or `yarn build`: Builds the app for production.
- `npm run preview` or `yarn preview`: Previews the production build.
- `npm run server` or `yarn server`: Starts the JSON Server.

## Folder Structure

```
ReactJobs/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Dependencies

```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-icons": "^5.2.1",
  "react-router-dom": "^6.23.1",
  "react-toastify": "^10.0.5"
},
"devDependencies": {
  "@vitejs/plugin-react": "^4.2.1",
  "json-server": "^0.17.3",
  "vite": "^4.0.0"
}
```

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [JSON Server](https://github.com/typicode/json-server)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
