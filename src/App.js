import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/searc-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.filterMonster = this.filterMonster.bind(this);
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  filterMonster(e) {
    this.setState({ searchField: e.target.value });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMnsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Relodex</h1>
        <SearchBox
          type="search"
          placeholder="search monsters"
          onChange={this.filterMonster}
        />
        <CardList monsters={filteredMnsters} />
      </div>
    );
  }
}
export default App;
