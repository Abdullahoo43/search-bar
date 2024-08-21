import { Component } from "react";
import "./search-box.css";

class SearchBox extends Component {
  //   constructor() {}
  render() {
    const { onChangeHandler, placeHolder, clsName } = this.props;

    return (
      <input
        className={`search-box ${clsName}`}
        type="search"
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
