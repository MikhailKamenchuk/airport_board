const baseUrl = 'https://api.iev.aero/api/flights';

export const getFlightList = date =>
  fetch(`${baseUrl}/${date}`)
    .then(res => res.json());
