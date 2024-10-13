import Header from "../components/Header/Header";
import { Outlet } from 'react-router-dom';
import './Layout.css'

export default function LayoutMain(){
    return (
        <div className="App">
            <div className="App-header">
                <Header></Header>
            </div>
            <div className="App-content">
                    <Outlet/>
            </div>
            <div className="App-footer">

            </div>
        </div>
    )
}