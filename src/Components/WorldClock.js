import React from "react";
import Clock from "./Clock";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WorldClock extends React.Component {
  render() {
    const { clockData } = this.props;
    const worldClock = clockData.map((clock) => (
      <Row key={clock.id}>
        <Col>
          <header>{clock.timeZone}</header>
        </Col>
        <Col>
          <Clock timeZone={clock.timeZone} />
        </Col>
      </Row>
    ));
    return (
      <Container fluid>
        <br />

        <Row>
          <Col>
            <header>Time Zone</header>
          </Col>
          <Col>
            <header>Clock</header>
          </Col>
        </Row>

        {worldClock}
      </Container>
    );
  }
}

export default WorldClock;
