import { Link, Outlet} from 'react-router-dom';
import './HomeHr.css'
function HomeHR() {
    return (
        <div className='home-hr-container'>
            <div className="home-hr-sidebar">
                <Link className='Post' to='/hr'>Bài Đăng</Link>
                <Link className='Recruitment' to='create-job'>Đăng tuyển</Link>
            </div>
            <div className="home-hr-content">
                <Outlet></Outlet>
            </div>
        </div>
    );
}
export default HomeHR;