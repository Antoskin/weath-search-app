import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/chart';
// import GoogleMap from '../components/google_maps';


class WeatherList extends Component {
    renderWeather(cityData) {
        const s = cityData.city.name;
        const spark = cityData.list.map( weather => weather.main.temp - 273.15 );
        const pressure = cityData.list.map( weather => weather.main.pressure );
        const humidity = cityData.list.map( weather => weather.main.humidity );
        const { lon, lat } = cityData.city.coord;

        return <tr key={s}>
            <td>
                {s}
            </td>
            <td>
                <Chart data={spark} color="green" units="C" />
            </td>
            <td>
                <Chart data={pressure} color="tomato" units="hPa"/>
            </td>
            <td>
                <Chart data={humidity} color="gold" units="%"/>
            </td>
            <td>
                {/* <GoogleMap lat={lat} lon={lon} /> */}
            </td>
        </tr>
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City:</th>
                        <th>Temp:</th>
                        <th>Press:</th>
                        <th>Humid:</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);
