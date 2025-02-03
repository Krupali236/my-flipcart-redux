import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './services/Reducers/index.jsx'
const store = createStore(rootReducer)
// console.warn("store Data",store)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />

  </Provider>
  // <StrictMode>
  // </StrictMode>,
)
