import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import tweets from './tweets';
import { loadingBarReducer } from 'react-redux-loading';

// createStore function only accepts one single reducer
export default combineReducers({
    authedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer,
});
