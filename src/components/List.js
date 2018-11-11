import React from "react";
import Map from "./Map";

class List extends React.Component {
  render() {
    // location list
    const locations = this.props.locations;
    return (
      <div id="list">
        <h2>Locations</h2>
        <p>{this.props.queryString}</p>
        <input type="text" value={this.props.queryString} onChange={e => this.props.handleChange(e.target.value)} />
        <ol>
          {locations.map(loc => (
            <li key={loc.venue.id}>
              <div>
                <p className="title">
                  Name:{" "}
                  <a href="#" onClick={() => this.props.showInfoContent(loc)}>
                    {loc.venue.name}
                  </a>
                </p>
                <p>Address: {loc.venue.location.address}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default List;
