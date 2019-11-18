import React from "react"
import MainNavigation from "./navigators/mainNavigation"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import RootReducer from "./redux/rootReducer"
import Login from './components/login'

const store = createStore(RootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )
}

