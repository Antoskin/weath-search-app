import React, { Component } from 'react'
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../action/index';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' }
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.dis(this.state.term);
        
        this.setState({term: ''})
    }

    render() {
        console.log(this.state.term);
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                className="form-control"
                    value={this.state.term}
                    placeholder="put something"
                    onChange={ (e) => this.setState({term: e.target.value}) }
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchWeather}, dispatch)
// }

// export default connect( null, mapDispatchToProps)(Search)

export default connect(
    state => ({ }),
    dispatch => ({
        dis: (targ) => 
            dispatch(fetchWeather(targ))
    })
)(Search)