import React from "react";

export const App = () => {
  return (
    <React.Fragment>
      <div class="wrapper">
        <h1>Invoice Logger</h1>

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
    </React.Fragment>
  );
};
