import {Routes, Route} from 'react-router-dom'
import LayoutMain from './layout/LayoutMain';
import Login from './view/Login/Login';
import Choose from './view/Register/Choose';
import RegisterHr from './view/Register/RegisterHr';
import RegisterUser from './view/Register/RegisterUser';
import Home from './view/Home/Home';
import { createContext, useState } from 'react';

export const TokenContext = createContext();

const TokenContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
};
function App() {
  
  return (
    <>
    <TokenContextProvider>
        <Routes>
            <Route path='/' element={<LayoutMain/>}>
                <Route index element={<Home/>}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='register' element={<Choose/>}></Route>
                <Route path='register/hr' element={<RegisterHr/>}></Route>
                <Route path='register/user' element={<RegisterUser/>}></Route>
            </Route>
        </Routes>
    </TokenContextProvider>
    </>
  );
}

export default App;
