import { Fetch } from '../../services/http';

export const setUser = (payload: any) => ({
    type: 'SET_USER',
    payload
})

export const getUsers = () => (dispatch: any, getState: any) => {
    
    dispatch(setUser({isLoading: true}));
    let url = '/src/users.json';
    return  Fetch(url, 'GET')
    .then(res => {
        dispatch(setUser({isLoading: false, users: res.data}));
        return res;
    })
    .catch(err =>{
        console.log('Error: ', err);
        dispatch(setUser({isLoading: false}));
    })
    
}