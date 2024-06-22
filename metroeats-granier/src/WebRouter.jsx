import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useLocalStorage } from "react-use";
/*
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import CompleteRegister from './pages/CompleteRegister';
import Contact from './pages/Contact';
import HomeEmployee from './pages/HomeEmployee';
import InProgress from './pages/InProgress';
*/

const WebRouter = () => {
  
  const [user,setUser] = useLocalStorage("user")
  const [gmail,setGmail] = useLocalStorage("gmail")

  return (
    <Router>
      <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/*
        <Route path="" element={<LandingPage/>}/>
        
        <Route element={<ProtectedRoute canActivate={gmail}> Si existe gmail
        <Route path="/register/complete" element={<CompleteRegister/>}/>
        

        <Route element={<ProtectedRoute canActivate={user}}> Que este activo la sesion
                                                             guardando en local storage cuando inicie sesion
        <Route path="/granier/aboutUs" element={<AboutUs/>}/>
        <Route path="/granier/inprogress" element={<InProgress/>}/>
        <Route path="/granier/contact" element={<Contact/>}/>
        </Route>

        Route element={<ProtectedRoute canActivate={user}> Que sea empleado
        <Route path="/granier/homeEmployee" element={<HomeEmployee/>}/>
        */}

      </Routes>
      </div>
    </Router>
  );
};

export default WebRouter;
