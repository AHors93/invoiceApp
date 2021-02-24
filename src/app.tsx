import * as ReactDOM from "react-dom";
import * as React from "react";

class App extends React.Component {
  state: { name: string; details: string; amount: any };
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      details: "",
      amount: null,
    };
  }

  handleName = (e) => {
    this.state({
      name: e.target.value,
    });
  };
  handleDetails = (e) => {
    this.state({
      details: e.target.value,
    });
  };
  handleAmount = (e) => {
    this.state({
      amount: e.target.value,
    });
  };

  componentDidMount = async () => {
    await fetch("http://localhost:8080")
      .then((response) => response.json())
      .then((data) => this.setState({ list: data.data }));
  };
  render() {
    return (
      <div>
        <h1>Invoice Logger</h1>

        <ul class="item-list"></ul>
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
      </div>
    );
  }
}
