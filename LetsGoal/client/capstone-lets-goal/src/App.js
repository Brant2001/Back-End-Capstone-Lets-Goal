import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./user/UserProfileProvider";
import Header from "./Header";
import ApplicationViews from "./ApplicationViews";
import { GoalProvider } from './goal/GoalProvider';
import { UserGoalProvider } from './goal/UserGoalProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <UserGoalProvider>
          <GoalProvider>
            <Header />
            <ApplicationViews />
          </GoalProvider>
        </UserGoalProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;