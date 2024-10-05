import './CV.css'
function CV() {
    return (
        <div class="cv-container">
        <div class="sidebar">
            <div class="profile">
                <h3>Ảnh</h3>
                <h2>Nguyễn Văn A</h2>
                <p>Chuyên viên Marketing</p>
            </div>
            <div class="contact-info">
                <h3>Thông tin liên hệ</h3>
                <ul>
                    <li>Điện thoại: 0123 456 789</li>
                    <li>Email: nguyenvana@gmail.com</li>
                    <li>Địa chỉ: Hà Nội, Việt Nam</li>
                </ul>
            </div>
            <div class="skills">
                <h3>Kỹ năng</h3>
                <ul>
                    <li>Marketing chiến lược</li>
                    <li>SEO</li>
                    <li>Content Marketing</li>
                    <li>Quản lý dự án</li>
                </ul>
            </div>
            <div class="certifications">
                <h3>Chứng chỉ</h3>
                <ul>
                    <li>Google Analytics</li>
                    <li>Chứng chỉ SEO nâng cao</li>
                </ul>
            </div>
            <div class="hobbies">
                <h3>Sở thích</h3>
                <ul>
                    <li>Đọc sách</li>
                    <li>Chơi thể thao</li>
                    <li>Du lịch</li>
                </ul>
            </div>
        </div>

        <div class="main-content">
            <div class="section">
                <h3>Mục tiêu nghề nghiệp</h3>
                <p>Tôi mong muốn phát triển sự nghiệp trong lĩnh vực marketing, áp dụng kiến thức và kỹ năng chuyên môn để đem lại hiệu quả tối ưu cho doanh nghiệp, đồng thời phát triển bản thân trong môi trường chuyên nghiệp.</p>
            </div>
            
            <div class="section">
                <h3>Kinh nghiệm làm việc</h3>
                <div class="job">
                    <h4>Công ty ABC</h4>
                    <p>Vị trí: Chuyên viên Marketing</p>
                    <p>Thời gian: 2019 - Hiện tại</p>
                    <p>Mô tả công việc: Tạo chiến lược marketing cho sản phẩm mới, quản lý các chiến dịch quảng cáo, phối hợp với các phòng ban để đạt được mục tiêu kinh doanh...</p>
                </div>
                <div class="job">
                    <h4>Công ty XYZ</h4>
                    <p>Vị trí: Nhân viên SEO</p>
                    <p>Thời gian: 2016 - 2019</p>
                    <p>Mô tả công việc: Tối ưu hóa công cụ tìm kiếm, viết bài content SEO, phân tích từ khóa và lên kế hoạch phát triển nội dung...</p>
                </div>
            </div>

            <div class="section">
                <h3>Dự án</h3>
                <div class="project">
                    <h4>Dự án A</h4>
                    <p>Mô tả: Xây dựng chiến lược marketing cho sản phẩm X, tăng trưởng doanh số 30% sau 3 tháng...</p>
                </div>
                <div class="project">
                    <h4>Dự án B</h4>
                    <p>Mô tả: Quản lý chiến dịch quảng cáo online, nâng cao hiệu quả SEO và tăng lượng truy cập website lên 50%...</p>
                </div>
            </div>
            
            <div class="section">
                <h3>Học vấn</h3>
                <div class="education">
                    <h4>Đại học Kinh tế Quốc dân</h4>
                    <p>Cử nhân Marketing</p>
                    <p>Thời gian: 2012 - 2016</p>
                </div>
            </div>

            <div class="section">
                <h3>Hoạt động</h3>
                <div class="activity">
                    <h4>CLB Marketing Đại học</h4>
                    <p>Vai trò: Thành viên Ban truyền thông</p>
                    <p>Thời gian: 2013 - 2015</p>
                </div>
            </div>

            <div class="section">
                <h3>Người giới thiệu</h3>
                <div class="reference">
                    <p>Ông Nguyễn Văn B</p>
                    <p>Trưởng phòng Marketing, Công ty XYZ</p>
                    <p>Email: nguyenvanb@xyz.com</p>
                    <p>Điện thoại: 0987 654 321</p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default CV;
