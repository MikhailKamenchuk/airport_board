import React, { useEffect, useMemo } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import qs from 'qs';
import { connect } from 'react-redux';
import FlightsList from './FlightsList';
import { fetchFlightsList } from "../../actions/flights.actions";
import { arrivalsSelector, departuresSelector,dateSelector } from "../../selectors/flights.selectors";
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';

const FlightsListContainer = props => {

  useEffect(() => props.fetchFlightsList(props.date), [])

  const { search, pathname } = useLocation();

  const direction = pathname.split('/')[1];

  const selectedFlight = qs.parse(search, { ignoreQueryPrefix: true }).selected;
  
  const flights = selectedFlight
  ? props[direction].filter(flight => flight.codeShareData[0].codeShare.includes(selectedFlight.toLowerCase()))
  : props[direction];
  
  const arrivalBtnClass = classNames('navigation__btn', 'btn_arrivals', { 'selected': direction === 'arrivals' })
  const departuresBtnClass = classNames('navigation__btn', 'btn_departures', { 'selected': direction === 'departures' })

  return (
    <main className="airport-board__content">
      <section className="flights">
        <nav className="flights__navigation navigation">
          <Link to={`/departures${search}`}>
            <button className={departuresBtnClass} >
              <i className="fas fa-plane-departure" />
              <span>Departures</span>
            </button>
          </Link>
          <Link to={`/arrivals${search}`}>
            <button className={arrivalBtnClass} >
              <i className="fas fa-plane-arrival" />
              <span>Arrivals</span>
            </button>
          </Link>
        </nav>
        <Switch>
          <Route exact path='/'>
            {null}
          </Route>
          <Route path='/:direction' component={() => <FlightsList flights={flights} />} />
        </Switch>
      </section>
    </main>
  )
}
// }
const mapState = state => {
  return {
    arrivals: arrivalsSelector(state),
    departures: departuresSelector(state),
    date: dateSelector(state)
  }
}

const mapDispatch = {
  fetchFlightsList
}

export default connect(mapState, mapDispatch)(FlightsListContainer)