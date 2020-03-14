import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import ToolTip from "./switch/ToolTip";

class MapComponent extends Component {
  pointsOnMap(points) {
    return points.map((point, key) => {
      return (
        <Marker
          // className="mark"
          key={key}
          latitude={point.lat}
          longitude={point.lon}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div className="tooltip mark">
            <ToolTip
              deathData={point}
              confirmData={this.findByDataByLocation(
                this.props.data.confirm,
                point.lat,
                point.lon
              )}
              recoverData={this.findByDataByLocation(
                this.props.data.recovery,
                point.lat,
                point.lon
              )}
            />
          </div>
        </Marker>
      );
    });
  }
  findByDataByLocation(obj, lat, lon) {
    for (var i in obj) {
      if (obj[i].lat === lat && obj[i].lon === lon) {
        return obj[i].latestTotal;
      }
    }
  }
  render() {
    var points = this.props.data.death;
    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_API_GRAPH}
        latitude={10}
        longitude={30}
        width="100%"
        height="95%"
        onViewportChange={viewport => this.setState({ viewport })}
        zoom={0.5}
      >
        {points ? this.pointsOnMap(points) : null}
      </ReactMapGL>
    );
  }
}
export default MapComponent;
