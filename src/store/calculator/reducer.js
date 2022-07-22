import { createSlice } from '@reduxjs/toolkit'
import { doOperation, INFINITE_DIVIDE_INTO_ZERO_MESSAGE } from '../../functions/Events';

const MAX_DISPLAY_CHAR_LENGTH = 25;


const clearInfiteWarningMessage = (stateValue) => {
  if(stateValue === INFINITE_DIVIDE_INTO_ZERO_MESSAGE) {
    return '';
  } else {
    return stateValue;
  }
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    result: 0,
    value: "",
  },
  reducers: {
    add: (state, action) => {
      state.value = clearInfiteWarningMessage(state.value);
      if(state.value.length <= MAX_DISPLAY_CHAR_LENGTH)  {
          state.value += action.payload.toString()
      }
    },
    remove: (state) => {
      state.value = clearInfiteWarningMessage(state.value);
      state.value = state.value.slice(0, state.value.length -1)
    },
    operate: (state, action) => {
      state.value = clearInfiteWarningMessage(state.value);

      if( !isNaN(state.value[state.value.length - 1]) ){
        state.value = doOperation(state.value);
        state.value += action.payload.value;
      } else if(state.value[state.value.length - 1] !== action.payload.value ) {
        state.value = state.value.substring(0, [state.value.length - 1]);
        state.value += action.payload.value;
      }
      
    },
    clear: (state) => {
      state.value = ""
    },
    submit: (state) => {
      state.value = clearInfiteWarningMessage(state.value);
      state.value = doOperation(state.value)
    },
  },
})

export const { add, remove, clear, submit, operate } = calculatorSlice.actions

export default calculatorSlice.reducer