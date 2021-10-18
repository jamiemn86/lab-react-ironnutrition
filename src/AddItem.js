import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';

const AddItem = (props) => {
  return (
    <>
      <div className="form">
        <form onSubmit={props.addNew}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={props.name}
              onChange={props.handleChange}
              placeholder="Food name"
            />
          </label>
          <label>
            Calories:
            <input
              type="number"
              name="calories"
              value={props.age}
              onChange={props.handleChange}
              placeholder="Calories"
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="image"
              value={props.city}
              onChange={props.handleChange}
              placeholder="Image URL"
            />
          </label>

          <label>
            Number:{' '}
            <input
              type="number"
              name="quantity"
              value={props.city}
              onChange={props.handleChange}
              placeholder="Quantity"
            />
          </label>

          <button>Add a new food item</button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
