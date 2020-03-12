import React, { Component } from "react";
import ReactMapGL, { Marker, GeolocateControl } from "react-map-gl";

class MapComponent extends Component {
  pointsOnMap(points) {
    return points.map((point, key) => {
      return (
        <Marker
          key={key}
          latitude={point.lat}
          longitude={point.lon}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div className="mark"></div>
        </Marker>
      );
    });
  }
  render() {
    console.log(this.props);
    var points = this.props.data.death;
    return (
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1Ijoic3ZrZGV5IiwiYSI6ImNrN203OGxhazA2M2ozaXBqc2tjcGFjMWUifQ.DOdIz6qfGAziOZR31GHxVA"
        latitude={10}
        longitude={30}
        width="100%"
        height="55vh"
        onViewportChange={viewport => this.setState({ viewport })}
        zoom={0.5}
      >
        {points ? this.pointsOnMap(points) : null}
      </ReactMapGL>
    );
  }
}
export default MapComponent;
