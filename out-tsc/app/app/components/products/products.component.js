import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = () => [1, 2, 3, 4, 5, 6];
function ProductsComponent_label_21_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 40)(1, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function ProductsComponent_label_21_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedCat, $event) || (ctx_r1.selectedCat = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ProductsComponent_label_21_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.applyFilters()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", cat_r3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedCat);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cat_r3);
} }
function ProductsComponent_label_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 40)(1, "input", 42);
    i0.ɵɵtwoWayListener("ngModelChange", function ProductsComponent_label_34_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedOcc, $event) || (ctx_r1.selectedOcc = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ProductsComponent_label_34_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.applyFilters()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const occ_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", occ_r5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedOcc);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(occ_r5);
} }
function ProductsComponent_div_35_label_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 40)(1, "input", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function ProductsComponent_div_35_label_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedColor, $event) || (ctx_r1.selectedColor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ProductsComponent_div_35_label_4_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilters()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const color_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", color_r7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedColor);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(color_r7);
} }
function ProductsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "h4");
    i0.ɵɵtext(2, "Colour");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 43);
    i0.ɵɵtemplate(4, ProductsComponent_div_35_label_4_Template, 4, 3, "label", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.colors);
} }
function ProductsComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 46);
    i0.ɵɵlistener("click", function ProductsComponent_span_57_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedCat = "All"; return i0.ɵɵresetView(ctx_r1.applyFilters()); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selectedCat, " ");
} }
function ProductsComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 46);
    i0.ɵɵlistener("click", function ProductsComponent_span_58_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedOcc = "All"; return i0.ɵɵresetView(ctx_r1.applyFilters()); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selectedOcc, " ");
} }
function ProductsComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 46);
    i0.ɵɵlistener("click", function ProductsComponent_span_59_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.selectedColor = "All"; return i0.ɵɵresetView(ctx_r1.applyFilters()); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selectedColor, " ");
} }
function ProductsComponent_span_60_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 46);
    i0.ɵɵlistener("click", function ProductsComponent_span_60_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.searchQ = ""; return i0.ɵɵresetView(ctx_r1.applyFilters()); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \"", ctx_r1.searchQ, "\" ");
} }
function ProductsComponent_span_61_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1, " In Stock ");
    i0.ɵɵelementStart(2, "button", 46);
    i0.ɵɵlistener("click", function ProductsComponent_span_61_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.inStockOnly = false; return i0.ɵɵresetView(ctx_r1.applyFilters()); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} }
