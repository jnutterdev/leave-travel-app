import SearchForm from '../components/SearchForm';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        destination: state.destination, 
        dates: state.dates
    }
}

export default connect(mapStateToProps)(SearchForm);