import { Component, Input, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { ProductService } from '../../services/product.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ["/products", a0];
function ProductCardComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1, "New");
    i0.ɵɵelementEnd();
} }
function ProductCardComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1, "Best Seller");
    i0.ɵɵelementEnd();
} }
function ProductCardComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2212", ctx_r0.product.discount, "%");
} }
function ProductCardComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtext(1, "Sold Out");
    i0.ɵɵelementEnd();
} }
function ProductCardComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Only ", ctx_r0.product.stock, " left ");
} }
function ProductCardComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.ps.formatPrice(ctx_r0.product.originalPrice));
} }
export class ProductCardComponent {
    constructor() {
        this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.cartService = inject(CartService);
        this.auth = inject(AuthService);
        this.toast = inject(ToastService);
        this.ps = inject(ProductService);
        // Local signal to track wishlist state immediately (optimistic UI)
        this.wishedLocal = signal(null);
    }
    getStarStr() {
        const r = Math.round(this.product.rating);
        return '★'.repeat(r) + '☆'.repeat(5 - r);
    }
    isWished() {
        // Use local override if set (after user clicked), otherwise use server state
        if (this.wishedLocal() !== null)
            return this.wishedLocal();
        return this.auth.isInWishlist(this.product._id);
    }
    toggleWish() {
        if (!this.auth.isLoggedIn()) {
            this.toast.info('Please sign in to save to wishlist');
            return;
        }
        // Optimistically toggle
        const currentState = this.isWished();
        this.wishedLocal.set(!currentState);
        this.auth.toggleWishlist(this.product._id).subscribe({
            next: (r) => {
                // Confirm with server response
                this.wishedLocal.set(r.added);
                this.toast.success(r.added ? '♥ Added to wishlist' : 'Removed from wishlist');
            },
            error: (e) => {
                // Revert on error
                this.wishedLocal.set(currentState);
                this.toast.error(e.message || 'Could not update wishlist');
            },
        });
    }
    addToCart() {
        if (this.product.stock === 0)
            return;
        this.cartService.addItem(this.product);
        this.toast.success(`${this.product.name} added to bag!`);
    }
    onErr(e) {
        e.target.src = 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=70';
    }
    static { this.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 46, vars: 33, consts: [[1, "product-card"], [1, "card-img-wrap"], [1, "card-img-link", 3, "routerLink"], ["loading", "lazy", 3, "error", "src", "alt"], [1, "card-badges"], ["class", "badge badge-new", 4, "ngIf"], ["class", "badge badge-best", 4, "ngIf"], ["class", "badge badge-disc", 4, "ngIf"], [1, "wish-btn", 3, "click", "title"], [1, "material-icons"], [1, "card-quick"], ["title", "View Details", 1, "quick-btn", 3, "routerLink"], [1, "quick-label"], ["title", "Add to cart", 1, "quick-btn", 3, "click", "disabled"], ["class", "out-of-stock-label", 4, "ngIf"], ["class", "low-stock-label", 4, "ngIf"], [1, "card-body"], [1, "card-cat"], [1, "cat-dot"], [1, "card-origin"], [1, "card-name", 3, "routerLink"], [1, "card-rating"], [1, "stars"], [1, "reviews"], [1, "card-foot"], [1, "card-price-group"], [1, "card-price"], ["class", "card-orig", 4, "ngIf"], [1, "add-btn", 3, "click", "disabled", "title"], [1, "badge", "badge-new"], [1, "badge", "badge-best"], [1, "badge", "badge-disc"], [1, "out-of-stock-label"], [1, "low-stock-label"], [1, "card-orig"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "img", 3);
            i0.ɵɵlistener("error", function ProductCardComponent_Template_img_error_3_listener($event) { return ctx.onErr($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵtemplate(5, ProductCardComponent_span_5_Template, 2, 0, "span", 5)(6, ProductCardComponent_span_6_Template, 2, 0, "span", 6)(7, ProductCardComponent_span_7_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 8);
            i0.ɵɵlistener("click", function ProductCardComponent_Template_button_click_8_listener() { return ctx.toggleWish(); });
            i0.ɵɵelementStart(9, "span", 9);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 10)(12, "a", 11)(13, "span", 9);
            i0.ɵɵtext(14, "visibility");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "span", 12);
            i0.ɵɵtext(16, "View");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "button", 13);
            i0.ɵɵlistener("click", function ProductCardComponent_Template_button_click_17_listener() { return ctx.addToCart(); });
            i0.ɵɵelementStart(18, "span", 9);
            i0.ɵɵtext(19, "shopping_bag");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "span", 12);
            i0.ɵɵtext(21, "Add to Bag");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(22, ProductCardComponent_div_22_Template, 2, 0, "div", 14)(23, ProductCardComponent_div_23_Template, 2, 1, "div", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 16)(25, "div", 17);
            i0.ɵɵtext(26);
            i0.ɵɵelementStart(27, "span", 18);
            i0.ɵɵtext(28, "\u00B7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "span", 19);
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "a", 20);
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 21)(34, "div", 22);
            i0.ɵɵtext(35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "span", 23);
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "div", 24)(39, "div", 25)(40, "span", 26);
            i0.ɵɵtext(41);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(42, ProductCardComponent_span_42_Template, 2, 1, "span", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "button", 28);
            i0.ɵɵlistener("click", function ProductCardComponent_Template_button_click_43_listener() { return ctx.addToCart(); });
            i0.ɵɵelementStart(44, "span", 9);
            i0.ɵɵtext(45);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵclassProp("touch-device", ctx.isTouchDevice);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(27, _c0, ctx.product.id));
            i0.ɵɵadvance();
            i0.ɵɵproperty("src", ctx.product.images[0], i0.ɵɵsanitizeUrl)("alt", ctx.product.name);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.product.newArrival);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.product.bestseller);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.product.discount);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("wished", ctx.isWished());
            i0.ɵɵproperty("title", ctx.isWished() ? "Remove from wishlist" : "Add to wishlist");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.isWished() ? "favorite" : "favorite_border");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(29, _c0, ctx.product.id));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.product.stock === 0);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.product.stock === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.product.stock > 0 && ctx.product.stock <= 5);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ctx.product.category, " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.product.origin);
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(31, _c0, ctx.product.id));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.product.name);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.getStarStr());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("(", ctx.product.reviewCount, ")");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.ps.formatPrice(ctx.product.price));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.product.originalPrice);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.product.stock === 0)("title", ctx.product.stock === 0 ? "Out of stock" : "Add to bag");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.product.stock === 0 ? "remove_shopping_cart" : "add_shopping_cart");
        } }, dependencies: [RouterLink, CommonModule, i1.NgIf], styles: ["//[_ngcontent-%COMP%]   Product[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n.product-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n\n  &:hover {\n    box-shadow: 0 12px 40px rgba(44, 24, 16, 0.14);\n    transform: translateY(-5px);\n    border-color: var(--border-warm);\n\n    .card-img-link img { transform: scale(1.06); }\n    .card-quick { opacity: 1; transform: translateY(0); }\n    .wish-btn { opacity: 1; }\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Image[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.card-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3 / 4;\n  overflow: hidden;\n  background: var(--surface);\n}\n\n.card-img-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.6s ease;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Badges[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.card-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  z-index: 2;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Wishlist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.wish-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 3;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid var(--border);\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0;\n  transition: all 0.25s;\n  box-shadow: 0 2px 8px rgba(44, 24, 16, 0.1);\n\n  .material-icons { font-size: 17px; }\n\n  &:hover {\n    border-color: #e05252;\n    color: #e05252;\n    transform: scale(1.1);\n  }\n\n  &.wished {\n    opacity: 1;\n    color: #e05252;\n    border-color: #e05252;\n    background: rgba(224, 82, 82, 0.06);\n  }\n}\n\n//[_ngcontent-%COMP%]   Show[_ngcontent-%COMP%]   wish-btn[_ngcontent-%COMP%]   always[_ngcontent-%COMP%]   on[_ngcontent-%COMP%]   touch[_ngcontent-%COMP%]   devices\n@media[_ngcontent-%COMP%]   (hover[_ngcontent-%COMP%]:   none)[_ngcontent-%COMP%] {\n  .wish-btn { opacity: 1; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Quick[_ngcontent-%COMP%]   Actions[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.card-quick[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  gap: 1px;\n  opacity: 0;\n  transform: translateY(6px);\n  transition: all 0.3s ease;\n  z-index: 2;\n}\n\n.quick-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  padding: 10px 6px;\n  background: rgba(44, 24, 16, 0.88);\n  backdrop-filter: blur(8px);\n  border: none;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s;\n\n  .material-icons { font-size: 18px; }\n\n  .quick-label {\n    font-size: 0.58rem;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    font-family: var(--font-body);\n  }\n\n  &:hover:not(:disabled) {\n    background: var(--burgundy);\n    color: white;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Stock[_ngcontent-%COMP%]   labels[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.out-of-stock-label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(250, 248, 244, 0.82);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-weight: 500;\n  z-index: 1;\n}\n\n.low-stock-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: var(--terra);\n  color: white;\n  text-align: center;\n  padding: 5px;\n  font-size: 0.65rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  font-weight: 600;\n  z-index: 2;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Body[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.card-body[_ngcontent-%COMP%] {\n  padding: 14px 16px 16px;\n}\n\n.card-cat[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.cat-dot[_ngcontent-%COMP%] { color: var(--border-strong); }\n\n.card-origin[_ngcontent-%COMP%] {\n  color: var(--text-dim);\n  text-transform: none;\n  letter-spacing: 0.04em;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--text);\n  text-decoration: none;\n  line-height: 1.3;\n  margin-bottom: 7px;\n  transition: color 0.2s;\n\n  &:hover { color: var(--burgundy); }\n}\n\n.card-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n\n.stars[_ngcontent-%COMP%] {\n  color: var(--gold-warm);\n  font-size: 0.72rem;\n  letter-spacing: 1.5px;\n}\n\n.reviews[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n}\n\n.card-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.card-price-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 7px;\n}\n\n.card-price[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.15rem;\n  color: var(--burgundy);\n  font-weight: 400;\n}\n\n.card-orig[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  text-decoration: line-through;\n  color: var(--text-dim);\n}\n\n.add-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--burgundy-pale);\n  border: 1.5px solid var(--burgundy);\n  color: var(--burgundy);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s;\n\n  .material-icons { font-size: 16px; }\n\n  &:hover:not(:disabled) {\n    background: var(--burgundy);\n    color: white;\n    transform: scale(1.05);\n  }\n\n  &:disabled {\n    opacity: 0.45;\n    cursor: not-allowed;\n    border-color: var(--border);\n    background: var(--surface);\n    color: var(--text-dim);\n  }\n}\n\n\n\n@media (max-width: 480px) {\n  .card-name[_ngcontent-%COMP%] { font-size: 0.9rem; }\n  .card-price[_ngcontent-%COMP%] { font-size: 1rem; }\n  .card-body[_ngcontent-%COMP%] { padding: 10px 12px 12px; }\n  \n\n  .card-quick[_ngcontent-%COMP%] { opacity: 1; transform: translateY(0); }\n  .wish-btn[_ngcontent-%COMP%] { opacity: 1; }\n}\n\n\n\n@media (hover: none) {\n  .card-quick[_ngcontent-%COMP%] { opacity: 1; transform: translateY(0); }\n  .wish-btn[_ngcontent-%COMP%] { opacity: 1; }\n  .product-card[_ngcontent-%COMP%]:hover { transform: none; }\n}\n\n\n\n.product-card.touch-device[_ngcontent-%COMP%] {\n  .card-quick { opacity: 1; transform: translateY(0); }\n  .wish-btn   { opacity: 1; }\n  &:hover     { transform: none; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductCardComponent, [{
        type: Component,
        args: [{ selector: 'app-product-card', standalone: true, imports: [RouterLink, CommonModule], template: "<div class=\"product-card\" [class.touch-device]=\"isTouchDevice\">\n  <!-- Image wrapper -->\n  <div class=\"card-img-wrap\">\n    <a [routerLink]=\"['/products', product.id]\" class=\"card-img-link\">\n      <img [src]=\"product.images[0]\" [alt]=\"product.name\" loading=\"lazy\" (error)=\"onErr($event)\">\n    </a>\n\n    <!-- Badges -->\n    <div class=\"card-badges\">\n      <span *ngIf=\"product.newArrival\" class=\"badge badge-new\">New</span>\n      <span *ngIf=\"product.bestseller\" class=\"badge badge-best\">Best Seller</span>\n      <span *ngIf=\"product.discount\" class=\"badge badge-disc\">\u2212{{ product.discount }}%</span>\n    </div>\n\n    <!-- Wishlist button (always visible top-right) -->\n    <button class=\"wish-btn\" (click)=\"toggleWish()\" [class.wished]=\"isWished()\" [title]=\"isWished() ? 'Remove from wishlist' : 'Add to wishlist'\">\n      <span class=\"material-icons\">{{ isWished() ? 'favorite' : 'favorite_border' }}</span>\n    </button>\n\n    <!-- Quick actions overlay -->\n    <div class=\"card-quick\">\n      <a [routerLink]=\"['/products', product.id]\" class=\"quick-btn\" title=\"View Details\">\n        <span class=\"material-icons\">visibility</span>\n        <span class=\"quick-label\">View</span>\n      </a>\n      <button class=\"quick-btn\" (click)=\"addToCart()\" [disabled]=\"product.stock === 0\" title=\"Add to cart\">\n        <span class=\"material-icons\">shopping_bag</span>\n        <span class=\"quick-label\">Add to Bag</span>\n      </button>\n    </div>\n\n    <!-- Stock labels -->\n    <div *ngIf=\"product.stock === 0\" class=\"out-of-stock-label\">Sold Out</div>\n    <div *ngIf=\"product.stock > 0 && product.stock <= 5\" class=\"low-stock-label\">\n      Only {{ product.stock }} left\n    </div>\n  </div>\n\n  <!-- Card body -->\n  <div class=\"card-body\">\n    <div class=\"card-cat\">{{ product.category }}\n      <span class=\"cat-dot\">\u00B7</span>\n      <span class=\"card-origin\">{{ product.origin }}</span>\n    </div>\n    <a [routerLink]=\"['/products', product.id]\" class=\"card-name\">{{ product.name }}</a>\n\n    <div class=\"card-rating\">\n      <div class=\"stars\">{{ getStarStr() }}</div>\n      <span class=\"reviews\">({{ product.reviewCount }})</span>\n    </div>\n\n    <div class=\"card-foot\">\n      <div class=\"card-price-group\">\n        <span class=\"card-price\">{{ ps.formatPrice(product.price) }}</span>\n        <span *ngIf=\"product.originalPrice\" class=\"card-orig\">{{ ps.formatPrice(product.originalPrice) }}</span>\n      </div>\n      <button class=\"add-btn\" (click)=\"addToCart()\" [disabled]=\"product.stock === 0\" [title]=\"product.stock === 0 ? 'Out of stock' : 'Add to bag'\">\n        <span class=\"material-icons\">{{ product.stock === 0 ? 'remove_shopping_cart' : 'add_shopping_cart' }}</span>\n      </button>\n    </div>\n  </div>\n</div>\n", styles: ["// Product Card Component Styles\n\n.product-card {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n\n  &:hover {\n    box-shadow: 0 12px 40px rgba(44, 24, 16, 0.14);\n    transform: translateY(-5px);\n    border-color: var(--border-warm);\n\n    .card-img-link img { transform: scale(1.06); }\n    .card-quick { opacity: 1; transform: translateY(0); }\n    .wish-btn { opacity: 1; }\n  }\n}\n\n// \u2500\u2500 Image \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.card-img-wrap {\n  position: relative;\n  aspect-ratio: 3 / 4;\n  overflow: hidden;\n  background: var(--surface);\n}\n\n.card-img-link {\n  display: block;\n  width: 100%;\n  height: 100%;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.6s ease;\n  }\n}\n\n// \u2500\u2500 Badges \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.card-badges {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  z-index: 2;\n}\n\n// \u2500\u2500 Wishlist button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.wish-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 3;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid var(--border);\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0;\n  transition: all 0.25s;\n  box-shadow: 0 2px 8px rgba(44, 24, 16, 0.1);\n\n  .material-icons { font-size: 17px; }\n\n  &:hover {\n    border-color: #e05252;\n    color: #e05252;\n    transform: scale(1.1);\n  }\n\n  &.wished {\n    opacity: 1;\n    color: #e05252;\n    border-color: #e05252;\n    background: rgba(224, 82, 82, 0.06);\n  }\n}\n\n// Show wish-btn always on touch devices\n@media (hover: none) {\n  .wish-btn { opacity: 1; }\n}\n\n// \u2500\u2500 Quick Actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.card-quick {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  gap: 1px;\n  opacity: 0;\n  transform: translateY(6px);\n  transition: all 0.3s ease;\n  z-index: 2;\n}\n\n.quick-btn {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  padding: 10px 6px;\n  background: rgba(44, 24, 16, 0.88);\n  backdrop-filter: blur(8px);\n  border: none;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s;\n\n  .material-icons { font-size: 18px; }\n\n  .quick-label {\n    font-size: 0.58rem;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    font-family: var(--font-body);\n  }\n\n  &:hover:not(:disabled) {\n    background: var(--burgundy);\n    color: white;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}\n\n// \u2500\u2500 Stock labels \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.out-of-stock-label {\n  position: absolute;\n  inset: 0;\n  background: rgba(250, 248, 244, 0.82);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-weight: 500;\n  z-index: 1;\n}\n\n.low-stock-label {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: var(--terra);\n  color: white;\n  text-align: center;\n  padding: 5px;\n  font-size: 0.65rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  font-weight: 600;\n  z-index: 2;\n}\n\n// \u2500\u2500 Card Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.card-body {\n  padding: 14px 16px 16px;\n}\n\n.card-cat {\n  font-size: 0.6rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.cat-dot { color: var(--border-strong); }\n\n.card-origin {\n  color: var(--text-dim);\n  text-transform: none;\n  letter-spacing: 0.04em;\n}\n\n.card-name {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--text);\n  text-decoration: none;\n  line-height: 1.3;\n  margin-bottom: 7px;\n  transition: color 0.2s;\n\n  &:hover { color: var(--burgundy); }\n}\n\n.card-rating {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n\n.stars {\n  color: var(--gold-warm);\n  font-size: 0.72rem;\n  letter-spacing: 1.5px;\n}\n\n.reviews {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n}\n\n.card-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.card-price-group {\n  display: flex;\n  align-items: baseline;\n  gap: 7px;\n}\n\n.card-price {\n  font-family: var(--font-display);\n  font-size: 1.15rem;\n  color: var(--burgundy);\n  font-weight: 400;\n}\n\n.card-orig {\n  font-size: 0.78rem;\n  text-decoration: line-through;\n  color: var(--text-dim);\n}\n\n.add-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--burgundy-pale);\n  border: 1.5px solid var(--burgundy);\n  color: var(--burgundy);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s;\n\n  .material-icons { font-size: 16px; }\n\n  &:hover:not(:disabled) {\n    background: var(--burgundy);\n    color: white;\n    transform: scale(1.05);\n  }\n\n  &:disabled {\n    opacity: 0.45;\n    cursor: not-allowed;\n    border-color: var(--border);\n    background: var(--surface);\n    color: var(--text-dim);\n  }\n}\n\n/* \u2500\u2500 Additional Mobile Responsive \u2500\u2500 */\n@media (max-width: 480px) {\n  .card-name { font-size: 0.9rem; }\n  .card-price { font-size: 1rem; }\n  .card-body { padding: 10px 12px 12px; }\n  /* Always show quick actions on touch */\n  .card-quick { opacity: 1; transform: translateY(0); }\n  .wish-btn { opacity: 1; }\n}\n\n/* Hover: none devices (touch) \u2014 show wishlist always */\n@media (hover: none) {\n  .card-quick { opacity: 1; transform: translateY(0); }\n  .wish-btn { opacity: 1; }\n  .product-card:hover { transform: none; }\n}\n\n/* Touch device - always show quick actions and wishlist */\n.product-card.touch-device {\n  .card-quick { opacity: 1; transform: translateY(0); }\n  .wish-btn   { opacity: 1; }\n  &:hover     { transform: none; }\n}\n"] }]
    }], null, { product: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src\\app\\components\\product-card\\product-card.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=product-card.component.js.map