import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      clicked: ''
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/mern")
      .then(data => data.json())
      .then(data => this.setState({ product: data }));
  }
  clickHandle = (e) => {
    const clicked = e.target.attributes.getNamedItem('id').value
    this.setState({ clicked })
  }

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header"></header>
        <meta name="viewport" content="width=device-width, inital-scale= 1.0"></meta>
        {this.state.product.map(e => (
          <div className="product">
            <button>Delete</button>
            <img src={e.url} alt={e.url} />
            <h2><span>{e.name}</span><br></br><span>{e.price}</span></h2>
=======
        <div className={this.state.clicked ? "overlay" : "none"}>
          <form>
            <div>
              <input type="text" placeholder="Name" required />
              <input type="number" placeholder="Price" required />
              <input type="text" placeholder="Url" required />
              <input type="submit" className="submit" />
            </div>
          </form>
        </div>

        {this.state.product.map(e => (
          <div key={e._id}>
            <button>Delete</button>
            <img src={e.url} alt={e.url} id={e._id} onClick={e => this.clickHandle(e)} />
            <h1>{e.name}</h1>
            <h1>{e.price}</h1>
>>>>>>> 3dda73e5fc1af7131afc43b454571649b14173f0
          </div>
        ))}
      </div>
    );
  }
}
export default App;
