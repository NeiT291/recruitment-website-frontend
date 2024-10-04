import {Routes, Route} from 'react-router-dom'
import LayoutMain from './layout/LayoutMain';
import Login from './view/Login/Login';
import Choose from './view/Register/Choose';
import RegisterHr from './view/Register/RegisterHr';
import RegisterUser from './view/Register/RegisterUser';
import Home from './view/Home/Home';
import CV from './view/CV/CV.js';

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<LayoutMain/>}>
                <Route index element={<Home/>}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='register' element={<Choose/>}></Route>
                <Route path='register/hr' element={<RegisterHr/>}></Route>
                <Route path='register/user' element={<RegisterUser/>}></Route>
                <Route path='CV' element={<CV/>}></Route>
            </Route>
        </Routes>
    </>
  );
}

export default App;
