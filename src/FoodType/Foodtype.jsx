import { Component } from "react";
import "./FoodType.css";

export default class Foodtype extends Component {
  render() {
    const { title, img, price, category, desc } = this.props;
    // console.log(this.props)
    // console.log(this.props.title)
    return (
      <div className="single-food">
        <div className="img">
          <img src={img} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
          <h4>{category}</h4>
        </div>
        <div className="food-desc">{desc}</div>
      </div>
    );
  }
}
