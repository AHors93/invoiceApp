import * as ReactDOM from "react-dom";
import * as React from "react";
import items from ''

class App extends React.Component {
    state: { name: string; email: string; number: any; list: any[]; };
    constructor(props) {
      super(props);
      this.state = {
        tofrom: '',
        details: '',
        amount: null,
        list: []
      }
    }
  
    handleToFrom = (e) => {
      this.state({
        tofrom: e.target.value,
      })
    }
    handleDetails = (e) => {
      this.state({
        details: e.target.value,
      })
    }
    handleAmount = (e) => {
      this.state({
        amount: e.target.value,
      })
    }
  
    // addUsers = async (e) => {
    //   e.preventDefault();
    //   const response = await fetch('http://localhost:7000/addressbook/v1/address', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       name: this.state.name,
    //       email: this.state.email,
    //       number: this.state.number
    //     })
    //   })
    //   const data = await response.json();
    //   console.log(data);
    // };
  
    componentDidMount = async () => {
      await fetch('http://localhost:7000/addressbook/v1/users')
        .then(response => response.json())
        .then(data => this.setState({ list: data.data }));
    };
  
  
    render() {
      return (
        <div className="App">

            <div class="wrapper">
      <h1>Invoice Logger</h1>

      <!-- output list -->
      <ul class="item-list"></ul>
    </div>

    <footer>
      <form class="new-item-form">
        <div class="field">
          <label>Type:</label>
          <select id="type">
            <option value="invoice">Invoice</option>
            <option value="payment">Payment</option>
          </select>
        </div>
        <div class="field">
          <label>To / From:</label>
          <input type="text" id="tofrom" />
        </div>
        <div class="field">
          <label>Details:</label>
          <input type="text" id="details" />
        </div>
        <div class="field">
          <label>Amount (£):</label>
          <input type="number" id="amount" />
        </div>
        <div>
          <button id="addbutton">Add</button>
        </div>
      </form>
    </footer>

    <script src="app.js"></script>
        </div>
      );
    }
  };
    
  export default App;
