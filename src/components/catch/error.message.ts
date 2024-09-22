export const ErrorMessage : { [key: number | string]: string } = {
  500: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!',
  401: 'Không có quyền truy cập!',
  403: 'Không có quyền truy cập!',
  404: 'Không tìm thấy dữ liệu!',
  409: 'Dữ liệu đã tồn tại!',
  'OTP_EXPIRED': 'Mã OTP hết hạn sử dụng!',
  'LIMITED_TIME': 'Chưa thể gửi yêu cầu tạo mã OTP mới!',
  'OTP_MISMATCH': 'Mã OTP nhập không chính xác'
};
