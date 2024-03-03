import { createStore } from 'redux';

const counterReducer = (state = { counter: 0}, action) => {

    if(action.type==='INCREMENT'){
        return {
            counter: state.counter + 1,
        };
    }
    if(action.type==='DECREMENT'){
        if(state.counter > 0)
              return {
                counter: state.counter - 1,
            };
    }

    return state;
}

const store = createStore(counterReducer);

export default store;