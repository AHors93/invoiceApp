import React from "react";

export class App extends React.Component {
  addEntry: any;
  setState: any;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    interface IEntry {
      toFrom: string;
      Details: string;
      Amount: number;
    }
  }
  handletoFrom = (e: { target: { value: any } }) => {
    this.setState({
      toFrom: e.target.value,
    });
  };
  handleDetails = (e: { target: { value: any } }) => {
    this.setState({
      Details: e.target.value,
    });
  };
  handleAmount = (e: { target: { value: any } }) => {
    this.setState({
      Amount: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Invoice Logger</h1>
          <footer>
            <div className="form-selector">
              <label>Type:</label>
              <select id="type">
                <option value="invoice">Invoice</option>
                <option value="payment">Payment</option>
              </select>
            </div>
            <form className="new-item-form">
              <label>To / From:</label>
              <input type="text" id="tofrom" onChange={this.handletoFrom} />
              <label>Details:</label>
              <input type="text" id="details" onChange={this.handleDetails} />
              <label>Amount (£):</label>
              <input type="number" id="amount" onChange={this.handleAmount} />
              <button type="submit" id="addbutton" onClick={this.addEntry}>
                Add
              </button>
            </form>
          </footer>
        </header>
      </div>
    );
  }
}
