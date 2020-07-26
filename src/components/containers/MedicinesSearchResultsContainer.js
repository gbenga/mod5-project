import React, { Component } from "react";
import MedicineCard from "../cards/MedicineCard";
import { Grid } from "semantic-ui-react";

export default class MedicinesSearchResultsContainer extends Component {
  renderMedicineCards = () => {
    return this.props.filteredMedicines.map((med) => (
      <Grid.Column>
        <MedicineCard key={med.id} medicine={med} />
      </Grid.Column>
    ));
  };
  render() {
    return (
      <Grid>
        <Grid.Row columns={3}>{this.renderMedicineCards()}</Grid.Row>
      </Grid>
    );
  }
}
