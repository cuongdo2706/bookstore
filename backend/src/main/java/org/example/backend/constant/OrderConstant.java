package org.example.backend.constant;

public class OrderConstant {
    public static class OrderStatus {
        public static final String PENDING = "Pending";//Chờ xác nhận
        public static final String PROCESSING = "Processing";//Đang xử lí
        public static final String DELIVERING = "Delivering";//Đang giao hàng
        public static final String DELIVERED = "Delivered";//Đã giao hàng
        public static final String COMPLETED = "Completed";//Hoàn thành
        public static final String CANCELLED = "Cancelled";//Đã huỷ
    }

    public static class OrderType {
        public static final String ONLINE = "Online";
        public static final String OFFLINE = "Offline";
    }

}
