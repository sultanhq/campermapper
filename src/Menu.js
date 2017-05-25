import React, { Component } from 'react';
import { Home } from '../src/Home';
import { Search } from '../src/search';


export class Menu extends Component {

  render(){
    return(
      <div className="Menu">
        <Home />
        <Search
          onMessageSend={function(message) {
          console.log(message)
        }}/>
      </div>
    );
  }
};
