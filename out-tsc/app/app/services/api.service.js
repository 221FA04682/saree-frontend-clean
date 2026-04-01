import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
export class ApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.base = environment.apiUrl;
    }
    headers() {
        const token = localStorage.getItem('vv_token');
        return new HttpHeaders(token ? { Authorization: `Bearer ${token}` } : {});
    }
    get(path, params) {
        let p = new HttpParams();
        if (params)
            Object.entries(params).forEach(([k, v]) => { if (v !== undefined && v !== '')
                p = p.set(k, String(v)); });
        return this.http.get(`${this.base}${path}`, { headers: this.headers(), params: p })
            .pipe(catchError(this.handleError));
    }
    post(path, body) {
        return this.http.post(`${this.base}${path}`, body, { headers: this.headers() })
            .pipe(catchError(this.handleError));
    }
    put(path, body) {
        return this.http.put(`${this.base}${path}`, body, { headers: this.headers() })
            .pipe(catchError(this.handleError));
    }
    patch(path, body) {
        return this.http.patch(`${this.base}${path}`, body, { headers: this.headers() })
            .pipe(catchError(this.handleError));
    }
    delete(path) {
        return this.http.delete(`${this.base}${path}`, { headers: this.headers() })
            .pipe(catchError(this.handleError));
    }
    // For file uploads
    postFormData(path, formData) {
        const token = localStorage.getItem('vv_token');
        const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();
        return this.http.post(`${this.base}${path}`, formData, { headers })
            .pipe(catchError(this.handleError));
    }
    // Download blob (PDF)
    getBlob(path) {
        const token = localStorage.getItem('vv_token');
        const headers = new HttpHeaders(token ? { Authorization: `Bearer ${token}` } : {});
        return this.http.get(`${this.base}${path}`, { headers, responseType: 'blob' })
            .pipe(catchError(this.handleError));
    }
    handleError(error) {
        const msg = error?.error?.message || error?.message || 'Something went wrong';
        return throwError(() => new Error(msg));
    }
    static { this.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=api.service.js.map