import React from "react";
import { render } from "react-dom";
import store from './store'
import {Provider} from 'react-redux';

import NavigationBar from './components/navbar';
import Home from './components/home/';
import Playlist from './components/playlist/';

class App extends React.Component {
  constructor(){
      super();

      this.state = {
        navHeaderSelected: 0
      };
  }

  selectedHeader(header){
      this.setState({
          navHeaderSelected: header
      });
  }

 //add bind when you want the child to change state from the parent
  render() {
    return(
      <div>
        <NavigationBar selectedHeader={this.selectedHeader.bind(this)}/>
        {this.state.navHeaderSelected == 0 && <Home/>}
        {this.state.navHeaderSelected == 1 && <Playlist/>}
      </div>
    );
  }
}

render(<Provider store={store}>
           <App/>
       </Provider>, document.getElementById('root'));


       // {this.state.navHeaderSelected == 1 && <Playlist/>}
