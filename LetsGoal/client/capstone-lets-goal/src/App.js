import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./user/UserProfileProvider";
// import Header from "./components/Header";
import ApplicationViews from "./ApplicationViews";

function App() {
  return (
    <Router>
      <UserProfileProvider>
        {/* <Header /> */}
        <ApplicationViews />
      </UserProfileProvider>
    </Router>
  );
}

export default App;