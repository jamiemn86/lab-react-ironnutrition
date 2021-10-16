import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';
import foods from './foods.json';

const listOfFoods = foods.slice(0, 3);
console.log(listOfFoods.slice(0, 3));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: listOfFoods
    };
  }
  render() {
    return this.state.food.map((value) => (
      <div className="App">
        <FoodBox
          name={value.name}
          calories={value.calories}
          image={value.image}
          quantity={value.quantity}
        />
      </div>
    ));
  }
}

export default App;
