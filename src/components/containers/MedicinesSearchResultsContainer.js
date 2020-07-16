import React, { Component } from "react";
import MedicineCard from "../cards/MedicineCard";

export default class MedicinesSearchResultsContainer extends Component {
  renderMedicineCards = () => {
    return this.props.filteredMedicines.map((med) => (
      <MedicineCard key={med.id} medicine={med} />
    ));
  };
  render() {
    return (
      <div>
        This is the MedicinesSearchResultsContainer <br />
        {this.renderMedicineCards()}
        This is the end of the MedicinesSearchResultsContainer
      </div>
    );
  }
}
