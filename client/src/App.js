import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from "./Layouts/Auth.Layout/AuthLayout";
import ProfileLayout from "./Layouts/Profile.Layout/ProfileLayout";

function App() {
  const isLoged = false
  return (
    <Router>
    
      <Routes>
        <Route path='/' element= {isLoged? <ProfileLayout/>: <AuthLayout/>}/>

      </Routes>
   

    </Router>
  );
}

export default App;
