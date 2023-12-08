import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar.component';
import Exercises from './components/Exercises.component';
import EditExercises from './components/EditExercises.component';
import CreateExercises from './components/CreateExercises.component';
import CreateUsers from './components/CreateUsers.components';



function App() {
  return (<>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Exercises />} />
        <Route path="/edit/:id" element={<EditExercises />} />
        <Route path="/create" element={<CreateExercises />} />
        <Route path="/user" element={<CreateUsers />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
