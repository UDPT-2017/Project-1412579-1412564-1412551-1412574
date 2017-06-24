# Project - *ROYAL Sneaker*

**ROYAL Sneaker** là repository cho đồ án nhóm. Nhóm tối đa 4 thành viên.

Thành viên:
* [x] **1412579** Vũ Minh Trí (boyvmt)
* [x] **1412564** Trần Thùy Bích Trâm (bichtramtran)
* [x] **1412574** Đặng Văn Trí (DangVanTri)
* [x] **1412551** Nguyễn Đang Tích (ndtich)
* [x] **1412421** Phạm Hữu Phước (Huuphuoc19)

URL: **https://project-579-564-551-571-420.herokuapp.com/**


## Yêu cầu

Trong đề tài, sinh viên cần mô tả các chức năng có thể thực hiện bên dưới. Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Yêu cầu **GIT**
* [x] Có sử dụng GIT.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [x] Sử dụng GIT theo Feature Branch Workflow.
* [ ] Sử dụng GIT theo Gitflow Workflow.

## Mô tả chung ứng dụng

### ROYAL Sneaker

Đồ án xây dựng e-commerce website với tất cả chức năng mà một website e-commerce sở hữu, có thể thấy được các chức năng của người dùng như xem các sản phẩm, xem chi tiết sản phẩm, các danh mục, các trang tồn tại, thêm sản phẩm vào giỏ hàng, đặt hàng,...

Ngoài ra phần Admin thao tác các phần như thêm/sửa/xoá/xem sản phẩm, các danh mục, đặt nổi bật sản phẩm, danh mục,...xem các user cũng như thiết lập quyền hạn cho các user.

Tất cả phần mô tả công nghệ sử dụng dưới đây được **1412579** lên kế hoạch và chia việc, mỗi phần các thành viên sẽ tự khai thác để làm đúng những yêu cầu đã được thầy thiết lập về các phần như Ajax, DOM, Validation,....

## Mô tả công nghệ sử dụng

### Frontend

- Sử dụng một số template có sẵn dạng Thương mại diện tử tại một số thư viện nổi tiếng như W3Layouts,... Sau đó Edit lại theo ý mình cũng với đó kết hợp với những trang khác nếu cần thiết.

- Về phần Admin sẽ sử dụng AdminLTE Template, tự edit lại các trang theo nhu cầu của mình, chỉ lấy những thuộc tính mà AdminLTE xây dựng sẵn.

### Backend

- Sử dụng ngôn ngữ chính đó là NodeJS.

- Kết hợp với ExpressJS để xây dựng website hoàn chỉnh.

- Ngoài ra còn có thể sử dụng thêm hàng loạt package khác giúp tăng tốc lập trình và tối ưu hoá hơn so với việc thực hiện bằng tay như Passport.js (sử dụng để đăng nhập), Moment.js (sử dụng để xử lý thời gian), JQuery (Ajax, xử lý frontend), JQuery-Validation (kiểm tra input), multer (upload file).... (khi làm sẽ phát sinh thêm hàng loạt package khác)

- Đặc biệt đó là đồ án này sẽ sử dụng Ajax rất nhiều giúp website mịn hơn và không phải reload quá nhiều.

### Cần chuẩn bị gì để thực hiện đồ án

- Kiến thức cơ bản về NodeJS, đặc biệt là ExpressJS (quản lý Route),

- Xử lý các thông tin nhập vào với body-parser, params và query (req.params và req.query)

- Xử lý với database, khai báo database.

- Một chút kiến thức về Postgresql.

## Chức năng

### Database

* [x] Xây dựng lược đồ quan hệ (các bảng, các thuộc tính).

* [x] Cài đặt cơ sở dữ liệu với Postgres.

### Frontend

#### User

* [x] Website layout theo kiến trúc MVC với các thành phần được tách thành nhiều module. (**1412579**)

* [x] Trang web được thiết kế sẽ bao gồm các trang: Trang chủ, trang chi tiết sản phẩm, trang danh sách sản phẩm theo danh mục, trang giỏ hàng, trang đăng nhập, trang gửi tin nhắn (email),...(Tất cả)

* [x] Cho phép người dùng biết họ đang ở trang nào (sử dụng breadcrumb, highlight navigation bar,...).

