import React, { useState } from 'react';

const AddData = (props) => {
    const [id,setId]=useState('');
    const [dish,setDish]=useState('');
    const [price,setPrice]=useState('');
    const [table,setTable]=useState('');


    const addDataHandler=(event)=>{
        event.preventDefault();
        console.log(id,dish,price,table)
    }
    const idChangeHandler=(event)=>{
        setId(event.target.value)
    }
    const dishChangeHandler=(event)=>{
        setDish(event.target.value)
    }
    const priceChangeHandler=(event)=>{
        setPrice(event.target.value)
    }
    const tableChangeHandler=(event)=>{
        setTable(event.target.value)
    }
  return (
    <form onSubmit={addDataHandler}>
      <label htmlFor="id" >Unique Order ID:</label>
      <input id="orderId" type="text" onChange={idChangeHandler}></input>
      <label htmlFor="dish">Enter Dish:</label>
      <input id="dish" type="text" onChange={dishChangeHandler}></input>
      <label htmlFor="price">Enter Price:</label>
      <input id="price" type="number" onChange={priceChangeHandler}></input>
      <label htmlFor="table" >Choose a Table:</label>
      <select id="table" onChange={tableChangeHandler} >
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select><br></br>
      <button>Add to bill</button>
    </form>
  );
};
export default AddData;
