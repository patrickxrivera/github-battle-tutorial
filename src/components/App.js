import React from 'react';
import Popular from './Popular';
import {
         BrowserRouter as
         Router,
         Route,
         Switch
       }
  from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App__container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={Error} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function Error() {
  return <p>Not Found</p>;
}

export default App;
