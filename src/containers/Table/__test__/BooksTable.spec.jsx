import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";



import {BooksTable} from '../BooksTable';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("it renders table", () => {
    const div = document.createElement('div');
    render(<BooksTable />, div);
   
})