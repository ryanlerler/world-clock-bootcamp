import React from "react";
import "./App.css";
import logo from "./logo.png";
import WorldClock from "./Components/WorldClock";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clockData: [
        { id: 1, timeZone: "Asia/Singapore" },
        { id: 2, timeZone: "Mexico/General" },
        { id: 3, timeZone: "Europe/Rome" },
        { id: 4, timeZone: "Japan" },
        { id: 5, timeZone: "America/Los_Angeles" },
        { id: 6, timeZone: "Indian/Maldives" },
      ],

      newTimeZone: "",
    };
  }

  handleChange = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();

    const { newTimeZone, clockData } = this.state;

    if (newTimeZone === "") {
      return;
    }

    const newClock = {
      id: clockData.length + 1,
      timeZone: newTimeZone,
    };

    this.setState((state) => ({
      clockData: [...state.clockData, newClock],
      newTimeZone: "",
    }));
  };

  render() {
    console.log(this.state.clockData);
    const { newTimeZone } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label>Input TZ Identifier to Create a New Clock: </label>
          <a
            className="anchor"
            href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List"
            target="blank"
            title="Wikipedia"
          >
            Link to list of time zone identifier
          </a>
          <input
            name="newTimeZone"
            type="text"
            value={newTimeZone}
            onChange={this.handleChange}
            size={30}
          />
          <button onClick={this.handleClick}>Submit</button>
          <WorldClock clockData={this.state.clockData} />
        </header>
      </div>
    );
  }
}

export default App;
