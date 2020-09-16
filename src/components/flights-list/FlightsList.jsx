import React from 'react';
import Flight from './Flight'

const FlightsList = ({flights}) => {
  
  if (!flights) {
    return null
  }

  return (
    <table className="flights__list">
      <thead>
        <tr>
          <th>Terminal</th>
          <th>Local time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flights</th>
        </tr>
      </thead>
      <tbody>
        {flights.map(flight => (
          <Flight key={flight.ID} flight={flight}/>
        ))}
      </tbody>
    </table>
  )
}



export default FlightsList
