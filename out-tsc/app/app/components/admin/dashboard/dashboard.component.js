import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OrderService } from '../../../services/order.service';
import { ProductService } from '../../../services/product.service';
import { AuthService } from '../../../services/auth.service';
import { ApiService } from '../../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => ({ exact: true });
function DashboardComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r0.stats()) == null ? null : tmp_1_0.pending);
} }
function DashboardComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 43);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Updated ", i0.ɵɵpipeBind2(2, 1, ctx_r0.lastUpdated(), "h:mm a"), "");
} }
function DashboardComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtext(1, "Loading...");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_div_122_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 47);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "div", 48);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 49);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td", 50);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td", 51);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 52);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "span", 53);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td", 54);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r2.orderNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(o_r2.userName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r2.userEmail);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", o_r2.items.length, " item(s)");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Rs ", o_r2.total.toLocaleString("en-IN"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r2.paymentMethod);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("badge-" + o_r2.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(17, 10, o_r2.status));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(20, 12, o_r2.createdAt, "d MMM"));
} }
function DashboardComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Order ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Customer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Items");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Payment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵtemplate(19, DashboardComponent_div_122_tr_19_Template, 21, 15, "tr", 46);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngForOf", ctx_r0.recentOrders());
} }
export class DashboardComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.orderService = inject(OrderService);
        this.ps = inject(ProductService);
        this.api = inject(ApiService);
        this.destroyRef = inject(DestroyRef);
        this.today = new Date();
        this.stats = signal(null);
        this.userStats = signal(null);
        this.recentOrders = signal([]);
        this.loadingOrders = signal(true);
        this.refreshing = signal(false);
        this.lastUpdated = signal(null);
    }
    ngOnInit() {
        this.refreshDashboard(true);
        interval(30000)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.refreshDashboard(false));
    }
    formatRevenue(v) {
        if (!v)
            return 'Rs 0';
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);
    }
    refreshDashboard(showLoading = false) {
        if (showLoading)
            this.loadingOrders.set(true);
        this.refreshing.set(true);
        this.orderService.adminGetStats().subscribe({
            next: r => this.stats.set(r.stats),
        });
        this.api.get('/users/stats').subscribe({
            next: r => this.userStats.set(r.stats),
        });
        this.orderService.adminGetAll({ limit: 8 }).subscribe({
            next: (r) => {
                this.recentOrders.set(r.orders);
                this.loadingOrders.set(false);
                this.refreshing.set(false);
                this.lastUpdated.set(new Date());
            },
            error: () => {
                this.loadingOrders.set(false);
                this.refreshing.set(false);
            },
        });
    }
    static { this.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 123, vars: 22, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-logo"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [2, "width", "32px", "height", "32px", "background", "var(--gold-warm)", "color", "white", "display", "flex", "align-items", "center", "justify-content", "center", "border-radius", "2px", "font-family", "var(--font-display)", "font-size", "1rem"], [2, "color", "rgba(255,255,255,0.85)", "font-family", "var(--font-display)", "font-size", "1rem"], [1, "sidebar-nav"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "material-icons"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], ["class", "nav-badge", 4, "ngIf"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/categories", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/homepage", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], [1, "nav-divider"], ["routerLink", "/", 1, "nav-item"], [1, "nav-item", "logout", 3, "click"], [1, "admin-main"], [1, "admin-topbar"], [1, "admin-page-title"], [1, "admin-page-sub"], [1, "live-status"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "live-pill"], [1, "live-dot"], ["class", "sync-time", 4, "ngIf"], [1, "stats-row", 2, "grid-template-columns", "repeat(3,1fr)"], [1, "stats-card"], [1, "stats-icon"], [1, "stats-value"], [1, "stats-label"], [1, "stats-icon", 2, "background", "rgba(45,122,79,0.12)", "color", "var(--success)"], [1, "stats-icon", 2, "background", "rgba(201,149,42,0.12)", "color", "var(--gold-warm)"], [1, "stats-icon", 2, "background", "rgba(37,99,235,0.1)", "color", "var(--info)"], [1, "stats-icon", 2, "background", "rgba(123,30,58,0.12)", "color", "var(--burgundy)"], [1, "admin-section"], [1, "section-header-row"], [1, "section-label"], ["routerLink", "/admin/orders", 1, "btn", "btn-ghost", "btn-sm"], ["style", "padding:40px;text-align:center;color:var(--text-muted)", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [1, "nav-badge"], [1, "sync-time"], [2, "padding", "40px", "text-align", "center", "color", "var(--text-muted)"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [2, "font-family", "monospace", "font-size", "0.78rem", "color", "var(--burgundy)"], [2, "color", "var(--text)", "font-size", "0.85rem", "font-weight", "500"], [2, "font-size", "0.72rem", "color", "var(--text-dim)"], [2, "color", "var(--text-muted)"], [2, "font-family", "var(--font-display)", "color", "var(--burgundy)"], [2, "font-size", "0.82rem"], [1, "badge"], [2, "font-size", "0.78rem", "color", "var(--text-muted)"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtext(16, " Orders ");
            i0.ɵɵtemplate(17, DashboardComponent_span_17_Template, 2, 1, "span", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "a", 11)(19, "span", 8);
            i0.ɵɵtext(20, "inventory_2");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(21, " Products");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "a", 12)(23, "span", 8);
            i0.ɵɵtext(24, "category");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " Categories");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "a", 13)(27, "span", 8);
            i0.ɵɵtext(28, "tune");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(29, " Homepage");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "a", 14)(31, "span", 8);
            i0.ɵɵtext(32, "group");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(33, " Customers");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "div", 15);
            i0.ɵɵelementStart(35, "a", 16)(36, "span", 8);
            i0.ɵɵtext(37, "storefront");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(38, " View Store");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "button", 17);
            i0.ɵɵlistener("click", function DashboardComponent_Template_button_click_39_listener() { return ctx.auth.logout(); });
            i0.ɵɵelementStart(40, "span", 8);
            i0.ɵɵtext(41, "logout");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(42, " Logout");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "div", 18)(44, "div", 19)(45, "div")(46, "h1", 20);
            i0.ɵɵtext(47, "Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "p", 21);
            i0.ɵɵtext(49);
            i0.ɵɵpipe(50, "date");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(51, "div", 22)(52, "button", 23);
            i0.ɵɵlistener("click", function DashboardComponent_Template_button_click_52_listener() { return ctx.refreshDashboard(); });
            i0.ɵɵelementStart(53, "span", 8);
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(55);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "span", 24);
            i0.ɵɵelement(57, "span", 25);
            i0.ɵɵtext(58);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(59, DashboardComponent_span_59_Template, 3, 4, "span", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(60, "div", 27)(61, "div", 28)(62, "div", 29)(63, "span", 8);
            i0.ɵɵtext(64, "receipt_long");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "div")(66, "div", 30);
            i0.ɵɵtext(67);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "div", 31);
            i0.ɵɵtext(69, "Total Orders");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(70, "div", 28)(71, "div", 32)(72, "span", 8);
            i0.ɵɵtext(73, "currency_rupee");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "div")(75, "div", 30);
            i0.ɵɵtext(76);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "div", 31);
            i0.ɵɵtext(78, "Total Revenue");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(79, "div", 28)(80, "div", 33)(81, "span", 8);
            i0.ɵɵtext(82, "pending");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(83, "div")(84, "div", 30);
            i0.ɵɵtext(85);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "div", 31);
            i0.ɵɵtext(87, "Pending Orders");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(88, "div", 28)(89, "div", 32)(90, "span", 8);
            i0.ɵɵtext(91, "check_circle");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(92, "div")(93, "div", 30);
            i0.ɵɵtext(94);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "div", 31);
            i0.ɵɵtext(96, "Delivered");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(97, "div", 28)(98, "div", 34)(99, "span", 8);
            i0.ɵɵtext(100, "today");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(101, "div")(102, "div", 30);
            i0.ɵɵtext(103);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "div", 31);
            i0.ɵɵtext(105, "Today's Orders");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(106, "div", 28)(107, "div", 35)(108, "span", 8);
            i0.ɵɵtext(109, "group");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(110, "div")(111, "div", 30);
            i0.ɵɵtext(112);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "div", 31);
            i0.ɵɵtext(114, "Customers");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(115, "div", 36)(116, "div", 37)(117, "span", 38);
            i0.ɵɵtext(118, "Recent Orders");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(119, "a", 39);
            i0.ɵɵtext(120, "View All");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(121, DashboardComponent_div_121_Template, 2, 0, "div", 40)(122, DashboardComponent_div_122_Template, 20, 1, "div", 41);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_8_0;
            let tmp_9_0;
            let tmp_10_0;
            let tmp_11_0;
            let tmp_12_0;
            let tmp_13_0;
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(21, _c0));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx.stats()) == null ? null : tmp_1_0.pending);
            i0.ɵɵadvance(32);
            i0.ɵɵtextInterpolate2("Welcome back, ", (tmp_2_0 = ctx.auth.currentUser()) == null ? null : tmp_2_0.name, " - ", i0.ɵɵpipeBind2(50, 18, ctx.today, "EEEE, d MMM yyyy"), "");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.refreshing() ? "hourglass_top" : "refresh");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.refreshing() ? "Refreshing" : "Refresh", " ");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("syncing", ctx.refreshing());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.refreshing() ? "Syncing live data" : "Live updates on", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.lastUpdated());
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate((tmp_8_0 = (tmp_8_0 = ctx.stats()) == null ? null : tmp_8_0.total) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "-");
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.formatRevenue((tmp_9_0 = ctx.stats()) == null ? null : tmp_9_0.revenue));
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate((tmp_10_0 = (tmp_10_0 = ctx.stats()) == null ? null : tmp_10_0.pending) !== null && tmp_10_0 !== undefined ? tmp_10_0 : "-");
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate((tmp_11_0 = (tmp_11_0 = ctx.stats()) == null ? null : tmp_11_0.delivered) !== null && tmp_11_0 !== undefined ? tmp_11_0 : "-");
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate((tmp_12_0 = (tmp_12_0 = ctx.stats()) == null ? null : tmp_12_0.todayOrders) !== null && tmp_12_0 !== undefined ? tmp_12_0 : "-");
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate((tmp_13_0 = (tmp_13_0 = ctx.userStats()) == null ? null : tmp_13_0.total) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "-");
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.loadingOrders());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loadingOrders());
        } }, dependencies: [RouterLink, RouterLinkActive, CommonModule, i1.NgForOf, i1.NgIf, i1.TitleCasePipe, i1.DatePipe], styles: ["//[_ngcontent-%COMP%]   Admin[_ngcontent-%COMP%]   Dashboard[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\r\n\r\n.stats-row[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 20px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   Top[_ngcontent-%COMP%]   product[_ngcontent-%COMP%]   rows\r\n.top-products[_ngcontent-%COMP%] { padding: 0 8px; }\r\n\r\n.top-product-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 14px 16px;\r\n  border-bottom: 1px solid rgba(107, 84, 71, 0.06);\r\n  transition: background 0.15s;\r\n\r\n  &:last-child { border-bottom: none; }\r\n  &:hover { background: var(--surface); }\r\n}\r\n\r\n.tp-rank[_ngcontent-%COMP%] {\r\n  width: 26px;\r\n  height: 26px;\r\n  border-radius: 50%;\r\n  background: var(--burgundy-pale);\r\n  color: var(--burgundy);\r\n  font-size: 0.72rem;\r\n  font-weight: 700;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.tp-img[_ngcontent-%COMP%] {\r\n  width: 44px;\r\n  height: 58px;\r\n  object-fit: cover;\r\n  border-radius: var(--radius-sm);\r\n  border: 1px solid var(--border);\r\n  flex-shrink: 0;\r\n}\r\n\r\n.tp-info[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.tp-name[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  color: var(--text);\r\n  font-weight: 500;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.tp-cat[_ngcontent-%COMP%] {\r\n  font-size: 0.72rem;\r\n  color: var(--text-muted);\r\n  margin-top: 2px;\r\n}\r\n\r\n.tp-rating[_ngcontent-%COMP%] {\r\n  color: var(--gold-warm);\r\n  font-size: 0.82rem;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.tp-price[_ngcontent-%COMP%] {\r\n  font-family: var(--font-display);\r\n  color: var(--burgundy);\r\n  font-size: 0.95rem;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.tp-stock[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n  color: var(--success);\r\n  flex-shrink: 0;\r\n  min-width: 50px;\r\n  text-align: right;\r\n\r\n  &.low-stock { color: var(--warning); }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   Table[_ngcontent-%COMP%]   enhancements\r\n.badge[_ngcontent-%COMP%] {\r\n  padding: 3px 10px;\r\n  border-radius: 2px;\r\n  font-size: 0.65rem;\r\n  font-weight: 600;\r\n  letter-spacing: 0.1em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.badge-delivered[_ngcontent-%COMP%] { background: rgba(45,122,79,0.1); color: var(--success); }\n.badge-shipped[_ngcontent-%COMP%], .badge-out_for_delivery[_ngcontent-%COMP%] { background: rgba(201,149,42,0.12); color: var(--gold-warm); }\n.badge-pending[_ngcontent-%COMP%], .badge-confirmed[_ngcontent-%COMP%], .badge-processing[_ngcontent-%COMP%] { background: rgba(107,84,71,0.1); color: var(--text-muted); }\n.badge-cancelled[_ngcontent-%COMP%], .badge-returned[_ngcontent-%COMP%] { background: rgba(192,57,43,0.1); color: var(--error); }\n\n.live-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.live-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(45, 122, 79, 0.08);\n  color: var(--success);\n  font-size: 0.76rem;\n  font-weight: 500;\n}\n\n.live-pill.syncing[_ngcontent-%COMP%] {\n  background: rgba(201, 149, 42, 0.12);\n  color: var(--gold-warm);\n}\n\n.live-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: currentColor;\n  animation: pulse 1.6s ease-in-out infinite;\n}\n\n.sync-time[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n\r\n@media (max-width: 1100px) { .stats-row[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\r\n@media (max-width: 640px) { .stats-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }\r\n\r\n\n\r\n@media (max-width: 768px) {\n  .live-status[_ngcontent-%COMP%] { justify-content: flex-start; }\n  .top-product-row[_ngcontent-%COMP%] { gap: 10px; }\n  .tp-img[_ngcontent-%COMP%] { width: 36px; height: 48px; }\n  .tp-name[_ngcontent-%COMP%] { font-size: 0.8rem; }\n  .tp-stock[_ngcontent-%COMP%], .tp-rating[_ngcontent-%COMP%] { display: none; }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .section-header-row[_ngcontent-%COMP%] { padding: 14px 16px; flex-wrap: wrap; gap: 8px; }\r\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4), table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) { display: none; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard', standalone: true, imports: [RouterLink, RouterLinkActive, CommonModule], template: "<div class=\"admin-layout\">\n  <aside class=\"admin-sidebar\">\n    <div class=\"sidebar-logo\">\n      <div style=\"display:flex;align-items:center;gap:10px\">\n        <div style=\"width:32px;height:32px;background:var(--gold-warm);color:white;display:flex;align-items:center;justify-content:center;border-radius:2px;font-family:var(--font-display);font-size:1rem\">V</div>\n        <span style=\"color:rgba(255,255,255,0.85);font-family:var(--font-display);font-size:1rem\">Vastra Vaibhav</span>\n      </div>\n    </div>\n    <nav class=\"sidebar-nav\">\n      <a routerLink=\"/admin\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-item\"><span class=\"material-icons\">dashboard</span> Dashboard</a>\n      <a routerLink=\"/admin/orders\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">receipt_long</span> Orders <span *ngIf=\"stats()?.pending\" class=\"nav-badge\">{{ stats()?.pending }}</span></a>\n      <a routerLink=\"/admin/products\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">inventory_2</span> Products</a>\n      <a routerLink=\"/admin/categories\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">category</span> Categories</a>\n      <a routerLink=\"/admin/homepage\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">tune</span> Homepage</a>\n      <a routerLink=\"/admin/users\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">group</span> Customers</a>\n      <div class=\"nav-divider\"></div>\n      <a routerLink=\"/\" class=\"nav-item\"><span class=\"material-icons\">storefront</span> View Store</a>\n      <button class=\"nav-item logout\" (click)=\"auth.logout()\"><span class=\"material-icons\">logout</span> Logout</button>\n    </nav>\n  </aside>\n\n  <div class=\"admin-main\">\n    <div class=\"admin-topbar\">\n      <div>\n        <h1 class=\"admin-page-title\">Dashboard</h1>\n        <p class=\"admin-page-sub\">Welcome back, {{ auth.currentUser()?.name }} - {{ today | date:'EEEE, d MMM yyyy' }}</p>\n      </div>\n      <div class=\"live-status\">\n        <button class=\"btn btn-ghost btn-sm\" (click)=\"refreshDashboard()\">\n          <span class=\"material-icons\">{{ refreshing() ? 'hourglass_top' : 'refresh' }}</span>\n          {{ refreshing() ? 'Refreshing' : 'Refresh' }}\n        </button>\n        <span class=\"live-pill\" [class.syncing]=\"refreshing()\">\n          <span class=\"live-dot\"></span>\n          {{ refreshing() ? 'Syncing live data' : 'Live updates on' }}\n        </span>\n        <span class=\"sync-time\" *ngIf=\"lastUpdated()\">Updated {{ lastUpdated() | date:'h:mm a' }}</span>\n      </div>\n    </div>\n\n    <div class=\"stats-row\" style=\"grid-template-columns:repeat(3,1fr)\">\n      <div class=\"stats-card\">\n        <div class=\"stats-icon\"><span class=\"material-icons\">receipt_long</span></div>\n        <div><div class=\"stats-value\">{{ stats()?.total ?? '-' }}</div><div class=\"stats-label\">Total Orders</div></div>\n      </div>\n      <div class=\"stats-card\">\n        <div class=\"stats-icon\" style=\"background:rgba(45,122,79,0.12);color:var(--success)\"><span class=\"material-icons\">currency_rupee</span></div>\n        <div><div class=\"stats-value\">{{ formatRevenue(stats()?.revenue) }}</div><div class=\"stats-label\">Total Revenue</div></div>\n      </div>\n      <div class=\"stats-card\">\n        <div class=\"stats-icon\" style=\"background:rgba(201,149,42,0.12);color:var(--gold-warm)\"><span class=\"material-icons\">pending</span></div>\n        <div><div class=\"stats-value\">{{ stats()?.pending ?? '-' }}</div><div class=\"stats-label\">Pending Orders</div></div>\n      </div>\n      <div class=\"stats-card\">\n        <div class=\"stats-icon\" style=\"background:rgba(45,122,79,0.12);color:var(--success)\"><span class=\"material-icons\">check_circle</span></div>\n        <div><div class=\"stats-value\">{{ stats()?.delivered ?? '-' }}</div><div class=\"stats-label\">Delivered</div></div>\n      </div>\n      <div class=\"stats-card\">\n        <div class=\"stats-icon\" style=\"background:rgba(37,99,235,0.1);color:var(--info)\"><span class=\"material-icons\">today</span></div>\n        <div><div class=\"stats-value\">{{ stats()?.todayOrders ?? '-' }}</div><div class=\"stats-label\">Today's Orders</div></div>\n      </div>\n      <div class=\"stats-card\">\n        <div class=\"stats-icon\" style=\"background:rgba(123,30,58,0.12);color:var(--burgundy)\"><span class=\"material-icons\">group</span></div>\n        <div><div class=\"stats-value\">{{ userStats()?.total ?? '-' }}</div><div class=\"stats-label\">Customers</div></div>\n      </div>\n    </div>\n\n    <div class=\"admin-section\">\n      <div class=\"section-header-row\">\n        <span class=\"section-label\">Recent Orders</span>\n        <a routerLink=\"/admin/orders\" class=\"btn btn-ghost btn-sm\">View All</a>\n      </div>\n      <div *ngIf=\"loadingOrders()\" style=\"padding:40px;text-align:center;color:var(--text-muted)\">Loading...</div>\n      <div class=\"table-wrapper\" *ngIf=\"!loadingOrders()\">\n        <table>\n          <thead>\n            <tr>\n              <th>Order ID</th>\n              <th>Customer</th>\n              <th>Items</th>\n              <th>Total</th>\n              <th>Payment</th>\n              <th>Status</th>\n              <th>Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let o of recentOrders()\">\n              <td style=\"font-family:monospace;font-size:0.78rem;color:var(--burgundy)\">{{ o.orderNumber }}</td>\n              <td><div style=\"color:var(--text);font-size:0.85rem;font-weight:500\">{{ o.userName }}</div><div style=\"font-size:0.72rem;color:var(--text-dim)\">{{ o.userEmail }}</div></td>\n              <td style=\"color:var(--text-muted)\">{{ o.items.length }} item(s)</td>\n              <td style=\"font-family:var(--font-display);color:var(--burgundy)\">Rs {{ o.total.toLocaleString('en-IN') }}</td>\n              <td style=\"font-size:0.82rem\">{{ o.paymentMethod }}</td>\n              <td><span class=\"badge\" [class]=\"'badge-' + o.status\">{{ o.status | titlecase }}</span></td>\n              <td style=\"font-size:0.78rem;color:var(--text-muted)\">{{ o.createdAt | date:'d MMM' }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["// Admin Dashboard Component Styles\r\n\r\n.stats-row {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 20px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n// Top product rows\r\n.top-products { padding: 0 8px; }\r\n\r\n.top-product-row {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n  padding: 14px 16px;\r\n  border-bottom: 1px solid rgba(107, 84, 71, 0.06);\r\n  transition: background 0.15s;\r\n\r\n  &:last-child { border-bottom: none; }\r\n  &:hover { background: var(--surface); }\r\n}\r\n\r\n.tp-rank {\r\n  width: 26px;\r\n  height: 26px;\r\n  border-radius: 50%;\r\n  background: var(--burgundy-pale);\r\n  color: var(--burgundy);\r\n  font-size: 0.72rem;\r\n  font-weight: 700;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.tp-img {\r\n  width: 44px;\r\n  height: 58px;\r\n  object-fit: cover;\r\n  border-radius: var(--radius-sm);\r\n  border: 1px solid var(--border);\r\n  flex-shrink: 0;\r\n}\r\n\r\n.tp-info {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.tp-name {\r\n  font-size: 0.875rem;\r\n  color: var(--text);\r\n  font-weight: 500;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.tp-cat {\r\n  font-size: 0.72rem;\r\n  color: var(--text-muted);\r\n  margin-top: 2px;\r\n}\r\n\r\n.tp-rating {\r\n  color: var(--gold-warm);\r\n  font-size: 0.82rem;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.tp-price {\r\n  font-family: var(--font-display);\r\n  color: var(--burgundy);\r\n  font-size: 0.95rem;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.tp-stock {\r\n  font-size: 0.75rem;\r\n  color: var(--success);\r\n  flex-shrink: 0;\r\n  min-width: 50px;\r\n  text-align: right;\r\n\r\n  &.low-stock { color: var(--warning); }\r\n}\r\n\r\n// Table enhancements\r\n.badge {\r\n  padding: 3px 10px;\r\n  border-radius: 2px;\r\n  font-size: 0.65rem;\r\n  font-weight: 600;\r\n  letter-spacing: 0.1em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.badge-delivered { background: rgba(45,122,79,0.1); color: var(--success); }\n.badge-shipped, .badge-out_for_delivery { background: rgba(201,149,42,0.12); color: var(--gold-warm); }\n.badge-pending, .badge-confirmed, .badge-processing { background: rgba(107,84,71,0.1); color: var(--text-muted); }\n.badge-cancelled, .badge-returned { background: rgba(192,57,43,0.1); color: var(--error); }\n\n.live-status {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.live-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(45, 122, 79, 0.08);\n  color: var(--success);\n  font-size: 0.76rem;\n  font-weight: 500;\n}\n\n.live-pill.syncing {\n  background: rgba(201, 149, 42, 0.12);\n  color: var(--gold-warm);\n}\n\n.live-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: currentColor;\n  animation: pulse 1.6s ease-in-out infinite;\n}\n\n.sync-time {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n\r\n@media (max-width: 1100px) { .stats-row { grid-template-columns: repeat(2, 1fr); } }\r\n@media (max-width: 640px) { .stats-row { grid-template-columns: 1fr; } }\r\n\r\n/* \u2500\u2500 Mobile Responsive \u2500\u2500 */\r\n@media (max-width: 768px) {\n  .live-status { justify-content: flex-start; }\n  .top-product-row { gap: 10px; }\n  .tp-img { width: 36px; height: 48px; }\n  .tp-name { font-size: 0.8rem; }\n  .tp-stock, .tp-rating { display: none; }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .section-header-row { padding: 14px 16px; flex-wrap: wrap; gap: 8px; }\r\n  table thead th:nth-child(4),\r\n  table tbody td:nth-child(4),\r\n  table thead th:nth-child(6),\r\n  table tbody td:nth-child(6) { display: none; }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\components\\admin\\dashboard\\dashboard.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=dashboard.component.js.map