const AddData = (props) => {
    const addDataHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <form onSubmit={addDataHandler}>
      <label>Unique Order ID:</label>
      <input id="orderId" type="text"></input>
      <label>Enter Dish:</label>
      <input id="dish" type="text"></input>
      <label>Enter Price:</label>
      <input id="price" type="number"></input>
      <label for="table">Choose a Table:</label>
      <select id="table" >
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select><br></br>
      <button>Add to bill</button>
    </form>
  );
};
export default AddData;
