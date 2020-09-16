import { createSelector } from "reselect";
import moment from 'moment';

export const departuresSelector = state => {
  if (state.flights.flightsList.length === 0) {
    return []
  }
  return [...state.flights.flightsList.body.departure].sort((a, b) => {
    return moment(a.actual).format("HHmm") - moment(b.actual).format("HHmm")
  });
};

export const arrivalsSelector = state => {
  if (state.flights.flightsList.length === 0) {
    return []
  }
  return [...state.flights.flightsList.body.arrival].sort((a, b) => {
    return moment(a.actual).format("HHmm") - moment(b.actual).format("HHmm")
  });
};

export const isFetchingSelector = state => state.flights.isFetching;
export const errorSelector = state => state.flights.error;
export const selectedFlightSelector = state => state.flights.selectedFlight;
export const dateSelector = state => state.flights.date;



// export const filteredFlightsSelector = createSelector(
//   [selectedFlightSelector, departuresSelector, arrivalsSelector],
//   (departures, arr selectedFlight) => fli
// );
