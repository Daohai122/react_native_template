import { connect } from "react-redux";
import LoginScreen from "../../Containers/LoginScreen/LoginScreen";
import HomeScreen from "../../Containers/HomeScreen/HomeScreen";

import { fetchFailedAction, fetchSucessAction, fetchUserAction } from "../Actions";

const mapStateToProps = (state) => {
    return {
        user: state.LoginReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchUser: () => {
            dispatch(fetchUserAction());
        }
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen,HomeScreen);
export default LoginContainer;