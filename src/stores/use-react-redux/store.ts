import { configureStore } from '@reduxjs/toolkit';

import testReducer from './reducer'; 

const store = configureStore({
	reducer: {
		testReducer
	}
});

export default store;
