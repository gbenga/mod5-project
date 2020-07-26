import React, { Component } from "react";
import MedicinesSearchResultsContainer from "../containers/MedicinesSearchResultsContainer";
import API from "../../data/API";
import { Form } from "semantic-ui-react";

export default class MedicinesIndexPage extends Component {
  state = {
    medicines: [],
    searchTerm: "",
  };

  componentDidMount() {
    API.fetchMedicines().then((array) =>
      this.setState({ medicines: [...this.state.medicines, ...array] })
    );
  }

  updateSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  filterMedicines = () => {
    return this.state.medicines.filter((e) =>
      e.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <h2>Medicines Search</h2>
        <Form>
          <Form.Field>
            <input
              type="text"
              className="search-bar"
              onChange={this.updateSearchTerm}
              placeholder="Search medicines by name"
            ></input>
          </Form.Field>
        </Form>
        <MedicinesSearchResultsContainer
          filteredMedicines={this.filterMedicines()}
        />
      </div>
    );
  }
}
