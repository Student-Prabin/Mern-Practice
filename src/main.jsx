import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>

) 
