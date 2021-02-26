import SearchForm from '../components/SearchForm';
import { connect } from 'react-redux';

import { actionAddDestination, actionAddDates } from '../actions';

function mapStateToProps(state) {
    return {
        // propName seen by React : value-in-state
        destination: state.destination,
        dates: state.dates

    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (destination, dates) => {
            dispatch(actionAddDestination(destination));
            dispatch(actionAddDates(dates));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
