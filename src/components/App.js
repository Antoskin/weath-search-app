import React, { Component } from 'react'
import Search from '../containers/SearchBar';
import WeatherList from '../containers/weather_list';


export default class App extends Component {
    render() {
        return (
            <div>
                <Search />
                <WeatherList />
            </div>
        )
    }
}
