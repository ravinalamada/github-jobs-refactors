import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GlobalContextProvider }  from './context/globalContextProvider';

ReactDOM.render(
	 <GlobalContextProvider>
			<App />
	 </GlobalContextProvider>,
	document.getElementById('root')
);
