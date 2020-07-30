import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./user/UserProfileProvider";
import Header from "./Header";
import ApplicationViews from "./ApplicationViews";
import { GoalProvider } from './goal/GoalProvider';
import { UserGoalProvider } from './goal/UserGoalProvider';
import { GoalTypeProvider } from './goalType/GoalTypeProvider';
import { DifficultyProvider } from './difficulty/DifficultyProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <UserGoalProvider>
          <GoalTypeProvider>
            <DifficultyProvider>
              <GoalProvider>
                <Header />
                <ApplicationViews />
              </GoalProvider>
            </DifficultyProvider>
          </GoalTypeProvider>
        </UserGoalProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;