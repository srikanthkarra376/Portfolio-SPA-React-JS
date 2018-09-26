import React, { Component } from 'react';
import Landing from './components/landing';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import './App.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { GoTasklist} from "react-icons/go";
import { MdWork } from "react-icons/md";

class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
         <ul>
          <li className="btn btn-success">
           
            <NavLink to="/" exact activeStyle={
              { 
              color:'white',
               fontSize:'1.3em',
               transition:' .5s ease-in-out'
             }
            }>   <FaHome/></NavLink>
          </li>
          <li className="btn btn-success" >
            <NavLink to="/about" exact activeStyle={
              { color:'white',
               fontSize:'1.3em',
               transition:' .5s ease-in-out' 
              }
            }><FaUserTie/></NavLink>
          </li>
          <li  className="btn btn-success">
            <NavLink to="/experience" exact activeStyle={
              { color:'white',
               fontSize:'1.3em',
               transition:' 0.5s ease-in-out'
               }
            }><MdWork/></NavLink>
          </li>
          <li  className="btn btn-success">
            <NavLink to="/projects" exact activeStyle={
              { color:'white',
               fontSize:'1.3em',
               transition:' 0.5s ease-in-out' 
              }
            }> <GoTasklist/></NavLink>
         </li>
         <li  className="btn btn-success">
             <NavLink to="/contact" exact activeStyle={
              { color:'white',
               fontSize:'1.3em',
               transition:' 0.5s ease-in-out'
               }
            }><GoMail/>  </NavLink>
         </li>
          </ul>
          <Route path="/" exact strict render={() =>{
            return ( <Landing />);
             }
            }/> 
          <Route path="/about" exact strict render={() =>{
            return ( <About />);
           }
          }/> 
         <Route path="/projects" exact strict render={() =>{
            return ( <Projects />);
          }
          }/>
         <Route path="/experience" exact strict render={() =>{
            return ( <Experience />);
          }
          }/>
         <Route path="/contact" exact strict render={() => {
            return ( <Contact />);
          }
          }/>
     </div> 
  </Router>
     ); 
  }
}

export default App;
