import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import _ from 'lodash';

const apiResponseReducer = (apiResponse = [] ,action) =>{
    switch(action.type){
        case 'SEARCH_REQUEST':
            return action.payload
        case 'TOP_REQUEST':
            return action.payload
        default:
            return apiResponse
    }
}

const favouriteListReducer = (list = [], action) =>{
    switch (action.type){
        case "ADD_TO_LIST":
            return [...list,action.payload];
        case "LOAD_DATA_FROM_DB":
            return action.payload.data
        case "DELETE_FROM_DB":
            return _.filter(list, el => el.id !== action.payload)
        default:
            return list
    }
}

const loginFormStatus = (status = true, action) => {
    switch(action.type){
        case "CHANGE_LOGIN_FORM_STATUS":
            return !status
        default:
            return status
    }
}

export default combineReducers({
    animeList:apiResponseReducer,
    form:formReducer,
    favouriteList:favouriteListReducer,
    loginFormStatus
})