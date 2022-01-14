import React, { useState } from 'react'
import ReactDOM from 'react-dom';

import FirstComponent from './FirstComponent'

const root = document.querySelector('#root');


ReactDOM.render(<FirstComponent counter={0} />,root)