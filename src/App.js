import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {

  render() {
    const [clicks, setClicks] = React.useState();

    const catOnClick = () => {
      setClicks(clicks + 1);
    }
    
    return (
      <div className="App">
        <header className="App-header">       
        </header>
        <button>Hello</button>
        <img onClick={catOnClick} src="cat.png" />
        <p class="clicks">Clicks {clicks}</p>
      </div>
    )
  }
}

export default App
