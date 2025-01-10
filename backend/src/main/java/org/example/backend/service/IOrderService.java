package org.example.backend.service;

import org.example.backend.dto.request.OrderOfflineRequest;
import org.example.backend.dto.response.OrderOfflineResponse;
import org.example.backend.exception.DataNotFoundException;

public interface IOrderService {
        OrderOfflineResponse placeOrderOffline(OrderOfflineRequest request) throws DataNotFoundException;
}
