package org.example.backend.service;

import org.example.backend.dto.request.OfflineOrderRequest;
import org.example.backend.dto.response.OfflineOrderResponse;
import org.example.backend.exception.DataConflictException;
import org.example.backend.exception.DataNotFoundException;

public interface OrderService {
    OfflineOrderResponse placeOrderOffline(OfflineOrderRequest request) throws DataNotFoundException, DataConflictException;
}
