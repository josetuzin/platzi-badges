<<<<<<< HEAD
import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
=======
import React from 'react'
import Navbar from './Navbar'

function Layout(props) {
    return (
        <React.Fragment>  
            <Navbar />
            {props.children}
        </React.Fragment>
    )
}


export default Layout
>>>>>>> 9a9b4d8
