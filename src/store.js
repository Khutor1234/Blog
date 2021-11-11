import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

// localStorage.clear()

store.subscribe(() => {
    localStorage['news-store'] = JSON.stringify(store.getState())
})

export default store;
