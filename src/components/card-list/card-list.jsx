import { Component } from "react";
import "./card-list.css";
import Card from "../card/card.jsx";

class CardList extends Component {
  //   constructor() {}
  render() {
    console.log("render from CardList");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((m) => (
          <Card monster={m} />
        ))}
      </div>
    );
  }
}

export default CardList;
