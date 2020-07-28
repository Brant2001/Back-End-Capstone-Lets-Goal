import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./user/UserProfileProvider";
import Header from "./Header";
import ApplicationViews from "./ApplicationViews";
import { GoalProvider } from './goal/GoalProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <GoalProvider>
          <Header />
          <ApplicationViews />
        </GoalProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;