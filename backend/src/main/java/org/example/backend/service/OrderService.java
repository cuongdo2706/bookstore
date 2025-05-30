package org.example.backend.service;

import org.example.backend.dto.request.OfflineOrderRequest;
import org.example.backend.dto.response.OrderResponse;
import org.example.backend.exception.DataConflictException;
import org.example.backend.exception.DataNotFoundException;

public interface OrderService {
    OrderResponse placeOrderOffline(OfflineOrderRequest request) throws DataNotFoundException, DataConflictException;
}
