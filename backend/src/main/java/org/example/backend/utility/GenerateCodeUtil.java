package org.example.backend.utility;

import java.util.Random;

public class GenerateCodeUtil {
    public static String generateProductCode() {
        int length = 10;
        StringBuilder sb = new StringBuilder(length);
        String prefix = "SP";
        Random random = new Random();

        for (int i = 0 ; i < length ; i++) {
            sb.append(random.nextInt(10));
        }
        return prefix.concat(sb.toString());
    }

    public static String generateOrderCode() {
        int length = 10;
        StringBuilder sb = new StringBuilder(length);
        String prefix = "HĐ";
        Random random = new Random();

        for (int i = 0 ; i < length ; i++) {
            sb.append(random.nextInt(10));
        }
        return prefix.concat(sb.toString());
    }

    public static String generatePromotionCode() {
        int length = 10;
        StringBuilder sb = new StringBuilder(length);
        String prefix = "KM";
        Random random = new Random();

        for (int i = 0 ; i < length ; i++) {
            sb.append(random.nextInt(10));
        }
        return prefix.concat(sb.toString());
    }

    public static String generateCouponCode() {
        int length = 10;
        StringBuilder sb = new StringBuilder(length);
        String prefix = "CP";
        Random random = new Random();

        for (int i = 0 ; i < length ; i++) {
            sb.append(random.nextInt(10));
        }
        return prefix.concat(sb.toString());
    }
}
