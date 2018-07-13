import { combineReducers } from "redux";
import WeatherRed from './reducer_weather';

const rootReducer = combineReducers({
    // state: (state = {}) => state
    weather : WeatherRed
});


export default rootReducer;