import SearchForm from '../components/SearchForm';
import { connect } from 'react-redux';

import { actionAddDestination, actionAddDates } from '../actions';

function mapStateToProps(state) {

    return {
        // propName seen by React : value-in-state
        location: state.location,
        dates: state.dates

    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionAddDestination());
            dispatch(actionAddDates());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
