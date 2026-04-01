import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = () => ({ exact: true });
function AdminUsersComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtext(1, "Loading...");
    i0.ɵɵelementEnd();
} }
function AdminUsersComponent_div_63_tr_21_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function AdminUsersComponent_div_63_tr_21_button_22_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const u_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.toggleActive(u_r2._id, u_r2.isActive)); });
    i0.ɵɵelementStart(1, "span", 44);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const u_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleProp("color", u_r2.isActive ? "var(--success)" : "var(--error)");
    i0.ɵɵproperty("title", u_r2.isActive ? "Deactivate" : "Activate");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r2.isActive ? "toggle_on" : "toggle_off");
} }
function AdminUsersComponent_div_63_tr_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 3)(3, "div", 36);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 37);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "td", 38);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 38);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td")(12, "span", 39);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td", 40);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 40);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td", 41);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td");
    i0.ɵɵtemplate(22, AdminUsersComponent_div_63_tr_21_button_22_Template, 3, 4, "button", 42);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const u_r2 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(u_r2.name[0]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r2.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r2.phone || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background", u_r2.role === "admin" ? "rgba(123,30,58,0.12)" : "rgba(107,84,71,0.1)")("color", u_r2.role === "admin" ? "var(--burgundy)" : "var(--text-muted)");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", u_r2.role, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((u_r2.addresses == null ? null : u_r2.addresses.length) || 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((u_r2.wishlist == null ? null : u_r2.wishlist.length) || 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(20, 13, u_r2.createdAt, "d MMM yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", u_r2.role !== "admin");
} }
function AdminUsersComponent_div_63_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 45);
    i0.ɵɵtext(2, "No users found");
    i0.ɵɵelementEnd()();
} }
function AdminUsersComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Customer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Addresses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Wishlist");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Joined");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "tbody");
    i0.ɵɵtemplate(21, AdminUsersComponent_div_63_tr_21_Template, 23, 16, "tr", 34)(22, AdminUsersComponent_div_63_tr_22_Template, 3, 0, "tr", 35);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngForOf", ctx_r2.users());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.users().length === 0);
} }
export class AdminUsersComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.api = inject(ApiService);
        this.toast = inject(ToastService);
        this.users = signal([]);
        this.loading = signal(true);
        this.total = signal(0);
        this.searchQ = '';
        this.roleFilter = '';
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading.set(true);
        const params = { limit: 30 };
        if (this.searchQ)
            params['q'] = this.searchQ;
        if (this.roleFilter)
            params['role'] = this.roleFilter;
        this.api.get('/users', params).subscribe({
            next: (r) => { this.users.set(r.users); this.total.set(r.total); this.loading.set(false); },
            error: () => this.loading.set(false),
        });
    }
    toggleActive(id, current) {
        this.api.patch(`/users/${id}/toggle-active`, {}).subscribe({
            next: (r) => { this.toast.success(r.message); this.users.update(us => us.map(u => u._id === id ? { ...u, isActive: r.isActive } : u)); },
            error: (e) => this.toast.error(e.message),
        });
    }
    static { this.ɵfac = function AdminUsersComponent_Factory(t) { return new (t || AdminUsersComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminUsersComponent, selectors: [["app-admin-users"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 64, vars: 7, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-logo"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [2, "width", "32px", "height", "32px", "background", "var(--gold-warm)", "color", "white", "display", "flex", "align-items", "center", "justify-content", "center", "border-radius", "2px", "font-family", "var(--font-display)"], [2, "color", "rgba(255,255,255,0.85)", "font-family", "var(--font-display)"], [1, "sidebar-nav"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "material-icons"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/categories", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/homepage", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], [1, "nav-divider"], ["routerLink", "/", 1, "nav-item"], [1, "nav-item", "logout", 3, "click"], [1, "admin-main"], [1, "admin-topbar"], [1, "admin-page-title"], [1, "admin-page-sub"], [1, "toolbar"], [2, "position", "relative", "flex", "1"], [1, "material-icons", 2, "position", "absolute", "left", "10px", "top", "50%", "transform", "translateY(-50%)", "color", "var(--text-muted)", "font-size", "18px"], ["placeholder", "Search name or email...", 1, "form-control", 2, "padding-left", "36px", 3, "ngModelChange", "input", "ngModel"], [1, "form-control", 2, "width", "auto", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "user"], ["value", "admin"], [1, "admin-section"], ["style", "padding:48px;text-align:center;color:var(--text-muted)", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [2, "padding", "48px", "text-align", "center", "color", "var(--text-muted)"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "width", "36px", "height", "36px", "border-radius", "50%", "background", "var(--burgundy)", "color", "white", "font-family", "var(--font-display)", "font-size", "1rem", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], [2, "color", "var(--text)", "font-size", "0.875rem", "font-weight", "500"], [2, "font-size", "0.82rem", "color", "var(--text-muted)"], [2, "padding", "3px 10px", "border-radius", "20px", "font-size", "0.65rem", "font-weight", "600", "text-transform", "uppercase", "letter-spacing", "0.08em"], [2, "text-align", "center", "color", "var(--text-muted)", "font-size", "0.85rem"], [2, "font-size", "0.75rem", "color", "var(--text-muted)"], ["class", "uact-btn", 3, "title", "color", "click", 4, "ngIf"], [1, "uact-btn", 3, "click", "title"], [1, "material-icons", 2, "font-size", "18px"], ["colspan", "8", 2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"]], template: function AdminUsersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵtext(5, "V");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 5);
            i0.ɵɵtext(7, "Vastra Vaibhav");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "nav", 6)(9, "a", 7)(10, "span", 8);
            i0.ɵɵtext(11, "dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, " Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 9)(14, "span", 8);
            i0.ɵɵtext(15, "receipt_long");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " Orders");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "a", 10)(18, "span", 8);
            i0.ɵɵtext(19, "inventory_2");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(20, " Products");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "a", 11)(22, "span", 8);
            i0.ɵɵtext(23, "category");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(24, " Categories");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "a", 12)(26, "span", 8);
            i0.ɵɵtext(27, "tune");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(28, " Homepage");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "a", 13)(30, "span", 8);
            i0.ɵɵtext(31, "group");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(32, " Customers");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "div", 14);
            i0.ɵɵelementStart(34, "a", 15)(35, "span", 8);
            i0.ɵɵtext(36, "storefront");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(37, " View Store");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "button", 16);
            i0.ɵɵlistener("click", function AdminUsersComponent_Template_button_click_38_listener() { return ctx.auth.logout(); });
            i0.ɵɵelementStart(39, "span", 8);
            i0.ɵɵtext(40, "logout");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, " Logout");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(42, "div", 17)(43, "div", 18)(44, "div")(45, "h1", 19);
            i0.ɵɵtext(46, "Customers");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "p", 20);
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(49, "div", 21)(50, "div", 22)(51, "span", 23);
            i0.ɵɵtext(52, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "input", 24);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_53_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchQ, $event) || (ctx.searchQ = $event); return $event; });
            i0.ɵɵlistener("input", function AdminUsersComponent_Template_input_input_53_listener() { return ctx.load(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(54, "select", 25);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminUsersComponent_Template_select_ngModelChange_54_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.roleFilter, $event) || (ctx.roleFilter = $event); return $event; });
            i0.ɵɵlistener("change", function AdminUsersComponent_Template_select_change_54_listener() { return ctx.load(); });
            i0.ɵɵelementStart(55, "option", 26);
            i0.ɵɵtext(56, "All Roles");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "option", 27);
            i0.ɵɵtext(58, "Customers");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "option", 28);
            i0.ɵɵtext(60, "Admins");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(61, "div", 29);
            i0.ɵɵtemplate(62, AdminUsersComponent_div_62_Template, 2, 0, "div", 30)(63, AdminUsersComponent_div_63_Template, 23, 2, "div", 31);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(6, _c0));
            i0.ɵɵadvance(39);
            i0.ɵɵtextInterpolate1("", ctx.total(), " registered users");
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchQ);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.roleFilter);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading());
        } }, dependencies: [RouterLink, RouterLinkActive, CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["//[_ngcontent-%COMP%]   Admin[_ngcontent-%COMP%]   Users[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n\n//[_ngcontent-%COMP%]   User[_ngcontent-%COMP%]   stats[_ngcontent-%COMP%]   row\n.user-stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 28px;\n}\n\n.user-stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.2s;\n\n  &:hover { box-shadow: var(--shadow-sm); transform: translateY(-1px); }\n}\n\n.stat-v[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.8rem;\n  color: var(--text);\n  line-height: 1;\n}\n\n.stat-l[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n\n//[_ngcontent-%COMP%]   Toggle[_ngcontent-%COMP%]   button\n.uact-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 6px;\n  border-radius: 6px;\n  transition: background 0.2s;\n\n  &:hover { background: var(--surface); }\n}\n\n//[_ngcontent-%COMP%]   Table[_ngcontent-%COMP%]   user[_ngcontent-%COMP%]   avatar\n.user-info-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.user-avatar-sm[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n@media (max-width: 900px) {\n  .user-stats-row[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n}\n\n@media (max-width: 600px) {\n  .user-stats-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n\n\n@media (max-width: 768px) {\n  .toolbar[_ngcontent-%COMP%] { flex-direction: column; gap: 10px; }\n  .user-stats-row[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n  \n\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3), table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5), table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) { display: none; }\n}\n\n@media (max-width: 480px) {\n  .user-stats-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .user-stat-card[_ngcontent-%COMP%] { padding: 14px; }\n  .stat-v[_ngcontent-%COMP%] { font-size: 1.5rem; }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) { display: none; }\n  .user-avatar-sm[_ngcontent-%COMP%] { width: 30px; height: 30px; font-size: 0.85rem; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminUsersComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-users', standalone: true, imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule], template: "<div class=\"admin-layout\">\n      <aside class=\"admin-sidebar\">\n        <div class=\"sidebar-logo\"><div style=\"display:flex;align-items:center;gap:10px\"><div style=\"width:32px;height:32px;background:var(--gold-warm);color:white;display:flex;align-items:center;justify-content:center;border-radius:2px;font-family:var(--font-display)\">V</div><span style=\"color:rgba(255,255,255,0.85);font-family:var(--font-display)\">Vastra Vaibhav</span></div></div>\n        <nav class=\"sidebar-nav\">\n          <a routerLink=\"/admin\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\"><span class=\"material-icons\">dashboard</span> Dashboard</a>\n          <a routerLink=\"/admin/orders\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">receipt_long</span> Orders</a>\n          <a routerLink=\"/admin/products\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">inventory_2</span> Products</a>\n          <a routerLink=\"/admin/categories\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">category</span> Categories</a>\n          <a routerLink=\"/admin/homepage\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">tune</span> Homepage</a>\n          <a routerLink=\"/admin/users\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">group</span> Customers</a>\n          <div class=\"nav-divider\"></div>\n          <a routerLink=\"/\" class=\"nav-item\"><span class=\"material-icons\">storefront</span> View Store</a>\n          <button class=\"nav-item logout\" (click)=\"auth.logout()\"><span class=\"material-icons\">logout</span> Logout</button>\n        </nav>\n      </aside>\n\n      <div class=\"admin-main\">\n        <div class=\"admin-topbar\">\n          <div><h1 class=\"admin-page-title\">Customers</h1><p class=\"admin-page-sub\">{{ total() }} registered users</p></div>\n        </div>\n\n        <div class=\"toolbar\">\n          <div style=\"position:relative;flex:1\">\n            <span class=\"material-icons\" style=\"position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--text-muted);font-size:18px\">search</span>\n            <input class=\"form-control\" style=\"padding-left:36px\" [(ngModel)]=\"searchQ\" (input)=\"load()\" placeholder=\"Search name or email...\">\n          </div>\n          <select class=\"form-control\" style=\"width:auto\" [(ngModel)]=\"roleFilter\" (change)=\"load()\">\n            <option value=\"\">All Roles</option>\n            <option value=\"user\">Customers</option>\n            <option value=\"admin\">Admins</option>\n          </select>\n        </div>\n\n        <div class=\"admin-section\">\n          <div *ngIf=\"loading()\" style=\"padding:48px;text-align:center;color:var(--text-muted)\">Loading...</div>\n          <div class=\"table-wrapper\" *ngIf=\"!loading()\">\n            <table>\n              <thead><tr><th>Customer</th><th>Email</th><th>Phone</th><th>Role</th><th>Addresses</th><th>Wishlist</th><th>Joined</th><th>Action</th></tr></thead>\n              <tbody>\n                <tr *ngFor=\"let u of users()\">\n                  <td>\n                    <div style=\"display:flex;align-items:center;gap:10px\">\n                      <div style=\"width:36px;height:36px;border-radius:50%;background:var(--burgundy);color:white;font-family:var(--font-display);font-size:1rem;display:flex;align-items:center;justify-content:center;flex-shrink:0\">{{ u.name[0] }}</div>\n                      <div style=\"color:var(--text);font-size:0.875rem;font-weight:500\">{{ u.name }}</div>\n                    </div>\n                  </td>\n                  <td style=\"font-size:0.82rem;color:var(--text-muted)\">{{ u.email }}</td>\n                  <td style=\"font-size:0.82rem;color:var(--text-muted)\">{{ u.phone || '\u2014' }}</td>\n                  <td>\n                    <span style=\"padding:3px 10px;border-radius:20px;font-size:0.65rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em\"\n                      [style.background]=\"u.role==='admin'?'rgba(123,30,58,0.12)':'rgba(107,84,71,0.1)'\"\n                      [style.color]=\"u.role==='admin'?'var(--burgundy)':'var(--text-muted)'\">\n                      {{ u.role }}\n                    </span>\n                  </td>\n                  <td style=\"text-align:center;color:var(--text-muted);font-size:0.85rem\">{{ u.addresses?.length || 0 }}</td>\n                  <td style=\"text-align:center;color:var(--text-muted);font-size:0.85rem\">{{ u.wishlist?.length || 0 }}</td>\n                  <td style=\"font-size:0.75rem;color:var(--text-muted)\">{{ u.createdAt | date:'d MMM yyyy' }}</td>\n                  <td>\n                    <button *ngIf=\"u.role!=='admin'\" class=\"uact-btn\" [title]=\"u.isActive?'Deactivate':'Activate'\" (click)=\"toggleActive(u._id, u.isActive)\"\n                      [style.color]=\"u.isActive?'var(--success)':'var(--error)'\">\n                      <span class=\"material-icons\" style=\"font-size:18px\">{{ u.isActive ? 'toggle_on' : 'toggle_off' }}</span>\n                    </button>\n                  </td>\n                </tr>\n                <tr *ngIf=\"users().length===0\"><td colspan=\"8\" style=\"text-align:center;padding:40px;color:var(--text-muted)\">No users found</td></tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n", styles: ["// Admin Users Component Styles\n\n.toolbar {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n\n// User stats row\n.user-stats-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 28px;\n}\n\n.user-stat-card {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.2s;\n\n  &:hover { box-shadow: var(--shadow-sm); transform: translateY(-1px); }\n}\n\n.stat-v {\n  font-family: var(--font-display);\n  font-size: 1.8rem;\n  color: var(--text);\n  line-height: 1;\n}\n\n.stat-l {\n  font-size: 0.7rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n\n// Toggle button\n.uact-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 6px;\n  border-radius: 6px;\n  transition: background 0.2s;\n\n  &:hover { background: var(--surface); }\n}\n\n// Table user avatar\n.user-info-cell {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.user-avatar-sm {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n@media (max-width: 900px) {\n  .user-stats-row { grid-template-columns: repeat(2, 1fr); }\n}\n\n@media (max-width: 600px) {\n  .user-stats-row { grid-template-columns: 1fr; }\n}\n\n/* \u2500\u2500 Mobile Responsive \u2500\u2500 */\n@media (max-width: 768px) {\n  .toolbar { flex-direction: column; gap: 10px; }\n  .user-stats-row { grid-template-columns: 1fr 1fr; }\n  /* Hide less critical columns */\n  table thead th:nth-child(3),\n  table tbody td:nth-child(3),\n  table thead th:nth-child(5),\n  table tbody td:nth-child(5),\n  table thead th:nth-child(6),\n  table tbody td:nth-child(6) { display: none; }\n}\n\n@media (max-width: 480px) {\n  .user-stats-row { grid-template-columns: 1fr; }\n  .user-stat-card { padding: 14px; }\n  .stat-v { font-size: 1.5rem; }\n  table thead th:nth-child(4),\n  table tbody td:nth-child(4) { display: none; }\n  .user-avatar-sm { width: 30px; height: 30px; font-size: 0.85rem; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src\\app\\components\\admin\\users\\admin-users.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=admin-users.component.js.map