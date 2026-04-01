import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class ToastService {
    constructor() {
        this.toasts = signal([]);
    }
    add(type, message) {
        const id = Math.random().toString(36).slice(2);
        this.toasts.update(t => [...t, { id, type, message }]);
        setTimeout(() => this.remove(id), 4000);
    }
    success(m) { this.add('success', m); }
    error(m) { this.add('error', m); }
    info(m) { this.add('info', m); }
    warning(m) { this.add('warning', m); }
    remove(id) { this.toasts.update(t => t.filter(x => x.id !== id)); }
    static { this.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=toast.service.js.map