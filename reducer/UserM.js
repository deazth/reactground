const initialState = {
    name: 'Leeroy Jenkins',
    age: 22
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'USER_ADD_AGE':
            return {
                name: 'Boba Fett',
                age: 19
            }
        default:
            return state;
    }
}