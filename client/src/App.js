import './App.css';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";

import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Upload from './pages/Upload/Upload.js';
import Group from './pages/Group/Group.js';
import User from './pages/User/User.js';
import University from './pages/University/University.js';
import Error from './pages/Error/Error.js'
import Editprofile from './pages/Editprofile/Editprofile.js'


import Navbar from './components/Navbar.js'
import Comment from './components/Comment.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact render = {() => <Home />} />
          <Route path="/register" exact render = {() => <Register />} />
          <Route path="/login" exact render = {() => <Login />} />
          <Route path="/upload" exact render = {() => <Upload />} />
          <Route path="/in/:username" exact render = {(props) => <User {...props} />} />
          <Route path="/in/:username/edit" exact render = {(props) => <Editprofile {...props} />} />
          <Route path="/in" component={Error} />
          <Route path="/:universityId" exact render = {(props) => <University {...props} />} />
          <Route path="/:universityId/group" exact render = {(props) => <Group {...props} />} />
          <Route path="/:universityId/group/:postid/comment" exact render = {() => <Comment />} />

          <Route  component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
