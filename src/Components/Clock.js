import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  tick = () =>
    this.setState({
      date: new Date(),
    });

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    console.log("Ticked");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { timeZone } = this.props;
    const { date } = this.state;
    return (
      <div>
        {/* <p>
          {this.props.timeZone} - {this.state.date.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}
        </p> */}

        {/*Destructring syntax
        Extract property name (timeZone/ date) from this.props/ this.state and save it in a variable with the same name (timeZone/ date) 
        Then, access the variable value inside JSX
        For e.g., timeZone (object key): timeZone (variable with the value of this.props.timeZone which is passed from App component)*/}
        <p>
          {/* {timeZone} -{" "} */}
          {date.toLocaleString("en-GB", {
            timeZone: timeZone,
          })}
        </p>
      </div>
    );
  }
}
