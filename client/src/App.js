import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

import Addtask from './components/Task/AddTask'
import ViewTask from './components/Task/ViewTask'
import EditTask from './components/Task/EditTask';

import AddTwitters from './components/Twittersy/AddTwitters';
import ViewTwitters from './components/Twittersy/ViewTwitters';
import EditTwitters from './components/Twittersy/EditTwitters';


import Twitter from './components/Twitter/Twitter';
import EditTwitter from './components/Twitter/EditTwitter'
import Comunicator from './components/Chat/Comunicator';
import ViewAdmin from './components/Admin/ViewAdmin';
import ViewsFilm from './components/Filmy/ViewsFilm';
import Programing from './components/Filmy/Programing';
import Music from './components/Filmy/Music';
import Mountains from './components/Filmy/Mountains';
import Story from './components/Filmy/Story';
import Context from './components/ListItem/Context';
import Error404 from './components/Error404';
import Works from './components/ListWorks/Works';
class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            

            <Route exact path="/edit/:id" component={EditTask}/>
            <Route exact path="/addtask" component={Addtask} />
            <Route exact path="/viewtask" component={ViewTask} />

            <Route exact path="/editTwitter/:id" component={EditTwitters}/>
            {/* <Route exact path="/addtwitters" component={ViewTwitters} /> */}
            <Route exact path="/viewTwitter" component={ViewTwitters} />

            {/* <Route exact path="/twitter" component={Twitter} />
            <Route exact path="/twitter/add" component={Twitter} /> */}
            <Route exact path="/chat" component={Comunicator} />
            <Route exact path="/profile/admin" component={ViewAdmin} />
            <Route exact path="/profile/film" component={ViewsFilm} />
            <Route exact path="/profile/film/programing" component={Programing} />
            <Route exact path="/profile/film/music" component={Music} />
            <Route exact path="/profile/film/mountains" component={Mountains} />
            <Route exact path="/profile/film/story" component={Story} />
            <Route exact path="/list-works" component={Works} />
            <Route exact path="/list" component={Context} />
            <Route exact component={Error404}></Route>
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App