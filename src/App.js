import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';
import foods from './foods.json';
import AddItem from './AddItem';

const listOfFoods = foods.slice(0, 3);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: listOfFoods,
      newFoodAddition: {
        name: '',
        calories: '',
        image: '',
        quantity: '',
      },
    };
  }
  handleChange = (event) => {
    console.log('handleChange was executed');
    console.log(event.target.value);
    console.log(this.state.newFoodAddition);
    const name = event.target.name;
    const type = event.target.type;
    let value =
      type === 'number' ? event.target.valueAsNumber : event.target.value;
    // if (Number.isNaN(value)) value = 0;
    if (Number.isNaN(value)) value = '';
    this.setState((previousState) => {
      return {
        newFoodAddition: { ...previousState.newFoodAddition, [name]: value },
      };
    });
  };
  addFoodItem = (event) => {
    event.preventDefault();
    const content = this.state.newFoodAddition;
    console.log(content);
    // const newFoodItem = {
    //   name: 'Test item',
    //   calories: 150,
    //   image: 'https://i.imgur.com/DupGBz5.jpg',
    //   quantity: 0,
    // };
    this.setState((currentState) => {
      return {
        food: [...currentState.food, content],
      };
    });
  };
  render() {
    const values = {
      name: this.state.newFoodAddition.name,
      calories: this.state.newFoodAddition.calories,
      image: this.state.newFoodAddition.image,
      quantity: this.state.newFoodAddition.quantity,
    };
    return (
      <div className="App">
        <AddItem
          addNew={this.addFoodItem}
          handleChange={this.handleChange}
          {...values}
        />
        {this.state.food.map((value) => {
          return (
            <FoodBox
              name={value.name}
              calories={value.calories}
              image={value.image}
              quantity={value.quantity}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
