import {Routes, Route} from 'react-router-dom'
import { createContext, useState } from 'react';
import LayoutMain from './layout/LayoutMain';
import Login from './view/Login/Login';
import Choose from './view/Register/Choose';
import RegisterHr from './view/Register/RegisterHr';
import RegisterUser from './view/Register/RegisterUser';
import Home from './view/Home/Home';
import JobDetail from './components/Job/job-detail/JobDetail';

import HomeHR from './view/homeHR/HomeHr';
import JobListHr from './view/homeHR/Job/JobListHr';
import CreateJob from './view/homeHR/Job/CreateJob';
import UserList from './view/homeHR/Job/User/UserList';
import EditJob from './view/homeHR/Job/Edit/EditJob';
import Resume from './view/homeHR/Job/Resume/Resume';
import HomeAdmin from './view/HomeAdmin/HomeAdmin';
import CompanyListAdmin from './view/HomeAdmin/Company/CompanyListAdmin';
import CompanyEdit from './view/HomeAdmin/Company/Edit/CompanyEdit';
import CompanyCreate from './view/HomeAdmin/Company/Create/CompanyCreate';
import CompanyItemDetail from './components/Company/CompanyItemDetail';
import MyInfo from './components/MyInfo/MyInfo';

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
                <Route path='my-info' element={<MyInfo/>}></Route>
                <Route path='job' element={<JobDetail/>}></Route>
                <Route path='company' element={<CompanyItemDetail/>}></Route>
                <Route path='hr' element={<HomeHR/>}>
                    <Route index element={<JobListHr/>}></Route>
                    <Route path='create-job' element={<CreateJob/>}></Route>
                    <Route path='job/user' element={<UserList/>}></Route>
                    <Route path='job/edit' element={<EditJob/>}></Route>
                    <Route path='job/user/resume' element={<Resume/>}></Route>
                </Route>
                <Route path='admin' element={<HomeAdmin/>}>
                    <Route index element={<JobListHr/>}></Route>
                    <Route path='company' element={<CompanyListAdmin/>}></Route>
                    <Route path='company/info' element={<CompanyEdit/>}></Route>
                    <Route path='create-company' element={<CompanyCreate/>}></Route>
                </Route>
            </Route>
        </Routes>
    </TokenContextProvider>
    </>
  );
}

export default App;
