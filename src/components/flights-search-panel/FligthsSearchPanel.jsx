import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { selectedFlightSelector } from '../../selectors/flights.selectors';
import { changeSelectedFlight } from '../../actions/flights.actions'
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';

const FlightsSearchPanel = ({ selectedFlight, changeSelectedFlight }) => {
  let { search, pathname } = useLocation();

  useEffect(() => {
    changeSelectedFlight(qs.parse(search, { ignoreQueryPrefix: true }).selected)
  })

  return (
    <header className='airport-board__header'>
      <h1 className='airport-board__title'>Search Flight</h1>
      <form className="searach-flight">
        <input
          type="text"
          className="searach-flight__input"
          name='searach-flight__input'
          placeholder='Airline, destination, of flight #'
          value={selectedFlight}
          onChange={e => changeSelectedFlight(e.target.value)}
        />
        <i className="search-icon fa fa-search" />
        <Link to={`${pathname}?selected=${ selectedFlight }`}>
          <button className="searach-flight__btn">Search</button>
        </Link>
      </form>
    </header>
  )
}

const mapState = state => {
  return {
    selectedFlight: selectedFlightSelector(state)
  }
}

const mapDispatch = {
  changeSelectedFlight
}

export default connect(mapState, mapDispatch)(FlightsSearchPanel)