function ProductsComponent_div_74_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵelement(1, "div", 50);
    i0.ɵɵelementStart(2, "div", 51);
    i0.ɵɵelement(3, "div", 52)(4, "div", 53)(5, "div", 54);
    i0.ɵɵelementEnd()();
} }
function ProductsComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, ProductsComponent_div_74_div_1_Template, 6, 0, "div", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(1, _c0));
} }
function ProductsComponent_div_75_app_product_card_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-product-card", 56);
} if (rf & 2) {
    const p_r13 = ctx.$implicit;
    i0.ɵɵproperty("product", p_r13);
} }
function ProductsComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, ProductsComponent_div_75_app_product_card_1_Template, 1, 1, "app-product-card", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.products());
} }
function ProductsComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "span", 58);
    i0.ɵɵtext(2, "search_off");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "No sarees found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 59);
    i0.ɵɵlistener("click", function ProductsComponent_div_76_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearFilters()); });
    i0.ɵɵtext(8, "Clear Filters");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Try adjusting your filters or search terms. Catalog metadata is ", ctx_r1.metaLoaded() ? "ready" : "loading", ".");
} }
function ProductsComponent_div_77_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function ProductsComponent_div_77_button_3_Template_button_click_0_listener() { const p_r17 = i0.ɵɵrestoreView(_r16).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.goPage(p_r17)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r17 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", p_r17 === ctx_r1.currentPage());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r17);
} }
function ProductsComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60)(1, "button", 61);
    i0.ɵɵlistener("click", function ProductsComponent_div_77_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goPage(ctx_r1.currentPage() - 1)); });
    i0.ɵɵtext(2, "\u2039");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProductsComponent_div_77_button_3_Template, 2, 3, "button", 62);
    i0.ɵɵelementStart(4, "button", 61);
    i0.ɵɵlistener("click", function ProductsComponent_div_77_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goPage(ctx_r1.currentPage() + 1)); });
    i0.ɵɵtext(5, "\u203A");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.currentPage() === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.pageNumbers());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.currentPage() === ((tmp_3_0 = ctx_r1.pagination()) == null ? null : tmp_3_0.pages));
} }
function ProductsComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 64);
    i0.ɵɵlistener("click", function ProductsComponent_div_78_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.filtersOpen.set(false)); });
    i0.ɵɵelementEnd();
} }
export class ProductsComponent {
    constructor() {
        this.ps = inject(ProductService);
        this.route = inject(ActivatedRoute);
        this.router = inject(Router);
        this.products = signal([]);
        this.pagination = signal(null);
        this.loading = signal(true);
        this.filtersOpen = signal(false);
        this.currentPage = signal(1);
        this.metaLoaded = signal(false);
        this.selectedCat = 'All';
        this.selectedOcc = 'All';
        this.selectedColor = 'All';
        this.sortBy = '';
        this.minPrice = null;
        this.maxPrice = null;
        this.searchQ = '';
        this.currentFilter = '';
        this.pageTitle = 'All Sarees';
        this.inStockOnly = false;
        this.categories = ['All'];
        this.occasions = ['All'];
        this.colors = ['All'];
        this.priceBounds = signal({ min: 0, max: 50000 });
        this.destroy$ = new Subject();
        this.searchInput$ = new Subject();
    }
    pageNumbers() {
        const total = this.pagination()?.pages ?? 0;
        return Array.from({ length: total }, (_, i) => i + 1);
    }
    ngOnInit() {
        this.ps.getMeta().subscribe({
            next: (response) => {
                this.categories = ['All', ...response.meta.categories.map((item) => item._id)];
                this.occasions = ['All', ...response.meta.occasions.map((item) => item._id)];
                this.colors = ['All', ...response.meta.colors.map((item) => item._id)];
                this.priceBounds.set(response.meta.priceRange);
                this.metaLoaded.set(true);
            },
            error: () => this.metaLoaded.set(true),
        });
        this.searchInput$
            .pipe(debounceTime(250), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe(() => {
            this.currentPage.set(1);
            this.syncQueryParams();
            this.loadProducts();
        });
        this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
            this.selectedCat = params['category'] || 'All';
            this.selectedOcc = params['occasion'] || 'All';
            this.selectedColor = params['color'] || 'All';
            this.searchQ = params['q'] || '';
            this.currentFilter = params['filter'] || '';
            this.sortBy = params['sort'] || '';
            this.minPrice = params['minPrice'] ? Number(params['minPrice']) : null;
            this.maxPrice = params['maxPrice'] ? Number(params['maxPrice']) : null;
            this.inStockOnly = params['inStock'] === 'true';
            this.currentPage.set(params['page'] ? Number(params['page']) : 1);
            this.updateTitle();
            this.loadProducts();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateTitle() {
        if (this.searchQ)
            this.pageTitle = `Results for "${this.searchQ}"`;
        else if (this.currentFilter === 'new')
            this.pageTitle = 'New Arrivals';
        else if (this.currentFilter === 'bestseller')
            this.pageTitle = 'Bestsellers';
        else if (this.currentFilter === 'featured')
            this.pageTitle = 'Featured Sarees';
        else if (this.selectedCat !== 'All')
            this.pageTitle = `${this.selectedCat} Sarees`;
        else if (this.selectedOcc !== 'All')
            this.pageTitle = `${this.selectedOcc} Sarees`;
        else if (this.selectedColor !== 'All')
            this.pageTitle = `${this.selectedColor} Sarees`;
        else
            this.pageTitle = 'All Sarees';
    }
    loadProducts() {
        this.loading.set(true);
        const params = {
            page: this.currentPage(),
            limit: 9,
        };
        if (this.searchQ)
            params['q'] = this.searchQ;
        if (this.selectedCat !== 'All')
            params['category'] = this.selectedCat;
        if (this.selectedOcc !== 'All')
            params['occasion'] = this.selectedOcc;
        if (this.selectedColor !== 'All')
            params['color'] = this.selectedColor;
        if (this.sortBy)
            params['sort'] = this.sortBy;
        if (this.minPrice)
            params['minPrice'] = this.minPrice;
        if (this.maxPrice)
            params['maxPrice'] = this.maxPrice;
        if (this.inStockOnly)
            params['inStock'] = true;
        if (this.currentFilter === 'new')
            params['newArrival'] = true;
        if (this.currentFilter === 'bestseller')
            params['bestseller'] = true;
        if (this.currentFilter === 'featured')
            params['featured'] = true;
        this.ps.getProducts(params).subscribe({
            next: (response) => {
                this.products.set(response.products);
                this.pagination.set(response.pagination);
                this.loading.set(false);
            },
            error: () => this.loading.set(false),
        });
    }
    onSearchChange(value) {
        this.searchQ = value;
        this.searchInput$.next(value);
    }
    applyFilters() {
        this.currentPage.set(1);
        this.updateTitle();
        this.syncQueryParams();
        this.loadProducts();
    }
    clearFilters() {
        this.selectedCat = 'All';
        this.selectedOcc = 'All';
        this.selectedColor = 'All';
        this.sortBy = '';
        this.minPrice = null;
        this.maxPrice = null;
        this.searchQ = '';
        this.currentFilter = '';
        this.inStockOnly = false;
        this.applyFilters();
    }
    goPage(page) {
        if (page < 1 || page > (this.pagination()?.pages ?? 1))
            return;
        this.currentPage.set(page);
        this.syncQueryParams();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.loadProducts();
    }
    syncQueryParams() {
        const queryParams = {};
        if (this.selectedCat !== 'All')
            queryParams['category'] = this.selectedCat;
        if (this.selectedOcc !== 'All')
            queryParams['occasion'] = this.selectedOcc;
        if (this.selectedColor !== 'All')
            queryParams['color'] = this.selectedColor;
        if (this.searchQ)
            queryParams['q'] = this.searchQ;
        if (this.currentFilter)
            queryParams['filter'] = this.currentFilter;
        if (this.sortBy)
            queryParams['sort'] = this.sortBy;
        if (this.minPrice)
            queryParams['minPrice'] = this.minPrice;
        if (this.maxPrice)
            queryParams['maxPrice'] = this.maxPrice;
        if (this.inStockOnly)
            queryParams['inStock'] = true;
        if (this.currentPage() > 1)
            queryParams['page'] = this.currentPage();
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams,
            replaceUrl: true,
        });
    }
    static { this.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsComponent, selectors: [["app-products"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 79, vars: 25, consts: [[1, "page-header"], [1, "container"], [1, "section-subtitle"], [1, "section-title"], [1, "section-divider"], [1, "header-desc"], [1, "container", "products-layout"], [1, "filters-sidebar"], [1, "filters-head"], [1, "mobile-close-btn", 3, "click"], [1, "material-icons"], [1, "filter-section"], [1, "filter-opts"], ["class", "filter-opt", 4, "ngFor", "ngForOf"], [1, "price-range"], ["type", "number", 1, "form-control", 3, "ngModelChange", "change", "placeholder", "ngModel"], ["class", "filter-section", 4, "ngIf"], [1, "stock-toggle"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "btn", "btn-ghost", "btn-sm", "clear-btn", 3, "click"], [1, "material-icons", 2, "font-size", "14px"], [1, "products-main"], [1, "products-toolbar"], [1, "toolbar-left"], [1, "btn", "btn-ghost", "btn-sm", "filter-toggle", 3, "click"], [1, "toolbar-search"], ["placeholder", "Search by saree, weave, or style", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "active-tags"], ["class", "filter-tag", 4, "ngIf"], [1, "sort-ctrl"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "price-asc"], ["value", "price-desc"], ["value", "rating"], ["value", "newest"], ["class", "grid grid-3 products-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["class", "filter-overlay", 3, "click", 4, "ngIf"], [1, "filter-opt"], ["type", "radio", "name", "cat", 3, "ngModelChange", "change", "value", "ngModel"], ["type", "radio", "name", "occ", 3, "ngModelChange", "change", "value", "ngModel"], [1, "filter-opts", "colors-grid"], ["type", "radio", "name", "color", 3, "ngModelChange", "change", "value", "ngModel"], [1, "filter-tag"], [3, "click"], [1, "grid", "grid-3", "products-grid"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "skel-img"], [1, "skel-body"], [1, "skel-line", "sm"], [1, "skel-line"], [1, "skel-line", "md"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"], [1, "empty-state"], [1, "material-icons", "empty-icon"], [1, "btn", "btn-outline", 3, "click"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-btn", 3, "click"], [1, "filter-overlay", 3, "click"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 4);
            i0.ɵɵelementStart(7, "p", 5);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "div", 6)(10, "aside", 7)(11, "div", 8)(12, "h3");
            i0.ɵɵtext(13, "Refine");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 9);
            i0.ɵɵlistener("click", function ProductsComponent_Template_button_click_14_listener() { return ctx.filtersOpen.set(false); });
            i0.ɵɵelementStart(15, "span", 10);
            i0.ɵɵtext(16, "close");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(17, "div", 11)(18, "h4");
            i0.ɵɵtext(19, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 12);
            i0.ɵɵtemplate(21, ProductsComponent_label_21_Template, 4, 3, "label", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 11)(23, "h4");
            i0.ɵɵtext(24, "Price Range");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 14)(26, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_26_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.minPrice, $event) || (ctx.minPrice = $event); return $event; });
            i0.ɵɵlistener("change", function ProductsComponent_Template_input_change_26_listener() { return ctx.applyFilters(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "span");
            i0.ɵɵtext(28, "to");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_29_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.maxPrice, $event) || (ctx.maxPrice = $event); return $event; });
            i0.ɵɵlistener("change", function ProductsComponent_Template_input_change_29_listener() { return ctx.applyFilters(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "div", 11)(31, "h4");
            i0.ɵɵtext(32, "Occasion");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 12);
            i0.ɵɵtemplate(34, ProductsComponent_label_34_Template, 4, 3, "label", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(35, ProductsComponent_div_35_Template, 5, 1, "div", 16);
            i0.ɵɵelementStart(36, "div", 11)(37, "label", 17)(38, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_38_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.inStockOnly, $event) || (ctx.inStockOnly = $event); return $event; });
            i0.ɵɵlistener("change", function ProductsComponent_Template_input_change_38_listener() { return ctx.applyFilters(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "span");
            i0.ɵɵtext(40, "Show only in-stock sarees");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "button", 19);
            i0.ɵɵlistener("click", function ProductsComponent_Template_button_click_41_listener() { return ctx.clearFilters(); });
            i0.ɵɵelementStart(42, "span", 20);
            i0.ɵɵtext(43, "refresh");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(44, " Clear All ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 21)(46, "div", 22)(47, "div", 23)(48, "button", 24);
            i0.ɵɵlistener("click", function ProductsComponent_Template_button_click_48_listener() { return ctx.filtersOpen.set(true); });
            i0.ɵɵelementStart(49, "span", 10);
            i0.ɵɵtext(50, "tune");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(51, " Filters ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 25)(53, "span", 10);
            i0.ɵɵtext(54, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "input", 26);
            i0.ɵɵlistener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_55_listener($event) { return ctx.onSearchChange($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(56, "div", 27);
            i0.ɵɵtemplate(57, ProductsComponent_span_57_Template, 4, 1, "span", 28)(58, ProductsComponent_span_58_Template, 4, 1, "span", 28)(59, ProductsComponent_span_59_Template, 4, 1, "span", 28)(60, ProductsComponent_span_60_Template, 4, 1, "span", 28)(61, ProductsComponent_span_61_Template, 4, 0, "span", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "div", 29)(63, "select", 30);
            i0.ɵɵtwoWayListener("ngModelChange", function ProductsComponent_Template_select_ngModelChange_63_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event); return $event; });
            i0.ɵɵlistener("change", function ProductsComponent_Template_select_change_63_listener() { return ctx.applyFilters(); });
            i0.ɵɵelementStart(64, "option", 31);
            i0.ɵɵtext(65, "Featured");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "option", 32);
            i0.ɵɵtext(67, "Price: Low to High");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "option", 33);
            i0.ɵɵtext(69, "Price: High to Low");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "option", 34);
            i0.ɵɵtext(71, "Top Rated");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "option", 35);
            i0.ɵɵtext(73, "Newest First");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(74, ProductsComponent_div_74_Template, 2, 2, "div", 36)(75, ProductsComponent_div_75_Template, 2, 1, "div", 36)(76, ProductsComponent_div_76_Template, 9, 1, "div", 37)(77, ProductsComponent_div_77_Template, 6, 3, "div", 38);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(78, ProductsComponent_div_78_Template, 1, 0, "div", 39);
        } if (rf & 2) {
            let tmp_2_0;
            let tmp_22_0;
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.currentFilter || "Curated Catalogue");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.pageTitle);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", (tmp_2_0 = (tmp_2_0 = ctx.pagination()) == null ? null : tmp_2_0.total) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0, " sarees found");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("open", ctx.filtersOpen());
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("placeholder", "Min \u20B9" + ctx.priceBounds().min);
            i0.ɵɵtwoWayProperty("ngModel", ctx.minPrice);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("placeholder", "Max \u20B9" + ctx.priceBounds().max);
            i0.ɵɵtwoWayProperty("ngModel", ctx.maxPrice);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.occasions);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.colors.length > 1);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.inStockOnly);
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("ngModel", ctx.searchQ);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.selectedCat !== "All");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedOcc !== "All");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedColor !== "All");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.searchQ);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.inStockOnly);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.sortBy);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngIf", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading() && ctx.products().length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading() && ctx.products().length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ((tmp_22_0 = (tmp_22_0 = ctx.pagination()) == null ? null : tmp_22_0.pages) !== null && tmp_22_0 !== undefined ? tmp_22_0 : 0) > 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.filtersOpen());
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgModel, ProductCardComponent], styles: [".products-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 36px;\n  padding-top: 36px;\n  padding-bottom: 80px;\n  align-items: start;\n}\n\n.filters-sidebar[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  position: sticky;\n  top: 100px;\n}\n\n.filters-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.1rem;\n    color: var(--text);\n    font-weight: 400;\n  }\n}\n\n.mobile-close-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n\n.filter-section[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n\n  h4 {\n    font-size: 0.62rem;\n    letter-spacing: 0.2em;\n    text-transform: uppercase;\n    color: var(--gold-warm);\n    font-weight: 600;\n    margin-bottom: 12px;\n  }\n}\n\n.filter-opts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.colors-grid[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow: auto;\n}\n\n.filter-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-size: 0.84rem;\n  color: var(--text-muted);\n  padding: 3px 0;\n\n  input[type=\"radio\"] {\n    accent-color: var(--burgundy);\n  }\n\n  &:hover span {\n    color: var(--burgundy);\n  }\n}\n\n.stock-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  color: var(--text);\n  font-size: 0.88rem;\n}\n\n.price-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  span {\n    color: var(--text-dim);\n    font-size: 0.78rem;\n    flex-shrink: 0;\n  }\n}\n\n.clear-btn[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n  margin: 8px 20px 20px;\n  justify-content: center;\n}\n\n.products-toolbar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr auto;\n  gap: 14px;\n  margin-bottom: 28px;\n  align-items: start;\n}\n\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.toolbar-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n\n  .material-icons {\n    position: absolute;\n    left: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: var(--text-dim);\n    font-size: 18px;\n  }\n\n  .form-control {\n    padding-left: 40px;\n  }\n}\n\n.filter-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.active-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  grid-column: 1 / 2;\n}\n\n.filter-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 12px;\n  background: var(--burgundy-pale);\n  border: 1px solid rgba(123, 30, 58, 0.2);\n  border-radius: 100px;\n  font-size: 0.72rem;\n  color: var(--burgundy);\n  font-weight: 500;\n\n  button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    color: var(--burgundy);\n    font-size: 1rem;\n    line-height: 1;\n    padding: 0;\n  }\n}\n\n.sort-ctrl[_ngcontent-%COMP%] {\n  justify-self: end;\n\n  select {\n    min-width: 190px;\n  }\n}\n\n.skeleton-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n\n.skel-img[_ngcontent-%COMP%], .skel-line[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--surface) 25%, var(--bg-2) 50%, var(--surface) 75%);\n  background-size: 400px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n\n.skel-img[_ngcontent-%COMP%] {\n  height: 280px;\n}\n\n.skel-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.skel-line[_ngcontent-%COMP%] {\n  height: 12px;\n  border-radius: 6px;\n\n  &.sm { width: 35%; height: 9px; }\n  &.md { width: 55%; height: 9px; }\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% { background-position: -400px 0; }\n  100% { background-position: 400px 0; }\n}\n\n.products-grid[_ngcontent-%COMP%] {\n  align-items: start;\n}\n\n.filter-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(44, 24, 16, 0.55);\n  backdrop-filter: blur(2px);\n  z-index: 199;\n}\n\n@media (max-width: 1024px) {\n  .products-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .filters-sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: -100%;\n    bottom: 0;\n    z-index: 200;\n    width: 300px;\n    border-radius: 0;\n    overflow-y: auto;\n    transition: left 0.35s ease;\n\n    &.open { left: 0; box-shadow: var(--shadow-lg); }\n  }\n\n  .mobile-close-btn[_ngcontent-%COMP%], .filter-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n@media (max-width: 768px) {\n  .products-layout[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 56px;\n  }\n\n  .products-toolbar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .toolbar-left[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .sort-ctrl[_ngcontent-%COMP%] {\n    justify-self: stretch;\n\n    select {\n      width: 100%;\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsComponent, [{
        type: Component,
        args: [{ selector: 'app-products', standalone: true, imports: [CommonModule, FormsModule, ProductCardComponent], template: "<div class=\"page-header\">\n  <div class=\"container\">\n    <div class=\"section-subtitle\">{{ currentFilter || 'Curated Catalogue' }}</div>\n    <h1 class=\"section-title\">{{ pageTitle }}</h1>\n    <div class=\"section-divider\"></div>\n    <p class=\"header-desc\">{{ pagination()?.total ?? 0 }} sarees found</p>\n  </div>\n</div>\n\n<div class=\"container products-layout\">\n  <aside class=\"filters-sidebar\" [class.open]=\"filtersOpen()\">\n    <div class=\"filters-head\">\n      <h3>Refine</h3>\n      <button class=\"mobile-close-btn\" (click)=\"filtersOpen.set(false)\">\n        <span class=\"material-icons\">close</span>\n      </button>\n    </div>\n\n    <div class=\"filter-section\">\n      <h4>Category</h4>\n      <div class=\"filter-opts\">\n        <label class=\"filter-opt\" *ngFor=\"let cat of categories\">\n          <input type=\"radio\" name=\"cat\" [value]=\"cat\" [(ngModel)]=\"selectedCat\" (change)=\"applyFilters()\">\n          <span>{{ cat }}</span>\n        </label>\n      </div>\n    </div>\n\n    <div class=\"filter-section\">\n      <h4>Price Range</h4>\n      <div class=\"price-range\">\n        <input type=\"number\" class=\"form-control\" [placeholder]=\"'Min \u20B9' + priceBounds().min\" [(ngModel)]=\"minPrice\" (change)=\"applyFilters()\">\n        <span>to</span>\n        <input type=\"number\" class=\"form-control\" [placeholder]=\"'Max \u20B9' + priceBounds().max\" [(ngModel)]=\"maxPrice\" (change)=\"applyFilters()\">\n      </div>\n    </div>\n\n    <div class=\"filter-section\">\n      <h4>Occasion</h4>\n      <div class=\"filter-opts\">\n        <label class=\"filter-opt\" *ngFor=\"let occ of occasions\">\n          <input type=\"radio\" name=\"occ\" [value]=\"occ\" [(ngModel)]=\"selectedOcc\" (change)=\"applyFilters()\">\n          <span>{{ occ }}</span>\n        </label>\n      </div>\n    </div>\n\n    <div class=\"filter-section\" *ngIf=\"colors.length > 1\">\n      <h4>Colour</h4>\n      <div class=\"filter-opts colors-grid\">\n        <label class=\"filter-opt\" *ngFor=\"let color of colors\">\n          <input type=\"radio\" name=\"color\" [value]=\"color\" [(ngModel)]=\"selectedColor\" (change)=\"applyFilters()\">\n          <span>{{ color }}</span>\n        </label>\n      </div>\n    </div>\n\n    <div class=\"filter-section\">\n      <label class=\"stock-toggle\">\n        <input type=\"checkbox\" [(ngModel)]=\"inStockOnly\" (change)=\"applyFilters()\">\n        <span>Show only in-stock sarees</span>\n      </label>\n    </div>\n\n    <button class=\"btn btn-ghost btn-sm clear-btn\" (click)=\"clearFilters()\">\n      <span class=\"material-icons\" style=\"font-size:14px\">refresh</span> Clear All\n    </button>\n  </aside>\n\n  <div class=\"products-main\">\n    <div class=\"products-toolbar\">\n      <div class=\"toolbar-left\">\n        <button class=\"btn btn-ghost btn-sm filter-toggle\" (click)=\"filtersOpen.set(true)\">\n          <span class=\"material-icons\">tune</span> Filters\n        </button>\n        <div class=\"toolbar-search\">\n          <span class=\"material-icons\">search</span>\n          <input class=\"form-control\" [ngModel]=\"searchQ\" (ngModelChange)=\"onSearchChange($event)\" placeholder=\"Search by saree, weave, or style\">\n        </div>\n      </div>\n\n      <div class=\"active-tags\">\n        <span *ngIf=\"selectedCat !== 'All'\" class=\"filter-tag\">\n          {{ selectedCat }} <button (click)=\"selectedCat='All';applyFilters()\">\u00D7</button>\n        </span>\n        <span *ngIf=\"selectedOcc !== 'All'\" class=\"filter-tag\">\n          {{ selectedOcc }} <button (click)=\"selectedOcc='All';applyFilters()\">\u00D7</button>\n        </span>\n        <span *ngIf=\"selectedColor !== 'All'\" class=\"filter-tag\">\n          {{ selectedColor }} <button (click)=\"selectedColor='All';applyFilters()\">\u00D7</button>\n        </span>\n        <span *ngIf=\"searchQ\" class=\"filter-tag\">\n          \"{{ searchQ }}\" <button (click)=\"searchQ='';applyFilters()\">\u00D7</button>\n        </span>\n        <span *ngIf=\"inStockOnly\" class=\"filter-tag\">\n          In Stock <button (click)=\"inStockOnly=false;applyFilters()\">\u00D7</button>\n        </span>\n      </div>\n\n      <div class=\"sort-ctrl\">\n        <select class=\"form-control\" [(ngModel)]=\"sortBy\" (change)=\"applyFilters()\">\n          <option value=\"\">Featured</option>\n          <option value=\"price-asc\">Price: Low to High</option>\n          <option value=\"price-desc\">Price: High to Low</option>\n          <option value=\"rating\">Top Rated</option>\n          <option value=\"newest\">Newest First</option>\n        </select>\n      </div>\n    </div>\n\n    <div *ngIf=\"loading()\" class=\"grid grid-3 products-grid\">\n      <div *ngFor=\"let s of [1,2,3,4,5,6]\" class=\"skeleton-card\">\n        <div class=\"skel-img\"></div>\n        <div class=\"skel-body\">\n          <div class=\"skel-line sm\"></div>\n          <div class=\"skel-line\"></div>\n          <div class=\"skel-line md\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!loading() && products().length > 0\" class=\"grid grid-3 products-grid\">\n      <app-product-card *ngFor=\"let p of products()\" [product]=\"p\"></app-product-card>\n    </div>\n\n    <div *ngIf=\"!loading() && products().length === 0\" class=\"empty-state\">\n      <span class=\"material-icons empty-icon\">search_off</span>\n      <h3>No sarees found</h3>\n      <p>Try adjusting your filters or search terms. Catalog metadata is {{ metaLoaded() ? 'ready' : 'loading' }}.</p>\n      <button class=\"btn btn-outline\" (click)=\"clearFilters()\">Clear Filters</button>\n    </div>\n\n    <div class=\"pagination\" *ngIf=\"(pagination()?.pages ?? 0) > 1\">\n      <button class=\"page-btn\" (click)=\"goPage(currentPage() - 1)\" [disabled]=\"currentPage() === 1\">\u2039</button>\n      <button *ngFor=\"let p of pageNumbers()\" class=\"page-btn\" [class.active]=\"p === currentPage()\" (click)=\"goPage(p)\">{{ p }}</button>\n      <button class=\"page-btn\" (click)=\"goPage(currentPage() + 1)\" [disabled]=\"currentPage() === pagination()?.pages\">\u203A</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"filter-overlay\" *ngIf=\"filtersOpen()\" (click)=\"filtersOpen.set(false)\"></div>\n", styles: [".products-layout {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 36px;\n  padding-top: 36px;\n  padding-bottom: 80px;\n  align-items: start;\n}\n\n.filters-sidebar {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  position: sticky;\n  top: 100px;\n}\n\n.filters-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.1rem;\n    color: var(--text);\n    font-weight: 400;\n  }\n}\n\n.mobile-close-btn {\n  display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n\n.filter-section {\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n\n  h4 {\n    font-size: 0.62rem;\n    letter-spacing: 0.2em;\n    text-transform: uppercase;\n    color: var(--gold-warm);\n    font-weight: 600;\n    margin-bottom: 12px;\n  }\n}\n\n.filter-opts {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.colors-grid {\n  max-height: 180px;\n  overflow: auto;\n}\n\n.filter-opt {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-size: 0.84rem;\n  color: var(--text-muted);\n  padding: 3px 0;\n\n  input[type=\"radio\"] {\n    accent-color: var(--burgundy);\n  }\n\n  &:hover span {\n    color: var(--burgundy);\n  }\n}\n\n.stock-toggle {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  color: var(--text);\n  font-size: 0.88rem;\n}\n\n.price-range {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  span {\n    color: var(--text-dim);\n    font-size: 0.78rem;\n    flex-shrink: 0;\n  }\n}\n\n.clear-btn {\n  width: calc(100% - 40px);\n  margin: 8px 20px 20px;\n  justify-content: center;\n}\n\n.products-toolbar {\n  display: grid;\n  grid-template-columns: 1.1fr auto;\n  gap: 14px;\n  margin-bottom: 28px;\n  align-items: start;\n}\n\n.toolbar-left {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.toolbar-search {\n  position: relative;\n  flex: 1;\n\n  .material-icons {\n    position: absolute;\n    left: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: var(--text-dim);\n    font-size: 18px;\n  }\n\n  .form-control {\n    padding-left: 40px;\n  }\n}\n\n.filter-toggle {\n  display: none;\n}\n\n.active-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  grid-column: 1 / 2;\n}\n\n.filter-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 12px;\n  background: var(--burgundy-pale);\n  border: 1px solid rgba(123, 30, 58, 0.2);\n  border-radius: 100px;\n  font-size: 0.72rem;\n  color: var(--burgundy);\n  font-weight: 500;\n\n  button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    color: var(--burgundy);\n    font-size: 1rem;\n    line-height: 1;\n    padding: 0;\n  }\n}\n\n.sort-ctrl {\n  justify-self: end;\n\n  select {\n    min-width: 190px;\n  }\n}\n\n.skeleton-card {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n\n.skel-img,\n.skel-line {\n  background: linear-gradient(90deg, var(--surface) 25%, var(--bg-2) 50%, var(--surface) 75%);\n  background-size: 400px 100%;\n  animation: shimmer 1.5s infinite;\n}\n\n.skel-img {\n  height: 280px;\n}\n\n.skel-body {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.skel-line {\n  height: 12px;\n  border-radius: 6px;\n\n  &.sm { width: 35%; height: 9px; }\n  &.md { width: 55%; height: 9px; }\n}\n\n@keyframes shimmer {\n  0% { background-position: -400px 0; }\n  100% { background-position: 400px 0; }\n}\n\n.products-grid {\n  align-items: start;\n}\n\n.filter-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(44, 24, 16, 0.55);\n  backdrop-filter: blur(2px);\n  z-index: 199;\n}\n\n@media (max-width: 1024px) {\n  .products-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .filters-sidebar {\n    position: fixed;\n    top: 0;\n    left: -100%;\n    bottom: 0;\n    z-index: 200;\n    width: 300px;\n    border-radius: 0;\n    overflow-y: auto;\n    transition: left 0.35s ease;\n\n    &.open { left: 0; box-shadow: var(--shadow-lg); }\n  }\n\n  .mobile-close-btn,\n  .filter-toggle {\n    display: flex;\n  }\n}\n\n@media (max-width: 768px) {\n  .products-layout {\n    padding-top: 20px;\n    padding-bottom: 56px;\n  }\n\n  .products-toolbar {\n    grid-template-columns: 1fr;\n  }\n\n  .toolbar-left {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .sort-ctrl {\n    justify-self: stretch;\n\n    select {\n      width: 100%;\n    }\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src\\app\\components\\products\\products.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=products.component.js.map