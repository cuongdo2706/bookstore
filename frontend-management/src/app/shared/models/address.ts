export class Address {
    public readonly provinces: {
        code: number,
        name: string
    }[] =
            [
        {
            "code": 1,
            "name": "Thành phố Hà Nội"
        },
        {
            "code": 4,
            "name": "Tỉnh Cao Bằng"
        },
        {
            "code": 8,
            "name": "Tỉnh Tuyên Quang"
        },
        {
            "code": 11,
            "name": "Tỉnh Điện Biên"
        },
        {
            "code": 12,
            "name": "Tỉnh Lai Châu"
        },
        {
            "code": 14,
            "name": "Tỉnh Sơn La"
        },
        {
            "code": 15,
            "name": "Tỉnh Lào Cai"
        },
        {
            "code": 19,
            "name": "Tỉnh Thái Nguyên"
        },
        {
            "code": 20,
            "name": "Tỉnh Lạng Sơn"
        },
        {
            "code": 22,
            "name": "Tỉnh Quảng Ninh"
        },
        {
            "code": 24,
            "name": "Tỉnh Bắc Ninh"
        },
        {
            "code": 25,
            "name": "Tỉnh Phú Thọ"
        },
        {
            "code": 31,
            "name": "Thành phố Hải Phòng"
        },
        {
            "code": 33,
            "name": "Tỉnh Hưng Yên"
        },
        {
            "code": 37,
            "name": "Tỉnh Ninh Bình"
        },
        {
            "code": 38,
            "name": "Tỉnh Thanh Hóa"
        },
        {
            "code": 40,
            "name": "Tỉnh Nghệ An"
        },
        {
            "code": 42,
            "name": "Tỉnh Hà Tĩnh"
        },
        {
            "code": 44,
            "name": "Tỉnh Quảng Trị"
        },
        {
            "code": 46,
            "name": "Thành phố Huế"
        },
        {
            "code": 48,
            "name": "Thành phố Đà Nẵng"
        },
        {
            "code": 51,
            "name": "Tỉnh Quảng Ngãi"
        },
        {
            "code": 52,
            "name": "Tỉnh Gia Lai"
        },
        {
            "code": 56,
            "name": "Tỉnh Khánh Hòa"
        },
        {
            "code": 66,
            "name": "Tỉnh Đắk Lắk"
        },
        {
            "code": 68,
            "name": "Tỉnh Lâm Đồng"
        },
        {
            "code": 75,
            "name": "Tỉnh Đồng Nai"
        },
        {
            "code": 79,
            "name": "Thành phố Hồ Chí Minh"
        },
        {
            "code": 80,
            "name": "Tỉnh Tây Ninh"
        },
        {
            "code": 82,
            "name": "Tỉnh Đồng Tháp"
        },
        {
            "code": 86,
            "name": "Tỉnh Vĩnh Long"
        },
        {
            "code": 91,
            "name": "Tỉnh An Giang"
        },
        {
            "code": 92,
            "name": "Thành phố Cần Thơ"
        },
        {
            "code": 96,
            "name": "Tỉnh Cà Mau"
        }
    ];

    public readonly communes: {
        code: string,
        name: string,
        provinceCode: string
    }[] =
            [
        {
            "code": "00004",
            "name": "Phường Ba Đình",
            "provinceCode": "01"
        },
        {
            "code": "00008",
            "name": "Phường Ngọc Hà",
            "provinceCode": "01"
        },
        {
            "code": "00025",
            "name": "Phường Giảng Võ",
            "provinceCode": "01"
        },
        {
            "code": "00070",
            "name": "Phường Hoàn Kiếm",
            "provinceCode": "01"
        },
        {
            "code": "00082",
            "name": "Phường Cửa Nam",
            "provinceCode": "01"
        },
        {
            "code": "00091",
            "name": "Phường Phú Thượng",
            "provinceCode": "01"
        },
        {
            "code": "00097",
            "name": "Phường Hồng Hà",
            "provinceCode": "01"
        },
        {
            "code": "00103",
            "name": "Phường Tây Hồ",
            "provinceCode": "01"
        },
        {
            "code": "00118",
            "name": "Phường Bồ Đề",
            "provinceCode": "01"
        },
        {
            "code": "00127",
            "name": "Phường Việt Hưng",
            "provinceCode": "01"
        },
        {
            "code": "00136",
            "name": "Phường Phúc Lợi",
            "provinceCode": "01"
        },
        {
            "code": "00145",
            "name": "Phường Long Biên",
            "provinceCode": "01"
        },
        {
            "code": "00160",
            "name": "Phường Nghĩa Đô",
            "provinceCode": "01"
        },
        {
            "code": "00166",
            "name": "Phường Cầu Giấy",
            "provinceCode": "01"
        },
        {
            "code": "00175",
            "name": "Phường Yên Hòa",
            "provinceCode": "01"
        },
        {
            "code": "00190",
            "name": "Phường Ô Chợ Dừa",
            "provinceCode": "01"
        },
        {
            "code": "00199",
            "name": "Phường Láng",
            "provinceCode": "01"
        },
        {
            "code": "00226",
            "name": "Phường Văn Miếu - Quốc Tử Giám",
            "provinceCode": "01"
        },
        {
            "code": "00229",
            "name": "Phường Kim Liên",
            "provinceCode": "01"
        },
        {
            "code": "00235",
            "name": "Phường Đống Đa",
            "provinceCode": "01"
        },
        {
            "code": "00256",
            "name": "Phường Hai Bà Trưng",
            "provinceCode": "01"
        },
        {
            "code": "00283",
            "name": "Phường Vĩnh Tuy",
            "provinceCode": "01"
        },
        {
            "code": "00292",
            "name": "Phường Bạch Mai",
            "provinceCode": "01"
        },
        {
            "code": "00301",
            "name": "Phường Vĩnh Hưng",
            "provinceCode": "01"
        },
        {
            "code": "00316",
            "name": "Phường Định Công",
            "provinceCode": "01"
        },
        {
            "code": "00322",
            "name": "Phường Tương Mai",
            "provinceCode": "01"
        },
        {
            "code": "00328",
            "name": "Phường Lĩnh Nam",
            "provinceCode": "01"
        },
        {
            "code": "00331",
            "name": "Phường Hoàng Mai",
            "provinceCode": "01"
        },
        {
            "code": "00337",
            "name": "Phường Hoàng Liệt",
            "provinceCode": "01"
        },
        {
            "code": "00340",
            "name": "Phường Yên Sở",
            "provinceCode": "01"
        },
        {
            "code": "00352",
            "name": "Phường Phương Liệt",
            "provinceCode": "01"
        },
        {
            "code": "00364",
            "name": "Phường Khương Đình",
            "provinceCode": "01"
        },
        {
            "code": "00367",
            "name": "Phường Thanh Xuân",
            "provinceCode": "01"
        },
        {
            "code": "00376",
            "name": "Xã Sóc Sơn",
            "provinceCode": "01"
        },
        {
            "code": "00382",
            "name": "Xã Kim Anh",
            "provinceCode": "01"
        },
        {
            "code": "00385",
            "name": "Xã Trung Giã",
            "provinceCode": "01"
        },
        {
            "code": "00430",
            "name": "Xã Đa Phúc",
            "provinceCode": "01"
        },
        {
            "code": "00433",
            "name": "Xã Nội Bài",
            "provinceCode": "01"
        },
        {
            "code": "00454",
            "name": "Xã Đông Anh",
            "provinceCode": "01"
        },
        {
            "code": "00466",
            "name": "Xã Phúc Thịnh",
            "provinceCode": "01"
        },
        {
            "code": "00475",
            "name": "Xã Thư Lâm",
            "provinceCode": "01"
        },
        {
            "code": "00493",
            "name": "Xã Thiên Lộc",
            "provinceCode": "01"
        },
        {
            "code": "00508",
            "name": "Xã Vĩnh Thanh",
            "provinceCode": "01"
        },
        {
            "code": "00541",
            "name": "Xã Phù Đổng",
            "provinceCode": "01"
        },
        {
            "code": "00562",
            "name": "Xã Thuận An",
            "provinceCode": "01"
        },
        {
            "code": "00565",
            "name": "Xã Gia Lâm",
            "provinceCode": "01"
        },
        {
            "code": "00577",
            "name": "Xã Bát Tràng",
            "provinceCode": "01"
        },
        {
            "code": "00592",
            "name": "Phường Từ Liêm",
            "provinceCode": "01"
        },
        {
            "code": "00598",
            "name": "Phường Thượng Cát",
            "provinceCode": "01"
        },
        {
            "code": "00602",
            "name": "Phường Đông Ngạc",
            "provinceCode": "01"
        },
        {
            "code": "00611",
            "name": "Phường Xuân Đỉnh",
            "provinceCode": "01"
        },
        {
            "code": "00613",
            "name": "Phường Tây Tựu",
            "provinceCode": "01"
        },
        {
            "code": "00619",
            "name": "Phường Phú Diễn",
            "provinceCode": "01"
        },
        {
            "code": "00622",
            "name": "Phường Xuân Phương",
            "provinceCode": "01"
        },
        {
            "code": "00634",
            "name": "Phường Tây Mỗ",
            "provinceCode": "01"
        },
        {
            "code": "00637",
            "name": "Phường Đại Mỗ",
            "provinceCode": "01"
        },
        {
            "code": "00640",
            "name": "Xã Thanh Trì",
            "provinceCode": "01"
        },
        {
            "code": "00643",
            "name": "Phường Thanh Liệt",
            "provinceCode": "01"
        },
        {
            "code": "00664",
            "name": "Xã Đại Thanh",
            "provinceCode": "01"
        },
        {
            "code": "00679",
            "name": "Xã Ngọc Hồi",
            "provinceCode": "01"
        },
        {
            "code": "00685",
            "name": "Xã Nam Phù",
            "provinceCode": "01"
        },
        {
            "code": "04930",
            "name": "Xã Yên Xuân",
            "provinceCode": "01"
        },
        {
            "code": "08974",
            "name": "Xã Quang Minh",
            "provinceCode": "01"
        },
        {
            "code": "08980",
            "name": "Xã Yên Lãng",
            "provinceCode": "01"
        },
        {
            "code": "08995",
            "name": "Xã Tiến Thắng",
            "provinceCode": "01"
        },
        {
            "code": "09022",
            "name": "Xã Mê Linh",
            "provinceCode": "01"
        },
        {
            "code": "09552",
            "name": "Phường Kiến Hưng",
            "provinceCode": "01"
        },
        {
            "code": "09556",
            "name": "Phường Hà Đông",
            "provinceCode": "01"
        },
        {
            "code": "09562",
            "name": "Phường Yên Nghĩa",
            "provinceCode": "01"
        },
        {
            "code": "09568",
            "name": "Phường Phú Lương",
            "provinceCode": "01"
        },
        {
            "code": "09574",
            "name": "Phường Sơn Tây",
            "provinceCode": "01"
        },
        {
            "code": "09604",
            "name": "Phường Tùng Thiện",
            "provinceCode": "01"
        },
        {
            "code": "09616",
            "name": "Xã Đoài Phương",
            "provinceCode": "01"
        },
        {
            "code": "09619",
            "name": "Xã Quảng Oai",
            "provinceCode": "01"
        },
        {
            "code": "09634",
            "name": "Xã Cổ Đô",
            "provinceCode": "01"
        },
        {
            "code": "09661",
            "name": "Xã Minh Châu",
            "provinceCode": "01"
        },
        {
            "code": "09664",
            "name": "Xã Vật Lại",
            "provinceCode": "01"
        },
        {
            "code": "09676",
            "name": "Xã Bất Bạt",
            "provinceCode": "01"
        },
        {
            "code": "09694",
            "name": "Xã Suối Hai",
            "provinceCode": "01"
        },
        {
            "code": "09700",
            "name": "Xã Ba Vì",
            "provinceCode": "01"
        },
        {
            "code": "09706",
            "name": "Xã Yên Bài",
            "provinceCode": "01"
        },
        {
            "code": "09715",
            "name": "Xã Phúc Thọ",
            "provinceCode": "01"
        },
        {
            "code": "09739",
            "name": "Xã Phúc Lộc",
            "provinceCode": "01"
        },
        {
            "code": "09772",
            "name": "Xã Hát Môn",
            "provinceCode": "01"
        },
        {
            "code": "09784",
            "name": "Xã Đan Phượng",
            "provinceCode": "01"
        },
        {
            "code": "09787",
            "name": "Xã Liên Minh",
            "provinceCode": "01"
        },
        {
            "code": "09817",
            "name": "Xã Ô Diên",
            "provinceCode": "01"
        },
        {
            "code": "09832",
            "name": "Xã Hoài Đức",
            "provinceCode": "01"
        },
        {
            "code": "09856",
            "name": "Xã Dương Hòa",
            "provinceCode": "01"
        },
        {
            "code": "09871",
            "name": "Xã Sơn Đồng",
            "provinceCode": "01"
        },
        {
            "code": "09877",
            "name": "Xã An Khánh",
            "provinceCode": "01"
        },
        {
            "code": "09886",
            "name": "Phường Dương Nội",
            "provinceCode": "01"
        },
        {
            "code": "09895",
            "name": "Xã Quốc Oai",
            "provinceCode": "01"
        },
        {
            "code": "09910",
            "name": "Xã Kiều Phú",
            "provinceCode": "01"
        },
        {
            "code": "09931",
            "name": "Xã Hưng Đạo",
            "provinceCode": "01"
        },
        {
            "code": "09952",
            "name": "Xã Phú Cát",
            "provinceCode": "01"
        },
        {
            "code": "09955",
            "name": "Xã Thạch Thất",
            "provinceCode": "01"
        },
        {
            "code": "09982",
            "name": "Xã Hạ Bằng",
            "provinceCode": "01"
        },
        {
            "code": "09988",
            "name": "Xã Hòa Lạc",
            "provinceCode": "01"
        },
        {
            "code": "10003",
            "name": "Xã Tây Phương",
            "provinceCode": "01"
        },
        {
            "code": "10015",
            "name": "Phường Chương Mỹ",
            "provinceCode": "01"
        },
        {
            "code": "10030",
            "name": "Xã Phú Nghĩa",
            "provinceCode": "01"
        },
        {
            "code": "10045",
            "name": "Xã Xuân Mai",
            "provinceCode": "01"
        },
        {
            "code": "10072",
            "name": "Xã Quảng Bị",
            "provinceCode": "01"
        },
        {
            "code": "10081",
            "name": "Xã Trần Phú",
            "provinceCode": "01"
        },
        {
            "code": "10096",
            "name": "Xã Hòa Phú",
            "provinceCode": "01"
        },
        {
            "code": "10114",
            "name": "Xã Thanh Oai",
            "provinceCode": "01"
        },
        {
            "code": "10126",
            "name": "Xã Bình Minh",
            "provinceCode": "01"
        },
        {
            "code": "10144",
            "name": "Xã Tam Hưng",
            "provinceCode": "01"
        },
        {
            "code": "10180",
            "name": "Xã Dân Hòa",
            "provinceCode": "01"
        },
        {
            "code": "10183",
            "name": "Xã Thường Tín",
            "provinceCode": "01"
        },
        {
            "code": "10210",
            "name": "Xã Hồng Vân",
            "provinceCode": "01"
        },
        {
            "code": "10231",
            "name": "Xã Thượng Phúc",
            "provinceCode": "01"
        },
        {
            "code": "10237",
            "name": "Xã Chương Dương",
            "provinceCode": "01"
        },
        {
            "code": "10273",
            "name": "Xã Phú Xuyên",
            "provinceCode": "01"
        },
        {
            "code": "10279",
            "name": "Xã Phượng Dực",
            "provinceCode": "01"
        },
        {
            "code": "10330",
            "name": "Xã Chuyên Mỹ",
            "provinceCode": "01"
        },
        {
            "code": "10342",
            "name": "Xã Đại Xuyên",
            "provinceCode": "01"
        },
        {
            "code": "10354",
            "name": "Xã Vân Đình",
            "provinceCode": "01"
        },
        {
            "code": "10369",
            "name": "Xã Ứng Thiên",
            "provinceCode": "01"
        },
        {
            "code": "10402",
            "name": "Xã Ứng Hòa",
            "provinceCode": "01"
        },
        {
            "code": "10417",
            "name": "Xã Hòa Xá",
            "provinceCode": "01"
        },
        {
            "code": "10441",
            "name": "Xã Mỹ Đức",
            "provinceCode": "01"
        },
        {
            "code": "10459",
            "name": "Xã Phúc Sơn",
            "provinceCode": "01"
        },
        {
            "code": "10465",
            "name": "Xã Hồng Sơn",
            "provinceCode": "01"
        },
        {
            "code": "10489",
            "name": "Xã Hương Sơn",
            "provinceCode": "01"
        },
        {
            "code": "01273",
            "name": "Phường Thục Phán",
            "provinceCode": "04"
        },
        {
            "code": "01279",
            "name": "Phường Nùng Trí Cao",
            "provinceCode": "04"
        },
        {
            "code": "01288",
            "name": "Phường Tân Giang",
            "provinceCode": "04"
        },
        {
            "code": "01290",
            "name": "Xã Bảo Lâm",
            "provinceCode": "04"
        },
        {
            "code": "01294",
            "name": "Xã Lý Bôn",
            "provinceCode": "04"
        },
        {
            "code": "01297",
            "name": "Xã Nam Quang",
            "provinceCode": "04"
        },
        {
            "code": "01304",
            "name": "Xã Quảng Lâm",
            "provinceCode": "04"
        },
        {
            "code": "01318",
            "name": "Xã Yên Thổ",
            "provinceCode": "04"
        },
        {
            "code": "01321",
            "name": "Xã Bảo Lạc",
            "provinceCode": "04"
        },
        {
            "code": "01324",
            "name": "Xã Cốc Pàng",
            "provinceCode": "04"
        },
        {
            "code": "01327",
            "name": "Xã Cô Ba",
            "provinceCode": "04"
        },
        {
            "code": "01336",
            "name": "Xã Khánh Xuân",
            "provinceCode": "04"
        },
        {
            "code": "01339",
            "name": "Xã Xuân Trường",
            "provinceCode": "04"
        },
        {
            "code": "01351",
            "name": "Xã Hưng Đạo",
            "provinceCode": "04"
        },
        {
            "code": "01354",
            "name": "Xã Huy Giáp",
            "provinceCode": "04"
        },
        {
            "code": "01360",
            "name": "Xã Sơn Lộ",
            "provinceCode": "04"
        },
        {
            "code": "01363",
            "name": "Xã Thông Nông",
            "provinceCode": "04"
        },
        {
            "code": "01366",
            "name": "Xã Cần Yên",
            "provinceCode": "04"
        },
        {
            "code": "01387",
            "name": "Xã Thanh Long",
            "provinceCode": "04"
        },
        {
            "code": "01392",
            "name": "Xã Trường Hà",
            "provinceCode": "04"
        },
        {
            "code": "01393",
            "name": "Xã Lũng Nặm",
            "provinceCode": "04"
        },
        {
            "code": "01414",
            "name": "Xã Tổng Cọt",
            "provinceCode": "04"
        },
        {
            "code": "01438",
            "name": "Xã Hà Quảng",
            "provinceCode": "04"
        },
        {
            "code": "01447",
            "name": "Xã Trà Lĩnh",
            "provinceCode": "04"
        },
        {
            "code": "01456",
            "name": "Xã Quang Hán",
            "provinceCode": "04"
        },
        {
            "code": "01465",
            "name": "Xã Quang Trung",
            "provinceCode": "04"
        },
        {
            "code": "01477",
            "name": "Xã Trùng Khánh",
            "provinceCode": "04"
        },
        {
            "code": "01489",
            "name": "Xã Đình Phong",
            "provinceCode": "04"
        },
        {
            "code": "01501",
            "name": "Xã Đàm Thủy",
            "provinceCode": "04"
        },
        {
            "code": "01525",
            "name": "Xã Đoài Dương",
            "provinceCode": "04"
        },
        {
            "code": "01537",
            "name": "Xã Lý Quốc",
            "provinceCode": "04"
        },
        {
            "code": "01552",
            "name": "Xã Quang Long",
            "provinceCode": "04"
        },
        {
            "code": "01558",
            "name": "Xã Hạ Lang",
            "provinceCode": "04"
        },
        {
            "code": "01561",
            "name": "Xã Vinh Quý",
            "provinceCode": "04"
        },
        {
            "code": "01576",
            "name": "Xã Quảng Uyên",
            "provinceCode": "04"
        },
        {
            "code": "01594",
            "name": "Xã Độc Lập",
            "provinceCode": "04"
        },
        {
            "code": "01618",
            "name": "Xã Hạnh Phúc",
            "provinceCode": "04"
        },
        {
            "code": "01636",
            "name": "Xã Bế Văn Đàn",
            "provinceCode": "04"
        },
        {
            "code": "01648",
            "name": "Xã Phục Hòa",
            "provinceCode": "04"
        },
        {
            "code": "01654",
            "name": "Xã Hòa An",
            "provinceCode": "04"
        },
        {
            "code": "01660",
            "name": "Xã Nam Tuấn",
            "provinceCode": "04"
        },
        {
            "code": "01699",
            "name": "Xã Nguyễn Huệ",
            "provinceCode": "04"
        },
        {
            "code": "01708",
            "name": "Xã Bạch Đằng",
            "provinceCode": "04"
        },
        {
            "code": "01726",
            "name": "Xã Nguyên Bình",
            "provinceCode": "04"
        },
        {
            "code": "01729",
            "name": "Xã Tĩnh Túc",
            "provinceCode": "04"
        },
        {
            "code": "01738",
            "name": "Xã Ca Thành",
            "provinceCode": "04"
        },
        {
            "code": "01747",
            "name": "Xã Minh Tâm",
            "provinceCode": "04"
        },
        {
            "code": "01768",
            "name": "Xã Phan Thanh",
            "provinceCode": "04"
        },
        {
            "code": "01774",
            "name": "Xã Tam Kim",
            "provinceCode": "04"
        },
        {
            "code": "01777",
            "name": "Xã Thành Công",
            "provinceCode": "04"
        },
        {
            "code": "01786",
            "name": "Xã Đông Khê",
            "provinceCode": "04"
        },
        {
            "code": "01789",
            "name": "Xã Canh Tân",
            "provinceCode": "04"
        },
        {
            "code": "01792",
            "name": "Xã Kim Đồng",
            "provinceCode": "04"
        },
        {
            "code": "01795",
            "name": "Xã Minh Khai",
            "provinceCode": "04"
        },
        {
            "code": "01807",
            "name": "Xã Thạch An",
            "provinceCode": "04"
        },
        {
            "code": "01822",
            "name": "Xã Đức Long",
            "provinceCode": "04"
        },
        {
            "code": "00691",
            "name": "Phường Hà Giang 2",
            "provinceCode": "08"
        },
        {
            "code": "00694",
            "name": "Phường Hà Giang 1",
            "provinceCode": "08"
        },
        {
            "code": "00700",
            "name": "Xã Ngọc Đường",
            "provinceCode": "08"
        },
        {
            "code": "00706",
            "name": "Xã Phú Linh",
            "provinceCode": "08"
        },
        {
            "code": "00715",
            "name": "Xã Lũng Cú",
            "provinceCode": "08"
        },
        {
            "code": "00721",
            "name": "Xã Đồng Văn",
            "provinceCode": "08"
        },
        {
            "code": "00733",
            "name": "Xã Sà Phìn",
            "provinceCode": "08"
        },
        {
            "code": "00745",
            "name": "Xã Phố Bảng",
            "provinceCode": "08"
        },
        {
            "code": "00763",
            "name": "Xã Lũng Phìn",
            "provinceCode": "08"
        },
        {
            "code": "00769",
            "name": "Xã Mèo Vạc",
            "provinceCode": "08"
        },
        {
            "code": "00778",
            "name": "Xã Sơn Vĩ",
            "provinceCode": "08"
        },
        {
            "code": "00787",
            "name": "Xã Sủng Máng",
            "provinceCode": "08"
        },
        {
            "code": "00802",
            "name": "Xã Khâu Vai",
            "provinceCode": "08"
        },
        {
            "code": "00808",
            "name": "Xã Tát Ngà",
            "provinceCode": "08"
        },
        {
            "code": "00817",
            "name": "Xã Niêm Sơn",
            "provinceCode": "08"
        },
        {
            "code": "00820",
            "name": "Xã Yên Minh",
            "provinceCode": "08"
        },
        {
            "code": "00829",
            "name": "Xã Thắng Mố",
            "provinceCode": "08"
        },
        {
            "code": "00832",
            "name": "Xã Bạch Đích",
            "provinceCode": "08"
        },
        {
            "code": "00847",
            "name": "Xã Mậu Duệ",
            "provinceCode": "08"
        },
        {
            "code": "00859",
            "name": "Xã Ngọc Long",
            "provinceCode": "08"
        },
        {
            "code": "00865",
            "name": "Xã Đường Thượng",
            "provinceCode": "08"
        },
        {
            "code": "00871",
            "name": "Xã Du Già",
            "provinceCode": "08"
        },
        {
            "code": "00874",
            "name": "Xã Quản Bạ",
            "provinceCode": "08"
        },
        {
            "code": "00883",
            "name": "Xã Cán Tỷ",
            "provinceCode": "08"
        },
        {
            "code": "00889",
            "name": "Xã Nghĩa Thuận",
            "provinceCode": "08"
        },
        {
            "code": "00892",
            "name": "Xã Tùng Vài",
            "provinceCode": "08"
        },
        {
            "code": "00901",
            "name": "Xã Lùng Tám",
            "provinceCode": "08"
        },
        {
            "code": "00913",
            "name": "Xã Vị Xuyên",
            "provinceCode": "08"
        },
        {
            "code": "00919",
            "name": "Xã Minh Tân",
            "provinceCode": "08"
        },
        {
            "code": "00922",
            "name": "Xã Thuận Hoà",
            "provinceCode": "08"
        },
        {
            "code": "00925",
            "name": "Xã Tùng Bá",
            "provinceCode": "08"
        },
        {
            "code": "00928",
            "name": "Xã Thanh Thủy",
            "provinceCode": "08"
        },
        {
            "code": "00937",
            "name": "Xã Lao Chải",
            "provinceCode": "08"
        },
        {
            "code": "00952",
            "name": "Xã Cao Bồ",
            "provinceCode": "08"
        },
        {
            "code": "00958",
            "name": "Xã Thượng Sơn",
            "provinceCode": "08"
        },
        {
            "code": "00967",
            "name": "Xã Việt Lâm",
            "provinceCode": "08"
        },
        {
            "code": "00970",
            "name": "Xã Linh Hồ",
            "provinceCode": "08"
        },
        {
            "code": "00976",
            "name": "Xã Bạch Ngọc",
            "provinceCode": "08"
        },
        {
            "code": "00982",
            "name": "Xã Minh Sơn",
            "provinceCode": "08"
        },
        {
            "code": "00985",
            "name": "Xã Giáp Trung",
            "provinceCode": "08"
        },
        {
            "code": "00991",
            "name": "Xã Bắc Mê",
            "provinceCode": "08"
        },
        {
            "code": "00994",
            "name": "Xã Minh Ngọc",
            "provinceCode": "08"
        },
        {
            "code": "01006",
            "name": "Xã Yên Cường",
            "provinceCode": "08"
        },
        {
            "code": "01012",
            "name": "Xã Đường Hồng",
            "provinceCode": "08"
        },
        {
            "code": "01021",
            "name": "Xã Hoàng Su Phì",
            "provinceCode": "08"
        },
        {
            "code": "01024",
            "name": "Xã Bản Máy",
            "provinceCode": "08"
        },
        {
            "code": "01033",
            "name": "Xã Thàng Tín",
            "provinceCode": "08"
        },
        {
            "code": "01051",
            "name": "Xã Tân Tiến",
            "provinceCode": "08"
        },
        {
            "code": "01057",
            "name": "Xã Pờ Ly Ngài",
            "provinceCode": "08"
        },
        {
            "code": "01075",
            "name": "Xã Nậm Dịch",
            "provinceCode": "08"
        },
        {
            "code": "01084",
            "name": "Xã Hồ Thầu",
            "provinceCode": "08"
        },
        {
            "code": "01090",
            "name": "Xã Thông Nguyên",
            "provinceCode": "08"
        },
        {
            "code": "01096",
            "name": "Xã Pà Vầy Sủ",
            "provinceCode": "08"
        },
        {
            "code": "01108",
            "name": "Xã Xín Mần",
            "provinceCode": "08"
        },
        {
            "code": "01117",
            "name": "Xã Trung Thịnh",
            "provinceCode": "08"
        },
        {
            "code": "01141",
            "name": "Xã Nấm Dẩn",
            "provinceCode": "08"
        },
        {
            "code": "01144",
            "name": "Xã Quảng Nguyên",
            "provinceCode": "08"
        },
        {
            "code": "01147",
            "name": "Xã Khuôn Lùng",
            "provinceCode": "08"
        },
        {
            "code": "01153",
            "name": "Xã Bắc Quang",
            "provinceCode": "08"
        },
        {
            "code": "01156",
            "name": "Xã Vĩnh Tuy",
            "provinceCode": "08"
        },
        {
            "code": "01165",
            "name": "Xã Đồng Tâm",
            "provinceCode": "08"
        },
        {
            "code": "01171",
            "name": "Xã Tân Quang",
            "provinceCode": "08"
        },
        {
            "code": "01180",
            "name": "Xã Bằng Hành",
            "provinceCode": "08"
        },
        {
            "code": "01192",
            "name": "Xã Liên Hiệp",
            "provinceCode": "08"
        },
        {
            "code": "01201",
            "name": "Xã Hùng An",
            "provinceCode": "08"
        },
        {
            "code": "01216",
            "name": "Xã Đồng Yên",
            "provinceCode": "08"
        },
        {
            "code": "01225",
            "name": "Xã Tiên Nguyên",
            "provinceCode": "08"
        },
        {
            "code": "01234",
            "name": "Xã Yên Thành",
            "provinceCode": "08"
        },
        {
            "code": "01237",
            "name": "Xã Quang Bình",
            "provinceCode": "08"
        },
        {
            "code": "01243",
            "name": "Xã Tân Trịnh",
            "provinceCode": "08"
        },
        {
            "code": "01246",
            "name": "Xã Bằng Lang",
            "provinceCode": "08"
        },
        {
            "code": "01255",
            "name": "Xã Xuân Giang",
            "provinceCode": "08"
        },
        {
            "code": "01261",
            "name": "Xã Tiên Yên",
            "provinceCode": "08"
        },
        {
            "code": "02212",
            "name": "Phường Nông Tiến",
            "provinceCode": "08"
        },
        {
            "code": "02215",
            "name": "Phường Minh Xuân",
            "provinceCode": "08"
        },
        {
            "code": "02221",
            "name": "Xã Nà Hang",
            "provinceCode": "08"
        },
        {
            "code": "02239",
            "name": "Xã Thượng Nông",
            "provinceCode": "08"
        },
        {
            "code": "02245",
            "name": "Xã Côn Lôn",
            "provinceCode": "08"
        },
        {
            "code": "02248",
            "name": "Xã Yên Hoa",
            "provinceCode": "08"
        },
        {
            "code": "02260",
            "name": "Xã Hồng Thái",
            "provinceCode": "08"
        },
        {
            "code": "02266",
            "name": "Xã Lâm Bình",
            "provinceCode": "08"
        },
        {
            "code": "02269",
            "name": "Xã Thượng Lâm",
            "provinceCode": "08"
        },
        {
            "code": "02287",
            "name": "Xã Chiêm Hoá",
            "provinceCode": "08"
        },
        {
            "code": "02296",
            "name": "Xã Bình An",
            "provinceCode": "08"
        },
        {
            "code": "02302",
            "name": "Xã Minh Quang",
            "provinceCode": "08"
        },
        {
            "code": "02305",
            "name": "Xã Trung Hà",
            "provinceCode": "08"
        },
        {
            "code": "02308",
            "name": "Xã Tân Mỹ",
            "provinceCode": "08"
        },
        {
            "code": "02317",
            "name": "Xã Yên Lập",
            "provinceCode": "08"
        },
        {
            "code": "02320",
            "name": "Xã Tân An",
            "provinceCode": "08"
        },
        {
            "code": "02332",
            "name": "Xã Kiên Đài",
            "provinceCode": "08"
        },
        {
            "code": "02350",
            "name": "Xã Kim Bình",
            "provinceCode": "08"
        },
        {
            "code": "02353",
            "name": "Xã Hoà An",
            "provinceCode": "08"
        },
        {
            "code": "02359",
            "name": "Xã Tri Phú",
            "provinceCode": "08"
        },
        {
            "code": "02365",
            "name": "Xã Yên Nguyên",
            "provinceCode": "08"
        },
        {
            "code": "02374",
            "name": "Xã Hàm Yên",
            "provinceCode": "08"
        },
        {
            "code": "02380",
            "name": "Xã Bạch Xa",
            "provinceCode": "08"
        },
        {
            "code": "02392",
            "name": "Xã Phù Lưu",
            "provinceCode": "08"
        },
        {
            "code": "02398",
            "name": "Xã Yên Phú",
            "provinceCode": "08"
        },
        {
            "code": "02404",
            "name": "Xã Bình Xa",
            "provinceCode": "08"
        },
        {
            "code": "02407",
            "name": "Xã Thái Sơn",
            "provinceCode": "08"
        },
        {
            "code": "02419",
            "name": "Xã Thái Hoà",
            "provinceCode": "08"
        },
        {
            "code": "02425",
            "name": "Xã Hùng Đức",
            "provinceCode": "08"
        },
        {
            "code": "02434",
            "name": "Xã Lực Hành",
            "provinceCode": "08"
        },
        {
            "code": "02437",
            "name": "Xã Kiến Thiết",
            "provinceCode": "08"
        },
        {
            "code": "02449",
            "name": "Xã Xuân Vân",
            "provinceCode": "08"
        },
        {
            "code": "02455",
            "name": "Xã Hùng Lợi",
            "provinceCode": "08"
        },
        {
            "code": "02458",
            "name": "Xã Trung Sơn",
            "provinceCode": "08"
        },
        {
            "code": "02470",
            "name": "Xã Tân Long",
            "provinceCode": "08"
        },
        {
            "code": "02473",
            "name": "Xã Yên Sơn",
            "provinceCode": "08"
        },
        {
            "code": "02494",
            "name": "Xã Thái Bình",
            "provinceCode": "08"
        },
        {
            "code": "02509",
            "name": "Phường Mỹ Lâm",
            "provinceCode": "08"
        },
        {
            "code": "02512",
            "name": "Phường An Tường",
            "provinceCode": "08"
        },
        {
            "code": "02524",
            "name": "Phường Bình Thuận",
            "provinceCode": "08"
        },
        {
            "code": "02530",
            "name": "Xã Nhữ Khê",
            "provinceCode": "08"
        },
        {
            "code": "02536",
            "name": "Xã Sơn Dương",
            "provinceCode": "08"
        },
        {
            "code": "02545",
            "name": "Xã Tân Trào",
            "provinceCode": "08"
        },
        {
            "code": "02548",
            "name": "Xã Bình Ca",
            "provinceCode": "08"
        },
        {
            "code": "02554",
            "name": "Xã Minh Thanh",
            "provinceCode": "08"
        },
        {
            "code": "02572",
            "name": "Xã Đông Thọ",
            "provinceCode": "08"
        },
        {
            "code": "02578",
            "name": "Xã Tân Thanh",
            "provinceCode": "08"
        },
        {
            "code": "02608",
            "name": "Xã Hồng Sơn",
            "provinceCode": "08"
        },
        {
            "code": "02611",
            "name": "Xã Phú Lương",
            "provinceCode": "08"
        },
        {
            "code": "02620",
            "name": "Xã Sơn Thuỷ",
            "provinceCode": "08"
        },
        {
            "code": "02623",
            "name": "Xã Trường Sinh",
            "provinceCode": "08"
        },
        {
            "code": "03127",
            "name": "Phường Điện Biên Phủ",
            "provinceCode": "11"
        },
        {
            "code": "03151",
            "name": "Phường Mường Lay",
            "provinceCode": "11"
        },
        {
            "code": "03158",
            "name": "Xã Sín Thầu",
            "provinceCode": "11"
        },
        {
            "code": "03160",
            "name": "Xã Mường Nhé",
            "provinceCode": "11"
        },
        {
            "code": "03162",
            "name": "Xã Nậm Kè",
            "provinceCode": "11"
        },
        {
            "code": "03163",
            "name": "Xã Mường Toong",
            "provinceCode": "11"
        },
        {
            "code": "03164",
            "name": "Xã Quảng Lâm",
            "provinceCode": "11"
        },
        {
            "code": "03166",
            "name": "Xã Mường Chà",
            "provinceCode": "11"
        },
        {
            "code": "03169",
            "name": "Xã Nà Hỳ",
            "provinceCode": "11"
        },
        {
            "code": "03172",
            "name": "Xã Na Sang",
            "provinceCode": "11"
        },
        {
            "code": "03175",
            "name": "Xã Chà Tở",
            "provinceCode": "11"
        },
        {
            "code": "03176",
            "name": "Xã Nà Bủng",
            "provinceCode": "11"
        },
        {
            "code": "03181",
            "name": "Xã Mường Tùng",
            "provinceCode": "11"
        },
        {
            "code": "03193",
            "name": "Xã Pa Ham",
            "provinceCode": "11"
        },
        {
            "code": "03194",
            "name": "Xã Nậm Nèn",
            "provinceCode": "11"
        },
        {
            "code": "03199",
            "name": "Xã Si Pa Phìn",
            "provinceCode": "11"
        },
        {
            "code": "03202",
            "name": "Xã Mường Pồn",
            "provinceCode": "11"
        },
        {
            "code": "03203",
            "name": "Xã Na Son",
            "provinceCode": "11"
        },
        {
            "code": "03208",
            "name": "Xã Xa Dung",
            "provinceCode": "11"
        },
        {
            "code": "03214",
            "name": "Xã Mường Luân",
            "provinceCode": "11"
        },
        {
            "code": "03217",
            "name": "Xã Tủa Chùa",
            "provinceCode": "11"
        },
        {
            "code": "03220",
            "name": "Xã Tủa Thàng",
            "provinceCode": "11"
        },
        {
            "code": "03226",
            "name": "Xã Sín Chải",
            "provinceCode": "11"
        },
        {
            "code": "03241",
            "name": "Xã Sính Phình",
            "provinceCode": "11"
        },
        {
            "code": "03244",
            "name": "Xã Sáng Nhè",
            "provinceCode": "11"
        },
        {
            "code": "03253",
            "name": "Xã Tuần Giáo",
            "provinceCode": "11"
        },
        {
            "code": "03256",
            "name": "Xã Mường Ảng",
            "provinceCode": "11"
        },
        {
            "code": "03260",
            "name": "Xã Pú Nhung",
            "provinceCode": "11"
        },
        {
            "code": "03268",
            "name": "Xã Mường Mùn",
            "provinceCode": "11"
        },
        {
            "code": "03283",
            "name": "Xã Chiềng Sinh",
            "provinceCode": "11"
        },
        {
            "code": "03295",
            "name": "Xã Quài Tở",
            "provinceCode": "11"
        },
        {
            "code": "03301",
            "name": "Xã Búng Lao",
            "provinceCode": "11"
        },
        {
            "code": "03313",
            "name": "Xã Mường Lạn",
            "provinceCode": "11"
        },
        {
            "code": "03316",
            "name": "Xã Nà Tấu",
            "provinceCode": "11"
        },
        {
            "code": "03325",
            "name": "Xã Mường Phăng",
            "provinceCode": "11"
        },
        {
            "code": "03328",
            "name": "Xã Thanh Nưa",
            "provinceCode": "11"
        },
        {
            "code": "03334",
            "name": "Phường Mường Thanh",
            "provinceCode": "11"
        },
        {
            "code": "03349",
            "name": "Xã Thanh Yên",
            "provinceCode": "11"
        },
        {
            "code": "03352",
            "name": "Xã Thanh An",
            "provinceCode": "11"
        },
        {
            "code": "03356",
            "name": "Xã Sam Mứn",
            "provinceCode": "11"
        },
        {
            "code": "03358",
            "name": "Xã Núa Ngam",
            "provinceCode": "11"
        },
        {
            "code": "03368",
            "name": "Xã Mường Nhà",
            "provinceCode": "11"
        },
        {
            "code": "03370",
            "name": "Xã Pu Nhi",
            "provinceCode": "11"
        },
        {
            "code": "03382",
            "name": "Xã Phình Giàng",
            "provinceCode": "11"
        },
        {
            "code": "03385",
            "name": "Xã Tìa Dình",
            "provinceCode": "11"
        },
        {
            "code": "03388",
            "name": "Phường Đoàn Kết",
            "provinceCode": "12"
        },
        {
            "code": "03390",
            "name": "Xã Bình Lư",
            "provinceCode": "12"
        },
        {
            "code": "03394",
            "name": "Xã Sin Suối Hồ",
            "provinceCode": "12"
        },
        {
            "code": "03405",
            "name": "Xã Tả Lèng",
            "provinceCode": "12"
        },
        {
            "code": "03408",
            "name": "Phường Tân Phong",
            "provinceCode": "12"
        },
        {
            "code": "03424",
            "name": "Xã Bản Bo",
            "provinceCode": "12"
        },
        {
            "code": "03430",
            "name": "Xã Khun Há",
            "provinceCode": "12"
        },
        {
            "code": "03433",
            "name": "Xã Bum Tở",
            "provinceCode": "12"
        },
        {
            "code": "03434",
            "name": "Xã Nậm Hàng",
            "provinceCode": "12"
        },
        {
            "code": "03439",
            "name": "Xã Thu Lũm",
            "provinceCode": "12"
        },
        {
            "code": "03442",
            "name": "Xã Pa Ủ",
            "provinceCode": "12"
        },
        {
            "code": "03445",
            "name": "Xã Mường Tè",
            "provinceCode": "12"
        },
        {
            "code": "03451",
            "name": "Xã Mù Cả",
            "provinceCode": "12"
        },
        {
            "code": "03460",
            "name": "Xã Hua Bum",
            "provinceCode": "12"
        },
        {
            "code": "03463",
            "name": "Xã Tà Tổng",
            "provinceCode": "12"
        },
        {
            "code": "03466",
            "name": "Xã Bum Nưa",
            "provinceCode": "12"
        },
        {
            "code": "03472",
            "name": "Xã Mường Mô",
            "provinceCode": "12"
        },
        {
            "code": "03478",
            "name": "Xã Sìn Hồ",
            "provinceCode": "12"
        },
        {
            "code": "03487",
            "name": "Xã Lê Lợi",
            "provinceCode": "12"
        },
        {
            "code": "03503",
            "name": "Xã Pa Tần",
            "provinceCode": "12"
        },
        {
            "code": "03508",
            "name": "Xã Hồng Thu",
            "provinceCode": "12"
        },
        {
            "code": "03517",
            "name": "Xã Nậm Tăm",
            "provinceCode": "12"
        },
        {
            "code": "03529",
            "name": "Xã Tủa Sín Chải",
            "provinceCode": "12"
        },
        {
            "code": "03532",
            "name": "Xã Pu Sam Cáp",
            "provinceCode": "12"
        },
        {
            "code": "03538",
            "name": "Xã Nậm Mạ",
            "provinceCode": "12"
        },
        {
            "code": "03544",
            "name": "Xã Nậm Cuổi",
            "provinceCode": "12"
        },
        {
            "code": "03549",
            "name": "Xã Phong Thổ",
            "provinceCode": "12"
        },
        {
            "code": "03562",
            "name": "Xã Sì Lở Lầu",
            "provinceCode": "12"
        },
        {
            "code": "03571",
            "name": "Xã Dào San",
            "provinceCode": "12"
        },
        {
            "code": "03583",
            "name": "Xã Khổng Lào",
            "provinceCode": "12"
        },
        {
            "code": "03595",
            "name": "Xã Than Uyên",
            "provinceCode": "12"
        },
        {
            "code": "03598",
            "name": "Xã Tân Uyên",
            "provinceCode": "12"
        },
        {
            "code": "03601",
            "name": "Xã Mường Khoa",
            "provinceCode": "12"
        },
        {
            "code": "03613",
            "name": "Xã Nậm Sỏ",
            "provinceCode": "12"
        },
        {
            "code": "03616",
            "name": "Xã Pắc Ta",
            "provinceCode": "12"
        },
        {
            "code": "03618",
            "name": "Xã Mường Than",
            "provinceCode": "12"
        },
        {
            "code": "03637",
            "name": "Xã Mường Kim",
            "provinceCode": "12"
        },
        {
            "code": "03640",
            "name": "Xã Khoen On",
            "provinceCode": "12"
        },
        {
            "code": "03646",
            "name": "Phường Tô Hiệu",
            "provinceCode": "14"
        },
        {
            "code": "03664",
            "name": "Phường Chiềng An",
            "provinceCode": "14"
        },
        {
            "code": "03670",
            "name": "Phường Chiềng Cơi",
            "provinceCode": "14"
        },
        {
            "code": "03679",
            "name": "Phường Chiềng Sinh",
            "provinceCode": "14"
        },
        {
            "code": "03688",
            "name": "Xã Mường Chiên",
            "provinceCode": "14"
        },
        {
            "code": "03694",
            "name": "Xã Mường Giôn",
            "provinceCode": "14"
        },
        {
            "code": "03703",
            "name": "Xã Quỳnh Nhai",
            "provinceCode": "14"
        },
        {
            "code": "03712",
            "name": "Xã Mường Sại",
            "provinceCode": "14"
        },
        {
            "code": "03721",
            "name": "Xã Thuận Châu",
            "provinceCode": "14"
        },
        {
            "code": "03724",
            "name": "Xã Bình Thuận",
            "provinceCode": "14"
        },
        {
            "code": "03727",
            "name": "Xã Mường É",
            "provinceCode": "14"
        },
        {
            "code": "03754",
            "name": "Xã Chiềng La",
            "provinceCode": "14"
        },
        {
            "code": "03757",
            "name": "Xã Mường Khiêng",
            "provinceCode": "14"
        },
        {
            "code": "03760",
            "name": "Xã Mường Bám",
            "provinceCode": "14"
        },
        {
            "code": "03763",
            "name": "Xã Long Hẹ",
            "provinceCode": "14"
        },
        {
            "code": "03781",
            "name": "Xã Co Mạ",
            "provinceCode": "14"
        },
        {
            "code": "03784",
            "name": "Xã Nậm Lầu",
            "provinceCode": "14"
        },
        {
            "code": "03799",
            "name": "Xã Muổi Nọi",
            "provinceCode": "14"
        },
        {
            "code": "03808",
            "name": "Xã Mường La",
            "provinceCode": "14"
        },
        {
            "code": "03814",
            "name": "Xã Chiềng Lao",
            "provinceCode": "14"
        },
        {
            "code": "03820",
            "name": "Xã Ngọc Chiến",
            "provinceCode": "14"
        },
        {
            "code": "03847",
            "name": "Xã Mường Bú",
            "provinceCode": "14"
        },
        {
            "code": "03850",
            "name": "Xã Chiềng Hoa",
            "provinceCode": "14"
        },
        {
            "code": "03856",
            "name": "Xã Bắc Yên",
            "provinceCode": "14"
        },
        {
            "code": "03862",
            "name": "Xã Xím Vàng",
            "provinceCode": "14"
        },
        {
            "code": "03868",
            "name": "Xã Tà Xùa",
            "provinceCode": "14"
        },
        {
            "code": "03871",
            "name": "Xã Pắc Ngà",
            "provinceCode": "14"
        },
        {
            "code": "03880",
            "name": "Xã Tạ Khoa",
            "provinceCode": "14"
        },
        {
            "code": "03892",
            "name": "Xã Chiềng Sại",
            "provinceCode": "14"
        },
        {
            "code": "03901",
            "name": "Xã Suối Tọ",
            "provinceCode": "14"
        },
        {
            "code": "03907",
            "name": "Xã Mường Cơi",
            "provinceCode": "14"
        },
        {
            "code": "03910",
            "name": "Xã Phù Yên",
            "provinceCode": "14"
        },
        {
            "code": "03922",
            "name": "Xã Gia Phù",
            "provinceCode": "14"
        },
        {
            "code": "03943",
            "name": "Xã Mường Bang",
            "provinceCode": "14"
        },
        {
            "code": "03958",
            "name": "Xã Tường Hạ",
            "provinceCode": "14"
        },
        {
            "code": "03961",
            "name": "Xã Kim Bon",
            "provinceCode": "14"
        },
        {
            "code": "03970",
            "name": "Xã Tân Phong",
            "provinceCode": "14"
        },
        {
            "code": "03979",
            "name": "Phường Mộc Sơn",
            "provinceCode": "14"
        },
        {
            "code": "03980",
            "name": "Phường Mộc Châu",
            "provinceCode": "14"
        },
        {
            "code": "03982",
            "name": "Phường Thảo Nguyên",
            "provinceCode": "14"
        },
        {
            "code": "03985",
            "name": "Xã Chiềng Sơn",
            "provinceCode": "14"
        },
        {
            "code": "03997",
            "name": "Xã Tân Yên",
            "provinceCode": "14"
        },
        {
            "code": "04000",
            "name": "Xã Đoàn Kết",
            "provinceCode": "14"
        },
        {
            "code": "04006",
            "name": "Xã Song Khủa",
            "provinceCode": "14"
        },
        {
            "code": "04018",
            "name": "Xã Tô Múa",
            "provinceCode": "14"
        },
        {
            "code": "04033",
            "name": "Phường Vân Sơn",
            "provinceCode": "14"
        },
        {
            "code": "04045",
            "name": "Xã Lóng Sập",
            "provinceCode": "14"
        },
        {
            "code": "04048",
            "name": "Xã Vân Hồ",
            "provinceCode": "14"
        },
        {
            "code": "04057",
            "name": "Xã Xuân Nha",
            "provinceCode": "14"
        },
        {
            "code": "04075",
            "name": "Xã Yên Châu",
            "provinceCode": "14"
        },
        {
            "code": "04078",
            "name": "Xã Chiềng Hặc",
            "provinceCode": "14"
        },
        {
            "code": "04087",
            "name": "Xã Yên Sơn",
            "provinceCode": "14"
        },
        {
            "code": "04096",
            "name": "Xã Lóng Phiêng",
            "provinceCode": "14"
        },
        {
            "code": "04099",
            "name": "Xã Phiêng Khoài",
            "provinceCode": "14"
        },
        {
            "code": "04105",
            "name": "Xã Mai Sơn",
            "provinceCode": "14"
        },
        {
            "code": "04108",
            "name": "Xã Chiềng Sung",
            "provinceCode": "14"
        },
        {
            "code": "04117",
            "name": "Xã Mường Chanh",
            "provinceCode": "14"
        },
        {
            "code": "04123",
            "name": "Xã Chiềng Mung",
            "provinceCode": "14"
        },
        {
            "code": "04132",
            "name": "Xã Chiềng Mai",
            "provinceCode": "14"
        },
        {
            "code": "04136",
            "name": "Xã Tà Hộc",
            "provinceCode": "14"
        },
        {
            "code": "04144",
            "name": "Xã Phiêng Cằm",
            "provinceCode": "14"
        },
        {
            "code": "04159",
            "name": "Xã Phiêng Pằn",
            "provinceCode": "14"
        },
        {
            "code": "04168",
            "name": "Xã Sông Mã",
            "provinceCode": "14"
        },
        {
            "code": "04171",
            "name": "Xã Bó Sinh",
            "provinceCode": "14"
        },
        {
            "code": "04183",
            "name": "Xã Mường Lầm",
            "provinceCode": "14"
        },
        {
            "code": "04186",
            "name": "Xã Nậm Ty",
            "provinceCode": "14"
        },
        {
            "code": "04195",
            "name": "Xã Chiềng Sơ",
            "provinceCode": "14"
        },
        {
            "code": "04204",
            "name": "Xã Chiềng Khoong",
            "provinceCode": "14"
        },
        {
            "code": "04210",
            "name": "Xã Huổi Một",
            "provinceCode": "14"
        },
        {
            "code": "04219",
            "name": "Xã Mường Hung",
            "provinceCode": "14"
        },
        {
            "code": "04222",
            "name": "Xã Chiềng Khương",
            "provinceCode": "14"
        },
        {
            "code": "04228",
            "name": "Xã Púng Bánh",
            "provinceCode": "14"
        },
        {
            "code": "04231",
            "name": "Xã Sốp Cộp",
            "provinceCode": "14"
        },
        {
            "code": "04240",
            "name": "Xã Mường Lèo",
            "provinceCode": "14"
        },
        {
            "code": "04246",
            "name": "Xã Mường Lạn",
            "provinceCode": "14"
        },
        {
            "code": "02647",
            "name": "Phường Lào Cai",
            "provinceCode": "15"
        },
        {
            "code": "02671",
            "name": "Phường Cam Đường",
            "provinceCode": "15"
        },
        {
            "code": "02680",
            "name": "Xã Hợp Thành",
            "provinceCode": "15"
        },
        {
            "code": "02683",
            "name": "Xã Bát Xát",
            "provinceCode": "15"
        },
        {
            "code": "02686",
            "name": "Xã A Mú Sung",
            "provinceCode": "15"
        },
        {
            "code": "02695",
            "name": "Xã Trịnh Tường",
            "provinceCode": "15"
        },
        {
            "code": "02701",
            "name": "Xã Y Tý",
            "provinceCode": "15"
        },
        {
            "code": "02707",
            "name": "Xã Dền Sáng",
            "provinceCode": "15"
        },
        {
            "code": "02725",
            "name": "Xã Bản Xèo",
            "provinceCode": "15"
        },
        {
            "code": "02728",
            "name": "Xã Mường Hum",
            "provinceCode": "15"
        },
        {
            "code": "02746",
            "name": "Xã Cốc San",
            "provinceCode": "15"
        },
        {
            "code": "02752",
            "name": "Xã Pha Long",
            "provinceCode": "15"
        },
        {
            "code": "02761",
            "name": "Xã Mường Khương",
            "provinceCode": "15"
        },
        {
            "code": "02782",
            "name": "Xã Cao Sơn",
            "provinceCode": "15"
        },
        {
            "code": "02788",
            "name": "Xã Bản Lầu",
            "provinceCode": "15"
        },
        {
            "code": "02809",
            "name": "Xã Si Ma Cai",
            "provinceCode": "15"
        },
        {
            "code": "02824",
            "name": "Xã Sín Chéng",
            "provinceCode": "15"
        },
        {
            "code": "02839",
            "name": "Xã Bắc Hà",
            "provinceCode": "15"
        },
        {
            "code": "02842",
            "name": "Xã Tả Củ Tỷ",
            "provinceCode": "15"
        },
        {
            "code": "02848",
            "name": "Xã Lùng Phình",
            "provinceCode": "15"
        },
        {
            "code": "02869",
            "name": "Xã Bản Liền",
            "provinceCode": "15"
        },
        {
            "code": "02890",
            "name": "Xã Bảo Nhai",
            "provinceCode": "15"
        },
        {
            "code": "02896",
            "name": "Xã Cốc Lầu",
            "provinceCode": "15"
        },
        {
            "code": "02902",
            "name": "Xã Phong Hải",
            "provinceCode": "15"
        },
        {
            "code": "02905",
            "name": "Xã Bảo Thắng",
            "provinceCode": "15"
        },
        {
            "code": "02908",
            "name": "Xã Tằng Loỏng",
            "provinceCode": "15"
        },
        {
            "code": "02923",
            "name": "Xã Gia Phú",
            "provinceCode": "15"
        },
        {
            "code": "02926",
            "name": "Xã Xuân Quang",
            "provinceCode": "15"
        },
        {
            "code": "02947",
            "name": "Xã Bảo Yên",
            "provinceCode": "15"
        },
        {
            "code": "02953",
            "name": "Xã Nghĩa Đô",
            "provinceCode": "15"
        },
        {
            "code": "02962",
            "name": "Xã Xuân Hòa",
            "provinceCode": "15"
        },
        {
            "code": "02968",
            "name": "Xã Thượng Hà",
            "provinceCode": "15"
        },
        {
            "code": "02989",
            "name": "Xã Bảo Hà",
            "provinceCode": "15"
        },
        {
            "code": "02998",
            "name": "Xã Phúc Khánh",
            "provinceCode": "15"
        },
        {
            "code": "03004",
            "name": "Xã Ngũ Chỉ Sơn",
            "provinceCode": "15"
        },
        {
            "code": "03006",
            "name": "Phường Sa Pa",
            "provinceCode": "15"
        },
        {
            "code": "03013",
            "name": "Xã Tả Phìn",
            "provinceCode": "15"
        },
        {
            "code": "03037",
            "name": "Xã Tả Van",
            "provinceCode": "15"
        },
        {
            "code": "03043",
            "name": "Xã Mường Bo",
            "provinceCode": "15"
        },
        {
            "code": "03046",
            "name": "Xã Bản Hồ",
            "provinceCode": "15"
        },
        {
            "code": "03061",
            "name": "Xã Võ Lao",
            "provinceCode": "15"
        },
        {
            "code": "03076",
            "name": "Xã Nậm Chày",
            "provinceCode": "15"
        },
        {
            "code": "03082",
            "name": "Xã Văn Bàn",
            "provinceCode": "15"
        },
        {
            "code": "03085",
            "name": "Xã Nậm Xé",
            "provinceCode": "15"
        },
        {
            "code": "03091",
            "name": "Xã Chiềng Ken",
            "provinceCode": "15"
        },
        {
            "code": "03103",
            "name": "Xã Khánh Yên",
            "provinceCode": "15"
        },
        {
            "code": "03106",
            "name": "Xã Dương Quỳ",
            "provinceCode": "15"
        },
        {
            "code": "03121",
            "name": "Xã Minh Lương",
            "provinceCode": "15"
        },
        {
            "code": "04252",
            "name": "Phường Yên Bái",
            "provinceCode": "15"
        },
        {
            "code": "04273",
            "name": "Phường Nam Cường",
            "provinceCode": "15"
        },
        {
            "code": "04279",
            "name": "Phường Văn Phú",
            "provinceCode": "15"
        },
        {
            "code": "04288",
            "name": "Phường Nghĩa Lộ",
            "provinceCode": "15"
        },
        {
            "code": "04303",
            "name": "Xã Lục Yên",
            "provinceCode": "15"
        },
        {
            "code": "04309",
            "name": "Xã Lâm Thượng",
            "provinceCode": "15"
        },
        {
            "code": "04336",
            "name": "Xã Tân Lĩnh",
            "provinceCode": "15"
        },
        {
            "code": "04342",
            "name": "Xã Khánh Hòa",
            "provinceCode": "15"
        },
        {
            "code": "04345",
            "name": "Xã Mường Lai",
            "provinceCode": "15"
        },
        {
            "code": "04363",
            "name": "Xã Phúc Lợi",
            "provinceCode": "15"
        },
        {
            "code": "04375",
            "name": "Xã Mậu A",
            "provinceCode": "15"
        },
        {
            "code": "04381",
            "name": "Xã Lâm Giang",
            "provinceCode": "15"
        },
        {
            "code": "04387",
            "name": "Xã Châu Quế",
            "provinceCode": "15"
        },
        {
            "code": "04399",
            "name": "Xã Đông Cuông",
            "provinceCode": "15"
        },
        {
            "code": "04402",
            "name": "Xã Phong Dụ Hạ",
            "provinceCode": "15"
        },
        {
            "code": "04423",
            "name": "Xã Phong Dụ Thượng",
            "provinceCode": "15"
        },
        {
            "code": "04429",
            "name": "Xã Tân Hợp",
            "provinceCode": "15"
        },
        {
            "code": "04441",
            "name": "Xã Xuân Ái",
            "provinceCode": "15"
        },
        {
            "code": "04450",
            "name": "Xã Mỏ Vàng",
            "provinceCode": "15"
        },
        {
            "code": "04456",
            "name": "Xã Mù Cang Chải",
            "provinceCode": "15"
        },
        {
            "code": "04462",
            "name": "Xã Nậm Có",
            "provinceCode": "15"
        },
        {
            "code": "04465",
            "name": "Xã Khao Mang",
            "provinceCode": "15"
        },
        {
            "code": "04474",
            "name": "Xã Lao Chải",
            "provinceCode": "15"
        },
        {
            "code": "04489",
            "name": "Xã Chế Tạo",
            "provinceCode": "15"
        },
        {
            "code": "04492",
            "name": "Xã Púng Luông",
            "provinceCode": "15"
        },
        {
            "code": "04498",
            "name": "Xã Trấn Yên",
            "provinceCode": "15"
        },
        {
            "code": "04531",
            "name": "Xã Quy Mông",
            "provinceCode": "15"
        },
        {
            "code": "04537",
            "name": "Xã Lương Thịnh",
            "provinceCode": "15"
        },
        {
            "code": "04543",
            "name": "Phường Âu Lâu",
            "provinceCode": "15"
        },
        {
            "code": "04564",
            "name": "Xã Việt Hồng",
            "provinceCode": "15"
        },
        {
            "code": "04576",
            "name": "Xã Hưng Khánh",
            "provinceCode": "15"
        },
        {
            "code": "04585",
            "name": "Xã Hạnh Phúc",
            "provinceCode": "15"
        },
        {
            "code": "04603",
            "name": "Xã Tà Xi Láng",
            "provinceCode": "15"
        },
        {
            "code": "04606",
            "name": "Xã Trạm Tấu",
            "provinceCode": "15"
        },
        {
            "code": "04609",
            "name": "Xã Phình Hồ",
            "provinceCode": "15"
        },
        {
            "code": "04630",
            "name": "Xã Tú Lệ",
            "provinceCode": "15"
        },
        {
            "code": "04636",
            "name": "Xã Gia Hội",
            "provinceCode": "15"
        },
        {
            "code": "04651",
            "name": "Xã Sơn Lương",
            "provinceCode": "15"
        },
        {
            "code": "04660",
            "name": "Xã Liên Sơn",
            "provinceCode": "15"
        },
        {
            "code": "04663",
            "name": "Phường Trung Tâm",
            "provinceCode": "15"
        },
        {
            "code": "04672",
            "name": "Xã Văn Chấn",
            "provinceCode": "15"
        },
        {
            "code": "04681",
            "name": "Phường Cầu Thia",
            "provinceCode": "15"
        },
        {
            "code": "04693",
            "name": "Xã Cát Thịnh",
            "provinceCode": "15"
        },
        {
            "code": "04699",
            "name": "Xã Chấn Thịnh",
            "provinceCode": "15"
        },
        {
            "code": "04705",
            "name": "Xã Thượng Bằng La",
            "provinceCode": "15"
        },
        {
            "code": "04711",
            "name": "Xã Nghĩa Tâm",
            "provinceCode": "15"
        },
        {
            "code": "04714",
            "name": "Xã Yên Bình",
            "provinceCode": "15"
        },
        {
            "code": "04717",
            "name": "Xã Thác Bà",
            "provinceCode": "15"
        },
        {
            "code": "04726",
            "name": "Xã Cảm Nhân",
            "provinceCode": "15"
        },
        {
            "code": "04744",
            "name": "Xã Yên Thành",
            "provinceCode": "15"
        },
        {
            "code": "04750",
            "name": "Xã Bảo Ái",
            "provinceCode": "15"
        },
        {
            "code": "01840",
            "name": "Phường Đức Xuân",
            "provinceCode": "19"
        },
        {
            "code": "01843",
            "name": "Phường Bắc Kạn",
            "provinceCode": "19"
        },
        {
            "code": "01849",
            "name": "Xã Phong Quang",
            "provinceCode": "19"
        },
        {
            "code": "01864",
            "name": "Xã Bằng Thành",
            "provinceCode": "19"
        },
        {
            "code": "01879",
            "name": "Xã Cao Minh",
            "provinceCode": "19"
        },
        {
            "code": "01882",
            "name": "Xã Nghiên Loan",
            "provinceCode": "19"
        },
        {
            "code": "01894",
            "name": "Xã Phúc Lộc",
            "provinceCode": "19"
        },
        {
            "code": "01906",
            "name": "Xã Ba Bể",
            "provinceCode": "19"
        },
        {
            "code": "01912",
            "name": "Xã Chợ Rã",
            "provinceCode": "19"
        },
        {
            "code": "01921",
            "name": "Xã Thượng Minh",
            "provinceCode": "19"
        },
        {
            "code": "01933",
            "name": "Xã Đồng Phúc",
            "provinceCode": "19"
        },
        {
            "code": "01936",
            "name": "Xã Nà Phặc",
            "provinceCode": "19"
        },
        {
            "code": "01942",
            "name": "Xã Bằng Vân",
            "provinceCode": "19"
        },
        {
            "code": "01954",
            "name": "Xã Ngân Sơn",
            "provinceCode": "19"
        },
        {
            "code": "01957",
            "name": "Xã Thượng Quan",
            "provinceCode": "19"
        },
        {
            "code": "01960",
            "name": "Xã Hiệp Lực",
            "provinceCode": "19"
        },
        {
            "code": "01969",
            "name": "Xã Phủ Thông",
            "provinceCode": "19"
        },
        {
            "code": "01981",
            "name": "Xã Vĩnh Thông",
            "provinceCode": "19"
        },
        {
            "code": "02008",
            "name": "Xã Cẩm Giàng",
            "provinceCode": "19"
        },
        {
            "code": "02014",
            "name": "Xã Bạch Thông",
            "provinceCode": "19"
        },
        {
            "code": "02020",
            "name": "Xã Chợ Đồn",
            "provinceCode": "19"
        },
        {
            "code": "02026",
            "name": "Xã Nam Cường",
            "provinceCode": "19"
        },
        {
            "code": "02038",
            "name": "Xã Quảng Bạch",
            "provinceCode": "19"
        },
        {
            "code": "02044",
            "name": "Xã Yên Thịnh",
            "provinceCode": "19"
        },
        {
            "code": "02071",
            "name": "Xã Nghĩa Tá",
            "provinceCode": "19"
        },
        {
            "code": "02083",
            "name": "Xã Yên Phong",
            "provinceCode": "19"
        },
        {
            "code": "02086",
            "name": "Xã Chợ Mới",
            "provinceCode": "19"
        },
        {
            "code": "02101",
            "name": "Xã Thanh Mai",
            "provinceCode": "19"
        },
        {
            "code": "02104",
            "name": "Xã Tân Kỳ",
            "provinceCode": "19"
        },
        {
            "code": "02107",
            "name": "Xã Thanh Thịnh",
            "provinceCode": "19"
        },
        {
            "code": "02116",
            "name": "Xã Yên Bình",
            "provinceCode": "19"
        },
        {
            "code": "02143",
            "name": "Xã Văn Lang",
            "provinceCode": "19"
        },
        {
            "code": "02152",
            "name": "Xã Cường Lợi",
            "provinceCode": "19"
        },
        {
            "code": "02155",
            "name": "Xã Na Rì",
            "provinceCode": "19"
        },
        {
            "code": "02176",
            "name": "Xã Trần Phú",
            "provinceCode": "19"
        },
        {
            "code": "02185",
            "name": "Xã Côn Minh",
            "provinceCode": "19"
        },
        {
            "code": "02191",
            "name": "Xã Xuân Dương",
            "provinceCode": "19"
        },
        {
            "code": "05443",
            "name": "Phường Phan Đình Phùng",
            "provinceCode": "19"
        },
        {
            "code": "05455",
            "name": "Phường Quyết Thắng",
            "provinceCode": "19"
        },
        {
            "code": "05467",
            "name": "Phường Gia Sàng",
            "provinceCode": "19"
        },
        {
            "code": "05482",
            "name": "Phường Quan Triều",
            "provinceCode": "19"
        },
        {
            "code": "05488",
            "name": "Xã Đại Phúc",
            "provinceCode": "19"
        },
        {
            "code": "05500",
            "name": "Phường Tích Lương",
            "provinceCode": "19"
        },
        {
            "code": "05503",
            "name": "Xã Tân Cương",
            "provinceCode": "19"
        },
        {
            "code": "05518",
            "name": "Phường Sông Công",
            "provinceCode": "19"
        },
        {
            "code": "05528",
            "name": "Phường Bách Quang",
            "provinceCode": "19"
        },
        {
            "code": "05533",
            "name": "Phường Bá Xuyên",
            "provinceCode": "19"
        },
        {
            "code": "05542",
            "name": "Xã Lam Vỹ",
            "provinceCode": "19"
        },
        {
            "code": "05551",
            "name": "Xã Kim Phượng",
            "provinceCode": "19"
        },
        {
            "code": "05563",
            "name": "Xã Phượng Tiến",
            "provinceCode": "19"
        },
        {
            "code": "05569",
            "name": "Xã Định Hóa",
            "provinceCode": "19"
        },
        {
            "code": "05581",
            "name": "Xã Trung Hội",
            "provinceCode": "19"
        },
        {
            "code": "05587",
            "name": "Xã Bình Yên",
            "provinceCode": "19"
        },
        {
            "code": "05602",
            "name": "Xã Phú Đình",
            "provinceCode": "19"
        },
        {
            "code": "05605",
            "name": "Xã Bình Thành",
            "provinceCode": "19"
        },
        {
            "code": "05611",
            "name": "Xã Phú Lương",
            "provinceCode": "19"
        },
        {
            "code": "05620",
            "name": "Xã Yên Trạch",
            "provinceCode": "19"
        },
        {
            "code": "05632",
            "name": "Xã Hợp Thành",
            "provinceCode": "19"
        },
        {
            "code": "05641",
            "name": "Xã Vô Tranh",
            "provinceCode": "19"
        },
        {
            "code": "05662",
            "name": "Xã Trại Cau",
            "provinceCode": "19"
        },
        {
            "code": "05665",
            "name": "Xã Văn Lăng",
            "provinceCode": "19"
        },
        {
            "code": "05674",
            "name": "Xã Quang Sơn",
            "provinceCode": "19"
        },
        {
            "code": "05680",
            "name": "Xã Văn Hán",
            "provinceCode": "19"
        },
        {
            "code": "05692",
            "name": "Xã Đồng Hỷ",
            "provinceCode": "19"
        },
        {
            "code": "05707",
            "name": "Xã Nam Hòa",
            "provinceCode": "19"
        },
        {
            "code": "05710",
            "name": "Phường Linh Sơn",
            "provinceCode": "19"
        },
        {
            "code": "05716",
            "name": "Xã Võ Nhai",
            "provinceCode": "19"
        },
        {
            "code": "05719",
            "name": "Xã Sảng Mộc",
            "provinceCode": "19"
        },
        {
            "code": "05722",
            "name": "Xã Nghinh Tường",
            "provinceCode": "19"
        },
        {
            "code": "05725",
            "name": "Xã Thần Sa",
            "provinceCode": "19"
        },
        {
            "code": "05740",
            "name": "Xã La Hiên",
            "provinceCode": "19"
        },
        {
            "code": "05746",
            "name": "Xã Tràng Xá",
            "provinceCode": "19"
        },
        {
            "code": "05755",
            "name": "Xã Dân Tiến",
            "provinceCode": "19"
        },
        {
            "code": "05773",
            "name": "Xã Phú Xuyên",
            "provinceCode": "19"
        },
        {
            "code": "05776",
            "name": "Xã Đức Lương",
            "provinceCode": "19"
        },
        {
            "code": "05788",
            "name": "Xã Phú Lạc",
            "provinceCode": "19"
        },
        {
            "code": "05800",
            "name": "Xã Phú Thịnh",
            "provinceCode": "19"
        },
        {
            "code": "05809",
            "name": "Xã An Khánh",
            "provinceCode": "19"
        },
        {
            "code": "05818",
            "name": "Xã La Bằng",
            "provinceCode": "19"
        },
        {
            "code": "05830",
            "name": "Xã Đại Từ",
            "provinceCode": "19"
        },
        {
            "code": "05845",
            "name": "Xã Vạn Phú",
            "provinceCode": "19"
        },
        {
            "code": "05851",
            "name": "Xã Quân Chu",
            "provinceCode": "19"
        },
        {
            "code": "05857",
            "name": "Phường Phúc Thuận",
            "provinceCode": "19"
        },
        {
            "code": "05860",
            "name": "Phường Phổ Yên",
            "provinceCode": "19"
        },
        {
            "code": "05881",
            "name": "Xã Thành Công",
            "provinceCode": "19"
        },
        {
            "code": "05890",
            "name": "Phường Vạn Xuân",
            "provinceCode": "19"
        },
        {
            "code": "05899",
            "name": "Phường Trung Thành",
            "provinceCode": "19"
        },
        {
            "code": "05908",
            "name": "Xã Phú Bình",
            "provinceCode": "19"
        },
        {
            "code": "05917",
            "name": "Xã Tân Khánh",
            "provinceCode": "19"
        },
        {
            "code": "05923",
            "name": "Xã Tân Thành",
            "provinceCode": "19"
        },
        {
            "code": "05941",
            "name": "Xã Điềm Thụy",
            "provinceCode": "19"
        },
        {
            "code": "05953",
            "name": "Xã Kha Sơn",
            "provinceCode": "19"
        },
        {
            "code": "05977",
            "name": "Phường Đông Kinh",
            "provinceCode": "20"
        },
        {
            "code": "05983",
            "name": "Phường Lương Văn Tri",
            "provinceCode": "20"
        },
        {
            "code": "05986",
            "name": "Phường Tam Thanh",
            "provinceCode": "20"
        },
        {
            "code": "06001",
            "name": "Xã Đoàn Kết",
            "provinceCode": "20"
        },
        {
            "code": "06004",
            "name": "Xã Quốc Khánh",
            "provinceCode": "20"
        },
        {
            "code": "06019",
            "name": "Xã Tân Tiến",
            "provinceCode": "20"
        },
        {
            "code": "06037",
            "name": "Xã Kháng Chiến",
            "provinceCode": "20"
        },
        {
            "code": "06040",
            "name": "Xã Thất Khê",
            "provinceCode": "20"
        },
        {
            "code": "06046",
            "name": "Xã Tràng Định",
            "provinceCode": "20"
        },
        {
            "code": "06058",
            "name": "Xã Quốc Việt",
            "provinceCode": "20"
        },
        {
            "code": "06073",
            "name": "Xã Hoa Thám",
            "provinceCode": "20"
        },
        {
            "code": "06076",
            "name": "Xã Quý Hòa",
            "provinceCode": "20"
        },
        {
            "code": "06079",
            "name": "Xã Hồng Phong",
            "provinceCode": "20"
        },
        {
            "code": "06085",
            "name": "Xã Thiện Hòa",
            "provinceCode": "20"
        },
        {
            "code": "06091",
            "name": "Xã Thiện Thuật",
            "provinceCode": "20"
        },
        {
            "code": "06103",
            "name": "Xã Thiện Long",
            "provinceCode": "20"
        },
        {
            "code": "06112",
            "name": "Xã Bình Gia",
            "provinceCode": "20"
        },
        {
            "code": "06115",
            "name": "Xã Tân Văn",
            "provinceCode": "20"
        },
        {
            "code": "06124",
            "name": "Xã Na Sầm",
            "provinceCode": "20"
        },
        {
            "code": "06148",
            "name": "Xã Thụy Hùng",
            "provinceCode": "20"
        },
        {
            "code": "06151",
            "name": "Xã Hội Hoan",
            "provinceCode": "20"
        },
        {
            "code": "06154",
            "name": "Xã Văn Lãng",
            "provinceCode": "20"
        },
        {
            "code": "06172",
            "name": "Xã Hoàng Văn Thụ",
            "provinceCode": "20"
        },
        {
            "code": "06184",
            "name": "Xã Đồng Đăng",
            "provinceCode": "20"
        },
        {
            "code": "06187",
            "name": "Phường Kỳ Lừa",
            "provinceCode": "20"
        },
        {
            "code": "06196",
            "name": "Xã Ba Sơn",
            "provinceCode": "20"
        },
        {
            "code": "06211",
            "name": "Xã Cao Lộc",
            "provinceCode": "20"
        },
        {
            "code": "06220",
            "name": "Xã Công Sơn",
            "provinceCode": "20"
        },
        {
            "code": "06253",
            "name": "Xã Văn Quan",
            "provinceCode": "20"
        },
        {
            "code": "06280",
            "name": "Xã Điềm He",
            "provinceCode": "20"
        },
        {
            "code": "06286",
            "name": "Xã Khánh Khê",
            "provinceCode": "20"
        },
        {
            "code": "06298",
            "name": "Xã Yên Phúc",
            "provinceCode": "20"
        },
        {
            "code": "06313",
            "name": "Xã Tri Lễ",
            "provinceCode": "20"
        },
        {
            "code": "06316",
            "name": "Xã Tân Đoàn",
            "provinceCode": "20"
        },
        {
            "code": "06325",
            "name": "xã Bắc Sơn",
            "provinceCode": "20"
        },
        {
            "code": "06337",
            "name": "Xã Tân Tri",
            "provinceCode": "20"
        },
        {
            "code": "06349",
            "name": "Xã Hưng Vũ",
            "provinceCode": "20"
        },
        {
            "code": "06364",
            "name": "Xã Vũ Lễ",
            "provinceCode": "20"
        },
        {
            "code": "06367",
            "name": "Xã Vũ Lăng",
            "provinceCode": "20"
        },
        {
            "code": "06376",
            "name": "Xã Nhất Hòa",
            "provinceCode": "20"
        },
        {
            "code": "06385",
            "name": "Xã Hữu Lũng",
            "provinceCode": "20"
        },
        {
            "code": "06391",
            "name": "Xã Yên Bình",
            "provinceCode": "20"
        },
        {
            "code": "06400",
            "name": "Xã Hữu Liên",
            "provinceCode": "20"
        },
        {
            "code": "06415",
            "name": "Xã Vân Nham",
            "provinceCode": "20"
        },
        {
            "code": "06427",
            "name": "Xã Cai Kinh",
            "provinceCode": "20"
        },
        {
            "code": "06436",
            "name": "Xã Thiện Tân",
            "provinceCode": "20"
        },
        {
            "code": "06445",
            "name": "Xã Tân Thành",
            "provinceCode": "20"
        },
        {
            "code": "06457",
            "name": "Xã Tuấn Sơn",
            "provinceCode": "20"
        },
        {
            "code": "06463",
            "name": "Xã Chi Lăng",
            "provinceCode": "20"
        },
        {
            "code": "06475",
            "name": "Xã Bằng Mạc",
            "provinceCode": "20"
        },
        {
            "code": "06481",
            "name": "Xã Chiến Thắng",
            "provinceCode": "20"
        },
        {
            "code": "06496",
            "name": "Xã Nhân Lý",
            "provinceCode": "20"
        },
        {
            "code": "06505",
            "name": "Xã Vạn Linh",
            "provinceCode": "20"
        },
        {
            "code": "06517",
            "name": "Xã Quan Sơn",
            "provinceCode": "20"
        },
        {
            "code": "06526",
            "name": "Xã Na Dương",
            "provinceCode": "20"
        },
        {
            "code": "06529",
            "name": "Xã Lộc Bình",
            "provinceCode": "20"
        },
        {
            "code": "06541",
            "name": "Xã Mẫu Sơn",
            "provinceCode": "20"
        },
        {
            "code": "06565",
            "name": "Xã Khuất Xá",
            "provinceCode": "20"
        },
        {
            "code": "06577",
            "name": "Xã Thống Nhất",
            "provinceCode": "20"
        },
        {
            "code": "06601",
            "name": "Xã Lợi Bác",
            "provinceCode": "20"
        },
        {
            "code": "06607",
            "name": "Xã Xuân Dương",
            "provinceCode": "20"
        },
        {
            "code": "06613",
            "name": "Xã Đình Lập",
            "provinceCode": "20"
        },
        {
            "code": "06616",
            "name": "Xã Thái Bình",
            "provinceCode": "20"
        },
        {
            "code": "06625",
            "name": "Xã Kiên Mộc",
            "provinceCode": "20"
        },
        {
            "code": "06637",
            "name": "Xã Châu Sơn",
            "provinceCode": "20"
        },
        {
            "code": "06652",
            "name": "Phường Hà Tu",
            "provinceCode": "22"
        },
        {
            "code": "06658",
            "name": "Phường Cao Xanh",
            "provinceCode": "22"
        },
        {
            "code": "06661",
            "name": "Phường Việt Hưng",
            "provinceCode": "22"
        },
        {
            "code": "06673",
            "name": "Phường Bãi Cháy",
            "provinceCode": "22"
        },
        {
            "code": "06676",
            "name": "Phường Hà Lầm",
            "provinceCode": "22"
        },
        {
            "code": "06685",
            "name": "Phường Hồng Gai",
            "provinceCode": "22"
        },
        {
            "code": "06688",
            "name": "Phường Hạ Long",
            "provinceCode": "22"
        },
        {
            "code": "06706",
            "name": "Phường Tuần Châu",
            "provinceCode": "22"
        },
        {
            "code": "06709",
            "name": "Phường Móng Cái 2",
            "provinceCode": "22"
        },
        {
            "code": "06712",
            "name": "Phường Móng Cái 1",
            "provinceCode": "22"
        },
        {
            "code": "06724",
            "name": "Xã Hải Sơn",
            "provinceCode": "22"
        },
        {
            "code": "06733",
            "name": "Xã Hải Ninh",
            "provinceCode": "22"
        },
        {
            "code": "06736",
            "name": "Phường Móng Cái 3",
            "provinceCode": "22"
        },
        {
            "code": "06757",
            "name": "Xã Vĩnh Thực",
            "provinceCode": "22"
        },
        {
            "code": "06760",
            "name": "Phường Mông Dương",
            "provinceCode": "22"
        },
        {
            "code": "06778",
            "name": "Phường Quang Hanh",
            "provinceCode": "22"
        },
        {
            "code": "06781",
            "name": "Phường Cửa Ông",
            "provinceCode": "22"
        },
        {
            "code": "06793",
            "name": "Phường Cẩm Phả",
            "provinceCode": "22"
        },
        {
            "code": "06799",
            "name": "Xã Hải Hòa",
            "provinceCode": "22"
        },
        {
            "code": "06811",
            "name": "Phường Uông Bí",
            "provinceCode": "22"
        },
        {
            "code": "06820",
            "name": "Phường Vàng Danh",
            "provinceCode": "22"
        },
        {
            "code": "06832",
            "name": "Phường Yên Tử",
            "provinceCode": "22"
        },
        {
            "code": "06838",
            "name": "Xã Bình Liêu",
            "provinceCode": "22"
        },
        {
            "code": "06841",
            "name": "Xã Hoành Mô",
            "provinceCode": "22"
        },
        {
            "code": "06856",
            "name": "Xã Lục Hồn",
            "provinceCode": "22"
        },
        {
            "code": "06862",
            "name": "Xã Tiên Yên",
            "provinceCode": "22"
        },
        {
            "code": "06874",
            "name": "Xã Điền Xá",
            "provinceCode": "22"
        },
        {
            "code": "06877",
            "name": "Xã Đông Ngũ",
            "provinceCode": "22"
        },
        {
            "code": "06886",
            "name": "Xã Hải Lạng",
            "provinceCode": "22"
        },
        {
            "code": "06895",
            "name": "Xã Đầm Hà",
            "provinceCode": "22"
        },
        {
            "code": "06913",
            "name": "Xã Quảng Tân",
            "provinceCode": "22"
        },
        {
            "code": "06922",
            "name": "Xã Quảng Hà",
            "provinceCode": "22"
        },
        {
            "code": "06931",
            "name": "Xã Quảng Đức",
            "provinceCode": "22"
        },
        {
            "code": "06946",
            "name": "Xã Đường Hoa",
            "provinceCode": "22"
        },
        {
            "code": "06967",
            "name": "Xã Cái Chiên",
            "provinceCode": "22"
        },
        {
            "code": "06970",
            "name": "Xã Ba Chẽ",
            "provinceCode": "22"
        },
        {
            "code": "06979",
            "name": "Xã Kỳ Thượng",
            "provinceCode": "22"
        },
        {
            "code": "06985",
            "name": "Xã Lương Minh",
            "provinceCode": "22"
        },
        {
            "code": "06994",
            "name": "Đặc khu Vân Đồn",
            "provinceCode": "22"
        },
        {
            "code": "07030",
            "name": "Phường Hoành Bồ",
            "provinceCode": "22"
        },
        {
            "code": "07054",
            "name": "Xã Quảng La",
            "provinceCode": "22"
        },
        {
            "code": "07060",
            "name": "Xã Thống Nhất",
            "provinceCode": "22"
        },
        {
            "code": "07069",
            "name": "Phường Mạo Khê",
            "provinceCode": "22"
        },
        {
            "code": "07081",
            "name": "Phường Bình Khê",
            "provinceCode": "22"
        },
        {
            "code": "07090",
            "name": "Phường An Sinh",
            "provinceCode": "22"
        },
        {
            "code": "07093",
            "name": "Phường Đông Triều",
            "provinceCode": "22"
        },
        {
            "code": "07114",
            "name": "Phường Hoàng Quế",
            "provinceCode": "22"
        },
        {
            "code": "07132",
            "name": "Phường Quảng Yên",
            "provinceCode": "22"
        },
        {
            "code": "07135",
            "name": "Phường Đông Mai",
            "provinceCode": "22"
        },
        {
            "code": "07147",
            "name": "Phường Hiệp Hòa",
            "provinceCode": "22"
        },
        {
            "code": "07168",
            "name": "Phường Hà An",
            "provinceCode": "22"
        },
        {
            "code": "07180",
            "name": "Phường Liên Hòa",
            "provinceCode": "22"
        },
        {
            "code": "07183",
            "name": "Phường Phong Cốc",
            "provinceCode": "22"
        },
        {
            "code": "07192",
            "name": "Đặc khu Cô Tô",
            "provinceCode": "22"
        },
        {
            "code": "07210",
            "name": "Phường Bắc Giang",
            "provinceCode": "24"
        },
        {
            "code": "07228",
            "name": "Phường Đa Mai",
            "provinceCode": "24"
        },
        {
            "code": "07246",
            "name": "Xã Xuân Lương",
            "provinceCode": "24"
        },
        {
            "code": "07264",
            "name": "Xã Tam Tiến",
            "provinceCode": "24"
        },
        {
            "code": "07282",
            "name": "Xã Đồng Kỳ",
            "provinceCode": "24"
        },
        {
            "code": "07288",
            "name": "Xã Yên Thế",
            "provinceCode": "24"
        },
        {
            "code": "07294",
            "name": "Xã Bố Hạ",
            "provinceCode": "24"
        },
        {
            "code": "07306",
            "name": "Xã Nhã Nam",
            "provinceCode": "24"
        },
        {
            "code": "07330",
            "name": "Xã Phúc Hòa",
            "provinceCode": "24"
        },
        {
            "code": "07333",
            "name": "Xã Quang Trung",
            "provinceCode": "24"
        },
        {
            "code": "07339",
            "name": "Xã Tân Yên",
            "provinceCode": "24"
        },
        {
            "code": "07351",
            "name": "Xã Ngọc Thiện",
            "provinceCode": "24"
        },
        {
            "code": "07375",
            "name": "Xã Lạng Giang",
            "provinceCode": "24"
        },
        {
            "code": "07381",
            "name": "Xã Tiên Lục",
            "provinceCode": "24"
        },
        {
            "code": "07399",
            "name": "Xã Kép",
            "provinceCode": "24"
        },
        {
            "code": "07420",
            "name": "Xã Mỹ Thái",
            "provinceCode": "24"
        },
        {
            "code": "07432",
            "name": "Xã Tân Dĩnh",
            "provinceCode": "24"
        },
        {
            "code": "07444",
            "name": "Xã Lục Nam",
            "provinceCode": "24"
        },
        {
            "code": "07450",
            "name": "Xã Đông Phú",
            "provinceCode": "24"
        },
        {
            "code": "07462",
            "name": "Xã Bảo Đài",
            "provinceCode": "24"
        },
        {
            "code": "07486",
            "name": "Xã Nghĩa Phương",
            "provinceCode": "24"
        },
        {
            "code": "07489",
            "name": "Xã Trường Sơn",
            "provinceCode": "24"
        },
        {
            "code": "07492",
            "name": "Xã Lục Sơn",
            "provinceCode": "24"
        },
        {
            "code": "07498",
            "name": "Xã Bắc Lũng",
            "provinceCode": "24"
        },
        {
            "code": "07519",
            "name": "Xã Cẩm Lý",
            "provinceCode": "24"
        },
        {
            "code": "07525",
            "name": "Phường Chũ",
            "provinceCode": "24"
        },
        {
            "code": "07531",
            "name": "Xã Tân Sơn",
            "provinceCode": "24"
        },
        {
            "code": "07534",
            "name": "Xã Sa Lý",
            "provinceCode": "24"
        },
        {
            "code": "07537",
            "name": "Xã Biên Sơn",
            "provinceCode": "24"
        },
        {
            "code": "07543",
            "name": "Xã Sơn Hải",
            "provinceCode": "24"
        },
        {
            "code": "07552",
            "name": "Xã Kiên Lao",
            "provinceCode": "24"
        },
        {
            "code": "07573",
            "name": "Xã Biển Động",
            "provinceCode": "24"
        },
        {
            "code": "07582",
            "name": "Xã Lục Ngạn",
            "provinceCode": "24"
        },
        {
            "code": "07594",
            "name": "Xã Đèo Gia",
            "provinceCode": "24"
        },
        {
            "code": "07603",
            "name": "Xã Nam Dương",
            "provinceCode": "24"
        },
        {
            "code": "07612",
            "name": "Phường Phượng Sơn",
            "provinceCode": "24"
        },
        {
            "code": "07615",
            "name": "Xã Sơn Động",
            "provinceCode": "24"
        },
        {
            "code": "07616",
            "name": "Xã Tây Yên Tử",
            "provinceCode": "24"
        },
        {
            "code": "07621",
            "name": "Xã Vân Sơn",
            "provinceCode": "24"
        },
        {
            "code": "07627",
            "name": "Xã Đại Sơn",
            "provinceCode": "24"
        },
        {
            "code": "07642",
            "name": "Xã Yên Định",
            "provinceCode": "24"
        },
        {
            "code": "07654",
            "name": "Xã An Lạc",
            "provinceCode": "24"
        },
        {
            "code": "07663",
            "name": "Xã Tuấn Đạo",
            "provinceCode": "24"
        },
        {
            "code": "07672",
            "name": "Xã Dương Hưu",
            "provinceCode": "24"
        },
        {
            "code": "07681",
            "name": "Phường Yên Dũng",
            "provinceCode": "24"
        },
        {
            "code": "07682",
            "name": "Phường Tân An",
            "provinceCode": "24"
        },
        {
            "code": "07696",
            "name": "Phường Tiền Phong",
            "provinceCode": "24"
        },
        {
            "code": "07699",
            "name": "Phường Tân Tiến",
            "provinceCode": "24"
        },
        {
            "code": "07735",
            "name": "Xã Đồng Việt",
            "provinceCode": "24"
        },
        {
            "code": "07738",
            "name": "Phường Cảnh Thụy",
            "provinceCode": "24"
        },
        {
            "code": "07774",
            "name": "Phường Tự Lạn",
            "provinceCode": "24"
        },
        {
            "code": "07777",
            "name": "Phường Việt Yên",
            "provinceCode": "24"
        },
        {
            "code": "07795",
            "name": "Phường Nếnh",
            "provinceCode": "24"
        },
        {
            "code": "07798",
            "name": "Phường Vân Hà",
            "provinceCode": "24"
        },
        {
            "code": "07822",
            "name": "Xã Hoàng Vân",
            "provinceCode": "24"
        },
        {
            "code": "07840",
            "name": "Xã Hiệp Hoà",
            "provinceCode": "24"
        },
        {
            "code": "07864",
            "name": "Xã Hợp Thịnh",
            "provinceCode": "24"
        },
        {
            "code": "07870",
            "name": "Xã Xuân Cẩm",
            "provinceCode": "24"
        },
        {
            "code": "09169",
            "name": "Phường Vũ Ninh",
            "provinceCode": "24"
        },
        {
            "code": "09187",
            "name": "Phường Kinh Bắc",
            "provinceCode": "24"
        },
        {
            "code": "09190",
            "name": "Phường Võ Cường",
            "provinceCode": "24"
        },
        {
            "code": "09193",
            "name": "Xã Yên Phong",
            "provinceCode": "24"
        },
        {
            "code": "09202",
            "name": "Xã Tam Giang",
            "provinceCode": "24"
        },
        {
            "code": "09205",
            "name": "Xã Yên Trung",
            "provinceCode": "24"
        },
        {
            "code": "09208",
            "name": "Xã Tam Đa",
            "provinceCode": "24"
        },
        {
            "code": "09238",
            "name": "Xã Văn Môn",
            "provinceCode": "24"
        },
        {
            "code": "09247",
            "name": "Phường Quế Võ",
            "provinceCode": "24"
        },
        {
            "code": "09253",
            "name": "Phường Nhân Hòa",
            "provinceCode": "24"
        },
        {
            "code": "09265",
            "name": "Phường Phương Liễu",
            "provinceCode": "24"
        },
        {
            "code": "09286",
            "name": "Phường Nam Sơn",
            "provinceCode": "24"
        },
        {
            "code": "09292",
            "name": "Xã Phù Lãng",
            "provinceCode": "24"
        },
        {
            "code": "09295",
            "name": "Phường Bồng Lai",
            "provinceCode": "24"
        },
        {
            "code": "09301",
            "name": "Phường Đào Viên",
            "provinceCode": "24"
        },
        {
            "code": "09313",
            "name": "Xã Chi Lăng",
            "provinceCode": "24"
        },
        {
            "code": "09319",
            "name": "Xã Tiên Du",
            "provinceCode": "24"
        },
        {
            "code": "09325",
            "name": "Phường Hạp Lĩnh",
            "provinceCode": "24"
        },
        {
            "code": "09334",
            "name": "Xã Liên Bão",
            "provinceCode": "24"
        },
        {
            "code": "09340",
            "name": "Xã Đại Đồng",
            "provinceCode": "24"
        },
        {
            "code": "09343",
            "name": "Xã Tân Chi",
            "provinceCode": "24"
        },
        {
            "code": "09349",
            "name": "Xã Phật Tích",
            "provinceCode": "24"
        },
        {
            "code": "09367",
            "name": "Phường Từ Sơn",
            "provinceCode": "24"
        },
        {
            "code": "09370",
            "name": "Phường Tam Sơn",
            "provinceCode": "24"
        },
        {
            "code": "09379",
            "name": "Phường Phù Khê",
            "provinceCode": "24"
        },
        {
            "code": "09385",
            "name": "Phường Đồng Nguyên",
            "provinceCode": "24"
        },
        {
            "code": "09400",
            "name": "Phường Thuận Thành",
            "provinceCode": "24"
        },
        {
            "code": "09409",
            "name": "Phường Mão Điền",
            "provinceCode": "24"
        },
        {
            "code": "09427",
            "name": "Phường Trí Quả",
            "provinceCode": "24"
        },
        {
            "code": "09430",
            "name": "Phường Trạm Lộ",
            "provinceCode": "24"
        },
        {
            "code": "09433",
            "name": "Phường Song Liễu",
            "provinceCode": "24"
        },
        {
            "code": "09445",
            "name": "Phường Ninh Xá",
            "provinceCode": "24"
        },
        {
            "code": "09454",
            "name": "Xã Gia Bình",
            "provinceCode": "24"
        },
        {
            "code": "09466",
            "name": "Xã Cao Đức",
            "provinceCode": "24"
        },
        {
            "code": "09469",
            "name": "Xã Đại Lai",
            "provinceCode": "24"
        },
        {
            "code": "09475",
            "name": "Xã Nhân Thắng",
            "provinceCode": "24"
        },
        {
            "code": "09487",
            "name": "Xã Đông Cứu",
            "provinceCode": "24"
        },
        {
            "code": "09496",
            "name": "Xã Lương Tài",
            "provinceCode": "24"
        },
        {
            "code": "09499",
            "name": "Xã Trung Kênh",
            "provinceCode": "24"
        },
        {
            "code": "09523",
            "name": "Xã Trung Chính",
            "provinceCode": "24"
        },
        {
            "code": "09529",
            "name": "Xã Lâm Thao",
            "provinceCode": "24"
        },
        {
            "code": "04792",
            "name": "Phường Tân Hòa",
            "provinceCode": "25"
        },
        {
            "code": "04795",
            "name": "Phường Hòa Bình",
            "provinceCode": "25"
        },
        {
            "code": "04828",
            "name": "Phường Thống Nhất",
            "provinceCode": "25"
        },
        {
            "code": "04831",
            "name": "Xã Đà Bắc",
            "provinceCode": "25"
        },
        {
            "code": "04846",
            "name": "Xã Đức Nhàn",
            "provinceCode": "25"
        },
        {
            "code": "04849",
            "name": "Xã Tân Pheo",
            "provinceCode": "25"
        },
        {
            "code": "04873",
            "name": "Xã Quy Đức",
            "provinceCode": "25"
        },
        {
            "code": "04876",
            "name": "Xã Cao Sơn",
            "provinceCode": "25"
        },
        {
            "code": "04891",
            "name": "Xã Tiền Phong",
            "provinceCode": "25"
        },
        {
            "code": "04894",
            "name": "Phường Kỳ Sơn",
            "provinceCode": "25"
        },
        {
            "code": "04897",
            "name": "Xã Thịnh Minh",
            "provinceCode": "25"
        },
        {
            "code": "04924",
            "name": "Xã Lương Sơn",
            "provinceCode": "25"
        },
        {
            "code": "04960",
            "name": "Xã Liên Sơn",
            "provinceCode": "25"
        },
        {
            "code": "04978",
            "name": "Xã Kim Bôi",
            "provinceCode": "25"
        },
        {
            "code": "04990",
            "name": "Xã Nật Sơn",
            "provinceCode": "25"
        },
        {
            "code": "05014",
            "name": "Xã Mường Động",
            "provinceCode": "25"
        },
        {
            "code": "05047",
            "name": "Xã Cao Dương",
            "provinceCode": "25"
        },
        {
            "code": "05068",
            "name": "Xã Hợp Kim",
            "provinceCode": "25"
        },
        {
            "code": "05086",
            "name": "Xã Dũng Tiến",
            "provinceCode": "25"
        },
        {
            "code": "05089",
            "name": "Xã Cao Phong",
            "provinceCode": "25"
        },
        {
            "code": "05092",
            "name": "Xã Thung Nai",
            "provinceCode": "25"
        },
        {
            "code": "05116",
            "name": "Xã Mường Thàng",
            "provinceCode": "25"
        },
        {
            "code": "05128",
            "name": "Xã Tân Lạc",
            "provinceCode": "25"
        },
        {
            "code": "05134",
            "name": "Xã Mường Hoa",
            "provinceCode": "25"
        },
        {
            "code": "05152",
            "name": "Xã Vân Sơn",
            "provinceCode": "25"
        },
        {
            "code": "05158",
            "name": "Xã Mường Bi",
            "provinceCode": "25"
        },
        {
            "code": "05191",
            "name": "Xã Toàn Thắng",
            "provinceCode": "25"
        },
        {
            "code": "05200",
            "name": "Xã Mai Châu",
            "provinceCode": "25"
        },
        {
            "code": "05206",
            "name": "Xã Tân Mai",
            "provinceCode": "25"
        },
        {
            "code": "05212",
            "name": "Xã Pà Cò",
            "provinceCode": "25"
        },
        {
            "code": "05245",
            "name": "Xã Bao La",
            "provinceCode": "25"
        },
        {
            "code": "05251",
            "name": "Xã Mai Hạ",
            "provinceCode": "25"
        },
        {
            "code": "05266",
            "name": "Xã Lạc Sơn",
            "provinceCode": "25"
        },
        {
            "code": "05287",
            "name": "Xã Mường Vang",
            "provinceCode": "25"
        },
        {
            "code": "05290",
            "name": "Xã Nhân Nghĩa",
            "provinceCode": "25"
        },
        {
            "code": "05293",
            "name": "Xã Thượng Cốc",
            "provinceCode": "25"
        },
        {
            "code": "05305",
            "name": "Xã Yên Phú",
            "provinceCode": "25"
        },
        {
            "code": "05323",
            "name": "Xã Quyết Thắng",
            "provinceCode": "25"
        },
        {
            "code": "05329",
            "name": "Xã Ngọc Sơn",
            "provinceCode": "25"
        },
        {
            "code": "05347",
            "name": "Xã Đại Đồng",
            "provinceCode": "25"
        },
        {
            "code": "05353",
            "name": "Xã Yên Thủy",
            "provinceCode": "25"
        },
        {
            "code": "05362",
            "name": "Xã Lạc Lương",
            "provinceCode": "25"
        },
        {
            "code": "05386",
            "name": "Xã Yên Trị",
            "provinceCode": "25"
        },
        {
            "code": "05392",
            "name": "Xã Lạc Thủy",
            "provinceCode": "25"
        },
        {
            "code": "05395",
            "name": "Xã An Nghĩa",
            "provinceCode": "25"
        },
        {
            "code": "05425",
            "name": "Xã An Bình",
            "provinceCode": "25"
        },
        {
            "code": "07894",
            "name": "Phường Nông Trang",
            "provinceCode": "25"
        },
        {
            "code": "07900",
            "name": "Phường Việt Trì",
            "provinceCode": "25"
        },
        {
            "code": "07909",
            "name": "Phường Thanh Miếu",
            "provinceCode": "25"
        },
        {
            "code": "07918",
            "name": "Phường Vân Phú",
            "provinceCode": "25"
        },
        {
            "code": "07942",
            "name": "Phường Phú Thọ",
            "provinceCode": "25"
        },
        {
            "code": "07948",
            "name": "Phường Âu Cơ",
            "provinceCode": "25"
        },
        {
            "code": "07954",
            "name": "Phường Phong Châu",
            "provinceCode": "25"
        },
        {
            "code": "07969",
            "name": "Xã Đoan Hùng",
            "provinceCode": "25"
        },
        {
            "code": "07996",
            "name": "Xã Bằng Luân",
            "provinceCode": "25"
        },
        {
            "code": "07999",
            "name": "Xã Chí Đám",
            "provinceCode": "25"
        },
        {
            "code": "08023",
            "name": "Xã Tây Cốc",
            "provinceCode": "25"
        },
        {
            "code": "08038",
            "name": "Xã Chân Mộng",
            "provinceCode": "25"
        },
        {
            "code": "08053",
            "name": "Xã Hạ Hòa",
            "provinceCode": "25"
        },
        {
            "code": "08071",
            "name": "Xã Đan Thượng",
            "provinceCode": "25"
        },
        {
            "code": "08110",
            "name": "Xã Hiền Lương",
            "provinceCode": "25"
        },
        {
            "code": "08113",
            "name": "Xã Yên Kỳ",
            "provinceCode": "25"
        },
        {
            "code": "08134",
            "name": "Xã Văn Lang",
            "provinceCode": "25"
        },
        {
            "code": "08143",
            "name": "Xã Vĩnh Chân",
            "provinceCode": "25"
        },
        {
            "code": "08152",
            "name": "Xã Thanh Ba",
            "provinceCode": "25"
        },
        {
            "code": "08173",
            "name": "Xã Quảng Yên",
            "provinceCode": "25"
        },
        {
            "code": "08203",
            "name": "Xã Hoàng Cương",
            "provinceCode": "25"
        },
        {
            "code": "08209",
            "name": "Xã Đông Thành",
            "provinceCode": "25"
        },
        {
            "code": "08218",
            "name": "Xã Chí Tiên",
            "provinceCode": "25"
        },
        {
            "code": "08227",
            "name": "Xã Liên Minh",
            "provinceCode": "25"
        },
        {
            "code": "08230",
            "name": "Xã Phù Ninh",
            "provinceCode": "25"
        },
        {
            "code": "08236",
            "name": "Xã Phú Mỹ",
            "provinceCode": "25"
        },
        {
            "code": "08245",
            "name": "Xã Trạm Thản",
            "provinceCode": "25"
        },
        {
            "code": "08254",
            "name": "Xã Dân Chủ",
            "provinceCode": "25"
        },
        {
            "code": "08275",
            "name": "Xã Bình Phú",
            "provinceCode": "25"
        },
        {
            "code": "08290",
            "name": "Xã Yên Lập",
            "provinceCode": "25"
        },
        {
            "code": "08296",
            "name": "Xã Sơn Lương",
            "provinceCode": "25"
        },
        {
            "code": "08305",
            "name": "Xã Xuân Viên",
            "provinceCode": "25"
        },
        {
            "code": "08311",
            "name": "Xã Trung Sơn",
            "provinceCode": "25"
        },
        {
            "code": "08323",
            "name": "Xã Thượng Long",
            "provinceCode": "25"
        },
        {
            "code": "08338",
            "name": "Xã Minh Hòa",
            "provinceCode": "25"
        },
        {
            "code": "08341",
            "name": "Xã Cẩm Khê",
            "provinceCode": "25"
        },
        {
            "code": "08344",
            "name": "Xã Tiên Lương",
            "provinceCode": "25"
        },
        {
            "code": "08377",
            "name": "Xã Vân Bán",
            "provinceCode": "25"
        },
        {
            "code": "08398",
            "name": "Xã Phú Khê",
            "provinceCode": "25"
        },
        {
            "code": "08416",
            "name": "Xã Hùng Việt",
            "provinceCode": "25"
        },
        {
            "code": "08431",
            "name": "Xã Đồng Lương",
            "provinceCode": "25"
        },
        {
            "code": "08434",
            "name": "Xã Tam Nông",
            "provinceCode": "25"
        },
        {
            "code": "08443",
            "name": "Xã Hiền Quan",
            "provinceCode": "25"
        },
        {
            "code": "08467",
            "name": "Xã Vạn Xuân",
            "provinceCode": "25"
        },
        {
            "code": "08479",
            "name": "Xã Thọ Văn",
            "provinceCode": "25"
        },
        {
            "code": "08494",
            "name": "Xã Lâm Thao",
            "provinceCode": "25"
        },
        {
            "code": "08500",
            "name": "Xã Xuân Lũng",
            "provinceCode": "25"
        },
        {
            "code": "08515",
            "name": "Xã Hy Cương",
            "provinceCode": "25"
        },
        {
            "code": "08521",
            "name": "Xã Phùng Nguyên",
            "provinceCode": "25"
        },
        {
            "code": "08527",
            "name": "Xã Bản Nguyên",
            "provinceCode": "25"
        },
        {
            "code": "08542",
            "name": "Xã Thanh Sơn",
            "provinceCode": "25"
        },
        {
            "code": "08545",
            "name": "Xã Thu Cúc",
            "provinceCode": "25"
        },
        {
            "code": "08560",
            "name": "Xã Lai Đồng",
            "provinceCode": "25"
        },
        {
            "code": "08566",
            "name": "Xã Tân Sơn",
            "provinceCode": "25"
        },
        {
            "code": "08584",
            "name": "Xã Võ Miếu",
            "provinceCode": "25"
        },
        {
            "code": "08590",
            "name": "Xã Xuân Đài",
            "provinceCode": "25"
        },
        {
            "code": "08593",
            "name": "Xã Minh Đài",
            "provinceCode": "25"
        },
        {
            "code": "08611",
            "name": "Xã Văn Miếu",
            "provinceCode": "25"
        },
        {
            "code": "08614",
            "name": "Xã Cự Đồng",
            "provinceCode": "25"
        },
        {
            "code": "08620",
            "name": "Xã Long Cốc",
            "provinceCode": "25"
        },
        {
            "code": "08632",
            "name": "Xã Hương Cần",
            "provinceCode": "25"
        },
        {
            "code": "08635",
            "name": "Xã Khả Cửu",
            "provinceCode": "25"
        },
        {
            "code": "08656",
            "name": "Xã Yên Sơn",
            "provinceCode": "25"
        },
        {
            "code": "08662",
            "name": "Xã Đào Xá",
            "provinceCode": "25"
        },
        {
            "code": "08674",
            "name": "Xã Thanh Thủy",
            "provinceCode": "25"
        },
        {
            "code": "08686",
            "name": "Xã Tu Vũ",
            "provinceCode": "25"
        },
        {
            "code": "08707",
            "name": "Phường Vĩnh Yên",
            "provinceCode": "25"
        },
        {
            "code": "08716",
            "name": "Phường Vĩnh Phúc",
            "provinceCode": "25"
        },
        {
            "code": "08740",
            "name": "Phường Phúc Yên",
            "provinceCode": "25"
        },
        {
            "code": "08746",
            "name": "Phường Xuân Hòa",
            "provinceCode": "25"
        },
        {
            "code": "08761",
            "name": "Xã Lập Thạch",
            "provinceCode": "25"
        },
        {
            "code": "08770",
            "name": "Xã Hợp Lý",
            "provinceCode": "25"
        },
        {
            "code": "08773",
            "name": "Xã Yên Lãng",
            "provinceCode": "25"
        },
        {
            "code": "08782",
            "name": "Xã Hải Lựu",
            "provinceCode": "25"
        },
        {
            "code": "08788",
            "name": "Xã Thái Hòa",
            "provinceCode": "25"
        },
        {
            "code": "08812",
            "name": "Xã Liên Hòa",
            "provinceCode": "25"
        },
        {
            "code": "08824",
            "name": "Xã Tam Sơn",
            "provinceCode": "25"
        },
        {
            "code": "08842",
            "name": "Xã Tiên Lữ",
            "provinceCode": "25"
        },
        {
            "code": "08848",
            "name": "Xã Sông Lô",
            "provinceCode": "25"
        },
        {
            "code": "08866",
            "name": "Xã Sơn Đông",
            "provinceCode": "25"
        },
        {
            "code": "08869",
            "name": "Xã Tam Dương",
            "provinceCode": "25"
        },
        {
            "code": "08872",
            "name": "Xã Tam Dương Bắc",
            "provinceCode": "25"
        },
        {
            "code": "08896",
            "name": "Xã Hoàng An",
            "provinceCode": "25"
        },
        {
            "code": "08905",
            "name": "Xã Hội Thịnh",
            "provinceCode": "25"
        },
        {
            "code": "08911",
            "name": "Xã Tam Đảo",
            "provinceCode": "25"
        },
        {
            "code": "08914",
            "name": "Xã Đạo Trù",
            "provinceCode": "25"
        },
        {
            "code": "08923",
            "name": "Xã Đại Đình",
            "provinceCode": "25"
        },
        {
            "code": "08935",
            "name": "Xã Bình Nguyên",
            "provinceCode": "25"
        },
        {
            "code": "08944",
            "name": "Xã Bình Tuyền",
            "provinceCode": "25"
        },
        {
            "code": "08950",
            "name": "Xã Bình Xuyên",
            "provinceCode": "25"
        },
        {
            "code": "08971",
            "name": "Xã Xuân Lãng",
            "provinceCode": "25"
        },
        {
            "code": "09025",
            "name": "Xã Yên Lạc",
            "provinceCode": "25"
        },
        {
            "code": "09040",
            "name": "Xã Tề Lỗ",
            "provinceCode": "25"
        },
        {
            "code": "09043",
            "name": "Xã Tam Hồng",
            "provinceCode": "25"
        },
        {
            "code": "09052",
            "name": "Xã Nguyệt Đức",
            "provinceCode": "25"
        },
        {
            "code": "09064",
            "name": "Xã Liên Châu",
            "provinceCode": "25"
        },
        {
            "code": "09076",
            "name": "Xã Vĩnh Tường",
            "provinceCode": "25"
        },
        {
            "code": "09079",
            "name": "Xã Vĩnh An",
            "provinceCode": "25"
        },
        {
            "code": "09100",
            "name": "Xã Vĩnh Hưng",
            "provinceCode": "25"
        },
        {
            "code": "09106",
            "name": "Xã Vĩnh Thành",
            "provinceCode": "25"
        },
        {
            "code": "09112",
            "name": "Xã Thổ Tang",
            "provinceCode": "25"
        },
        {
            "code": "09154",
            "name": "Xã Vĩnh Phú",
            "provinceCode": "25"
        },
        {
            "code": "10507",
            "name": "Phường Thành Đông",
            "provinceCode": "31"
        },
        {
            "code": "10525",
            "name": "Phường Hải Dương",
            "provinceCode": "31"
        },
        {
            "code": "10532",
            "name": "Phường Lê Thanh Nghị",
            "provinceCode": "31"
        },
        {
            "code": "10537",
            "name": "Phường Tân Hưng",
            "provinceCode": "31"
        },
        {
            "code": "10543",
            "name": "Phường Việt Hòa",
            "provinceCode": "31"
        },
        {
            "code": "10546",
            "name": "Phường Chí Linh",
            "provinceCode": "31"
        },
        {
            "code": "10549",
            "name": "Phường Chu Văn An",
            "provinceCode": "31"
        },
        {
            "code": "10552",
            "name": "Phường Nguyễn Trãi",
            "provinceCode": "31"
        },
        {
            "code": "10570",
            "name": "Phường Trần Hưng Đạo",
            "provinceCode": "31"
        },
        {
            "code": "10573",
            "name": "Phường Trần Nhân Tông",
            "provinceCode": "31"
        },
        {
            "code": "10603",
            "name": "Phường Lê Đại Hành",
            "provinceCode": "31"
        },
        {
            "code": "10606",
            "name": "Xã Nam Sách",
            "provinceCode": "31"
        },
        {
            "code": "10615",
            "name": "Xã Hợp Tiến",
            "provinceCode": "31"
        },
        {
            "code": "10633",
            "name": "Xã Trần Phú",
            "provinceCode": "31"
        },
        {
            "code": "10642",
            "name": "Xã Thái Tân",
            "provinceCode": "31"
        },
        {
            "code": "10645",
            "name": "Xã An Phú",
            "provinceCode": "31"
        },
        {
            "code": "10660",
            "name": "Phường Ái Quốc",
            "provinceCode": "31"
        },
        {
            "code": "10675",
            "name": "Phường Kinh Môn",
            "provinceCode": "31"
        },
        {
            "code": "10678",
            "name": "Phường Bắc An Phụ",
            "provinceCode": "31"
        },
        {
            "code": "10705",
            "name": "Xã Nam An Phụ",
            "provinceCode": "31"
        },
        {
            "code": "10714",
            "name": "Phường Nhị Chiểu",
            "provinceCode": "31"
        },
        {
            "code": "10726",
            "name": "Phường Phạm Sư Mạnh",
            "provinceCode": "31"
        },
        {
            "code": "10729",
            "name": "Phường Trần Liễu",
            "provinceCode": "31"
        },
        {
            "code": "10744",
            "name": "Phường Nguyễn Đại Năng",
            "provinceCode": "31"
        },
        {
            "code": "10750",
            "name": "Xã Phú Thái",
            "provinceCode": "31"
        },
        {
            "code": "10756",
            "name": "Xã Lai Khê",
            "provinceCode": "31"
        },
        {
            "code": "10792",
            "name": "Xã An Thành",
            "provinceCode": "31"
        },
        {
            "code": "10804",
            "name": "Xã Kim Thành",
            "provinceCode": "31"
        },
        {
            "code": "10813",
            "name": "Xã Thanh Hà",
            "provinceCode": "31"
        },
        {
            "code": "10816",
            "name": "Xã Hà Bắc",
            "provinceCode": "31"
        },
        {
            "code": "10837",
            "name": "Phường Nam Đồng",
            "provinceCode": "31"
        },
        {
            "code": "10843",
            "name": "Xã Hà Nam",
            "provinceCode": "31"
        },
        {
            "code": "10846",
            "name": "Xã Hà Tây",
            "provinceCode": "31"
        },
        {
            "code": "10882",
            "name": "Xã Hà Đông",
            "provinceCode": "31"
        },
        {
            "code": "10888",
            "name": "Xã Cẩm Giang",
            "provinceCode": "31"
        },
        {
            "code": "10891",
            "name": "Phường Tứ Minh",
            "provinceCode": "31"
        },
        {
            "code": "10903",
            "name": "Xã Cẩm Giàng",
            "provinceCode": "31"
        },
        {
            "code": "10909",
            "name": "Xã Tuệ Tĩnh",
            "provinceCode": "31"
        },
        {
            "code": "10930",
            "name": "Xã Mao Điền",
            "provinceCode": "31"
        },
        {
            "code": "10945",
            "name": "Xã Kẻ Sặt",
            "provinceCode": "31"
        },
        {
            "code": "10966",
            "name": "Xã Bình Giang",
            "provinceCode": "31"
        },
        {
            "code": "10972",
            "name": "Xã Đường An",
            "provinceCode": "31"
        },
        {
            "code": "10993",
            "name": "Xã Thượng Hồng",
            "provinceCode": "31"
        },
        {
            "code": "10999",
            "name": "Xã Gia Lộc",
            "provinceCode": "31"
        },
        {
            "code": "11002",
            "name": "Phường Thạch Khôi",
            "provinceCode": "31"
        },
        {
            "code": "11020",
            "name": "Xã Yết Kiêu",
            "provinceCode": "31"
        },
        {
            "code": "11050",
            "name": "Xã Gia Phúc",
            "provinceCode": "31"
        },
        {
            "code": "11065",
            "name": "Xã Trường Tân",
            "provinceCode": "31"
        },
        {
            "code": "11074",
            "name": "Xã Tứ Kỳ",
            "provinceCode": "31"
        },
        {
            "code": "11086",
            "name": "Xã Đại Sơn",
            "provinceCode": "31"
        },
        {
            "code": "11113",
            "name": "Xã Tân Kỳ",
            "provinceCode": "31"
        },
        {
            "code": "11131",
            "name": "Xã Chí Minh",
            "provinceCode": "31"
        },
        {
            "code": "11140",
            "name": "Xã Lạc Phượng",
            "provinceCode": "31"
        },
        {
            "code": "11146",
            "name": "Xã Nguyên Giáp",
            "provinceCode": "31"
        },
        {
            "code": "11164",
            "name": "Xã Vĩnh Lại",
            "provinceCode": "31"
        },
        {
            "code": "11167",
            "name": "Xã Tân An",
            "provinceCode": "31"
        },
        {
            "code": "11203",
            "name": "Xã Ninh Giang",
            "provinceCode": "31"
        },
        {
            "code": "11218",
            "name": "Xã Hồng Châu",
            "provinceCode": "31"
        },
        {
            "code": "11224",
            "name": "Xã Khúc Thừa Dụ",
            "provinceCode": "31"
        },
        {
            "code": "11239",
            "name": "Xã Thanh Miện",
            "provinceCode": "31"
        },
        {
            "code": "11242",
            "name": "Xã Nguyễn Lương Bằng",
            "provinceCode": "31"
        },
        {
            "code": "11254",
            "name": "Xã Bắc Thanh Miện",
            "provinceCode": "31"
        },
        {
            "code": "11257",
            "name": "Xã Hải Hưng",
            "provinceCode": "31"
        },
        {
            "code": "11284",
            "name": "Xã Nam Thanh Miện",
            "provinceCode": "31"
        },
        {
            "code": "11311",
            "name": "Phường Hồng Bàng",
            "provinceCode": "31"
        },
        {
            "code": "11329",
            "name": "Phường Ngô Quyền",
            "provinceCode": "31"
        },
        {
            "code": "11359",
            "name": "Phường Gia Viên",
            "provinceCode": "31"
        },
        {
            "code": "11383",
            "name": "Phường Lê Chân",
            "provinceCode": "31"
        },
        {
            "code": "11407",
            "name": "Phường An Biên",
            "provinceCode": "31"
        },
        {
            "code": "11411",
            "name": "Phường Đông Hải",
            "provinceCode": "31"
        },
        {
            "code": "11413",
            "name": "Phường Hải An",
            "provinceCode": "31"
        },
        {
            "code": "11443",
            "name": "Phường Kiến An",
            "provinceCode": "31"
        },
        {
            "code": "11446",
            "name": "Phường Phù Liễn",
            "provinceCode": "31"
        },
        {
            "code": "11455",
            "name": "Phường Đồ Sơn",
            "provinceCode": "31"
        },
        {
            "code": "11473",
            "name": "Phường Bạch Đằng",
            "provinceCode": "31"
        },
        {
            "code": "11488",
            "name": "Phường Lưu Kiếm",
            "provinceCode": "31"
        },
        {
            "code": "11503",
            "name": "Xã Việt Khê",
            "provinceCode": "31"
        },
        {
            "code": "11506",
            "name": "Phường Lê Ích Mộc",
            "provinceCode": "31"
        },
        {
            "code": "11533",
            "name": "Phường Hòa Bình",
            "provinceCode": "31"
        },
        {
            "code": "11542",
            "name": "Phường Nam Triệu",
            "provinceCode": "31"
        },
        {
            "code": "11557",
            "name": "Phường Thiên Hương",
            "provinceCode": "31"
        },
        {
            "code": "11560",
            "name": "Phường Thủy Nguyên",
            "provinceCode": "31"
        },
        {
            "code": "11581",
            "name": "Phường An Dương",
            "provinceCode": "31"
        },
        {
            "code": "11593",
            "name": "Phường An Phong",
            "provinceCode": "31"
        },
        {
            "code": "11602",
            "name": "Phường Hồng An",
            "provinceCode": "31"
        },
        {
            "code": "11617",
            "name": "Phường An Hải",
            "provinceCode": "31"
        },
        {
            "code": "11629",
            "name": "Xã An Lão",
            "provinceCode": "31"
        },
        {
            "code": "11635",
            "name": "Xã An Trường",
            "provinceCode": "31"
        },
        {
            "code": "11647",
            "name": "Xã An Quang",
            "provinceCode": "31"
        },
        {
            "code": "11668",
            "name": "Xã An Khánh",
            "provinceCode": "31"
        },
        {
            "code": "11674",
            "name": "Xã An Hưng",
            "provinceCode": "31"
        },
        {
            "code": "11680",
            "name": "Xã Kiến Thụy",
            "provinceCode": "31"
        },
        {
            "code": "11689",
            "name": "Phường Hưng Đạo",
            "provinceCode": "31"
        },
        {
            "code": "11692",
            "name": "Phường Dương Kinh",
            "provinceCode": "31"
        },
        {
            "code": "11713",
            "name": "Xã Nghi Dương",
            "provinceCode": "31"
        },
        {
            "code": "11725",
            "name": "Xã Kiến Minh",
            "provinceCode": "31"
        },
        {
            "code": "11728",
            "name": "Xã Kiến Hưng",
            "provinceCode": "31"
        },
        {
            "code": "11737",
            "name": "Phường Nam Đồ Sơn",
            "provinceCode": "31"
        },
        {
            "code": "11749",
            "name": "Xã Kiến Hải",
            "provinceCode": "31"
        },
        {
            "code": "11755",
            "name": "Xã Tiên Lãng",
            "provinceCode": "31"
        },
        {
            "code": "11761",
            "name": "Xã Quyết Thắng",
            "provinceCode": "31"
        },
        {
            "code": "11779",
            "name": "Xã Tân Minh",
            "provinceCode": "31"
        },
        {
            "code": "11791",
            "name": "Xã Tiên Minh",
            "provinceCode": "31"
        },
        {
            "code": "11806",
            "name": "Xã Chấn Hưng",
            "provinceCode": "31"
        },
        {
            "code": "11809",
            "name": "Xã Hùng Thắng",
            "provinceCode": "31"
        },
        {
            "code": "11824",
            "name": "Xã Vĩnh Bảo",
            "provinceCode": "31"
        },
        {
            "code": "11836",
            "name": "Xã Vĩnh Thịnh",
            "provinceCode": "31"
        },
        {
            "code": "11842",
            "name": "Xã Vĩnh Thuận",
            "provinceCode": "31"
        },
        {
            "code": "11848",
            "name": "Xã Vĩnh Hòa",
            "provinceCode": "31"
        },
        {
            "code": "11875",
            "name": "Xã Vĩnh Hải",
            "provinceCode": "31"
        },
        {
            "code": "11887",
            "name": "Xã Vĩnh Am",
            "provinceCode": "31"
        },
        {
            "code": "11911",
            "name": "Xã Nguyễn Bỉnh Khiêm",
            "provinceCode": "31"
        },
        {
            "code": "11914",
            "name": "Đặc khu Cát Hải",
            "provinceCode": "31"
        },
        {
            "code": "11948",
            "name": "Đặc khu Bạch Long Vĩ",
            "provinceCode": "31"
        },
        {
            "code": "11953",
            "name": "Phường Phố Hiến",
            "provinceCode": "33"
        },
        {
            "code": "11977",
            "name": "Xã Tân Hưng",
            "provinceCode": "33"
        },
        {
            "code": "11980",
            "name": "Phường Hồng Châu",
            "provinceCode": "33"
        },
        {
            "code": "11983",
            "name": "Phường Sơn Nam",
            "provinceCode": "33"
        },
        {
            "code": "11992",
            "name": "Xã Lạc Đạo",
            "provinceCode": "33"
        },
        {
            "code": "11995",
            "name": "Xã Đại Đồng",
            "provinceCode": "33"
        },
        {
            "code": "12004",
            "name": "Xã Như Quỳnh",
            "provinceCode": "33"
        },
        {
            "code": "12019",
            "name": "Xã Văn Giang",
            "provinceCode": "33"
        },
        {
            "code": "12025",
            "name": "Xã Phụng Công",
            "provinceCode": "33"
        },
        {
            "code": "12031",
            "name": "Xã Nghĩa Trụ",
            "provinceCode": "33"
        },
        {
            "code": "12049",
            "name": "Xã Mễ Sở",
            "provinceCode": "33"
        },
        {
            "code": "12064",
            "name": "Xã Nguyễn Văn Linh",
            "provinceCode": "33"
        },
        {
            "code": "12070",
            "name": "Xã Hoàn Long",
            "provinceCode": "33"
        },
        {
            "code": "12073",
            "name": "Xã Yên Mỹ",
            "provinceCode": "33"
        },
        {
            "code": "12091",
            "name": "Xã Việt Yên",
            "provinceCode": "33"
        },
        {
            "code": "12103",
            "name": "Phường Mỹ Hào",
            "provinceCode": "33"
        },
        {
            "code": "12127",
            "name": "Phường Thượng Hồng",
            "provinceCode": "33"
        },
        {
            "code": "12133",
            "name": "Phường Đường Hào",
            "provinceCode": "33"
        },
        {
            "code": "12142",
            "name": "Xã Ân Thi",
            "provinceCode": "33"
        },
        {
            "code": "12148",
            "name": "Xã Phạm Ngũ Lão",
            "provinceCode": "33"
        },
        {
            "code": "12166",
            "name": "Xã Xuân Trúc",
            "provinceCode": "33"
        },
        {
            "code": "12184",
            "name": "Xã Nguyễn Trãi",
            "provinceCode": "33"
        },
        {
            "code": "12196",
            "name": "Xã Hồng Quang",
            "provinceCode": "33"
        },
        {
            "code": "12205",
            "name": "Xã Khoái Châu",
            "provinceCode": "33"
        },
        {
            "code": "12223",
            "name": "Xã Triệu Việt Vương",
            "provinceCode": "33"
        },
        {
            "code": "12238",
            "name": "Xã Việt Tiến",
            "provinceCode": "33"
        },
        {
            "code": "12247",
            "name": "Xã Châu Ninh",
            "provinceCode": "33"
        },
        {
            "code": "12271",
            "name": "Xã Chí Minh",
            "provinceCode": "33"
        },
        {
            "code": "12280",
            "name": "Xã Lương Bằng",
            "provinceCode": "33"
        },
        {
            "code": "12286",
            "name": "Xã Nghĩa Dân",
            "provinceCode": "33"
        },
        {
            "code": "12313",
            "name": "Xã Đức Hợp",
            "provinceCode": "33"
        },
        {
            "code": "12322",
            "name": "Xã Hiệp Cường",
            "provinceCode": "33"
        },
        {
            "code": "12337",
            "name": "Xã Hoàng Hoa Thám",
            "provinceCode": "33"
        },
        {
            "code": "12361",
            "name": "Xã Tiên Hoa",
            "provinceCode": "33"
        },
        {
            "code": "12364",
            "name": "Xã Tiên Lữ",
            "provinceCode": "33"
        },
        {
            "code": "12391",
            "name": "Xã Quang Hưng",
            "provinceCode": "33"
        },
        {
            "code": "12406",
            "name": "Xã Đoàn Đào",
            "provinceCode": "33"
        },
        {
            "code": "12424",
            "name": "Xã Tiên Tiến",
            "provinceCode": "33"
        },
        {
            "code": "12427",
            "name": "Xã Tống Trân",
            "provinceCode": "33"
        },
        {
            "code": "12452",
            "name": "Phường Trần Hưng Đạo",
            "provinceCode": "33"
        },
        {
            "code": "12454",
            "name": "Phường Trần Lãm",
            "provinceCode": "33"
        },
        {
            "code": "12466",
            "name": "Phường Vũ Phúc",
            "provinceCode": "33"
        },
        {
            "code": "12472",
            "name": "Xã Quỳnh Phụ",
            "provinceCode": "33"
        },
        {
            "code": "12499",
            "name": "Xã A Sào",
            "provinceCode": "33"
        },
        {
            "code": "12511",
            "name": "Xã Minh Thọ",
            "provinceCode": "33"
        },
        {
            "code": "12517",
            "name": "Xã Ngọc Lâm",
            "provinceCode": "33"
        },
        {
            "code": "12523",
            "name": "Xã Phụ Dực",
            "provinceCode": "33"
        },
        {
            "code": "12526",
            "name": "Xã Đồng Bằng",
            "provinceCode": "33"
        },
        {
            "code": "12532",
            "name": "Xã Nguyễn Du",
            "provinceCode": "33"
        },
        {
            "code": "12577",
            "name": "Xã Quỳnh An",
            "provinceCode": "33"
        },
        {
            "code": "12583",
            "name": "Xã Tân Tiến",
            "provinceCode": "33"
        },
        {
            "code": "12586",
            "name": "Xã Hưng Hà",
            "provinceCode": "33"
        },
        {
            "code": "12595",
            "name": "Xã Ngự Thiên",
            "provinceCode": "33"
        },
        {
            "code": "12613",
            "name": "Xã Long Hưng",
            "provinceCode": "33"
        },
        {
            "code": "12619",
            "name": "Xã Diên Hà",
            "provinceCode": "33"
        },
        {
            "code": "12631",
            "name": "Xã Thần Khê",
            "provinceCode": "33"
        },
        {
            "code": "12634",
            "name": "Xã Tiên La",
            "provinceCode": "33"
        },
        {
            "code": "12676",
            "name": "Xã Lê Quý Đôn",
            "provinceCode": "33"
        },
        {
            "code": "12685",
            "name": "Xã Hồng Minh",
            "provinceCode": "33"
        },
        {
            "code": "12688",
            "name": "Xã Đông Hưng",
            "provinceCode": "33"
        },
        {
            "code": "12694",
            "name": "Xã Bắc Đông Hưng",
            "provinceCode": "33"
        },
        {
            "code": "12700",
            "name": "Xã Bắc Tiên Hưng",
            "provinceCode": "33"
        },
        {
            "code": "12736",
            "name": "Xã Đông Tiên Hưng",
            "provinceCode": "33"
        },
        {
            "code": "12745",
            "name": "Xã Bắc Đông Quan",
            "provinceCode": "33"
        },
        {
            "code": "12754",
            "name": "Xã Tiên Hưng",
            "provinceCode": "33"
        },
        {
            "code": "12763",
            "name": "Xã Nam Tiên Hưng",
            "provinceCode": "33"
        },
        {
            "code": "12775",
            "name": "Xã Nam Đông Hưng",
            "provinceCode": "33"
        },
        {
            "code": "12793",
            "name": "Xã Đông Quan",
            "provinceCode": "33"
        },
        {
            "code": "12817",
            "name": "Phường Trà Lý",
            "provinceCode": "33"
        },
        {
            "code": "12826",
            "name": "Xã Thái Thụy",
            "provinceCode": "33"
        },
        {
            "code": "12850",
            "name": "Xã Tây Thụy Anh",
            "provinceCode": "33"
        },
        {
            "code": "12859",
            "name": "Xã Bắc Thụy Anh",
            "provinceCode": "33"
        },
        {
            "code": "12862",
            "name": "Xã Đông Thụy Anh",
            "provinceCode": "33"
        },
        {
            "code": "12865",
            "name": "Xã Thụy Anh",
            "provinceCode": "33"
        },
        {
            "code": "12904",
            "name": "Xã Nam Thụy Anh",
            "provinceCode": "33"
        },
        {
            "code": "12916",
            "name": "Xã Bắc Thái Ninh",
            "provinceCode": "33"
        },
        {
            "code": "12919",
            "name": "Xã Tây Thái Ninh",
            "provinceCode": "33"
        },
        {
            "code": "12922",
            "name": "Xã Thái Ninh",
            "provinceCode": "33"
        },
        {
            "code": "12943",
            "name": "Xã Đông Thái Ninh",
            "provinceCode": "33"
        },
        {
            "code": "12961",
            "name": "Xã Nam Thái Ninh",
            "provinceCode": "33"
        },
        {
            "code": "12970",
            "name": "Xã Tiền Hải",
            "provinceCode": "33"
        },
        {
            "code": "12988",
            "name": "Xã Đông Tiền Hải",
            "provinceCode": "33"
        },
        {
            "code": "13003",
            "name": "Xã Đồng Châu",
            "provinceCode": "33"
        },
        {
            "code": "13021",
            "name": "Xã Ái Quốc",
            "provinceCode": "33"
        },
        {
            "code": "13039",
            "name": "Xã Tây Tiền Hải",
            "provinceCode": "33"
        },
        {
            "code": "13057",
            "name": "Xã Nam Cường",
            "provinceCode": "33"
        },
        {
            "code": "13063",
            "name": "Xã Nam Tiền Hải",
            "provinceCode": "33"
        },
        {
            "code": "13066",
            "name": "Xã Hưng Phú",
            "provinceCode": "33"
        },
        {
            "code": "13075",
            "name": "Xã Kiến Xương",
            "provinceCode": "33"
        },
        {
            "code": "13093",
            "name": "Xã Trà Giang",
            "provinceCode": "33"
        },
        {
            "code": "13096",
            "name": "Xã Bình Nguyên",
            "provinceCode": "33"
        },
        {
            "code": "13120",
            "name": "Xã Lê Lợi",
            "provinceCode": "33"
        },
        {
            "code": "13132",
            "name": "Xã Quang Lịch",
            "provinceCode": "33"
        },
        {
            "code": "13141",
            "name": "Xã Vũ Quý",
            "provinceCode": "33"
        },
        {
            "code": "13159",
            "name": "Xã Hồng Vũ",
            "provinceCode": "33"
        },
        {
            "code": "13183",
            "name": "Xã Bình Thanh",
            "provinceCode": "33"
        },
        {
            "code": "13186",
            "name": "Xã Bình Định",
            "provinceCode": "33"
        },
        {
            "code": "13192",
            "name": "Xã Vũ Thư",
            "provinceCode": "33"
        },
        {
            "code": "13219",
            "name": "Xã Vạn Xuân",
            "provinceCode": "33"
        },
        {
            "code": "13222",
            "name": "Xã Thư Trì",
            "provinceCode": "33"
        },
        {
            "code": "13225",
            "name": "Phường Thái Bình",
            "provinceCode": "33"
        },
        {
            "code": "13246",
            "name": "Xã Tân Thuận",
            "provinceCode": "33"
        },
        {
            "code": "13264",
            "name": "Xã Thư Vũ",
            "provinceCode": "33"
        },
        {
            "code": "13279",
            "name": "Xã Vũ Tiên",
            "provinceCode": "33"
        },
        {
            "code": "13285",
            "name": "Phường Phủ Lý",
            "provinceCode": "37"
        },
        {
            "code": "13291",
            "name": "Phường Phù Vân",
            "provinceCode": "37"
        },
        {
            "code": "13318",
            "name": "Phường Châu Sơn",
            "provinceCode": "37"
        },
        {
            "code": "13324",
            "name": "Phường Duy Tiên",
            "provinceCode": "37"
        },
        {
            "code": "13330",
            "name": "Phường Duy Tân",
            "provinceCode": "37"
        },
        {
            "code": "13336",
            "name": "Phường Duy Hà",
            "provinceCode": "37"
        },
        {
            "code": "13348",
            "name": "Phường Đồng Văn",
            "provinceCode": "37"
        },
        {
            "code": "13363",
            "name": "Phường Tiên Sơn",
            "provinceCode": "37"
        },
        {
            "code": "13366",
            "name": "Phường Hà Nam",
            "provinceCode": "37"
        },
        {
            "code": "13384",
            "name": "Phường Kim Bảng",
            "provinceCode": "37"
        },
        {
            "code": "13393",
            "name": "Phường Lê Hồ",
            "provinceCode": "37"
        },
        {
            "code": "13396",
            "name": "Phường Nguyễn Uý",
            "provinceCode": "37"
        },
        {
            "code": "13402",
            "name": "Phường Kim Thanh",
            "provinceCode": "37"
        },
        {
            "code": "13420",
            "name": "Phường Tam Chúc",
            "provinceCode": "37"
        },
        {
            "code": "13435",
            "name": "Phường Lý Thường Kiệt",
            "provinceCode": "37"
        },
        {
            "code": "13444",
            "name": "Phường Liêm Tuyền",
            "provinceCode": "37"
        },
        {
            "code": "13456",
            "name": "Xã Liêm Hà",
            "provinceCode": "37"
        },
        {
            "code": "13474",
            "name": "Xã Tân Thanh",
            "provinceCode": "37"
        },
        {
            "code": "13483",
            "name": "Xã Thanh Bình",
            "provinceCode": "37"
        },
        {
            "code": "13489",
            "name": "Xã Thanh Lâm",
            "provinceCode": "37"
        },
        {
            "code": "13495",
            "name": "Xã Thanh Liêm",
            "provinceCode": "37"
        },
        {
            "code": "13501",
            "name": "Xã Bình Mỹ",
            "provinceCode": "37"
        },
        {
            "code": "13504",
            "name": "Xã Bình Lục",
            "provinceCode": "37"
        },
        {
            "code": "13531",
            "name": "Xã Bình Giang",
            "provinceCode": "37"
        },
        {
            "code": "13540",
            "name": "Xã Bình An",
            "provinceCode": "37"
        },
        {
            "code": "13558",
            "name": "Xã Bình Sơn",
            "provinceCode": "37"
        },
        {
            "code": "13573",
            "name": "Xã Lý Nhân",
            "provinceCode": "37"
        },
        {
            "code": "13579",
            "name": "Xã Bắc Lý",
            "provinceCode": "37"
        },
        {
            "code": "13591",
            "name": "Xã Nam Xang",
            "provinceCode": "37"
        },
        {
            "code": "13594",
            "name": "Xã Trần Thương",
            "provinceCode": "37"
        },
        {
            "code": "13597",
            "name": "Xã Vĩnh Trụ",
            "provinceCode": "37"
        },
        {
            "code": "13609",
            "name": "Xã Nhân Hà",
            "provinceCode": "37"
        },
        {
            "code": "13627",
            "name": "Xã Nam Lý",
            "provinceCode": "37"
        },
        {
            "code": "13669",
            "name": "Phường Nam Định",
            "provinceCode": "37"
        },
        {
            "code": "13684",
            "name": "Phường Thiên Trường",
            "provinceCode": "37"
        },
        {
            "code": "13693",
            "name": "Phường Đông A",
            "provinceCode": "37"
        },
        {
            "code": "13699",
            "name": "Phường Thành Nam",
            "provinceCode": "37"
        },
        {
            "code": "13708",
            "name": "Phường Mỹ Lộc",
            "provinceCode": "37"
        },
        {
            "code": "13741",
            "name": "Xã Vụ Bản",
            "provinceCode": "37"
        },
        {
            "code": "13750",
            "name": "Xã Minh Tân",
            "provinceCode": "37"
        },
        {
            "code": "13753",
            "name": "Xã Hiển Khánh",
            "provinceCode": "37"
        },
        {
            "code": "13777",
            "name": "Phường Trường Thi",
            "provinceCode": "37"
        },
        {
            "code": "13786",
            "name": "Xã Liên Minh",
            "provinceCode": "37"
        },
        {
            "code": "13795",
            "name": "Xã Ý Yên",
            "provinceCode": "37"
        },
        {
            "code": "13807",
            "name": "Xã Tân Minh",
            "provinceCode": "37"
        },
        {
            "code": "13822",
            "name": "Xã Phong Doanh",
            "provinceCode": "37"
        },
        {
            "code": "13834",
            "name": "Xã Vũ Dương",
            "provinceCode": "37"
        },
        {
            "code": "13864",
            "name": "Xã Vạn Thắng",
            "provinceCode": "37"
        },
        {
            "code": "13870",
            "name": "Xã Yên Cường",
            "provinceCode": "37"
        },
        {
            "code": "13879",
            "name": "Xã Yên Đồng",
            "provinceCode": "37"
        },
        {
            "code": "13891",
            "name": "Xã Nghĩa Hưng",
            "provinceCode": "37"
        },
        {
            "code": "13894",
            "name": "Xã Rạng Đông",
            "provinceCode": "37"
        },
        {
            "code": "13900",
            "name": "Xã Đồng Thịnh",
            "provinceCode": "37"
        },
        {
            "code": "13918",
            "name": "Xã Nghĩa Sơn",
            "provinceCode": "37"
        },
        {
            "code": "13927",
            "name": "Xã Hồng Phong",
            "provinceCode": "37"
        },
        {
            "code": "13939",
            "name": "Xã Quỹ Nhất",
            "provinceCode": "37"
        },
        {
            "code": "13957",
            "name": "Xã Nghĩa Lâm",
            "provinceCode": "37"
        },
        {
            "code": "13966",
            "name": "Xã Nam Trực",
            "provinceCode": "37"
        },
        {
            "code": "13972",
            "name": "Phường Vị Khê",
            "provinceCode": "37"
        },
        {
            "code": "13984",
            "name": "Phường Hồng Quang",
            "provinceCode": "37"
        },
        {
            "code": "13987",
            "name": "Xã Nam Hồng",
            "provinceCode": "37"
        },
        {
            "code": "14005",
            "name": "Xã Nam Ninh",
            "provinceCode": "37"
        },
        {
            "code": "14011",
            "name": "Xã Nam Minh",
            "provinceCode": "37"
        },
        {
            "code": "14014",
            "name": "Xã Nam Đồng",
            "provinceCode": "37"
        },
        {
            "code": "14026",
            "name": "Xã Cổ Lễ",
            "provinceCode": "37"
        },
        {
            "code": "14038",
            "name": "Xã Ninh Giang",
            "provinceCode": "37"
        },
        {
            "code": "14053",
            "name": "Xã Trực Ninh",
            "provinceCode": "37"
        },
        {
            "code": "14056",
            "name": "Xã Cát Thành",
            "provinceCode": "37"
        },
        {
            "code": "14062",
            "name": "Xã Quang Hưng",
            "provinceCode": "37"
        },
        {
            "code": "14071",
            "name": "Xã Minh Thái",
            "provinceCode": "37"
        },
        {
            "code": "14077",
            "name": "Xã Ninh Cường",
            "provinceCode": "37"
        },
        {
            "code": "14089",
            "name": "Xã Xuân Trường",
            "provinceCode": "37"
        },
        {
            "code": "14095",
            "name": "Xã Xuân Hồng",
            "provinceCode": "37"
        },
        {
            "code": "14104",
            "name": "Xã Xuân Giang",
            "provinceCode": "37"
        },
        {
            "code": "14122",
            "name": "Xã Xuân Hưng",
            "provinceCode": "37"
        },
        {
            "code": "14161",
            "name": "Xã Giao Minh",
            "provinceCode": "37"
        },
        {
            "code": "14167",
            "name": "Xã Giao Thuỷ",
            "provinceCode": "37"
        },
        {
            "code": "14179",
            "name": "Xã Giao Hưng",
            "provinceCode": "37"
        },
        {
            "code": "14182",
            "name": "Xã Giao Hoà",
            "provinceCode": "37"
        },
        {
            "code": "14194",
            "name": "Xã Giao Bình",
            "provinceCode": "37"
        },
        {
            "code": "14203",
            "name": "Xã Giao Phúc",
            "provinceCode": "37"
        },
        {
            "code": "14212",
            "name": "Xã Giao Ninh",
            "provinceCode": "37"
        },
        {
            "code": "14215",
            "name": "Xã Hải Hậu",
            "provinceCode": "37"
        },
        {
            "code": "14218",
            "name": "Xã Hải Tiến",
            "provinceCode": "37"
        },
        {
            "code": "14221",
            "name": "Xã Hải Thịnh",
            "provinceCode": "37"
        },
        {
            "code": "14236",
            "name": "Xã Hải Anh",
            "provinceCode": "37"
        },
        {
            "code": "14248",
            "name": "Xã Hải Hưng",
            "provinceCode": "37"
        },
        {
            "code": "14281",
            "name": "Xã Hải An",
            "provinceCode": "37"
        },
        {
            "code": "14287",
            "name": "Xã Hải Quang",
            "provinceCode": "37"
        },
        {
            "code": "14308",
            "name": "Xã Hải Xuân",
            "provinceCode": "37"
        },
        {
            "code": "14329",
            "name": "Phường Hoa Lư",
            "provinceCode": "37"
        },
        {
            "code": "14359",
            "name": "Phường Nam Hoa Lư",
            "provinceCode": "37"
        },
        {
            "code": "14362",
            "name": "Phường Tam Điệp",
            "provinceCode": "37"
        },
        {
            "code": "14365",
            "name": "Phường Trung Sơn",
            "provinceCode": "37"
        },
        {
            "code": "14371",
            "name": "Phường Yên Sơn",
            "provinceCode": "37"
        },
        {
            "code": "14389",
            "name": "Xã Gia Lâm",
            "provinceCode": "37"
        },
        {
            "code": "14401",
            "name": "Xã Gia Tường",
            "provinceCode": "37"
        },
        {
            "code": "14404",
            "name": "Xã Cúc Phương",
            "provinceCode": "37"
        },
        {
            "code": "14407",
            "name": "Xã Phú Sơn",
            "provinceCode": "37"
        },
        {
            "code": "14428",
            "name": "Xã Nho Quan",
            "provinceCode": "37"
        },
        {
            "code": "14434",
            "name": "Xã Thanh Sơn",
            "provinceCode": "37"
        },
        {
            "code": "14452",
            "name": "Xã Quỳnh Lưu",
            "provinceCode": "37"
        },
        {
            "code": "14458",
            "name": "Xã Phú Long",
            "provinceCode": "37"
        },
        {
            "code": "14464",
            "name": "Xã Gia Viễn",
            "provinceCode": "37"
        },
        {
            "code": "14482",
            "name": "Xã Gia Hưng",
            "provinceCode": "37"
        },
        {
            "code": "14488",
            "name": "Xã Gia Vân",
            "provinceCode": "37"
        },
        {
            "code": "14494",
            "name": "Xã Gia Trấn",
            "provinceCode": "37"
        },
        {
            "code": "14500",
            "name": "Xã Đại Hoàng",
            "provinceCode": "37"
        },
        {
            "code": "14524",
            "name": "Xã Gia Phong",
            "provinceCode": "37"
        },
        {
            "code": "14533",
            "name": "Phường Tây Hoa Lư",
            "provinceCode": "37"
        },
        {
            "code": "14560",
            "name": "Xã Yên Khánh",
            "provinceCode": "37"
        },
        {
            "code": "14563",
            "name": "Xã Khánh Thiện",
            "provinceCode": "37"
        },
        {
            "code": "14566",
            "name": "Phường Đông Hoa Lư",
            "provinceCode": "37"
        },
        {
            "code": "14608",
            "name": "Xã Khánh Trung",
            "provinceCode": "37"
        },
        {
            "code": "14611",
            "name": "Xã Khánh Nhạc",
            "provinceCode": "37"
        },
        {
            "code": "14614",
            "name": "Xã Khánh Hội",
            "provinceCode": "37"
        },
        {
            "code": "14620",
            "name": "Xã Phát Diệm",
            "provinceCode": "37"
        },
        {
            "code": "14623",
            "name": "Xã Bình Minh",
            "provinceCode": "37"
        },
        {
            "code": "14638",
            "name": "Xã Kim Sơn",
            "provinceCode": "37"
        },
        {
            "code": "14647",
            "name": "Xã Quang Thiện",
            "provinceCode": "37"
        },
        {
            "code": "14653",
            "name": "Xã Chất Bình",
            "provinceCode": "37"
        },
        {
            "code": "14674",
            "name": "Xã Lai Thành",
            "provinceCode": "37"
        },
        {
            "code": "14677",
            "name": "Xã Định Hóa",
            "provinceCode": "37"
        },
        {
            "code": "14698",
            "name": "Xã Kim Đông",
            "provinceCode": "37"
        },
        {
            "code": "14701",
            "name": "Xã Yên Mô",
            "provinceCode": "37"
        },
        {
            "code": "14725",
            "name": "Phường Yên Thắng",
            "provinceCode": "37"
        },
        {
            "code": "14728",
            "name": "Xã Yên Từ",
            "provinceCode": "37"
        },
        {
            "code": "14743",
            "name": "Xã Yên Mạc",
            "provinceCode": "37"
        },
        {
            "code": "14746",
            "name": "Xã Đồng Thái",
            "provinceCode": "37"
        },
        {
            "code": "14758",
            "name": "Phường Hàm Rồng",
            "provinceCode": "38"
        },
        {
            "code": "14797",
            "name": "Phường Hạc Thành",
            "provinceCode": "38"
        },
        {
            "code": "14812",
            "name": "Phường Bỉm Sơn",
            "provinceCode": "38"
        },
        {
            "code": "14818",
            "name": "Phường Quang Trung",
            "provinceCode": "38"
        },
        {
            "code": "14845",
            "name": "Xã Mường Lát",
            "provinceCode": "38"
        },
        {
            "code": "14848",
            "name": "Xã Tam Chung",
            "provinceCode": "38"
        },
        {
            "code": "14854",
            "name": "Xã Mường Lý",
            "provinceCode": "38"
        },
        {
            "code": "14857",
            "name": "Xã Trung Lý",
            "provinceCode": "38"
        },
        {
            "code": "14860",
            "name": "Xã Quang Chiểu",
            "provinceCode": "38"
        },
        {
            "code": "14863",
            "name": "Xã Pù Nhi",
            "provinceCode": "38"
        },
        {
            "code": "14864",
            "name": "Xã Nhi Sơn",
            "provinceCode": "38"
        },
        {
            "code": "14866",
            "name": "Xã Mường Chanh",
            "provinceCode": "38"
        },
        {
            "code": "14869",
            "name": "Xã Hồi Xuân",
            "provinceCode": "38"
        },
        {
            "code": "14872",
            "name": "Xã Trung Thành",
            "provinceCode": "38"
        },
        {
            "code": "14875",
            "name": "Xã Trung Sơn",
            "provinceCode": "38"
        },
        {
            "code": "14878",
            "name": "Xã Phú Lệ",
            "provinceCode": "38"
        },
        {
            "code": "14890",
            "name": "Xã Phú Xuân",
            "provinceCode": "38"
        },
        {
            "code": "14896",
            "name": "Xã Hiền Kiệt",
            "provinceCode": "38"
        },
        {
            "code": "14902",
            "name": "Xã Nam Xuân",
            "provinceCode": "38"
        },
        {
            "code": "14908",
            "name": "Xã Thiên Phủ",
            "provinceCode": "38"
        },
        {
            "code": "14923",
            "name": "Xã Bá Thước",
            "provinceCode": "38"
        },
        {
            "code": "14932",
            "name": "Xã Điền Quang",
            "provinceCode": "38"
        },
        {
            "code": "14950",
            "name": "Xã Điền Lư",
            "provinceCode": "38"
        },
        {
            "code": "14953",
            "name": "Xã Quý Lương",
            "provinceCode": "38"
        },
        {
            "code": "14956",
            "name": "Xã Pù Luông",
            "provinceCode": "38"
        },
        {
            "code": "14959",
            "name": "Xã Cổ Lũng",
            "provinceCode": "38"
        },
        {
            "code": "14974",
            "name": "Xã Văn Nho",
            "provinceCode": "38"
        },
        {
            "code": "14980",
            "name": "Xã Thiết Ống",
            "provinceCode": "38"
        },
        {
            "code": "15001",
            "name": "Xã Trung Hạ",
            "provinceCode": "38"
        },
        {
            "code": "15007",
            "name": "Xã Tam Thanh",
            "provinceCode": "38"
        },
        {
            "code": "15010",
            "name": "Xã Sơn Thủy",
            "provinceCode": "38"
        },
        {
            "code": "15013",
            "name": "Xã Na Mèo",
            "provinceCode": "38"
        },
        {
            "code": "15016",
            "name": "Xã Quan Sơn",
            "provinceCode": "38"
        },
        {
            "code": "15019",
            "name": "Xã Tam Lư",
            "provinceCode": "38"
        },
        {
            "code": "15022",
            "name": "Xã Sơn Điện",
            "provinceCode": "38"
        },
        {
            "code": "15025",
            "name": "Xã Mường Mìn",
            "provinceCode": "38"
        },
        {
            "code": "15031",
            "name": "Xã Yên Khương",
            "provinceCode": "38"
        },
        {
            "code": "15034",
            "name": "Xã Yên Thắng",
            "provinceCode": "38"
        },
        {
            "code": "15043",
            "name": "Xã Giao An",
            "provinceCode": "38"
        },
        {
            "code": "15049",
            "name": "Xã Văn Phú",
            "provinceCode": "38"
        },
        {
            "code": "15055",
            "name": "Xã Linh Sơn",
            "provinceCode": "38"
        },
        {
            "code": "15058",
            "name": "Xã Đồng Lương",
            "provinceCode": "38"
        },
        {
            "code": "15061",
            "name": "Xã Ngọc Lặc",
            "provinceCode": "38"
        },
        {
            "code": "15085",
            "name": "Xã Thạch Lập",
            "provinceCode": "38"
        },
        {
            "code": "15091",
            "name": "Xã Ngọc Liên",
            "provinceCode": "38"
        },
        {
            "code": "15106",
            "name": "Xã Nguyệt Ấn",
            "provinceCode": "38"
        },
        {
            "code": "15112",
            "name": "Xã Kiên Thọ",
            "provinceCode": "38"
        },
        {
            "code": "15124",
            "name": "Xã Minh Sơn",
            "provinceCode": "38"
        },
        {
            "code": "15127",
            "name": "Xã Cẩm Thủy",
            "provinceCode": "38"
        },
        {
            "code": "15142",
            "name": "Xã Cẩm Thạch",
            "provinceCode": "38"
        },
        {
            "code": "15148",
            "name": "Xã Cẩm Tú",
            "provinceCode": "38"
        },
        {
            "code": "15163",
            "name": "Xã Cẩm Vân",
            "provinceCode": "38"
        },
        {
            "code": "15178",
            "name": "Xã Cẩm Tân",
            "provinceCode": "38"
        },
        {
            "code": "15187",
            "name": "Xã Kim Tân",
            "provinceCode": "38"
        },
        {
            "code": "15190",
            "name": "Xã Vân Du",
            "provinceCode": "38"
        },
        {
            "code": "15199",
            "name": "Xã Thạch Quảng",
            "provinceCode": "38"
        },
        {
            "code": "15211",
            "name": "Xã Thạch Bình",
            "provinceCode": "38"
        },
        {
            "code": "15229",
            "name": "Xã Thành Vinh",
            "provinceCode": "38"
        },
        {
            "code": "15250",
            "name": "Xã Ngọc Trạo",
            "provinceCode": "38"
        },
        {
            "code": "15271",
            "name": "Xã Hà Trung",
            "provinceCode": "38"
        },
        {
            "code": "15274",
            "name": "Xã Hà Long",
            "provinceCode": "38"
        },
        {
            "code": "15286",
            "name": "Xã Hoạt Giang",
            "provinceCode": "38"
        },
        {
            "code": "15298",
            "name": "Xã Lĩnh Toại",
            "provinceCode": "38"
        },
        {
            "code": "15316",
            "name": "Xã Tống Sơn",
            "provinceCode": "38"
        },
        {
            "code": "15349",
            "name": "Xã Vĩnh Lộc",
            "provinceCode": "38"
        },
        {
            "code": "15361",
            "name": "Xã Tây Đô",
            "provinceCode": "38"
        },
        {
            "code": "15382",
            "name": "Xã Biện Thượng",
            "provinceCode": "38"
        },
        {
            "code": "15409",
            "name": "Xã Yên Phú",
            "provinceCode": "38"
        },
        {
            "code": "15412",
            "name": "Xã Quý Lộc",
            "provinceCode": "38"
        },
        {
            "code": "15421",
            "name": "Xã Yên Trường",
            "provinceCode": "38"
        },
        {
            "code": "15442",
            "name": "Xã Yên Ninh",
            "provinceCode": "38"
        },
        {
            "code": "15448",
            "name": "Xã Định Hòa",
            "provinceCode": "38"
        },
        {
            "code": "15457",
            "name": "Xã Định Tân",
            "provinceCode": "38"
        },
        {
            "code": "15469",
            "name": "Xã Yên Định",
            "provinceCode": "38"
        },
        {
            "code": "15499",
            "name": "Xã Thọ Xuân",
            "provinceCode": "38"
        },
        {
            "code": "15505",
            "name": "Xã Thọ Long",
            "provinceCode": "38"
        },
        {
            "code": "15520",
            "name": "Xã Xuân Hòa",
            "provinceCode": "38"
        },
        {
            "code": "15544",
            "name": "Xã Lam Sơn",
            "provinceCode": "38"
        },
        {
            "code": "15553",
            "name": "Xã Sao Vàng",
            "provinceCode": "38"
        },
        {
            "code": "15568",
            "name": "Xã Thọ Lập",
            "provinceCode": "38"
        },
        {
            "code": "15574",
            "name": "Xã Xuân Tín",
            "provinceCode": "38"
        },
        {
            "code": "15592",
            "name": "Xã Xuân Lập",
            "provinceCode": "38"
        },
        {
            "code": "15607",
            "name": "Xã Bát Mọt",
            "provinceCode": "38"
        },
        {
            "code": "15610",
            "name": "Xã Yên Nhân",
            "provinceCode": "38"
        },
        {
            "code": "15622",
            "name": "Xã Vạn Xuân",
            "provinceCode": "38"
        },
        {
            "code": "15628",
            "name": "Xã Lương Sơn",
            "provinceCode": "38"
        },
        {
            "code": "15634",
            "name": "Xã Luận Thành",
            "provinceCode": "38"
        },
        {
            "code": "15643",
            "name": "Xã Thắng Lộc",
            "provinceCode": "38"
        },
        {
            "code": "15646",
            "name": "Xã Thường Xuân",
            "provinceCode": "38"
        },
        {
            "code": "15658",
            "name": "Xã Xuân Chinh",
            "provinceCode": "38"
        },
        {
            "code": "15661",
            "name": "Xã Tân Thành",
            "provinceCode": "38"
        },
        {
            "code": "15664",
            "name": "Xã Triệu Sơn",
            "provinceCode": "38"
        },
        {
            "code": "15667",
            "name": "Xã Thọ Bình",
            "provinceCode": "38"
        },
        {
            "code": "15682",
            "name": "Xã Hợp Tiến",
            "provinceCode": "38"
        },
        {
            "code": "15715",
            "name": "Xã Tân Ninh",
            "provinceCode": "38"
        },
        {
            "code": "15724",
            "name": "Xã Đồng Tiến",
            "provinceCode": "38"
        },
        {
            "code": "15754",
            "name": "Xã Thọ Ngọc",
            "provinceCode": "38"
        },
        {
            "code": "15763",
            "name": "Xã Thọ Phú",
            "provinceCode": "38"
        },
        {
            "code": "15766",
            "name": "Xã An Nông",
            "provinceCode": "38"
        },
        {
            "code": "15772",
            "name": "Xã Thiệu Hóa",
            "provinceCode": "38"
        },
        {
            "code": "15778",
            "name": "Xã Thiệu Tiến",
            "provinceCode": "38"
        },
        {
            "code": "15796",
            "name": "Xã Thiệu Quang",
            "provinceCode": "38"
        },
        {
            "code": "15820",
            "name": "Xã Thiệu Toán",
            "provinceCode": "38"
        },
        {
            "code": "15835",
            "name": "Xã Thiệu Trung",
            "provinceCode": "38"
        },
        {
            "code": "15853",
            "name": "Phường Đông Tiến",
            "provinceCode": "38"
        },
        {
            "code": "15865",
            "name": "Xã Hoằng Hóa",
            "provinceCode": "38"
        },
        {
            "code": "15880",
            "name": "Xã Hoằng Giang",
            "provinceCode": "38"
        },
        {
            "code": "15889",
            "name": "Xã Hoằng Phú",
            "provinceCode": "38"
        },
        {
            "code": "15910",
            "name": "Xã Hoằng Sơn",
            "provinceCode": "38"
        },
        {
            "code": "15925",
            "name": "Phường Nguyệt Viên",
            "provinceCode": "38"
        },
        {
            "code": "15961",
            "name": "Xã Hoằng Lộc",
            "provinceCode": "38"
        },
        {
            "code": "15976",
            "name": "Xã Hoằng Châu",
            "provinceCode": "38"
        },
        {
            "code": "15991",
            "name": "Xã Hoằng Tiến",
            "provinceCode": "38"
        },
        {
            "code": "16000",
            "name": "Xã Hoằng Thanh",
            "provinceCode": "38"
        },
        {
            "code": "16012",
            "name": "Xã Hậu Lộc",
            "provinceCode": "38"
        },
        {
            "code": "16021",
            "name": "Xã Triệu Lộc",
            "provinceCode": "38"
        },
        {
            "code": "16033",
            "name": "Xã Đông Thành",
            "provinceCode": "38"
        },
        {
            "code": "16072",
            "name": "Xã Hoa Lộc",
            "provinceCode": "38"
        },
        {
            "code": "16078",
            "name": "Xã Vạn Lộc",
            "provinceCode": "38"
        },
        {
            "code": "16093",
            "name": "Xã Nga Sơn",
            "provinceCode": "38"
        },
        {
            "code": "16108",
            "name": "Xã Tân Tiến",
            "provinceCode": "38"
        },
        {
            "code": "16114",
            "name": "Xã Nga Thắng",
            "provinceCode": "38"
        },
        {
            "code": "16138",
            "name": "Xã Hồ Vương",
            "provinceCode": "38"
        },
        {
            "code": "16144",
            "name": "Xã Nga An",
            "provinceCode": "38"
        },
        {
            "code": "16171",
            "name": "Xã Ba Đình",
            "provinceCode": "38"
        },
        {
            "code": "16174",
            "name": "Xã Như Xuân",
            "provinceCode": "38"
        },
        {
            "code": "16177",
            "name": "Xã Xuân Bình",
            "provinceCode": "38"
        },
        {
            "code": "16186",
            "name": "Xã Hóa Quỳ",
            "provinceCode": "38"
        },
        {
            "code": "16213",
            "name": "Xã Thanh Phong",
            "provinceCode": "38"
        },
        {
            "code": "16222",
            "name": "Xã Thanh Quân",
            "provinceCode": "38"
        },
        {
            "code": "16225",
            "name": "Xã Thượng Ninh",
            "provinceCode": "38"
        },
        {
            "code": "16228",
            "name": "Xã Như Thanh",
            "provinceCode": "38"
        },
        {
            "code": "16234",
            "name": "Xã Xuân Du",
            "provinceCode": "38"
        },
        {
            "code": "16249",
            "name": "Xã Mậu Lâm",
            "provinceCode": "38"
        },
        {
            "code": "16258",
            "name": "Xã Xuân Thái",
            "provinceCode": "38"
        },
        {
            "code": "16264",
            "name": "Xã Yên Thọ",
            "provinceCode": "38"
        },
        {
            "code": "16273",
            "name": "Xã Thanh Kỳ",
            "provinceCode": "38"
        },
        {
            "code": "16279",
            "name": "Xã Nông Cống",
            "provinceCode": "38"
        },
        {
            "code": "16297",
            "name": "Xã Trung Chính",
            "provinceCode": "38"
        },
        {
            "code": "16309",
            "name": "Xã Thắng Lợi",
            "provinceCode": "38"
        },
        {
            "code": "16342",
            "name": "Xã Thăng Bình",
            "provinceCode": "38"
        },
        {
            "code": "16348",
            "name": "Xã Trường Văn",
            "provinceCode": "38"
        },
        {
            "code": "16363",
            "name": "Xã Tượng Lĩnh",
            "provinceCode": "38"
        },
        {
            "code": "16369",
            "name": "Xã Công Chính",
            "provinceCode": "38"
        },
        {
            "code": "16378",
            "name": "Phường Đông Sơn",
            "provinceCode": "38"
        },
        {
            "code": "16417",
            "name": "Phường Đông Quang",
            "provinceCode": "38"
        },
        {
            "code": "16438",
            "name": "Xã Lưu Vệ",
            "provinceCode": "38"
        },
        {
            "code": "16480",
            "name": "Xã Quảng Yên",
            "provinceCode": "38"
        },
        {
            "code": "16489",
            "name": "Xã Quảng Chính",
            "provinceCode": "38"
        },
        {
            "code": "16498",
            "name": "Xã Quảng Ngọc",
            "provinceCode": "38"
        },
        {
            "code": "16516",
            "name": "Phường Nam Sầm Sơn",
            "provinceCode": "38"
        },
        {
            "code": "16522",
            "name": "Phường Quảng Phú",
            "provinceCode": "38"
        },
        {
            "code": "16531",
            "name": "Phường Sầm Sơn",
            "provinceCode": "38"
        },
        {
            "code": "16540",
            "name": "Xã Quảng Ninh",
            "provinceCode": "38"
        },
        {
            "code": "16543",
            "name": "Xã Quảng Bình",
            "provinceCode": "38"
        },
        {
            "code": "16549",
            "name": "Xã Tiên Trang",
            "provinceCode": "38"
        },
        {
            "code": "16561",
            "name": "Phường Tĩnh Gia",
            "provinceCode": "38"
        },
        {
            "code": "16576",
            "name": "Phường Ngọc Sơn",
            "provinceCode": "38"
        },
        {
            "code": "16591",
            "name": "Xã Các Sơn",
            "provinceCode": "38"
        },
        {
            "code": "16594",
            "name": "Phường Tân Dân",
            "provinceCode": "38"
        },
        {
            "code": "16597",
            "name": "Phường Hải Lĩnh",
            "provinceCode": "38"
        },
        {
            "code": "16609",
            "name": "Phường Đào Duy Từ",
            "provinceCode": "38"
        },
        {
            "code": "16624",
            "name": "Phường Trúc Lâm",
            "provinceCode": "38"
        },
        {
            "code": "16636",
            "name": "Xã Trường Lâm",
            "provinceCode": "38"
        },
        {
            "code": "16645",
            "name": "Phường Hải Bình",
            "provinceCode": "38"
        },
        {
            "code": "16654",
            "name": "Phường Nghi Sơn",
            "provinceCode": "38"
        },
        {
            "code": "16681",
            "name": "Phường Thành Vinh",
            "provinceCode": "40"
        },
        {
            "code": "16690",
            "name": "Phường Trường Vinh",
            "provinceCode": "40"
        },
        {
            "code": "16702",
            "name": "Phường Vinh Phú",
            "provinceCode": "40"
        },
        {
            "code": "16708",
            "name": "Phường Vinh Lộc",
            "provinceCode": "40"
        },
        {
            "code": "16732",
            "name": "Phường Cửa Lò",
            "provinceCode": "40"
        },
        {
            "code": "16738",
            "name": "Xã Quế Phong",
            "provinceCode": "40"
        },
        {
            "code": "16744",
            "name": "Xã Thông Thụ",
            "provinceCode": "40"
        },
        {
            "code": "16750",
            "name": "Xã Tiền Phong",
            "provinceCode": "40"
        },
        {
            "code": "16756",
            "name": "Xã Tri Lễ",
            "provinceCode": "40"
        },
        {
            "code": "16774",
            "name": "Xã Mường Quàng",
            "provinceCode": "40"
        },
        {
            "code": "16777",
            "name": "Xã Quỳ Châu",
            "provinceCode": "40"
        },
        {
            "code": "16792",
            "name": "Xã Châu Tiến",
            "provinceCode": "40"
        },
        {
            "code": "16801",
            "name": "Xã Hùng Chân",
            "provinceCode": "40"
        },
        {
            "code": "16804",
            "name": "Xã Châu Bình",
            "provinceCode": "40"
        },
        {
            "code": "16813",
            "name": "Xã Mường Xén",
            "provinceCode": "40"
        },
        {
            "code": "16816",
            "name": "Xã Mỹ Lý",
            "provinceCode": "40"
        },
        {
            "code": "16819",
            "name": "Xã Bắc Lý",
            "provinceCode": "40"
        },
        {
            "code": "16822",
            "name": "Xã Keng Đu",
            "provinceCode": "40"
        },
        {
            "code": "16828",
            "name": "Xã Huồi Tụ",
            "provinceCode": "40"
        },
        {
            "code": "16831",
            "name": "Xã Mường Lống",
            "provinceCode": "40"
        },
        {
            "code": "16834",
            "name": "Xã Na Loi",
            "provinceCode": "40"
        },
        {
            "code": "16837",
            "name": "Xã Nậm Cắn",
            "provinceCode": "40"
        },
        {
            "code": "16849",
            "name": "Xã Hữu Kiệm",
            "provinceCode": "40"
        },
        {
            "code": "16855",
            "name": "Xã Chiêu Lưu",
            "provinceCode": "40"
        },
        {
            "code": "16858",
            "name": "Xã Mường Típ",
            "provinceCode": "40"
        },
        {
            "code": "16870",
            "name": "Xã Na Ngoi",
            "provinceCode": "40"
        },
        {
            "code": "16876",
            "name": "Xã Tương Dương",
            "provinceCode": "40"
        },
        {
            "code": "16882",
            "name": "Xã Nhôn Mai",
            "provinceCode": "40"
        },
        {
            "code": "16885",
            "name": "Xã Hữu Khuông",
            "provinceCode": "40"
        },
        {
            "code": "16903",
            "name": "Xã Nga My",
            "provinceCode": "40"
        },
        {
            "code": "16906",
            "name": "Xã Lượng Minh",
            "provinceCode": "40"
        },
        {
            "code": "16909",
            "name": "Xã Yên Hòa",
            "provinceCode": "40"
        },
        {
            "code": "16912",
            "name": "Xã Yên Na",
            "provinceCode": "40"
        },
        {
            "code": "16933",
            "name": "Xã Tam Quang",
            "provinceCode": "40"
        },
        {
            "code": "16936",
            "name": "Xã Tam Thái",
            "provinceCode": "40"
        },
        {
            "code": "16939",
            "name": "Phường Thái Hòa",
            "provinceCode": "40"
        },
        {
            "code": "16941",
            "name": "Xã Nghĩa Đàn",
            "provinceCode": "40"
        },
        {
            "code": "16951",
            "name": "Xã Nghĩa Lâm",
            "provinceCode": "40"
        },
        {
            "code": "16969",
            "name": "Xã Nghĩa Thọ",
            "provinceCode": "40"
        },
        {
            "code": "16972",
            "name": "Xã Nghĩa Hưng",
            "provinceCode": "40"
        },
        {
            "code": "16975",
            "name": "Xã Nghĩa Mai",
            "provinceCode": "40"
        },
        {
            "code": "17011",
            "name": "Phường Tây Hiếu",
            "provinceCode": "40"
        },
        {
            "code": "17017",
            "name": "Xã Đông Hiếu",
            "provinceCode": "40"
        },
        {
            "code": "17029",
            "name": "Xã Nghĩa Lộc",
            "provinceCode": "40"
        },
        {
            "code": "17032",
            "name": "Xã Nghĩa Khánh",
            "provinceCode": "40"
        },
        {
            "code": "17035",
            "name": "Xã Quỳ Hợp",
            "provinceCode": "40"
        },
        {
            "code": "17044",
            "name": "Xã Châu Hồng",
            "provinceCode": "40"
        },
        {
            "code": "17056",
            "name": "Xã Châu Lộc",
            "provinceCode": "40"
        },
        {
            "code": "17059",
            "name": "Xã Tam Hợp",
            "provinceCode": "40"
        },
        {
            "code": "17071",
            "name": "Xã Minh Hợp",
            "provinceCode": "40"
        },
        {
            "code": "17077",
            "name": "Xã Mường Ham",
            "provinceCode": "40"
        },
        {
            "code": "17089",
            "name": "Xã Mường Chọng",
            "provinceCode": "40"
        },
        {
            "code": "17110",
            "name": "Phường Hoàng Mai",
            "provinceCode": "40"
        },
        {
            "code": "17125",
            "name": "Phường Quỳnh Mai",
            "provinceCode": "40"
        },
        {
            "code": "17128",
            "name": "Phường Tân Mai",
            "provinceCode": "40"
        },
        {
            "code": "17143",
            "name": "Xã Quỳnh Văn",
            "provinceCode": "40"
        },
        {
            "code": "17149",
            "name": "Xã Quỳnh Tam",
            "provinceCode": "40"
        },
        {
            "code": "17170",
            "name": "Xã Quỳnh Sơn",
            "provinceCode": "40"
        },
        {
            "code": "17176",
            "name": "Xã Quỳnh Anh",
            "provinceCode": "40"
        },
        {
            "code": "17179",
            "name": "Xã Quỳnh Lưu",
            "provinceCode": "40"
        },
        {
            "code": "17212",
            "name": "Xã Quỳnh Phú",
            "provinceCode": "40"
        },
        {
            "code": "17224",
            "name": "Xã Quỳnh Thắng",
            "provinceCode": "40"
        },
        {
            "code": "17230",
            "name": "Xã Bình Chuẩn",
            "provinceCode": "40"
        },
        {
            "code": "17239",
            "name": "Xã Mậu Thạch",
            "provinceCode": "40"
        },
        {
            "code": "17242",
            "name": "Xã Cam Phục",
            "provinceCode": "40"
        },
        {
            "code": "17248",
            "name": "Xã Châu Khê",
            "provinceCode": "40"
        },
        {
            "code": "17254",
            "name": "Xã Con Cuông",
            "provinceCode": "40"
        },
        {
            "code": "17263",
            "name": "Xã Môn Sơn",
            "provinceCode": "40"
        },
        {
            "code": "17266",
            "name": "Xã Tân Kỳ",
            "provinceCode": "40"
        },
        {
            "code": "17272",
            "name": "Xã Tân Phú",
            "provinceCode": "40"
        },
        {
            "code": "17278",
            "name": "Xã Giai Xuân",
            "provinceCode": "40"
        },
        {
            "code": "17284",
            "name": "Xã Nghĩa Đồng",
            "provinceCode": "40"
        },
        {
            "code": "17287",
            "name": "Xã Tiên Đồng",
            "provinceCode": "40"
        },
        {
            "code": "17305",
            "name": "Xã Tân An",
            "provinceCode": "40"
        },
        {
            "code": "17326",
            "name": "Xã Nghĩa Hành",
            "provinceCode": "40"
        },
        {
            "code": "17329",
            "name": "Xã Anh Sơn",
            "provinceCode": "40"
        },
        {
            "code": "17335",
            "name": "Xã Thành Bình Thọ",
            "provinceCode": "40"
        },
        {
            "code": "17344",
            "name": "Xã Nhân Hòa",
            "provinceCode": "40"
        },
        {
            "code": "17357",
            "name": "Xã Vĩnh Tường",
            "provinceCode": "40"
        },
        {
            "code": "17365",
            "name": "Xã Anh Sơn Đông",
            "provinceCode": "40"
        },
        {
            "code": "17380",
            "name": "Xã Yên Xuân",
            "provinceCode": "40"
        },
        {
            "code": "17395",
            "name": "Xã Hùng Châu",
            "provinceCode": "40"
        },
        {
            "code": "17416",
            "name": "Xã Đức Châu",
            "provinceCode": "40"
        },
        {
            "code": "17419",
            "name": "Xã Hải Châu",
            "provinceCode": "40"
        },
        {
            "code": "17443",
            "name": "Xã Quảng Châu",
            "provinceCode": "40"
        },
        {
            "code": "17464",
            "name": "Xã Diễn Châu",
            "provinceCode": "40"
        },
        {
            "code": "17476",
            "name": "Xã Minh Châu",
            "provinceCode": "40"
        },
        {
            "code": "17479",
            "name": "Xã An Châu",
            "provinceCode": "40"
        },
        {
            "code": "17488",
            "name": "Xã Tân Châu",
            "provinceCode": "40"
        },
        {
            "code": "17506",
            "name": "Xã Yên Thành",
            "provinceCode": "40"
        },
        {
            "code": "17515",
            "name": "Xã Bình Minh",
            "provinceCode": "40"
        },
        {
            "code": "17521",
            "name": "Xã Quang Đồng",
            "provinceCode": "40"
        },
        {
            "code": "17524",
            "name": "Xã Giai Lạc",
            "provinceCode": "40"
        },
        {
            "code": "17530",
            "name": "Xã Đông Thành",
            "provinceCode": "40"
        },
        {
            "code": "17560",
            "name": "Xã Vân Du",
            "provinceCode": "40"
        },
        {
            "code": "17569",
            "name": "Xã Quan Thành",
            "provinceCode": "40"
        },
        {
            "code": "17605",
            "name": "Xã Hợp Minh",
            "provinceCode": "40"
        },
        {
            "code": "17611",
            "name": "Xã Vân Tụ",
            "provinceCode": "40"
        },
        {
            "code": "17623",
            "name": "Xã Bạch Ngọc",
            "provinceCode": "40"
        },
        {
            "code": "17641",
            "name": "Xã Lương Sơn",
            "provinceCode": "40"
        },
        {
            "code": "17662",
            "name": "Xã Đô Lương",
            "provinceCode": "40"
        },
        {
            "code": "17677",
            "name": "Xã Văn Hiến",
            "provinceCode": "40"
        },
        {
            "code": "17689",
            "name": "Xã Thuần Trung",
            "provinceCode": "40"
        },
        {
            "code": "17707",
            "name": "Xã Bạch Hà",
            "provinceCode": "40"
        },
        {
            "code": "17713",
            "name": "Xã Đại Đồng",
            "provinceCode": "40"
        },
        {
            "code": "17722",
            "name": "Xã Hạnh Lâm",
            "provinceCode": "40"
        },
        {
            "code": "17728",
            "name": "Xã Cát Ngạn",
            "provinceCode": "40"
        },
        {
            "code": "17743",
            "name": "Xã Tam Đồng",
            "provinceCode": "40"
        },
        {
            "code": "17759",
            "name": "Xã Sơn Lâm",
            "provinceCode": "40"
        },
        {
            "code": "17770",
            "name": "Xã Hoa Quân",
            "provinceCode": "40"
        },
        {
            "code": "17779",
            "name": "Xã Xuân Lâm",
            "provinceCode": "40"
        },
        {
            "code": "17791",
            "name": "Xã Kim Bảng",
            "provinceCode": "40"
        },
        {
            "code": "17818",
            "name": "Xã Bích Hào",
            "provinceCode": "40"
        },
        {
            "code": "17827",
            "name": "Xã Nghi Lộc",
            "provinceCode": "40"
        },
        {
            "code": "17833",
            "name": "Xã Hải Lộc",
            "provinceCode": "40"
        },
        {
            "code": "17842",
            "name": "Xã Thần Lĩnh",
            "provinceCode": "40"
        },
        {
            "code": "17854",
            "name": "Xã Văn Kiều",
            "provinceCode": "40"
        },
        {
            "code": "17857",
            "name": "Xã Phúc Lộc",
            "provinceCode": "40"
        },
        {
            "code": "17866",
            "name": "Xã Trung Lộc",
            "provinceCode": "40"
        },
        {
            "code": "17878",
            "name": "Xã Đông Lộc",
            "provinceCode": "40"
        },
        {
            "code": "17920",
            "name": "Phường Vinh Hưng",
            "provinceCode": "40"
        },
        {
            "code": "17935",
            "name": "Xã Nam Đàn",
            "provinceCode": "40"
        },
        {
            "code": "17944",
            "name": "Xã Đại Huệ",
            "provinceCode": "40"
        },
        {
            "code": "17950",
            "name": "Xã Vạn An",
            "provinceCode": "40"
        },
        {
            "code": "17971",
            "name": "Xã Kim Liên",
            "provinceCode": "40"
        },
        {
            "code": "17989",
            "name": "Xã Thiên Nhẫn",
            "provinceCode": "40"
        },
        {
            "code": "18001",
            "name": "Xã Hưng Nguyên",
            "provinceCode": "40"
        },
        {
            "code": "18007",
            "name": "Xã Yên Trung",
            "provinceCode": "40"
        },
        {
            "code": "18028",
            "name": "Xã Hưng Nguyên Nam",
            "provinceCode": "40"
        },
        {
            "code": "18040",
            "name": "Xã Lam Thành",
            "provinceCode": "40"
        },
        {
            "code": "18073",
            "name": "Phường Thành Sen",
            "provinceCode": "42"
        },
        {
            "code": "18100",
            "name": "Phường Trần Phú",
            "provinceCode": "42"
        },
        {
            "code": "18115",
            "name": "Phường Bắc Hồng Lĩnh",
            "provinceCode": "42"
        },
        {
            "code": "18118",
            "name": "Phường Nam Hồng Lĩnh",
            "provinceCode": "42"
        },
        {
            "code": "18133",
            "name": "Xã Hương Sơn",
            "provinceCode": "42"
        },
        {
            "code": "18160",
            "name": "Xã Sơn Hồng",
            "provinceCode": "42"
        },
        {
            "code": "18163",
            "name": "Xã Sơn Tiến",
            "provinceCode": "42"
        },
        {
            "code": "18172",
            "name": "Xã Sơn Tây",
            "provinceCode": "42"
        },
        {
            "code": "18184",
            "name": "Xã Sơn Giang",
            "provinceCode": "42"
        },
        {
            "code": "18196",
            "name": "Xã Sơn Kim 1",
            "provinceCode": "42"
        },
        {
            "code": "18199",
            "name": "Xã Sơn Kim 2",
            "provinceCode": "42"
        },
        {
            "code": "18202",
            "name": "Xã Tứ Mỹ",
            "provinceCode": "42"
        },
        {
            "code": "18223",
            "name": "Xã Kim Hoa",
            "provinceCode": "42"
        },
        {
            "code": "18229",
            "name": "Xã Đức Thọ",
            "provinceCode": "42"
        },
        {
            "code": "18244",
            "name": "Xã Đức Minh",
            "provinceCode": "42"
        },
        {
            "code": "18262",
            "name": "Xã Đức Quang",
            "provinceCode": "42"
        },
        {
            "code": "18277",
            "name": "Xã Đức Thịnh",
            "provinceCode": "42"
        },
        {
            "code": "18304",
            "name": "Xã Đức Đồng",
            "provinceCode": "42"
        },
        {
            "code": "18313",
            "name": "Xã Vũ Quang",
            "provinceCode": "42"
        },
        {
            "code": "18322",
            "name": "Xã Mai Hoa",
            "provinceCode": "42"
        },
        {
            "code": "18328",
            "name": "Xã Thượng Đức",
            "provinceCode": "42"
        },
        {
            "code": "18352",
            "name": "Xã Nghi Xuân",
            "provinceCode": "42"
        },
        {
            "code": "18364",
            "name": "Xã Đan Hải",
            "provinceCode": "42"
        },
        {
            "code": "18373",
            "name": "Xã Tiên Điền",
            "provinceCode": "42"
        },
        {
            "code": "18394",
            "name": "Xã Cổ Đạm",
            "provinceCode": "42"
        },
        {
            "code": "18406",
            "name": "Xã Can Lộc",
            "provinceCode": "42"
        },
        {
            "code": "18409",
            "name": "Xã Hồng Lộc",
            "provinceCode": "42"
        },
        {
            "code": "18418",
            "name": "Xã Tùng Lộc",
            "provinceCode": "42"
        },
        {
            "code": "18436",
            "name": "Xã Trường Lưu",
            "provinceCode": "42"
        },
        {
            "code": "18466",
            "name": "Xã Gia Hanh",
            "provinceCode": "42"
        },
        {
            "code": "18481",
            "name": "Xã Xuân Lộc",
            "provinceCode": "42"
        },
        {
            "code": "18484",
            "name": "Xã Đồng Lộc",
            "provinceCode": "42"
        },
        {
            "code": "18496",
            "name": "Xã Hương Khê",
            "provinceCode": "42"
        },
        {
            "code": "18502",
            "name": "Xã Hà Linh",
            "provinceCode": "42"
        },
        {
            "code": "18523",
            "name": "Xã Hương Bình",
            "provinceCode": "42"
        },
        {
            "code": "18532",
            "name": "Xã Hương Phố",
            "provinceCode": "42"
        },
        {
            "code": "18544",
            "name": "Xã Hương Xuân",
            "provinceCode": "42"
        },
        {
            "code": "18547",
            "name": "Xã Phúc Trạch",
            "provinceCode": "42"
        },
        {
            "code": "18550",
            "name": "Xã Hương Đô",
            "provinceCode": "42"
        },
        {
            "code": "18562",
            "name": "Xã Thạch Hà",
            "provinceCode": "42"
        },
        {
            "code": "18568",
            "name": "Xã Lộc Hà",
            "provinceCode": "42"
        },
        {
            "code": "18583",
            "name": "Xã Mai Phụ",
            "provinceCode": "42"
        },
        {
            "code": "18586",
            "name": "Xã Đông Kinh",
            "provinceCode": "42"
        },
        {
            "code": "18601",
            "name": "Xã Việt Xuyên",
            "provinceCode": "42"
        },
        {
            "code": "18604",
            "name": "Xã Thạch Khê",
            "provinceCode": "42"
        },
        {
            "code": "18619",
            "name": "Xã Đồng Tiến",
            "provinceCode": "42"
        },
        {
            "code": "18628",
            "name": "Xã Thạch Lạc",
            "provinceCode": "42"
        },
        {
            "code": "18634",
            "name": "Xã Toàn Lưu",
            "provinceCode": "42"
        },
        {
            "code": "18652",
            "name": "Phường Hà Huy Tập",
            "provinceCode": "42"
        },
        {
            "code": "18667",
            "name": "Xã Thạch Xuân",
            "provinceCode": "42"
        },
        {
            "code": "18673",
            "name": "Xã Cẩm Xuyên",
            "provinceCode": "42"
        },
        {
            "code": "18676",
            "name": "Xã Thiên Cầm",
            "provinceCode": "42"
        },
        {
            "code": "18682",
            "name": "Xã Yên Hòa",
            "provinceCode": "42"
        },
        {
            "code": "18685",
            "name": "Xã Cẩm Bình",
            "provinceCode": "42"
        },
        {
            "code": "18736",
            "name": "Xã Cẩm Hưng",
            "provinceCode": "42"
        },
        {
            "code": "18739",
            "name": "Xã Cẩm Duệ",
            "provinceCode": "42"
        },
        {
            "code": "18742",
            "name": "Xã Cẩm Trung",
            "provinceCode": "42"
        },
        {
            "code": "18748",
            "name": "Xã Cẩm Lạc",
            "provinceCode": "42"
        },
        {
            "code": "18754",
            "name": "Phường Sông Trí",
            "provinceCode": "42"
        },
        {
            "code": "18766",
            "name": "Xã Kỳ Xuân",
            "provinceCode": "42"
        },
        {
            "code": "18775",
            "name": "Xã Kỳ Anh",
            "provinceCode": "42"
        },
        {
            "code": "18781",
            "name": "Phường Hải Ninh",
            "provinceCode": "42"
        },
        {
            "code": "18787",
            "name": "Xã Kỳ Văn",
            "provinceCode": "42"
        },
        {
            "code": "18790",
            "name": "Xã Kỳ Khang",
            "provinceCode": "42"
        },
        {
            "code": "18814",
            "name": "Xã Kỳ Hoa",
            "provinceCode": "42"
        },
        {
            "code": "18823",
            "name": "Phường Vũng Áng",
            "provinceCode": "42"
        },
        {
            "code": "18832",
            "name": "Phường Hoành Sơn",
            "provinceCode": "42"
        },
        {
            "code": "18838",
            "name": "Xã Kỳ Lạc",
            "provinceCode": "42"
        },
        {
            "code": "18844",
            "name": "Xã Kỳ Thượng",
            "provinceCode": "42"
        },
        {
            "code": "18859",
            "name": "Phường Đồng Thuận",
            "provinceCode": "44"
        },
        {
            "code": "18871",
            "name": "Phường Đồng Sơn",
            "provinceCode": "44"
        },
        {
            "code": "18880",
            "name": "Phường Đồng Hới",
            "provinceCode": "44"
        },
        {
            "code": "18901",
            "name": "Xã Minh Hóa",
            "provinceCode": "44"
        },
        {
            "code": "18904",
            "name": "Xã Dân Hóa",
            "provinceCode": "44"
        },
        {
            "code": "18919",
            "name": "Xã Tân Thành",
            "provinceCode": "44"
        },
        {
            "code": "18922",
            "name": "Xã Kim Điền",
            "provinceCode": "44"
        },
        {
            "code": "18943",
            "name": "Xã Kim Phú",
            "provinceCode": "44"
        },
        {
            "code": "18949",
            "name": "Xã Đồng Lê",
            "provinceCode": "44"
        },
        {
            "code": "18952",
            "name": "Xã Tuyên Sơn",
            "provinceCode": "44"
        },
        {
            "code": "18958",
            "name": "Xã Tuyên Lâm",
            "provinceCode": "44"
        },
        {
            "code": "18985",
            "name": "Xã Tuyên Phú",
            "provinceCode": "44"
        },
        {
            "code": "18991",
            "name": "Xã Tuyên Bình",
            "provinceCode": "44"
        },
        {
            "code": "18997",
            "name": "Xã Tuyên Hóa",
            "provinceCode": "44"
        },
        {
            "code": "19009",
            "name": "Phường Ba Đồn",
            "provinceCode": "44"
        },
        {
            "code": "19021",
            "name": "Xã Phú Trạch",
            "provinceCode": "44"
        },
        {
            "code": "19030",
            "name": "Xã Trung Thuần",
            "provinceCode": "44"
        },
        {
            "code": "19033",
            "name": "Xã Hòa Trạch",
            "provinceCode": "44"
        },
        {
            "code": "19051",
            "name": "Xã Tân Gianh",
            "provinceCode": "44"
        },
        {
            "code": "19057",
            "name": "Xã Quảng Trạch",
            "provinceCode": "44"
        },
        {
            "code": "19066",
            "name": "Phường Bắc Gianh",
            "provinceCode": "44"
        },
        {
            "code": "19075",
            "name": "Xã Nam Ba Đồn",
            "provinceCode": "44"
        },
        {
            "code": "19093",
            "name": "Xã Nam Gianh",
            "provinceCode": "44"
        },
        {
            "code": "19111",
            "name": "Xã Hoàn Lão",
            "provinceCode": "44"
        },
        {
            "code": "19126",
            "name": "Xã Bắc Trạch",
            "provinceCode": "44"
        },
        {
            "code": "19138",
            "name": "Xã Phong Nha",
            "provinceCode": "44"
        },
        {
            "code": "19141",
            "name": "Xã Bố Trạch",
            "provinceCode": "44"
        },
        {
            "code": "19147",
            "name": "Xã Thượng Trạch",
            "provinceCode": "44"
        },
        {
            "code": "19159",
            "name": "Xã Đông Trạch",
            "provinceCode": "44"
        },
        {
            "code": "19198",
            "name": "Xã Nam Trạch",
            "provinceCode": "44"
        },
        {
            "code": "19204",
            "name": "Xã Trường Sơn",
            "provinceCode": "44"
        },
        {
            "code": "19207",
            "name": "Xã Quảng Ninh",
            "provinceCode": "44"
        },
        {
            "code": "19225",
            "name": "Xã Ninh Châu",
            "provinceCode": "44"
        },
        {
            "code": "19237",
            "name": "Xã Trường Ninh",
            "provinceCode": "44"
        },
        {
            "code": "19246",
            "name": "Xã Lệ Ninh",
            "provinceCode": "44"
        },
        {
            "code": "19249",
            "name": "Xã Lệ Thủy",
            "provinceCode": "44"
        },
        {
            "code": "19255",
            "name": "Xã Cam Hồng",
            "provinceCode": "44"
        },
        {
            "code": "19288",
            "name": "Xã Sen Ngư",
            "provinceCode": "44"
        },
        {
            "code": "19291",
            "name": "Xã Tân Mỹ",
            "provinceCode": "44"
        },
        {
            "code": "19309",
            "name": "Xã Trường Phú",
            "provinceCode": "44"
        },
        {
            "code": "19318",
            "name": "Xã Kim Ngân",
            "provinceCode": "44"
        },
        {
            "code": "19333",
            "name": "Phường Đông Hà",
            "provinceCode": "44"
        },
        {
            "code": "19351",
            "name": "Phường Nam Đông Hà",
            "provinceCode": "44"
        },
        {
            "code": "19360",
            "name": "Phường Quảng Trị",
            "provinceCode": "44"
        },
        {
            "code": "19363",
            "name": "Xã Vĩnh Linh",
            "provinceCode": "44"
        },
        {
            "code": "19366",
            "name": "Xã Bến Quan",
            "provinceCode": "44"
        },
        {
            "code": "19372",
            "name": "Xã Vĩnh Hoàng",
            "provinceCode": "44"
        },
        {
            "code": "19405",
            "name": "Xã Vĩnh Thủy",
            "provinceCode": "44"
        },
        {
            "code": "19414",
            "name": "Xã Cửa Tùng",
            "provinceCode": "44"
        },
        {
            "code": "19429",
            "name": "Xã Khe Sanh",
            "provinceCode": "44"
        },
        {
            "code": "19432",
            "name": "Xã Lao Bảo",
            "provinceCode": "44"
        },
        {
            "code": "19435",
            "name": "Xã Hướng Lập",
            "provinceCode": "44"
        },
        {
            "code": "19441",
            "name": "Xã Hướng Phùng",
            "provinceCode": "44"
        },
        {
            "code": "19462",
            "name": "Xã Tân Lập",
            "provinceCode": "44"
        },
        {
            "code": "19483",
            "name": "Xã A Dơi",
            "provinceCode": "44"
        },
        {
            "code": "19489",
            "name": "Xã Lìa",
            "provinceCode": "44"
        },
        {
            "code": "19495",
            "name": "Xã Gio Linh",
            "provinceCode": "44"
        },
        {
            "code": "19496",
            "name": "Xã Cửa Việt",
            "provinceCode": "44"
        },
        {
            "code": "19501",
            "name": "Xã Bến Hải",
            "provinceCode": "44"
        },
        {
            "code": "19537",
            "name": "Xã Cồn Tiên",
            "provinceCode": "44"
        },
        {
            "code": "19555",
            "name": "Xã Hướng Hiệp",
            "provinceCode": "44"
        },
        {
            "code": "19564",
            "name": "Xã Đakrông",
            "provinceCode": "44"
        },
        {
            "code": "19567",
            "name": "Xã Ba Lòng",
            "provinceCode": "44"
        },
        {
            "code": "19588",
            "name": "Xã Tà Rụt",
            "provinceCode": "44"
        },
        {
            "code": "19594",
            "name": "Xã La Lay",
            "provinceCode": "44"
        },
        {
            "code": "19597",
            "name": "Xã Cam Lộ",
            "provinceCode": "44"
        },
        {
            "code": "19603",
            "name": "Xã Hiếu Giang",
            "provinceCode": "44"
        },
        {
            "code": "19624",
            "name": "Xã Triệu Phong",
            "provinceCode": "44"
        },
        {
            "code": "19639",
            "name": "Xã Nam Cửa Việt",
            "provinceCode": "44"
        },
        {
            "code": "19645",
            "name": "Xã Triệu Bình",
            "provinceCode": "44"
        },
        {
            "code": "19654",
            "name": "Xã Triệu Cơ",
            "provinceCode": "44"
        },
        {
            "code": "19669",
            "name": "Xã Ái Tử",
            "provinceCode": "44"
        },
        {
            "code": "19681",
            "name": "Xã Diên Sanh",
            "provinceCode": "44"
        },
        {
            "code": "19699",
            "name": "Xã Vĩnh Định",
            "provinceCode": "44"
        },
        {
            "code": "19702",
            "name": "Xã Hải Lăng",
            "provinceCode": "44"
        },
        {
            "code": "19735",
            "name": "Xã Nam Hải Lăng",
            "provinceCode": "44"
        },
        {
            "code": "19741",
            "name": "Xã Mỹ Thủy",
            "provinceCode": "44"
        },
        {
            "code": "19742",
            "name": "Đặc khu Cồn Cỏ",
            "provinceCode": "44"
        },
        {
            "code": "19753",
            "name": "Phường Phú Xuân",
            "provinceCode": "46"
        },
        {
            "code": "19774",
            "name": "Phường Kim Long",
            "provinceCode": "46"
        },
        {
            "code": "19777",
            "name": "Phường Vỹ Dạ",
            "provinceCode": "46"
        },
        {
            "code": "19789",
            "name": "Phường Thuận Hóa",
            "provinceCode": "46"
        },
        {
            "code": "19804",
            "name": "Phường Hương An",
            "provinceCode": "46"
        },
        {
            "code": "19813",
            "name": "Phường Thủy Xuân",
            "provinceCode": "46"
        },
        {
            "code": "19815",
            "name": "Phường An Cựu",
            "provinceCode": "46"
        },
        {
            "code": "19819",
            "name": "Phường Phong Điền",
            "provinceCode": "46"
        },
        {
            "code": "19828",
            "name": "Phường Phong Phú",
            "provinceCode": "46"
        },
        {
            "code": "19831",
            "name": "Phường Phong Dinh",
            "provinceCode": "46"
        },
        {
            "code": "19858",
            "name": "Phường Phong Thái",
            "provinceCode": "46"
        },
        {
            "code": "19867",
            "name": "Xã Quảng Điền",
            "provinceCode": "46"
        },
        {
            "code": "19873",
            "name": "Phường Phong Quảng",
            "provinceCode": "46"
        },
        {
            "code": "19885",
            "name": "Xã Đan Điền",
            "provinceCode": "46"
        },
        {
            "code": "19900",
            "name": "Phường Thuận An",
            "provinceCode": "46"
        },
        {
            "code": "19909",
            "name": "Phường Dương Nỗ",
            "provinceCode": "46"
        },
        {
            "code": "19918",
            "name": "Xã Phú Hồ",
            "provinceCode": "46"
        },
        {
            "code": "19930",
            "name": "Phường Mỹ Thượng",
            "provinceCode": "46"
        },
        {
            "code": "19942",
            "name": "Xã Phú Vang",
            "provinceCode": "46"
        },
        {
            "code": "19945",
            "name": "Xã Phú Vinh",
            "provinceCode": "46"
        },
        {
            "code": "19960",
            "name": "Phường Phú Bài",
            "provinceCode": "46"
        },
        {
            "code": "19969",
            "name": "Phường Thanh Thủy",
            "provinceCode": "46"
        },
        {
            "code": "19975",
            "name": "Phường Hương Thủy",
            "provinceCode": "46"
        },
        {
            "code": "19996",
            "name": "Phường Hương Trà",
            "provinceCode": "46"
        },
        {
            "code": "20014",
            "name": "Phường Hóa Châu",
            "provinceCode": "46"
        },
        {
            "code": "20017",
            "name": "Phường Kim Trà",
            "provinceCode": "46"
        },
        {
            "code": "20035",
            "name": "Xã Bình Điền",
            "provinceCode": "46"
        },
        {
            "code": "20044",
            "name": "Xã A Lưới 2",
            "provinceCode": "46"
        },
        {
            "code": "20050",
            "name": "Xã A Lưới 5",
            "provinceCode": "46"
        },
        {
            "code": "20056",
            "name": "Xã A Lưới 1",
            "provinceCode": "46"
        },
        {
            "code": "20071",
            "name": "Xã A Lưới 3",
            "provinceCode": "46"
        },
        {
            "code": "20101",
            "name": "Xã A Lưới 4",
            "provinceCode": "46"
        },
        {
            "code": "20107",
            "name": "Xã Phú Lộc",
            "provinceCode": "46"
        },
        {
            "code": "20122",
            "name": "Xã Vinh Lộc",
            "provinceCode": "46"
        },
        {
            "code": "20131",
            "name": "Xã Hưng Lộc",
            "provinceCode": "46"
        },
        {
            "code": "20137",
            "name": "Xã Chân Mây - Lăng Cô",
            "provinceCode": "46"
        },
        {
            "code": "20140",
            "name": "Xã Lộc An",
            "provinceCode": "46"
        },
        {
            "code": "20161",
            "name": "Xã Khe Tre",
            "provinceCode": "46"
        },
        {
            "code": "20179",
            "name": "Xã Nam Đông",
            "provinceCode": "46"
        },
        {
            "code": "20182",
            "name": "Xã Long Quảng",
            "provinceCode": "46"
        },
        {
            "code": "20194",
            "name": "Phường Hải Vân",
            "provinceCode": "48"
        },
        {
            "code": "20197",
            "name": "Phường Liên Chiểu",
            "provinceCode": "48"
        },
        {
            "code": "20200",
            "name": "Phường Hòa Khánh",
            "provinceCode": "48"
        },
        {
            "code": "20209",
            "name": "Phường Thanh Khê",
            "provinceCode": "48"
        },
        {
            "code": "20242",
            "name": "Phường Hải Châu",
            "provinceCode": "48"
        },
        {
            "code": "20257",
            "name": "Phường Hòa Cường",
            "provinceCode": "48"
        },
        {
            "code": "20260",
            "name": "Phường Cẩm Lệ",
            "provinceCode": "48"
        },
        {
            "code": "20263",
            "name": "Phường Sơn Trà",
            "provinceCode": "48"
        },
        {
            "code": "20275",
            "name": "Phường An Hải",
            "provinceCode": "48"
        },
        {
            "code": "20285",
            "name": "Phường Ngũ Hành Sơn",
            "provinceCode": "48"
        },
        {
            "code": "20305",
            "name": "Phường An Khê",
            "provinceCode": "48"
        },
        {
            "code": "20308",
            "name": "Xã Bà Nà",
            "provinceCode": "48"
        },
        {
            "code": "20314",
            "name": "Phường Hòa Xuân",
            "provinceCode": "48"
        },
        {
            "code": "20320",
            "name": "Xã Hòa Vang",
            "provinceCode": "48"
        },
        {
            "code": "20332",
            "name": "Xã Hòa Tiến",
            "provinceCode": "48"
        },
        {
            "code": "20333",
            "name": "Đặc khu Hoàng Sa",
            "provinceCode": "48"
        },
        {
            "code": "20335",
            "name": "Phường Bàn Thạch",
            "provinceCode": "48"
        },
        {
            "code": "20341",
            "name": "Phường Tam Kỳ",
            "provinceCode": "48"
        },
        {
            "code": "20350",
            "name": "Phường Hương Trà",
            "provinceCode": "48"
        },
        {
            "code": "20356",
            "name": "Phường Quảng Phú",
            "provinceCode": "48"
        },
        {
            "code": "20364",
            "name": "Xã Chiên Đàn",
            "provinceCode": "48"
        },
        {
            "code": "20380",
            "name": "Xã Tây Hồ",
            "provinceCode": "48"
        },
        {
            "code": "20392",
            "name": "Xã Phú Ninh",
            "provinceCode": "48"
        },
        {
            "code": "20401",
            "name": "Phường Hội An Tây",
            "provinceCode": "48"
        },
        {
            "code": "20410",
            "name": "Phường Hội An",
            "provinceCode": "48"
        },
        {
            "code": "20413",
            "name": "Phường Hội An Đông",
            "provinceCode": "48"
        },
        {
            "code": "20434",
            "name": "Xã Tân Hiệp",
            "provinceCode": "48"
        },
        {
            "code": "20443",
            "name": "Xã Hùng Sơn",
            "provinceCode": "48"
        },
        {
            "code": "20455",
            "name": "Xã Tây Giang",
            "provinceCode": "48"
        },
        {
            "code": "20458",
            "name": "Xã Avương",
            "provinceCode": "48"
        },
        {
            "code": "20467",
            "name": "Xã Đông Giang",
            "provinceCode": "48"
        },
        {
            "code": "20476",
            "name": "Xã Sông Kôn",
            "provinceCode": "48"
        },
        {
            "code": "20485",
            "name": "Xã Sông Vàng",
            "provinceCode": "48"
        },
        {
            "code": "20494",
            "name": "Xã Bến Hiên",
            "provinceCode": "48"
        },
        {
            "code": "20500",
            "name": "Xã Đại Lộc",
            "provinceCode": "48"
        },
        {
            "code": "20506",
            "name": "Xã Thượng Đức",
            "provinceCode": "48"
        },
        {
            "code": "20515",
            "name": "Xã Hà Nha",
            "provinceCode": "48"
        },
        {
            "code": "20539",
            "name": "Xã Vu Gia",
            "provinceCode": "48"
        },
        {
            "code": "20542",
            "name": "Xã Phú Thuận",
            "provinceCode": "48"
        },
        {
            "code": "20551",
            "name": "Phường Điện Bàn",
            "provinceCode": "48"
        },
        {
            "code": "20557",
            "name": "Phường Điện Bàn Bắc",
            "provinceCode": "48"
        },
        {
            "code": "20569",
            "name": "Xã Điện Bàn Tây",
            "provinceCode": "48"
        },
        {
            "code": "20575",
            "name": "Phường An Thắng",
            "provinceCode": "48"
        },
        {
            "code": "20579",
            "name": "Phường Điện Bàn Đông",
            "provinceCode": "48"
        },
        {
            "code": "20587",
            "name": "Xã Gò Nổi",
            "provinceCode": "48"
        },
        {
            "code": "20599",
            "name": "Xã Nam Phước",
            "provinceCode": "48"
        },
        {
            "code": "20611",
            "name": "Xã Thu Bồn",
            "provinceCode": "48"
        },
        {
            "code": "20623",
            "name": "Xã Duy Xuyên",
            "provinceCode": "48"
        },
        {
            "code": "20635",
            "name": "Xã Duy Nghĩa",
            "provinceCode": "48"
        },
        {
            "code": "20641",
            "name": "Xã Quế Sơn",
            "provinceCode": "48"
        },
        {
            "code": "20650",
            "name": "Xã Xuân Phú",
            "provinceCode": "48"
        },
        {
            "code": "20656",
            "name": "Xã Nông Sơn",
            "provinceCode": "48"
        },
        {
            "code": "20662",
            "name": "Xã Quế Sơn Trung",
            "provinceCode": "48"
        },
        {
            "code": "20669",
            "name": "Xã Quế Phước",
            "provinceCode": "48"
        },
        {
            "code": "20695",
            "name": "Xã Thạnh Mỹ",
            "provinceCode": "48"
        },
        {
            "code": "20698",
            "name": "Xã La Êê",
            "provinceCode": "48"
        },
        {
            "code": "20704",
            "name": "Xã La Dêê",
            "provinceCode": "48"
        },
        {
            "code": "20707",
            "name": "Xã Nam Giang",
            "provinceCode": "48"
        },
        {
            "code": "20710",
            "name": "Xã Bến Giằng",
            "provinceCode": "48"
        },
        {
            "code": "20716",
            "name": "Xã Đắc Pring",
            "provinceCode": "48"
        },
        {
            "code": "20722",
            "name": "Xã Khâm Đức",
            "provinceCode": "48"
        },
        {
            "code": "20728",
            "name": "Xã Phước Hiệp",
            "provinceCode": "48"
        },
        {
            "code": "20734",
            "name": "Xã Phước Năng",
            "provinceCode": "48"
        },
        {
            "code": "20740",
            "name": "Xã Phước Chánh",
            "provinceCode": "48"
        },
        {
            "code": "20752",
            "name": "Xã Phước Thành",
            "provinceCode": "48"
        },
        {
            "code": "20767",
            "name": "Xã Việt An",
            "provinceCode": "48"
        },
        {
            "code": "20770",
            "name": "Xã Phước Trà",
            "provinceCode": "48"
        },
        {
            "code": "20779",
            "name": "Xã Hiệp Đức",
            "provinceCode": "48"
        },
        {
            "code": "20791",
            "name": "Xã Thăng Bình",
            "provinceCode": "48"
        },
        {
            "code": "20794",
            "name": "Xã Thăng An",
            "provinceCode": "48"
        },
        {
            "code": "20818",
            "name": "Xã Đồng Dương",
            "provinceCode": "48"
        },
        {
            "code": "20827",
            "name": "Xã Thăng Phú",
            "provinceCode": "48"
        },
        {
            "code": "20836",
            "name": "Xã Thăng Trường",
            "provinceCode": "48"
        },
        {
            "code": "20848",
            "name": "Xã Thăng Điền",
            "provinceCode": "48"
        },
        {
            "code": "20854",
            "name": "Xã Tiên Phước",
            "provinceCode": "48"
        },
        {
            "code": "20857",
            "name": "Xã Sơn Cẩm Hà",
            "provinceCode": "48"
        },
        {
            "code": "20875",
            "name": "Xã Lãnh Ngọc",
            "provinceCode": "48"
        },
        {
            "code": "20878",
            "name": "Xã Thạnh Bình",
            "provinceCode": "48"
        },
        {
            "code": "20900",
            "name": "Xã Trà My",
            "provinceCode": "48"
        },
        {
            "code": "20908",
            "name": "Xã Trà Liên",
            "provinceCode": "48"
        },
        {
            "code": "20920",
            "name": "Xã Trà Đốc",
            "provinceCode": "48"
        },
        {
            "code": "20923",
            "name": "Xã Trà Tân",
            "provinceCode": "48"
        },
        {
            "code": "20929",
            "name": "Xã Trà Giáp",
            "provinceCode": "48"
        },
        {
            "code": "20938",
            "name": "Xã Trà Leng",
            "provinceCode": "48"
        },
        {
            "code": "20941",
            "name": "Xã Trà Tập",
            "provinceCode": "48"
        },
        {
            "code": "20944",
            "name": "Xã Nam Trà My",
            "provinceCode": "48"
        },
        {
            "code": "20950",
            "name": "Xã Trà Linh",
            "provinceCode": "48"
        },
        {
            "code": "20959",
            "name": "Xã Trà Vân",
            "provinceCode": "48"
        },
        {
            "code": "20965",
            "name": "Xã Núi Thành",
            "provinceCode": "48"
        },
        {
            "code": "20971",
            "name": "Xã Tam Xuân",
            "provinceCode": "48"
        },
        {
            "code": "20977",
            "name": "Xã Đức Phú",
            "provinceCode": "48"
        },
        {
            "code": "20984",
            "name": "Xã Tam Anh",
            "provinceCode": "48"
        },
        {
            "code": "20992",
            "name": "Xã Tam Hải",
            "provinceCode": "48"
        },
        {
            "code": "21004",
            "name": "Xã Tam Mỹ",
            "provinceCode": "48"
        },
        {
            "code": "21025",
            "name": "Phường Cẩm Thành",
            "provinceCode": "51"
        },
        {
            "code": "21028",
            "name": "Phường Nghĩa Lộ",
            "provinceCode": "51"
        },
        {
            "code": "21034",
            "name": "Xã An Phú",
            "provinceCode": "51"
        },
        {
            "code": "21040",
            "name": "Xã Bình Sơn",
            "provinceCode": "51"
        },
        {
            "code": "21061",
            "name": "Xã Vạn Tường",
            "provinceCode": "51"
        },
        {
            "code": "21085",
            "name": "Xã Bình Minh",
            "provinceCode": "51"
        },
        {
            "code": "21100",
            "name": "Xã Bình Chương",
            "provinceCode": "51"
        },
        {
            "code": "21109",
            "name": "Xã Đông Sơn",
            "provinceCode": "51"
        },
        {
            "code": "21115",
            "name": "Xã Trà Bồng",
            "provinceCode": "51"
        },
        {
            "code": "21124",
            "name": "Xã Thanh Bồng",
            "provinceCode": "51"
        },
        {
            "code": "21127",
            "name": "Xã Đông Trà Bồng",
            "provinceCode": "51"
        },
        {
            "code": "21136",
            "name": "Xã Cà Đam",
            "provinceCode": "51"
        },
        {
            "code": "21154",
            "name": "Xã Tây Trà",
            "provinceCode": "51"
        },
        {
            "code": "21157",
            "name": "Xã Tây Trà Bồng",
            "provinceCode": "51"
        },
        {
            "code": "21172",
            "name": "Phường Trương Quang Trọng",
            "provinceCode": "51"
        },
        {
            "code": "21181",
            "name": "Xã Thọ Phong",
            "provinceCode": "51"
        },
        {
            "code": "21196",
            "name": "Xã Trường Giang",
            "provinceCode": "51"
        },
        {
            "code": "21205",
            "name": "Xã Ba Gia",
            "provinceCode": "51"
        },
        {
            "code": "21211",
            "name": "Xã Tịnh Khê",
            "provinceCode": "51"
        },
        {
            "code": "21220",
            "name": "Xã Sơn Tịnh",
            "provinceCode": "51"
        },
        {
            "code": "21235",
            "name": "Xã Tư Nghĩa",
            "provinceCode": "51"
        },
        {
            "code": "21238",
            "name": "Xã Vệ Giang",
            "provinceCode": "51"
        },
        {
            "code": "21244",
            "name": "Xã Trà Giang",
            "provinceCode": "51"
        },
        {
            "code": "21250",
            "name": "Xã Nghĩa Giang",
            "provinceCode": "51"
        },
        {
            "code": "21289",
            "name": "Xã Sơn Hà",
            "provinceCode": "51"
        },
        {
            "code": "21292",
            "name": "Xã Sơn Hạ",
            "provinceCode": "51"
        },
        {
            "code": "21307",
            "name": "Xã Sơn Linh",
            "provinceCode": "51"
        },
        {
            "code": "21319",
            "name": "Xã Sơn Thủy",
            "provinceCode": "51"
        },
        {
            "code": "21325",
            "name": "Xã Sơn Kỳ",
            "provinceCode": "51"
        },
        {
            "code": "21334",
            "name": "Xã Sơn Tây Thượng",
            "provinceCode": "51"
        },
        {
            "code": "21340",
            "name": "Xã Sơn Tây",
            "provinceCode": "51"
        },
        {
            "code": "21343",
            "name": "Xã Sơn Tây Hạ",
            "provinceCode": "51"
        },
        {
            "code": "21349",
            "name": "Xã Sơn Mai",
            "provinceCode": "51"
        },
        {
            "code": "21361",
            "name": "Xã Minh Long",
            "provinceCode": "51"
        },
        {
            "code": "21364",
            "name": "Xã Nghĩa Hành",
            "provinceCode": "51"
        },
        {
            "code": "21370",
            "name": "Xã Phước Giang",
            "provinceCode": "51"
        },
        {
            "code": "21385",
            "name": "Xã Đình Cương",
            "provinceCode": "51"
        },
        {
            "code": "21388",
            "name": "Xã Thiện Tín",
            "provinceCode": "51"
        },
        {
            "code": "21400",
            "name": "Xã Mộ Đức",
            "provinceCode": "51"
        },
        {
            "code": "21409",
            "name": "Xã Long Phụng",
            "provinceCode": "51"
        },
        {
            "code": "21421",
            "name": "Xã Mỏ Cày",
            "provinceCode": "51"
        },
        {
            "code": "21433",
            "name": "Xã Lân Phong",
            "provinceCode": "51"
        },
        {
            "code": "21439",
            "name": "Phường Đức Phổ",
            "provinceCode": "51"
        },
        {
            "code": "21451",
            "name": "Phường Trà Câu",
            "provinceCode": "51"
        },
        {
            "code": "21457",
            "name": "Xã Nguyễn Nghiêm",
            "provinceCode": "51"
        },
        {
            "code": "21472",
            "name": "Xã Khánh Cường",
            "provinceCode": "51"
        },
        {
            "code": "21478",
            "name": "Phường Sa Huỳnh",
            "provinceCode": "51"
        },
        {
            "code": "21484",
            "name": "Xã Ba Tơ",
            "provinceCode": "51"
        },
        {
            "code": "21490",
            "name": "Xã Ba Vinh",
            "provinceCode": "51"
        },
        {
            "code": "21496",
            "name": "Xã Ba Động",
            "provinceCode": "51"
        },
        {
            "code": "21499",
            "name": "Xã Ba Dinh",
            "provinceCode": "51"
        },
        {
            "code": "21520",
            "name": "Xã Đặng Thùy Trâm",
            "provinceCode": "51"
        },
        {
            "code": "21523",
            "name": "Xã Ba Tô",
            "provinceCode": "51"
        },
        {
            "code": "21529",
            "name": "Xã Ba Vì",
            "provinceCode": "51"
        },
        {
            "code": "21538",
            "name": "Xã Ba Xa",
            "provinceCode": "51"
        },
        {
            "code": "21548",
            "name": "Đặc khu Lý Sơn",
            "provinceCode": "51"
        },
        {
            "code": "23284",
            "name": "Phường Đăk Cấm",
            "provinceCode": "51"
        },
        {
            "code": "23293",
            "name": "Phường Kon Tum",
            "provinceCode": "51"
        },
        {
            "code": "23302",
            "name": "Phường Đăk Bla",
            "provinceCode": "51"
        },
        {
            "code": "23317",
            "name": "Xã Ngọk Bay",
            "provinceCode": "51"
        },
        {
            "code": "23326",
            "name": "Xã Ia Chim",
            "provinceCode": "51"
        },
        {
            "code": "23332",
            "name": "Xã Đăk Rơ Wa",
            "provinceCode": "51"
        },
        {
            "code": "23341",
            "name": "Xã Đăk Pék",
            "provinceCode": "51"
        },
        {
            "code": "23344",
            "name": "Xã Đăk Plô",
            "provinceCode": "51"
        },
        {
            "code": "23356",
            "name": "Xã Xốp",
            "provinceCode": "51"
        },
        {
            "code": "23365",
            "name": "Xã Ngọc Linh",
            "provinceCode": "51"
        },
        {
            "code": "23368",
            "name": "Xã Đăk Long",
            "provinceCode": "51"
        },
        {
            "code": "23374",
            "name": "Xã Đăk Môn",
            "provinceCode": "51"
        },
        {
            "code": "23377",
            "name": "Xã Bờ Y",
            "provinceCode": "51"
        },
        {
            "code": "23383",
            "name": "Xã Dục Nông",
            "provinceCode": "51"
        },
        {
            "code": "23392",
            "name": "Xã Sa Loong",
            "provinceCode": "51"
        },
        {
            "code": "23401",
            "name": "Xã Đăk Tô",
            "provinceCode": "51"
        },
        {
            "code": "23416",
            "name": "Xã Đăk Sao",
            "provinceCode": "51"
        },
        {
            "code": "23419",
            "name": "Xã Đăk Tờ Kan",
            "provinceCode": "51"
        },
        {
            "code": "23425",
            "name": "Xã Tu Mơ Rông",
            "provinceCode": "51"
        },
        {
            "code": "23428",
            "name": "Xã Ngọk Tụ",
            "provinceCode": "51"
        },
        {
            "code": "23430",
            "name": "Xã Kon Đào",
            "provinceCode": "51"
        },
        {
            "code": "23446",
            "name": "Xã Măng Ri",
            "provinceCode": "51"
        },
        {
            "code": "23455",
            "name": "Xã Măng Bút",
            "provinceCode": "51"
        },
        {
            "code": "23473",
            "name": "Xã Măng Đen",
            "provinceCode": "51"
        },
        {
            "code": "23476",
            "name": "Xã Kon Plông",
            "provinceCode": "51"
        },
        {
            "code": "23479",
            "name": "Xã Đăk Rve",
            "provinceCode": "51"
        },
        {
            "code": "23485",
            "name": "Xã Đăk Kôi",
            "provinceCode": "51"
        },
        {
            "code": "23497",
            "name": "Xã Kon Braih",
            "provinceCode": "51"
        },
        {
            "code": "23500",
            "name": "Xã Đăk Hà",
            "provinceCode": "51"
        },
        {
            "code": "23504",
            "name": "Xã Đăk Pxi",
            "provinceCode": "51"
        },
        {
            "code": "23510",
            "name": "Xã Đăk Ui",
            "provinceCode": "51"
        },
        {
            "code": "23512",
            "name": "Xã Đăk Mar",
            "provinceCode": "51"
        },
        {
            "code": "23515",
            "name": "Xã Ngọk Réo",
            "provinceCode": "51"
        },
        {
            "code": "23527",
            "name": "Xã Sa Thầy",
            "provinceCode": "51"
        },
        {
            "code": "23530",
            "name": "Xã Rờ Kơi",
            "provinceCode": "51"
        },
        {
            "code": "23534",
            "name": "Xã Sa Bình",
            "provinceCode": "51"
        },
        {
            "code": "23535",
            "name": "Xã Ia Đal",
            "provinceCode": "51"
        },
        {
            "code": "23536",
            "name": "Xã Mô Rai",
            "provinceCode": "51"
        },
        {
            "code": "23538",
            "name": "Xã Ia Tơi",
            "provinceCode": "51"
        },
        {
            "code": "23548",
            "name": "Xã Ya Ly",
            "provinceCode": "51"
        },
        {
            "code": "21553",
            "name": "Phường Quy Nhơn Bắc",
            "provinceCode": "52"
        },
        {
            "code": "21583",
            "name": "Phường Quy Nhơn",
            "provinceCode": "52"
        },
        {
            "code": "21589",
            "name": "Phường Quy Nhơn Tây",
            "provinceCode": "52"
        },
        {
            "code": "21592",
            "name": "Phường Quy Nhơn Nam",
            "provinceCode": "52"
        },
        {
            "code": "21601",
            "name": "Phường Quy Nhơn Đông",
            "provinceCode": "52"
        },
        {
            "code": "21607",
            "name": "Xã Nhơn Châu",
            "provinceCode": "52"
        },
        {
            "code": "21609",
            "name": "Xã An Lão",
            "provinceCode": "52"
        },
        {
            "code": "21616",
            "name": "Xã An Vinh",
            "provinceCode": "52"
        },
        {
            "code": "21622",
            "name": "Xã An Toàn",
            "provinceCode": "52"
        },
        {
            "code": "21628",
            "name": "Xã An Hòa",
            "provinceCode": "52"
        },
        {
            "code": "21637",
            "name": "Phường Tam Quan",
            "provinceCode": "52"
        },
        {
            "code": "21640",
            "name": "Phường Bồng Sơn",
            "provinceCode": "52"
        },
        {
            "code": "21655",
            "name": "Phường Hoài Nhơn Bắc",
            "provinceCode": "52"
        },
        {
            "code": "21661",
            "name": "Phường Hoài Nhơn Tây",
            "provinceCode": "52"
        },
        {
            "code": "21664",
            "name": "Phường Hoài Nhơn",
            "provinceCode": "52"
        },
        {
            "code": "21670",
            "name": "Phường Hoài Nhơn Đông",
            "provinceCode": "52"
        },
        {
            "code": "21673",
            "name": "Phường Hoài Nhơn Nam",
            "provinceCode": "52"
        },
        {
            "code": "21688",
            "name": "Xã Hoài Ân",
            "provinceCode": "52"
        },
        {
            "code": "21697",
            "name": "Xã Ân Hảo",
            "provinceCode": "52"
        },
        {
            "code": "21703",
            "name": "Xã Vạn Đức",
            "provinceCode": "52"
        },
        {
            "code": "21715",
            "name": "Xã Ân Tường",
            "provinceCode": "52"
        },
        {
            "code": "21727",
            "name": "Xã Kim Sơn",
            "provinceCode": "52"
        },
        {
            "code": "21730",
            "name": "Xã Phù Mỹ",
            "provinceCode": "52"
        },
        {
            "code": "21733",
            "name": "Xã Bình Dương",
            "provinceCode": "52"
        },
        {
            "code": "21739",
            "name": "Xã Phù Mỹ Bắc",
            "provinceCode": "52"
        },
        {
            "code": "21751",
            "name": "Xã Phù Mỹ Đông",
            "provinceCode": "52"
        },
        {
            "code": "21757",
            "name": "Xã Phù Mỹ Tây",
            "provinceCode": "52"
        },
        {
            "code": "21769",
            "name": "Xã An Lương",
            "provinceCode": "52"
        },
        {
            "code": "21775",
            "name": "Xã Phù Mỹ Nam",
            "provinceCode": "52"
        },
        {
            "code": "21786",
            "name": "Xã Vĩnh Thạnh",
            "provinceCode": "52"
        },
        {
            "code": "21787",
            "name": "Xã Vĩnh Sơn",
            "provinceCode": "52"
        },
        {
            "code": "21796",
            "name": "Xã Vĩnh Thịnh",
            "provinceCode": "52"
        },
        {
            "code": "21805",
            "name": "Xã Vĩnh Quang",
            "provinceCode": "52"
        },
        {
            "code": "21808",
            "name": "Xã Tây Sơn",
            "provinceCode": "52"
        },
        {
            "code": "21817",
            "name": "Xã Bình Hiệp",
            "provinceCode": "52"
        },
        {
            "code": "21820",
            "name": "Xã Bình Khê",
            "provinceCode": "52"
        },
        {
            "code": "21829",
            "name": "Xã Bình An",
            "provinceCode": "52"
        },
        {
            "code": "21835",
            "name": "Xã Bình Phú",
            "provinceCode": "52"
        },
        {
            "code": "21853",
            "name": "Xã Phù Cát",
            "provinceCode": "52"
        },
        {
            "code": "21859",
            "name": "Xã Đề Gi",
            "provinceCode": "52"
        },
        {
            "code": "21868",
            "name": "Xã Hội Sơn",
            "provinceCode": "52"
        },
        {
            "code": "21871",
            "name": "Xã Hòa Hội",
            "provinceCode": "52"
        },
        {
            "code": "21880",
            "name": "Xã Cát Tiến",
            "provinceCode": "52"
        },
        {
            "code": "21892",
            "name": "Xã Xuân An",
            "provinceCode": "52"
        },
        {
            "code": "21901",
            "name": "Xã Ngô Mây",
            "provinceCode": "52"
        },
        {
            "code": "21907",
            "name": "Phường Bình Định",
            "provinceCode": "52"
        },
        {
            "code": "21910",
            "name": "Phường An Nhơn",
            "provinceCode": "52"
        },
        {
            "code": "21925",
            "name": "Phường An Nhơn Bắc",
            "provinceCode": "52"
        },
        {
            "code": "21934",
            "name": "Phường An Nhơn Đông",
            "provinceCode": "52"
        },
        {
            "code": "21940",
            "name": "Xã An Nhơn Tây",
            "provinceCode": "52"
        },
        {
            "code": "21943",
            "name": "Phường An Nhơn Nam",
            "provinceCode": "52"
        },
        {
            "code": "21952",
            "name": "Xã Tuy Phước",
            "provinceCode": "52"
        },
        {
            "code": "21964",
            "name": "Xã Tuy Phước Bắc",
            "provinceCode": "52"
        },
        {
            "code": "21970",
            "name": "Xã Tuy Phước Đông",
            "provinceCode": "52"
        },
        {
            "code": "21985",
            "name": "Xã Tuy Phước Tây",
            "provinceCode": "52"
        },
        {
            "code": "21994",
            "name": "Xã Vân Canh",
            "provinceCode": "52"
        },
        {
            "code": "21997",
            "name": "Xã Canh Liên",
            "provinceCode": "52"
        },
        {
            "code": "22006",
            "name": "Xã Canh Vinh",
            "provinceCode": "52"
        },
        {
            "code": "23563",
            "name": "Phường Diên Hồng",
            "provinceCode": "52"
        },
        {
            "code": "23575",
            "name": "Phường Pleiku",
            "provinceCode": "52"
        },
        {
            "code": "23584",
            "name": "Phường Thống Nhất",
            "provinceCode": "52"
        },
        {
            "code": "23586",
            "name": "Phường Hội Phú",
            "provinceCode": "52"
        },
        {
            "code": "23590",
            "name": "Xã Biển Hồ",
            "provinceCode": "52"
        },
        {
            "code": "23602",
            "name": "Phường An Phú",
            "provinceCode": "52"
        },
        {
            "code": "23611",
            "name": "Xã Gào",
            "provinceCode": "52"
        },
        {
            "code": "23614",
            "name": "Phường An Bình",
            "provinceCode": "52"
        },
        {
            "code": "23617",
            "name": "Phường An Khê",
            "provinceCode": "52"
        },
        {
            "code": "23629",
            "name": "Xã Cửu An",
            "provinceCode": "52"
        },
        {
            "code": "23638",
            "name": "Xã Kbang",
            "provinceCode": "52"
        },
        {
            "code": "23644",
            "name": "Xã Đak Rong",
            "provinceCode": "52"
        },
        {
            "code": "23647",
            "name": "Xã Sơn Lang",
            "provinceCode": "52"
        },
        {
            "code": "23650",
            "name": "Xã Krong",
            "provinceCode": "52"
        },
        {
            "code": "23668",
            "name": "Xã Tơ Tung",
            "provinceCode": "52"
        },
        {
            "code": "23674",
            "name": "Xã Kông Bơ La",
            "provinceCode": "52"
        },
        {
            "code": "23677",
            "name": "Xã Đak Đoa",
            "provinceCode": "52"
        },
        {
            "code": "23683",
            "name": "Xã Đak Sơmei",
            "provinceCode": "52"
        },
        {
            "code": "23701",
            "name": "Xã Kon Gang",
            "provinceCode": "52"
        },
        {
            "code": "23710",
            "name": "Xã Ia Băng",
            "provinceCode": "52"
        },
        {
            "code": "23714",
            "name": "Xã KDang",
            "provinceCode": "52"
        },
        {
            "code": "23722",
            "name": "Xã Chư Păh",
            "provinceCode": "52"
        },
        {
            "code": "23728",
            "name": "Xã Ia Khươl",
            "provinceCode": "52"
        },
        {
            "code": "23734",
            "name": "Xã Ia Ly",
            "provinceCode": "52"
        },
        {
            "code": "23749",
            "name": "Xã Ia Phí",
            "provinceCode": "52"
        },
        {
            "code": "23764",
            "name": "Xã Ia Grai",
            "provinceCode": "52"
        },
        {
            "code": "23767",
            "name": "Xã Ia Hrung",
            "provinceCode": "52"
        },
        {
            "code": "23776",
            "name": "Xã Ia Krái",
            "provinceCode": "52"
        },
        {
            "code": "23782",
            "name": "Xã Ia O",
            "provinceCode": "52"
        },
        {
            "code": "23788",
            "name": "Xã Ia Chia",
            "provinceCode": "52"
        },
        {
            "code": "23794",
            "name": "Xã Mang Yang",
            "provinceCode": "52"
        },
        {
            "code": "23798",
            "name": "Xã Ayun",
            "provinceCode": "52"
        },
        {
            "code": "23799",
            "name": "Xã Hra",
            "provinceCode": "52"
        },
        {
            "code": "23812",
            "name": "Xã Lơ Pang",
            "provinceCode": "52"
        },
        {
            "code": "23818",
            "name": "Xã Kon Chiêng",
            "provinceCode": "52"
        },
        {
            "code": "23824",
            "name": "Xã Kông Chro",
            "provinceCode": "52"
        },
        {
            "code": "23830",
            "name": "Xã Chư Krey",
            "provinceCode": "52"
        },
        {
            "code": "23833",
            "name": "Xã Ya Ma",
            "provinceCode": "52"
        },
        {
            "code": "23839",
            "name": "Xã SRó",
            "provinceCode": "52"
        },
        {
            "code": "23842",
            "name": "Xã Đăk Song",
            "provinceCode": "52"
        },
        {
            "code": "23851",
            "name": "Xã Chơ Long",
            "provinceCode": "52"
        },
        {
            "code": "23857",
            "name": "Xã Đức Cơ",
            "provinceCode": "52"
        },
        {
            "code": "23866",
            "name": "Xã Ia Krêl",
            "provinceCode": "52"
        },
        {
            "code": "23869",
            "name": "Xã Ia Dơk",
            "provinceCode": "52"
        },
        {
            "code": "23872",
            "name": "Xã Ia Dom",
            "provinceCode": "52"
        },
        {
            "code": "23881",
            "name": "Xã Ia Pnôn",
            "provinceCode": "52"
        },
        {
            "code": "23884",
            "name": "Xã Ia Nan",
            "provinceCode": "52"
        },
        {
            "code": "23887",
            "name": "Xã Chư Prông",
            "provinceCode": "52"
        },
        {
            "code": "23896",
            "name": "Xã Bàu Cạn",
            "provinceCode": "52"
        },
        {
            "code": "23908",
            "name": "Xã Ia Tôr",
            "provinceCode": "52"
        },
        {
            "code": "23911",
            "name": "Xã Ia Boòng",
            "provinceCode": "52"
        },
        {
            "code": "23917",
            "name": "Xã Ia Púch",
            "provinceCode": "52"
        },
        {
            "code": "23926",
            "name": "Xã Ia Pia",
            "provinceCode": "52"
        },
        {
            "code": "23935",
            "name": "Xã Ia Lâu",
            "provinceCode": "52"
        },
        {
            "code": "23938",
            "name": "Xã Ia Mơ",
            "provinceCode": "52"
        },
        {
            "code": "23941",
            "name": "Xã Chư Sê",
            "provinceCode": "52"
        },
        {
            "code": "23942",
            "name": "Xã Chư Pưh",
            "provinceCode": "52"
        },
        {
            "code": "23947",
            "name": "Xã Bờ Ngoong",
            "provinceCode": "52"
        },
        {
            "code": "23954",
            "name": "Xã Al Bá",
            "provinceCode": "52"
        },
        {
            "code": "23971",
            "name": "Xã Ia Hrú",
            "provinceCode": "52"
        },
        {
            "code": "23977",
            "name": "Xã Ia Ko",
            "provinceCode": "52"
        },
        {
            "code": "23986",
            "name": "Xã Ia Le",
            "provinceCode": "52"
        },
        {
            "code": "23995",
            "name": "Xã Đak Pơ",
            "provinceCode": "52"
        },
        {
            "code": "24007",
            "name": "Xã Ya Hội",
            "provinceCode": "52"
        },
        {
            "code": "24013",
            "name": "Xã Pờ Tó",
            "provinceCode": "52"
        },
        {
            "code": "24022",
            "name": "Xã Ia Pa",
            "provinceCode": "52"
        },
        {
            "code": "24028",
            "name": "Xã Ia Tul",
            "provinceCode": "52"
        },
        {
            "code": "24043",
            "name": "Xã Phú Thiện",
            "provinceCode": "52"
        },
        {
            "code": "24044",
            "name": "Phường Ayun Pa",
            "provinceCode": "52"
        },
        {
            "code": "24049",
            "name": "Xã Chư A Thai",
            "provinceCode": "52"
        },
        {
            "code": "24061",
            "name": "Xã Ia Hiao",
            "provinceCode": "52"
        },
        {
            "code": "24065",
            "name": "Xã Ia Rbol",
            "provinceCode": "52"
        },
        {
            "code": "24073",
            "name": "Xã Ia Sao",
            "provinceCode": "52"
        },
        {
            "code": "24076",
            "name": "Xã Phú Túc",
            "provinceCode": "52"
        },
        {
            "code": "24100",
            "name": "Xã Ia Dreh",
            "provinceCode": "52"
        },
        {
            "code": "24109",
            "name": "Xã Uar",
            "provinceCode": "52"
        },
        {
            "code": "24112",
            "name": "Xã Ia Rsai",
            "provinceCode": "52"
        },
        {
            "code": "22333",
            "name": "Phường Bắc Nha Trang",
            "provinceCode": "56"
        },
        {
            "code": "22366",
            "name": "Phường Nha Trang",
            "provinceCode": "56"
        },
        {
            "code": "22390",
            "name": "Phường Tây Nha Trang",
            "provinceCode": "56"
        },
        {
            "code": "22402",
            "name": "Phường Nam Nha Trang",
            "provinceCode": "56"
        },
        {
            "code": "22411",
            "name": "Phường Bắc Cam Ranh",
            "provinceCode": "56"
        },
        {
            "code": "22420",
            "name": "Phường Cam Ranh",
            "provinceCode": "56"
        },
        {
            "code": "22423",
            "name": "Phường Ba Ngòi",
            "provinceCode": "56"
        },
        {
            "code": "22432",
            "name": "Phường Cam Linh",
            "provinceCode": "56"
        },
        {
            "code": "22435",
            "name": "Xã Cam Hiệp",
            "provinceCode": "56"
        },
        {
            "code": "22453",
            "name": "Xã Cam Lâm",
            "provinceCode": "56"
        },
        {
            "code": "22465",
            "name": "Xã Cam An",
            "provinceCode": "56"
        },
        {
            "code": "22480",
            "name": "Xã Nam Cam Ranh",
            "provinceCode": "56"
        },
        {
            "code": "22489",
            "name": "Xã Vạn Ninh",
            "provinceCode": "56"
        },
        {
            "code": "22498",
            "name": "Xã Tu Bông",
            "provinceCode": "56"
        },
        {
            "code": "22504",
            "name": "Xã Đại Lãnh",
            "provinceCode": "56"
        },
        {
            "code": "22516",
            "name": "Xã Vạn Thắng",
            "provinceCode": "56"
        },
        {
            "code": "22525",
            "name": "Xã Vạn Hưng",
            "provinceCode": "56"
        },
        {
            "code": "22528",
            "name": "Phường Ninh Hòa",
            "provinceCode": "56"
        },
        {
            "code": "22546",
            "name": "Xã Bắc Ninh Hòa",
            "provinceCode": "56"
        },
        {
            "code": "22552",
            "name": "Xã Tây Ninh Hòa",
            "provinceCode": "56"
        },
        {
            "code": "22558",
            "name": "Xã Hòa Trí",
            "provinceCode": "56"
        },
        {
            "code": "22561",
            "name": "Phường Đông Ninh Hòa",
            "provinceCode": "56"
        },
        {
            "code": "22576",
            "name": "Xã Tân Định",
            "provinceCode": "56"
        },
        {
            "code": "22591",
            "name": "Phường Hòa Thắng",
            "provinceCode": "56"
        },
        {
            "code": "22597",
            "name": "Xã Nam Ninh Hòa",
            "provinceCode": "56"
        },
        {
            "code": "22609",
            "name": "Xã Khánh Vĩnh",
            "provinceCode": "56"
        },
        {
            "code": "22612",
            "name": "Xã Trung Khánh Vĩnh",
            "provinceCode": "56"
        },
        {
            "code": "22615",
            "name": "Xã Bắc Khánh Vĩnh",
            "provinceCode": "56"
        },
        {
            "code": "22624",
            "name": "Xã Tây Khánh Vĩnh",
            "provinceCode": "56"
        },
        {
            "code": "22648",
            "name": "Xã Nam Khánh Vĩnh",
            "provinceCode": "56"
        },
        {
            "code": "22651",
            "name": "Xã Diên Khánh",
            "provinceCode": "56"
        },
        {
            "code": "22657",
            "name": "Xã Diên Điền",
            "provinceCode": "56"
        },
        {
            "code": "22660",
            "name": "Xã Diên Lâm",
            "provinceCode": "56"
        },
        {
            "code": "22672",
            "name": "Xã Diên Thọ",
            "provinceCode": "56"
        },
        {
            "code": "22678",
            "name": "Xã Diên Lạc",
            "provinceCode": "56"
        },
        {
            "code": "22702",
            "name": "Xã Suối Hiệp",
            "provinceCode": "56"
        },
        {
            "code": "22708",
            "name": "Xã Suối Dầu",
            "provinceCode": "56"
        },
        {
            "code": "22714",
            "name": "Xã Khánh Sơn",
            "provinceCode": "56"
        },
        {
            "code": "22720",
            "name": "Xã Tây Khánh Sơn",
            "provinceCode": "56"
        },
        {
            "code": "22732",
            "name": "Xã Đông Khánh Sơn",
            "provinceCode": "56"
        },
        {
            "code": "22736",
            "name": "Đặc khu Trường Sa",
            "provinceCode": "56"
        },
        {
            "code": "22738",
            "name": "Phường Đô Vinh",
            "provinceCode": "56"
        },
        {
            "code": "22741",
            "name": "Phường Bảo An",
            "provinceCode": "56"
        },
        {
            "code": "22759",
            "name": "Phường Phan Rang",
            "provinceCode": "56"
        },
        {
            "code": "22780",
            "name": "Phường Đông Hải",
            "provinceCode": "56"
        },
        {
            "code": "22786",
            "name": "Xã Bác Ái Tây",
            "provinceCode": "56"
        },
        {
            "code": "22795",
            "name": "Xã Bác Ái",
            "provinceCode": "56"
        },
        {
            "code": "22801",
            "name": "Xã Bác Ái Đông",
            "provinceCode": "56"
        },
        {
            "code": "22810",
            "name": "Xã Ninh Sơn",
            "provinceCode": "56"
        },
        {
            "code": "22813",
            "name": "Xã Lâm Sơn",
            "provinceCode": "56"
        },
        {
            "code": "22822",
            "name": "Xã Mỹ Sơn",
            "provinceCode": "56"
        },
        {
            "code": "22828",
            "name": "Xã Anh Dũng",
            "provinceCode": "56"
        },
        {
            "code": "22834",
            "name": "Phường Ninh Chử",
            "provinceCode": "56"
        },
        {
            "code": "22840",
            "name": "Xã Công Hải",
            "provinceCode": "56"
        },
        {
            "code": "22846",
            "name": "Xã Vĩnh Hải",
            "provinceCode": "56"
        },
        {
            "code": "22849",
            "name": "Xã Thuận Bắc",
            "provinceCode": "56"
        },
        {
            "code": "22852",
            "name": "Xã Ninh Hải",
            "provinceCode": "56"
        },
        {
            "code": "22861",
            "name": "Xã Xuân Hải",
            "provinceCode": "56"
        },
        {
            "code": "22870",
            "name": "Xã Ninh Phước",
            "provinceCode": "56"
        },
        {
            "code": "22873",
            "name": "Xã Phước Hậu",
            "provinceCode": "56"
        },
        {
            "code": "22888",
            "name": "Xã Phước Dinh",
            "provinceCode": "56"
        },
        {
            "code": "22891",
            "name": "Xã Phước Hữu",
            "provinceCode": "56"
        },
        {
            "code": "22897",
            "name": "Xã Thuận Nam",
            "provinceCode": "56"
        },
        {
            "code": "22900",
            "name": "Xã Phước Hà",
            "provinceCode": "56"
        },
        {
            "code": "22909",
            "name": "Xã Cà Ná",
            "provinceCode": "56"
        },
        {
            "code": "22015",
            "name": "Phường Tuy Hòa",
            "provinceCode": "66"
        },
        {
            "code": "22045",
            "name": "Phường Bình Kiến",
            "provinceCode": "66"
        },
        {
            "code": "22051",
            "name": "Phường Sông Cầu",
            "provinceCode": "66"
        },
        {
            "code": "22057",
            "name": "Xã Xuân Lộc",
            "provinceCode": "66"
        },
        {
            "code": "22060",
            "name": "Xã Xuân Cảnh",
            "provinceCode": "66"
        },
        {
            "code": "22075",
            "name": "Xã Xuân Thọ",
            "provinceCode": "66"
        },
        {
            "code": "22076",
            "name": "Phường Xuân Đài",
            "provinceCode": "66"
        },
        {
            "code": "22081",
            "name": "Xã Đồng Xuân",
            "provinceCode": "66"
        },
        {
            "code": "22090",
            "name": "Xã Xuân Lãnh",
            "provinceCode": "66"
        },
        {
            "code": "22096",
            "name": "Xã Phú Mỡ",
            "provinceCode": "66"
        },
        {
            "code": "22111",
            "name": "Xã Xuân Phước",
            "provinceCode": "66"
        },
        {
            "code": "22114",
            "name": "Xã Tuy An Bắc",
            "provinceCode": "66"
        },
        {
            "code": "22120",
            "name": "Xã Tuy An Đông",
            "provinceCode": "66"
        },
        {
            "code": "22132",
            "name": "Xã Tuy An Tây",
            "provinceCode": "66"
        },
        {
            "code": "22147",
            "name": "Xã Ô Loan",
            "provinceCode": "66"
        },
        {
            "code": "22153",
            "name": "Xã Tuy An Nam",
            "provinceCode": "66"
        },
        {
            "code": "22165",
            "name": "Xã Sơn Hòa",
            "provinceCode": "66"
        },
        {
            "code": "22171",
            "name": "Xã Tây Sơn",
            "provinceCode": "66"
        },
        {
            "code": "22177",
            "name": "Xã Vân Hòa",
            "provinceCode": "66"
        },
        {
            "code": "22192",
            "name": "Xã Suối Trai",
            "provinceCode": "66"
        },
        {
            "code": "22207",
            "name": "Xã Sông Hinh",
            "provinceCode": "66"
        },
        {
            "code": "22222",
            "name": "Xã Đức Bình",
            "provinceCode": "66"
        },
        {
            "code": "22225",
            "name": "Xã Ea Bá",
            "provinceCode": "66"
        },
        {
            "code": "22237",
            "name": "Xã Ea Ly",
            "provinceCode": "66"
        },
        {
            "code": "22240",
            "name": "Phường Phú Yên",
            "provinceCode": "66"
        },
        {
            "code": "22250",
            "name": "Xã Sơn Thành",
            "provinceCode": "66"
        },
        {
            "code": "22255",
            "name": "Xã Tây Hòa",
            "provinceCode": "66"
        },
        {
            "code": "22258",
            "name": "Phường Đông Hòa",
            "provinceCode": "66"
        },
        {
            "code": "22261",
            "name": "Phường Hòa Hiệp",
            "provinceCode": "66"
        },
        {
            "code": "22276",
            "name": "Xã Hòa Thịnh",
            "provinceCode": "66"
        },
        {
            "code": "22285",
            "name": "Xã Hòa Mỹ",
            "provinceCode": "66"
        },
        {
            "code": "22291",
            "name": "Xã Hòa Xuân",
            "provinceCode": "66"
        },
        {
            "code": "22303",
            "name": "Xã Phú Hòa 2",
            "provinceCode": "66"
        },
        {
            "code": "22319",
            "name": "Xã Phú Hòa 1",
            "provinceCode": "66"
        },
        {
            "code": "24121",
            "name": "Phường Tân Lập",
            "provinceCode": "66"
        },
        {
            "code": "24133",
            "name": "Phường Buôn Ma Thuột",
            "provinceCode": "66"
        },
        {
            "code": "24154",
            "name": "Phường Thành Nhất",
            "provinceCode": "66"
        },
        {
            "code": "24163",
            "name": "Phường Tân An",
            "provinceCode": "66"
        },
        {
            "code": "24169",
            "name": "Phường Ea Kao",
            "provinceCode": "66"
        },
        {
            "code": "24175",
            "name": "Xã Hòa Phú",
            "provinceCode": "66"
        },
        {
            "code": "24181",
            "name": "Xã Ea Drăng",
            "provinceCode": "66"
        },
        {
            "code": "24184",
            "name": "Xã Ea H’Leo",
            "provinceCode": "66"
        },
        {
            "code": "24187",
            "name": "Xã Ea Hiao",
            "provinceCode": "66"
        },
        {
            "code": "24193",
            "name": "Xã Ea Wy",
            "provinceCode": "66"
        },
        {
            "code": "24208",
            "name": "Xã Ea Khăl",
            "provinceCode": "66"
        },
        {
            "code": "24211",
            "name": "Xã Ea Súp",
            "provinceCode": "66"
        },
        {
            "code": "24214",
            "name": "Xã Ia Lốp",
            "provinceCode": "66"
        },
        {
            "code": "24217",
            "name": "Xã Ea Rốk",
            "provinceCode": "66"
        },
        {
            "code": "24221",
            "name": "Xã Ia Rvê",
            "provinceCode": "66"
        },
        {
            "code": "24229",
            "name": "Xã Ea Bung",
            "provinceCode": "66"
        },
        {
            "code": "24235",
            "name": "Xã Buôn Đôn",
            "provinceCode": "66"
        },
        {
            "code": "24241",
            "name": "Xã Ea Wer",
            "provinceCode": "66"
        },
        {
            "code": "24250",
            "name": "Xã Ea Nuôl",
            "provinceCode": "66"
        },
        {
            "code": "24259",
            "name": "Xã Quảng Phú",
            "provinceCode": "66"
        },
        {
            "code": "24265",
            "name": "Xã Ea Kiết",
            "provinceCode": "66"
        },
        {
            "code": "24277",
            "name": "Xã Ea Tul",
            "provinceCode": "66"
        },
        {
            "code": "24280",
            "name": "Xã Cư M’gar",
            "provinceCode": "66"
        },
        {
            "code": "24286",
            "name": "Xã Ea M’Droh",
            "provinceCode": "66"
        },
        {
            "code": "24301",
            "name": "Xã Cuôr Đăng",
            "provinceCode": "66"
        },
        {
            "code": "24305",
            "name": "Phường Buôn Hồ",
            "provinceCode": "66"
        },
        {
            "code": "24310",
            "name": "Xã Krông Búk",
            "provinceCode": "66"
        },
        {
            "code": "24313",
            "name": "Xã Cư Pơng",
            "provinceCode": "66"
        },
        {
            "code": "24316",
            "name": "Xã Pơng Drang",
            "provinceCode": "66"
        },
        {
            "code": "24328",
            "name": "Xã Ea Drông",
            "provinceCode": "66"
        },
        {
            "code": "24340",
            "name": "Phường Cư Bao",
            "provinceCode": "66"
        },
        {
            "code": "24343",
            "name": "Xã Krông Năng",
            "provinceCode": "66"
        },
        {
            "code": "24346",
            "name": "Xã Dliê Ya",
            "provinceCode": "66"
        },
        {
            "code": "24352",
            "name": "Xã Tam Giang",
            "provinceCode": "66"
        },
        {
            "code": "24364",
            "name": "Xã Phú Xuân",
            "provinceCode": "66"
        },
        {
            "code": "24373",
            "name": "Xã Ea Kar",
            "provinceCode": "66"
        },
        {
            "code": "24376",
            "name": "Xã Ea Knốp",
            "provinceCode": "66"
        },
        {
            "code": "24400",
            "name": "Xã Ea Păl",
            "provinceCode": "66"
        },
        {
            "code": "24403",
            "name": "Xã Ea Ô",
            "provinceCode": "66"
        },
        {
            "code": "24406",
            "name": "Xã Cư Yang",
            "provinceCode": "66"
        },
        {
            "code": "24412",
            "name": "Xã M’Drắk",
            "provinceCode": "66"
        },
        {
            "code": "24415",
            "name": "Xã Cư Prao",
            "provinceCode": "66"
        },
        {
            "code": "24433",
            "name": "Xã Ea Riêng",
            "provinceCode": "66"
        },
        {
            "code": "24436",
            "name": "Xã Cư M’ta",
            "provinceCode": "66"
        },
        {
            "code": "24444",
            "name": "Xã Krông Á",
            "provinceCode": "66"
        },
        {
            "code": "24445",
            "name": "Xã Ea Trang",
            "provinceCode": "66"
        },
        {
            "code": "24448",
            "name": "Xã Krông Bông",
            "provinceCode": "66"
        },
        {
            "code": "24454",
            "name": "Xã Dang Kang",
            "provinceCode": "66"
        },
        {
            "code": "24472",
            "name": "Xã Hòa Sơn",
            "provinceCode": "66"
        },
        {
            "code": "24478",
            "name": "Xã Cư Pui",
            "provinceCode": "66"
        },
        {
            "code": "24484",
            "name": "Xã Yang Mao",
            "provinceCode": "66"
        },
        {
            "code": "24490",
            "name": "Xã Krông Pắc",
            "provinceCode": "66"
        },
        {
            "code": "24496",
            "name": "Xã Ea Kly",
            "provinceCode": "66"
        },
        {
            "code": "24502",
            "name": "Xã Ea Phê",
            "provinceCode": "66"
        },
        {
            "code": "24505",
            "name": "Xã Ea Knuếc",
            "provinceCode": "66"
        },
        {
            "code": "24526",
            "name": "Xã Tân Tiến",
            "provinceCode": "66"
        },
        {
            "code": "24529",
            "name": "Xã Vụ Bổn",
            "provinceCode": "66"
        },
        {
            "code": "24538",
            "name": "Xã Krông Ana",
            "provinceCode": "66"
        },
        {
            "code": "24540",
            "name": "Xã Ea Ning",
            "provinceCode": "66"
        },
        {
            "code": "24544",
            "name": "Xã Ea Ktur",
            "provinceCode": "66"
        },
        {
            "code": "24559",
            "name": "Xã Ea Na",
            "provinceCode": "66"
        },
        {
            "code": "24561",
            "name": "Xã Dray Bhăng",
            "provinceCode": "66"
        },
        {
            "code": "24568",
            "name": "Xã Dur Kmăl",
            "provinceCode": "66"
        },
        {
            "code": "24580",
            "name": "Xã Liên Sơn Lắk",
            "provinceCode": "66"
        },
        {
            "code": "24595",
            "name": "Xã Đắk Liêng",
            "provinceCode": "66"
        },
        {
            "code": "24598",
            "name": "Xã Đắk Phơi",
            "provinceCode": "66"
        },
        {
            "code": "24604",
            "name": "Xã Krông Nô",
            "provinceCode": "66"
        },
        {
            "code": "24607",
            "name": "Xã Nam Ka",
            "provinceCode": "66"
        },
        {
            "code": "22918",
            "name": "Phường Mũi Né",
            "provinceCode": "68"
        },
        {
            "code": "22924",
            "name": "Phường Phú Thuỷ",
            "provinceCode": "68"
        },
        {
            "code": "22933",
            "name": "Phường Hàm Thắng",
            "provinceCode": "68"
        },
        {
            "code": "22945",
            "name": "Phường Phan Thiết",
            "provinceCode": "68"
        },
        {
            "code": "22954",
            "name": "Phường Tiến Thành",
            "provinceCode": "68"
        },
        {
            "code": "22960",
            "name": "Phường Bình Thuận",
            "provinceCode": "68"
        },
        {
            "code": "22963",
            "name": "Xã Tuyên Quang",
            "provinceCode": "68"
        },
        {
            "code": "22969",
            "name": "Xã Liên Hương",
            "provinceCode": "68"
        },
        {
            "code": "22972",
            "name": "Xã Phan Rí Cửa",
            "provinceCode": "68"
        },
        {
            "code": "22978",
            "name": "Xã Tuy Phong",
            "provinceCode": "68"
        },
        {
            "code": "22981",
            "name": "Xã Vĩnh Hảo",
            "provinceCode": "68"
        },
        {
            "code": "23005",
            "name": "Xã Bắc Bình",
            "provinceCode": "68"
        },
        {
            "code": "23008",
            "name": "Xã Phan Sơn",
            "provinceCode": "68"
        },
        {
            "code": "23020",
            "name": "Xã Hải Ninh",
            "provinceCode": "68"
        },
        {
            "code": "23023",
            "name": "Xã Sông Lũy",
            "provinceCode": "68"
        },
        {
            "code": "23032",
            "name": "Xã Lương Sơn",
            "provinceCode": "68"
        },
        {
            "code": "23041",
            "name": "Xã Hồng Thái",
            "provinceCode": "68"
        },
        {
            "code": "23053",
            "name": "Xã Hòa Thắng",
            "provinceCode": "68"
        },
        {
            "code": "23059",
            "name": "Xã Hàm Thuận",
            "provinceCode": "68"
        },
        {
            "code": "23065",
            "name": "Xã La Dạ",
            "provinceCode": "68"
        },
        {
            "code": "23074",
            "name": "Xã Đông Giang",
            "provinceCode": "68"
        },
        {
            "code": "23086",
            "name": "Xã Hồng Sơn",
            "provinceCode": "68"
        },
        {
            "code": "23089",
            "name": "Xã Hàm Thuận Bắc",
            "provinceCode": "68"
        },
        {
            "code": "23095",
            "name": "Xã Hàm Liêm",
            "provinceCode": "68"
        },
        {
            "code": "23110",
            "name": "Xã Hàm Thuận Nam",
            "provinceCode": "68"
        },
        {
            "code": "23122",
            "name": "Xã Hàm Thạnh",
            "provinceCode": "68"
        },
        {
            "code": "23128",
            "name": "Xã Hàm Kiệm",
            "provinceCode": "68"
        },
        {
            "code": "23134",
            "name": "Xã Tân Lập",
            "provinceCode": "68"
        },
        {
            "code": "23143",
            "name": "Xã Tân Thành",
            "provinceCode": "68"
        },
        {
            "code": "23149",
            "name": "Xã Tánh Linh",
            "provinceCode": "68"
        },
        {
            "code": "23152",
            "name": "Xã Bắc Ruộng",
            "provinceCode": "68"
        },
        {
            "code": "23158",
            "name": "Xã Nghị Đức",
            "provinceCode": "68"
        },
        {
            "code": "23173",
            "name": "Xã Đồng Kho",
            "provinceCode": "68"
        },
        {
            "code": "23188",
            "name": "Xã Suối Kiết",
            "provinceCode": "68"
        },
        {
            "code": "23191",
            "name": "Xã Đức Linh",
            "provinceCode": "68"
        },
        {
            "code": "23194",
            "name": "Xã Hoài Đức",
            "provinceCode": "68"
        },
        {
            "code": "23200",
            "name": "Xã Nam Thành",
            "provinceCode": "68"
        },
        {
            "code": "23227",
            "name": "Xã Trà Tân",
            "provinceCode": "68"
        },
        {
            "code": "23230",
            "name": "Xã Tân Minh",
            "provinceCode": "68"
        },
        {
            "code": "23231",
            "name": "Phường Phước Hội",
            "provinceCode": "68"
        },
        {
            "code": "23235",
            "name": "Phường La Gi",
            "provinceCode": "68"
        },
        {
            "code": "23236",
            "name": "Xã Hàm Tân",
            "provinceCode": "68"
        },
        {
            "code": "23246",
            "name": "Xã Tân Hải",
            "provinceCode": "68"
        },
        {
            "code": "23266",
            "name": "Xã Sơn Mỹ",
            "provinceCode": "68"
        },
        {
            "code": "23272",
            "name": "Đặc khu Phú Quý",
            "provinceCode": "68"
        },
        {
            "code": "24611",
            "name": "Phường Bắc Gia Nghĩa",
            "provinceCode": "68"
        },
        {
            "code": "24615",
            "name": "Phường Nam Gia Nghĩa",
            "provinceCode": "68"
        },
        {
            "code": "24616",
            "name": "Xã Quảng Sơn",
            "provinceCode": "68"
        },
        {
            "code": "24617",
            "name": "Phường Đông Gia Nghĩa",
            "provinceCode": "68"
        },
        {
            "code": "24620",
            "name": "Xã Quảng Hòa",
            "provinceCode": "68"
        },
        {
            "code": "24631",
            "name": "Xã Quảng Khê",
            "provinceCode": "68"
        },
        {
            "code": "24637",
            "name": "Xã Tà Đùng",
            "provinceCode": "68"
        },
        {
            "code": "24640",
            "name": "Xã Cư Jút",
            "provinceCode": "68"
        },
        {
            "code": "24646",
            "name": "Xã Đắk Wil",
            "provinceCode": "68"
        },
        {
            "code": "24649",
            "name": "Xã Nam Dong",
            "provinceCode": "68"
        },
        {
            "code": "24664",
            "name": "Xã Đức Lập",
            "provinceCode": "68"
        },
        {
            "code": "24670",
            "name": "Xã Đắk Mil",
            "provinceCode": "68"
        },
        {
            "code": "24678",
            "name": "Xã Đắk Sắk",
            "provinceCode": "68"
        },
        {
            "code": "24682",
            "name": "Xã Thuận An",
            "provinceCode": "68"
        },
        {
            "code": "24688",
            "name": "Xã Krông Nô",
            "provinceCode": "68"
        },
        {
            "code": "24697",
            "name": "Xã Nam Đà",
            "provinceCode": "68"
        },
        {
            "code": "24703",
            "name": "Xã Nâm Nung",
            "provinceCode": "68"
        },
        {
            "code": "24712",
            "name": "Xã Quảng Phú",
            "provinceCode": "68"
        },
        {
            "code": "24717",
            "name": "Xã Đức An",
            "provinceCode": "68"
        },
        {
            "code": "24718",
            "name": "Xã Đắk Song",
            "provinceCode": "68"
        },
        {
            "code": "24722",
            "name": "Xã Thuận Hạnh",
            "provinceCode": "68"
        },
        {
            "code": "24730",
            "name": "Xã Trường Xuân",
            "provinceCode": "68"
        },
        {
            "code": "24733",
            "name": "Xã Kiến Đức",
            "provinceCode": "68"
        },
        {
            "code": "24736",
            "name": "Xã Quảng Trực",
            "provinceCode": "68"
        },
        {
            "code": "24739",
            "name": "Xã Tuy Đức",
            "provinceCode": "68"
        },
        {
            "code": "24748",
            "name": "Xã Quảng Tân",
            "provinceCode": "68"
        },
        {
            "code": "24751",
            "name": "Xã Nhân Cơ",
            "provinceCode": "68"
        },
        {
            "code": "24760",
            "name": "Xã Quảng Tín",
            "provinceCode": "68"
        },
        {
            "code": "24778",
            "name": "Phường Lâm Viên - Đà Lạt",
            "provinceCode": "68"
        },
        {
            "code": "24781",
            "name": "Phường Xuân Hương - Đà Lạt",
            "provinceCode": "68"
        },
        {
            "code": "24787",
            "name": "Phường Cam Ly - Đà Lạt",
            "provinceCode": "68"
        },
        {
            "code": "24805",
            "name": "Phường Xuân Trường - Đà Lạt",
            "provinceCode": "68"
        },
        {
            "code": "24820",
            "name": "Phường 2 Bảo Lộc",
            "provinceCode": "68"
        },
        {
            "code": "24823",
            "name": "Phường 1 Bảo Lộc",
            "provinceCode": "68"
        },
        {
            "code": "24829",
            "name": "Phường B’Lao",
            "provinceCode": "68"
        },
        {
            "code": "24841",
            "name": "Phường 3 Bảo Lộc",
            "provinceCode": "68"
        },
        {
            "code": "24846",
            "name": "Phường Lang Biang - Đà Lạt",
            "provinceCode": "68"
        },
        {
            "code": "24848",
            "name": "Xã Lạc Dương",
            "provinceCode": "68"
        },
        {
            "code": "24853",
            "name": "Xã Đam Rông 4",
            "provinceCode": "68"
        },
        {
            "code": "24868",
            "name": "Xã Nam Ban Lâm Hà",
            "provinceCode": "68"
        },
        {
            "code": "24871",
            "name": "Xã Đinh Văn Lâm Hà",
            "provinceCode": "68"
        },
        {
            "code": "24875",
            "name": "Xã Đam Rông 3",
            "provinceCode": "68"
        },
        {
            "code": "24877",
            "name": "Xã Đam Rông 2",
            "provinceCode": "68"
        },
        {
            "code": "24883",
            "name": "Xã Nam Hà Lâm Hà",
            "provinceCode": "68"
        },
        {
            "code": "24886",
            "name": "Xã Đam Rông 1",
            "provinceCode": "68"
        },
        {
            "code": "24895",
            "name": "Xã Phú Sơn Lâm Hà",
            "provinceCode": "68"
        },
        {
            "code": "24907",
            "name": "Xã Phúc Thọ Lâm Hà",
            "provinceCode": "68"
        },
        {
            "code": "24916",
            "name": "Xã Tân Hà Lâm Hà",
            "provinceCode": "68"
        },
        {
            "code": "24931",
            "name": "Xã Đơn Dương",
            "provinceCode": "68"
        },
        {
            "code": "24934",
            "name": "Xã D’Ran",
            "provinceCode": "68"
        },
        {
            "code": "24943",
            "name": "Xã Ka Đô",
            "provinceCode": "68"
        },
        {
            "code": "24955",
            "name": "Xã Quảng Lập",
            "provinceCode": "68"
        },
        {
            "code": "24958",
            "name": "Xã Đức Trọng",
            "provinceCode": "68"
        },
        {
            "code": "24967",
            "name": "Xã Hiệp Thạnh",
            "provinceCode": "68"
        },
        {
            "code": "24976",
            "name": "Xã Tân Hội",
            "provinceCode": "68"
        },
        {
            "code": "24985",
            "name": "Xã Ninh Gia",
            "provinceCode": "68"
        },
        {
            "code": "24988",
            "name": "Xã Tà Năng",
            "provinceCode": "68"
        },
        {
            "code": "24991",
            "name": "Xã Tà Hine",
            "provinceCode": "68"
        },
        {
            "code": "25000",
            "name": "Xã Di Linh",
            "provinceCode": "68"
        },
        {
            "code": "25007",
            "name": "Xã Đinh Trang Thượng",
            "provinceCode": "68"
        },
        {
            "code": "25015",
            "name": "Xã Gia Hiệp",
            "provinceCode": "68"
        },
        {
            "code": "25018",
            "name": "Xã Bảo Thuận",
            "provinceCode": "68"
        },
        {
            "code": "25036",
            "name": "Xã Hòa Ninh",
            "provinceCode": "68"
        },
        {
            "code": "25042",
            "name": "Xã Hòa Bắc",
            "provinceCode": "68"
        },
        {
            "code": "25051",
            "name": "Xã Sơn Điền",
            "provinceCode": "68"
        },
        {
            "code": "25054",
            "name": "Xã Bảo Lâm 1",
            "provinceCode": "68"
        },
        {
            "code": "25057",
            "name": "Xã Bảo Lâm 5",
            "provinceCode": "68"
        },
        {
            "code": "25063",
            "name": "Xã Bảo Lâm 4",
            "provinceCode": "68"
        },
        {
            "code": "25084",
            "name": "Xã Bảo Lâm 2",
            "provinceCode": "68"
        },
        {
            "code": "25093",
            "name": "Xã Bảo Lâm 3",
            "provinceCode": "68"
        },
        {
            "code": "25099",
            "name": "Xã Đạ Huoai",
            "provinceCode": "68"
        },
        {
            "code": "25105",
            "name": "Xã Đạ Huoai 2",
            "provinceCode": "68"
        },
        {
            "code": "25114",
            "name": "Xã Đạ Huoai 3",
            "provinceCode": "68"
        },
        {
            "code": "25126",
            "name": "Xã Đạ Tẻh",
            "provinceCode": "68"
        },
        {
            "code": "25135",
            "name": "Xã Đạ Tẻh 3",
            "provinceCode": "68"
        },
        {
            "code": "25138",
            "name": "Xã Đạ Tẻh 2",
            "provinceCode": "68"
        },
        {
            "code": "25159",
            "name": "Xã Cát Tiên",
            "provinceCode": "68"
        },
        {
            "code": "25162",
            "name": "Xã Cát Tiên 3",
            "provinceCode": "68"
        },
        {
            "code": "25180",
            "name": "Xã Cát Tiên 2",
            "provinceCode": "68"
        },
        {
            "code": "25195",
            "name": "Phường Bình Phước",
            "provinceCode": "75"
        },
        {
            "code": "25210",
            "name": "Phường Đồng Xoài",
            "provinceCode": "75"
        },
        {
            "code": "25217",
            "name": "Phường Phước Long",
            "provinceCode": "75"
        },
        {
            "code": "25220",
            "name": "Phường Phước Bình",
            "provinceCode": "75"
        },
        {
            "code": "25222",
            "name": "Xã Bù Gia Mập",
            "provinceCode": "75"
        },
        {
            "code": "25225",
            "name": "Xã Đăk Ơ",
            "provinceCode": "75"
        },
        {
            "code": "25231",
            "name": "Xã Đa Kia",
            "provinceCode": "75"
        },
        {
            "code": "25246",
            "name": "Xã Bình Tân",
            "provinceCode": "75"
        },
        {
            "code": "25252",
            "name": "Xã Phú Riềng",
            "provinceCode": "75"
        },
        {
            "code": "25255",
            "name": "Xã Long Hà",
            "provinceCode": "75"
        },
        {
            "code": "25261",
            "name": "Xã Phú Trung",
            "provinceCode": "75"
        },
        {
            "code": "25267",
            "name": "Xã Phú Nghĩa",
            "provinceCode": "75"
        },
        {
            "code": "25270",
            "name": "Xã Lộc Ninh",
            "provinceCode": "75"
        },
        {
            "code": "25279",
            "name": "Xã Lộc Tấn",
            "provinceCode": "75"
        },
        {
            "code": "25280",
            "name": "Xã Lộc Thạnh",
            "provinceCode": "75"
        },
        {
            "code": "25292",
            "name": "Xã Lộc Quang",
            "provinceCode": "75"
        },
        {
            "code": "25294",
            "name": "Xã Lộc Thành",
            "provinceCode": "75"
        },
        {
            "code": "25303",
            "name": "Xã Lộc Hưng",
            "provinceCode": "75"
        },
        {
            "code": "25308",
            "name": "Xã Thiện Hưng",
            "provinceCode": "75"
        },
        {
            "code": "25309",
            "name": "Xã Hưng Phước",
            "provinceCode": "75"
        },
        {
            "code": "25318",
            "name": "Xã Tân Tiến",
            "provinceCode": "75"
        },
        {
            "code": "25326",
            "name": "Phường Bình Long",
            "provinceCode": "75"
        },
        {
            "code": "25333",
            "name": "Phường An Lộc",
            "provinceCode": "75"
        },
        {
            "code": "25345",
            "name": "Xã Tân Hưng",
            "provinceCode": "75"
        },
        {
            "code": "25349",
            "name": "Xã Minh Đức",
            "provinceCode": "75"
        },
        {
            "code": "25351",
            "name": "Xã Tân Quan",
            "provinceCode": "75"
        },
        {
            "code": "25357",
            "name": "Xã Tân Khai",
            "provinceCode": "75"
        },
        {
            "code": "25363",
            "name": "Xã Đồng Phú",
            "provinceCode": "75"
        },
        {
            "code": "25378",
            "name": "Xã Tân Lợi",
            "provinceCode": "75"
        },
        {
            "code": "25387",
            "name": "Xã Thuận Lợi",
            "provinceCode": "75"
        },
        {
            "code": "25390",
            "name": "Xã Đồng Tâm",
            "provinceCode": "75"
        },
        {
            "code": "25396",
            "name": "Xã Bù Đăng",
            "provinceCode": "75"
        },
        {
            "code": "25399",
            "name": "Xã Đak Nhau",
            "provinceCode": "75"
        },
        {
            "code": "25402",
            "name": "Xã Thọ Sơn",
            "provinceCode": "75"
        },
        {
            "code": "25405",
            "name": "Xã Bom Bo",
            "provinceCode": "75"
        },
        {
            "code": "25417",
            "name": "Xã Nghĩa Trung",
            "provinceCode": "75"
        },
        {
            "code": "25420",
            "name": "Xã Phước Sơn",
            "provinceCode": "75"
        },
        {
            "code": "25432",
            "name": "Phường Chơn Thành",
            "provinceCode": "75"
        },
        {
            "code": "25441",
            "name": "Phường Minh Hưng",
            "provinceCode": "75"
        },
        {
            "code": "25450",
            "name": "Xã Nha Bích",
            "provinceCode": "75"
        },
        {
            "code": "25993",
            "name": "Phường Trảng Dài",
            "provinceCode": "75"
        },
        {
            "code": "26005",
            "name": "Phường Hố Nai",
            "provinceCode": "75"
        },
        {
            "code": "26017",
            "name": "Phường Tam Hiệp",
            "provinceCode": "75"
        },
        {
            "code": "26020",
            "name": "Phường Long Bình",
            "provinceCode": "75"
        },
        {
            "code": "26041",
            "name": "Phường Trấn Biên",
            "provinceCode": "75"
        },
        {
            "code": "26068",
            "name": "Phường Biên Hòa",
            "provinceCode": "75"
        },
        {
            "code": "26080",
            "name": "Phường Long Khánh",
            "provinceCode": "75"
        },
        {
            "code": "26089",
            "name": "Phường Bình Lộc",
            "provinceCode": "75"
        },
        {
            "code": "26098",
            "name": "Phường Bảo Vinh",
            "provinceCode": "75"
        },
        {
            "code": "26104",
            "name": "Phường Xuân Lập",
            "provinceCode": "75"
        },
        {
            "code": "26113",
            "name": "Phường Hàng Gòn",
            "provinceCode": "75"
        },
        {
            "code": "26116",
            "name": "Xã Tân Phú",
            "provinceCode": "75"
        },
        {
            "code": "26119",
            "name": "Xã Đak Lua",
            "provinceCode": "75"
        },
        {
            "code": "26122",
            "name": "Xã Nam Cát Tiên",
            "provinceCode": "75"
        },
        {
            "code": "26134",
            "name": "Xã Tà Lài",
            "provinceCode": "75"
        },
        {
            "code": "26158",
            "name": "Xã Phú Lâm",
            "provinceCode": "75"
        },
        {
            "code": "26170",
            "name": "Xã Trị An",
            "provinceCode": "75"
        },
        {
            "code": "26173",
            "name": "Xã Phú Lý",
            "provinceCode": "75"
        },
        {
            "code": "26179",
            "name": "Xã Tân An",
            "provinceCode": "75"
        },
        {
            "code": "26188",
            "name": "Phường Tân Triều",
            "provinceCode": "75"
        },
        {
            "code": "26206",
            "name": "Xã Định Quán",
            "provinceCode": "75"
        },
        {
            "code": "26209",
            "name": "Xã Thanh Sơn",
            "provinceCode": "75"
        },
        {
            "code": "26215",
            "name": "Xã Phú Vinh",
            "provinceCode": "75"
        },
        {
            "code": "26221",
            "name": "Xã Phú Hòa",
            "provinceCode": "75"
        },
        {
            "code": "26227",
            "name": "Xã La Ngà",
            "provinceCode": "75"
        },
        {
            "code": "26248",
            "name": "Xã Trảng Bom",
            "provinceCode": "75"
        },
        {
            "code": "26254",
            "name": "Xã Bàu Hàm",
            "provinceCode": "75"
        },
        {
            "code": "26278",
            "name": "Xã Bình Minh",
            "provinceCode": "75"
        },
        {
            "code": "26281",
            "name": "Xã Hưng Thịnh",
            "provinceCode": "75"
        },
        {
            "code": "26296",
            "name": "Xã An Viễn",
            "provinceCode": "75"
        },
        {
            "code": "26299",
            "name": "Xã Thống Nhất",
            "provinceCode": "75"
        },
        {
            "code": "26311",
            "name": "Xã Gia Kiệm",
            "provinceCode": "75"
        },
        {
            "code": "26326",
            "name": "Xã Dầu Giây",
            "provinceCode": "75"
        },
        {
            "code": "26332",
            "name": "Xã Xuân Quế",
            "provinceCode": "75"
        },
        {
            "code": "26341",
            "name": "Xã Cẩm Mỹ",
            "provinceCode": "75"
        },
        {
            "code": "26347",
            "name": "Xã Xuân Đường",
            "provinceCode": "75"
        },
        {
            "code": "26359",
            "name": "Xã Xuân Đông",
            "provinceCode": "75"
        },
        {
            "code": "26362",
            "name": "Xã Sông Ray",
            "provinceCode": "75"
        },
        {
            "code": "26368",
            "name": "Xã Long Thành",
            "provinceCode": "75"
        },
        {
            "code": "26374",
            "name": "Phường Tam Phước",
            "provinceCode": "75"
        },
        {
            "code": "26377",
            "name": "Phường Phước Tân",
            "provinceCode": "75"
        },
        {
            "code": "26380",
            "name": "Phường Long Hưng",
            "provinceCode": "75"
        },
        {
            "code": "26383",
            "name": "Xã An Phước",
            "provinceCode": "75"
        },
        {
            "code": "26389",
            "name": "Xã Bình An",
            "provinceCode": "75"
        },
        {
            "code": "26413",
            "name": "Xã Long Phước",
            "provinceCode": "75"
        },
        {
            "code": "26422",
            "name": "Xã Phước Thái",
            "provinceCode": "75"
        },
        {
            "code": "26425",
            "name": "Xã Xuân Lộc",
            "provinceCode": "75"
        },
        {
            "code": "26428",
            "name": "Xã Xuân Bắc",
            "provinceCode": "75"
        },
        {
            "code": "26434",
            "name": "Xã Xuân Thành",
            "provinceCode": "75"
        },
        {
            "code": "26446",
            "name": "Xã Xuân Hòa",
            "provinceCode": "75"
        },
        {
            "code": "26458",
            "name": "Xã Xuân Phú",
            "provinceCode": "75"
        },
        {
            "code": "26461",
            "name": "Xã Xuân Định",
            "provinceCode": "75"
        },
        {
            "code": "26485",
            "name": "Xã Nhơn Trạch",
            "provinceCode": "75"
        },
        {
            "code": "26491",
            "name": "Xã Đại Phước",
            "provinceCode": "75"
        },
        {
            "code": "26503",
            "name": "Xã Phước An",
            "provinceCode": "75"
        },
        {
            "code": "25747",
            "name": "Phường Thủ Dầu Một",
            "provinceCode": "79"
        },
        {
            "code": "25750",
            "name": "Phường Phú Lợi",
            "provinceCode": "79"
        },
        {
            "code": "25760",
            "name": "Phường Bình Dương",
            "provinceCode": "79"
        },
        {
            "code": "25768",
            "name": "Phường Phú An",
            "provinceCode": "79"
        },
        {
            "code": "25771",
            "name": "Phường Chánh Hiệp",
            "provinceCode": "79"
        },
        {
            "code": "25777",
            "name": "Xã Dầu Tiếng",
            "provinceCode": "79"
        },
        {
            "code": "25780",
            "name": "Xã Minh Thạnh",
            "provinceCode": "79"
        },
        {
            "code": "25792",
            "name": "Xã Long Hòa",
            "provinceCode": "79"
        },
        {
            "code": "25807",
            "name": "Xã Thanh An",
            "provinceCode": "79"
        },
        {
            "code": "25813",
            "name": "Phường Bến Cát",
            "provinceCode": "79"
        },
        {
            "code": "25819",
            "name": "Xã Trừ Văn Thố",
            "provinceCode": "79"
        },
        {
            "code": "25822",
            "name": "Xã Bàu Bàng",
            "provinceCode": "79"
        },
        {
            "code": "25837",
            "name": "Phường Chánh Phú Hòa",
            "provinceCode": "79"
        },
        {
            "code": "25840",
            "name": "Phường Long Nguyên",
            "provinceCode": "79"
        },
        {
            "code": "25843",
            "name": "Phường Tây Nam",
            "provinceCode": "79"
        },
        {
            "code": "25846",
            "name": "Phường Thới Hòa",
            "provinceCode": "79"
        },
        {
            "code": "25849",
            "name": "Phường Hòa Lợi",
            "provinceCode": "79"
        },
        {
            "code": "25858",
            "name": "Xã Phú Giáo",
            "provinceCode": "79"
        },
        {
            "code": "25864",
            "name": "Xã Phước Thành",
            "provinceCode": "79"
        },
        {
            "code": "25867",
            "name": "Xã An Long",
            "provinceCode": "79"
        },
        {
            "code": "25882",
            "name": "Xã Phước Hòa",
            "provinceCode": "79"
        },
        {
            "code": "25888",
            "name": "Phường Tân Uyên",
            "provinceCode": "79"
        },
        {
            "code": "25891",
            "name": "Phường Tân Khánh",
            "provinceCode": "79"
        },
        {
            "code": "25906",
            "name": "Xã Bắc Tân Uyên",
            "provinceCode": "79"
        },
        {
            "code": "25909",
            "name": "Xã Thường Tân",
            "provinceCode": "79"
        },
        {
            "code": "25912",
            "name": "Phường Vĩnh Tân",
            "provinceCode": "79"
        },
        {
            "code": "25915",
            "name": "Phường Bình Cơ",
            "provinceCode": "79"
        },
        {
            "code": "25920",
            "name": "Phường Tân Hiệp",
            "provinceCode": "79"
        },
        {
            "code": "25942",
            "name": "Phường Dĩ An",
            "provinceCode": "79"
        },
        {
            "code": "25945",
            "name": "Phường Tân Đông Hiệp",
            "provinceCode": "79"
        },
        {
            "code": "25951",
            "name": "Phường Đông Hòa",
            "provinceCode": "79"
        },
        {
            "code": "25966",
            "name": "Phường Lái Thiêu",
            "provinceCode": "79"
        },
        {
            "code": "25969",
            "name": "Phường Thuận Giao",
            "provinceCode": "79"
        },
        {
            "code": "25975",
            "name": "Phường An Phú",
            "provinceCode": "79"
        },
        {
            "code": "25978",
            "name": "Phường Thuận An",
            "provinceCode": "79"
        },
        {
            "code": "25987",
            "name": "Phường Bình Hòa",
            "provinceCode": "79"
        },
        {
            "code": "26506",
            "name": "Phường Vũng Tàu",
            "provinceCode": "79"
        },
        {
            "code": "26526",
            "name": "Phường Tam Thắng",
            "provinceCode": "79"
        },
        {
            "code": "26536",
            "name": "Phường Rạch Dừa",
            "provinceCode": "79"
        },
        {
            "code": "26542",
            "name": "Phường Phước Thắng",
            "provinceCode": "79"
        },
        {
            "code": "26545",
            "name": "Xã Long Sơn",
            "provinceCode": "79"
        },
        {
            "code": "26560",
            "name": "Phường Bà Rịa",
            "provinceCode": "79"
        },
        {
            "code": "26566",
            "name": "Phường Long Hương",
            "provinceCode": "79"
        },
        {
            "code": "26572",
            "name": "Phường Tam Long",
            "provinceCode": "79"
        },
        {
            "code": "26575",
            "name": "Xã Ngãi Giao",
            "provinceCode": "79"
        },
        {
            "code": "26584",
            "name": "Xã Xuân Sơn",
            "provinceCode": "79"
        },
        {
            "code": "26590",
            "name": "Xã Bình Giã",
            "provinceCode": "79"
        },
        {
            "code": "26596",
            "name": "Xã Châu Đức",
            "provinceCode": "79"
        },
        {
            "code": "26608",
            "name": "Xã Kim Long",
            "provinceCode": "79"
        },
        {
            "code": "26617",
            "name": "Xã Nghĩa Thành",
            "provinceCode": "79"
        },
        {
            "code": "26620",
            "name": "Xã Hồ Tràm",
            "provinceCode": "79"
        },
        {
            "code": "26632",
            "name": "Xã Xuyên Mộc",
            "provinceCode": "79"
        },
        {
            "code": "26638",
            "name": "Xã Bàu Lâm",
            "provinceCode": "79"
        },
        {
            "code": "26641",
            "name": "Xã Hòa Hội",
            "provinceCode": "79"
        },
        {
            "code": "26647",
            "name": "Xã Hòa Hiệp",
            "provinceCode": "79"
        },
        {
            "code": "26656",
            "name": "Xã Bình Châu",
            "provinceCode": "79"
        },
        {
            "code": "26659",
            "name": "Xã Long Điền",
            "provinceCode": "79"
        },
        {
            "code": "26662",
            "name": "Xã Long Hải",
            "provinceCode": "79"
        },
        {
            "code": "26680",
            "name": "Xã Đất Đỏ",
            "provinceCode": "79"
        },
        {
            "code": "26686",
            "name": "Xã Phước Hải",
            "provinceCode": "79"
        },
        {
            "code": "26704",
            "name": "Phường Phú Mỹ",
            "provinceCode": "79"
        },
        {
            "code": "26710",
            "name": "Phường Tân Hải",
            "provinceCode": "79"
        },
        {
            "code": "26713",
            "name": "Phường Tân Phước",
            "provinceCode": "79"
        },
        {
            "code": "26725",
            "name": "Phường Tân Thành",
            "provinceCode": "79"
        },
        {
            "code": "26728",
            "name": "Xã Châu Pha",
            "provinceCode": "79"
        },
        {
            "code": "26732",
            "name": "Đặc khu Côn Đảo",
            "provinceCode": "79"
        },
        {
            "code": "26737",
            "name": "Phường Tân Định",
            "provinceCode": "79"
        },
        {
            "code": "26740",
            "name": "Phường Sài Gòn",
            "provinceCode": "79"
        },
        {
            "code": "26743",
            "name": "Phường Bến Thành",
            "provinceCode": "79"
        },
        {
            "code": "26758",
            "name": "Phường Cầu Ông Lãnh",
            "provinceCode": "79"
        },
        {
            "code": "26767",
            "name": "Phường An Phú Đông",
            "provinceCode": "79"
        },
        {
            "code": "26773",
            "name": "Phường Thới An",
            "provinceCode": "79"
        },
        {
            "code": "26782",
            "name": "Phường Tân Thới Hiệp",
            "provinceCode": "79"
        },
        {
            "code": "26785",
            "name": "Phường Trung Mỹ Tây",
            "provinceCode": "79"
        },
        {
            "code": "26791",
            "name": "Phường Đông Hưng Thuận",
            "provinceCode": "79"
        },
        {
            "code": "26800",
            "name": "Phường Linh Xuân",
            "provinceCode": "79"
        },
        {
            "code": "26803",
            "name": "Phường Tam Bình",
            "provinceCode": "79"
        },
        {
            "code": "26809",
            "name": "Phường Hiệp Bình",
            "provinceCode": "79"
        },
        {
            "code": "26824",
            "name": "Phường Thủ Đức",
            "provinceCode": "79"
        },
        {
            "code": "26833",
            "name": "Phường Long Bình",
            "provinceCode": "79"
        },
        {
            "code": "26842",
            "name": "Phường Tăng Nhơn Phú",
            "provinceCode": "79"
        },
        {
            "code": "26848",
            "name": "Phường Phước Long",
            "provinceCode": "79"
        },
        {
            "code": "26857",
            "name": "Phường Long Phước",
            "provinceCode": "79"
        },
        {
            "code": "26860",
            "name": "Phường Long Trường",
            "provinceCode": "79"
        },
        {
            "code": "26876",
            "name": "Phường An Nhơn",
            "provinceCode": "79"
        },
        {
            "code": "26878",
            "name": "Phường An Hội Đông",
            "provinceCode": "79"
        },
        {
            "code": "26882",
            "name": "Phường An Hội Tây",
            "provinceCode": "79"
        },
        {
            "code": "26884",
            "name": "Phường Gò Vấp",
            "provinceCode": "79"
        },
        {
            "code": "26890",
            "name": "Phường Hạnh Thông",
            "provinceCode": "79"
        },
        {
            "code": "26898",
            "name": "Phường Thông Tây Hội",
            "provinceCode": "79"
        },
        {
            "code": "26905",
            "name": "Phường Bình Lợi Trung",
            "provinceCode": "79"
        },
        {
            "code": "26911",
            "name": "Phường Bình Quới",
            "provinceCode": "79"
        },
        {
            "code": "26929",
            "name": "Phường Bình Thạnh",
            "provinceCode": "79"
        },
        {
            "code": "26944",
            "name": "Phường Gia Định",
            "provinceCode": "79"
        },
        {
            "code": "26956",
            "name": "Phường Thạnh Mỹ Tây",
            "provinceCode": "79"
        },
        {
            "code": "26968",
            "name": "Phường Tân Sơn Nhất",
            "provinceCode": "79"
        },
        {
            "code": "26977",
            "name": "Phường Tân Sơn Hòa",
            "provinceCode": "79"
        },
        {
            "code": "26983",
            "name": "Phường Bảy Hiền",
            "provinceCode": "79"
        },
        {
            "code": "26995",
            "name": "Phường Tân Hòa",
            "provinceCode": "79"
        },
        {
            "code": "27004",
            "name": "Phường Tân Bình",
            "provinceCode": "79"
        },
        {
            "code": "27007",
            "name": "Phường Tân Sơn",
            "provinceCode": "79"
        },
        {
            "code": "27013",
            "name": "Phường Tây Thạnh",
            "provinceCode": "79"
        },
        {
            "code": "27019",
            "name": "Phường Tân Sơn Nhì",
            "provinceCode": "79"
        },
        {
            "code": "27022",
            "name": "Phường Phú Thọ Hòa",
            "provinceCode": "79"
        },
        {
            "code": "27028",
            "name": "Phường Phú Thạnh",
            "provinceCode": "79"
        },
        {
            "code": "27031",
            "name": "Phường Tân Phú",
            "provinceCode": "79"
        },
        {
            "code": "27043",
            "name": "Phường Đức Nhuận",
            "provinceCode": "79"
        },
        {
            "code": "27058",
            "name": "Phường Cầu Kiệu",
            "provinceCode": "79"
        },
        {
            "code": "27073",
            "name": "Phường Phú Nhuận",
            "provinceCode": "79"
        },
        {
            "code": "27094",
            "name": "Phường An Khánh",
            "provinceCode": "79"
        },
        {
            "code": "27097",
            "name": "Phường Bình Trưng",
            "provinceCode": "79"
        },
        {
            "code": "27112",
            "name": "Phường Cát Lái",
            "provinceCode": "79"
        },
        {
            "code": "27139",
            "name": "Phường Xuân Hòa",
            "provinceCode": "79"
        },
        {
            "code": "27142",
            "name": "Phường Nhiêu Lộc",
            "provinceCode": "79"
        },
        {
            "code": "27154",
            "name": "Phường Bàn Cờ",
            "provinceCode": "79"
        },
        {
            "code": "27163",
            "name": "Phường Hòa Hưng",
            "provinceCode": "79"
        },
        {
            "code": "27169",
            "name": "Phường Diên Hồng",
            "provinceCode": "79"
        },
        {
            "code": "27190",
            "name": "Phường Vườn Lài",
            "provinceCode": "79"
        },
        {
            "code": "27211",
            "name": "Phường Hòa Bình",
            "provinceCode": "79"
        },
        {
            "code": "27226",
            "name": "Phường Phú Thọ",
            "provinceCode": "79"
        },
        {
            "code": "27232",
            "name": "Phường Bình Thới",
            "provinceCode": "79"
        },
        {
            "code": "27238",
            "name": "Phường Minh Phụng",
            "provinceCode": "79"
        },
        {
            "code": "27259",
            "name": "Phường Xóm Chiếu",
            "provinceCode": "79"
        },
        {
            "code": "27265",
            "name": "Phường Khánh Hội",
            "provinceCode": "79"
        },
        {
            "code": "27286",
            "name": "Phường Vĩnh Hội",
            "provinceCode": "79"
        },
        {
            "code": "27301",
            "name": "Phường Chợ Quán",
            "provinceCode": "79"
        },
        {
            "code": "27316",
            "name": "Phường An Đông",
            "provinceCode": "79"
        },
        {
            "code": "27343",
            "name": "Phường Chợ Lớn",
            "provinceCode": "79"
        },
        {
            "code": "27349",
            "name": "Phường Phú Lâm",
            "provinceCode": "79"
        },
        {
            "code": "27364",
            "name": "Phường Bình Phú",
            "provinceCode": "79"
        },
        {
            "code": "27367",
            "name": "Phường Bình Tây",
            "provinceCode": "79"
        },
        {
            "code": "27373",
            "name": "Phường Bình Tiên",
            "provinceCode": "79"
        },
        {
            "code": "27418",
            "name": "Phường Chánh Hưng",
            "provinceCode": "79"
        },
        {
            "code": "27424",
            "name": "Phường Bình Đông",
            "provinceCode": "79"
        },
        {
            "code": "27427",
            "name": "Phường Phú Định",
            "provinceCode": "79"
        },
        {
            "code": "27439",
            "name": "Phường Bình Hưng Hòa",
            "provinceCode": "79"
        },
        {
            "code": "27442",
            "name": "Phường Bình Tân",
            "provinceCode": "79"
        },
        {
            "code": "27448",
            "name": "Phường Bình Trị Đông",
            "provinceCode": "79"
        },
        {
            "code": "27457",
            "name": "Phường Tân Tạo",
            "provinceCode": "79"
        },
        {
            "code": "27460",
            "name": "Phường An Lạc",
            "provinceCode": "79"
        },
        {
            "code": "27475",
            "name": "Phường Tân Hưng",
            "provinceCode": "79"
        },
        {
            "code": "27478",
            "name": "Phường Tân Thuận",
            "provinceCode": "79"
        },
        {
            "code": "27484",
            "name": "Phường Phú Thuận",
            "provinceCode": "79"
        },
        {
            "code": "27487",
            "name": "Phường Tân Mỹ",
            "provinceCode": "79"
        },
        {
            "code": "27496",
            "name": "Xã Tân An Hội",
            "provinceCode": "79"
        },
        {
            "code": "27508",
            "name": "Xã An Nhơn Tây",
            "provinceCode": "79"
        },
        {
            "code": "27511",
            "name": "Xã Nhuận Đức",
            "provinceCode": "79"
        },
        {
            "code": "27526",
            "name": "Xã Thái Mỹ",
            "provinceCode": "79"
        },
        {
            "code": "27541",
            "name": "Xã Phú Hòa Đông",
            "provinceCode": "79"
        },
        {
            "code": "27544",
            "name": "Xã Bình Mỹ",
            "provinceCode": "79"
        },
        {
            "code": "27553",
            "name": "Xã Củ Chi",
            "provinceCode": "79"
        },
        {
            "code": "27559",
            "name": "Xã Hóc Môn",
            "provinceCode": "79"
        },
        {
            "code": "27568",
            "name": "Xã Đông Thạnh",
            "provinceCode": "79"
        },
        {
            "code": "27577",
            "name": "Xã Xuân Thới Sơn",
            "provinceCode": "79"
        },
        {
            "code": "27592",
            "name": "Xã Bà Điểm",
            "provinceCode": "79"
        },
        {
            "code": "27595",
            "name": "Xã Tân Nhựt",
            "provinceCode": "79"
        },
        {
            "code": "27601",
            "name": "Xã Vĩnh Lộc",
            "provinceCode": "79"
        },
        {
            "code": "27604",
            "name": "Xã Tân Vĩnh Lộc",
            "provinceCode": "79"
        },
        {
            "code": "27610",
            "name": "Xã Bình Lợi",
            "provinceCode": "79"
        },
        {
            "code": "27619",
            "name": "Xã Bình Hưng",
            "provinceCode": "79"
        },
        {
            "code": "27628",
            "name": "Xã Hưng Long",
            "provinceCode": "79"
        },
        {
            "code": "27637",
            "name": "Xã Bình Chánh",
            "provinceCode": "79"
        },
        {
            "code": "27655",
            "name": "Xã Nhà Bè",
            "provinceCode": "79"
        },
        {
            "code": "27658",
            "name": "Xã Hiệp Phước",
            "provinceCode": "79"
        },
        {
            "code": "27664",
            "name": "Xã Cần Giờ",
            "provinceCode": "79"
        },
        {
            "code": "27667",
            "name": "Xã Bình Khánh",
            "provinceCode": "79"
        },
        {
            "code": "27673",
            "name": "Xã An Thới Đông",
            "provinceCode": "79"
        },
        {
            "code": "27676",
            "name": "Xã Thạnh An",
            "provinceCode": "79"
        },
        {
            "code": "25459",
            "name": "Phường Tân Ninh",
            "provinceCode": "80"
        },
        {
            "code": "25480",
            "name": "Phường Bình Minh",
            "provinceCode": "80"
        },
        {
            "code": "25486",
            "name": "Xã Tân Biên",
            "provinceCode": "80"
        },
        {
            "code": "25489",
            "name": "Xã Tân Lập",
            "provinceCode": "80"
        },
        {
            "code": "25498",
            "name": "Xã Thạnh Bình",
            "provinceCode": "80"
        },
        {
            "code": "25510",
            "name": "Xã Trà Vong",
            "provinceCode": "80"
        },
        {
            "code": "25516",
            "name": "Xã Tân Châu",
            "provinceCode": "80"
        },
        {
            "code": "25522",
            "name": "Xã Tân Đông",
            "provinceCode": "80"
        },
        {
            "code": "25525",
            "name": "Xã Tân Hội",
            "provinceCode": "80"
        },
        {
            "code": "25531",
            "name": "Xã Tân Hòa",
            "provinceCode": "80"
        },
        {
            "code": "25534",
            "name": "Xã Tân Thành",
            "provinceCode": "80"
        },
        {
            "code": "25549",
            "name": "Xã Tân Phú",
            "provinceCode": "80"
        },
        {
            "code": "25552",
            "name": "Xã Dương Minh Châu",
            "provinceCode": "80"
        },
        {
            "code": "25567",
            "name": "Phường Ninh Thạnh",
            "provinceCode": "80"
        },
        {
            "code": "25573",
            "name": "Xã Cầu Khởi",
            "provinceCode": "80"
        },
        {
            "code": "25579",
            "name": "Xã Lộc Ninh",
            "provinceCode": "80"
        },
        {
            "code": "25585",
            "name": "Xã Châu Thành",
            "provinceCode": "80"
        },
        {
            "code": "25588",
            "name": "Xã Hảo Đước",
            "provinceCode": "80"
        },
        {
            "code": "25591",
            "name": "Xã Phước Vinh",
            "provinceCode": "80"
        },
        {
            "code": "25606",
            "name": "Xã Hòa Hội",
            "provinceCode": "80"
        },
        {
            "code": "25621",
            "name": "Xã Ninh Điền",
            "provinceCode": "80"
        },
        {
            "code": "25630",
            "name": "Phường Long Hoa",
            "provinceCode": "80"
        },
        {
            "code": "25633",
            "name": "Phường Thanh Điền",
            "provinceCode": "80"
        },
        {
            "code": "25645",
            "name": "Phường Hòa Thành",
            "provinceCode": "80"
        },
        {
            "code": "25654",
            "name": "Phường Gò Dầu",
            "provinceCode": "80"
        },
        {
            "code": "25657",
            "name": "Xã Thạnh Đức",
            "provinceCode": "80"
        },
        {
            "code": "25663",
            "name": "Xã Phước Thạnh",
            "provinceCode": "80"
        },
        {
            "code": "25666",
            "name": "Xã Truông Mít",
            "provinceCode": "80"
        },
        {
            "code": "25672",
            "name": "Phường Gia Lộc",
            "provinceCode": "80"
        },
        {
            "code": "25681",
            "name": "Xã Bến Cầu",
            "provinceCode": "80"
        },
        {
            "code": "25684",
            "name": "Xã Long Chữ",
            "provinceCode": "80"
        },
        {
            "code": "25702",
            "name": "Xã Long Thuận",
            "provinceCode": "80"
        },
        {
            "code": "25708",
            "name": "Phường Trảng Bàng",
            "provinceCode": "80"
        },
        {
            "code": "25711",
            "name": "Xã Hưng Thuận",
            "provinceCode": "80"
        },
        {
            "code": "25729",
            "name": "Xã Phước Chỉ",
            "provinceCode": "80"
        },
        {
            "code": "25732",
            "name": "Phường An Tịnh",
            "provinceCode": "80"
        },
        {
            "code": "27694",
            "name": "Phường Long An",
            "provinceCode": "80"
        },
        {
            "code": "27712",
            "name": "Phường Tân An",
            "provinceCode": "80"
        },
        {
            "code": "27715",
            "name": "Phường Khánh Hậu",
            "provinceCode": "80"
        },
        {
            "code": "27721",
            "name": "Xã Tân Hưng",
            "provinceCode": "80"
        },
        {
            "code": "27727",
            "name": "Xã Hưng Điền",
            "provinceCode": "80"
        },
        {
            "code": "27736",
            "name": "Xã Vĩnh Thạnh",
            "provinceCode": "80"
        },
        {
            "code": "27748",
            "name": "Xã Vĩnh Châu",
            "provinceCode": "80"
        },
        {
            "code": "27757",
            "name": "Xã Vĩnh Hưng",
            "provinceCode": "80"
        },
        {
            "code": "27763",
            "name": "Xã Khánh Hưng",
            "provinceCode": "80"
        },
        {
            "code": "27775",
            "name": "Xã Tuyên Bình",
            "provinceCode": "80"
        },
        {
            "code": "27787",
            "name": "Phường Kiến Tường",
            "provinceCode": "80"
        },
        {
            "code": "27793",
            "name": "Xã Bình Hiệp",
            "provinceCode": "80"
        },
        {
            "code": "27811",
            "name": "Xã Bình Hòa",
            "provinceCode": "80"
        },
        {
            "code": "27817",
            "name": "Xã Tuyên Thạnh",
            "provinceCode": "80"
        },
        {
            "code": "27823",
            "name": "Xã Mộc Hóa",
            "provinceCode": "80"
        },
        {
            "code": "27826",
            "name": "Xã Tân Thạnh",
            "provinceCode": "80"
        },
        {
            "code": "27838",
            "name": "Xã Nhơn Hòa Lập",
            "provinceCode": "80"
        },
        {
            "code": "27841",
            "name": "Xã Hậu Thạnh",
            "provinceCode": "80"
        },
        {
            "code": "27856",
            "name": "Xã Nhơn Ninh",
            "provinceCode": "80"
        },
        {
            "code": "27865",
            "name": "Xã Thạnh Hóa",
            "provinceCode": "80"
        },
        {
            "code": "27868",
            "name": "Xã Bình Thành",
            "provinceCode": "80"
        },
        {
            "code": "27877",
            "name": "Xã Thạnh Phước",
            "provinceCode": "80"
        },
        {
            "code": "27889",
            "name": "Xã Tân Tây",
            "provinceCode": "80"
        },
        {
            "code": "27898",
            "name": "Xã Đông Thành",
            "provinceCode": "80"
        },
        {
            "code": "27907",
            "name": "Xã Mỹ Quý",
            "provinceCode": "80"
        },
        {
            "code": "27925",
            "name": "Xã Đức Huệ",
            "provinceCode": "80"
        },
        {
            "code": "27931",
            "name": "Xã Hậu Nghĩa",
            "provinceCode": "80"
        },
        {
            "code": "27937",
            "name": "Xã Đức Hòa",
            "provinceCode": "80"
        },
        {
            "code": "27943",
            "name": "Xã An Ninh",
            "provinceCode": "80"
        },
        {
            "code": "27952",
            "name": "Xã Hiệp Hòa",
            "provinceCode": "80"
        },
        {
            "code": "27964",
            "name": "Xã Đức Lập",
            "provinceCode": "80"
        },
        {
            "code": "27976",
            "name": "Xã Mỹ Hạnh",
            "provinceCode": "80"
        },
        {
            "code": "27979",
            "name": "Xã Hòa Khánh",
            "provinceCode": "80"
        },
        {
            "code": "27991",
            "name": "Xã Bến Lức",
            "provinceCode": "80"
        },
        {
            "code": "27994",
            "name": "Xã Thạnh Lợi",
            "provinceCode": "80"
        },
        {
            "code": "28003",
            "name": "Xã Lương Hòa",
            "provinceCode": "80"
        },
        {
            "code": "28015",
            "name": "Xã Bình Đức",
            "provinceCode": "80"
        },
        {
            "code": "28018",
            "name": "Xã Mỹ Yên",
            "provinceCode": "80"
        },
        {
            "code": "28036",
            "name": "Xã Thủ Thừa",
            "provinceCode": "80"
        },
        {
            "code": "28051",
            "name": "Xã Mỹ Thạnh",
            "provinceCode": "80"
        },
        {
            "code": "28066",
            "name": "Xã Mỹ An",
            "provinceCode": "80"
        },
        {
            "code": "28072",
            "name": "Xã Tân Long",
            "provinceCode": "80"
        },
        {
            "code": "28075",
            "name": "Xã Tân Trụ",
            "provinceCode": "80"
        },
        {
            "code": "28087",
            "name": "Xã Nhựt Tảo",
            "provinceCode": "80"
        },
        {
            "code": "28093",
            "name": "Xã Vàm Cỏ",
            "provinceCode": "80"
        },
        {
            "code": "28108",
            "name": "Xã Cần Đước",
            "provinceCode": "80"
        },
        {
            "code": "28114",
            "name": "Xã Rạch Kiến",
            "provinceCode": "80"
        },
        {
            "code": "28126",
            "name": "Xã Long Cang",
            "provinceCode": "80"
        },
        {
            "code": "28132",
            "name": "Xã Mỹ Lệ",
            "provinceCode": "80"
        },
        {
            "code": "28138",
            "name": "Xã Tân Lân",
            "provinceCode": "80"
        },
        {
            "code": "28144",
            "name": "Xã Long Hựu",
            "provinceCode": "80"
        },
        {
            "code": "28159",
            "name": "Xã Cần Giuộc",
            "provinceCode": "80"
        },
        {
            "code": "28165",
            "name": "Xã Phước Lý",
            "provinceCode": "80"
        },
        {
            "code": "28177",
            "name": "Xã Mỹ Lộc",
            "provinceCode": "80"
        },
        {
            "code": "28201",
            "name": "Xã Phước Vĩnh Tây",
            "provinceCode": "80"
        },
        {
            "code": "28207",
            "name": "Xã Tân Tập",
            "provinceCode": "80"
        },
        {
            "code": "28210",
            "name": "Xã Tầm Vu",
            "provinceCode": "80"
        },
        {
            "code": "28222",
            "name": "Xã Vĩnh Công",
            "provinceCode": "80"
        },
        {
            "code": "28225",
            "name": "Xã Thuận Mỹ",
            "provinceCode": "80"
        },
        {
            "code": "28243",
            "name": "Xã An Lục Long",
            "provinceCode": "80"
        },
        {
            "code": "28249",
            "name": "Phường Đạo Thạnh",
            "provinceCode": "82"
        },
        {
            "code": "28261",
            "name": "Phường Mỹ Tho",
            "provinceCode": "82"
        },
        {
            "code": "28270",
            "name": "Phường Thới Sơn",
            "provinceCode": "82"
        },
        {
            "code": "28273",
            "name": "Phường Mỹ Phong",
            "provinceCode": "82"
        },
        {
            "code": "28285",
            "name": "Phường Trung An",
            "provinceCode": "82"
        },
        {
            "code": "28297",
            "name": "Phường Long Thuận",
            "provinceCode": "82"
        },
        {
            "code": "28306",
            "name": "Phường Gò Công",
            "provinceCode": "82"
        },
        {
            "code": "28315",
            "name": "Phường Bình Xuân",
            "provinceCode": "82"
        },
        {
            "code": "28321",
            "name": "Xã Tân Phước 1",
            "provinceCode": "82"
        },
        {
            "code": "28327",
            "name": "Xã Tân Phước 2",
            "provinceCode": "82"
        },
        {
            "code": "28336",
            "name": "Xã Hưng Thạnh",
            "provinceCode": "82"
        },
        {
            "code": "28345",
            "name": "Xã Tân Phước 3",
            "provinceCode": "82"
        },
        {
            "code": "28360",
            "name": "Xã Cái Bè",
            "provinceCode": "82"
        },
        {
            "code": "28366",
            "name": "Xã Hậu Mỹ",
            "provinceCode": "82"
        },
        {
            "code": "28378",
            "name": "Xã Mỹ Thiện",
            "provinceCode": "82"
        },
        {
            "code": "28393",
            "name": "Xã Hội Cư",
            "provinceCode": "82"
        },
        {
            "code": "28405",
            "name": "Xã Mỹ Đức Tây",
            "provinceCode": "82"
        },
        {
            "code": "28414",
            "name": "Xã Mỹ Lợi",
            "provinceCode": "82"
        },
        {
            "code": "28426",
            "name": "Xã Thanh Hưng",
            "provinceCode": "82"
        },
        {
            "code": "28429",
            "name": "Xã An Hữu",
            "provinceCode": "82"
        },
        {
            "code": "28435",
            "name": "Phường Mỹ Phước Tây",
            "provinceCode": "82"
        },
        {
            "code": "28436",
            "name": "Phường Thanh Hòa",
            "provinceCode": "82"
        },
        {
            "code": "28439",
            "name": "Phường Cai Lậy",
            "provinceCode": "82"
        },
        {
            "code": "28444",
            "name": "Xã Thạnh Phú",
            "provinceCode": "82"
        },
        {
            "code": "28456",
            "name": "Xã Mỹ Thành",
            "provinceCode": "82"
        },
        {
            "code": "28468",
            "name": "Xã Tân Phú",
            "provinceCode": "82"
        },
        {
            "code": "28471",
            "name": "Xã Bình Phú",
            "provinceCode": "82"
        },
        {
            "code": "28477",
            "name": "Phường Nhị Quý",
            "provinceCode": "82"
        },
        {
            "code": "28501",
            "name": "Xã Hiệp Đức",
            "provinceCode": "82"
        },
        {
            "code": "28504",
            "name": "Xã Long Tiên",
            "provinceCode": "82"
        },
        {
            "code": "28516",
            "name": "Xã Ngũ Hiệp",
            "provinceCode": "82"
        },
        {
            "code": "28519",
            "name": "Xã Châu Thành",
            "provinceCode": "82"
        },
        {
            "code": "28525",
            "name": "Xã Tân Hương",
            "provinceCode": "82"
        },
        {
            "code": "28537",
            "name": "Xã Long Hưng",
            "provinceCode": "82"
        },
        {
            "code": "28543",
            "name": "Xã Long Định",
            "provinceCode": "82"
        },
        {
            "code": "28564",
            "name": "Xã Bình Trưng",
            "provinceCode": "82"
        },
        {
            "code": "28576",
            "name": "Xã Vĩnh Kim",
            "provinceCode": "82"
        },
        {
            "code": "28582",
            "name": "Xã Kim Sơn",
            "provinceCode": "82"
        },
        {
            "code": "28594",
            "name": "Xã Chợ Gạo",
            "provinceCode": "82"
        },
        {
            "code": "28603",
            "name": "Xã Mỹ Tịnh An",
            "provinceCode": "82"
        },
        {
            "code": "28615",
            "name": "Xã Lương Hòa Lạc",
            "provinceCode": "82"
        },
        {
            "code": "28627",
            "name": "Xã Tân Thuận Bình",
            "provinceCode": "82"
        },
        {
            "code": "28633",
            "name": "Xã An Thạnh Thủy",
            "provinceCode": "82"
        },
        {
            "code": "28648",
            "name": "Xã Bình Ninh",
            "provinceCode": "82"
        },
        {
            "code": "28651",
            "name": "Xã Vĩnh Bình",
            "provinceCode": "82"
        },
        {
            "code": "28660",
            "name": "Xã Đồng Sơn",
            "provinceCode": "82"
        },
        {
            "code": "28663",
            "name": "Xã Phú Thành",
            "provinceCode": "82"
        },
        {
            "code": "28678",
            "name": "Xã Vĩnh Hựu",
            "provinceCode": "82"
        },
        {
            "code": "28687",
            "name": "Xã Long Bình",
            "provinceCode": "82"
        },
        {
            "code": "28693",
            "name": "Xã Tân Thới",
            "provinceCode": "82"
        },
        {
            "code": "28696",
            "name": "Xã Tân Phú Đông",
            "provinceCode": "82"
        },
        {
            "code": "28702",
            "name": "Xã Tân Hòa",
            "provinceCode": "82"
        },
        {
            "code": "28720",
            "name": "Xã Gia Thuận",
            "provinceCode": "82"
        },
        {
            "code": "28723",
            "name": "Xã Tân Đông",
            "provinceCode": "82"
        },
        {
            "code": "28729",
            "name": "Phường Sơn Qui",
            "provinceCode": "82"
        },
        {
            "code": "28738",
            "name": "Xã Tân Điền",
            "provinceCode": "82"
        },
        {
            "code": "28747",
            "name": "Xã Gò Công Đông",
            "provinceCode": "82"
        },
        {
            "code": "29869",
            "name": "Phường Cao Lãnh",
            "provinceCode": "82"
        },
        {
            "code": "29884",
            "name": "Phường Mỹ Ngãi",
            "provinceCode": "82"
        },
        {
            "code": "29888",
            "name": "Phường Mỹ Trà",
            "provinceCode": "82"
        },
        {
            "code": "29905",
            "name": "Phường Sa Đéc",
            "provinceCode": "82"
        },
        {
            "code": "29926",
            "name": "Xã Tân Hồng",
            "provinceCode": "82"
        },
        {
            "code": "29929",
            "name": "Xã Tân Hộ Cơ",
            "provinceCode": "82"
        },
        {
            "code": "29938",
            "name": "Xã Tân Thành",
            "provinceCode": "82"
        },
        {
            "code": "29944",
            "name": "Xã An Phước",
            "provinceCode": "82"
        },
        {
            "code": "29954",
            "name": "Phường An Bình",
            "provinceCode": "82"
        },
        {
            "code": "29955",
            "name": "Phường Hồng Ngự",
            "provinceCode": "82"
        },
        {
            "code": "29971",
            "name": "Xã Thường Phước",
            "provinceCode": "82"
        },
        {
            "code": "29978",
            "name": "Phường Thường Lạc",
            "provinceCode": "82"
        },
        {
            "code": "29983",
            "name": "Xã Long Khánh",
            "provinceCode": "82"
        },
        {
            "code": "29992",
            "name": "Xã Long Phú Thuận",
            "provinceCode": "82"
        },
        {
            "code": "30001",
            "name": "Xã Tràm Chim",
            "provinceCode": "82"
        },
        {
            "code": "30010",
            "name": "Xã Tam Nông",
            "provinceCode": "82"
        },
        {
            "code": "30019",
            "name": "Xã An Hòa",
            "provinceCode": "82"
        },
        {
            "code": "30025",
            "name": "Xã Phú Cường",
            "provinceCode": "82"
        },
        {
            "code": "30028",
            "name": "Xã An Long",
            "provinceCode": "82"
        },
        {
            "code": "30034",
            "name": "Xã Phú Thọ",
            "provinceCode": "82"
        },
        {
            "code": "30037",
            "name": "Xã Tháp Mười",
            "provinceCode": "82"
        },
        {
            "code": "30043",
            "name": "Xã Phương Thịnh",
            "provinceCode": "82"
        },
        {
            "code": "30046",
            "name": "Xã Trường Xuân",
            "provinceCode": "82"
        },
        {
            "code": "30055",
            "name": "Xã Mỹ Quí",
            "provinceCode": "82"
        },
        {
            "code": "30061",
            "name": "Xã Đốc Binh Kiều",
            "provinceCode": "82"
        },
        {
            "code": "30073",
            "name": "Xã Thanh Mỹ",
            "provinceCode": "82"
        },
        {
            "code": "30076",
            "name": "Xã Mỹ Thọ",
            "provinceCode": "82"
        },
        {
            "code": "30085",
            "name": "Xã Ba Sao",
            "provinceCode": "82"
        },
        {
            "code": "30088",
            "name": "Xã Phong Mỹ",
            "provinceCode": "82"
        },
        {
            "code": "30112",
            "name": "Xã Mỹ Hiệp",
            "provinceCode": "82"
        },
        {
            "code": "30118",
            "name": "Xã Bình Hàng Trung",
            "provinceCode": "82"
        },
        {
            "code": "30130",
            "name": "Xã Thanh Bình",
            "provinceCode": "82"
        },
        {
            "code": "30154",
            "name": "Xã Tân Long",
            "provinceCode": "82"
        },
        {
            "code": "30157",
            "name": "Xã Tân Thạnh",
            "provinceCode": "82"
        },
        {
            "code": "30163",
            "name": "Xã Bình Thành",
            "provinceCode": "82"
        },
        {
            "code": "30169",
            "name": "Xã Lấp Vò",
            "provinceCode": "82"
        },
        {
            "code": "30178",
            "name": "Xã Mỹ An Hưng",
            "provinceCode": "82"
        },
        {
            "code": "30184",
            "name": "Xã Tân Khánh Trung",
            "provinceCode": "82"
        },
        {
            "code": "30208",
            "name": "Xã Hòa Long",
            "provinceCode": "82"
        },
        {
            "code": "30214",
            "name": "Xã Tân Dương",
            "provinceCode": "82"
        },
        {
            "code": "30226",
            "name": "Xã Lai Vung",
            "provinceCode": "82"
        },
        {
            "code": "30235",
            "name": "Xã Phong Hòa",
            "provinceCode": "82"
        },
        {
            "code": "30244",
            "name": "Xã Phú Hựu",
            "provinceCode": "82"
        },
        {
            "code": "30253",
            "name": "Xã Tân Nhuận Đông",
            "provinceCode": "82"
        },
        {
            "code": "30259",
            "name": "Xã Tân Phú Trung",
            "provinceCode": "82"
        },
        {
            "code": "28756",
            "name": "Phường Phú Khương",
            "provinceCode": "86"
        },
        {
            "code": "28777",
            "name": "Phường An Hội",
            "provinceCode": "86"
        },
        {
            "code": "28783",
            "name": "Phường Sơn Đông",
            "provinceCode": "86"
        },
        {
            "code": "28789",
            "name": "Phường Bến Tre",
            "provinceCode": "86"
        },
        {
            "code": "28807",
            "name": "Xã Giao Long",
            "provinceCode": "86"
        },
        {
            "code": "28810",
            "name": "Xã Phú Túc",
            "provinceCode": "86"
        },
        {
            "code": "28840",
            "name": "Xã Tân Phú",
            "provinceCode": "86"
        },
        {
            "code": "28858",
            "name": "Phường Phú Tân",
            "provinceCode": "86"
        },
        {
            "code": "28861",
            "name": "Xã Tiên Thủy",
            "provinceCode": "86"
        },
        {
            "code": "28870",
            "name": "Xã Chợ Lách",
            "provinceCode": "86"
        },
        {
            "code": "28879",
            "name": "Xã Phú Phụng",
            "provinceCode": "86"
        },
        {
            "code": "28894",
            "name": "Xã Vĩnh Thành",
            "provinceCode": "86"
        },
        {
            "code": "28901",
            "name": "Xã Hưng Khánh Trung",
            "provinceCode": "86"
        },
        {
            "code": "28903",
            "name": "Xã Mỏ Cày",
            "provinceCode": "86"
        },
        {
            "code": "28915",
            "name": "Xã Phước Mỹ Trung",
            "provinceCode": "86"
        },
        {
            "code": "28921",
            "name": "Xã Tân Thành Bình",
            "provinceCode": "86"
        },
        {
            "code": "28945",
            "name": "Xã Đồng Khởi",
            "provinceCode": "86"
        },
        {
            "code": "28948",
            "name": "Xã Nhuận Phú Tân",
            "provinceCode": "86"
        },
        {
            "code": "28957",
            "name": "Xã An Định",
            "provinceCode": "86"
        },
        {
            "code": "28969",
            "name": "Xã Thành Thới",
            "provinceCode": "86"
        },
        {
            "code": "28981",
            "name": "Xã Hương Mỹ",
            "provinceCode": "86"
        },
        {
            "code": "28984",
            "name": "Xã Giồng Trôm",
            "provinceCode": "86"
        },
        {
            "code": "28987",
            "name": "Xã Lương Hòa",
            "provinceCode": "86"
        },
        {
            "code": "28993",
            "name": "Xã Lương Phú",
            "provinceCode": "86"
        },
        {
            "code": "28996",
            "name": "Xã Châu Hòa",
            "provinceCode": "86"
        },
        {
            "code": "29020",
            "name": "Xã Phước Long",
            "provinceCode": "86"
        },
        {
            "code": "29029",
            "name": "Xã Tân Hào",
            "provinceCode": "86"
        },
        {
            "code": "29044",
            "name": "Xã Hưng Nhượng",
            "provinceCode": "86"
        },
        {
            "code": "29050",
            "name": "Xã Bình Đại",
            "provinceCode": "86"
        },
        {
            "code": "29062",
            "name": "Xã Phú Thuận",
            "provinceCode": "86"
        },
        {
            "code": "29077",
            "name": "Xã Lộc Thuận",
            "provinceCode": "86"
        },
        {
            "code": "29083",
            "name": "Xã Châu Hưng",
            "provinceCode": "86"
        },
        {
            "code": "29089",
            "name": "Xã Thạnh Trị",
            "provinceCode": "86"
        },
        {
            "code": "29104",
            "name": "Xã Thạnh Phước",
            "provinceCode": "86"
        },
        {
            "code": "29107",
            "name": "Xã Thới Thuận",
            "provinceCode": "86"
        },
        {
            "code": "29110",
            "name": "Xã Ba Tri",
            "provinceCode": "86"
        },
        {
            "code": "29122",
            "name": "Xã Mỹ Chánh Hòa",
            "provinceCode": "86"
        },
        {
            "code": "29125",
            "name": "Xã Bảo Thạnh",
            "provinceCode": "86"
        },
        {
            "code": "29137",
            "name": "Xã Tân Xuân",
            "provinceCode": "86"
        },
        {
            "code": "29143",
            "name": "Xã An Ngãi Trung",
            "provinceCode": "86"
        },
        {
            "code": "29158",
            "name": "Xã An Hiệp",
            "provinceCode": "86"
        },
        {
            "code": "29167",
            "name": "Xã Tân Thủy",
            "provinceCode": "86"
        },
        {
            "code": "29182",
            "name": "Xã Thạnh Phú",
            "provinceCode": "86"
        },
        {
            "code": "29191",
            "name": "Xã Quới Điền",
            "provinceCode": "86"
        },
        {
            "code": "29194",
            "name": "Xã Đại Điền",
            "provinceCode": "86"
        },
        {
            "code": "29221",
            "name": "Xã Thạnh Hải",
            "provinceCode": "86"
        },
        {
            "code": "29224",
            "name": "Xã An Qui",
            "provinceCode": "86"
        },
        {
            "code": "29227",
            "name": "Xã Thạnh Phong",
            "provinceCode": "86"
        },
        {
            "code": "29242",
            "name": "Phường Trà Vinh",
            "provinceCode": "86"
        },
        {
            "code": "29254",
            "name": "Phường Nguyệt Hóa",
            "provinceCode": "86"
        },
        {
            "code": "29263",
            "name": "Phường Long Đức",
            "provinceCode": "86"
        },
        {
            "code": "29266",
            "name": "Xã Càng Long",
            "provinceCode": "86"
        },
        {
            "code": "29275",
            "name": "Xã An Trường",
            "provinceCode": "86"
        },
        {
            "code": "29278",
            "name": "Xã Tân An",
            "provinceCode": "86"
        },
        {
            "code": "29287",
            "name": "Xã Bình Phú",
            "provinceCode": "86"
        },
        {
            "code": "29302",
            "name": "Xã Nhị Long",
            "provinceCode": "86"
        },
        {
            "code": "29308",
            "name": "Xã Cầu Kè",
            "provinceCode": "86"
        },
        {
            "code": "29317",
            "name": "Xã An Phú Tân",
            "provinceCode": "86"
        },
        {
            "code": "29329",
            "name": "Xã Phong Thạnh",
            "provinceCode": "86"
        },
        {
            "code": "29335",
            "name": "Xã Tam Ngãi",
            "provinceCode": "86"
        },
        {
            "code": "29341",
            "name": "Xã Tiểu Cần",
            "provinceCode": "86"
        },
        {
            "code": "29362",
            "name": "Xã Hùng Hòa",
            "provinceCode": "86"
        },
        {
            "code": "29365",
            "name": "Xã Tập Ngãi",
            "provinceCode": "86"
        },
        {
            "code": "29371",
            "name": "Xã Tân Hòa",
            "provinceCode": "86"
        },
        {
            "code": "29374",
            "name": "Xã Châu Thành",
            "provinceCode": "86"
        },
        {
            "code": "29386",
            "name": "Xã Song Lộc",
            "provinceCode": "86"
        },
        {
            "code": "29398",
            "name": "Phường Hòa Thuận",
            "provinceCode": "86"
        },
        {
            "code": "29407",
            "name": "Xã Hưng Mỹ",
            "provinceCode": "86"
        },
        {
            "code": "29410",
            "name": "Xã Hòa Minh",
            "provinceCode": "86"
        },
        {
            "code": "29413",
            "name": "Xã Long Hòa",
            "provinceCode": "86"
        },
        {
            "code": "29416",
            "name": "Xã Cầu Ngang",
            "provinceCode": "86"
        },
        {
            "code": "29419",
            "name": "Xã Mỹ Long",
            "provinceCode": "86"
        },
        {
            "code": "29431",
            "name": "Xã Vinh Kim",
            "provinceCode": "86"
        },
        {
            "code": "29446",
            "name": "Xã Nhị Trường",
            "provinceCode": "86"
        },
        {
            "code": "29455",
            "name": "Xã Hiệp Mỹ",
            "provinceCode": "86"
        },
        {
            "code": "29461",
            "name": "Xã Trà Cú",
            "provinceCode": "86"
        },
        {
            "code": "29467",
            "name": "Xã Tập Sơn",
            "provinceCode": "86"
        },
        {
            "code": "29476",
            "name": "Xã Lưu Nghiệp Anh",
            "provinceCode": "86"
        },
        {
            "code": "29489",
            "name": "Xã Hàm Giang",
            "provinceCode": "86"
        },
        {
            "code": "29491",
            "name": "Xã Đại An",
            "provinceCode": "86"
        },
        {
            "code": "29497",
            "name": "Xã Đôn Châu",
            "provinceCode": "86"
        },
        {
            "code": "29506",
            "name": "Xã Long Hiệp",
            "provinceCode": "86"
        },
        {
            "code": "29512",
            "name": "Phường Duyên Hải",
            "provinceCode": "86"
        },
        {
            "code": "29513",
            "name": "Xã Long Thành",
            "provinceCode": "86"
        },
        {
            "code": "29516",
            "name": "Phường Trường Long Hòa",
            "provinceCode": "86"
        },
        {
            "code": "29518",
            "name": "Xã Long Hữu",
            "provinceCode": "86"
        },
        {
            "code": "29530",
            "name": "Xã Ngũ Lạc",
            "provinceCode": "86"
        },
        {
            "code": "29533",
            "name": "Xã Long Vĩnh",
            "provinceCode": "86"
        },
        {
            "code": "29536",
            "name": "Xã Đông Hải",
            "provinceCode": "86"
        },
        {
            "code": "29551",
            "name": "Phường Long Châu",
            "provinceCode": "86"
        },
        {
            "code": "29557",
            "name": "Phường Phước Hậu",
            "provinceCode": "86"
        },
        {
            "code": "29566",
            "name": "Phường Tân Ngãi",
            "provinceCode": "86"
        },
        {
            "code": "29584",
            "name": "Xã An Bình",
            "provinceCode": "86"
        },
        {
            "code": "29590",
            "name": "Phường Thanh Đức",
            "provinceCode": "86"
        },
        {
            "code": "29593",
            "name": "Phường Tân Hạnh",
            "provinceCode": "86"
        },
        {
            "code": "29602",
            "name": "Xã Long Hồ",
            "provinceCode": "86"
        },
        {
            "code": "29611",
            "name": "Xã Phú Quới",
            "provinceCode": "86"
        },
        {
            "code": "29623",
            "name": "Xã Nhơn Phú",
            "provinceCode": "86"
        },
        {
            "code": "29638",
            "name": "Xã Bình Phước",
            "provinceCode": "86"
        },
        {
            "code": "29641",
            "name": "Xã Cái Nhum",
            "provinceCode": "86"
        },
        {
            "code": "29653",
            "name": "Xã Tân Long Hội",
            "provinceCode": "86"
        },
        {
            "code": "29659",
            "name": "Xã Trung Thành",
            "provinceCode": "86"
        },
        {
            "code": "29668",
            "name": "Xã Quới An",
            "provinceCode": "86"
        },
        {
            "code": "29677",
            "name": "Xã Quới Thiện",
            "provinceCode": "86"
        },
        {
            "code": "29683",
            "name": "Xã Trung Hiệp",
            "provinceCode": "86"
        },
        {
            "code": "29698",
            "name": "Xã Trung Ngãi",
            "provinceCode": "86"
        },
        {
            "code": "29701",
            "name": "Xã Hiếu Phụng",
            "provinceCode": "86"
        },
        {
            "code": "29713",
            "name": "Xã Hiếu Thành",
            "provinceCode": "86"
        },
        {
            "code": "29719",
            "name": "Xã Tam Bình",
            "provinceCode": "86"
        },
        {
            "code": "29728",
            "name": "Xã Cái Ngang",
            "provinceCode": "86"
        },
        {
            "code": "29734",
            "name": "Xã Hòa Hiệp",
            "provinceCode": "86"
        },
        {
            "code": "29740",
            "name": "Xã Song Phú",
            "provinceCode": "86"
        },
        {
            "code": "29767",
            "name": "Xã Ngãi Tứ",
            "provinceCode": "86"
        },
        {
            "code": "29770",
            "name": "Phường Cái Vồn",
            "provinceCode": "86"
        },
        {
            "code": "29771",
            "name": "Phường Bình Minh",
            "provinceCode": "86"
        },
        {
            "code": "29785",
            "name": "Xã Tân Lược",
            "provinceCode": "86"
        },
        {
            "code": "29788",
            "name": "Xã Mỹ Thuận",
            "provinceCode": "86"
        },
        {
            "code": "29800",
            "name": "Xã Tân Quới",
            "provinceCode": "86"
        },
        {
            "code": "29812",
            "name": "Phường Đông Thành",
            "provinceCode": "86"
        },
        {
            "code": "29821",
            "name": "Xã Trà Ôn",
            "provinceCode": "86"
        },
        {
            "code": "29830",
            "name": "Xã Hòa Bình",
            "provinceCode": "86"
        },
        {
            "code": "29836",
            "name": "Xã Trà Côn",
            "provinceCode": "86"
        },
        {
            "code": "29845",
            "name": "Xã Vĩnh Xuân",
            "provinceCode": "86"
        },
        {
            "code": "29857",
            "name": "Xã Lục Sĩ Thành",
            "provinceCode": "86"
        },
        {
            "code": "30292",
            "name": "Phường Bình Đức",
            "provinceCode": "91"
        },
        {
            "code": "30301",
            "name": "Phường Mỹ Thới",
            "provinceCode": "91"
        },
        {
            "code": "30307",
            "name": "Phường Long Xuyên",
            "provinceCode": "91"
        },
        {
            "code": "30313",
            "name": "Xã Mỹ Hòa Hưng",
            "provinceCode": "91"
        },
        {
            "code": "30316",
            "name": "Phường Châu Đốc",
            "provinceCode": "91"
        },
        {
            "code": "30325",
            "name": "Phường Vĩnh Tế",
            "provinceCode": "91"
        },
        {
            "code": "30337",
            "name": "Xã An Phú",
            "provinceCode": "91"
        },
        {
            "code": "30341",
            "name": "Xã Khánh Bình",
            "provinceCode": "91"
        },
        {
            "code": "30346",
            "name": "Xã Nhơn Hội",
            "provinceCode": "91"
        },
        {
            "code": "30352",
            "name": "Xã Phú Hữu",
            "provinceCode": "91"
        },
        {
            "code": "30367",
            "name": "Xã Vĩnh Hậu",
            "provinceCode": "91"
        },
        {
            "code": "30376",
            "name": "Phường Tân Châu",
            "provinceCode": "91"
        },
        {
            "code": "30377",
            "name": "Phường Long Phú",
            "provinceCode": "91"
        },
        {
            "code": "30385",
            "name": "Xã Vĩnh Xương",
            "provinceCode": "91"
        },
        {
            "code": "30388",
            "name": "Xã Tân An",
            "provinceCode": "91"
        },
        {
            "code": "30403",
            "name": "Xã Châu Phong",
            "provinceCode": "91"
        },
        {
            "code": "30406",
            "name": "Xã Phú Tân",
            "provinceCode": "91"
        },
        {
            "code": "30409",
            "name": "Xã Chợ Vàm",
            "provinceCode": "91"
        },
        {
            "code": "30421",
            "name": "Xã Phú Lâm",
            "provinceCode": "91"
        },
        {
            "code": "30430",
            "name": "Xã Hòa Lạc",
            "provinceCode": "91"
        },
        {
            "code": "30436",
            "name": "Xã Phú An",
            "provinceCode": "91"
        },
        {
            "code": "30445",
            "name": "Xã Bình Thạnh Đông",
            "provinceCode": "91"
        },
        {
            "code": "30463",
            "name": "Xã Châu Phú",
            "provinceCode": "91"
        },
        {
            "code": "30469",
            "name": "Xã Mỹ Đức",
            "provinceCode": "91"
        },
        {
            "code": "30478",
            "name": "Xã Vĩnh Thạnh Trung",
            "provinceCode": "91"
        },
        {
            "code": "30481",
            "name": "Xã Thạnh Mỹ Tây",
            "provinceCode": "91"
        },
        {
            "code": "30487",
            "name": "Xã Bình Mỹ",
            "provinceCode": "91"
        },
        {
            "code": "30502",
            "name": "Phường Thới Sơn",
            "provinceCode": "91"
        },
        {
            "code": "30505",
            "name": "Phường Chi Lăng",
            "provinceCode": "91"
        },
        {
            "code": "30520",
            "name": "Phường Tịnh Biên",
            "provinceCode": "91"
        },
        {
            "code": "30526",
            "name": "Xã An Cư",
            "provinceCode": "91"
        },
        {
            "code": "30538",
            "name": "Xã Núi Cấm",
            "provinceCode": "91"
        },
        {
            "code": "30544",
            "name": "Xã Tri Tôn",
            "provinceCode": "91"
        },
        {
            "code": "30547",
            "name": "Xã Ba Chúc",
            "provinceCode": "91"
        },
        {
            "code": "30568",
            "name": "Xã Vĩnh Gia",
            "provinceCode": "91"
        },
        {
            "code": "30577",
            "name": "Xã Ô Lâm",
            "provinceCode": "91"
        },
        {
            "code": "30580",
            "name": "Xã Cô Tô",
            "provinceCode": "91"
        },
        {
            "code": "30589",
            "name": "Xã An Châu",
            "provinceCode": "91"
        },
        {
            "code": "30595",
            "name": "Xã Cần Đăng",
            "provinceCode": "91"
        },
        {
            "code": "30604",
            "name": "Xã Vĩnh An",
            "provinceCode": "91"
        },
        {
            "code": "30607",
            "name": "Xã Bình Hòa",
            "provinceCode": "91"
        },
        {
            "code": "30619",
            "name": "Xã Vĩnh Hanh",
            "provinceCode": "91"
        },
        {
            "code": "30628",
            "name": "Xã Chợ Mới",
            "provinceCode": "91"
        },
        {
            "code": "30631",
            "name": "Xã Long Điền",
            "provinceCode": "91"
        },
        {
            "code": "30643",
            "name": "Xã Cù Lao Giêng",
            "provinceCode": "91"
        },
        {
            "code": "30658",
            "name": "Xã Nhơn Mỹ",
            "provinceCode": "91"
        },
        {
            "code": "30664",
            "name": "Xã Long Kiến",
            "provinceCode": "91"
        },
        {
            "code": "30673",
            "name": "Xã Hội An",
            "provinceCode": "91"
        },
        {
            "code": "30682",
            "name": "Xã Thoại Sơn",
            "provinceCode": "91"
        },
        {
            "code": "30685",
            "name": "Xã Phú Hòa",
            "provinceCode": "91"
        },
        {
            "code": "30688",
            "name": "Xã Óc Eo",
            "provinceCode": "91"
        },
        {
            "code": "30691",
            "name": "Xã Tây Phú",
            "provinceCode": "91"
        },
        {
            "code": "30697",
            "name": "Xã Vĩnh Trạch",
            "provinceCode": "91"
        },
        {
            "code": "30709",
            "name": "Xã Định Mỹ",
            "provinceCode": "91"
        },
        {
            "code": "30742",
            "name": "Phường Rạch Giá",
            "provinceCode": "91"
        },
        {
            "code": "30760",
            "name": "Phường Vĩnh Thông",
            "provinceCode": "91"
        },
        {
            "code": "30766",
            "name": "Phường Tô Châu",
            "provinceCode": "91"
        },
        {
            "code": "30769",
            "name": "Phường Hà Tiên",
            "provinceCode": "91"
        },
        {
            "code": "30781",
            "name": "Xã Tiên Hải",
            "provinceCode": "91"
        },
        {
            "code": "30787",
            "name": "Xã Kiên Lương",
            "provinceCode": "91"
        },
        {
            "code": "30790",
            "name": "Xã Hòa Điền",
            "provinceCode": "91"
        },
        {
            "code": "30793",
            "name": "Xã Vĩnh Điều",
            "provinceCode": "91"
        },
        {
            "code": "30796",
            "name": "Xã Giang Thành",
            "provinceCode": "91"
        },
        {
            "code": "30811",
            "name": "Xã Sơn Hải",
            "provinceCode": "91"
        },
        {
            "code": "30814",
            "name": "Xã Hòn Nghệ",
            "provinceCode": "91"
        },
        {
            "code": "30817",
            "name": "Xã Hòn Đất",
            "provinceCode": "91"
        },
        {
            "code": "30823",
            "name": "Xã Bình Sơn",
            "provinceCode": "91"
        },
        {
            "code": "30826",
            "name": "Xã Bình Giang",
            "provinceCode": "91"
        },
        {
            "code": "30835",
            "name": "Xã Sơn Kiên",
            "provinceCode": "91"
        },
        {
            "code": "30838",
            "name": "Xã Mỹ Thuận",
            "provinceCode": "91"
        },
        {
            "code": "30850",
            "name": "Xã Tân Hiệp",
            "provinceCode": "91"
        },
        {
            "code": "30856",
            "name": "Xã Tân Hội",
            "provinceCode": "91"
        },
        {
            "code": "30874",
            "name": "Xã Thạnh Đông",
            "provinceCode": "91"
        },
        {
            "code": "30880",
            "name": "Xã Châu Thành",
            "provinceCode": "91"
        },
        {
            "code": "30886",
            "name": "Xã Thạnh Lộc",
            "provinceCode": "91"
        },
        {
            "code": "30898",
            "name": "Xã Bình An",
            "provinceCode": "91"
        },
        {
            "code": "30904",
            "name": "Xã Giồng Riềng",
            "provinceCode": "91"
        },
        {
            "code": "30910",
            "name": "Xã Thạnh Hưng",
            "provinceCode": "91"
        },
        {
            "code": "30928",
            "name": "Xã Ngọc Chúc",
            "provinceCode": "91"
        },
        {
            "code": "30934",
            "name": "Xã Hòa Hưng",
            "provinceCode": "91"
        },
        {
            "code": "30943",
            "name": "Xã Long Thạnh",
            "provinceCode": "91"
        },
        {
            "code": "30949",
            "name": "Xã Hòa Thuận",
            "provinceCode": "91"
        },
        {
            "code": "30952",
            "name": "Xã Gò Quao",
            "provinceCode": "91"
        },
        {
            "code": "30958",
            "name": "Xã Định Hòa",
            "provinceCode": "91"
        },
        {
            "code": "30970",
            "name": "Xã Vĩnh Hòa Hưng",
            "provinceCode": "91"
        },
        {
            "code": "30982",
            "name": "Xã Vĩnh Tuy",
            "provinceCode": "91"
        },
        {
            "code": "30985",
            "name": "Xã An Biên",
            "provinceCode": "91"
        },
        {
            "code": "30988",
            "name": "Xã Tây Yên",
            "provinceCode": "91"
        },
        {
            "code": "31006",
            "name": "Xã Đông Thái",
            "provinceCode": "91"
        },
        {
            "code": "31012",
            "name": "Xã Vĩnh Hòa",
            "provinceCode": "91"
        },
        {
            "code": "31018",
            "name": "Xã An Minh",
            "provinceCode": "91"
        },
        {
            "code": "31024",
            "name": "Xã Đông Hòa",
            "provinceCode": "91"
        },
        {
            "code": "31027",
            "name": "Xã U Minh Thượng",
            "provinceCode": "91"
        },
        {
            "code": "31031",
            "name": "Xã Tân Thạnh",
            "provinceCode": "91"
        },
        {
            "code": "31036",
            "name": "Xã Đông Hưng",
            "provinceCode": "91"
        },
        {
            "code": "31042",
            "name": "Xã Vân Khánh",
            "provinceCode": "91"
        },
        {
            "code": "31051",
            "name": "Xã Vĩnh Phong",
            "provinceCode": "91"
        },
        {
            "code": "31064",
            "name": "Xã Vĩnh Bình",
            "provinceCode": "91"
        },
        {
            "code": "31069",
            "name": "Xã Vĩnh Thuận",
            "provinceCode": "91"
        },
        {
            "code": "31078",
            "name": "Đặc khu Phú Quốc",
            "provinceCode": "91"
        },
        {
            "code": "31105",
            "name": "Đặc khu Thổ Châu",
            "provinceCode": "91"
        },
        {
            "code": "31108",
            "name": "Đặc khu Kiên Hải",
            "provinceCode": "91"
        },
        {
            "code": "31120",
            "name": "Phường Cái Khế",
            "provinceCode": "92"
        },
        {
            "code": "31135",
            "name": "Phường Ninh Kiều",
            "provinceCode": "92"
        },
        {
            "code": "31147",
            "name": "Phường Tân An",
            "provinceCode": "92"
        },
        {
            "code": "31150",
            "name": "Phường An Bình",
            "provinceCode": "92"
        },
        {
            "code": "31153",
            "name": "Phường Ô Môn",
            "provinceCode": "92"
        },
        {
            "code": "31157",
            "name": "Phường Thới Long",
            "provinceCode": "92"
        },
        {
            "code": "31162",
            "name": "Phường Phước Thới",
            "provinceCode": "92"
        },
        {
            "code": "31168",
            "name": "Phường Bình Thủy",
            "provinceCode": "92"
        },
        {
            "code": "31174",
            "name": "Phường Thới An Đông",
            "provinceCode": "92"
        },
        {
            "code": "31183",
            "name": "Phường Long Tuyền",
            "provinceCode": "92"
        },
        {
            "code": "31186",
            "name": "Phường Cái Răng",
            "provinceCode": "92"
        },
        {
            "code": "31201",
            "name": "Phường Hưng Phú",
            "provinceCode": "92"
        },
        {
            "code": "31207",
            "name": "Phường Thốt Nốt",
            "provinceCode": "92"
        },
        {
            "code": "31213",
            "name": "Phường Tân Lộc",
            "provinceCode": "92"
        },
        {
            "code": "31217",
            "name": "Phường Trung Nhứt",
            "provinceCode": "92"
        },
        {
            "code": "31228",
            "name": "Phường Thuận Hưng",
            "provinceCode": "92"
        },
        {
            "code": "31231",
            "name": "Xã Thạnh An",
            "provinceCode": "92"
        },
        {
            "code": "31232",
            "name": "Xã Vĩnh Thạnh",
            "provinceCode": "92"
        },
        {
            "code": "31237",
            "name": "Xã Vĩnh Trinh",
            "provinceCode": "92"
        },
        {
            "code": "31246",
            "name": "Xã Thạnh Quới",
            "provinceCode": "92"
        },
        {
            "code": "31249",
            "name": "Xã Thạnh Phú",
            "provinceCode": "92"
        },
        {
            "code": "31255",
            "name": "Xã Trung Hưng",
            "provinceCode": "92"
        },
        {
            "code": "31258",
            "name": "Xã Thới Lai",
            "provinceCode": "92"
        },
        {
            "code": "31261",
            "name": "Xã Cờ Đỏ",
            "provinceCode": "92"
        },
        {
            "code": "31264",
            "name": "Xã Thới Hưng",
            "provinceCode": "92"
        },
        {
            "code": "31273",
            "name": "Xã Đông Hiệp",
            "provinceCode": "92"
        },
        {
            "code": "31282",
            "name": "Xã Đông Thuận",
            "provinceCode": "92"
        },
        {
            "code": "31288",
            "name": "Xã Trường Thành",
            "provinceCode": "92"
        },
        {
            "code": "31294",
            "name": "Xã Trường Xuân",
            "provinceCode": "92"
        },
        {
            "code": "31299",
            "name": "Xã Phong Điền",
            "provinceCode": "92"
        },
        {
            "code": "31309",
            "name": "Xã Trường Long",
            "provinceCode": "92"
        },
        {
            "code": "31315",
            "name": "Xã Nhơn Ái",
            "provinceCode": "92"
        },
        {
            "code": "31321",
            "name": "Phường Vị Thanh",
            "provinceCode": "92"
        },
        {
            "code": "31333",
            "name": "Phường Vị Tân",
            "provinceCode": "92"
        },
        {
            "code": "31338",
            "name": "Xã Hỏa Lựu",
            "provinceCode": "92"
        },
        {
            "code": "31340",
            "name": "Phường Ngã Bảy",
            "provinceCode": "92"
        },
        {
            "code": "31342",
            "name": "Xã Tân Hòa",
            "provinceCode": "92"
        },
        {
            "code": "31348",
            "name": "Xã Trường Long Tây",
            "provinceCode": "92"
        },
        {
            "code": "31360",
            "name": "Xã Thạnh Xuân",
            "provinceCode": "92"
        },
        {
            "code": "31366",
            "name": "Xã Châu Thành",
            "provinceCode": "92"
        },
        {
            "code": "31369",
            "name": "Xã Đông Phước",
            "provinceCode": "92"
        },
        {
            "code": "31378",
            "name": "Xã Phú Hữu",
            "provinceCode": "92"
        },
        {
            "code": "31393",
            "name": "Xã Hòa An",
            "provinceCode": "92"
        },
        {
            "code": "31396",
            "name": "Xã Hiệp Hưng",
            "provinceCode": "92"
        },
        {
            "code": "31399",
            "name": "Xã Tân Bình",
            "provinceCode": "92"
        },
        {
            "code": "31408",
            "name": "Xã Thạnh Hòa",
            "provinceCode": "92"
        },
        {
            "code": "31411",
            "name": "Phường Đại Thành",
            "provinceCode": "92"
        },
        {
            "code": "31420",
            "name": "Xã Phụng Hiệp",
            "provinceCode": "92"
        },
        {
            "code": "31426",
            "name": "Xã Phương Bình",
            "provinceCode": "92"
        },
        {
            "code": "31432",
            "name": "Xã Tân Phước Hưng",
            "provinceCode": "92"
        },
        {
            "code": "31441",
            "name": "Xã Vị Thủy",
            "provinceCode": "92"
        },
        {
            "code": "31453",
            "name": "Xã Vĩnh Thuận Đông",
            "provinceCode": "92"
        },
        {
            "code": "31459",
            "name": "Xã  Vĩnh Tường",
            "provinceCode": "92"
        },
        {
            "code": "31465",
            "name": "Xã Vị Thanh 1",
            "provinceCode": "92"
        },
        {
            "code": "31471",
            "name": "Phường Long Mỹ",
            "provinceCode": "92"
        },
        {
            "code": "31473",
            "name": "Phường Long Bình",
            "provinceCode": "92"
        },
        {
            "code": "31480",
            "name": "Phường Long Phú 1",
            "provinceCode": "92"
        },
        {
            "code": "31489",
            "name": "Xã Vĩnh Viễn",
            "provinceCode": "92"
        },
        {
            "code": "31492",
            "name": "Xã Lương Tâm",
            "provinceCode": "92"
        },
        {
            "code": "31495",
            "name": "Xã Xà Phiên",
            "provinceCode": "92"
        },
        {
            "code": "31507",
            "name": "Phường Sóc Trăng",
            "provinceCode": "92"
        },
        {
            "code": "31510",
            "name": "Phường Phú Lợi",
            "provinceCode": "92"
        },
        {
            "code": "31528",
            "name": "Xã Kế Sách",
            "provinceCode": "92"
        },
        {
            "code": "31531",
            "name": "Xã An Lạc Thôn",
            "provinceCode": "92"
        },
        {
            "code": "31537",
            "name": "Xã Phong Nẫm",
            "provinceCode": "92"
        },
        {
            "code": "31540",
            "name": "Xã Thới An Hội",
            "provinceCode": "92"
        },
        {
            "code": "31552",
            "name": "Xã Nhơn Mỹ",
            "provinceCode": "92"
        },
        {
            "code": "31561",
            "name": "Xã Đại Hải",
            "provinceCode": "92"
        },
        {
            "code": "31567",
            "name": "Xã Mỹ Tú",
            "provinceCode": "92"
        },
        {
            "code": "31569",
            "name": "Xã Phú Tâm",
            "provinceCode": "92"
        },
        {
            "code": "31570",
            "name": "Xã Hồ Đắc Kiện",
            "provinceCode": "92"
        },
        {
            "code": "31579",
            "name": "Xã Long Hưng",
            "provinceCode": "92"
        },
        {
            "code": "31582",
            "name": "Xã Thuận Hòa",
            "provinceCode": "92"
        },
        {
            "code": "31591",
            "name": "Xã Mỹ Hương",
            "provinceCode": "92"
        },
        {
            "code": "31594",
            "name": "Xã An Ninh",
            "provinceCode": "92"
        },
        {
            "code": "31603",
            "name": "Xã Mỹ Phước",
            "provinceCode": "92"
        },
        {
            "code": "31615",
            "name": "Xã An Thạnh",
            "provinceCode": "92"
        },
        {
            "code": "31633",
            "name": "Xã Cù Lao Dung",
            "provinceCode": "92"
        },
        {
            "code": "31639",
            "name": "Xã Long Phú",
            "provinceCode": "92"
        },
        {
            "code": "31645",
            "name": "Xã Đại Ngãi",
            "provinceCode": "92"
        },
        {
            "code": "31654",
            "name": "Xã Trường Khánh",
            "provinceCode": "92"
        },
        {
            "code": "31666",
            "name": "Xã Tân Thạnh",
            "provinceCode": "92"
        },
        {
            "code": "31673",
            "name": "Xã Trần Đề",
            "provinceCode": "92"
        },
        {
            "code": "31675",
            "name": "Xã Liêu Tú",
            "provinceCode": "92"
        },
        {
            "code": "31679",
            "name": "Xã Lịch Hội Thượng",
            "provinceCode": "92"
        },
        {
            "code": "31684",
            "name": "Phường Mỹ Xuyên",
            "provinceCode": "92"
        },
        {
            "code": "31687",
            "name": "Xã Tài Văn",
            "provinceCode": "92"
        },
        {
            "code": "31699",
            "name": "Xã Thạnh Thới An",
            "provinceCode": "92"
        },
        {
            "code": "31708",
            "name": "Xã Nhu Gia",
            "provinceCode": "92"
        },
        {
            "code": "31717",
            "name": "Xã Hòa Tú",
            "provinceCode": "92"
        },
        {
            "code": "31723",
            "name": "Xã Ngọc Tố",
            "provinceCode": "92"
        },
        {
            "code": "31726",
            "name": "Xã Gia Hòa",
            "provinceCode": "92"
        },
        {
            "code": "31732",
            "name": "Phường Ngã Năm",
            "provinceCode": "92"
        },
        {
            "code": "31741",
            "name": "Xã Tân Long",
            "provinceCode": "92"
        },
        {
            "code": "31753",
            "name": "Phường Mỹ Quới",
            "provinceCode": "92"
        },
        {
            "code": "31756",
            "name": "Xã Phú Lộc",
            "provinceCode": "92"
        },
        {
            "code": "31759",
            "name": "Xã Lâm Tân",
            "provinceCode": "92"
        },
        {
            "code": "31777",
            "name": "Xã Vĩnh Lợi",
            "provinceCode": "92"
        },
        {
            "code": "31783",
            "name": "Phường Vĩnh Châu",
            "provinceCode": "92"
        },
        {
            "code": "31789",
            "name": "Phường Khánh Hòa",
            "provinceCode": "92"
        },
        {
            "code": "31795",
            "name": "Xã Vĩnh Hải",
            "provinceCode": "92"
        },
        {
            "code": "31804",
            "name": "Phường Vĩnh Phước",
            "provinceCode": "92"
        },
        {
            "code": "31810",
            "name": "Xã Lai Hòa",
            "provinceCode": "92"
        },
        {
            "code": "31825",
            "name": "Phường Bạc Liêu",
            "provinceCode": "96"
        },
        {
            "code": "31834",
            "name": "Phường Vĩnh Trạch",
            "provinceCode": "96"
        },
        {
            "code": "31840",
            "name": "Phường Hiệp Thành",
            "provinceCode": "96"
        },
        {
            "code": "31843",
            "name": "Xã Hồng Dân",
            "provinceCode": "96"
        },
        {
            "code": "31849",
            "name": "Xã Ninh Quới",
            "provinceCode": "96"
        },
        {
            "code": "31858",
            "name": "Xã Vĩnh Lộc",
            "provinceCode": "96"
        },
        {
            "code": "31864",
            "name": "Xã Ninh Thạnh Lợi",
            "provinceCode": "96"
        },
        {
            "code": "31867",
            "name": "Xã Phước Long",
            "provinceCode": "96"
        },
        {
            "code": "31876",
            "name": "Xã Vĩnh Phước",
            "provinceCode": "96"
        },
        {
            "code": "31882",
            "name": "Xã Vĩnh Thanh",
            "provinceCode": "96"
        },
        {
            "code": "31885",
            "name": "Xã Phong Hiệp",
            "provinceCode": "96"
        },
        {
            "code": "31891",
            "name": "Xã Hòa Bình",
            "provinceCode": "96"
        },
        {
            "code": "31894",
            "name": "Xã Châu Thới",
            "provinceCode": "96"
        },
        {
            "code": "31900",
            "name": "Xã Vĩnh Lợi",
            "provinceCode": "96"
        },
        {
            "code": "31906",
            "name": "Xã Hưng Hội",
            "provinceCode": "96"
        },
        {
            "code": "31918",
            "name": "Xã Vĩnh Mỹ",
            "provinceCode": "96"
        },
        {
            "code": "31927",
            "name": "Xã Vĩnh Hậu",
            "provinceCode": "96"
        },
        {
            "code": "31942",
            "name": "Phường Giá Rai",
            "provinceCode": "96"
        },
        {
            "code": "31951",
            "name": "Phường Láng Tròn",
            "provinceCode": "96"
        },
        {
            "code": "31957",
            "name": "Xã Phong Thạnh",
            "provinceCode": "96"
        },
        {
            "code": "31972",
            "name": "Xã Gành Hào",
            "provinceCode": "96"
        },
        {
            "code": "31975",
            "name": "Xã Đông Hải",
            "provinceCode": "96"
        },
        {
            "code": "31985",
            "name": "Xã Long Điền",
            "provinceCode": "96"
        },
        {
            "code": "31988",
            "name": "Xã An Trạch",
            "provinceCode": "96"
        },
        {
            "code": "31993",
            "name": "Xã Định Thành",
            "provinceCode": "96"
        },
        {
            "code": "32002",
            "name": "Phường An Xuyên",
            "provinceCode": "96"
        },
        {
            "code": "32014",
            "name": "Phường Lý Văn Lâm",
            "provinceCode": "96"
        },
        {
            "code": "32025",
            "name": "Phường Tân Thành",
            "provinceCode": "96"
        },
        {
            "code": "32041",
            "name": "Phường Hòa Thành",
            "provinceCode": "96"
        },
        {
            "code": "32044",
            "name": "Xã Nguyễn Phích",
            "provinceCode": "96"
        },
        {
            "code": "32047",
            "name": "Xã U Minh",
            "provinceCode": "96"
        },
        {
            "code": "32059",
            "name": "Xã Khánh An",
            "provinceCode": "96"
        },
        {
            "code": "32062",
            "name": "Xã Khánh Lâm",
            "provinceCode": "96"
        },
        {
            "code": "32065",
            "name": "Xã Thới Bình",
            "provinceCode": "96"
        },
        {
            "code": "32069",
            "name": "Xã Biển Bạch",
            "provinceCode": "96"
        },
        {
            "code": "32071",
            "name": "Xã Trí Phải",
            "provinceCode": "96"
        },
        {
            "code": "32083",
            "name": "Xã Tân Lộc",
            "provinceCode": "96"
        },
        {
            "code": "32092",
            "name": "Xã Hồ Thị Kỷ",
            "provinceCode": "96"
        },
        {
            "code": "32095",
            "name": "Xã Trần Văn Thời",
            "provinceCode": "96"
        },
        {
            "code": "32098",
            "name": "Xã Sông Đốc",
            "provinceCode": "96"
        },
        {
            "code": "32104",
            "name": "Xã Đá Bạc",
            "provinceCode": "96"
        },
        {
            "code": "32110",
            "name": "Xã Khánh Bình",
            "provinceCode": "96"
        },
        {
            "code": "32119",
            "name": "Xã Khánh Hưng",
            "provinceCode": "96"
        },
        {
            "code": "32128",
            "name": "Xã Cái Nước",
            "provinceCode": "96"
        },
        {
            "code": "32134",
            "name": "Xã Lương Thế Trân",
            "provinceCode": "96"
        },
        {
            "code": "32137",
            "name": "Xã Tân Hưng",
            "provinceCode": "96"
        },
        {
            "code": "32140",
            "name": "Xã Hưng Mỹ",
            "provinceCode": "96"
        },
        {
            "code": "32152",
            "name": "Xã Đầm Dơi",
            "provinceCode": "96"
        },
        {
            "code": "32155",
            "name": "Xã Tạ An Khương",
            "provinceCode": "96"
        },
        {
            "code": "32161",
            "name": "Xã Trần Phán",
            "provinceCode": "96"
        },
        {
            "code": "32167",
            "name": "Xã Tân Thuận",
            "provinceCode": "96"
        },
        {
            "code": "32182",
            "name": "Xã Quách Phẩm",
            "provinceCode": "96"
        },
        {
            "code": "32185",
            "name": "Xã Thanh Tùng",
            "provinceCode": "96"
        },
        {
            "code": "32188",
            "name": "Xã Tân Tiến",
            "provinceCode": "96"
        },
        {
            "code": "32191",
            "name": "Xã Năm Căn",
            "provinceCode": "96"
        },
        {
            "code": "32201",
            "name": "Xã Đất Mới",
            "provinceCode": "96"
        },
        {
            "code": "32206",
            "name": "Xã Tam Giang",
            "provinceCode": "96"
        },
        {
            "code": "32212",
            "name": "Xã Cái Đôi Vàm",
            "provinceCode": "96"
        },
        {
            "code": "32214",
            "name": "Xã Phú Mỹ",
            "provinceCode": "96"
        },
        {
            "code": "32218",
            "name": "Xã Phú Tân",
            "provinceCode": "96"
        },
        {
            "code": "32227",
            "name": "Xã Nguyễn Việt Khái",
            "provinceCode": "96"
        },
        {
            "code": "32236",
            "name": "Xã Tân Ân",
            "provinceCode": "96"
        },
        {
            "code": "32244",
            "name": "Xã Phan Ngọc Hiển",
            "provinceCode": "96"
        },
        {
            "code": "32248",
            "name": "Xã Đất Mũi",
            "provinceCode": "96"
        }
    ];
}