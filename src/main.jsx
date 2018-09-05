import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorldConnector from './connectors/HelloWorldConnector'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer.js'

const store = createStore(reducer)
window.store = store

ReactDOM.render(<Provider store={store}><HelloWorldConnector /></Provider>, document.getElementById('mount'));
