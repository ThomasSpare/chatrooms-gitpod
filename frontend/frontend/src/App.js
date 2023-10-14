import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "./features/user";
import HomePage from "./containers/HomePage";
import CoachArea from "./containers/CoachArea";
import RegisterPage from "./containers/RegisterPage";
import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
import ProfilePage from "./containers/ProfilePage";
import Learn from "./containers/Learn";
import "./App.css";
import Strollers from "./containers/Strollers";





const App = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
   dispatch(checkAuth()); 
  }, []);


  return (
    <div className="App">
        <Router>          
              <Routes>
                  <Route exact path='/' element={<HomePage />} />
                  <Route path='/coaching' element={<CoachArea />} />
                  <Route path='/dashboard' element={<DashboardPage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/profile' element={<ProfilePage />} />
                  <Route path='/learn' element={<Learn />} />
                  <Route path='/strollers' element={<Strollers />} />
              </Routes>
        </Router> 
    </div>
  );
};

export default App;       