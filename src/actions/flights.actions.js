import * as flightsGateway from '../gateways/flights.gateway';
// import { tasksDataSelector } from './flights.selectors'

export const SHOW_SPINNER = 'FLIGHTS/SHOW_SPINNER';
export const FLIGHTS_DATA_RECIEVED = 'FLIGHTS/FLIGHTS_DATA_RECIEVED';
export const FLIGHTS_DATA_FAILURE = 'FLIGHTS/FLIGHTS_DATA_FAILURE';
export const CAHNGE_SELECTED_FLIGHT = 'FLIGHTS/CAHNGE_SELECTED_FLIGHT';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER
  }
}

export const flightsDataRecieved = flightsData => {
  return {
    type: FLIGHTS_DATA_RECIEVED,
    payload: {
      flightsData
    }
  }
}

export const flightsDataError = error => {
  return {
    type: FLIGHTS_DATA_FAILURE,
    payload: {
      error
    }
  }
}
export const changeSelectedFlight = searchText => {
  return {
    type: CAHNGE_SELECTED_FLIGHT,
    payload: {
      searchText
    }
  }
}

export const fetchFlightsList = date => {
  return dispatch => {
    dispatch(showSpinner())
    flightsGateway.getFlightList(date)
      .then(flights => dispatch(flightsDataRecieved(flights)))
      .catch(error => alert(error.message))
  }
}




