import React, { useState } from "react";
import "./App.css";
import AddData from "./components/AddData";
import ShowData from "./components/ShowData";

function App() {
  const [usersData, setUsersData] = useState([]);

  const addUserHandler = (uId, uDish, uPrice, uTable) => {
    setUsersData((prevUsersData) => {
      return [
        ...prevUsersData,
        { ID: uId, Dish: uDish, Price: uPrice, TableNo: uTable },
      ];
    });
  };
  return (
    <div className="App-header">
      <AddData onAddUser={addUserHandler} />
      <ShowData users={usersData} />
    </div>
  );
}

export default App;
