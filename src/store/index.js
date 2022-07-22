import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './calculator/reducer';

export default configureStore({
  reducer: {
    calculator: calculatorReducer
  },
})