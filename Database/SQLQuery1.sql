create table SanPham (
	Masp char(100) primary key,
	Tensp Nvarchar(255) not null,
	LoaiSp Nvarchar(255) not null,
	ThuongHieu varchar(255) not null,
	Gia decimal(12,4) check (Gia>=0),
	SoLuong int check (SoLuong >=0),
	TrangThai Nvarchar(255),
);

create table HinhAnh (
	SanPhamMasp char(100) foreign key references SanPham(Masp),
	Hinh1 varchar(255),
	Hinh2 varchar(255),
	Hinh3 varchar(255),
	Hinh4 varchar(255),
	Hinh5 varchar(255),
	Hinh6 varchar(255),
);

create table MoTa (
	SanPhamMaSP char(100) foreign key references SanPham (Masp),
	TieuDe Nvarchar(255),
	Mota Nvarchar (255),
	HinhAnh varchar (255),
);

create table ThongSo (
	SanPhamMasp char(100) foreign key references SanPham(Masp),
	ThongSo Nvarchar(255) not null,
	GiaTriTS Nvarchar(255) not null,
);

insert into SanPham(Masp,Tensp,LoaiSp,ThuongHieu,Gia,SoLuong)
	values('AV.001708',N'Smart Tivi LG NanoCell 8K 55 inch 55NANO95TNA',N'Tivi 8k','Lg',28990000,10,''),
		('AV.002410',N'Smart Tivi LG NanoCell 8K 75 inch 75NANO95TPA',N'Tivi 8k','Lg',109890000,10,''),
		('AV.000901',N'Smart Tivi QLED Samsung 8K 75 inch QA75Q950TS',N'Tivi 8k','Samsung',124890000,10,''),
		('00033679',N'Smart Tivi QLED Samsung 8K 75 inch QA75Q900R',N'Tivi 8k','Samsung',71990000,10,''),
		('00033682',N'Smart Tivi QLED Samsung 8K 82 inch QA82Q900R',N'Tivi 8k','Samsung',104990000,1,''),


insert into HinhAnh(SanPhamMasp,Hinh1,Hinh2,Hinh3,Hinh4,Hinh5,Hinh6)
	values('AV.001708','https://hc.com.vn/i/ecommerce/media/AV.001708_FEATURE_67662.jpg','https://hc.com.vn/i/ecommerce/media/AV.001708_FEATURE_67664.jpg','https://hc.com.vn/i/ecommerce/media/AV.001708_FEATURE_67671.jpg','https://hc.com.vn/i/ecommerce/media/AV.001708_FEATURE_67672.jpg','https://hc.com.vn/i/ecommerce/media/AV.001708_FEATURE_67674.jpg',''),
		('AV.002410','https://hc.com.vn/i/ecommerce/media/AV.002410_FEATURE_85641.jpg','https://hc.com.vn/i/ecommerce/media/AV.002410_FEATURE_85642.jpg','https://hc.com.vn/i/ecommerce/media/AV.002410_FEATURE_85643.jpg','https://hc.com.vn/i/ecommerce/media/AV.002410_FEATURE_85644.jpg','https://hc.com.vn/i/ecommerce/media/AV.002410_FEATURE_85645.jpg','https://hc.com.vn/i/ecommerce/media/AV.002410_FEATURE_85646.jpg'),
		('AV.000901','https://hc.com.vn/i/ecommerce/media/AV.000901_FEATURE_58311.jpg','https://hc.com.vn/i/ecommerce/media/AV.000901_FEATURE_58312.jpg','https://hc.com.vn/i/ecommerce/media/AV.000901_FEATURE_58314.jpg','https://hc.com.vn/i/ecommerce/media/AV.000901_FEATURE_58315.jpg','https://hc.com.vn/i/ecommerce/media/AV.000901_FEATURE_58316.jpg','https://hc.com.vn/i/ecommerce/media/AV.000901_FEATURE_58317.jpg'),
		('00033679','https://hc.com.vn/i/ecommerce/media/00033679_FEATURE_38665.jpg','https://hc.com.vn/i/ecommerce/media/00033679_FEATURE_38666.jpg','https://hc.com.vn/i/ecommerce/media/00033679_FEATURE_38667.jpg','','',''),
		('00033682','https://hc.com.vn/i/ecommerce/media/00033682_FEATURE_38654.jpg','https://hc.com.vn/i/ecommerce/media/00033682_FEATURE_53358.jpg','https://hc.com.vn/i/ecommerce/media/00033682_FEATURE_55352.jpg','https://hc.com.vn/i/ecommerce/media/00033682_FEATURE_55353.jpg','https://hc.com.vn/i/ecommerce/media/00033682_FEATURE_55354.jpg','https://hc.com.vn/i/ecommerce/media/00033682_FEATURE_55355.jpg'),


