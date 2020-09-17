import moment from 'moment';

export const statusCreator = (status, time) => {
  switch (status) {
    case 'LN':
      return `Landed ${time}`
    case 'DP':
      return `Departed at: ${time}`
    case 'FR':
      return 'In flight'
    case 'ON':
      return 'On time'
    case 'CK':
      return 'Check-in'
    case 'BD':
      return 'Boarding'
    default:
      break;
  }
}

export const flightCreator = (flight, direction) => {
  const localTime = direction === 'departure'
    ? flight.timeDepShedule
    : flight.timeToStand;
  const statusTime = direction === 'departure'
  ? flight.timeTakeofFact
  : flight.timeLandFact;
  const destination = direction === 'departure'
  ? flight['airportToID.city_en']
  : flight['airportFromID.city_en'];

  return {
    id: flight.ID,
    term: flight.term,
    localTime: moment(localTime).format('HH:mm'),
    destination,
    status: statusCreator(flight.status, moment(statusTime).format('HH:mm')),
    airline: {
      logo: flight.airline.en.logoSmallName,
      name: flight.airline.en.name
    },
    flightN: flight.codeShareData[0].codeShare
  }
}