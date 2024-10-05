import './job.css'
function Job() {
    return (
        <div class="job-container">
            <div class="job-overview">
                <h1>Chuyên Viên Tư Vấn Bảo Hiểm - Dự Án Bắc Á Bank</h1>
                <div class="info">
                    <div class="salary">Mức lương: <strong>Trên 10 triệu</strong></div>
                    <div class="location">Địa điểm: <strong>Hà Nội, Điện Biên</strong></div>
                    <div class="experience">Kinh nghiệm: <strong>Không yêu cầu kinh nghiệm</strong></div>
                    <div class="deadline">Hạn nộp hồ sơ: <strong>02/11/2024</strong></div>
                </div>
                <div class="action-buttons">
                    <button class="apply">Ứng tuyển ngay</button>
                    <button class="save">Lưu tin</button>
                </div>
            </div>

            <div class="job-details">
                <h2>Chi tiết tin tuyển dụng</h2>
                <div class="job-description">
                    <h3>Mô tả công việc</h3>
                    <p>Mục tiêu công việc:</p>
                    <ul>
                        <li>Đạt và vượt chỉ tiêu bán hàng qua việc tư vấn giải pháp tài chính đáp ứng nhu cầu của khách hàng.</li>
                    </ul>
                    <p>Nhiệm vụ chính:</p>
                    <ul>
                        <li>Đảm bảo cán bộ ngân hàng hiểu rõ dịch vụ của kênh bán hàng qua ngân hàng.</li>
                        <li>Làm việc với khách hàng để tìm hiểu nhu cầu tài chính và tư vấn giải pháp tài chính phù hợp.</li>
                    </ul>
                </div>
            </div>
            <div class="general-info-container">
                <div class="general-info">
                    <h2>Thông tin chung</h2>
                    <p>Cấp bậc: Nhân viên</p>
                    <p>Kinh nghiệm: Không yêu cầu</p>
                    <p>Số lượng tuyển: 1 người</p>
                    <p>Hình thức làm việc: Toàn thời gian</p>
                    <p>Giới tính: Không yêu cầu</p>
                </div>
            </div>

            <div class="company-info">
                <h2>Công ty</h2>
                <p>CÔNG TY TNHH BẢO HIỂM NHÂN THỌ MB AGEAS LIFE</p>
                <p>Quy mô: 100-499 nhân viên</p>
                <p>Lĩnh vực: Bảo hiểm</p>
                <p>Địa chỉ: Tầng 15, Tòa nhà 21 Cát Linh, Hà Nội</p>
            </div>

        </div>
    );
}
export default Job;