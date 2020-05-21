import React from 'react';
import { render } from 'react-dom';
import Root from './Root';


const element = React.createElement(Root);
render(element, document.getElementById('root'));
