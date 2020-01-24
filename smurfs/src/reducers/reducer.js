import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
    POST_DATA_START,
    POST_DATA_SUCCESS,
    POST_DATA_FAIL
}
from "../actions/action";

const initialState ={
    smurf:[],
    error:'',
    isFetching:false
}

const smurfReducer =(state =initialState, action) =>{
    switch (action.type){
        case FETCH_DATA_START:
            return {...state, error:'', isFetching:true};
            case FETCH_DATA_SUCCESS:
                return {...state, error:'', isFetching:false, smurf: action.payload};
                case FETCH_DATA_FAIL:
                    return {...state, error:'', isFetching: false};

                    case POST_DATA_START:
                        return {...state, isFetching:true};
                        case POST_DATA_SUCCESS:
                            return {...state, isFetching:false, smurf:action.payload};
                            case POST_DATA_FAIL:
                                return {...state, error:action.payload, isFetching:false};
                                default:
                                    return state;

    }
}
export default smurfReducer;