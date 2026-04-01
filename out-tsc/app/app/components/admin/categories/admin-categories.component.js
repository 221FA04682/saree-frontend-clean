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
function AdminCategoriesComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtext(1, "Loading categories...");
    i0.ɵɵelementEnd();
} }
function AdminCategoriesComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtext(1, " No categories found yet. Create your first category to start organizing products. ");
    i0.ɵɵelementEnd();
} }
function AdminCategoriesComponent_div_55_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} if (rf & 2) {
    const c_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", c_r2.image, i0.ɵɵsanitizeUrl)("alt", c_r2.name);
} }
function AdminCategoriesComponent_div_55_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "span", 8);
    i0.ɵɵtext(2, "category");
    i0.ɵɵelementEnd()();
} }
function AdminCategoriesComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29);
    i0.ɵɵtemplate(2, AdminCategoriesComponent_div_55_div_1_img_2_Template, 1, 2, "img", 30)(3, AdminCategoriesComponent_div_55_div_1_div_3_Template, 3, 0, "div", 31);
    i0.ɵɵelementStart(4, "div", 32);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 33)(7, "h3", 34);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 35);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 36)(12, "span", 37)(13, "span", 8);
    i0.ɵɵtext(14, "inventory_2");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 38);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 39)(19, "button", 40);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_55_div_1_Template_button_click_19_listener() { const c_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openEdit(c_r2)); });
    i0.ɵɵelementStart(20, "span", 8);
    i0.ɵɵtext(21, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 41);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_55_div_1_Template_button_click_22_listener() { const c_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.toggle(c_r2)); });
    i0.ɵɵelementStart(23, "span", 8);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "button", 42);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_55_div_1_Template_button_click_25_listener() { const c_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.confirmDelete(c_r2)); });
    i0.ɵɵelementStart(26, "span", 8);
    i0.ɵɵtext(27, "delete_outline");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    i0.ɵɵclassProp("inactive", !c_r2.isActive);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", c_r2.image);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !c_r2.image);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", c_r2.isActive)("hidden", !c_r2.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", c_r2.isActive ? "Visible" : "Hidden", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(c_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r2.description || "No description provided yet.");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", c_r2.productCount || 0, " products ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Order: ", c_r2.sortOrder, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("title", c_r2.isActive ? "Hide from store" : "Show in store");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r2.isActive ? "visibility_off" : "visibility");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", c_r2.productCount > 0);
} }
function AdminCategoriesComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, AdminCategoriesComponent_div_55_div_1_Template, 28, 16, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.categories());
} }
function AdminCategoriesComponent_div_56_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 62);
    i0.ɵɵtext(1, " Category name cannot be changed because it is already linked to existing products. ");
    i0.ɵɵelementEnd();
} }
function AdminCategoriesComponent_div_56_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵelement(1, "img", 64);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.form.image, i0.ɵɵsanitizeUrl);
} }
function AdminCategoriesComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_56_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵelementStart(1, "div", 46);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_56_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r4); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 47)(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 48);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_56_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵelementStart(6, "span", 8);
    i0.ɵɵtext(7, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 49)(9, "div", 50)(10, "label", 51);
    i0.ɵɵtext(11, "Category Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 52);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminCategoriesComponent_div_56_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AdminCategoriesComponent_div_56_p_13_Template, 2, 0, "p", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 50)(15, "label", 51);
    i0.ɵɵtext(16, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "textarea", 54);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminCategoriesComponent_div_56_Template_textarea_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 50)(19, "label", 51);
    i0.ɵɵtext(20, "Image URL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 55);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminCategoriesComponent_div_56_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.image, $event) || (ctx_r2.form.image = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, AdminCategoriesComponent_div_56_div_22_Template, 2, 1, "div", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 50)(24, "label", 51);
    i0.ɵɵtext(25, "Sort Order ");
    i0.ɵɵelementStart(26, "span", 57);
    i0.ɵɵtext(27, "(lower = appears first)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "input", 58);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminCategoriesComponent_div_56_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.sortOrder, $event) || (ctx_r2.form.sortOrder = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 59)(30, "button", 60);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_56_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵtext(31, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "button", 61);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_56_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.save()); });
    i0.ɵɵelementStart(33, "span", 8);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.editing() ? "Edit Category" : "Add Category");
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.name);
    i0.ɵɵproperty("disabled", !!ctx_r2.editing());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.editing());
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.image);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.form.image);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.sortOrder);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.saving());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.saving() ? "hourglass_top" : "save");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.saving() ? "Saving..." : ctx_r2.editing() ? "Save Changes" : "Create Category", " ");
} }
function AdminCategoriesComponent_div_57_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 68);
    i0.ɵɵtext(1, " This category has no products and can be safely deleted. ");
    i0.ɵɵelementEnd();
} }
function AdminCategoriesComponent_div_57_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 68);
    i0.ɵɵtext(1, " Categories with products cannot be deleted until those products are moved or removed. ");
    i0.ɵɵelementEnd();
} }
function AdminCategoriesComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_57_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeDeleteModal()); });
    i0.ɵɵelementStart(1, "div", 65);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_57_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 47)(3, "h3");
    i0.ɵɵtext(4, "Delete Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 48);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_57_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeDeleteModal()); });
    i0.ɵɵelementStart(6, "span", 8);
    i0.ɵɵtext(7, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 49)(9, "p");
    i0.ɵɵtext(10, "Are you sure you want to delete ");
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, "?");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, AdminCategoriesComponent_div_57_p_14_Template, 2, 0, "p", 66)(15, AdminCategoriesComponent_div_57_p_15_Template, 2, 0, "p", 66);
    i0.ɵɵelementStart(16, "div", 59)(17, "button", 60);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_57_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeDeleteModal()); });
    i0.ɵɵtext(18, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 67);
    i0.ɵɵlistener("click", function AdminCategoriesComponent_div_57_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.doDelete()); });
    i0.ɵɵtext(20, "Delete");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r2.deleteTarget()) == null ? null : tmp_1_0.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ((tmp_2_0 = ctx_r2.deleteTarget()) == null ? null : tmp_2_0.productCount) === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (((tmp_3_0 = ctx_r2.deleteTarget()) == null ? null : tmp_3_0.productCount) || 0) > 0);
} }
export class AdminCategoriesComponent {
    constructor() {
        this.api = inject(ApiService);
        this.auth = inject(AuthService);
        this.toast = inject(ToastService);
        this.categories = signal([]);
        this.loading = signal(true);
        this.saving = signal(false);
        this.modalOpen = signal(false);
        this.editing = signal(null);
        this.deleteTarget = signal(null);
        this.form = this.blank();
    }
    blank() {
        return { name: '', description: '', image: '', sortOrder: 0 };
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading.set(true);
        this.api.get('/categories/all').subscribe({
            next: r => { this.categories.set(r.categories); this.loading.set(false); },
            error: () => this.loading.set(false),
        });
    }
    openAdd() { this.form = this.blank(); this.editing.set(null); this.modalOpen.set(true); }
    openEdit(c) {
        this.form = { name: c.name, description: c.description, image: c.image, sortOrder: c.sortOrder };
        this.editing.set(c);
        this.modalOpen.set(true);
    }
    save() {
        if (!this.form.name.trim()) {
            this.toast.error('Category name is required.');
            return;
        }
        this.saving.set(true);
        const req = this.editing()
            ? this.api.put(`/categories/${this.editing()._id}`, this.form)
            : this.api.post('/categories', this.form);
        req.subscribe({
            next: r => {
                this.toast.success(r.message);
                this.modalOpen.set(false);
                this.saving.set(false);
                this.load();
            },
            error: (e) => { this.toast.error(e.message); this.saving.set(false); },
        });
    }
    toggle(c) {
        this.api.patch(`/categories/${c._id}/toggle`, {}).subscribe({
            next: r => {
                this.toast.success(r.message);
                this.categories.update(cats => cats.map(x => x._id === c._id ? { ...x, isActive: r.isActive } : x));
            },
            error: (e) => this.toast.error(e.message),
        });
    }
    confirmDelete(c) { this.deleteTarget.set(c); }
    doDelete() {
        if (!this.deleteTarget())
            return;
        this.api.delete(`/categories/${this.deleteTarget()._id}`).subscribe({
            next: r => { this.toast.success(r.message); this.deleteTarget.set(null); this.load(); },
            error: (e) => { this.toast.error(e.message); this.deleteTarget.set(null); },
        });
    }
    closeDeleteModal() { this.deleteTarget.set(null); }
    closeModal() { this.modalOpen.set(false); this.editing.set(null); }
    static { this.ɵfac = function AdminCategoriesComponent_Factory(t) { return new (t || AdminCategoriesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminCategoriesComponent, selectors: [["app-admin-categories"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 58, vars: 8, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-logo"], [1, "s-logo-inner"], [1, "s-logo-mark"], [1, "s-logo-text"], [1, "sidebar-nav"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "material-icons"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/categories", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/homepage", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], [1, "nav-divider"], ["routerLink", "/", 1, "nav-item"], [1, "nav-item", "logout", 3, "click"], [1, "admin-main"], [1, "admin-topbar"], [1, "admin-page-title"], [1, "admin-page-sub"], [1, "btn", "btn-primary", 3, "click"], ["class", "loading-placeholder", 4, "ngIf"], ["class", "cats-grid", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading-placeholder"], [1, "cats-grid"], ["class", "cat-card", 3, "inactive", 4, "ngFor", "ngForOf"], [1, "cat-card"], [1, "cat-img-wrap"], [3, "src", "alt", 4, "ngIf"], ["class", "cat-placeholder", 4, "ngIf"], [1, "cat-status-badge"], [1, "cat-info"], [1, "cat-name"], [1, "cat-desc"], [1, "cat-meta"], [1, "cat-count"], [1, "cat-order"], [1, "cat-actions"], ["title", "Edit", 1, "cat-btn", "edit-btn", 3, "click"], [1, "cat-btn", "toggle-btn", 3, "click", "title"], ["title", "Delete", 1, "cat-btn", "del-btn", 3, "click", "disabled"], [3, "src", "alt"], [1, "cat-placeholder"], [1, "modal-overlay", 3, "click"], [1, "modal-box", "cat-modal", 3, "click"], [1, "modal-header"], [1, "modal-close-btn", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["placeholder", "e.g. Tussar Silk", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["class", "form-hint", 4, "ngIf"], ["rows", "2", "placeholder", "Brief description for customers...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "https://images.unsplash.com/...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "img-preview", 4, "ngIf"], [1, "form-hint-inline"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "form-hint"], [1, "img-preview"], ["alt", "Preview", 3, "src"], [1, "modal-box", "confirm-modal", 3, "click"], ["class", "danger-note", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "danger-note"]], template: function AdminCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵtext(5, "V");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 5);
            i0.ɵɵtext(7, "Vastra Vaibhav");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "nav", 6)(9, "a", 7)(10, "span", 8);
            i0.ɵɵtext(11, "dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, " Dashboard ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 9)(14, "span", 8);
            i0.ɵɵtext(15, "receipt_long");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " Orders ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "a", 10)(18, "span", 8);
            i0.ɵɵtext(19, "inventory_2");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(20, " Products ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "a", 11)(22, "span", 8);
            i0.ɵɵtext(23, "category");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(24, " Categories ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "a", 12)(26, "span", 8);
            i0.ɵɵtext(27, "tune");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(28, " Homepage ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "a", 13)(30, "span", 8);
            i0.ɵɵtext(31, "group");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(32, " Customers ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "div", 14);
            i0.ɵɵelementStart(34, "a", 15)(35, "span", 8);
            i0.ɵɵtext(36, "storefront");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(37, " View Store ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "button", 16);
            i0.ɵɵlistener("click", function AdminCategoriesComponent_Template_button_click_38_listener() { return ctx.auth.logout(); });
            i0.ɵɵelementStart(39, "span", 8);
            i0.ɵɵtext(40, "logout");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, " Logout ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(42, "div", 17)(43, "div", 18)(44, "div")(45, "h1", 19);
            i0.ɵɵtext(46, "Categories");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "p", 20);
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "button", 21);
            i0.ɵɵlistener("click", function AdminCategoriesComponent_Template_button_click_49_listener() { return ctx.openAdd(); });
            i0.ɵɵelementStart(50, "span", 8);
            i0.ɵɵtext(51, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(52, " Add Category ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(53, AdminCategoriesComponent_div_53_Template, 2, 0, "div", 22)(54, AdminCategoriesComponent_div_54_Template, 2, 0, "div", 22)(55, AdminCategoriesComponent_div_55_Template, 2, 1, "div", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(56, AdminCategoriesComponent_div_56_Template, 36, 11, "div", 24)(57, AdminCategoriesComponent_div_57_Template, 21, 3, "div", 24);
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(7, _c0));
            i0.ɵɵadvance(39);
            i0.ɵɵtextInterpolate1("", ctx.categories().length, " categories - manage what customers browse");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading() && ctx.categories().length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading() && ctx.categories().length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalOpen());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.deleteTarget());
        } }, dependencies: [RouterLink, RouterLinkActive, CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.MinValidator, i2.NgModel], styles: ["//[_ngcontent-%COMP%]   Admin[_ngcontent-%COMP%]   Categories[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n.s-logo-inner[_ngcontent-%COMP%] { display:flex; align-items:center; gap:10px; }\n.s-logo-mark[_ngcontent-%COMP%] { width:32px; height:32px; background:var(--gold-warm); color:white; display:flex; align-items:center; justify-content:center; border-radius:2px; font-family:var(--font-display); font-size:1rem; }\n.s-logo-text[_ngcontent-%COMP%] { color:rgba(255,255,255,0.85); font-family:var(--font-display); font-size:1rem; }\n\n.loading-placeholder[_ngcontent-%COMP%] { padding:60px; text-align:center; color:var(--text-muted); }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Categories[_ngcontent-%COMP%]   Grid[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.cats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 20px;\n}\n\n.cat-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.25s;\n  display: flex;\n  flex-direction: column;\n\n  &:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: var(--border-warm); }\n  &.inactive { opacity: 0.6; }\n}\n\n.cat-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  background: var(--surface);\n\n  img { width: 100%; height: 100%; object-fit: cover; }\n}\n\n.cat-placeholder[_ngcontent-%COMP%] {\n  width: 100%; height: 100%;\n  display: flex; align-items: center; justify-content: center;\n  background: linear-gradient(135deg, var(--bg-2), var(--surface-2));\n  .material-icons { font-size: 40px; color: var(--text-dim); }\n}\n\n.cat-status-badge[_ngcontent-%COMP%] {\n  position: absolute; bottom: 8px; left: 8px;\n  padding: 3px 10px; border-radius: 100px;\n  font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;\n\n  &.active { background: rgba(45,122,79,0.9); color: white; }\n  &.hidden { background: rgba(107,84,71,0.7); color: white; }\n}\n\n.cat-info[_ngcontent-%COMP%] { padding: 16px; flex: 1; }\n\n.cat-name[_ngcontent-%COMP%] { font-family: var(--font-display); font-size: 1.1rem; color: var(--text); margin-bottom: 5px; font-weight: 400; }\n.cat-desc[_ngcontent-%COMP%] { font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 10px; }\n\n.cat-meta[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  font-size: 0.72rem; color: var(--text-dim);\n}\n.cat-count[_ngcontent-%COMP%] { display:flex; align-items:center; gap:4px; .material-icons { font-size:13px; } }\n.cat-order[_ngcontent-%COMP%] { font-style: italic; }\n\n.cat-actions[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1px solid var(--border);\n  background: var(--surface);\n}\n\n.cat-btn[_ngcontent-%COMP%] {\n  flex: 1; padding: 10px; background: none; border: none;\n  border-right: 1px solid var(--border); cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  color: var(--text-muted); transition: all 0.2s;\n  .material-icons { font-size: 17px; }\n  &:last-child { border-right: none; }\n  &:disabled { opacity: 0.35; cursor: not-allowed; }\n}\n.edit-btn[_ngcontent-%COMP%]:hover { background: var(--burgundy-pale); color: var(--burgundy); }\n.toggle-btn[_ngcontent-%COMP%]:hover { background: var(--gold-pale); color: var(--gold-warm); }\n.del-btn[_ngcontent-%COMP%]:hover:not(:disabled) { background: rgba(192,57,43,0.1); color: var(--error); }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Modal[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.cat-modal[_ngcontent-%COMP%] { max-width: 520px; width: 95%; }\n.confirm-modal[_ngcontent-%COMP%] { max-width: 400px; width: 95%; }\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex; justify-content: space-between; align-items: center;\n  padding: 20px 24px; border-bottom: 1px solid var(--border);\n  background: var(--surface);\n  h3 { font-family: var(--font-display); font-size: 1.3rem; color: var(--text); font-weight: 400; }\n}\n\n.modal-close-btn[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; background: none; border: 1px solid var(--border);\n  border-radius: 50%; cursor: pointer; color: var(--text-muted);\n  display: flex; align-items: center; justify-content: center; transition: all 0.2s;\n  .material-icons { font-size: 16px; }\n  &:hover { background: var(--surface-2); color: var(--text); }\n}\n\n.modal-body[_ngcontent-%COMP%] { padding: 24px; }\n\n.form-hint[_ngcontent-%COMP%] { font-size: 0.72rem; color: var(--text-dim); margin-top: 4px; }\n.form-hint-inline[_ngcontent-%COMP%] { font-size: 0.7rem; color: var(--text-dim); font-weight: 300; letter-spacing: 0; text-transform: none; }\n\n.img-preview[_ngcontent-%COMP%] {\n  margin-top: 10px; border-radius: var(--radius-sm); overflow: hidden;\n  border: 1px solid var(--border); height: 100px;\n  img { width: 100%; height: 100%; object-fit: cover; }\n}\n\n.modal-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border); }\n\n.danger-note[_ngcontent-%COMP%] { color: var(--success); font-size: 0.82rem; margin-top: 6px; }\n\n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center; gap: 6px;\n  padding: 10px 24px; background: var(--error); color: white;\n  border: none; border-radius: var(--radius-sm); cursor: pointer;\n  font-family: var(--font-body); font-size: 0.82rem; font-weight: 500; transition: all 0.2s;\n  &:hover { background: #a93226; }\n}\n\n\n\n@media (max-width: 768px) {\n  .cats-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); gap: 12px; }\n  .cat-modal[_ngcontent-%COMP%], .confirm-modal[_ngcontent-%COMP%] { max-width: 100%; margin: 0; border-radius: var(--radius-lg) var(--radius-lg) 0 0; align-self: flex-end; }\n  .modal-body[_ngcontent-%COMP%] { padding: 16px; }\n}\n\n@media (max-width: 480px) {\n  .cats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 12px; }\n  .cat-name[_ngcontent-%COMP%] { font-size: 1rem; }\n  .admin-topbar[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 12px; .btn { width: 100%; justify-content: center; } }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminCategoriesComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-categories', standalone: true, imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule], template: "<div class=\"admin-layout\">\n  <aside class=\"admin-sidebar\">\n    <div class=\"sidebar-logo\">\n      <div class=\"s-logo-inner\">\n        <div class=\"s-logo-mark\">V</div>\n        <span class=\"s-logo-text\">Vastra Vaibhav</span>\n      </div>\n    </div>\n    <nav class=\"sidebar-nav\">\n      <a routerLink=\"/admin\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-item\">\n        <span class=\"material-icons\">dashboard</span> Dashboard\n      </a>\n      <a routerLink=\"/admin/orders\" routerLinkActive=\"active\" class=\"nav-item\">\n        <span class=\"material-icons\">receipt_long</span> Orders\n      </a>\n      <a routerLink=\"/admin/products\" routerLinkActive=\"active\" class=\"nav-item\">\n        <span class=\"material-icons\">inventory_2</span> Products\n      </a>\n      <a routerLink=\"/admin/categories\" routerLinkActive=\"active\" class=\"nav-item\">\n        <span class=\"material-icons\">category</span> Categories\n      </a>\n      <a routerLink=\"/admin/homepage\" routerLinkActive=\"active\" class=\"nav-item\">\n        <span class=\"material-icons\">tune</span> Homepage\n      </a>\n      <a routerLink=\"/admin/users\" routerLinkActive=\"active\" class=\"nav-item\">\n        <span class=\"material-icons\">group</span> Customers\n      </a>\n      <div class=\"nav-divider\"></div>\n      <a routerLink=\"/\" class=\"nav-item\">\n        <span class=\"material-icons\">storefront</span> View Store\n      </a>\n      <button class=\"nav-item logout\" (click)=\"auth.logout()\">\n        <span class=\"material-icons\">logout</span> Logout\n      </button>\n    </nav>\n  </aside>\n\n  <div class=\"admin-main\">\n    <div class=\"admin-topbar\">\n      <div>\n        <h1 class=\"admin-page-title\">Categories</h1>\n        <p class=\"admin-page-sub\">{{ categories().length }} categories - manage what customers browse</p>\n      </div>\n      <button class=\"btn btn-primary\" (click)=\"openAdd()\">\n        <span class=\"material-icons\">add</span> Add Category\n      </button>\n    </div>\n\n    <div *ngIf=\"loading()\" class=\"loading-placeholder\">Loading categories...</div>\n\n    <div *ngIf=\"!loading() && categories().length === 0\" class=\"loading-placeholder\">\n      No categories found yet. Create your first category to start organizing products.\n    </div>\n\n    <div class=\"cats-grid\" *ngIf=\"!loading() && categories().length > 0\">\n      <div *ngFor=\"let c of categories()\" class=\"cat-card\" [class.inactive]=\"!c.isActive\">\n        <div class=\"cat-img-wrap\">\n          <img *ngIf=\"c.image\" [src]=\"c.image\" [alt]=\"c.name\" />\n          <div *ngIf=\"!c.image\" class=\"cat-placeholder\">\n            <span class=\"material-icons\">category</span>\n          </div>\n          <div class=\"cat-status-badge\" [class.active]=\"c.isActive\" [class.hidden]=\"!c.isActive\">\n            {{ c.isActive ? 'Visible' : 'Hidden' }}\n          </div>\n        </div>\n\n        <div class=\"cat-info\">\n          <h3 class=\"cat-name\">{{ c.name }}</h3>\n          <p class=\"cat-desc\">{{ c.description || 'No description provided yet.' }}</p>\n          <div class=\"cat-meta\">\n            <span class=\"cat-count\">\n              <span class=\"material-icons\">inventory_2</span>\n              {{ c.productCount || 0 }} products\n            </span>\n            <span class=\"cat-order\">Order: {{ c.sortOrder }}</span>\n          </div>\n        </div>\n\n        <div class=\"cat-actions\">\n          <button class=\"cat-btn edit-btn\" (click)=\"openEdit(c)\" title=\"Edit\">\n            <span class=\"material-icons\">edit</span>\n          </button>\n          <button\n            class=\"cat-btn toggle-btn\"\n            (click)=\"toggle(c)\"\n            [title]=\"c.isActive ? 'Hide from store' : 'Show in store'\"\n          >\n            <span class=\"material-icons\">{{ c.isActive ? 'visibility_off' : 'visibility' }}</span>\n          </button>\n          <button class=\"cat-btn del-btn\" (click)=\"confirmDelete(c)\" title=\"Delete\" [disabled]=\"c.productCount > 0\">\n            <span class=\"material-icons\">delete_outline</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal-overlay\" *ngIf=\"modalOpen()\" (click)=\"closeModal()\">\n  <div class=\"modal-box cat-modal\" (click)=\"$event.stopPropagation()\">\n    <div class=\"modal-header\">\n      <h3>{{ editing() ? 'Edit Category' : 'Add Category' }}</h3>\n      <button class=\"modal-close-btn\" (click)=\"closeModal()\">\n        <span class=\"material-icons\">close</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label class=\"form-label\">Category Name *</label>\n        <input\n          class=\"form-control\"\n          [(ngModel)]=\"form.name\"\n          placeholder=\"e.g. Tussar Silk\"\n          [disabled]=\"!!editing()\"\n        />\n        <p class=\"form-hint\" *ngIf=\"editing()\">\n          Category name cannot be changed because it is already linked to existing products.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"form-label\">Description</label>\n        <textarea\n          class=\"form-control\"\n          [(ngModel)]=\"form.description\"\n          rows=\"2\"\n          placeholder=\"Brief description for customers...\"\n        ></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"form-label\">Image URL</label>\n        <input class=\"form-control\" [(ngModel)]=\"form.image\" placeholder=\"https://images.unsplash.com/...\" />\n        <div class=\"img-preview\" *ngIf=\"form.image\">\n          <img [src]=\"form.image\" alt=\"Preview\" />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"form-label\">Sort Order <span class=\"form-hint-inline\">(lower = appears first)</span></label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.sortOrder\" min=\"0\" />\n      </div>\n      <div class=\"modal-actions\">\n        <button class=\"btn btn-ghost\" (click)=\"closeModal()\">Cancel</button>\n        <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"saving()\">\n          <span class=\"material-icons\">{{ saving() ? 'hourglass_top' : 'save' }}</span>\n          {{ saving() ? 'Saving...' : editing() ? 'Save Changes' : 'Create Category' }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal-overlay\" *ngIf=\"deleteTarget()\" (click)=\"closeDeleteModal()\">\n  <div class=\"modal-box confirm-modal\" (click)=\"$event.stopPropagation()\">\n    <div class=\"modal-header\">\n      <h3>Delete Category</h3>\n      <button class=\"modal-close-btn\" (click)=\"closeDeleteModal()\">\n        <span class=\"material-icons\">close</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Are you sure you want to delete <strong>{{ deleteTarget()?.name }}</strong>?</p>\n      <p class=\"danger-note\" *ngIf=\"deleteTarget()?.productCount === 0\">\n        This category has no products and can be safely deleted.\n      </p>\n      <p class=\"danger-note\" *ngIf=\"(deleteTarget()?.productCount || 0) > 0\">\n        Categories with products cannot be deleted until those products are moved or removed.\n      </p>\n      <div class=\"modal-actions\">\n        <button class=\"btn btn-ghost\" (click)=\"closeDeleteModal()\">Cancel</button>\n        <button class=\"btn btn-danger\" (click)=\"doDelete()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["// Admin Categories Component Styles\n\n.s-logo-inner { display:flex; align-items:center; gap:10px; }\n.s-logo-mark { width:32px; height:32px; background:var(--gold-warm); color:white; display:flex; align-items:center; justify-content:center; border-radius:2px; font-family:var(--font-display); font-size:1rem; }\n.s-logo-text { color:rgba(255,255,255,0.85); font-family:var(--font-display); font-size:1rem; }\n\n.loading-placeholder { padding:60px; text-align:center; color:var(--text-muted); }\n\n// \u2500\u2500 Categories Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.cats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 20px;\n}\n\n.cat-card {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.25s;\n  display: flex;\n  flex-direction: column;\n\n  &:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: var(--border-warm); }\n  &.inactive { opacity: 0.6; }\n}\n\n.cat-img-wrap {\n  position: relative;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  background: var(--surface);\n\n  img { width: 100%; height: 100%; object-fit: cover; }\n}\n\n.cat-placeholder {\n  width: 100%; height: 100%;\n  display: flex; align-items: center; justify-content: center;\n  background: linear-gradient(135deg, var(--bg-2), var(--surface-2));\n  .material-icons { font-size: 40px; color: var(--text-dim); }\n}\n\n.cat-status-badge {\n  position: absolute; bottom: 8px; left: 8px;\n  padding: 3px 10px; border-radius: 100px;\n  font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;\n\n  &.active { background: rgba(45,122,79,0.9); color: white; }\n  &.hidden { background: rgba(107,84,71,0.7); color: white; }\n}\n\n.cat-info { padding: 16px; flex: 1; }\n\n.cat-name { font-family: var(--font-display); font-size: 1.1rem; color: var(--text); margin-bottom: 5px; font-weight: 400; }\n.cat-desc { font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 10px; }\n\n.cat-meta {\n  display: flex; align-items: center; justify-content: space-between;\n  font-size: 0.72rem; color: var(--text-dim);\n}\n.cat-count { display:flex; align-items:center; gap:4px; .material-icons { font-size:13px; } }\n.cat-order { font-style: italic; }\n\n.cat-actions {\n  display: flex;\n  border-top: 1px solid var(--border);\n  background: var(--surface);\n}\n\n.cat-btn {\n  flex: 1; padding: 10px; background: none; border: none;\n  border-right: 1px solid var(--border); cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  color: var(--text-muted); transition: all 0.2s;\n  .material-icons { font-size: 17px; }\n  &:last-child { border-right: none; }\n  &:disabled { opacity: 0.35; cursor: not-allowed; }\n}\n.edit-btn:hover { background: var(--burgundy-pale); color: var(--burgundy); }\n.toggle-btn:hover { background: var(--gold-pale); color: var(--gold-warm); }\n.del-btn:hover:not(:disabled) { background: rgba(192,57,43,0.1); color: var(--error); }\n\n// \u2500\u2500 Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.cat-modal { max-width: 520px; width: 95%; }\n.confirm-modal { max-width: 400px; width: 95%; }\n\n.modal-header {\n  display: flex; justify-content: space-between; align-items: center;\n  padding: 20px 24px; border-bottom: 1px solid var(--border);\n  background: var(--surface);\n  h3 { font-family: var(--font-display); font-size: 1.3rem; color: var(--text); font-weight: 400; }\n}\n\n.modal-close-btn {\n  width: 32px; height: 32px; background: none; border: 1px solid var(--border);\n  border-radius: 50%; cursor: pointer; color: var(--text-muted);\n  display: flex; align-items: center; justify-content: center; transition: all 0.2s;\n  .material-icons { font-size: 16px; }\n  &:hover { background: var(--surface-2); color: var(--text); }\n}\n\n.modal-body { padding: 24px; }\n\n.form-hint { font-size: 0.72rem; color: var(--text-dim); margin-top: 4px; }\n.form-hint-inline { font-size: 0.7rem; color: var(--text-dim); font-weight: 300; letter-spacing: 0; text-transform: none; }\n\n.img-preview {\n  margin-top: 10px; border-radius: var(--radius-sm); overflow: hidden;\n  border: 1px solid var(--border); height: 100px;\n  img { width: 100%; height: 100%; object-fit: cover; }\n}\n\n.modal-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border); }\n\n.danger-note { color: var(--success); font-size: 0.82rem; margin-top: 6px; }\n\n.btn-danger {\n  display: inline-flex; align-items: center; gap: 6px;\n  padding: 10px 24px; background: var(--error); color: white;\n  border: none; border-radius: var(--radius-sm); cursor: pointer;\n  font-family: var(--font-body); font-size: 0.82rem; font-weight: 500; transition: all 0.2s;\n  &:hover { background: #a93226; }\n}\n\n/* \u2500\u2500 Mobile Responsive \u2500\u2500 */\n@media (max-width: 768px) {\n  .cats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }\n  .cat-modal, .confirm-modal { max-width: 100%; margin: 0; border-radius: var(--radius-lg) var(--radius-lg) 0 0; align-self: flex-end; }\n  .modal-body { padding: 16px; }\n}\n\n@media (max-width: 480px) {\n  .cats-grid { grid-template-columns: 1fr; gap: 12px; }\n  .cat-name { font-size: 1rem; }\n  .admin-topbar { flex-direction: column; align-items: flex-start; gap: 12px; .btn { width: 100%; justify-content: center; } }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminCategoriesComponent, { className: "AdminCategoriesComponent", filePath: "src\\app\\components\\admin\\categories\\admin-categories.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=admin-categories.component.js.map