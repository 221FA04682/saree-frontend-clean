import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import * as i0 from "@angular/core";
export class ProductService {
    constructor() {
        this.api = inject(ApiService);
        this.products = signal([]);
    }
    norm(p) {
        return { ...p, id: p._id || p.id || '' };
    }
    getProducts(params = {}) {
        return new Observable(obs => {
            this.api.get('/products', params).subscribe({
                next: r => {
                    const normed = { ...r, products: r.products.map(p => this.norm(p)) };
                    obs.next(normed);
                    obs.complete();
                },
                error: e => obs.error(e),
            });
        });
    }
    getById(id) {
        return new Observable(obs => {
            this.api.get(`/products/${id}`).subscribe({
                next: r => { obs.next({ ...r, product: this.norm(r.product) }); obs.complete(); },
                error: e => obs.error(e),
            });
        });
    }
    getRelated(id) {
        return new Observable(obs => {
            this.api.get(`/products/${id}/related`).subscribe({
                next: r => { obs.next({ ...r, products: r.products.map(p => this.norm(p)) }); obs.complete(); },
                error: e => obs.error(e),
            });
        });
    }
    getCategories() {
        return this.api.get('/products/categories');
    }
    getMeta() {
        return this.api.get('/products/meta');
    }
    create(data) {
        return this.api.post('/products', data);
    }
    update(id, data) {
        return this.api.put(`/products/${id}`, data);
    }
    delete(id) {
        return this.api.delete(`/products/${id}`);
    }
    updateStock(id, change, reason) {
        return this.api.patch(`/products/${id}/stock`, { change, reason });
    }
    uploadImages(files) {
        const fd = new FormData();
        files.forEach(f => fd.append('images', f));
        return this.api.postFormData('/upload/product', fd);
    }
    addReview(productId, rating, comment) {
        return this.api.post(`/products/${productId}/review`, { rating, comment });
    }
    formatPrice(price) {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
    }
    // Compatibility shims
    filter(_opts) { return this.products(); }
    search(q) { return this.products().filter(p => p.name.toLowerCase().includes(q.toLowerCase())); }
    getFeatured() { return this.products().filter(p => p.featured); }
    getNewArrivals() { return this.products().filter(p => p.newArrival); }
    getByCategory(cat) { return this.products().filter(p => p.category === cat); }
    getCategories_sync() { return [...new Set(this.products().map(p => p.category))]; }
    static { this.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=product.service.js.map