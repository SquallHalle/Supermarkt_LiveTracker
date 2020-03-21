import "./leaflet.css";
import "./customermap.styles.css";
import * as React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";

export interface CustomerMapProps {
  className?: string;
}

export function CustomerMap(props: CustomerMapProps) {
  const position: LatLngTuple = [52.520008, 13.404954];

  return (
    <div className={[props.className, "customerMap"].join(" ")}>
      <Map className='customerMap__map' center={position} zoom={15}>
        <TileLayer
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}

export default CustomerMap;
