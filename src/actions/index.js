import animeApi from "../apis/animeApi"
import listApi from "../apis/listApi";


export const searchRequest = (txt) =>async dispatch => {
    const response = await animeApi.get('/search/anime',{
        params:{
            q:txt
        }
    })
    dispatch({type:'SEARCH_REQUEST',payload:response.data.results})
}

export const topRequest = () => async dispatch => {
    const response = await animeApi.get('/top/anime/1')
    dispatch({type:'TOP_REQUEST',payload:response.data.top})
}


export const addToList = (title, img , id) => {
    return{
        type:'ADD_TO_LIST',
        payload:{
            title,
            img,
            id
        }
    }
};

export const addToDb = (data) => async (dispatch) => {
    await listApi.post('/favouriteList', data)
}

export const loadDataFromDb = () => async dispatch => {
    const response = await listApi.get('/favouriteList')
    dispatch({type:"LOAD_DATA_FROM_DB",payload:response})
}

export const deleteFromDb = (id) => async dispatch => {
    await listApi.delete(`/favouriteList/${id}`)
    dispatch({type:"DELETE_FROM_DB", payload:id})
}

export const changeLoginFormStatus = () => {
    return({type:"CHANGE_LOGIN_FORM_STATUS"})
}