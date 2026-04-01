import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => ({ occasion: "Wedding" });
const _c1 = () => ({ filter: "featured" });
const _c2 = () => ({ filter: "new" });
const _c3 = () => ["/products"];
const _c4 = a0 => ({ category: a0 });
function HomeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 75)(1, "a", 76);
    i0.ɵɵelement(2, "img", 77);
    i0.ɵɵelementStart(3, "div", 78);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(5, _c3))("queryParams", i0.ɵɵpureFunction1(6, _c4, c_r1.cat));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", c_r1.image, i0.ɵɵsanitizeUrl)("alt", c_r1.cat);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r1.cat);
} }
function HomeComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2726 ", t_r2, "");
} }
function HomeComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2726 ", t_r3, "");
} }
function HomeComponent_a_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 79)(1, "div", 80);
    i0.ɵɵelement(2, "img", 81)(3, "div", 82);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 83)(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 84);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 85);
    i0.ɵɵtext(10, "\u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    i0.ɵɵclassProp("cat-large", i_r5 === 0);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(8, _c3))("queryParams", i0.ɵɵpureFunction1(9, _c4, cat_r4.name));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", cat_r4.image, i0.ɵɵsanitizeUrl)("alt", cat_r4.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(cat_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", cat_r4.productCount || 0, " styles");
} }
function HomeComponent_app_product_card_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-product-card", 86);
} if (rf & 2) {
    const p_r6 = ctx.$implicit;
    i0.ɵɵproperty("product", p_r6);
} }
function HomeComponent_section_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 87)(1, "div", 88);
    i0.ɵɵelement(2, "img", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 90)(4, "div", 91)(5, "div", 25);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 92);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 93);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 94)(12, "div", 95);
    i0.ɵɵtext(13, "Up to");
    i0.ɵɵelement(14, "br");
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "br");
    i0.ɵɵtext(18, "off");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 96)(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "a", 97);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r6.getPromoBannerImage(), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r6.cfg().promoBannerSubtitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.cfg().promoBannerTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.cfg().promoBannerText);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r6.cfg().promoBannerBadge);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r6.cfg().promoBannerOfferLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.cfg().promoBannerOfferSub);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", ctx_r6.getPromoBannerRoute().path)("queryParams", ctx_r6.getPromoBannerRoute().queryParams);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r6.cfg().promoBannerCTA);
} }
function HomeComponent_section_71_app_product_card_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-product-card", 86);
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    i0.ɵɵproperty("product", p_r8);
} }
function HomeComponent_section_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 98)(1, "div", 23)(2, "div", 32)(3, "div", 33);
    i0.ɵɵelement(4, "span", 34);
    i0.ɵɵtext(5, " Most Loved ");
    i0.ɵɵelement(6, "span", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 35);
    i0.ɵɵtext(8, "Bestsellers");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "div", 36);
    i0.ɵɵelementStart(10, "p", 99);
    i0.ɵɵtext(11, "The pieces customers come back for again and again, selected by popularity and reviews.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 100);
    i0.ɵɵtemplate(13, HomeComponent_section_71_app_product_card_13_Template, 1, 1, "app-product-card", 39);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngForOf", ctx_r6.bestsellers());
} }
function HomeComponent_app_product_card_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-product-card", 86);
} if (rf & 2) {
    const p_r9 = ctx.$implicit;
    i0.ɵɵproperty("product", p_r9);
} }
function HomeComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 101)(1, "div", 102)(2, "span", 14);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "h4");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const v_r10 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r10.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r10.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r10.desc);
} }
function HomeComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 103)(1, "div", 104);
    i0.ɵɵtext(2, "\u2605\u2605\u2605\u2605\u2605");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 105);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 106)(6, "div", 107);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div")(9, "div", 108);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 109);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const t_r11 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("\"", t_r11.quote, "\"");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r11.name[0]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r11.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r11.loc);
} }
function HomeComponent_div_151_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 110);
    i0.ɵɵelement(1, "img", 111);
    i0.ɵɵelementStart(2, "div", 112)(3, "span", 14);
    i0.ɵɵtext(4, "instagram");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const img_r12 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", img_r12, i0.ɵɵsanitizeUrl);
} }
export class HomeComponent {
    constructor() {
        this.api = inject(ApiService);
        this.ps = inject(ProductService);
        this.featured = signal([]);
        this.newArrivals = signal([]);
        this.bestsellers = signal([]);
        this.categories = signal([]);
        // Full config from backend — sensible defaults
        this.cfg = signal({
            announcementText: '✦ Free Shipping on orders above ₹10,000 · Use code VASTRA15 for 15% off ✦',
            announcementActive: true,
            heroTitle: 'Where Heritage Meets Haute Couture',
            heroSubtitle: "Exquisite handcrafted sarees woven by India's most celebrated artisans.",
            heroCTA: 'Explore Collection',
            heroImage: '',
            heroSidebarCards: [
                { cat: 'Banarasi', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80' },
                { cat: 'Kanjivaram', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&q=80' },
                { cat: 'Chanderi', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=300&q=80' },
            ],
            promoBannerActive: true,
            promoBannerTitle: 'Bridal Season Sale',
            promoBannerSubtitle: 'Bridal Season 2024',
            promoBannerText: 'Up to 30% off on our exclusive bridal collection.',
            promoBannerBadge: '30%',
            promoBannerOfferLabel: 'Bridal Season Sale',
            promoBannerOfferSub: 'On selected bridal & festive pieces',
            promoBannerImage: '',
            promoBannerLink: '/products?occasion=Wedding',
            promoBannerCTA: 'Shop Bridal →',
        });
        this.marqueeTags = ['Banarasi Silk', 'Kanjivaram', 'Chanderi', 'Georgette', 'Paithani', 'Pochampalli Ikat', 'Mysore Silk', 'Bandhani', 'GI Certified', 'Free Shipping'];
        this.values = [
            { icon: 'local_shipping', title: 'Free Shipping', desc: 'Complimentary on all orders above ₹10,000' },
            { icon: 'verified', title: 'Authenticity Guaranteed', desc: 'GI-tagged and certified weaves, every time' },
            { icon: 'cached', title: 'Easy Returns', desc: '7-day hassle-free returns on all orders' },
            { icon: 'support_agent', title: 'Expert Styling Help', desc: 'Personal stylists available 9am–9pm daily' },
        ];
        this.testimonials = [
            { quote: "The Banarasi silk I ordered was beyond beautiful — the zari work so intricate. I wore it to my daughter's wedding and received compliments all evening.", name: 'Sunita Sharma', loc: 'Mumbai, Maharashtra' },
            { quote: 'Vastra Vaibhav is my go-to for authentic sarees. The packaging was luxurious and the saree arrived in perfect condition. Will definitely order again!', name: 'Deepa Krishnan', loc: 'Bangalore, Karnataka' },
            { quote: "I bought the Pochampally Ikat and it's simply stunning. You can feel the quality immediately. Fast delivery and amazing customer service!", name: 'Radha Pillai', loc: 'Hyderabad, Telangana' },
        ];
        this.instaImgs = [
            'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80',
            'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&q=80',
            'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&q=80',
            'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=300&q=80',
            'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=300&q=80',
            'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80',
        ];
    }
    ngOnInit() {
        this.api.get('/homeconfig').subscribe({
            next: r => {
                if (r.config) {
                    // Merge backend config into defaults
                    this.cfg.set({ ...this.cfg(), ...r.config });
                }
                this.featured.set((r.featuredProducts || []).map((p) => ({ ...p, id: p._id })));
                this.newArrivals.set((r.newArrivals || []).map((p) => ({ ...p, id: p._id })));
                this.bestsellers.set((r.bestsellers || []).map((p) => ({ ...p, id: p._id })));
            },
            error: () => {
                this.ps.getProducts({ featured: true, limit: 4 }).subscribe(r => this.featured.set(r.products));
                this.ps.getProducts({ newArrival: true, limit: 4 }).subscribe(r => this.newArrivals.set(r.products));
                this.ps.getProducts({ bestseller: true, limit: 4 }).subscribe(r => this.bestsellers.set(r.products));
            },
        });
        this.api.get('/categories').subscribe({
            next: r => this.categories.set(r.categories || []),
            error: () => { },
        });
    }
    getHeroImage() {
        return this.cfg().heroImage ||
            'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&q=90';
    }
    getPromoBannerImage() {
        return this.cfg().promoBannerImage ||
            'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=700&q=85';
    }
    getPromoBannerRoute() {
        const link = this.cfg().promoBannerLink || '/products?occasion=Wedding';
        const [pathPart, queryPart] = link.split('?');
        const queryParams = {};
        if (queryPart) {
            const search = new URLSearchParams(queryPart);
            search.forEach((value, key) => { queryParams[key] = value; });
        }
        return {
            path: [pathPart || '/products'],
            queryParams,
        };
    }
    getHeroSidebarCards() {
        const cards = this.cfg().heroSidebarCards;
        if (cards && cards.length)
            return cards;
        return [
            { cat: 'Banarasi', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80' },
            { cat: 'Kanjivaram', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&q=80' },
            { cat: 'Chanderi', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=300&q=80' },
        ];
    }
    getCategoriesForDisplay() {
        const cats = this.categories();
        if (cats.length > 0)
            return cats.slice(0, 4);
        return [
            { name: 'Banarasi', productCount: 48, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=700&q=85' },
            { name: 'Kanjivaram', productCount: 36, image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&q=85' },
            { name: 'Chanderi', productCount: 24, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=85' },
            { name: 'Georgette', productCount: 52, image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&q=85' },
        ];
    }
    static { this.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 152, vars: 21, consts: [[1, "hero"], [1, "hero-bg-img"], ["alt", "Premium Saree", 3, "src"], [1, "hero-overlay"], [1, "hero-content-wrap"], [1, "hero-content"], [1, "hero-pill"], [1, "hero-title"], [1, "hero-desc"], [1, "hero-cta"], ["routerLink", "/products", 1, "btn", "btn-primary", "btn-lg"], ["routerLink", "/products", 1, "btn", "btn-outline-light", "btn-lg", 3, "queryParams"], [1, "hero-trust"], [1, "trust-chip"], [1, "material-icons"], [1, "hero-sidebar"], ["class", "hero-card", 4, "ngFor", "ngForOf"], [1, "hero-scroll"], [1, "scroll-line"], [1, "marquee-strip"], [1, "marquee-track"], [4, "ngFor", "ngForOf"], [1, "section"], [1, "container"], [1, "cats-header"], [1, "section-subtitle"], [1, "section-title"], [1, "section-divider"], ["routerLink", "/products", 1, "btn", "btn-ghost"], [1, "cats-grid"], ["class", "cat-card", 3, "routerLink", "queryParams", "cat-large", 4, "ngFor", "ngForOf"], [1, "section", "section-alt"], [1, "section-hdr-center"], [1, "section-subtitle", 2, "justify-content", "center", "display", "flex", "gap", "12px", "align-items", "center"], [2, "width", "32px", "height", "1px", "background", "var(--gold-light)", "display", "inline-block"], [1, "section-title", 2, "text-align", "center"], [1, "section-divider", 2, "margin", "0 auto 8px"], [2, "text-align", "center", "color", "var(--text-muted)", "max-width", "min(480px,100%)", "margin", "0 auto"], [1, "grid", "grid-4", 2, "margin-top", "48px"], [3, "product", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "margin-top", "40px"], ["routerLink", "/products", 1, "btn", "btn-outline", "btn-lg", 3, "queryParams"], ["class", "editorial-banner", 4, "ngIf"], ["class", "section bestseller-section", 4, "ngIf"], [1, "new-arr-header"], ["routerLink", "/products", 1, "btn", "btn-ghost", 3, "queryParams"], [1, "grid", "grid-4"], [1, "values-section"], [1, "container", "values-grid"], ["class", "value-item", 4, "ngFor", "ngForOf"], [1, "story-section"], [1, "container", "story-grid"], [1, "story-imgs"], ["src", "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=85", "alt", "Weaver at work", 1, "story-main"], [1, "story-accent-wrap"], ["src", "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80", "alt", "Weaving detail", 1, "story-accent"], [1, "story-number-card"], [1, "sn-num"], [1, "sn-label"], [1, "story-content"], [2, "font-style", "italic"], [2, "margin-top", "1rem"], [1, "story-stats"], [1, "ss-item"], [1, "ss-num"], [1, "ss-div"], ["routerLink", "/products", 1, "btn", "btn-outline", 2, "margin-top", "2rem"], [1, "section-hdr-center", 2, "text-align", "center", "margin-bottom", "48px"], [1, "testimonials-grid"], ["class", "testimonial", 4, "ngFor", "ngForOf"], [1, "insta-section"], [1, "container", 2, "text-align", "center", "margin-bottom", "32px"], [1, "section-title", 2, "font-size", "1.8rem"], [1, "insta-grid"], ["class", "insta-tile", 4, "ngFor", "ngForOf"], [1, "hero-card"], [1, "hero-card-link", 3, "routerLink", "queryParams"], [3, "src", "alt"], [1, "hero-card-label"], [1, "cat-card", 3, "routerLink", "queryParams"], [1, "cat-img-wrap"], ["loading", "lazy", 3, "src", "alt"], [1, "cat-overlay"], [1, "cat-info"], [1, "cat-count"], [1, "cat-arrow"], [3, "product"], [1, "editorial-banner"], [1, "eb-left"], ["alt", "Promo banner", 3, "src"], [1, "eb-right"], [1, "eb-content"], [1, "eb-title"], [1, "eb-desc"], [1, "eb-offer"], [1, "offer-badge"], [1, "offer-text"], [1, "btn", "btn-primary", "btn-lg", 3, "routerLink", "queryParams"], [1, "section", "bestseller-section"], [2, "text-align", "center", "color", "var(--text-muted)", "max-width", "min(520px,100%)", "margin", "0 auto"], [1, "grid", "grid-4", 2, "margin-top", "40px"], [1, "value-item"], [1, "value-icon"], [1, "testimonial"], [1, "test-stars"], [1, "test-quote"], [1, "test-author"], [1, "test-av"], [1, "test-name"], [1, "test-loc"], [1, "insta-tile"], ["alt", "Instagram", 3, "src"], [1, "insta-overlay"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
            i0.ɵɵelement(2, "img", 2)(3, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
            i0.ɵɵtext(7, "New Collection \u00B7 Spring 2024");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h1", 7);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p", 8);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 9)(13, "a", 10);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 11);
            i0.ɵɵtext(16, "Bridal Edit");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 12)(18, "div", 13)(19, "span", 14);
            i0.ɵɵtext(20, "verified");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(21, " GI-Certified");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 13)(23, "span", 14);
            i0.ɵɵtext(24, "local_shipping");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " Free Shipping \u20B910k+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 13)(27, "span", 14);
            i0.ɵɵtext(28, "cached");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(29, " Easy Returns");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "div", 15);
            i0.ɵɵtemplate(31, HomeComponent_div_31_Template, 5, 8, "div", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 17);
            i0.ɵɵelement(33, "div", 18);
            i0.ɵɵelementStart(34, "span");
            i0.ɵɵtext(35, "Scroll");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(36, "div", 19)(37, "div", 20);
            i0.ɵɵtemplate(38, HomeComponent_span_38_Template, 2, 1, "span", 21)(39, HomeComponent_span_39_Template, 2, 1, "span", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "section", 22)(41, "div", 23)(42, "div", 24)(43, "div")(44, "div", 25);
            i0.ɵɵtext(45, "Explore By");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "h2", 26);
            i0.ɵɵtext(47, "Our Collections");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(48, "div", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "a", 28);
            i0.ɵɵtext(50, "View All \u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(51, "div", 29);
            i0.ɵɵtemplate(52, HomeComponent_a_52_Template, 11, 11, "a", 30);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(53, "section", 31)(54, "div", 23)(55, "div", 32)(56, "div", 33);
            i0.ɵɵelement(57, "span", 34);
            i0.ɵɵtext(58, " Handpicked ");
            i0.ɵɵelement(59, "span", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "h2", 35);
            i0.ɵɵtext(61, "Featured Sarees");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(62, "div", 36);
            i0.ɵɵelementStart(63, "p", 37);
            i0.ɵɵtext(64, "Handpicked by our curation team \u2014 exceptional weaves for discerning tastes.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "div", 38);
            i0.ɵɵtemplate(66, HomeComponent_app_product_card_66_Template, 1, 1, "app-product-card", 39);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "div", 40)(68, "a", 41);
            i0.ɵɵtext(69, "View All Featured");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(70, HomeComponent_section_70_Template, 26, 10, "section", 42)(71, HomeComponent_section_71_Template, 14, 1, "section", 43);
            i0.ɵɵelementStart(72, "section", 22)(73, "div", 23)(74, "div", 44)(75, "div")(76, "div", 25);
            i0.ɵɵtext(77, "Just In");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "h2", 26);
            i0.ɵɵtext(79, "New Arrivals");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(80, "div", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "a", 45);
            i0.ɵɵtext(82, "See All \u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(83, "div", 46);
            i0.ɵɵtemplate(84, HomeComponent_app_product_card_84_Template, 1, 1, "app-product-card", 39);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(85, "section", 47)(86, "div", 48);
            i0.ɵɵtemplate(87, HomeComponent_div_87_Template, 8, 3, "div", 49);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(88, "section", 50)(89, "div", 51)(90, "div", 52);
            i0.ɵɵelement(91, "img", 53);
            i0.ɵɵelementStart(92, "div", 54);
            i0.ɵɵelement(93, "img", 55);
            i0.ɵɵelementStart(94, "div", 56)(95, "span", 57);
            i0.ɵɵtext(96, "50+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(97, "span", 58);
            i0.ɵɵtext(98, "Artisan Families");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(99, "div", 59)(100, "div", 25);
            i0.ɵɵtext(101, "Our Heritage");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "h2", 26);
            i0.ɵɵtext(103, "Threads of Tradition, ");
            i0.ɵɵelementStart(104, "em", 60);
            i0.ɵɵtext(105, "Woven with Heart");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(106, "div", 27);
            i0.ɵɵelementStart(107, "p");
            i0.ɵɵtext(108, "Every saree at Vastra Vaibhav is sourced directly from master weavers across India. We partner with artisan families in Varanasi, Kanchipuram, Chanderi, Pochampalli and beyond \u2014 ensuring fair livelihoods and preservation of ancient craft.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "p", 61);
            i0.ɵɵtext(110, "When you wear a Vastra Vaibhav saree, you're not just dressed beautifully \u2014 you're part of a living legacy.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "div", 62)(112, "div", 63)(113, "span", 64);
            i0.ɵɵtext(114, "50+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(115, "span");
            i0.ɵɵtext(116, "Artisan Families");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(117, "div", 65);
            i0.ɵɵelementStart(118, "div", 63)(119, "span", 64);
            i0.ɵɵtext(120, "12");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(121, "span");
            i0.ɵɵtext(122, "States");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(123, "div", 65);
            i0.ɵɵelementStart(124, "div", 63)(125, "span", 64);
            i0.ɵɵtext(126, "8 yrs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(127, "span");
            i0.ɵɵtext(128, "Heritage Trade");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(129, "a", 66);
            i0.ɵɵtext(130, "Explore Our Heritage \u2192");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(131, "section", 31)(132, "div", 23)(133, "div", 67)(134, "div", 33);
            i0.ɵɵelement(135, "span", 34);
            i0.ɵɵtext(136, " What She Says ");
            i0.ɵɵelement(137, "span", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(138, "h2", 26);
            i0.ɵɵtext(139, "Loved by Thousands");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(140, "div", 68);
            i0.ɵɵtemplate(141, HomeComponent_div_141_Template, 13, 4, "div", 69);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(142, "section", 70)(143, "div", 71)(144, "div", 33);
            i0.ɵɵelement(145, "span", 34);
            i0.ɵɵtext(146, " @VastraVaibhav ");
            i0.ɵɵelement(147, "span", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(148, "h2", 72);
            i0.ɵɵtext(149, "Follow Our Story");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(150, "div", 73);
            i0.ɵɵtemplate(151, HomeComponent_div_151_Template, 5, 1, "div", 74);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.getHeroImage(), i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", ctx.cfg().heroTitle, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.cfg().heroSubtitle);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.cfg().heroCTA || "Explore Collection");
            i0.ɵɵadvance();
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(18, _c0));
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("ngForOf", ctx.getHeroSidebarCards());
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.marqueeTags);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.marqueeTags);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngForOf", ctx.getCategoriesForDisplay());
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngForOf", ctx.featured());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(19, _c1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.cfg().promoBannerActive);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bestsellers().length > 0);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(20, _c2));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.newArrivals());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.values);
            i0.ɵɵadvance(54);
            i0.ɵɵproperty("ngForOf", ctx.testimonials);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngForOf", ctx.instaImgs);
        } }, dependencies: [RouterLink, CommonModule, i1.NgForOf, i1.NgIf, ProductCardComponent], styles: ["\n\n    .hero[_ngcontent-%COMP%] {\n      position: relative;\n      height: 100vh;\n      min-height: 700px;\n      overflow: hidden;\n      display: flex;\n      flex-direction: column;\n    }\n    .hero-bg-img[_ngcontent-%COMP%] {\n      position: absolute; inset: 0;\n      img { width: 100%; height: 100%; object-fit: cover; object-position: center 30%; }\n    }\n    .hero-overlay[_ngcontent-%COMP%] {\n      position: absolute; inset: 0;\n      background: linear-gradient(\n        105deg,\n        rgba(44,24,16,0.75) 0%,\n        rgba(44,24,16,0.45) 50%,\n        rgba(44,24,16,0.2) 100%\n      );\n    }\n    .hero-content-wrap[_ngcontent-%COMP%] {\n      position: relative;\n      z-index: 2;\n      flex: 1;\n      display: grid;\n      grid-template-columns: 1fr 280px;\n      gap: 40px;\n      align-items: center;\n      max-width: 1280px;\n      margin: 0 auto;\n      padding: 0 32px;\n      width: 100%;\n    }\n    .hero-pill[_ngcontent-%COMP%] {\n      display: inline-block;\n      padding: 6px 18px;\n      background: rgba(201,149,42,0.2);\n      border: 1px solid rgba(201,149,42,0.4);\n      border-radius: 100px;\n      font-size: 0.7rem;\n      letter-spacing: 0.12em;\n      text-transform: uppercase;\n      color: var(--gold-light);\n      margin-bottom: 24px;\n      backdrop-filter: blur(4px);\n    }\n    .hero-title[_ngcontent-%COMP%] {\n      font-family: var(--font-display);\n      font-size: clamp(2.8rem, 5.5vw, 5rem);\n      font-weight: 400;\n      color: white;\n      line-height: 1.05;\n      margin-bottom: 24px;\n      em { color: var(--gold-light); font-style: italic; }\n    }\n    .hero-desc[_ngcontent-%COMP%] {\n      color: rgba(255,255,255,0.75);\n      font-size: 1.05rem;\n      max-width: 480px;\n      margin-bottom: 36px;\n      line-height: 1.75;\n      font-weight: 300;\n    }\n    .hero-cta[_ngcontent-%COMP%] { display: flex; gap: 14px; margin-bottom: 32px; flex-wrap: wrap; }\n    .btn-outline-light[_ngcontent-%COMP%] {\n      background: transparent;\n      color: white;\n      border: 1.5px solid rgba(255,255,255,0.5);\n      font-size: 0.8rem;\n      letter-spacing: 0.14em;\n      text-transform: uppercase;\n      text-decoration: none;\n      padding: 16px 36px;\n      display: inline-flex; align-items: center;\n      transition: all 0.3s;\n      &:hover { border-color: white; background: rgba(255,255,255,0.1); }\n    }\n    .hero-trust[_ngcontent-%COMP%] { display: flex; gap: 20px; flex-wrap: wrap; }\n    .trust-chip[_ngcontent-%COMP%] {\n      display: flex; align-items: center; gap: 6px;\n      font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase;\n      color: rgba(255,255,255,0.6);\n      .material-icons { font-size: 14px; color: var(--gold-light); }\n    }\n    \n\n    .hero-sidebar[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 12px; }\n    .hero-card[_ngcontent-%COMP%] {\n      border-radius: var(--radius-md);\n      overflow: hidden;\n      border: 1px solid rgba(255,255,255,0.15);\n    }\n    .hero-card-link[_ngcontent-%COMP%] {\n      display: block; text-decoration: none; position: relative;\n      img { width: 100%; height: 120px; object-fit: cover; transition: transform 0.5s; }\n      &:hover img { transform: scale(1.05); }\n    }\n    .hero-card-label[_ngcontent-%COMP%] {\n      position: absolute; bottom: 0; left: 0; right: 0;\n      background: linear-gradient(to top, rgba(44,24,16,0.8), transparent);\n      color: white; padding: 12px 12px 8px;\n      font-size: 0.8rem; letter-spacing: 0.08em;\n      font-family: var(--font-display);\n    }\n    \n\n    .hero-scroll[_ngcontent-%COMP%] {\n      position: absolute; bottom: 32px; left: 32px; z-index: 2;\n      display: flex; align-items: center; gap: 12px;\n      color: rgba(255,255,255,0.5); font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;\n    }\n    .scroll-line[_ngcontent-%COMP%] { width: 40px; height: 1px; background: rgba(255,255,255,0.3); }\n\n    \n\n    .marquee-strip[_ngcontent-%COMP%] {\n      background: var(--burgundy);\n      padding: 12px 0;\n      overflow: hidden;\n    }\n    .marquee-track[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 0;\n      animation: _ngcontent-%COMP%_marquee 30s linear infinite;\n      white-space: nowrap;\n    }\n    .marquee-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      padding: 0 28px;\n      font-size: 0.72rem;\n      letter-spacing: 0.18em;\n      text-transform: uppercase;\n      color: rgba(255,255,255,0.8);\n      font-weight: 400;\n    }\n    @keyframes _ngcontent-%COMP%_marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }\n\n    \n\n    .cats-header[_ngcontent-%COMP%] {\n      display: flex; justify-content: space-between; align-items: flex-end;\n      margin-bottom: 36px;\n    }\n    .cats-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 2fr 1fr 1fr 1fr;\n      grid-template-rows: 380px;\n      gap: 16px;\n    }\n    .cat-card[_ngcontent-%COMP%] {\n      border-radius: var(--radius-md);\n      overflow: hidden;\n      position: relative;\n      text-decoration: none;\n      display: block;\n\n      &:hover {\n        .cat-img-wrap img { transform: scale(1.06); }\n        .cat-overlay { opacity: 1; }\n        .cat-arrow { opacity: 1; transform: translateX(0); }\n      }\n    }\n    .cat-img-wrap[_ngcontent-%COMP%] {\n      width: 100%; height: 100%;\n      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }\n    }\n    .cat-overlay[_ngcontent-%COMP%] {\n      position: absolute; inset: 0;\n      background: linear-gradient(to top, rgba(44,24,16,0.7) 0%, rgba(44,24,16,0.1) 50%, transparent 100%);\n      opacity: 0.7; transition: opacity 0.3s;\n    }\n    .cat-info[_ngcontent-%COMP%] {\n      position: absolute; bottom: 0; left: 0; right: 0;\n      padding: 24px 20px;\n      display: flex; align-items: center; justify-content: space-between;\n      h3 { font-family: var(--font-display); font-size: 1.2rem; color: white; font-weight: 400; }\n    }\n    .cat-count[_ngcontent-%COMP%] { font-size: 0.72rem; letter-spacing: 0.12em; color: rgba(255,255,255,0.65); text-transform: uppercase; }\n    .cat-arrow[_ngcontent-%COMP%] {\n      width: 36px; height: 36px; border-radius: 50%;\n      background: rgba(255,255,255,0.2); backdrop-filter: blur(4px);\n      display: flex; align-items: center; justify-content: center;\n      color: white; font-size: 1.1rem;\n      opacity: 0; transform: translateX(-8px); transition: all 0.3s;\n    }\n\n    \n\n    .editorial-banner[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      min-height: 600px;\n    }\n    .eb-left[_ngcontent-%COMP%] {\n      overflow: hidden;\n      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s; }\n      &:hover img { transform: scale(1.03); }\n    }\n    .eb-right[_ngcontent-%COMP%] {\n      background: var(--bg-2);\n      display: flex; align-items: center;\n      padding: 80px 72px;\n    }\n    .eb-title[_ngcontent-%COMP%] {\n      font-family: var(--font-display);\n      font-size: clamp(2rem, 3.5vw, 3rem);\n      color: var(--text); margin: 12px 0 20px; line-height: 1.1;\n      em { color: var(--burgundy); }\n    }\n    .eb-desc[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 0.95rem; line-height: 1.8; max-width: 420px; margin-bottom: 28px; }\n    .eb-offer[_ngcontent-%COMP%] {\n      display: flex; align-items: center; gap: 16px;\n      padding: 16px 20px;\n      background: white; border-radius: var(--radius-md);\n      border: 1px solid var(--border); margin-bottom: 28px;\n      box-shadow: var(--shadow-sm);\n    }\n    .offer-badge[_ngcontent-%COMP%] {\n      width: 72px; height: 72px; border-radius: 50%;\n      background: var(--burgundy); color: white;\n      display: flex; flex-direction: column; align-items: center; justify-content: center;\n      text-align: center; flex-shrink: 0;\n      font-size: 0.55rem; line-height: 1.2; letter-spacing: 0.08em; text-transform: uppercase;\n      span { font-family: var(--font-display); font-size: 1.5rem; line-height: 1; }\n    }\n    .offer-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; font-weight: 500; color: var(--text); margin-bottom: 2px; }\n    .offer-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 0.8rem; color: var(--text-muted); }\n\n    \n\n    .values-section[_ngcontent-%COMP%] {\n      background: var(--text);\n      padding: 60px 0;\n    }\n    .values-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 0;\n    }\n    .value-item[_ngcontent-%COMP%] {\n      padding: 36px 32px;\n      border-right: 1px solid rgba(255,255,255,0.08);\n      text-align: center;\n      &:last-child { border-right: none; }\n    }\n    .value-icon[_ngcontent-%COMP%] {\n      width: 56px; height: 56px; border-radius: 50%;\n      background: rgba(201,149,42,0.15); border: 1px solid rgba(201,149,42,0.2);\n      display: flex; align-items: center; justify-content: center;\n      margin: 0 auto 16px;\n      .material-icons { font-size: 24px; color: var(--gold-warm); }\n    }\n    .value-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      font-family: var(--font-display); font-size: 1.05rem;\n      color: white; margin-bottom: 8px; font-weight: 400;\n    }\n    .value-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 0.82rem; color: rgba(255,255,255,0.45); line-height: 1.6; }\n\n    \n\n    .story-section[_ngcontent-%COMP%] { padding: 96px 0; background: white; }\n    .story-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }\n    .story-imgs[_ngcontent-%COMP%] { position: relative; }\n    .story-main[_ngcontent-%COMP%] { width: 85%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); }\n    .story-accent-wrap[_ngcontent-%COMP%] { position: absolute; bottom: -32px; right: 0; }\n    .story-accent[_ngcontent-%COMP%] { width: 55%; border-radius: var(--radius-md); border: 4px solid white; box-shadow: var(--shadow-md); }\n    .story-number-card[_ngcontent-%COMP%] {\n      position: absolute; top: -20px; right: 60%;\n      background: var(--burgundy); border-radius: var(--radius-md);\n      padding: 16px 20px; text-align: center;\n      box-shadow: var(--shadow-burg);\n    }\n    .sn-num[_ngcontent-%COMP%] { display: block; font-family: var(--font-display); font-size: 2rem; color: white; line-height: 1; }\n    .sn-label[_ngcontent-%COMP%] { display: block; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-top: 4px; }\n    .story-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: var(--text-muted); line-height: 1.85; font-size: 0.95rem; }\n    .story-stats[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 24px; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border); }\n    .ss-item[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 2px; }\n    .ss-num[_ngcontent-%COMP%] { font-family: var(--font-display); font-size: 1.8rem; color: var(--burgundy); line-height: 1; }\n    .ss-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted); }\n    .ss-div[_ngcontent-%COMP%] { width: 1px; height: 40px; background: var(--border); }\n\n    \n\n    .testimonials-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }\n    .testimonial[_ngcontent-%COMP%] {\n      background: white; border: 1px solid var(--border);\n      border-radius: var(--radius-md); padding: 32px;\n      transition: all 0.3s;\n      position: relative;\n      &::before {\n        content: '\u201C';\n        position: absolute; top: 16px; right: 24px;\n        font-family: var(--font-display); font-size: 4rem;\n        color: var(--border); line-height: 1;\n      }\n      &:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); border-color: var(--border-warm); }\n    }\n    .test-stars[_ngcontent-%COMP%] { color: var(--gold-warm); font-size: 0.9rem; letter-spacing: 3px; margin-bottom: 14px; }\n    .test-quote[_ngcontent-%COMP%] { font-family: var(--font-display); font-size: 0.98rem; color: var(--text); line-height: 1.75; font-style: italic; margin-bottom: 20px; }\n    .test-author[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; }\n    .test-av[_ngcontent-%COMP%] { width: 40px; height: 40px; border-radius: 50%; background: var(--burgundy); color: white; font-family: var(--font-display); font-size: 1rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }\n    .test-name[_ngcontent-%COMP%] { font-size: 0.875rem; font-weight: 500; color: var(--text); }\n    .test-loc[_ngcontent-%COMP%] { font-size: 0.72rem; color: var(--text-muted); }\n\n    \n\n    .insta-section[_ngcontent-%COMP%] { padding: 60px 0 0; }\n    .insta-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(6, 1fr); }\n    .insta-tile[_ngcontent-%COMP%] {\n      position: relative; overflow: hidden; aspect-ratio: 1;\n      cursor: pointer;\n      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }\n      &:hover {\n        img { transform: scale(1.08); }\n        .insta-overlay { opacity: 1; }\n      }\n    }\n    .insta-overlay[_ngcontent-%COMP%] {\n      position: absolute; inset: 0;\n      background: rgba(123,30,58,0.5);\n      display: flex; align-items: center; justify-content: center;\n      opacity: 0; transition: opacity 0.3s;\n      .material-icons { font-size: 32px; color: white; }\n    }\n\n    \n\n    .new-arr-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 36px; }\n    .bestseller-section[_ngcontent-%COMP%] { background: linear-gradient(180deg, rgba(253,246,227,0.45), rgba(255,255,255,0)); }\n\n    \n\n    @media (max-width: 1024px) {\n      .hero-content-wrap[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n      .hero-sidebar[_ngcontent-%COMP%] { display: none; }\n      .cats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }\n      .editorial-banner[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n      .eb-right[_ngcontent-%COMP%] { padding: 48px 32px; }\n      .values-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n      .value-item[_ngcontent-%COMP%] { border-bottom: 1px solid rgba(255,255,255,0.08); }\n      .story-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n      .story-accent-wrap[_ngcontent-%COMP%] { display: none; }\n      .testimonials-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n      .insta-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); }\n    }\n    @media (max-width: 600px) {\n      .cats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; grid-template-rows: auto; }\n      .cats-header[_ngcontent-%COMP%], .new-arr-header[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 12px; }\n      .values-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n      .hero-title[_ngcontent-%COMP%] { font-size: 2.4rem; }\n    }\n\n\n\n@media (max-width: 768px) {\n  \n\n  .hero[_ngcontent-%COMP%] { min-height: 100svh; }\n  .hero-content-wrap[_ngcontent-%COMP%] { grid-template-columns: 1fr; padding: 0 16px; padding-top: 80px; padding-bottom: 60px; }\n  .hero-title[_ngcontent-%COMP%] { font-size: clamp(2rem, 8vw, 3rem); }\n  .hero-desc[_ngcontent-%COMP%] { font-size: 0.9rem; }\n  .hero-cta[_ngcontent-%COMP%] { flex-wrap: wrap; gap: 10px; }\n  .hero-sidebar[_ngcontent-%COMP%] { display: none; }\n  .hero-trust[_ngcontent-%COMP%] { gap: 12px; flex-wrap: wrap; }\n  .hero-scroll[_ngcontent-%COMP%] { display: none; }\n\n  \n\n  .marquee-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { padding: 0 16px; font-size: 0.65rem; }\n\n  \n\n  .cats-header[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 10px; }\n  .cats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; grid-template-rows: auto; gap: 10px; }\n\n  \n\n  .editorial-banner[_ngcontent-%COMP%] { grid-template-columns: 1fr; min-height: auto; }\n  .eb-left[_ngcontent-%COMP%] { height: 260px; img { height: 100%; } }\n  .eb-right[_ngcontent-%COMP%] { padding: 32px 20px; }\n  .eb-title[_ngcontent-%COMP%] { font-size: 1.6rem; }\n  .eb-offer[_ngcontent-%COMP%] { flex-wrap: wrap; }\n\n  \n\n  .values-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n  .value-item[_ngcontent-%COMP%] { padding: 24px 16px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }\n\n  \n\n  .story-section[_ngcontent-%COMP%] { padding: 56px 0; }\n  .story-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 32px; }\n  .story-main[_ngcontent-%COMP%] { width: 100%; }\n  .story-accent-wrap[_ngcontent-%COMP%] { display: none; }\n  .story-stats[_ngcontent-%COMP%] { gap: 16px; }\n\n  \n\n  .testimonials-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 16px; }\n  .testimonial[_ngcontent-%COMP%] { padding: 20px; }\n\n  \n\n  .insta-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); }\n}\n\n@media (max-width: 480px) {\n  .hero-title[_ngcontent-%COMP%] { font-size: 1.9rem; }\n  .btn-outline-light[_ngcontent-%COMP%] { padding: 12px 20px; font-size: 0.72rem; }\n  .cats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .new-arr-header[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 10px; }\n  .values-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .insta-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n  .testimonial[_ngcontent-%COMP%]::before { display: none; }\n  .story-stats[_ngcontent-%COMP%] { flex-direction: column; gap: 12px; }\n  .ss-div[_ngcontent-%COMP%] { display: none; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', standalone: true, imports: [RouterLink, CommonModule, ProductCardComponent], template: "\n    <section class=\"hero\">\n      <div class=\"hero-bg-img\">\n        <img [src]=\"getHeroImage()\" alt=\"Premium Saree\">\n        <div class=\"hero-overlay\"></div>\n      </div>\n      <div class=\"hero-content-wrap\">\n        <div class=\"hero-content\">\n          <div class=\"hero-pill\">New Collection \u00B7 Spring 2024</div>\n          <h1 class=\"hero-title\">\n            {{ cfg().heroTitle }}\n          </h1>\n          <p class=\"hero-desc\">{{ cfg().heroSubtitle }}</p>\n          <div class=\"hero-cta\">\n            <a routerLink=\"/products\" class=\"btn btn-primary btn-lg\">{{ cfg().heroCTA || \"Explore Collection\" }}</a>\n            <a routerLink=\"/products\" [queryParams]=\"{occasion:'Wedding'}\" class=\"btn btn-outline-light btn-lg\">Bridal Edit</a>\n          </div>\n          <div class=\"hero-trust\">\n            <div class=\"trust-chip\"><span class=\"material-icons\">verified</span> GI-Certified</div>\n            <div class=\"trust-chip\"><span class=\"material-icons\">local_shipping</span> Free Shipping \u20B910k+</div>\n            <div class=\"trust-chip\"><span class=\"material-icons\">cached</span> Easy Returns</div>\n          </div>\n        </div>\n        <div class=\"hero-sidebar\">\n          <div class=\"hero-card\" *ngFor=\"let c of getHeroSidebarCards()\">\n            <a [routerLink]=\"['/products']\" [queryParams]=\"{category: c.cat}\" class=\"hero-card-link\">\n              <img [src]=\"c.image\" [alt]=\"c.cat\">\n              <div class=\"hero-card-label\">{{ c.cat }}</div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"hero-scroll\">\n        <div class=\"scroll-line\"></div>\n        <span>Scroll</span>\n      </div>\n    </section>\n\n    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MARQUEE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <div class=\"marquee-strip\">\n      <div class=\"marquee-track\">\n        <span *ngFor=\"let t of marqueeTags\">\u2726 {{ t }}</span>\n        <span *ngFor=\"let t of marqueeTags\">\u2726 {{ t }}</span>\n      </div>\n    </div>\n\n    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 CATEGORIES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <section class=\"section\">\n      <div class=\"container\">\n        <div class=\"cats-header\">\n          <div>\n            <div class=\"section-subtitle\">Explore By</div>\n            <h2 class=\"section-title\">Our Collections</h2>\n            <div class=\"section-divider\"></div>\n          </div>\n          <a routerLink=\"/products\" class=\"btn btn-ghost\">View All \u2192</a>\n        </div>\n        <div class=\"cats-grid\">\n          <a *ngFor=\"let cat of getCategoriesForDisplay(); let i = index\"\n            [routerLink]=\"['/products']\" [queryParams]=\"{category: cat.name}\"\n            class=\"cat-card\" [class.cat-large]=\"i === 0\">\n            <div class=\"cat-img-wrap\">\n              <img [src]=\"cat.image\" [alt]=\"cat.name\" loading=\"lazy\">\n              <div class=\"cat-overlay\"></div>\n            </div>\n            <div class=\"cat-info\">\n              <h3>{{ cat.name }}</h3>\n              <span class=\"cat-count\">{{ cat.productCount || 0 }} styles</span>\n              <span class=\"cat-arrow\">\u2192</span>\n            </div>\n          </a>\n        </div>\n      </div>\n    </section>\n\n    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 FEATURED \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <section class=\"section section-alt\">\n      <div class=\"container\">\n        <div class=\"section-hdr-center\">\n          <div class=\"section-subtitle\" style=\"justify-content:center;display:flex;gap:12px;align-items:center\">\n            <span style=\"width:32px;height:1px;background:var(--gold-light);display:inline-block\"></span>\n            Handpicked\n            <span style=\"width:32px;height:1px;background:var(--gold-light);display:inline-block\"></span>\n          </div>\n          <h2 class=\"section-title\" style=\"text-align:center\">Featured Sarees</h2>\n          <div class=\"section-divider\" style=\"margin:0 auto 8px\"></div>\n          <p style=\"text-align:center;color:var(--text-muted);max-width:min(480px,100%);margin:0 auto\">Handpicked by our curation team \u2014 exceptional weaves for discerning tastes.</p>\n        </div>\n        <div class=\"grid grid-4\" style=\"margin-top:48px\">\n          <app-product-card *ngFor=\"let p of featured()\" [product]=\"p\"></app-product-card>\n        </div>\n        <div style=\"text-align:center;margin-top:40px\">\n          <a routerLink=\"/products\" [queryParams]=\"{filter:'featured'}\" class=\"btn btn-outline btn-lg\">View All Featured</a>\n        </div>\n      </div>\n    </section>\n\n    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 EDITORIAL BANNER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <section class=\"editorial-banner\" *ngIf=\"cfg().promoBannerActive\">\n      <div class=\"eb-left\">\n        <img [src]=\"getPromoBannerImage()\" alt=\"Promo banner\">\n      </div>\n      <div class=\"eb-right\">\n        <div class=\"eb-content\">\n          <div class=\"section-subtitle\">{{ cfg().promoBannerSubtitle }}</div>\n          <h2 class=\"eb-title\">{{ cfg().promoBannerTitle }}</h2>\n          <p class=\"eb-desc\">{{ cfg().promoBannerText }}</p>\n          <div class=\"eb-offer\">\n            <div class=\"offer-badge\">Up to<br><span>{{ cfg().promoBannerBadge }}</span><br>off</div>\n            <div class=\"offer-text\">\n              <strong>{{ cfg().promoBannerOfferLabel }}</strong>\n              <p>{{ cfg().promoBannerOfferSub }}</p>\n            </div>\n          </div>\n          <a [routerLink]=\"getPromoBannerRoute().path\" [queryParams]=\"getPromoBannerRoute().queryParams\" class=\"btn btn-primary btn-lg\">{{ cfg().promoBannerCTA }}</a>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"section bestseller-section\" *ngIf=\"bestsellers().length > 0\">\n      <div class=\"container\">\n        <div class=\"section-hdr-center\">\n          <div class=\"section-subtitle\" style=\"justify-content:center;display:flex;gap:12px;align-items:center\">\n            <span style=\"width:32px;height:1px;background:var(--gold-light);display:inline-block\"></span>\n            Most Loved\n            <span style=\"width:32px;height:1px;background:var(--gold-light);display:inline-block\"></span>\n          </div>\n          <h2 class=\"section-title\" style=\"text-align:center\">Bestsellers</h2>\n          <div class=\"section-divider\" style=\"margin:0 auto 8px\"></div>\n          <p style=\"text-align:center;color:var(--text-muted);max-width:min(520px,100%);margin:0 auto\">The pieces customers come back for again and again, selected by popularity and reviews.</p>\n        </div>\n        <div class=\"grid grid-4\" style=\"margin-top:40px\">\n          <app-product-card *ngFor=\"let p of bestsellers()\" [product]=\"p\"></app-product-card>\n        </div>\n      </div>\n    </section>\n\n    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 NEW ARRIVALS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <section class=\"section\">\n      <div class=\"container\">\n        <div class=\"new-arr-header\">\n          <div>\n            <div class=\"section-subtitle\">Just In</div>\n            <h2 class=\"section-title\">New Arrivals</h2>\n            <div class=\"section-divider\"></div>\n          </div>\n          <a routerLink=\"/products\" [queryParams]=\"{filter:'new'}\" class=\"btn btn-ghost\">See All \u2192</a>\n        </div>\n        <div class=\"grid grid-4\">\n          <app-product-card *ngFor=\"let p of newArrivals()\" [product]=\"p\"></app-product-card>\n        </div>\n      </div>\n    </section>\n\n    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VALUE PROPS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <section class=\"values-section\">\n      <div class=\"container values-grid\">\n        <div class=\"value-item\" *ngFor=\"let v of values\">\n          <div class=\"value-icon\">\n            <span class=\"material-icons\">{{ v.icon }}</span>\n          </div>\n          <h4>{{ v.title }}</h4>\n          <p>{{ v.desc }}</p>\n        </div>\n      </div>\n    </section>\n\n    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 STORY \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <section class=\"story-section\">\n      <div class=\"container story-grid\">\n        <div class=\"story-imgs\">\n          <img class=\"story-main\" src=\"https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=85\" alt=\"Weaver at work\">\n          <div class=\"story-accent-wrap\">\n            <img class=\"story-accent\" src=\"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80\" alt=\"Weaving detail\">\n            <div class=\"story-number-card\">\n              <span class=\"sn-num\">50+</span>\n              <span class=\"sn-label\">Artisan Families</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"story-content\">\n          <div class=\"section-subtitle\">Our Heritage</div>\n          <h2 class=\"section-title\">Threads of Tradition, <em style=\"font-style:italic\">Woven with Heart</em></h2>\n          <div class=\"section-divider\"></div>\n          <p>Every saree at Vastra Vaibhav is sourced directly from master weavers across India. We partner with artisan families in Varanasi, Kanchipuram, Chanderi, Pochampalli and beyond \u2014 ensuring fair livelihoods and preservation of ancient craft.</p>\n          <p style=\"margin-top:1rem\">When you wear a Vastra Vaibhav saree, you're not just dressed beautifully \u2014 you're part of a living legacy.</p>\n          <div class=\"story-stats\">\n            <div class=\"ss-item\"><span class=\"ss-num\">50+</span><span>Artisan Families</span></div>\n            <div class=\"ss-div\"></div>\n            <div class=\"ss-item\"><span class=\"ss-num\">12</span><span>States</span></div>\n            <div class=\"ss-div\"></div>\n            <div class=\"ss-item\"><span class=\"ss-num\">8 yrs</span><span>Heritage Trade</span></div>\n          </div>\n          <a routerLink=\"/products\" class=\"btn btn-outline\" style=\"margin-top:2rem\">Explore Our Heritage \u2192</a>\n        </div>\n      </div>\n    </section>\n\n    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TESTIMONIALS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <section class=\"section section-alt\">\n      <div class=\"container\">\n        <div class=\"section-hdr-center\" style=\"text-align:center;margin-bottom:48px\">\n          <div class=\"section-subtitle\" style=\"justify-content:center;display:flex;gap:12px;align-items:center\">\n            <span style=\"width:32px;height:1px;background:var(--gold-light);display:inline-block\"></span>\n            What She Says\n            <span style=\"width:32px;height:1px;background:var(--gold-light);display:inline-block\"></span>\n          </div>\n          <h2 class=\"section-title\">Loved by Thousands</h2>\n        </div>\n        <div class=\"testimonials-grid\">\n          <div class=\"testimonial\" *ngFor=\"let t of testimonials\">\n            <div class=\"test-stars\">\u2605\u2605\u2605\u2605\u2605</div>\n            <p class=\"test-quote\">\"{{ t.quote }}\"</p>\n            <div class=\"test-author\">\n              <div class=\"test-av\">{{ t.name[0] }}</div>\n              <div>\n                <div class=\"test-name\">{{ t.name }}</div>\n                <div class=\"test-loc\">{{ t.loc }}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 INSTAGRAM STRIP \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <section class=\"insta-section\">\n      <div class=\"container\" style=\"text-align:center;margin-bottom:32px\">\n        <div class=\"section-subtitle\" style=\"justify-content:center;display:flex;gap:12px;align-items:center\">\n          <span style=\"width:32px;height:1px;background:var(--gold-light);display:inline-block\"></span>\n          &#64;VastraVaibhav\n          <span style=\"width:32px;height:1px;background:var(--gold-light);display:inline-block\"></span>\n        </div>\n        <h2 class=\"section-title\" style=\"font-size:1.8rem\">Follow Our Story</h2>\n      </div>\n      <div class=\"insta-grid\">\n        <div class=\"insta-tile\" *ngFor=\"let img of instaImgs\">\n          <img [src]=\"img\" alt=\"Instagram\">\n          <div class=\"insta-overlay\"><span class=\"material-icons\">instagram</span></div>\n        </div>\n      </div>\n    </section>\n", styles: ["/* HERO */\n    .hero {\n      position: relative;\n      height: 100vh;\n      min-height: 700px;\n      overflow: hidden;\n      display: flex;\n      flex-direction: column;\n    }\n    .hero-bg-img {\n      position: absolute; inset: 0;\n      img { width: 100%; height: 100%; object-fit: cover; object-position: center 30%; }\n    }\n    .hero-overlay {\n      position: absolute; inset: 0;\n      background: linear-gradient(\n        105deg,\n        rgba(44,24,16,0.75) 0%,\n        rgba(44,24,16,0.45) 50%,\n        rgba(44,24,16,0.2) 100%\n      );\n    }\n    .hero-content-wrap {\n      position: relative;\n      z-index: 2;\n      flex: 1;\n      display: grid;\n      grid-template-columns: 1fr 280px;\n      gap: 40px;\n      align-items: center;\n      max-width: 1280px;\n      margin: 0 auto;\n      padding: 0 32px;\n      width: 100%;\n    }\n    .hero-pill {\n      display: inline-block;\n      padding: 6px 18px;\n      background: rgba(201,149,42,0.2);\n      border: 1px solid rgba(201,149,42,0.4);\n      border-radius: 100px;\n      font-size: 0.7rem;\n      letter-spacing: 0.12em;\n      text-transform: uppercase;\n      color: var(--gold-light);\n      margin-bottom: 24px;\n      backdrop-filter: blur(4px);\n    }\n    .hero-title {\n      font-family: var(--font-display);\n      font-size: clamp(2.8rem, 5.5vw, 5rem);\n      font-weight: 400;\n      color: white;\n      line-height: 1.05;\n      margin-bottom: 24px;\n      em { color: var(--gold-light); font-style: italic; }\n    }\n    .hero-desc {\n      color: rgba(255,255,255,0.75);\n      font-size: 1.05rem;\n      max-width: 480px;\n      margin-bottom: 36px;\n      line-height: 1.75;\n      font-weight: 300;\n    }\n    .hero-cta { display: flex; gap: 14px; margin-bottom: 32px; flex-wrap: wrap; }\n    .btn-outline-light {\n      background: transparent;\n      color: white;\n      border: 1.5px solid rgba(255,255,255,0.5);\n      font-size: 0.8rem;\n      letter-spacing: 0.14em;\n      text-transform: uppercase;\n      text-decoration: none;\n      padding: 16px 36px;\n      display: inline-flex; align-items: center;\n      transition: all 0.3s;\n      &:hover { border-color: white; background: rgba(255,255,255,0.1); }\n    }\n    .hero-trust { display: flex; gap: 20px; flex-wrap: wrap; }\n    .trust-chip {\n      display: flex; align-items: center; gap: 6px;\n      font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase;\n      color: rgba(255,255,255,0.6);\n      .material-icons { font-size: 14px; color: var(--gold-light); }\n    }\n    /* Hero sidebar cards */\n    .hero-sidebar { display: flex; flex-direction: column; gap: 12px; }\n    .hero-card {\n      border-radius: var(--radius-md);\n      overflow: hidden;\n      border: 1px solid rgba(255,255,255,0.15);\n    }\n    .hero-card-link {\n      display: block; text-decoration: none; position: relative;\n      img { width: 100%; height: 120px; object-fit: cover; transition: transform 0.5s; }\n      &:hover img { transform: scale(1.05); }\n    }\n    .hero-card-label {\n      position: absolute; bottom: 0; left: 0; right: 0;\n      background: linear-gradient(to top, rgba(44,24,16,0.8), transparent);\n      color: white; padding: 12px 12px 8px;\n      font-size: 0.8rem; letter-spacing: 0.08em;\n      font-family: var(--font-display);\n    }\n    /* Scroll hint */\n    .hero-scroll {\n      position: absolute; bottom: 32px; left: 32px; z-index: 2;\n      display: flex; align-items: center; gap: 12px;\n      color: rgba(255,255,255,0.5); font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;\n    }\n    .scroll-line { width: 40px; height: 1px; background: rgba(255,255,255,0.3); }\n\n    /* MARQUEE */\n    .marquee-strip {\n      background: var(--burgundy);\n      padding: 12px 0;\n      overflow: hidden;\n    }\n    .marquee-track {\n      display: flex;\n      gap: 0;\n      animation: marquee 30s linear infinite;\n      white-space: nowrap;\n    }\n    .marquee-track span {\n      padding: 0 28px;\n      font-size: 0.72rem;\n      letter-spacing: 0.18em;\n      text-transform: uppercase;\n      color: rgba(255,255,255,0.8);\n      font-weight: 400;\n    }\n    @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }\n\n    /* CATEGORIES */\n    .cats-header {\n      display: flex; justify-content: space-between; align-items: flex-end;\n      margin-bottom: 36px;\n    }\n    .cats-grid {\n      display: grid;\n      grid-template-columns: 2fr 1fr 1fr 1fr;\n      grid-template-rows: 380px;\n      gap: 16px;\n    }\n    .cat-card {\n      border-radius: var(--radius-md);\n      overflow: hidden;\n      position: relative;\n      text-decoration: none;\n      display: block;\n\n      &:hover {\n        .cat-img-wrap img { transform: scale(1.06); }\n        .cat-overlay { opacity: 1; }\n        .cat-arrow { opacity: 1; transform: translateX(0); }\n      }\n    }\n    .cat-img-wrap {\n      width: 100%; height: 100%;\n      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }\n    }\n    .cat-overlay {\n      position: absolute; inset: 0;\n      background: linear-gradient(to top, rgba(44,24,16,0.7) 0%, rgba(44,24,16,0.1) 50%, transparent 100%);\n      opacity: 0.7; transition: opacity 0.3s;\n    }\n    .cat-info {\n      position: absolute; bottom: 0; left: 0; right: 0;\n      padding: 24px 20px;\n      display: flex; align-items: center; justify-content: space-between;\n      h3 { font-family: var(--font-display); font-size: 1.2rem; color: white; font-weight: 400; }\n    }\n    .cat-count { font-size: 0.72rem; letter-spacing: 0.12em; color: rgba(255,255,255,0.65); text-transform: uppercase; }\n    .cat-arrow {\n      width: 36px; height: 36px; border-radius: 50%;\n      background: rgba(255,255,255,0.2); backdrop-filter: blur(4px);\n      display: flex; align-items: center; justify-content: center;\n      color: white; font-size: 1.1rem;\n      opacity: 0; transform: translateX(-8px); transition: all 0.3s;\n    }\n\n    /* EDITORIAL BANNER */\n    .editorial-banner {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      min-height: 600px;\n    }\n    .eb-left {\n      overflow: hidden;\n      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s; }\n      &:hover img { transform: scale(1.03); }\n    }\n    .eb-right {\n      background: var(--bg-2);\n      display: flex; align-items: center;\n      padding: 80px 72px;\n    }\n    .eb-title {\n      font-family: var(--font-display);\n      font-size: clamp(2rem, 3.5vw, 3rem);\n      color: var(--text); margin: 12px 0 20px; line-height: 1.1;\n      em { color: var(--burgundy); }\n    }\n    .eb-desc { color: var(--text-muted); font-size: 0.95rem; line-height: 1.8; max-width: 420px; margin-bottom: 28px; }\n    .eb-offer {\n      display: flex; align-items: center; gap: 16px;\n      padding: 16px 20px;\n      background: white; border-radius: var(--radius-md);\n      border: 1px solid var(--border); margin-bottom: 28px;\n      box-shadow: var(--shadow-sm);\n    }\n    .offer-badge {\n      width: 72px; height: 72px; border-radius: 50%;\n      background: var(--burgundy); color: white;\n      display: flex; flex-direction: column; align-items: center; justify-content: center;\n      text-align: center; flex-shrink: 0;\n      font-size: 0.55rem; line-height: 1.2; letter-spacing: 0.08em; text-transform: uppercase;\n      span { font-family: var(--font-display); font-size: 1.5rem; line-height: 1; }\n    }\n    .offer-text strong { display: block; font-weight: 500; color: var(--text); margin-bottom: 2px; }\n    .offer-text p { font-size: 0.8rem; color: var(--text-muted); }\n\n    /* VALUES */\n    .values-section {\n      background: var(--text);\n      padding: 60px 0;\n    }\n    .values-grid {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 0;\n    }\n    .value-item {\n      padding: 36px 32px;\n      border-right: 1px solid rgba(255,255,255,0.08);\n      text-align: center;\n      &:last-child { border-right: none; }\n    }\n    .value-icon {\n      width: 56px; height: 56px; border-radius: 50%;\n      background: rgba(201,149,42,0.15); border: 1px solid rgba(201,149,42,0.2);\n      display: flex; align-items: center; justify-content: center;\n      margin: 0 auto 16px;\n      .material-icons { font-size: 24px; color: var(--gold-warm); }\n    }\n    .value-item h4 {\n      font-family: var(--font-display); font-size: 1.05rem;\n      color: white; margin-bottom: 8px; font-weight: 400;\n    }\n    .value-item p { font-size: 0.82rem; color: rgba(255,255,255,0.45); line-height: 1.6; }\n\n    /* STORY */\n    .story-section { padding: 96px 0; background: white; }\n    .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }\n    .story-imgs { position: relative; }\n    .story-main { width: 85%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); }\n    .story-accent-wrap { position: absolute; bottom: -32px; right: 0; }\n    .story-accent { width: 55%; border-radius: var(--radius-md); border: 4px solid white; box-shadow: var(--shadow-md); }\n    .story-number-card {\n      position: absolute; top: -20px; right: 60%;\n      background: var(--burgundy); border-radius: var(--radius-md);\n      padding: 16px 20px; text-align: center;\n      box-shadow: var(--shadow-burg);\n    }\n    .sn-num { display: block; font-family: var(--font-display); font-size: 2rem; color: white; line-height: 1; }\n    .sn-label { display: block; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-top: 4px; }\n    .story-content p { color: var(--text-muted); line-height: 1.85; font-size: 0.95rem; }\n    .story-stats { display: flex; align-items: center; gap: 24px; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border); }\n    .ss-item { display: flex; flex-direction: column; gap: 2px; }\n    .ss-num { font-family: var(--font-display); font-size: 1.8rem; color: var(--burgundy); line-height: 1; }\n    .ss-item span:last-child { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted); }\n    .ss-div { width: 1px; height: 40px; background: var(--border); }\n\n    /* TESTIMONIALS */\n    .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }\n    .testimonial {\n      background: white; border: 1px solid var(--border);\n      border-radius: var(--radius-md); padding: 32px;\n      transition: all 0.3s;\n      position: relative;\n      &::before {\n        content: '\u201C';\n        position: absolute; top: 16px; right: 24px;\n        font-family: var(--font-display); font-size: 4rem;\n        color: var(--border); line-height: 1;\n      }\n      &:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); border-color: var(--border-warm); }\n    }\n    .test-stars { color: var(--gold-warm); font-size: 0.9rem; letter-spacing: 3px; margin-bottom: 14px; }\n    .test-quote { font-family: var(--font-display); font-size: 0.98rem; color: var(--text); line-height: 1.75; font-style: italic; margin-bottom: 20px; }\n    .test-author { display: flex; align-items: center; gap: 12px; }\n    .test-av { width: 40px; height: 40px; border-radius: 50%; background: var(--burgundy); color: white; font-family: var(--font-display); font-size: 1rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }\n    .test-name { font-size: 0.875rem; font-weight: 500; color: var(--text); }\n    .test-loc { font-size: 0.72rem; color: var(--text-muted); }\n\n    /* INSTAGRAM */\n    .insta-section { padding: 60px 0 0; }\n    .insta-grid { display: grid; grid-template-columns: repeat(6, 1fr); }\n    .insta-tile {\n      position: relative; overflow: hidden; aspect-ratio: 1;\n      cursor: pointer;\n      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }\n      &:hover {\n        img { transform: scale(1.08); }\n        .insta-overlay { opacity: 1; }\n      }\n    }\n    .insta-overlay {\n      position: absolute; inset: 0;\n      background: rgba(123,30,58,0.5);\n      display: flex; align-items: center; justify-content: center;\n      opacity: 0; transition: opacity 0.3s;\n      .material-icons { font-size: 32px; color: white; }\n    }\n\n    /* NEW ARRIVALS HEADER */\n    .new-arr-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 36px; }\n    .bestseller-section { background: linear-gradient(180deg, rgba(253,246,227,0.45), rgba(255,255,255,0)); }\n\n    /* RESPONSIVE */\n    @media (max-width: 1024px) {\n      .hero-content-wrap { grid-template-columns: 1fr; }\n      .hero-sidebar { display: none; }\n      .cats-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }\n      .editorial-banner { grid-template-columns: 1fr; }\n      .eb-right { padding: 48px 32px; }\n      .values-grid { grid-template-columns: repeat(2, 1fr); }\n      .value-item { border-bottom: 1px solid rgba(255,255,255,0.08); }\n      .story-grid { grid-template-columns: 1fr; }\n      .story-accent-wrap { display: none; }\n      .testimonials-grid { grid-template-columns: 1fr; }\n      .insta-grid { grid-template-columns: repeat(3, 1fr); }\n    }\n    @media (max-width: 600px) {\n      .cats-grid { grid-template-columns: 1fr; grid-template-rows: auto; }\n      .cats-header,.new-arr-header { flex-direction: column; align-items: flex-start; gap: 12px; }\n      .values-grid { grid-template-columns: 1fr; }\n      .hero-title { font-size: 2.4rem; }\n    }\n\n/* \u2500\u2500 Additional Mobile Responsive \u2500\u2500 */\n@media (max-width: 768px) {\n  /* Hero */\n  .hero { min-height: 100svh; }\n  .hero-content-wrap { grid-template-columns: 1fr; padding: 0 16px; padding-top: 80px; padding-bottom: 60px; }\n  .hero-title { font-size: clamp(2rem, 8vw, 3rem); }\n  .hero-desc { font-size: 0.9rem; }\n  .hero-cta { flex-wrap: wrap; gap: 10px; }\n  .hero-sidebar { display: none; }\n  .hero-trust { gap: 12px; flex-wrap: wrap; }\n  .hero-scroll { display: none; }\n\n  /* Marquee */\n  .marquee-track span { padding: 0 16px; font-size: 0.65rem; }\n\n  /* Categories */\n  .cats-header { flex-direction: column; align-items: flex-start; gap: 10px; }\n  .cats-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; gap: 10px; }\n\n  /* Editorial Banner */\n  .editorial-banner { grid-template-columns: 1fr; min-height: auto; }\n  .eb-left { height: 260px; img { height: 100%; } }\n  .eb-right { padding: 32px 20px; }\n  .eb-title { font-size: 1.6rem; }\n  .eb-offer { flex-wrap: wrap; }\n\n  /* Values */\n  .values-grid { grid-template-columns: 1fr 1fr; }\n  .value-item { padding: 24px 16px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }\n\n  /* Story */\n  .story-section { padding: 56px 0; }\n  .story-grid { grid-template-columns: 1fr; gap: 32px; }\n  .story-main { width: 100%; }\n  .story-accent-wrap { display: none; }\n  .story-stats { gap: 16px; }\n\n  /* Testimonials */\n  .testimonials-grid { grid-template-columns: 1fr; gap: 16px; }\n  .testimonial { padding: 20px; }\n\n  /* Instagram */\n  .insta-grid { grid-template-columns: repeat(3, 1fr); }\n}\n\n@media (max-width: 480px) {\n  .hero-title { font-size: 1.9rem; }\n  .btn-outline-light { padding: 12px 20px; font-size: 0.72rem; }\n  .cats-grid { grid-template-columns: 1fr; }\n  .new-arr-header { flex-direction: column; align-items: flex-start; gap: 10px; }\n  .values-grid { grid-template-columns: 1fr; }\n  .insta-grid { grid-template-columns: repeat(2, 1fr); }\n  .testimonial::before { display: none; }\n  .story-stats { flex-direction: column; gap: 12px; }\n  .ss-div { display: none; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\components\\home\\home.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=home.component.js.map