import React  from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Robot Factory</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Robot</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

App.propTypes= {
    children: PropTypes.node
};

export default App;