insert into MoTa(SanPhamMaSP,TieuDe,Mota,HinhAnh)
	values('AV.001708',N'Thiết kế sang trọng, đẳng cấp',N'Smart Tivi LG NanoCell 8K 55 inch 55NANO95TNA sở hữu thiết kế hiện đại, sang trọng, tinh tế đến từng đường nét. Đường viền Nano Bezel tinh gọn, siêu mảnh tối ưu vùng hiển thị mang lại trải nghiệm khác biệt, đồng thời hòa hợp tôn thêm vẻ đẹp cho mọi không gian nội thất. Kích thước lớn lên tới 55 inch thích hợp với những buổi tụ họp giải trí cùng gia đình, bạn bè trong những căn phòng rộng rãi như phòng khách, phòng họp.','https://hc.com.vn/i/ecommerce/media/ckeditor_3064317.jpg'),
		('AV.001708',N'Hình ảnh sắc nét, chất lượng hoàn hảo với độ phân giải 8K',N'Khám phá những khung hình với chất lượng hình ảnh siêu nét trên Smart Tivi LG 8K 55NANO95TNA nhờ số điểm ảnh lên đến 33 triệu nhiều hơn gấp 4 lần so với độ phân giải 4K.','https://hc.com.vn/i/ecommerce/media/ckeditor_2872158.jpg'),
		('AV.002410',N'Thiết kế đẳng cấp nâng tầm không gian sống tiện nghi',N'Smart Tivi LG NanoCell 8K 75 inch 75NANO95TPA sở hữu phong cách thiết kế đẳng cấp, kiểu dáng đẹp kết hợp với tông màu đen thanh lịch, cuốn hút từ mọi góc nhìn, phù hợp với mọi không gian nội thất trong nhà bạn. Bạn có thể đặt tivi lên kệ hoặc treo tường vừa tiết kiệm không gian lại tạo điểm nhấn nổi bật cho căn phòng thêm phần tinh tế, sang trọng.','https://hc.com.vn/i/ecommerce/media/ckeditor_3183821.jpg'),
		('AV.002410',N'Độ phân giải 8K cho màu sắc tinh khiết, hình ảnh chân thực',N'LG luôn mang đến sự bất ngờ thú vị cho người dùng, thể hiện sự khác biệt điểm nổi bật ở mỗi dòng tivi mới ra mắt. Với dòng tivi LG NanoCell NANO95TPA hình ảnh và màu sắc của tivi đã được nâng cấp lên độ phân giải 8K, màu sắc được hiển thị tinh khiết chính xác hơn, chất lượng sắc nét hơn nâng tầm trải nghiệm xem trở nên chân thực nhất.','https://hc.com.vn/i/ecommerce/media/ckeditor_3141215.gif'),
		('AV.000901',N'Màn hình vô cực cho không gian giải trí vô hạn',N'Smart Tivi QLED Samsung 8K 75 inch QA75Q950TSKXXV là dòng tivi QLED 8K sở hữu màn hình vô cực kết hợp cạnh viền siêu mỏng tạo nên một tuyệt tác, điểm nhấn ấn tượng cho không gian nội thất nhà bạn mang đến cho người dùng thế giới giải trí hấp dẫn, cuốn hút thông qua màn hình 8K một cách chân thực.','https://hc.com.vn/i/ecommerce/media/ckeditor_2703616.jpg'),
		('AV.000901',N'Độ phân giải 8K cho khung hình sắc nét vượt trội',N'Smart Tivi Samsung được trang bị độ phân giải 8K cho hình ảnh hiển thị sắc nét gấp 4 lần 4K thông thường cho phép bạn được trải nghiệm các chương trình giải trí thêm thú vị, hình ảnh chân thật hơn. ','https://hc.com.vn/i/ecommerce/media/ckeditor_2703601.jpg'),
		('00033679',N'QLED Samsung thiết kế hoàn hảo đến từng chi tiết',N'Smart Tivi 75Q900R QLED Samsung 8K 75 inch sở hữu thiết kế hoàn hảo với màn hình siêu mỏng tạo cảm giác ấn tượng cho người dùng với cái nhìn lần đầu tiên, hình ảnh sắc nét bao trùm ở mọi góc độ nhìn mang đến sự sang trọng và nghệ thuật cho không gian căn phòng.','https://hc.com.vn/i/ecommerce/media/ckeditor_1947988.jpg'),
		('00033679',N'Độ phân giải 8K QA75Q900RBKXXV Samsung',N'Chất lượng hình ảnh chân thực bạn chưa từng thấy Samsung QLED 8K 75Q900R. Trên một khung hình sống động, từng chi tiết nhỏ nhất được tái tạo tỉ mỉ đến khó tin, kết hợp với độ phân giải đỉnh cao, QLED 8K Q900R như bao trùm mọi giác quan, biến từng thước phim trở nên chân thật như chính bạn đang chứng kiến.','https://hc.com.vn/i/ecommerce/media/ckeditor_1947990.jpg'),


