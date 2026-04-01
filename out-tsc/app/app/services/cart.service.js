import { Injectable, signal, computed } from '@angular/core';
import * as i0 from "@angular/core";
export class CartService {
    constructor() {
        this.items = signal(this.loadCart());
        this.count = computed(() => this.items().reduce((s, i) => s + i.quantity, 0));
        this.subtotal = computed(() => this.items().reduce((s, i) => s + i.product.price * i.quantity, 0));
        this.shipping = computed(() => this.subtotal() >= 10000 ? 0 : 150);
        this.tax = computed(() => Math.round(this.subtotal() * 0.05));
        this.total = computed(() => this.subtotal() + this.shipping() + this.tax());
    }
    loadCart() {
        try {
            return JSON.parse(localStorage.getItem('vv_cart') || '[]');
        }
        catch {
            return [];
        }
    }
    save() { localStorage.setItem('vv_cart', JSON.stringify(this.items())); }
    addItem(product, qty = 1, color = '') {
        const key = product._id || product.id;
        const existing = this.items().find(i => (i.product._id || i.product.id) === key && i.color === color);
        if (existing) {
            this.items.update(items => items.map(i => (i.product._id || i.product.id) === key && i.color === color
                ? { ...i, quantity: Math.min(i.quantity + qty, i.product.stock) }
                : i));
        }
        else {
            this.items.update(items => [...items, { product, quantity: qty, color }]);
        }
        this.save();
    }
    removeItem(productId, color = '') {
        this.items.update(items => items.filter(i => !((i.product._id === productId || i.product.id === productId) && i.color === color)));
        this.save();
    }
    updateQuantity(productId, qty, color = '') {
        if (qty <= 0) {
            this.removeItem(productId, color);
            return;
        }
        this.items.update(items => items.map(i => (i.product._id === productId || i.product.id === productId) && i.color === color
            ? { ...i, quantity: Math.min(qty, i.product.stock) }
            : i));
        this.save();
    }
    clear() { this.items.set([]); localStorage.removeItem('vv_cart'); }
    toOrderItems() {
        return this.items().map(i => ({
            product: i.product._id || i.product.id,
            productName: i.product.name,
            quantity: i.quantity,
            color: i.color || undefined,
        }));
    }
    static { this.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=cart.service.js.map