import { useState, useEffect } from "react";
import "babel-polyfill";
import * as React from "react";

export interface FetchProps extends React.HTMLProps<HTMLLabelElement> {
  children?: any;
}

export interface Spaceship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
}

let FetchData = (props: FetchProps) => {
  let [spaceship, setSpaceship] = useState();
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    populateSpaceshipData();
  }, []);

  const populateSpaceshipData = async function() {
    const response = await fetch("https://swapi.co/api/starships/9/");
    const data = await response.json();
    setSpaceship(data);
    setLoading(false);
  };

  const renderSpaceshipTable = (spaceship: Spaceship) => {
    return (
      <table className='table table-striped' aria-labelledby='tabelLabel'>
        <thead>
          <tr>
            <th>Model</th>
            <th>manufacturer</th>
            <th>cost_in_credits</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          <tr key={spaceship.name}>
            <td>{spaceship.model}</td>
            <td>{spaceship.manufacturer}</td>
            <td>{spaceship.cost_in_credits}</td>
            <td>{spaceship.length}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  let contents = loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderSpaceshipTable(spaceship!)
  );

  return (
    <div>
      <h1 id='tabelLabel'>Spaceship data</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
};

export default FetchData;