* [x] Chỉnh sửa giao diện trang chủ. (**1412579**)

* [x] Chỉnh sửa giao diện trang danh mục. (**1412579**)

* [x] Chỉnh sửa giao diện trang chi tiết sản phẩm. (**1412579**)

* [x] Chỉnh sửa giao diện trang danh sách sản phẩm. (**1412579**)

* [x] Chỉnh sửa giao diện trang đăng nhập và đăng ký. (**1412551**)

* [x] Chỉnh sửa giao diện trang giỏ hàng/đặt hàng. (**1412420**)

* [x] Tạo thông tin Footer. . (**1412574**)

* [x] Xây dựng trang báo lỗi 401, 404, 500 (**1412564**)


#### Admin

* [x] Chỉnh sửa giao diện trang Admin Dashboard. (**MSSV**)

* [x] Chỉnh sửa giao diện Admin trang thêm/sửa danh mục(**1412579**)

* [x] Chỉnh sửa giao diện Admin trang xem/xoá danh mục(**1412579**)

* [x] Chỉnh sửa giao diện Admin trang thêm/sửa sản phẩm(**1412579**)

* [x] Chỉnh sửa giao diện Admin trang xem/xoá sản phẩm(**1412579**)

* [x] Chỉnh sửa giao diện trang Thêm/Sửa/Xem/Xoá (CRUD) người dùng (sửa quyền,..). (**1412551**)

* [ ] Chỉnh sửa giao diện trang Thêm/Sửa/Xem/Xoá (CRUD) thông tin Footer. (****)

* [ ] Chỉnh sửa giao diện trang Thêm/Sửa/Xem/Xoá (CRUD) thông tin trang chủ. (**1412564**)

* [x] Chỉnh sửa giao diện trang cài đặt các hình ảnh slide. (**1412574**)

* [ ] Còn rất nhiều như đặt hàng, liên hệ, email, hỗ trợ, fanpage,... (**MSSV**)

* [x] Xây dựng trang báo lỗi 401, 404, 500 (**1412564**)

### Backend

#### Admin

##### Lập trình thêm sửa xoá

* [x] Xây dựng tính năng Thêm/Sửa/Xem/Xoá (CRUD) sản phẩm. (**1412579**)

* [x] Xây dựng tính năng Thêm/Sửa/Xem/Xoá (CRUD) danh mục. (**1412579**)

* [x] Xây dựng tính năng upload ảnh thumbnail/detail của danh mục. (**1412579**)

* [x] Xây dựng tính năng xoá ảnh thumbnail/detail của danh mục bằng ajax. (**1412579**)

* [x] Xây dựng tính năng Sửa quyền/Xem/Xoá/Cấm người dùng. (**1412551**)

* [ ] Xây dựng tính năng xem đơn đặt hàng, chi tiết đơn đặt hàng. (**1412420**)

* [ ] Xây dựng tính năng xử lý đơn đặt hàng, chi tiết chuyển hàng. (**1412420**)

* [ ] Xây dựng tính năng Thêm/Sửa/Xem/Xoá (CRUD) thông tin Footer. (****)

* [x] Xây dựng tính năng Thêm/Sửa/Xem/Xoá (CRUD) thông tin trang chủ. (**1412574**)

* [ ] Còn rất nhiều như đặt hàng, liên hệ, email, hỗ trợ, fanpage,... (**MSSV**) (Phần này sẽ tự chọn và tự làm thêm)

#### User

* [x] Tiến hành thao thác đưa dữ liệu từ database ra trang chủ(**1412579**)

* [x] Tiến hành thao thác đưa dữ liệu từ database ra trang danh mục(**1412579**)

* [x] Tiến hành thao thác đưa dữ liệu thông tin sản phẩm ra trang chi tiết(**1412579**)

* [x] Xây dựng các điều hướng trong phần Navbar(**1412579**)

* [x] Xây dựng tính năng giỏ hàng, thêm/sửa/xoá (**1412420**)

* [ ] Xây dựng tính năng đặt hàng (**1412420**)

* [ ] Xây dựng tính năng xem thông tin tình trạng đơn hàng (**1412420**)

#### Tính năng xác nhận người dùng


