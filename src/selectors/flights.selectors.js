import { createSelector } from "reselect";
import moment from 'moment';

export const allFlightsSelector = state => state.flights.flightsList;
export const isFetchingSelector = state => state.flights.isFetching;
export const errorSelector = state => state.flights.error;
export const selectedFlightSelector = state => state.flights.selectedFlight;
export const dateSelector = state => state.flights.date;

const statusCreator = (status, time) => {
  switch (status) {
    case 'LN':
      return `Landed ${time}`
    case 'DP':
      return `Departed at: ${time}`
    case '':
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

export const departuresSelector = createSelector(
  [allFlightsSelector, dateSelector],
  (flights, date) => {
    if (flights.length === 0) {
      return []
    }

    return [...flights.body.departure]
      .filter(flight => moment(flight.timeDepShedule).format('DD-MM-YYYY') === date)
      .sort((a, b) => moment(a.timeDepShedule).format("HH:mm") - moment(b.timeDepShedule).format("HH:mm"))
      .map(flight => {
        return {
          id: flight.ID,
          term: flight.term,
          localTime: moment(flight.timeDepShedule).format('HH:mm'),
          destination: flight['airportToID.city_en'],
          status: statusCreator(flight.status, moment(flight.timeTakeofFact).format('HH:mm')),
          airline: {
            logo: flight.airline.en.logoSmallName,
            name: flight.airline.en.name
          },
          flightN: flight.codeShareData[0].codeShare
        }
      });
  }
)
export const arrivalsSelector = createSelector(
  [allFlightsSelector, dateSelector],
  (flights, date) => {
    if (flights.length === 0) {
      return []
    }

    return [...flights.body.arrival]
      .filter(flight => moment(flight.timeToStand).format('DD-MM-YYYY') === date)
      .sort((a, b) => moment(a.timeToStand).format("HH:mm") - moment(b.timeToStand).format("HH:mm"))
      .map(flight => {
        return {
          id: flight.ID,
          term: flight.term,
          localTime: moment(flight.timeToStand).format('HH:mm'),
          destination: flight['airportFromID.city_en'],
          status: statusCreator(flight.status, moment(flight.timeLandFact).format('HH:mm')),
          airline: {
            logo: flight.airline.en.logoSmallName,
            name: flight.airline.en.name
          },
          flightN: flight.codeShareData[0].codeShare
        }
      });
  }
)
