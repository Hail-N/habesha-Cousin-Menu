import React, { Component } from 'react'
import Header from './Header/Header'
import FoodItem from './FoodItem/FoodItem'


export default class App extends Component {
  render() {
    return (
      <div className='all-container'>

        <Header/>
        <FoodItem/>
      
      </div>
    )
  }
}

