import { Link} from 'react-router-dom';
import './Home-Post.css'
function HomePost() {
    return (
        <body>
            <div class="sidebar">
                <div class="logo">Lô gô</div>
                <ul>
                    <li><Link className='profile' to='/profile'>Thông tin cá nhân</Link></li>
                    <li class="active"><Link className='Post' to='/Home-Post'>Bài Đăng</Link></li>
                    <li><Link className='Recruitment' to='/Recruitment'>Đăng tuyển</Link></li>
                    <li><Link className='CVjobseeker' to='/CVjobseeker'>Hồ sơ ứng viên</Link></li>
                </ul>
            </div>
            <div class="main-content">
                <div class="top-bar">
                    <span class="breadcrumb">Home</span>
                    <div class="user-info">
                        <i class="fas fa-user"></i>
                        <p> </p>
                        <span>Tên đăng nhập</span>
                    </div>
                </div>
                <div class="page-title">Page List</div>
                <div class="action-buttons">
                    <button class="btn new">+ New</button>
                    <button class="btn filter">Filter</button>
                </div>
                <table class="page-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tiêu đề</th>
                            <th>Ngày</th>
                            <th>Tags</th>
                            <th>Ngày tạo</th>
                            <th>Ngày Cập nhật</th>
                            <th>Vị trí tuyển</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ABCXYZ</td>
                            <td><span class="tag new">new</span> <span class="tag special">special</span></td>
                            <td><i class="star active"></i></td>
                            <td>2024-02-17</td>
                            <td>2024-05-10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
    );
}
export default HomePost;