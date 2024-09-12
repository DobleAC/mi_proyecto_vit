import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx';
//import MyFunctions from './funtion/MyFunctions.jsx';
//import MyPromises from './funtion/myPromises.jsx';
//import MyPromisesAll from './funtion/MyPromisesAll.jsx';
//import MyPromisesRace from './funtion/MyPromisesRace';
//import MyFetchs from './funtion/MyFetchs.jsx';
import MyFetchAPIs from './funtion/miFetchApis.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <MyFunctions/> */}
    {/* <MyPromises/> */}
    {/* <MyPromisesAll/> */}
    {/* <MyPromisesRace/> */}
     {/* <MyFetchs/> */}
    <MyFetchAPIs/>

  </StrictMode>,
)
