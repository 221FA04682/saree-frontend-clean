import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import * as i0 from "@angular/core";
export class OrderService {
    constructor() {
        this.api = inject(ApiService);
    }
    // ── User: Place order ────────────────────────────────────────
    placeOrder(payload) {
        return this.api.post('/orders', payload);
    }
    // ── User: My orders ──────────────────────────────────────────
    getMyOrders(page = 1, limit = 10) {
        return this.api.get('/orders/my', { page, limit });
    }
    getMyOrderById(id) {
        return this.api.get(`/orders/my/${id}`);
    }
    // ── User: Download Invoice (users only get invoice) ──────────
    downloadInvoice(orderId) {
        return this.api.getBlob(`/orders/my/${orderId}/invoice`);
    }
    // ── User: Cancel order ───────────────────────────────────────
    cancelOrder(id, reason) {
        return this.api.post(`/orders/my/${id}/cancel`, { reason });
    }
    // ── Admin: All orders ────────────────────────────────────────
    adminGetAll(params = {}) {
        return this.api.get('/orders/admin/all', params);
    }
    // ── Admin: Stats ─────────────────────────────────────────────
    adminGetStats() {
        return this.api.get('/orders/admin/stats');
    }
    // ── Admin: Update order status ───────────────────────────────
    adminUpdateStatus(id, data) {
        return this.api.put(`/orders/admin/${id}/status`, data);
    }
    // ── Admin: Download Invoice ──────────────────────────────────
    adminDownloadInvoice(orderId) {
        return this.api.getBlob(`/orders/admin/${orderId}/invoice`);
    }
    // ── Admin: Download Shipping Label ───────────────────────────
    adminDownloadShippingLabel(orderId) {
        return this.api.getBlob(`/orders/admin/${orderId}/print-label`);
    }
    static { this.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=order.service.js.map