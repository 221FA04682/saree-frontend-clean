import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ["/products", a0];
const _c1 = () => ({ returnUrl: "/checkout" });
function CartComponent_div_8_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Color: ", item_r4.color, "");
} }
function CartComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "a", 17)(2, "img", 18);
    i0.ɵɵlistener("error", function CartComponent_div_8_div_1_Template_img_error_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onImgError($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 19)(4, "div", 20);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 21);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 22);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, CartComponent_div_8_div_1_div_10_Template, 2, 1, "div", 23);
    i0.ɵɵelementStart(11, "div", 24);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 25)(14, "button", 26);
    i0.ɵɵlistener("click", function CartComponent_div_8_div_1_Template_button_click_14_listener() { const item_r4 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.cart.updateQuantity(item_r4.product._id, item_r4.quantity - 1, item_r4.color)); });
    i0.ɵɵtext(15, "\u2212");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 26);
    i0.ɵɵlistener("click", function CartComponent_div_8_div_1_Template_button_click_18_listener() { const item_r4 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.cart.updateQuantity(item_r4.product._id, item_r4.quantity + 1, item_r4.color)); });
    i0.ɵɵtext(19, "+");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 27)(21, "div", 28);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 29);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "button", 30);
    i0.ɵɵlistener("click", function CartComponent_div_8_div_1_Template_button_click_25_listener() { const item_r4 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.removeItem(item_r4.product._id, item_r4.color)); });
    i0.ɵɵelementStart(26, "span", 14);
    i0.ɵɵtext(27, "delete_outline");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(12, _c0, item_r4.product.id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", item_r4.product.images[0], i0.ɵɵsanitizeUrl)("alt", item_r4.product.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.product.category);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(14, _c0, item_r4.product.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.product.origin);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r4.product.blouseIncluded ? "\u2713 Blouse included" : "Blouse not included", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r4.quantity);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.ps.formatPrice(item_r4.product.price * item_r4.quantity));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r2.ps.formatPrice(item_r4.product.price), " each");
} }
function CartComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, CartComponent_div_8_div_1_Template, 28, 16, "div", 11);
    i0.ɵɵelementStart(2, "div", 12)(3, "a", 13)(4, "span", 14);
    i0.ɵɵtext(5, "arrow_back");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " Continue Shopping ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 15);
    i0.ɵɵlistener("click", function CartComponent_div_8_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cart.clear()); });
    i0.ɵɵtext(8, "Clear Cart");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.cart.items());
} }
function CartComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span", 33);
    i0.ɵɵtext(2, "shopping_bag");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Your cart is empty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Add some beautiful sarees to your cart and they'll appear here.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 34);
    i0.ɵɵtext(8, "Start Shopping");
    i0.ɵɵelementEnd()();
} }
function CartComponent_div_11_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "span", 14);
    i0.ɵɵtext(2, "local_shipping");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Add ", ctx_r2.ps.formatPrice(10000 - ctx_r2.cart.subtotal()), " more for free shipping! ");
} }
function CartComponent_div_11_a_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 47)(1, "span", 14);
    i0.ɵɵtext(2, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Proceed to Checkout ");
    i0.ɵɵelementEnd();
} }
function CartComponent_div_11_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 48)(1, "span", 14);
    i0.ɵɵtext(2, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Sign In to Checkout ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(1, _c1));
} }
function CartComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "h3", 36);
    i0.ɵɵtext(2, "Order Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 37)(4, "div", 38)(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 38)(10, "span");
    i0.ɵɵtext(11, "Shipping");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 38)(15, "span");
    i0.ɵɵtext(16, "GST (5%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(19, CartComponent_div_11_div_19_Template, 4, 1, "div", 39);
    i0.ɵɵelementStart(20, "div", 40)(21, "span");
    i0.ɵɵtext(22, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 41);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 42);
    i0.ɵɵtemplate(26, CartComponent_div_11_a_26_Template, 4, 0, "a", 43)(27, CartComponent_div_11_ng_template_27_Template, 4, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 44)(30, "span", 45);
    i0.ɵɵtext(31, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "span");
    i0.ɵɵtext(33, "Secure Checkout \u00A0|\u00A0 Visa \u00A0\u00B7\u00A0 Mastercard \u00A0\u00B7\u00A0 UPI \u00A0\u00B7\u00A0 COD");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const loginFirst_r5 = i0.ɵɵreference(28);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Subtotal (", ctx_r2.cart.count(), " items)");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.ps.formatPrice(ctx_r2.cart.subtotal()));
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("free-ship", ctx_r2.cart.shipping() === 0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.cart.shipping() === 0 ? "Free" : ctx_r2.ps.formatPrice(ctx_r2.cart.shipping()), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.ps.formatPrice(ctx_r2.cart.tax()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.cart.shipping() > 0);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.ps.formatPrice(ctx_r2.cart.total()));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.auth.isLoggedIn())("ngIfElse", loginFirst_r5);
} }
export class CartComponent {
    constructor() {
        this.cart = inject(CartService);
        this.ps = inject(ProductService);
        this.auth = inject(AuthService);
        this.toast = inject(ToastService);
    }
    removeItem(id, color) {
        this.cart.removeItem(id, color);
        this.toast.info('Item removed from cart');
    }
    onImgError(e) {
        e.target.src = 'https://via.placeholder.com/100x133/1a1510/d4af61?text=S';
    }
    static { this.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartComponent, selectors: [["app-cart"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 12, vars: 3, consts: [["emptyCart", ""], ["loginFirst", ""], [1, "page-header"], [1, "container"], [1, "section-subtitle"], [1, "section-title"], [1, "section-divider"], [1, "container", "cart-layout"], ["class", "cart-items", 4, "ngIf", "ngIfElse"], ["class", "cart-summary", 4, "ngIf"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-footer-bar"], ["routerLink", "/products", 1, "btn", "btn-ghost"], [1, "material-icons"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "cart-item"], [1, "item-img-wrap", 3, "routerLink"], [3, "error", "src", "alt"], [1, "item-info"], [1, "item-category"], [1, "item-name", 3, "routerLink"], [1, "item-origin"], ["class", "item-color", 4, "ngIf"], [1, "item-blouse"], [1, "item-qty-ctrl"], [1, "qty-btn", 3, "click"], [1, "item-price-col"], [1, "item-price"], [1, "item-unit"], [1, "remove-btn", 3, "click"], [1, "item-color"], [1, "empty-state"], [1, "material-icons", "xl", "empty-icon"], ["routerLink", "/products", 1, "btn", "btn-primary"], [1, "cart-summary"], [1, "summary-title"], [1, "summary-rows"], [1, "summary-row"], ["class", "ship-promo", 4, "ngIf"], [1, "summary-total"], [1, "total-amount"], [1, "summary-actions"], ["routerLink", "/checkout", "class", "btn btn-primary", "style", "width:100%;justify-content:center", 4, "ngIf", "ngIfElse"], [1, "payment-row"], [1, "material-icons", 2, "font-size", "14px", "color", "var(--color-success)"], [1, "ship-promo"], ["routerLink", "/checkout", 1, "btn", "btn-primary", 2, "width", "100%", "justify-content", "center"], ["routerLink", "/login", 1, "btn", "btn-primary", 2, "width", "100%", "justify-content", "center", 3, "queryParams"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
            i0.ɵɵtext(3, "Your Bag");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1", 5);
            i0.ɵɵtext(5, "Shopping Cart");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 7);
            i0.ɵɵtemplate(8, CartComponent_div_8_Template, 9, 1, "div", 8)(9, CartComponent_ng_template_9_Template, 9, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(11, CartComponent_div_11_Template, 34, 10, "div", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const emptyCart_r6 = i0.ɵɵreference(10);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.cart.count() > 0)("ngIfElse", emptyCart_r6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.cart.count() > 0);
        } }, dependencies: [RouterLink, CommonModule, i1.NgForOf, i1.NgIf], styles: ["//[_ngcontent-%COMP%]   Cart[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 36px;\n  padding-top: 36px;\n  padding-bottom: 80px;\n  align-items: start;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Cart[_ngcontent-%COMP%]   Items[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.cart-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 108px 1fr auto auto auto;\n  gap: 20px;\n  align-items: center;\n  padding: 20px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  margin-bottom: 16px;\n  transition: all 0.25s;\n\n  &:hover {\n    border-color: var(--border-warm);\n    box-shadow: var(--shadow-sm);\n  }\n}\n\n.item-img-wrap[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  aspect-ratio: 3 / 4;\n  display: block;\n  text-decoration: none;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.5s;\n  }\n\n  &:hover img { transform: scale(1.04); }\n}\n\n.item-info[_ngcontent-%COMP%] { min-width: 0; }\n\n.item-category[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 5px;\n}\n\n.item-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  color: var(--text);\n  text-decoration: none;\n  display: block;\n  margin-bottom: 4px;\n  line-height: 1.25;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: color 0.2s;\n\n  &:hover { color: var(--burgundy); }\n}\n\n.item-origin[_ngcontent-%COMP%], .item-color[_ngcontent-%COMP%], .item-blouse[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n\n.item-blouse[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 6px;\n  padding: 2px 8px;\n  background: var(--surface);\n  border-radius: 100px;\n  font-size: 0.68rem;\n}\n\n//[_ngcontent-%COMP%]   Qty[_ngcontent-%COMP%]   control\n.item-qty-ctrl[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  transition: border-color 0.2s;\n\n  &:hover { border-color: var(--border-strong); }\n\n  span {\n    padding: 0 16px;\n    color: var(--text);\n    font-size: 0.9rem;\n    min-width: 36px;\n    text-align: center;\n    line-height: 38px;\n  }\n}\n\n.qty-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 38px;\n  background: var(--surface);\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background: var(--burgundy-pale);\n    color: var(--burgundy);\n  }\n}\n\n//[_ngcontent-%COMP%]   Price[_ngcontent-%COMP%]   column\n.item-price-col[_ngcontent-%COMP%] { text-align: right; }\n\n.item-price[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: var(--burgundy);\n  line-height: 1;\n  margin-bottom: 3px;\n}\n\n.item-unit[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-dim);\n}\n\n//[_ngcontent-%COMP%]   Remove[_ngcontent-%COMP%]   button\n.remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  transition: all 0.2s;\n\n  .material-icons { font-size: 18px; }\n\n  &:hover {\n    color: var(--error);\n    background: rgba(192, 57, 43, 0.07);\n  }\n}\n\n//[_ngcontent-%COMP%]   Footer[_ngcontent-%COMP%]   bar\n.cart-footer-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n  margin-top: 4px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Order[_ngcontent-%COMP%]   Summary[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.cart-summary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  position: sticky;\n  top: 100px;\n}\n\n.summary-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n}\n\n.summary-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.2rem;\n  color: var(--text);\n  font-weight: 400;\n}\n\n.summary-body[_ngcontent-%COMP%] { padding: 20px 24px; }\n\n.summary-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.free-ship[_ngcontent-%COMP%] {\n  color: var(--success) !important;\n  font-weight: 600;\n}\n\n.ship-promo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--gold-pale);\n  border: 1px solid var(--border-warm);\n  border-radius: var(--radius-md);\n  padding: 10px 14px;\n  font-size: 0.78rem;\n  color: var(--gold-warm);\n  margin-bottom: 16px;\n\n  .material-icons { font-size: 15px; }\n\n  .promo-bar {\n    flex: 1;\n    height: 4px;\n    background: var(--border-warm);\n    border-radius: 2px;\n    overflow: hidden;\n    margin-top: 6px;\n\n    .promo-fill {\n      height: 100%;\n      background: var(--gold-gradient);\n      border-radius: 2px;\n      transition: width 0.5s;\n    }\n  }\n}\n\n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n  border-top: 1.5px solid var(--border);\n  margin-top: 4px;\n}\n\n.total-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text);\n  letter-spacing: 0.04em;\n}\n\n.total-amount[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  color: var(--burgundy);\n  font-weight: 400;\n}\n\n.summary-actions[_ngcontent-%COMP%] { padding: 0 24px 20px; }\n\n.checkout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 14px;\n  font-size: 0.8rem;\n}\n\n.payment-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 0.68rem;\n  color: var(--text-dim);\n  padding: 14px 24px;\n  border-top: 1px solid var(--border);\n  background: var(--surface);\n\n  .material-icons { font-size: 12px; color: var(--success); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Responsive[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:   1024px)[_ngcontent-%COMP%] {\n  .cart-layout { grid-template-columns: 1fr; }\n  .cart-summary { position: static; }\n}\n\n@media (max-width: 700px) {\n  .cart-item[_ngcontent-%COMP%] {\n    grid-template-columns: 80px 1fr;\n    grid-template-rows: auto auto;\n\n    .item-qty-ctrl, .item-price-col, .remove-btn {\n      grid-column: 2;\n    }\n  }\n}\n\n@media (max-width: 480px) {\n  .cart-item[_ngcontent-%COMP%] { padding: 14px; gap: 12px; }\n}\n\n\n\n@media (max-width: 768px) {\n  .cart-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 24px; padding-top: 24px; padding-bottom: 56px; }\n  .cart-summary[_ngcontent-%COMP%] { position: static; border-radius: var(--radius-md); }\n  .cart-item[_ngcontent-%COMP%] { grid-template-columns: 80px 1fr; gap: 12px; padding: 14px; }\n  .item-qty-ctrl[_ngcontent-%COMP%], .item-price-col[_ngcontent-%COMP%], .remove-btn[_ngcontent-%COMP%] { grid-column: 2; }\n  .item-img-wrap[_ngcontent-%COMP%] { width: 80px; height: 107px; }\n}\n\n@media (max-width: 480px) {\n  .cart-item[_ngcontent-%COMP%] { padding: 12px; gap: 10px; }\n  .item-img-wrap[_ngcontent-%COMP%] { width: 68px; height: 91px; border-radius: var(--radius-sm); }\n  .item-name[_ngcontent-%COMP%] { font-size: 0.9rem; }\n  .item-price[_ngcontent-%COMP%] { font-size: 1rem; }\n  .cart-footer-bar[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 8px; }\n  .summary-body[_ngcontent-%COMP%] { padding: 16px; }\n  .summary-actions[_ngcontent-%COMP%] { padding: 0 16px 16px; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartComponent, [{
        type: Component,
        args: [{ selector: 'app-cart', standalone: true, imports: [RouterLink, CommonModule], template: "<div class=\"page-header\">\n      <div class=\"container\">\n        <div class=\"section-subtitle\">Your Bag</div>\n        <h1 class=\"section-title\">Shopping Cart</h1>\n        <div class=\"section-divider\"></div>\n      </div>\n    </div>\n\n    <div class=\"container cart-layout\">\n      <!-- Cart Items -->\n      <div class=\"cart-items\" *ngIf=\"cart.count() > 0; else emptyCart\">\n        <div class=\"cart-item\" *ngFor=\"let item of cart.items()\">\n          <a [routerLink]=\"['/products', item.product.id]\" class=\"item-img-wrap\">\n            <img [src]=\"item.product.images[0]\" [alt]=\"item.product.name\" (error)=\"onImgError($event)\">\n          </a>\n          <div class=\"item-info\">\n            <div class=\"item-category\">{{ item.product.category }}</div>\n            <a [routerLink]=\"['/products', item.product.id]\" class=\"item-name\">{{ item.product.name }}</a>\n            <div class=\"item-origin\">{{ item.product.origin }}</div>\n            <div *ngIf=\"item.color\" class=\"item-color\">Color: {{ item.color }}</div>\n            <div class=\"item-blouse\">\n              {{ item.product.blouseIncluded ? '\u2713 Blouse included' : 'Blouse not included' }}\n            </div>\n          </div>\n          <div class=\"item-qty-ctrl\">\n            <button class=\"qty-btn\" (click)=\"cart.updateQuantity(item.product._id, item.quantity - 1, item.color)\">\u2212</button>\n            <span>{{ item.quantity }}</span>\n            <button class=\"qty-btn\" (click)=\"cart.updateQuantity(item.product._id, item.quantity + 1, item.color)\">+</button>\n          </div>\n          <div class=\"item-price-col\">\n            <div class=\"item-price\">{{ ps.formatPrice(item.product.price * item.quantity) }}</div>\n            <div class=\"item-unit\">{{ ps.formatPrice(item.product.price) }} each</div>\n          </div>\n          <button class=\"remove-btn\" (click)=\"removeItem(item.product._id, item.color)\">\n            <span class=\"material-icons\">delete_outline</span>\n          </button>\n        </div>\n\n        <!-- Continue Shopping -->\n        <div class=\"cart-footer-bar\">\n          <a routerLink=\"/products\" class=\"btn btn-ghost\">\n            <span class=\"material-icons\">arrow_back</span> Continue Shopping\n          </a>\n          <button class=\"btn btn-ghost btn-sm\" (click)=\"cart.clear()\">Clear Cart</button>\n        </div>\n      </div>\n\n      <!-- Empty Cart -->\n      <ng-template #emptyCart>\n        <div class=\"empty-state\">\n          <span class=\"material-icons xl empty-icon\">shopping_bag</span>\n          <h3>Your cart is empty</h3>\n          <p>Add some beautiful sarees to your cart and they'll appear here.</p>\n          <a routerLink=\"/products\" class=\"btn btn-primary\">Start Shopping</a>\n        </div>\n      </ng-template>\n\n      <!-- Order Summary -->\n      <div class=\"cart-summary\" *ngIf=\"cart.count() > 0\">\n        <h3 class=\"summary-title\">Order Summary</h3>\n\n        <div class=\"summary-rows\">\n          <div class=\"summary-row\">\n            <span>Subtotal ({{ cart.count() }} items)</span>\n            <span>{{ ps.formatPrice(cart.subtotal()) }}</span>\n          </div>\n          <div class=\"summary-row\">\n            <span>Shipping</span>\n            <span [class.free-ship]=\"cart.shipping() === 0\">\n              {{ cart.shipping() === 0 ? 'Free' : ps.formatPrice(cart.shipping()) }}\n            </span>\n          </div>\n          <div class=\"summary-row\">\n            <span>GST (5%)</span>\n            <span>{{ ps.formatPrice(cart.tax()) }}</span>\n          </div>\n        </div>\n\n        <div *ngIf=\"cart.shipping() > 0\" class=\"ship-promo\">\n          <span class=\"material-icons\">local_shipping</span>\n          Add {{ ps.formatPrice(10000 - cart.subtotal()) }} more for free shipping!\n        </div>\n\n        <div class=\"summary-total\">\n          <span>Total</span>\n          <span class=\"total-amount\">{{ ps.formatPrice(cart.total()) }}</span>\n        </div>\n\n        <div class=\"summary-actions\">\n          <a *ngIf=\"auth.isLoggedIn(); else loginFirst\" routerLink=\"/checkout\" class=\"btn btn-primary\" style=\"width:100%;justify-content:center\">\n            <span class=\"material-icons\">lock</span> Proceed to Checkout\n          </a>\n          <ng-template #loginFirst>\n            <a routerLink=\"/login\" [queryParams]=\"{returnUrl:'/checkout'}\" class=\"btn btn-primary\" style=\"width:100%;justify-content:center\">\n              <span class=\"material-icons\">person</span> Sign In to Checkout\n            </a>\n          </ng-template>\n        </div>\n\n        <!-- Accepted Payments -->\n        <div class=\"payment-row\">\n          <span class=\"material-icons\" style=\"font-size:14px;color:var(--color-success)\">lock</span>\n          <span>Secure Checkout &nbsp;|&nbsp; Visa &nbsp;\u00B7&nbsp; Mastercard &nbsp;\u00B7&nbsp; UPI &nbsp;\u00B7&nbsp; COD</span>\n        </div>\n      </div>\n    </div>\n", styles: ["// Cart Component Styles\n\n.cart-layout {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 36px;\n  padding-top: 36px;\n  padding-bottom: 80px;\n  align-items: start;\n}\n\n// \u2500\u2500 Cart Items \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.cart-item {\n  display: grid;\n  grid-template-columns: 108px 1fr auto auto auto;\n  gap: 20px;\n  align-items: center;\n  padding: 20px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  margin-bottom: 16px;\n  transition: all 0.25s;\n\n  &:hover {\n    border-color: var(--border-warm);\n    box-shadow: var(--shadow-sm);\n  }\n}\n\n.item-img-wrap {\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  aspect-ratio: 3 / 4;\n  display: block;\n  text-decoration: none;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.5s;\n  }\n\n  &:hover img { transform: scale(1.04); }\n}\n\n.item-info { min-width: 0; }\n\n.item-category {\n  font-size: 0.62rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 5px;\n}\n\n.item-name {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  color: var(--text);\n  text-decoration: none;\n  display: block;\n  margin-bottom: 4px;\n  line-height: 1.25;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: color 0.2s;\n\n  &:hover { color: var(--burgundy); }\n}\n\n.item-origin, .item-color, .item-blouse {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n\n.item-blouse {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 6px;\n  padding: 2px 8px;\n  background: var(--surface);\n  border-radius: 100px;\n  font-size: 0.68rem;\n}\n\n// Qty control\n.item-qty-ctrl {\n  display: flex;\n  align-items: center;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  transition: border-color 0.2s;\n\n  &:hover { border-color: var(--border-strong); }\n\n  span {\n    padding: 0 16px;\n    color: var(--text);\n    font-size: 0.9rem;\n    min-width: 36px;\n    text-align: center;\n    line-height: 38px;\n  }\n}\n\n.qty-btn {\n  width: 36px;\n  height: 38px;\n  background: var(--surface);\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background: var(--burgundy-pale);\n    color: var(--burgundy);\n  }\n}\n\n// Price column\n.item-price-col { text-align: right; }\n\n.item-price {\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: var(--burgundy);\n  line-height: 1;\n  margin-bottom: 3px;\n}\n\n.item-unit {\n  font-size: 0.72rem;\n  color: var(--text-dim);\n}\n\n// Remove button\n.remove-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  transition: all 0.2s;\n\n  .material-icons { font-size: 18px; }\n\n  &:hover {\n    color: var(--error);\n    background: rgba(192, 57, 43, 0.07);\n  }\n}\n\n// Footer bar\n.cart-footer-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n  margin-top: 4px;\n}\n\n// \u2500\u2500 Order Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.cart-summary {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  position: sticky;\n  top: 100px;\n}\n\n.summary-header {\n  padding: 20px 24px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n}\n\n.summary-title {\n  font-family: var(--font-display);\n  font-size: 1.2rem;\n  color: var(--text);\n  font-weight: 400;\n}\n\n.summary-body { padding: 20px 24px; }\n\n.summary-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.free-ship {\n  color: var(--success) !important;\n  font-weight: 600;\n}\n\n.ship-promo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--gold-pale);\n  border: 1px solid var(--border-warm);\n  border-radius: var(--radius-md);\n  padding: 10px 14px;\n  font-size: 0.78rem;\n  color: var(--gold-warm);\n  margin-bottom: 16px;\n\n  .material-icons { font-size: 15px; }\n\n  .promo-bar {\n    flex: 1;\n    height: 4px;\n    background: var(--border-warm);\n    border-radius: 2px;\n    overflow: hidden;\n    margin-top: 6px;\n\n    .promo-fill {\n      height: 100%;\n      background: var(--gold-gradient);\n      border-radius: 2px;\n      transition: width 0.5s;\n    }\n  }\n}\n\n.summary-total {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n  border-top: 1.5px solid var(--border);\n  margin-top: 4px;\n}\n\n.total-label {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text);\n  letter-spacing: 0.04em;\n}\n\n.total-amount {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  color: var(--burgundy);\n  font-weight: 400;\n}\n\n.summary-actions { padding: 0 24px 20px; }\n\n.checkout-btn {\n  width: 100%;\n  justify-content: center;\n  padding: 14px;\n  font-size: 0.8rem;\n}\n\n.payment-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 0.68rem;\n  color: var(--text-dim);\n  padding: 14px 24px;\n  border-top: 1px solid var(--border);\n  background: var(--surface);\n\n  .material-icons { font-size: 12px; color: var(--success); }\n}\n\n// \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media (max-width: 1024px) {\n  .cart-layout { grid-template-columns: 1fr; }\n  .cart-summary { position: static; }\n}\n\n@media (max-width: 700px) {\n  .cart-item {\n    grid-template-columns: 80px 1fr;\n    grid-template-rows: auto auto;\n\n    .item-qty-ctrl, .item-price-col, .remove-btn {\n      grid-column: 2;\n    }\n  }\n}\n\n@media (max-width: 480px) {\n  .cart-item { padding: 14px; gap: 12px; }\n}\n\n/* \u2500\u2500 Additional Mobile Responsive \u2500\u2500 */\n@media (max-width: 768px) {\n  .cart-layout { grid-template-columns: 1fr; gap: 24px; padding-top: 24px; padding-bottom: 56px; }\n  .cart-summary { position: static; border-radius: var(--radius-md); }\n  .cart-item { grid-template-columns: 80px 1fr; gap: 12px; padding: 14px; }\n  .item-qty-ctrl, .item-price-col, .remove-btn { grid-column: 2; }\n  .item-img-wrap { width: 80px; height: 107px; }\n}\n\n@media (max-width: 480px) {\n  .cart-item { padding: 12px; gap: 10px; }\n  .item-img-wrap { width: 68px; height: 91px; border-radius: var(--radius-sm); }\n  .item-name { font-size: 0.9rem; }\n  .item-price { font-size: 1rem; }\n  .cart-footer-bar { flex-direction: column; align-items: flex-start; gap: 8px; }\n  .summary-body { padding: 16px; }\n  .summary-actions { padding: 0 16px 16px; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\components\\cart\\cart.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=cart.component.js.map