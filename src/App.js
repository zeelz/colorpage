import React, { Component } from 'react'; 
// import { BrowserRouter, NavLink, Redirect } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import ColorButton from './ColorButton.js';

import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      colorButtons: [
        {id: 1, bText: "Reddy", color: "danger"},
        {id: 2, bText: "Bluey", color: "primary"}
      ],
      title: "Color the Page"
    }
  };
  bodyEl = document.getElementsByTagName('body')[0];

  handleColorPage = (e) => {
    this.bodyEl.classList.add("bg-" +e.target.dataset.color);
  };

  intervalHandle;

  clearBg = () => {
    this.bodyEl.setAttribute('style', '');
    if (this.intervalHandle) {      
        clearInterval(this.intervalHandle);
    }
  };
  wrapped = n => n>255 ? n-255 : n;
  initialColor = new Array();

  randomizeColor = () => {
    this.bodyEl.setAttribute('style', '');
    let firstStop = 100;
    let secondStop = 100;
    this.initialColor = [];
    this.initialColor.push(Math.round(Math.random() *255), Math.round(Math.random() *255), Math.round(Math.random() *255));

    this.intervalHandle = setInterval(() => {
      this.bodyEl.style.backgroundImage = "conic-gradient(rgb("+this.initialColor[0]+","+this.initialColor[1]+","+this.initialColor[2]+")" +firstStop+ "%, rgb(" +this.wrapped(this.initialColor[0]+168)+ ","+this.wrapped(this.initialColor[1]+36)+","+this.wrapped(this.initialColor[2]+198)+")" +secondStop+ "%)";
      firstStop--;

      if(firstStop <= 0){
        clearInterval(this.intervalHandle);
      }
    }, 100);    
  }
  
  render() {
    return (

      <div className="App">     
        <h1 className="display-3 m-4 title">{ this.state.title }</h1>
        <button className="btn random" onClick={ this.randomizeColor }>Randomize Color</button>
        <button ref="someRef" className="btn"><span className="text-muted oi oi-ban" title="ban" aria-hidden="true" onClick={ this.clearBg }></span></button>
        
      </div>
    );
  }
}

export default App;