const initialState = {
    randomJoke: '',
  };
  
  const chuckNorrisReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_RANDOM_JOKE':
        return {
          ...state,
          randomJoke: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default chuckNorrisReducer;
  