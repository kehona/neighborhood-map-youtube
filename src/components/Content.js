import React from "react";
import Map from "./Map";
import List from "./List";
import * as LocationsAPI from "../api/Locations";

class Content extends React.Component {
  state = {
    locations: [],
    allLocations: [],
    query: ""
  };
  componentDidMount() {
    console.log("DATA");
    LocationsAPI.getLocations().then(resp =>
      this.setState({ locations: resp, allLocations: resp })
    );
  }

  handleClick = location => {
    for (let i = 0; i < window.markers.length; i++) {
      if (location.venue.id === window.markers[i].title) {
        let content = this.prepareContent(location);
        window.infowindow.setContent(content);
        window.infowindow.open(window.mapObject, window.markers[i]);
      }
    }
  };

  prepareContent = location => {
    return `<div>
    <p className="title">
      Name: <a href="#">${location.venue.name}</a>
    </p>
    <p>Address: ${location.venue.location.address}</p>
  </div>`;
  };

  handleTextChange = query => {
    this.setState({ query });
    if (query) {
      this.setState({
        locations: this.filterLocations(query, this.state.locations)
      });
    } else {
      this.setState({ locations: this.state.allLocations });
    }
  };

  filterLocations = (query, locations) => {
    return locations.filter(location =>
      location.venue.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  render() {
    console.log(this.state.locations);

    return (
      <div className="content">
        <List
          locations={this.state.locations}
          showInfoContent={this.handleClick}
          queryString={this.state.query}
          handleChange={this.handleTextChange}
        />
        <Map
          locations={this.state.locations}
          prepareContent={this.prepareContent}
        />
      </div>
    );
  }
}

export default Content;
