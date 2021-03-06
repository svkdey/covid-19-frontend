import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { iconPerson } from "./Icon";
class MapGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 2
    };
  }

  fetchMarker = points => {
    return points
      ? points.map(
          (point, key) => (
            <Marker
              icon={iconPerson}
              className="mark"
              position={[point.lat, point.lon]}
              key={key}
            >
              <Popup>
                <div className="state">
                  Place :{point.state}
                  {point.country && point.state ? "," : ""}
                </div>
                {point.country}
                <div>
                  Confirm:
                  <span className="confirm">
                    {this.findByDataByLocation(
                      this.props.data.confirm,
                      point.lat,
                      point.lon
                    )}
                  </span>
                </div>
                <div>
                  Deaths:
                  <span className="death">
                    {this.findByDataByLocation(
                      this.props.data.death,
                      point.lat,
                      point.lon
                    )}
                  </span>
                </div>
                <div>
                  Recovered:
                  <span className="recover">
                    {this.findByDataByLocation(
                      this.props.data.recovery,
                      point.lat,
                      point.lon
                    )}
                  </span>
                </div>
              </Popup>
            </Marker>
          )
          // console.log(point)
        )
      : "";
  };
  findByDataByLocation(obj, lat, lon) {
    for (var i in obj) {
      if (obj[i].lat === lat && obj[i].lon === lon) {
        return obj[i].latestTotal;
      }
    }
  }
  render() {
    // console.log(this.props.data);
    var points = this.props.data.death;
    // console.log(points);
    return (
      <Map center={[0, 0]} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {points ? this.fetchMarker(points) : ""}
      </Map>
    );
  }
}
export default MapGraph;
