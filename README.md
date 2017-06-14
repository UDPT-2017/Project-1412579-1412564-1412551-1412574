# Project - *Name of your app*

**Name of your app** là repository cho đồ án nhóm. Nhóm tối đa 4 thành viên.

Thành viên:
* [x] **1412579** Vũ Minh Trí (boyvmt)
* [x] **1412564** Trần Thùy Bích Trâm (bichtramtran)
* [ ] **MSSV3** Tên sinh viên 2 (tên tài khoản github)
* [ ] **MSSV4** Tên sinh viên 2 (tên tài khoản github)
URL: **URL hosting của bài tập**

## Yêu cầu

Trong đề tài, sinh viên cần mô tả các chức năng có thể thực hiện bên dưới. Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Yêu cầu **GIT**
* [x] Có sử dụng GIT.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [ ] Sử dụng GIT theo Feature Branch Workflow.
* [x] Sử dụng GIT theo Gitflow Workflow.

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

* [x] Chỉnh sửa giao diện trang giỏ hàng/đặt hàng. (**1412421**)

* [x] Xây dựng trang báo lỗi 401, 404, 500 (**1412564**)


#### Admin

* [x] Chỉnh sửa giao diện trang Admin Dashboard. (**MSSV**)

* [x] Chỉnh sửa giao diện Admin trang thêm/sửa danh mục(**1412579**)

* [x] Chỉnh sửa giao diện Admin trang xem/xoá danh mục(**1412579**)

* [x] Chỉnh sửa giao diện Admin trang thêm/sửa sản phẩm(**1412579**)

* [x] Chỉnh sửa giao diện Admin trang xem/xoá sản phẩm(**1412579**)

* [x] Chỉnh sửa giao diện trang Thêm/Sửa/Xem/Xoá (CRUD) người dùng (sửa quyền,..). (**1412551**)

* [ ] Chỉnh sửa giao diện trang Thêm/Sửa/Xem/Xoá (CRUD) thông tin Footer. (**1412574**)

* [ ] Chỉnh sửa giao diện trang Thêm/Sửa/Xem/Xoá (CRUD) thông tin trang chủ. (**1412564**)

* [ ] Chỉnh sửa giao diện trang cài đặt các hình ảnh slide. (**1412574**)

* [ ] Còn rất nhiều như đặt hàng, liên hệ, email, hỗ trợ, fanpage,... (**MSSV**)

* [ ] Xây dựng trang báo lỗi 401, 404, 500 (**1412564**)

### Backend

#### Admin

##### Lập trình thêm sửa xoá

* [x] Xây dựng tính năng Thêm/Sửa/Xem/Xoá (CRUD) sản phẩm. (**1412579**)

* [x] Xây dựng tính năng Thêm/Sửa/Xem/Xoá (CRUD) danh mục. (**1412579**)

* [x] Xây dựng tính năng upload ảnh thumbnail/detail của danh mục. (**1412579**)

* [x] Xây dựng tính năng xoá ảnh thumbnail/detail của danh mục bằng ajax. (**1412579**)

* [ ] Xây dựng tính năng Sửa quyền/Xem/Xoá/Cấm người dùng. (**1412551**)

* [ ] Xây dựng tính năng xem đơn đặt hàng, chi tiết đơn đặt hàng. (**1412421**)

* [ ] Xây dựng tính năng xử lý đơn đặt hàng, chi tiết chuyển hàng. (**1412421**)

* [ ] Xây dựng tính năng Thêm/Sửa/Xem/Xoá (CRUD) thông tin Footer. (**1412574**)

* [ ] Xây dựng tính năng Thêm/Sửa/Xem/Xoá (CRUD) thông tin trang chủ. (**1412564**)

* [ ] Còn rất nhiều như đặt hàng, liên hệ, email, hỗ trợ, fanpage,... (**MSSV**) (Phần này sẽ tự chọn và tự làm thêm)

#### User

* [ ] Tiến hành thao thác đưa dữ liệu từ database ra trang chủ(**1412579**)

* [ ] Tiến hành thao thác đưa dữ liệu từ database ra trang danh mục(**1412579**)

* [ ] Tiến hành thao thác đưa dữ liệu thông tin sản phẩm ra trang chi tiết(**1412579**)

* [ ] Xây dựng các điều hướng trong phần Navbar(**1412579**)

* [ ] Xây dựng tính năng giỏ hàng, thêm/sửa/xoá (**1412421**)

* [ ] Xây dựng tính năng đặt hàng (**1412421**)

* [ ] Xây dựng tính năng xem thông tin tình trạng đơn hàng (**1412421**)

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

* [x] Thao tác DOM lấy thông tin id để thực hiện ajax xoá danh mục (**1412579**)

* [x] Thao tác DOM lấy thông tin id, class để thực hiện ajax nút switch ẩn hiện sản phẩm (**1412579**)

* [x] Thao tác DOM lấy thông tin id để thực hiện ajax xoá sản phẩm (**1412579**)

* [x] Thao tác DOM lấy thông tin id để xoá hình ảnh thumbnail/detail của sản phẩm sau đó append lại dữ liệu khác (**1412579**)

##### Ajax

* [x] AJAX xoá danh mục(**1412579**)

* [x] AJAX xoá sản phẩm(**1412579**)

* [x] AJAX xoá hình ảnh thumbnail của sản phẩm(**1412579**)

* [x] AJAX xoá hình ảnh detail của sản phẩm(**1412579**)

* [x] AJAX update ẩn/hiện danh mục bằng nút switch on/off(**1412579**)

* [x] AJAX update ẩn/hiện sản phẩm bằng nút switch on/off(**1412579**)


## Demo

Link ảnh GIF demo ứng dụng:

![Video Walkthrough](demo.gif)

Tạo ảnh GIF với chương trình [LiceCap](http://www.cockos.com/licecap/).


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
