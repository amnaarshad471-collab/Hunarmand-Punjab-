import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import React from "react";
import Alert from './Alert';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import About from "./About";
import Courses from './Courses'
import SolorScheme from './SolarScheme';
import Laptop from './Laptop';
import Scholarship from './Scholarship';
import Certificate from './Certificate';
import Apply from './Apply';
import FAQ from './FAQ';
import NewsSection from './NewsSection';
import ContactSection from './ContactSection'
import Login from './Login';
import ApplyNow from './ApplyNow';
import AdmissionForm from './AdmissionForm'

function App() {
  return (
   <div className='App'>
     <Alert />
    <Router>
        <NavBar />
        <Routes>
                  <Route path="/" element={<Home />} />
       <Route  path='/Home' element={<Home />} />
        <Route  path='/About' element={<About />} />
        <Route  path='/Courses' element={<Courses />} />
         <Route  path='/SolorScheme' element={<SolorScheme />} />
          <Route  path='/Laptop' element={<Laptop />} />
          <Route  path='/Scholarship' element={<Scholarship />} />
        <Route  path='/Certificate' element={<Certificate />} />
        <Route  path='/Apply' element={<Apply />} />
        <Route  path='/FAQ' element={<FAQ />} />
       <Route  path='/News' element={<NewsSection />} />
       <Route  path='/ContactSection' element={<ContactSection />} />
              <Route  path='/Login' element={<Login/>} />
              <Route  path='/ApplyNow' element={<ApplyNow/>} />
   <Route  path='/Admission' element={<AdmissionForm/>} />








        </Routes>
    


    </Router>

  



   </div>



  
  );
}

export default App;