insert into ThongSo(SanPhamMasp,ThongSo,GiaTriTS)
	values('AV.001708',N'Bảo hành',N'2 năm'),
		('AV.001708',N'Loại Tivi',N'Smart Tivi'),
		('AV.001708',N'Kích thước màn hình',N'55"'),
		('AV.001708',N'Khoảng kích thước màn hình',N'Từ 55 - 64 inch'),
		('AV.001708',N'Công nghệ màn hình',N'NANOCELL'),
		('AV.001708',N'Độ phân giải',N'Ultra HD 8K (7680 x 4320 Pixel)'),
		('AV.001708',N'Năm ra mắt',N'2020'),
		('AV.002410',N'Xuất xứ',N'Indonesia'),
		('AV.002410',N'Bảo hành',N'2 năm'),
		('AV.002410',N'Loại Tivi',N'Smart Tivi'),
		('AV.002410',N'Kích thước màn hình',N'75"'),
		('AV.002410',N'Khoảng kích thước màn hình',N'75 inch trở lên'),
		('AV.002410',N'Công nghệ màn hình',N'NANOCELL'),
		('AV.002410',N'Độ phân giải',N'Ultra HD 8K (7680 x 4320 Pixel)'),
		('AV.002410',N'Bluetooth',N'Có (kết nối loa bluetooth)'),
		('AV.002410',N'Cổng LAN',N'Có'),
		('AV.002410',N'Wifi',N'Có'),
		('AV.000901',N'Xuất xứ',N'Việt Nam'),
		('AV.000901',N'Bảo hành',N'2 năm'),
		('AV.000901',N'Loại Tivi',N'Smart Tivi'),
		('AV.000901',N'Kích thước màn hình',N'75"'),
		('AV.000901',N'Khoảng kích thước màn hình',N'75 inch trở lên'),
		('AV.000901',N'Công nghệ màn hình',N'Qled'),
		('AV.000901',N'Độ phân giải',N'Ultra HD 8K (7680 x 4320 Pixel)'),
		('AV.000901',N'Bluetooth',N'Có'),
		('AV.000901',N'Cổng LAN',N'Có'),
		('AV.000901',N'Wifi',N'Có'),
		('00033679',N'Xuất xứ',N'Việt Nam'),
		('00033679',N'Bảo hành',N'2 năm'),
		('00033679',N'Loại Tivi',N'Smart Tivi'),
		('00033679',N'Kích thước màn hình',N'75"'),
		('00033679',N'Khoảng kích thước màn hình',N'75 inch trở lên'),
		('00033679',N'Công nghệ màn hình',N'Qled'),
		('00033679',N'Độ phân giải',N'Ultra HD 8K (7680 x 4320 Pixel)'),
		('00033679',N'Bluetooth',N'Có'),
		('00033679',N'Cổng LAN',N'Có'),
		('00033679',N'Wifi',N'Có'),
