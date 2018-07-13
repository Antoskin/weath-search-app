import { F_WEATHER } from '../action/index'; 

export default function( state = [], action ) {
    //console.log('action received', action)
    switch (action.type) {
        case F_WEATHER:
            //return state.push([action.payload.data]);
            //or better approach
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
}