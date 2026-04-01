import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import * as i0 from "@angular/core";
export class AuthService {
    constructor() {
        this.api = inject(ApiService);
        this.router = inject(Router);
        this.currentUser = signal(null);
        this.isLoggedIn = computed(() => !!this.currentUser());
        this.isAdmin = computed(() => this.currentUser()?.role === 'admin');
        this.restoreSession();
    }
    restoreSession() {
        const token = localStorage.getItem('vv_token');
        const userData = localStorage.getItem('vv_user');
        if (token && userData) {
            try {
                this.currentUser.set(JSON.parse(userData));
                this.api.get('/auth/me').subscribe({
                    next: (r) => { this.currentUser.set(r.user); localStorage.setItem('vv_user', JSON.stringify(r.user)); },
                    error: () => this.logout(),
                });
            }
            catch {
                this.logout();
            }
        }
    }
    register(name, email, password, phone) {
        return this.api.post('/auth/register', { name, email, password, phone }).pipe(tap(r => {
            if (r.success) {
                localStorage.setItem('vv_token', r.token);
                localStorage.setItem('vv_user', JSON.stringify(r.user));
                this.currentUser.set(r.user);
            }
        }));
    }
    login(email, password) {
        return this.api.post('/auth/login', { email, password }).pipe(tap(r => {
            if (r.success) {
                localStorage.setItem('vv_token', r.token);
                localStorage.setItem('vv_user', JSON.stringify(r.user));
                this.currentUser.set(r.user);
            }
        }));
    }
    logout() {
        localStorage.removeItem('vv_token');
        localStorage.removeItem('vv_user');
        this.currentUser.set(null);
        this.router.navigate(['/']);
    }
    updateProfile(data) {
        return this.api.put('/auth/me', data)
            .pipe(tap(r => { if (r.success) {
            this.currentUser.set(r.user);
            localStorage.setItem('vv_user', JSON.stringify(r.user));
        } }));
    }
    addAddress(address) {
        return this.api.post('/auth/address', address)
            .pipe(tap(r => { if (r.success && this.currentUser()) {
            const u = { ...this.currentUser(), addresses: r.addresses };
            this.currentUser.set(u);
            localStorage.setItem('vv_user', JSON.stringify(u));
        } }));
    }
    deleteAddress(id) {
        return this.api.delete(`/auth/address/${id}`)
            .pipe(tap(r => { if (r.success && this.currentUser()) {
            const u = { ...this.currentUser(), addresses: r.addresses };
            this.currentUser.set(u);
            localStorage.setItem('vv_user', JSON.stringify(u));
        } }));
    }
    toggleWishlist(productId) {
        return this.api.post(`/auth/wishlist/${productId}`, {})
            .pipe(tap(r => { if (r.success && this.currentUser()) {
            const u = { ...this.currentUser(), wishlist: r.wishlist };
            this.currentUser.set(u);
            localStorage.setItem('vv_user', JSON.stringify(u));
        } }));
    }
    isInWishlist(productId) { return this.currentUser()?.wishlist?.includes(productId) ?? false; }
    // kept for compatibility
    getAllUsers() { return []; }
    static { this.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
//# sourceMappingURL=auth.service.js.map