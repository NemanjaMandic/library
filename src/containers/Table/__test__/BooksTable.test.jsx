import React from 'react';
import ReactDOM from 'react-dom';

import {BooksTable} from '../BooksTable';

it("it renders table", () => {
    const div = document.createElement('div');
    ReactDOM.render(<BooksTable />, div)
})