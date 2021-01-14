import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let cashUnits = [0, 0, 0, 0, 0, 0, 0];
  const [result, setResult] = useState("");
  const [cashArray, setcashArray] = useState(
    cashUnits.map((item) => <li>{item}</li>)
  );
  // if(totalCash.value === null){
  // totalCash.disabled = true;
  // }
  function billAmt() {
    let bill = parseInt(billAmount.value);
    let cashGiven = parseInt(totalCash.value);
    let returnedCash = 0;
    if (billAmount.value == "") {
      totalCash.disabled = true;
    } else if (billAmount.value != "") {
      totalCash.disabled = false;
    }
    if (bill > cashGiven) {
      setResult("Not enough cash");
      cashUnits = [0, 0, 0, 0, 0, 0, 0];
      setcashArray(cashUnits.map((item) => <li>{item}</li>));
    } else if (bill === cashGiven) {
      setResult("Nothing to return");
      cashUnits = [0, 0, 0, 0, 0, 0, 0];
      setcashArray(cashUnits.map((item) => <li>{item}</li>));
    } else if (bill < cashGiven) {
      setResult("");
      returnedCash = cashGiven - bill;
      function divider(moneyNumber, index) {
        let cash = Math.floor(returnedCash / moneyNumber);
        returnedCash = returnedCash % moneyNumber;
        if (cash != 0) {
          cashUnits[index] = cash;
        } else {
          cashUnits[index] = 0;
        }
        return cashUnits;
      }
      divider(2000, 6);
      divider(500, 5);
      divider(100, 4);
      divider(20, 3);
      divider(10, 2);
      divider(5, 1);
      divider(1, 0);
      setcashArray(cashUnits.map((item) => <li>{item}</li>));
    }
  }
  return (
    <div className="App">
      <div className="grid-cont">
        <div id="information">
          <h1>Welcome to Cash Register</h1> <br />
          <p>
            <h3>What is the use of this app?</h3>
            This app is created to make the work of dealing with the cash much
            easier. The purpose of this app is to tell the number of particular
            type of currency to return the customer when they give extra cash.
          </p>
          <p>
            <br />
            <h3>How to use the app?</h3>
            <ol style={{ textAlign: "left" }}>
              <li>
                Enter the amount the customer has to pay in the{" "}
                <strong>Bill Amount</strong> text field.
              </li>
              <li>
                Enter the amount the customer gave you in the{" "}
                <strong>Total cash recieved</strong> text field.{" "}
              </li>
              <li>
                The number of currency notes to pay will appear below, pay that
                amount to the customer and you work is done.
              </li>
            </ol>
            <div
              style={{
                textAlign: "right",
                fontSize: "16px"
              }}
            >
              <br />
              Created by{" "}
              <a
                style={{ color: "#f3e7e0" }}
                href="https://sakshamak.netlify.app/"
              >
                Saksham
              </a>
            </div>
          </p>
        </div>
        <span></span>
        <div id="container">
          <span className="bill-rec">Bill Amount</span>
          <input
            type="number"
            id="billAmount"
            onChange={billAmt}
            placeholder="0"
          />
          <span className="cash-rec">Total cash recieved</span>
          <input
            type="number"
            id="totalCash"
            onChange={billAmt}
            placeholder="0"
            disabled
          />
          <div
            style={{
              padding: "10px 40px 0",
              fontFamily: "roboto",
              width: "320px",
              fontWeight: "bolder",
              textAlign: "right"
            }}
          >
            <span className="resp-text">{result}</span>
          </div>
          <div className="gridCol">
            <ul className="moneyCol">
              <li>₹1&nbsp;&nbsp;&nbsp;</li>
              <li>₹5&nbsp;&nbsp;&nbsp;</li>
              <li>₹10&nbsp;&nbsp;</li>
              <li>₹20&nbsp;&nbsp;</li>
              <li>₹100&nbsp;</li>
              <li>₹500&nbsp;</li>
              <li>₹2000</li>
            </ul>
            <ul></ul>
            <ul></ul>
            <ul
              style={{
                listStyleType: "none",
                padding: "0 20px"
              }}
            >
              {cashArray}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
