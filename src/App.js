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
        {id: 2, bText: "Bluey", color: "primary"},
        {id: 3, bText: "Greeny", color: "success"},
        {id: 4, bText: "Grey", color: "secondary"}
      ],
      title: "Color the Page"
    }
  };
  bodyEl = document.getElementsByTagName('body')[0];

  handleColorPage = (e) => {
    this.bodyEl.classList.remove("bg-danger", "bg-primary", "bg-success", "bg-secondary");
    this.bodyEl.classList.add("bg-" +e.target.dataset.color);
  };

  clearBg = (e) => {
    this.bodyEl.classList.remove("bg-danger", "bg-primary", "bg-success", "bg-secondary");
    this.bodyEl.setAttribute('style', '');
  };

  addRandomColor = () => {
    this.clearBg();
    this.bodyEl.style.backgroundColor = "rgb(" +Math.round(Math.random() *255)+ " " +Math.round(Math.random() *255)+ " " +Math.round(Math.random() *255)+ ")";
  };

  ColorButtonC = (v,i) => <ColorButton key={v.id} colorData={v.color} btnClasses={"btn btn-" +v.color+ " m-1"} doColorPage={ this.handleColorPage } bText={v.bText} />;

  render() {
    return (

      <div className="App mt-5">     
        <h1 className="display-3 m-4 title">{ this.state.title }</h1>
        { this.state.colorButtons.map(this.ColorButtonC) }
        <button className="btn random" onClick={ this.addRandomColor }>Random</button>
        <button ref="someRef" className="btn"><span className="text-muted oi oi-ban" title="ban" aria-hidden="true" onClick={ this.clearBg }></span></button>
        
      </div>
    );
  }
}

export default App;