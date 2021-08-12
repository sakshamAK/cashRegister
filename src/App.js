import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  let cashUnits = [0, 0, 0, 0, 0, 0, 0];
  const [result, setResult] = useState("");
  let [disable, setDisable] = useState(true);
  const [yourBill, setBill] = useState(0);
  const [yourCashGiven, setCashGiven] = useState(0);
  const [cashArray, setcashArray] = useState(
    cashUnits.map((item) => <li>{item}</li>)
  );
  // let billAmount = document.querySelector("#billAmount");
  // let totalCash = document.querySelector("#totalCash");
  // console.log(billAmount);
  const billAmt = (e, id) => {
    //input and decaration
    let bill = Number(yourBill);
    let cashGiven = Number(yourCashGiven);
    let returnedCash;
    if (id === "billAmount") setBill(e.target.value);
    if (id === "totalCash") setCashGiven(e.target.value);
    returnedCash = 0;
    console.log(bill, cashGiven);

    // enabling/disabling input field

    if (bill === 0) {
      setDisable(true);
    } else if (bill !== 0) {
      setDisable(false);
    }

    //tell user if cash is enough or not

    if (bill > cashGiven) {
      setResult("Not enough cash");
      cashUnits = [0, 0, 0, 0, 0, 0, 0];
      setcashArray(cashUnits.map((item) => <li>{item}</li>));
    } else if (bill === cashGiven) {
      setResult("Nothing to return");
      cashUnits = [0, 0, 0, 0, 0, 0, 0];
      setcashArray(cashUnits.map((item) => <li>{item}</li>));
    } else if (bill < cashGiven) {
      // processing

      setResult("");
      returnedCash = cashGiven - bill;
      function divider(moneyNumber, index) {
        let cash = Math.floor(returnedCash / moneyNumber);
        returnedCash = returnedCash % moneyNumber;
        if (cash !== 0) {
          cashUnits[index] = cash;
        }
        if (cash < 0) {
          cashUnits[index] = 0;
        }
        return cashUnits;
      }

      //executiom

      divider(2000, 6);
      divider(500, 5);
      divider(100, 4);
      divider(20, 3);
      divider(10, 2);
      divider(5, 1);
      divider(1, 0);

      //output

      setcashArray(cashUnits.map((item) => <li>{item}</li>));
    }
  };

  useEffect(() => {
    billAmt();
  }, [yourBill, yourCashGiven]);

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
          {/* bill Text Field */}

          <span className="bill-rec">Bill Amount</span>
          <input
            type="number"
            id="billAmount"
            value={yourBill}
            onChange={(e) => billAmt(e, "billAmount")}
            placeholder="0"
          />

          {/* cash text field */}

          <span className="cash-rec">Total cash recieved</span>
          <input
            type="number"
            id="totalCash"
            value={yourCashGiven}
            onChange={(e) => billAmt(e, "totalCash")}
            placeholder="0"
            disabled={disable}
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
