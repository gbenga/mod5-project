import React, { Component } from "react";
import PharmaCard from "../cards/PharmaCard";
import { Grid } from "semantic-ui-react";

export default class PharmasIndexContainer extends Component {
  renderPharmaCards = () => {
    return this.props.pharmas.map((pharma) => (
      <Grid.Column>
        <PharmaCard pharma={pharma} key={pharma.id} />
      </Grid.Column>
    ));
  };

  render() {
    return (
      <Grid>
        <Grid.Row columns={3}>{this.renderPharmaCards()}</Grid.Row>
      </Grid>
    );
  }
}
