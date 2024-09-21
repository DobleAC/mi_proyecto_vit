import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx';
//import MyFunctions from './funtion/MyFunctions.jsx';
//import MyPromises from './funtion/myPromises.jsx';
//import MyPromisesAll from './funtion/MyPromisesAll.jsx';
//import MyPromisesRace from './funtion/MyPromisesRace';
//import MyFetchs from './funtion/MyFetchs.jsx';
//import MyFetchAPIs from './funtion/miFetchApis.jsx';
//import MyFetchsAPIsPost from './funtion/MyFetchPost.jsx'
//import MyFetchAPIsPUT from './funtion/MyFetchPut.jsx'
//import MyFetchAPIsBlob from './funtion/MyFetchBlob.jsx'
//import MyDataTypes from './methos/MyDataTypes.jsx';
//import MyObjects  from './methos/MyObjects.jsx';
//import { Contador } from './components/Contador';
//import { ContadorHook } from './components/ContadorHook';
import { Login } from './components/Login';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <MyFunctions/> */}
    {/* <MyPromises/> */}
    {/* <MyPromisesAll/> */}
    {/* <MyPromisesRace/> */}
     {/* <MyFetchs/> */}
    {/* <MyFetchAPIs/> */}
    {/*<MyFetchsAPIsPost/>*/}
    {/*<MyFetchAPIsBlob/>  */}
    {/*<MyFetchAPIsPUT/>*/}
    {/*<MyDataTypes/>*/}
    {/*<MyObjects/>*/}
    {/*<Contador/>*/}
    {/*<ContadorHook/>*/}
    <Login/>

  </StrictMode>,
)
