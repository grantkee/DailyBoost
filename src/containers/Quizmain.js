import { connect } from 'react-redux';
import Quizmain from '../components/Quizmain';
// import { login, logout } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        quizQuestions: state.quizQuestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // login: () => dispatch(login()),
        // logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quizmain);