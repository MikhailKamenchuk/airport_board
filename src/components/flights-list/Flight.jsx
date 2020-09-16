import React from 'react';
import moment from 'moment'

const Flight = ({ flight }) => {
  return (
    <tr className="flights__list__item">
      <td className='flights__list__item_terminal'>
        <span>{flight.term}</span>
      </td>
      <td>{moment(flight.actual).format('HH:mm')}</td>
      <td>{flight['airportToID.city_en'] || flight['airportFromID.city_en']}</td>
      <td>{flight.status}</td>
      <td className='flights__list__item_airline' >
        <img src={flight.airline.en.logoSmallName} alt="Lable" />
        <span>{flight.airline.en.name}</span>
      </td>
      <td>{flight.codeShareData[0].codeShare}</td>
    </tr>
  )
}

export default Flight