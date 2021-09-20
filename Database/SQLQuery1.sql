create table SanPham (
	Masp char(100) primary key,
	Tensp Nvarchar(255) not null,
	LoaiSp Nvarchar(255) not null,
	ThuongHieu varchar(255) not null,
	Gia decimal(12,4) check (Gia>=0),
	SoLuong int check (SoLuong >=0),
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
	values('AV.001708',N'Smart Tivi LG NanoCell 8K 55 inch 55NANO95TNA',N'Tivi 8k','Lg',28990000,10),


insert into HinhAnh(SanPhamMasp,Hinh1,Hinh2,Hinh3,Hinh4,Hinh5,Hinh6)
	values('AV.001708','https://hc.com.vn/i/ecommerce/media/AV.001708_FEATURE_67662.jpg','https://hc.com.vn/i/ecommerce/media/AV.001708_FEATURE_67664.jpg','https://hc.com.vn/i/ecommerce/media/AV.001708_FEATURE_67671.jpg','https://hc.com.vn/i/ecommerce/media/AV.001708_FEATURE_67672.jpg','https://hc.com.vn/i/ecommerce/media/AV.001708_FEATURE_67674.jpg',''),

insert into MoTa(SanPhamMaSP,TieuDe,Mota,HinhAnh)
	values('AV.001708',N'Thiết kế sang trọng, đẳng cấp',N'Smart Tivi LG NanoCell 8K 55 inch 55NANO95TNA sở hữu thiết kế hiện đại, sang trọng, tinh tế đến từng đường nét. Đường viền Nano Bezel tinh gọn, siêu mảnh tối ưu vùng hiển thị mang lại trải nghiệm khác biệt, đồng thời hòa hợp tôn thêm vẻ đẹp cho mọi không gian nội thất. Kích thước lớn lên tới 55 inch thích hợp với những buổi tụ họp giải trí cùng gia đình, bạn bè trong những căn phòng rộng rãi như phòng khách, phòng họp.','https://hc.com.vn/i/ecommerce/media/ckeditor_3064317.jpg'),
		('AV.001708',N'Hình ảnh sắc nét, chất lượng hoàn hảo với độ phân giải 8K',N'Khám phá những khung hình với chất lượng hình ảnh siêu nét trên Smart Tivi LG 8K 55NANO95TNA nhờ số điểm ảnh lên đến 33 triệu nhiều hơn gấp 4 lần so với độ phân giải 4K.','https://hc.com.vn/i/ecommerce/media/ckeditor_2872158.jpg'),


insert into ThongSo(SanPhamMasp,ThongSo,GiaTriTS)
	values('AV.001708',N'Bảo hành',N'2 năm'),
		('AV.001708',N'Loại Tivi',N'Smart Tivi'),
		('AV.001708',N'Kích thước màn hình',N'55"'),
		('AV.001708',N'Khoảng kích thước màn hình',N'Từ 55 - 64 inch'),
		('AV.001708',N'Công nghệ màn hình',N'NANOCELL'),
		('AV.001708',N'Độ phân giải',N'Ultra HD 8K (7680 x 4320 Pixel)'),
		('AV.001708',N'Năm ra mắt',N'2020'),