* [x] Xây dựng tính năng đăng nhập (**1412579**)

* [x] Xây dựng tính năng đăng nhập phần admin(**1412579**)

* [x] Xây dựng tính năng đăng nhập bằng Facebook (**1412579**)

* [x] Xây dựng tính năng phân loại người dùng(admin/moderator/user/...) (**1412579**)

    * [x] Không cho phép thao tác vào trang web khi không có quyền (**1412579**)

    * [x] Thể hiện các chức năng khác nhau trên cùng giao diện khi người dùng có quyền khác nhau (**1412579**)

    * [ ] Thể hiện lỗi khi không truy xuất được trang khi không có quyền (Lỗi 401) (**MSSV**)

#### Lập trình client

##### Kiểm tra dữ liệu(sử dụng jQuery Validation)

* [x] Kiểm tra dữ liệu form thêm danh mục (**1412579**)

* [x] Kiểm tra dữ liệu form sửa danh mục (**1412579**)

* [x] Kiểm tra dữ liệu form thêm sản phẩm (**1412579**)

* [x] Kiểm tra dữ liệu form sửa sản phẩm (**1412579**)

* [ ] Kiểm tra dữ liệu form đăng ký (**MSSV**)

##### Animation, sử dụng một số animation đơn giản để làm màu

* [x] Animation thông báo thêm/sửa danh mục thành công (**1412579**)

* [x] Animation thông báo thêm/sửa sản phẩm thành công (**1412579**)

##### Thao tác DOM, lấy dữ liệu để thực hiện Ajax

* [x] Thao tác DOM lấy thông tin id, class để thực hiện ajax nút switch ẩn hiện danh mục (**1412579**)

* [x] Thao tác DOM lấy thông tin id để thực hiện ajax xoá ảnh slider (**1412574**)

* [x] Thao tác DOM lấy thông tin id để thực hiện ajax xoá danh mục (**1412579**)

* [x] Thao tác DOM lấy thông tin id, class để thực hiện ajax nút switch ẩn hiện sản phẩm (**1412579**)

* [x] Thao tác DOM lấy thông tin id để thực hiện ajax xoá sản phẩm (**1412579**)

* [x] Thao tác DOM lấy thông tin id để xoá hình ảnh thumbnail/detail của sản phẩm sau đó append lại dữ liệu khác (**1412579**)

* [x] Lấy thông tin liên quan đến giỏ hàng tiến hành thêm/xóa/sửa(**1412420**)

##### Ajax
* [x] AJAX xóa, update slider(**1412574**)

* [x] AJAX xóa ảnh slider(**1412574**)

* [x] AJAX xoá danh mục(**1412579**)

* [x] AJAX xoá sản phẩm(**1412579**)

* [x] AJAX xoá hình ảnh thumbnail của sản phẩm(**1412579**)

* [x] AJAX xoá hình ảnh detail của sản phẩm(**1412579**)

* [x] AJAX update ẩn/hiện danh mục bằng nút switch on/off(**1412579**)

* [x] AJAX update ẩn/hiện sản phẩm bằng nút switch on/off(**1412579**)

* [x] AJAX thêm xóa product trong giỏ hàng(**1412420**)

## Demo

Demo ứng dụng

Video demo của **1412579**

[![Demo Project - 1412579](https://img.youtube.com/vi/X_xz_DUPh44/0.jpg)](https://www.youtube.com/watch?v=X_xz_DUPh44)




## License

    Copyright [2017] [Ứng dụng phân tán - HATU - 2017]

## Hướng dẫn

- Download repo này về máy bạn.

- Tải pgAdmin (postgresql), tạo database và backup file *royalsneaker.backup* trong thư mục database.

- Đổi tên file *example.env* thành *.env* và đổi thông số các trường trong đó phù hợp với database của bạn.

- Thực hiện lệnh: *npm install* để tải các package cần thiết để chạy ứng dụng.

- Sau đó sử dụng lệnh *node app* để chạy ứng dụng trên port 3000.

## Account test

- Admin đăng nhập với account: boy@gmail.com - pass: 1

- Mod đăng nhập với account: boy@gmail.com - pass: 1

- User hãy sử dụng đăng nhập với Facebook.
