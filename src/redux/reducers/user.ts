const InitialState: any = {
    users: [],
    isLoading: false
}

const User = (state = InitialState, action: any) => {
    const { type, payload } = action;

    switch(type){
        case 'SET_USER':
            return { ...state, ...payload };

        default:
            return state;
    }
}

export default User;