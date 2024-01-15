import React from "react";

const ShowData = (props) => {
  return (
    <div>
      {/* <h1 className="title">Orders:</h1>
        <ul id="table1"><h2>Table 1</h2></ul>
        <ul id="table2"><h2>Table 2</h2></ul>
        <ul id="table3"><h2>Table 3</h2></ul>
        <ul id="ListOfItems"></ul> */}
    <ul>
        {props.users.map((user)=>{
            console.log(user.TableNo)
            if(user.TableNo==="table1"){
                <div>
                <ul id="table1"><h2>Table 1</h2></ul>
                <li>{user.Dish} {user.Price} {user.TableNo}</li>
                <ul id="table2"><h2>Table 2</h2></ul>
                <ul id="table3"><h2>Table 3</h2></ul>
                </div>
            }
            else if(user.TableNo==="table2"){
                <div>
                <ul id="table1"><h2>Table 1</h2></ul>
                <ul id="table2"><h2>Table 2</h2></ul>
                <li>{user.Dish} {user.Price} {user.TableNo}</li>
                <ul id="table3"><h2>Table 3</h2></ul>
                </div>
            }
            else{
                
                <div>
                    {console.log(true)}
                <li>Table 1</li>
                <li>Table 2</li>
                <li>Table 3</li>
                <li>{user.Dish} {user.Price} {user.TableNo}</li>
                </div>
            }
        })}
    </ul>

    </div>
  );
};
export default ShowData;
