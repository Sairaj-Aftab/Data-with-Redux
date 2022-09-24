

const initialState = {
    devs : localStorage.getItem('devs') ? JSON.parse(localStorage.getItem('devs')) : [],
    loading : false
};

export default initialState;