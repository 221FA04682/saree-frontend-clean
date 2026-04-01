import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = () => ["/products"];
const _c1 = a0 => ({ category: a0 });
const _c2 = () => [];
const _c3 = () => [1, 2, 3, 4, 5];
function ProductDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    i0.ɵɵelement(3, "div", 6);
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵelement(5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "div", 11);
    i0.ɵɵelementEnd()()()();
} }
function ProductDetailComponent_div_1_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 58);
    i0.ɵɵtext(1, "New");
    i0.ɵɵelementEnd();
} }
function ProductDetailComponent_div_1_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 59);
    i0.ɵɵtext(1, "Bestseller");
    i0.ɵɵelementEnd();
} }
function ProductDetailComponent_div_1_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2212", ctx_r1.product().discount, "%");
} }
function ProductDetailComponent_div_1_div_28_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 63);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_div_28_img_1_Template_img_click_0_listener() { const img_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.activeImg.set(img_r4)); })("error", function ProductDetailComponent_div_1_div_28_img_1_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onImgErr($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", img_r4 === ctx_r1.activeImg());
    i0.ɵɵproperty("src", img_r4, i0.ɵɵsanitizeUrl);
} }
function ProductDetailComponent_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61);
    i0.ɵɵtemplate(1, ProductDetailComponent_div_1_div_28_img_1_Template, 1, 3, "img", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.product().images);
} }
function ProductDetailComponent_div_1_span_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.ps.formatPrice(ctx_r1.product().originalPrice));
} }
function ProductDetailComponent_div_1_span_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.product().discount, "% OFF");
} }
function ProductDetailComponent_div_1_div_52_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 68);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_div_52_button_6_Template_button_click_0_listener() { const c_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selColor.set(c_r6)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", c_r6 === ctx_r1.selColor());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r6);
} }
function ProductDetailComponent_div_1_div_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "h4");
    i0.ɵɵtext(2, "Colour: ");
    i0.ɵɵelementStart(3, "em");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 66);
    i0.ɵɵtemplate(6, ProductDetailComponent_div_1_div_52_button_6_Template, 2, 3, "button", 67);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.selColor());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.product().colors);
} }
function ProductDetailComponent_div_1_button_79_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_button_79_Template_button_click_0_listener() { const t_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.activeTab.set(t_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r1.activeTab() === t_r8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r8);
} }
function ProductDetailComponent_div_1_div_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "p", 70);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.product().description);
} }
function ProductDetailComponent_div_1_div_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 71)(2, "div", 72)(3, "span", 73);
    i0.ɵɵtext(4, "Fabric");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 74);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 72)(8, "span", 73);
    i0.ɵɵtext(9, "Length");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 74);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 72)(13, "span", 73);
    i0.ɵɵtext(14, "Blouse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 74);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 72)(18, "span", 73);
    i0.ɵɵtext(19, "Origin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 74);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 72)(23, "span", 73);
    i0.ɵɵtext(24, "Occasion");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span", 74);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 72)(28, "span", 73);
    i0.ɵɵtext(29, "Colours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span", 74);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.product().fabric);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.product().length);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.product().blouseIncluded ? "Included" : "Not included");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.product().origin);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.product().occasion.join(", "));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.product().colors.join(", "));
} }
function ProductDetailComponent_div_1_div_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70)(1, "ul", 75)(2, "li");
    i0.ɵɵtext(3, "Dry clean only \u2014 do not machine wash silk sarees");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li");
    i0.ɵɵtext(5, "Store wrapped in a soft muslin cloth away from direct sunlight");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "li");
    i0.ɵɵtext(7, "Avoid contact with perfume, hairspray, or deodorant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "li");
    i0.ɵɵtext(9, "Fold with acid-free tissue paper to prevent zari tarnish");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "li");
    i0.ɵɵtext(11, "Iron on the reverse side on a low heat setting");
    i0.ɵɵelementEnd()()();
} }
function ProductDetailComponent_div_1_div_84_div_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 84);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_div_84_div_1_button_4_Template_button_click_0_listener() { const s_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.reviewRating.set(s_r11)); });
    i0.ɵɵtext(1, "\u2605");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("filled", s_r11 <= ctx_r1.reviewRating());
} }
function ProductDetailComponent_div_1_div_84_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 79)(1, "h5");
    i0.ɵɵtext(2, "Leave a Review");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 80);
    i0.ɵɵtemplate(4, ProductDetailComponent_div_1_div_84_div_1_button_4_Template, 2, 2, "button", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "textarea", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function ProductDetailComponent_div_1_div_84_div_1_Template_textarea_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.reviewComment, $event) || (ctx_r1.reviewComment = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 83);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_div_84_div_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.submitReview()); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(4, _c3));
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.reviewComment);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.submittingReview());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.submittingReview() ? "Submitting..." : "Submit Review", " ");
} }
function ProductDetailComponent_div_1_div_84_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 85);
    i0.ɵɵtext(1, "No reviews yet. Be the first!");
    i0.ɵɵelementEnd();
} }
function ProductDetailComponent_div_1_div_84_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 88)(1, "div", 89)(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 90);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 91);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const review_r12 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(review_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", "\u2605".repeat(review_r12.rating), "", "\u2606".repeat(5 - review_r12.rating), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 5, review_r12.createdAt, "d MMM yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(review_r12.comment);
} }
function ProductDetailComponent_div_1_div_84_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵtemplate(1, ProductDetailComponent_div_1_div_84_div_3_div_1_Template, 12, 8, "div", 87);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", (ctx_r1.product().reviews || i0.ɵɵpureFunction0(1, _c2)).slice().reverse());
} }
function ProductDetailComponent_div_1_div_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ProductDetailComponent_div_1_div_84_div_1_Template, 8, 5, "div", 76)(2, ProductDetailComponent_div_1_div_84_p_2_Template, 2, 0, "p", 77)(3, ProductDetailComponent_div_1_div_84_div_3_Template, 2, 2, "div", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.auth.isLoggedIn());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.product().reviewCount === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.product().reviews || i0.ɵɵpureFunction0(3, _c2)).length);
} }
function ProductDetailComponent_div_1_span_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 92);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r13 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r13);
} }
function ProductDetailComponent_div_1_div_87_app_product_card_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-product-card", 100);
} if (rf & 2) {
    const p_r14 = ctx.$implicit;
    i0.ɵɵproperty("product", p_r14);
} }
function ProductDetailComponent_div_1_div_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 93)(1, "div", 94)(2, "div", 95);
    i0.ɵɵtext(3, "You May Also Like");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2", 96);
    i0.ɵɵtext(5, "Related Sarees");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "div", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 98);
    i0.ɵɵtemplate(8, ProductDetailComponent_div_1_div_87_app_product_card_8_Template, 1, 1, "app-product-card", 99);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r1.related());
} }
function ProductDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 12)(2, "div", 13)(3, "a", 14);
    i0.ɵɵtext(4, "Home");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 15);
    i0.ɵɵtext(6, "chevron_right");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 16);
    i0.ɵɵtext(8, "Collections");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 15);
    i0.ɵɵtext(10, "chevron_right");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 17);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 15);
    i0.ɵɵtext(14, "chevron_right");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 18)(18, "div", 19)(19, "div", 20)(20, "img", 21);
    i0.ɵɵlistener("error", function ProductDetailComponent_div_1_Template_img_error_20_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onImgErr($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 22);
    i0.ɵɵtemplate(22, ProductDetailComponent_div_1_span_22_Template, 2, 0, "span", 23)(23, ProductDetailComponent_div_1_span_23_Template, 2, 0, "span", 24)(24, ProductDetailComponent_div_1_span_24_Template, 2, 1, "span", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 26);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleWish()); });
    i0.ɵɵelementStart(26, "span", 15);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(28, ProductDetailComponent_div_1_div_28_Template, 2, 1, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 28)(30, "div", 29);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "h1", 30);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 31)(35, "div", 32);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "span", 33);
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "span", 34);
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "span", 35);
    i0.ɵɵtext(42, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "span");
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 36)(46, "span", 37);
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(48, ProductDetailComponent_div_1_span_48_Template, 2, 1, "span", 38)(49, ProductDetailComponent_div_1_span_49_Template, 2, 1, "span", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "p", 40);
    i0.ɵɵtext(51, "Inclusive of all taxes \u00B7 Free shipping on orders above \u20B910,000");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(52, ProductDetailComponent_div_1_div_52_Template, 7, 2, "div", 41);
    i0.ɵɵelementStart(53, "div", 42)(54, "h4");
    i0.ɵɵtext(55, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "div", 43)(57, "div", 44)(58, "button", 45);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_Template_button_click_58_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.decQty()); });
    i0.ɵɵtext(59, "\u2212");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "span");
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "button", 45);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_Template_button_click_62_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.incQty()); });
    i0.ɵɵtext(63, "+");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "span", 46);
    i0.ɵɵtext(65);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(66, "div", 47)(67, "button", 48);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_Template_button_click_67_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addToCart()); });
    i0.ɵɵelementStart(68, "span", 15);
    i0.ɵɵtext(69, "shopping_bag");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(70);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "button", 49);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_Template_button_click_71_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.buyNow()); });
    i0.ɵɵelementStart(72, "span", 15);
    i0.ɵɵtext(73, "bolt");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(74, " Buy Now ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "button", 50);
    i0.ɵɵlistener("click", function ProductDetailComponent_div_1_Template_button_click_75_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleWish()); });
    i0.ɵɵelementStart(76, "span", 15);
    i0.ɵɵtext(77);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(78, "div", 51);
    i0.ɵɵtemplate(79, ProductDetailComponent_div_1_button_79_Template, 2, 3, "button", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "div", 53);
    i0.ɵɵtemplate(81, ProductDetailComponent_div_1_div_81_Template, 3, 1, "div", 1)(82, ProductDetailComponent_div_1_div_82_Template, 32, 6, "div", 1)(83, ProductDetailComponent_div_1_div_83_Template, 12, 0, "div", 54)(84, ProductDetailComponent_div_1_div_84_Template, 4, 4, "div", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "div", 55);
    i0.ɵɵtemplate(86, ProductDetailComponent_div_1_span_86_Template, 2, 1, "span", 56);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(87, ProductDetailComponent_div_1_div_87_Template, 9, 1, "div", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(43, _c0))("queryParams", i0.ɵɵpureFunction1(44, _c1, ctx_r1.product().category));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.product().category);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.product().name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.activeImg(), i0.ɵɵsanitizeUrl)("alt", ctx_r1.product().name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.product().newArrival);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.product().bestseller);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.product().discount);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("wished", ctx_r1.isWish());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.isWish() ? "favorite" : "favorite_border");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.product().images.length > 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.product().category, " \u00A0\u00B7\u00A0 ", ctx_r1.product().origin, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.product().name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.starStr());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.product().rating);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("(", ctx_r1.product().reviewCount, " reviews)");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.product().stock > 0 ? "in-stock" : "oos");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.product().stock > 0 ? ctx_r1.product().stock <= 5 ? "Only " + ctx_r1.product().stock + " left" : "In Stock" : "Out of Stock", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.ps.formatPrice(ctx_r1.product().price));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.product().originalPrice);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.product().discount);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.product().colors.length);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.qty());
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("low", ctx_r1.product().stock <= 5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.product().stock, " available ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.product().stock === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.product().stock === 0 ? "Out of Stock" : "Add to Bag", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.product().stock === 0);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("wished-btn", ctx_r1.isWish());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.isWish() ? "favorite" : "favorite_border");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.tabs);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.activeTab() === "Description");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.activeTab() === "Details");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.activeTab() === "Care");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.activeTab() === "Reviews");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.product().tags || i0.ɵɵpureFunction0(46, _c2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.related().length > 0);
} }
function ProductDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 101)(1, "span", 102);
    i0.ɵɵtext(2, "search_off");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Product not found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 103);
    i0.ɵɵtext(6, "Browse Collection");
    i0.ɵɵelementEnd()();
} }
export class ProductDetailComponent {
    constructor() {
        this.ps = inject(ProductService);
        this.cart = inject(CartService);
        this.auth = inject(AuthService);
        this.toast = inject(ToastService);
        this.route = inject(ActivatedRoute);
        this.router = inject(Router);
        this.product = signal(null);
        this.related = signal([]);
        this.loading = signal(true);
        this.activeImg = signal('');
        this.selColor = signal('');
        this.qty = signal(1);
        this.activeTab = signal('Description');
        this.tabs = ['Description', 'Details', 'Care', 'Reviews'];
        this.reviewRating = signal(5);
        this.reviewComment = '';
        this.submittingReview = signal(false);
    }
    ngOnInit() {
        this.route.params.subscribe(p => {
            this.loading.set(true);
            this.loadProduct(p['id']);
        });
    }
    loadProduct(id, keepScroll = false) {
        this.ps.getById(id).subscribe({
            next: (r) => {
                const prod = { ...r.product, id: r.product._id };
                this.product.set(prod);
                if (!this.activeImg())
                    this.activeImg.set(prod.images[0] || '');
                if (!this.selColor())
                    this.selColor.set(prod.colors[0] || '');
                this.loading.set(false);
                if (!keepScroll)
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                this.ps.getRelated(r.product._id).subscribe(rel => {
                    this.related.set(rel.products.map(p2 => ({ ...p2, id: p2._id })));
                });
            },
            error: () => this.loading.set(false),
        });
    }
    starStr() {
        const r = Math.round(this.product()?.rating ?? 0);
        return '★'.repeat(r) + '☆'.repeat(5 - r);
    }
    isWish() { return this.auth.isInWishlist(this.product()?._id ?? ''); }
    toggleWish() {
        if (!this.auth.isLoggedIn()) {
            this.toast.info('Please sign in to save to wishlist');
            return;
        }
        this.auth.toggleWishlist(this.product()._id).subscribe({
            next: (r) => this.toast.success(r.added ? 'Added to wishlist ♥' : 'Removed from wishlist'),
            error: (e) => this.toast.error(e.message),
        });
    }
    incQty() { if (this.qty() < (this.product()?.stock ?? 0))
        this.qty.update(q => q + 1); }
    decQty() { if (this.qty() > 1)
        this.qty.update(q => q - 1); }
    addToCart() {
        if (!this.product() || this.product().stock === 0)
            return;
        this.cart.addItem(this.product(), this.qty(), this.selColor());
        this.toast.success(`${this.product().name} added to bag!`);
    }
    buyNow() {
        this.addToCart();
        this.router.navigate(['/cart']);
    }
    submitReview() {
        if (!this.reviewComment.trim()) {
            this.toast.error('Please write a comment.');
            return;
        }
        this.submittingReview.set(true);
        this.ps.addReview(this.product()._id, this.reviewRating(), this.reviewComment).subscribe({
            next: (response) => {
                this.toast.success('Review submitted!');
                if (response.product) {
                    const updated = { ...response.product, id: response.product._id };
                    this.product.set(updated);
                }
                else {
                    this.loadProduct(this.product()._id, true);
                }
                this.reviewComment = '';
                this.activeTab.set('Reviews');
                this.submittingReview.set(false);
            },
            error: (e) => { this.toast.error(e.message); this.submittingReview.set(false); },
        });
    }
    onImgErr(e) { e.target.src = 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600'; }
    static { this.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 3, consts: [["class", "loading-wrap", 4, "ngIf"], [4, "ngIf"], ["class", "empty-state container", "style", "padding-top:80px", 4, "ngIf"], [1, "loading-wrap"], [1, "container", 2, "padding-top", "80px"], [1, "detail-skeleton"], [1, "ds-img"], [1, "ds-info"], [1, "skel-line", "sm"], [1, "skel-line", "xl"], [1, "skel-line", "md"], [1, "skel-line"], [1, "breadcrumb-bar"], [1, "container", "breadcrumb"], ["routerLink", "/"], [1, "material-icons"], ["routerLink", "/products"], [3, "routerLink", "queryParams"], [1, "container", "detail-layout"], [1, "gallery"], [1, "main-img-wrap"], [1, "main-img", 3, "error", "src", "alt"], [1, "img-badges"], ["class", "badge badge-new", 4, "ngIf"], ["class", "badge badge-best", 4, "ngIf"], ["class", "badge badge-disc", 4, "ngIf"], [1, "wish-float", 3, "click"], ["class", "thumbs", 4, "ngIf"], [1, "detail-info"], [1, "di-category"], [1, "di-name"], [1, "di-rating"], [1, "stars"], [1, "rating-num"], [1, "review-ct"], [1, "dot"], [1, "di-price-row"], [1, "di-price"], ["class", "di-orig", 4, "ngIf"], ["class", "di-disc", 4, "ngIf"], [1, "tax-note"], ["class", "di-section", 4, "ngIf"], [1, "di-section"], [1, "qty-row"], [1, "qty-ctrl"], [1, "qty-btn", 3, "click"], [1, "stock-note"], [1, "di-actions"], [1, "btn", "btn-primary", "btn-lg", 3, "click", "disabled"], [1, "btn", "btn-gold", "btn-lg", 3, "click", "disabled"], [1, "btn", "btn-outline", "btn-icon", 3, "click"], [1, "di-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["class", "tab-text", 4, "ngIf"], [1, "di-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], ["class", "section container", "style", "padding-bottom:80px", 4, "ngIf"], [1, "badge", "badge-new"], [1, "badge", "badge-best"], [1, "badge", "badge-disc"], [1, "thumbs"], ["class", "thumb", 3, "src", "active", "click", "error", 4, "ngFor", "ngForOf"], [1, "thumb", 3, "click", "error", "src"], [1, "di-orig"], [1, "di-disc"], [1, "color-chips"], ["class", "color-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "color-chip", 3, "click"], [1, "tab-btn", 3, "click"], [1, "tab-text"], [1, "specs"], [1, "spec"], [1, "sk"], [1, "sv"], [1, "care-list"], ["class", "review-form", 4, "ngIf"], ["class", "no-reviews", 4, "ngIf"], ["class", "reviews-list", 4, "ngIf"], [1, "review-form"], [1, "star-select"], ["class", "star-btn", 3, "filled", "click", 4, "ngFor", "ngForOf"], ["placeholder", "Share your experience...", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "star-btn", 3, "click"], [1, "no-reviews"], [1, "reviews-list"], ["class", "review-card", 4, "ngFor", "ngForOf"], [1, "review-card"], [1, "review-head"], [1, "review-stars"], [1, "review-date"], [1, "tag"], [1, "section", "container", 2, "padding-bottom", "80px"], [2, "margin-bottom", "40px"], [1, "section-subtitle"], [1, "section-title"], [1, "section-divider"], [1, "grid", "grid-4"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"], [1, "empty-state", "container", 2, "padding-top", "80px"], [1, "material-icons", "empty-icon"], ["routerLink", "/products", 1, "btn", "btn-primary"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProductDetailComponent_div_0_Template, 9, 0, "div", 0)(1, ProductDetailComponent_div_1_Template, 88, 47, "div", 1)(2, ProductDetailComponent_div_2_Template, 7, 0, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading() && ctx.product());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading() && !ctx.product());
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe, RouterLink, ProductCardComponent, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["//[_ngcontent-%COMP%]   Product[_ngcontent-%COMP%]   Detail[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Breadcrumb[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.breadcrumb-bar[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n  padding: 12px 0;\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  flex-wrap: wrap;\n\n  a {\n    text-decoration: none;\n    color: var(--text-muted);\n    transition: color 0.2s;\n\n    &:hover { color: var(--burgundy); }\n  }\n\n  .material-icons { font-size: 14px; color: var(--text-dim); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Layout[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.detail-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n  padding-top: 40px;\n  padding-bottom: 80px;\n  align-items: start;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Gallery[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.main-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n}\n\n.main-img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 3 / 4;\n  object-fit: cover;\n  transition: transform 0.5s;\n\n  &:hover { transform: scale(1.02); }\n}\n\n.img-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.wish-float[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.25s;\n\n  .material-icons { font-size: 19px; }\n\n  &:hover { border-color: var(--burgundy); color: var(--burgundy); transform: scale(1.05); }\n  &.wished { color: #e05252; border-color: #e05252; background: rgba(224,82,82,0.06); }\n}\n\n.thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n  flex-wrap: wrap;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 96px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 2px solid var(--border);\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &.active, &:hover {\n    border-color: var(--burgundy);\n    box-shadow: 0 2px 8px rgba(123,30,58,0.2);\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Product[_ngcontent-%COMP%]   Info[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.di-category[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 8px;\n}\n\n.di-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 400;\n  color: var(--text);\n  margin-bottom: 12px;\n  line-height: 1.15;\n}\n\n.di-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.stars[_ngcontent-%COMP%] {\n  color: var(--gold-warm);\n  font-size: 0.9rem;\n  letter-spacing: 2px;\n}\n\n.rating-num[_ngcontent-%COMP%] { font-weight: 600; color: var(--text); font-size: 0.9rem; }\n.review-ct[_ngcontent-%COMP%] { font-size: 0.8rem; color: var(--text-muted); }\n.dot[_ngcontent-%COMP%] { color: var(--text-dim); }\n.in-stock[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--success); font-weight: 600; }\n.oos[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--error); font-weight: 600; }\n\n.di-price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n\n.di-price[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--burgundy);\n}\n\n.di-orig[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--text-dim);\n  font-size: 1rem;\n}\n\n.di-disc[_ngcontent-%COMP%] {\n  background: var(--burgundy-pale);\n  color: var(--burgundy);\n  padding: 3px 10px;\n  border-radius: 3px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n\n.tax-note[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  color: var(--text-dim);\n  margin-bottom: 24px;\n}\n\n//[_ngcontent-%COMP%]   Section[_ngcontent-%COMP%]   grouping\n.di-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n\n  h4 {\n    font-size: 0.7rem;\n    letter-spacing: 0.14em;\n    text-transform: uppercase;\n    color: var(--text-muted);\n    margin-bottom: 10px;\n    font-weight: 600;\n    font-family: var(--font-body);\n\n    em { color: var(--burgundy); font-style: normal; font-weight: 600; }\n  }\n}\n\n//[_ngcontent-%COMP%]   Color[_ngcontent-%COMP%]   chips\n.color-chips[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 8px; }\n\n.color-chip[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: 1.5px solid var(--border);\n  border-radius: 2px;\n  background: transparent;\n  color: var(--text-muted);\n  font-size: 0.82rem;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &.active, &:hover {\n    border-color: var(--burgundy);\n    color: var(--burgundy);\n    background: var(--burgundy-pale);\n  }\n}\n\n//[_ngcontent-%COMP%]   Qty[_ngcontent-%COMP%]   control\n.qty-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 16px; }\n\n.qty-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  transition: border-color 0.2s;\n\n  &:hover { border-color: var(--border-strong); }\n\n  span {\n    padding: 0 22px;\n    font-size: 1rem;\n    color: var(--text);\n    display: flex;\n    align-items: center;\n    min-width: 48px;\n    justify-content: center;\n    line-height: 1;\n  }\n}\n\n.qty-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: var(--surface);\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover { background: var(--burgundy-pale); color: var(--burgundy); }\n}\n\n.stock-note[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--success);\n  font-weight: 500;\n\n  &.low { color: var(--warning); }\n}\n\n//[_ngcontent-%COMP%]   Action[_ngcontent-%COMP%]   buttons\n.di-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n\n  .btn-icon {\n    width: 52px;\n    height: 52px;\n    flex-shrink: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .wished-btn { color: var(--error); border-color: var(--error); }\n}\n\n//[_ngcontent-%COMP%]   Tabs\n.di-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 20px;\n}\n\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: none;\n  border: none;\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n  transition: all 0.2s;\n\n  &.active { color: var(--burgundy); border-bottom-color: var(--burgundy); }\n  &:hover:not(.active) { color: var(--text); }\n}\n\n.tab-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  line-height: 1.8;\n}\n\n//[_ngcontent-%COMP%]   Specs\n.specs[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n\n.spec[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(107, 84, 71, 0.07);\n\n  &:last-child { border-bottom: none; }\n}\n\n.sk[_ngcontent-%COMP%] { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-dim); flex-shrink: 0; }\n.sv[_ngcontent-%COMP%] { font-size: 0.875rem; color: var(--text-muted); text-align: right; }\n\n//[_ngcontent-%COMP%]   Care[_ngcontent-%COMP%]   list\n.care-list[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  line-height: 1.6;\n}\n\n//[_ngcontent-%COMP%]   Review[_ngcontent-%COMP%]   form\n.review-form[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 18px;\n  margin-bottom: 16px;\n\n  h5 { font-family: var(--font-display); font-size: 1rem; color: var(--text); margin-bottom: 12px; }\n}\n\n.star-select[_ngcontent-%COMP%] { display: flex; gap: 4px; margin-bottom: 12px; }\n\n.star-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: var(--text-dim);\n  transition: all 0.15s;\n  padding: 0 1px;\n\n  &.filled { color: var(--gold-warm); transform: scale(1.1); }\n  &:hover { color: var(--gold-warm); }\n}\n\n.no-reviews[_ngcontent-%COMP%] { color: var(--text-dim); font-size: 0.875rem; }\n\n.reviews-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 16px;\n}\n\n.review-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  background: white;\n  padding: 16px;\n\n  p {\n    color: var(--text-muted);\n    margin-top: 8px;\n    line-height: 1.7;\n  }\n}\n\n.review-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  align-items: flex-start;\n}\n\n.review-stars[_ngcontent-%COMP%] {\n  color: var(--gold-warm);\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.review-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-dim);\n}\n\n//[_ngcontent-%COMP%]   Tags\n.di-tags[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }\n\n.tag[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: 1px solid var(--border);\n  border-radius: 100px;\n  font-size: 0.68rem;\n  color: var(--text-muted);\n  letter-spacing: 0.06em;\n  transition: all 0.2s;\n\n  &:hover { border-color: var(--burgundy); color: var(--burgundy); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Skeleton[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.detail-skeleton[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n}\n\n.ds-img[_ngcontent-%COMP%] {\n  aspect-ratio: 3 / 4;\n  background: linear-gradient(90deg, var(--surface) 25%, var(--bg-2) 50%, var(--surface) 75%);\n  background-size: 400px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: var(--radius-lg);\n}\n\n.ds-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 16px; padding-top: 20px; }\n\n.skel-line[_ngcontent-%COMP%] {\n  height: 14px;\n  background: linear-gradient(90deg, var(--surface) 25%, var(--bg-2) 50%, var(--surface) 75%);\n  background-size: 400px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 4px;\n\n  &.sm { width: 30%; height: 10px; }\n  &.md { width: 60%; height: 10px; }\n  &.xl { height: 32px; }\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% { background-position: -400px 0; }\n  100% { background-position: 400px 0; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Responsive[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:   960px)[_ngcontent-%COMP%] {\n  .detail-layout { grid-template-columns: 1fr; gap: 32px; }\n  .detail-skeleton { grid-template-columns: 1fr; }\n  .di-name { font-size: 1.7rem; }\n}\n\n@media (max-width: 480px) {\n  .thumbs[_ngcontent-%COMP%] { gap: 6px; }\n  .thumb[_ngcontent-%COMP%] { width: 60px; height: 80px; }\n  .tab-btn[_ngcontent-%COMP%] { padding: 10px 14px; font-size: 0.68rem; }\n}\n\n\n\n@media (max-width: 768px) {\n  .detail-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 24px; padding-top: 24px; padding-bottom: 56px; }\n  .detail-skeleton[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .di-name[_ngcontent-%COMP%] { font-size: 1.5rem; }\n  .di-price[_ngcontent-%COMP%] { font-size: 1.6rem; }\n  .di-actions[_ngcontent-%COMP%] { flex-wrap: wrap; .btn-lg { flex: 1; min-width: 200px; } }\n  .thumbs[_ngcontent-%COMP%] { gap: 6px; }\n  .thumb[_ngcontent-%COMP%] { width: 60px; height: 80px; }\n}\n\n@media (max-width: 480px) {\n  .breadcrumb-bar[_ngcontent-%COMP%] { display: none; }\n  .di-name[_ngcontent-%COMP%] { font-size: 1.3rem; }\n  .di-rating[_ngcontent-%COMP%] { font-size: 0.8rem; gap: 6px; }\n  .tab-btn[_ngcontent-%COMP%] { padding: 8px 10px; font-size: 0.65rem; letter-spacing: 0.06em; }\n  .di-actions[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%] { padding: 13px 20px; font-size: 0.75rem; }\n  .color-chip[_ngcontent-%COMP%] { padding: 6px 12px; font-size: 0.78rem; }\n  .qty-ctrl[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { padding: 0 14px; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-product-detail', standalone: true, imports: [CommonModule, RouterLink, ProductCardComponent, FormsModule], template: "<!-- Loading -->\n    <div *ngIf=\"loading()\" class=\"loading-wrap\">\n      <div class=\"container\" style=\"padding-top:80px\">\n        <div class=\"detail-skeleton\">\n          <div class=\"ds-img\"></div>\n          <div class=\"ds-info\">\n            <div class=\"skel-line sm\"></div>\n            <div class=\"skel-line xl\"></div>\n            <div class=\"skel-line md\"></div>\n            <div class=\"skel-line\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!loading() && product()\">\n      <!-- Breadcrumb -->\n      <div class=\"breadcrumb-bar\">\n        <div class=\"container breadcrumb\">\n          <a routerLink=\"/\">Home</a>\n          <span class=\"material-icons\">chevron_right</span>\n          <a routerLink=\"/products\">Collections</a>\n          <span class=\"material-icons\">chevron_right</span>\n          <a [routerLink]=\"['/products']\" [queryParams]=\"{category: product()!.category}\">{{ product()!.category }}</a>\n          <span class=\"material-icons\">chevron_right</span>\n          <span>{{ product()!.name }}</span>\n        </div>\n      </div>\n\n      <div class=\"container detail-layout\">\n        <!-- Gallery -->\n        <div class=\"gallery\">\n          <div class=\"main-img-wrap\">\n            <img [src]=\"activeImg()\" [alt]=\"product()!.name\" class=\"main-img\" (error)=\"onImgErr($event)\">\n            <div class=\"img-badges\">\n              <span *ngIf=\"product()!.newArrival\" class=\"badge badge-new\">New</span>\n              <span *ngIf=\"product()!.bestseller\" class=\"badge badge-best\">Bestseller</span>\n              <span *ngIf=\"product()!.discount\" class=\"badge badge-disc\">\u2212{{ product()!.discount }}%</span>\n            </div>\n            <button class=\"wish-float\" (click)=\"toggleWish()\" [class.wished]=\"isWish()\">\n              <span class=\"material-icons\">{{ isWish() ? 'favorite' : 'favorite_border' }}</span>\n            </button>\n          </div>\n          <div class=\"thumbs\" *ngIf=\"product()!.images.length > 1\">\n            <img *ngFor=\"let img of product()!.images\" [src]=\"img\" [class.active]=\"img === activeImg()\"\n              (click)=\"activeImg.set(img)\" class=\"thumb\" (error)=\"onImgErr($event)\">\n          </div>\n        </div>\n\n        <!-- Info -->\n        <div class=\"detail-info\">\n          <div class=\"di-category\">{{ product()!.category }} &nbsp;\u00B7&nbsp; {{ product()!.origin }}</div>\n          <h1 class=\"di-name\">{{ product()!.name }}</h1>\n\n          <div class=\"di-rating\">\n            <div class=\"stars\">{{ starStr() }}</div>\n            <span class=\"rating-num\">{{ product()!.rating }}</span>\n            <span class=\"review-ct\">({{ product()!.reviewCount }} reviews)</span>\n            <span class=\"dot\">\u00B7</span>\n            <span [class]=\"product()!.stock > 0 ? 'in-stock' : 'oos'\">\n              {{ product()!.stock > 0 ? (product()!.stock <= 5 ? 'Only ' + product()!.stock + ' left' : 'In Stock') : 'Out of Stock' }}\n            </span>\n          </div>\n\n          <div class=\"di-price-row\">\n            <span class=\"di-price\">{{ ps.formatPrice(product()!.price) }}</span>\n            <span *ngIf=\"product()!.originalPrice\" class=\"di-orig\">{{ ps.formatPrice(product()!.originalPrice!) }}</span>\n            <span *ngIf=\"product()!.discount\" class=\"di-disc\">{{ product()!.discount }}% OFF</span>\n          </div>\n          <p class=\"tax-note\">Inclusive of all taxes \u00B7 Free shipping on orders above \u20B910,000</p>\n\n          <!-- Color -->\n          <div class=\"di-section\" *ngIf=\"product()!.colors.length\">\n            <h4>Colour: <em>{{ selColor() }}</em></h4>\n            <div class=\"color-chips\">\n              <button *ngFor=\"let c of product()!.colors\" class=\"color-chip\"\n                [class.active]=\"c === selColor()\" (click)=\"selColor.set(c)\">{{ c }}</button>\n            </div>\n          </div>\n\n          <!-- Qty -->\n          <div class=\"di-section\">\n            <h4>Quantity</h4>\n            <div class=\"qty-row\">\n              <div class=\"qty-ctrl\">\n                <button class=\"qty-btn\" (click)=\"decQty()\">\u2212</button>\n                <span>{{ qty() }}</span>\n                <button class=\"qty-btn\" (click)=\"incQty()\">+</button>\n              </div>\n              <span class=\"stock-note\" [class.low]=\"product()!.stock <= 5\">\n                {{ product()!.stock }} available\n              </span>\n            </div>\n          </div>\n\n          <!-- Actions -->\n          <div class=\"di-actions\">\n            <button class=\"btn btn-primary btn-lg\" (click)=\"addToCart()\" [disabled]=\"product()!.stock === 0\">\n              <span class=\"material-icons\">shopping_bag</span>\n              {{ product()!.stock === 0 ? 'Out of Stock' : 'Add to Bag' }}\n            </button>\n            <button class=\"btn btn-gold btn-lg\" (click)=\"buyNow()\" [disabled]=\"product()!.stock === 0\">\n              <span class=\"material-icons\">bolt</span>\n              Buy Now\n            </button>\n            <button class=\"btn btn-outline btn-icon\" (click)=\"toggleWish()\" [class.wished-btn]=\"isWish()\">\n              <span class=\"material-icons\">{{ isWish() ? 'favorite' : 'favorite_border' }}</span>\n            </button>\n          </div>\n\n          <!-- Tabs -->\n          <div class=\"di-tabs\">\n            <button *ngFor=\"let t of tabs\" class=\"tab-btn\" [class.active]=\"activeTab() === t\" (click)=\"activeTab.set(t)\">{{ t }}</button>\n          </div>\n          <div class=\"tab-content\">\n            <div *ngIf=\"activeTab() === 'Description'\">\n              <p class=\"tab-text\">{{ product()!.description }}</p>\n            </div>\n            <div *ngIf=\"activeTab() === 'Details'\">\n              <div class=\"specs\">\n                <div class=\"spec\"><span class=\"sk\">Fabric</span><span class=\"sv\">{{ product()!.fabric }}</span></div>\n                <div class=\"spec\"><span class=\"sk\">Length</span><span class=\"sv\">{{ product()!.length }}</span></div>\n                <div class=\"spec\"><span class=\"sk\">Blouse</span><span class=\"sv\">{{ product()!.blouseIncluded ? 'Included' : 'Not included' }}</span></div>\n                <div class=\"spec\"><span class=\"sk\">Origin</span><span class=\"sv\">{{ product()!.origin }}</span></div>\n                <div class=\"spec\"><span class=\"sk\">Occasion</span><span class=\"sv\">{{ product()!.occasion.join(', ') }}</span></div>\n                <div class=\"spec\"><span class=\"sk\">Colours</span><span class=\"sv\">{{ product()!.colors.join(', ') }}</span></div>\n              </div>\n            </div>\n            <div *ngIf=\"activeTab() === 'Care'\" class=\"tab-text\">\n              <ul class=\"care-list\">\n                <li>Dry clean only \u2014 do not machine wash silk sarees</li>\n                <li>Store wrapped in a soft muslin cloth away from direct sunlight</li>\n                <li>Avoid contact with perfume, hairspray, or deodorant</li>\n                <li>Fold with acid-free tissue paper to prevent zari tarnish</li>\n                <li>Iron on the reverse side on a low heat setting</li>\n              </ul>\n            </div>\n            <div *ngIf=\"activeTab() === 'Reviews'\">\n              <!-- Leave Review -->\n              <div *ngIf=\"auth.isLoggedIn()\" class=\"review-form\">\n                <h5>Leave a Review</h5>\n                <div class=\"star-select\">\n                  <button *ngFor=\"let s of [1,2,3,4,5]\" class=\"star-btn\" [class.filled]=\"s <= reviewRating()\"\n                    (click)=\"reviewRating.set(s)\">\u2605</button>\n                </div>\n                <textarea class=\"form-control\" [(ngModel)]=\"reviewComment\" placeholder=\"Share your experience...\" rows=\"3\"></textarea>\n                <button class=\"btn btn-primary btn-sm\" (click)=\"submitReview()\" [disabled]=\"submittingReview()\">\n                  {{ submittingReview() ? 'Submitting...' : 'Submit Review' }}\n                </button>\n              </div>\n              <p *ngIf=\"product()!.reviewCount === 0\" class=\"no-reviews\">No reviews yet. Be the first!</p>\n              <div class=\"reviews-list\" *ngIf=\"(product()!.reviews || []).length\">\n                <div class=\"review-card\" *ngFor=\"let review of (product()!.reviews || []).slice().reverse()\">\n                  <div class=\"review-head\">\n                    <div>\n                      <strong>{{ review.name }}</strong>\n                      <div class=\"review-stars\">{{ '\u2605'.repeat(review.rating) }}{{ '\u2606'.repeat(5 - review.rating) }}</div>\n                    </div>\n                    <span class=\"review-date\">{{ review.createdAt | date:'d MMM yyyy' }}</span>\n                  </div>\n                  <p>{{ review.comment }}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Tags -->\n          <div class=\"di-tags\">\n            <span *ngFor=\"let t of (product()!.tags || [])\" class=\"tag\">{{ t }}</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- Related Products -->\n      <div class=\"section container\" style=\"padding-bottom:80px\" *ngIf=\"related().length > 0\">\n        <div style=\"margin-bottom:40px\">\n          <div class=\"section-subtitle\">You May Also Like</div>\n          <h2 class=\"section-title\">Related Sarees</h2>\n          <div class=\"section-divider\"></div>\n        </div>\n        <div class=\"grid grid-4\">\n          <app-product-card *ngFor=\"let p of related()\" [product]=\"p\"></app-product-card>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!loading() && !product()\" class=\"empty-state container\" style=\"padding-top:80px\">\n      <span class=\"material-icons empty-icon\">search_off</span>\n      <h3>Product not found</h3>\n      <a routerLink=\"/products\" class=\"btn btn-primary\">Browse Collection</a>\n    </div>\n", styles: ["// Product Detail Component Styles\n\n// \u2500\u2500 Breadcrumb \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.breadcrumb-bar {\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n  padding: 12px 0;\n}\n\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  flex-wrap: wrap;\n\n  a {\n    text-decoration: none;\n    color: var(--text-muted);\n    transition: color 0.2s;\n\n    &:hover { color: var(--burgundy); }\n  }\n\n  .material-icons { font-size: 14px; color: var(--text-dim); }\n}\n\n// \u2500\u2500 Layout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.detail-layout {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n  padding-top: 40px;\n  padding-bottom: 80px;\n  align-items: start;\n}\n\n// \u2500\u2500 Gallery \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.main-img-wrap {\n  position: relative;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n}\n\n.main-img {\n  width: 100%;\n  aspect-ratio: 3 / 4;\n  object-fit: cover;\n  transition: transform 0.5s;\n\n  &:hover { transform: scale(1.02); }\n}\n\n.img-badges {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.wish-float {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.25s;\n\n  .material-icons { font-size: 19px; }\n\n  &:hover { border-color: var(--burgundy); color: var(--burgundy); transform: scale(1.05); }\n  &.wished { color: #e05252; border-color: #e05252; background: rgba(224,82,82,0.06); }\n}\n\n.thumbs {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n  flex-wrap: wrap;\n}\n\n.thumb {\n  width: 72px;\n  height: 96px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 2px solid var(--border);\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &.active, &:hover {\n    border-color: var(--burgundy);\n    box-shadow: 0 2px 8px rgba(123,30,58,0.2);\n  }\n}\n\n// \u2500\u2500 Product Info \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.di-category {\n  font-size: 0.68rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 8px;\n}\n\n.di-name {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 400;\n  color: var(--text);\n  margin-bottom: 12px;\n  line-height: 1.15;\n}\n\n.di-rating {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.stars {\n  color: var(--gold-warm);\n  font-size: 0.9rem;\n  letter-spacing: 2px;\n}\n\n.rating-num { font-weight: 600; color: var(--text); font-size: 0.9rem; }\n.review-ct { font-size: 0.8rem; color: var(--text-muted); }\n.dot { color: var(--text-dim); }\n.in-stock { font-size: 0.78rem; color: var(--success); font-weight: 600; }\n.oos { font-size: 0.78rem; color: var(--error); font-weight: 600; }\n\n.di-price-row {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n\n.di-price {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--burgundy);\n}\n\n.di-orig {\n  text-decoration: line-through;\n  color: var(--text-dim);\n  font-size: 1rem;\n}\n\n.di-disc {\n  background: var(--burgundy-pale);\n  color: var(--burgundy);\n  padding: 3px 10px;\n  border-radius: 3px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n\n.tax-note {\n  font-size: 0.73rem;\n  color: var(--text-dim);\n  margin-bottom: 24px;\n}\n\n// Section grouping\n.di-section {\n  margin-bottom: 20px;\n\n  h4 {\n    font-size: 0.7rem;\n    letter-spacing: 0.14em;\n    text-transform: uppercase;\n    color: var(--text-muted);\n    margin-bottom: 10px;\n    font-weight: 600;\n    font-family: var(--font-body);\n\n    em { color: var(--burgundy); font-style: normal; font-weight: 600; }\n  }\n}\n\n// Color chips\n.color-chips { display: flex; flex-wrap: wrap; gap: 8px; }\n\n.color-chip {\n  padding: 7px 18px;\n  border: 1.5px solid var(--border);\n  border-radius: 2px;\n  background: transparent;\n  color: var(--text-muted);\n  font-size: 0.82rem;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &.active, &:hover {\n    border-color: var(--burgundy);\n    color: var(--burgundy);\n    background: var(--burgundy-pale);\n  }\n}\n\n// Qty control\n.qty-row { display: flex; align-items: center; gap: 16px; }\n\n.qty-ctrl {\n  display: inline-flex;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  transition: border-color 0.2s;\n\n  &:hover { border-color: var(--border-strong); }\n\n  span {\n    padding: 0 22px;\n    font-size: 1rem;\n    color: var(--text);\n    display: flex;\n    align-items: center;\n    min-width: 48px;\n    justify-content: center;\n    line-height: 1;\n  }\n}\n\n.qty-btn {\n  width: 42px;\n  height: 42px;\n  background: var(--surface);\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover { background: var(--burgundy-pale); color: var(--burgundy); }\n}\n\n.stock-note {\n  font-size: 0.78rem;\n  color: var(--success);\n  font-weight: 500;\n\n  &.low { color: var(--warning); }\n}\n\n// Action buttons\n.di-actions {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n\n  .btn-icon {\n    width: 52px;\n    height: 52px;\n    flex-shrink: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .wished-btn { color: var(--error); border-color: var(--error); }\n}\n\n// Tabs\n.di-tabs {\n  display: flex;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 20px;\n}\n\n.tab-btn {\n  padding: 10px 20px;\n  background: none;\n  border: none;\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n  transition: all 0.2s;\n\n  &.active { color: var(--burgundy); border-bottom-color: var(--burgundy); }\n  &:hover:not(.active) { color: var(--text); }\n}\n\n.tab-text {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  line-height: 1.8;\n}\n\n// Specs\n.specs { display: flex; flex-direction: column; }\n\n.spec {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(107, 84, 71, 0.07);\n\n  &:last-child { border-bottom: none; }\n}\n\n.sk { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-dim); flex-shrink: 0; }\n.sv { font-size: 0.875rem; color: var(--text-muted); text-align: right; }\n\n// Care list\n.care-list {\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  line-height: 1.6;\n}\n\n// Review form\n.review-form {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 18px;\n  margin-bottom: 16px;\n\n  h5 { font-family: var(--font-display); font-size: 1rem; color: var(--text); margin-bottom: 12px; }\n}\n\n.star-select { display: flex; gap: 4px; margin-bottom: 12px; }\n\n.star-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: var(--text-dim);\n  transition: all 0.15s;\n  padding: 0 1px;\n\n  &.filled { color: var(--gold-warm); transform: scale(1.1); }\n  &:hover { color: var(--gold-warm); }\n}\n\n.no-reviews { color: var(--text-dim); font-size: 0.875rem; }\n\n.reviews-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 16px;\n}\n\n.review-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  background: white;\n  padding: 16px;\n\n  p {\n    color: var(--text-muted);\n    margin-top: 8px;\n    line-height: 1.7;\n  }\n}\n\n.review-head {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  align-items: flex-start;\n}\n\n.review-stars {\n  color: var(--gold-warm);\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.review-date {\n  font-size: 0.75rem;\n  color: var(--text-dim);\n}\n\n// Tags\n.di-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }\n\n.tag {\n  padding: 4px 12px;\n  border: 1px solid var(--border);\n  border-radius: 100px;\n  font-size: 0.68rem;\n  color: var(--text-muted);\n  letter-spacing: 0.06em;\n  transition: all 0.2s;\n\n  &:hover { border-color: var(--burgundy); color: var(--burgundy); }\n}\n\n// \u2500\u2500 Skeleton \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.detail-skeleton {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n}\n\n.ds-img {\n  aspect-ratio: 3 / 4;\n  background: linear-gradient(90deg, var(--surface) 25%, var(--bg-2) 50%, var(--surface) 75%);\n  background-size: 400px 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: var(--radius-lg);\n}\n\n.ds-info { display: flex; flex-direction: column; gap: 16px; padding-top: 20px; }\n\n.skel-line {\n  height: 14px;\n  background: linear-gradient(90deg, var(--surface) 25%, var(--bg-2) 50%, var(--surface) 75%);\n  background-size: 400px 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n\n  &.sm { width: 30%; height: 10px; }\n  &.md { width: 60%; height: 10px; }\n  &.xl { height: 32px; }\n}\n\n@keyframes shimmer {\n  0% { background-position: -400px 0; }\n  100% { background-position: 400px 0; }\n}\n\n// \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media (max-width: 960px) {\n  .detail-layout { grid-template-columns: 1fr; gap: 32px; }\n  .detail-skeleton { grid-template-columns: 1fr; }\n  .di-name { font-size: 1.7rem; }\n}\n\n@media (max-width: 480px) {\n  .thumbs { gap: 6px; }\n  .thumb { width: 60px; height: 80px; }\n  .tab-btn { padding: 10px 14px; font-size: 0.68rem; }\n}\n\n/* \u2500\u2500 Additional Mobile Responsive \u2500\u2500 */\n@media (max-width: 768px) {\n  .detail-layout { grid-template-columns: 1fr; gap: 24px; padding-top: 24px; padding-bottom: 56px; }\n  .detail-skeleton { grid-template-columns: 1fr; }\n  .di-name { font-size: 1.5rem; }\n  .di-price { font-size: 1.6rem; }\n  .di-actions { flex-wrap: wrap; .btn-lg { flex: 1; min-width: 200px; } }\n  .thumbs { gap: 6px; }\n  .thumb { width: 60px; height: 80px; }\n}\n\n@media (max-width: 480px) {\n  .breadcrumb-bar { display: none; }\n  .di-name { font-size: 1.3rem; }\n  .di-rating { font-size: 0.8rem; gap: 6px; }\n  .tab-btn { padding: 8px 10px; font-size: 0.65rem; letter-spacing: 0.06em; }\n  .di-actions .btn-lg { padding: 13px 20px; font-size: 0.75rem; }\n  .color-chip { padding: 6px 12px; font-size: 0.78rem; }\n  .qty-ctrl span { padding: 0 14px; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\components\\product-detail\\product-detail.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=product-detail.component.js.map