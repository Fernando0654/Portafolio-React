import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {LangProvider} from './context/lang.context';

ReactDOM.render(
    <LangProvider>
        <App />
    </LangProvider>,
    document.getElementById('app')
);
