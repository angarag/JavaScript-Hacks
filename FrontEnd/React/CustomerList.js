import React, { Component, useState } from "react";
import "./index.css";
let interval = null;
const CustomerList = (props) => {
  const [cname, setCname] = useState("");
  const [list, setList] = useState([]);

  const addCustomer = () => {
    console.log(cname);
    if (cname && typeof cname != "") {
      setList([...list, cname]);
      setCname("");
    }
  };

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="text"
          className="large"
          placeholder="Name"
          data-testid="app-input"
          value={cname}
          onChange={(e) => {
            const newName = e.target.value.trim();
            // clearTimeout(interval);
            // interval = setTimeout(function () {
            setCname(newName);
            // }, 100);
          }}
        />
        <button
          type="submit"
          className="ml-30"
          data-testid="submit-button"
          onClick={addCustomer}
        >
          Add Customer
        </button>
      </section>
      {list && list.length > 0 && (
        <ul className="styled mt-50" data-testid="customer-list">
          {list.map((obj, index) => {
            return (
              <li
                className="slide-up-fade-in"
                data-testid={`list-item${index}`}
                key={`list-item${index}`}
              >
                {obj}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomerList;
