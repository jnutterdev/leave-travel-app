import SearchForm from '../components/SearchForm';
import { connect } from 'react-redux';

import { actionAddDestination, actionAddDates, actionAddPeople } from '../actions';

function mapStateToProps(state) {
    return {
        // propName seen by React : value-in-state
        destination: state.destination,
        dates: state.dates,
        numberOfPeople: state.numberOfPeople
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (destination, dates, numberOfPeople) => {
            dispatch(actionAddDestination(destination));
            dispatch(actionAddDates(dates));
            dispatch(actionAddPeople(numberOfPeople))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
