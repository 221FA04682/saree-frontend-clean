import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { ToastService } from '../../services/toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => [1, 2, 3];
const _c1 = () => [1, 2];
const _c2 = () => ["delivered", "cancelled", "returned"];
function MyOrdersComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r0.orders().length, " order", ctx_r0.orders().length !== 1 ? "s" : "", " placed");
} }
function MyOrdersComponent_div_9_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelement(3, "div", 21)(4, "div", 22);
    i0.ɵɵelementEnd()();
} }
function MyOrdersComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13);
    i0.ɵɵelement(2, "div", 14)(3, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 16);
    i0.ɵɵtemplate(5, MyOrdersComponent_div_9_div_1_div_5_Template, 5, 0, "div", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(1, _c1));
} }
function MyOrdersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, MyOrdersComponent_div_9_div_1_Template, 6, 2, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(1, _c0));
} }
function MyOrdersComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    i0.ɵɵtext(3, "receipt_long");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5, "No orders yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "You haven't placed any orders. Start exploring our heritage saree collection.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 26)(9, "span", 25);
    i0.ɵɵtext(10, "auto_awesome");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " Explore Collection ");
    i0.ɵɵelementEnd()();
} }
function MyOrdersComponent_div_11_div_1_div_21_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 63);
    i0.ɵɵtext(1, "check");
    i0.ɵɵelementEnd();
} }
function MyOrdersComponent_div_11_div_1_div_21_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r4 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r4 + 1);
} }
function MyOrdersComponent_div_11_div_1_div_21_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 65);
} if (rf & 2) {
    const i_r4 = i0.ɵɵnextContext().index;
    const o_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("filled", ctx_r0.isStepDone(o_r3.status, i_r4));
} }
function MyOrdersComponent_div_11_div_1_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 58);
    i0.ɵɵtemplate(2, MyOrdersComponent_div_11_div_1_div_21_div_1_span_2_Template, 2, 0, "span", 59)(3, MyOrdersComponent_div_11_div_1_div_21_div_1_span_3_Template, 2, 1, "span", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 61);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, MyOrdersComponent_div_11_div_1_div_21_div_1_div_6_Template, 1, 2, "div", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const o_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("done", ctx_r0.isStepDone(o_r3.status, i_r4))("active", ctx_r0.isCurrentStep(o_r3.status, i_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isStepDone(o_r3.status, i_r4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isStepDone(o_r3.status, i_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r4 < ctx_r0.trackSteps.length - 1);
} }
function MyOrdersComponent_div_11_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵtemplate(1, MyOrdersComponent_div_11_div_1_div_21_div_1_Template, 7, 8, "div", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.trackSteps);
} }
function MyOrdersComponent_div_11_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66)(1, "span", 25);
    i0.ɵɵtext(2, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Order ", i0.ɵɵpipeBind1(4, 1, o_r3.status), " ");
} }
function MyOrdersComponent_div_11_div_1_div_24_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 74);
    i0.ɵɵtext(1, "\u00B7");
    i0.ɵɵelementEnd();
} }
function MyOrdersComponent_div_11_div_1_div_24_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.color);
} }
function MyOrdersComponent_div_11_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67)(1, "img", 68);
    i0.ɵɵlistener("error", function MyOrdersComponent_div_11_div_1_div_24_Template_img_error_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onImgErr($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 69)(3, "div", 70);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 71)(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, MyOrdersComponent_div_11_div_1_div_24_span_8_Template, 2, 0, "span", 72)(9, MyOrdersComponent_div_11_div_1_div_24_span_9_Template, 2, 1, "span", 73);
    i0.ɵɵelementStart(10, "span", 74);
    i0.ɵɵtext(11, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 75);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", item_r7.productImage, i0.ɵɵsanitizeUrl)("alt", item_r7.productName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r7.productName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Qty ", item_r7.quantity, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r7.color);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r7.color);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r7.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.ps.formatPrice(item_r7.price * item_r7.quantity));
} }
function MyOrdersComponent_div_11_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" +", o_r3.items.length - 2, " more item", o_r3.items.length - 2 > 1 ? "s" : "", " ");
} }
function MyOrdersComponent_div_11_div_1_div_26_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 93)(1, "img", 94);
    i0.ɵɵlistener("error", function MyOrdersComponent_div_11_div_1_div_26_div_1_div_4_Template_img_error_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.onImgErr($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 95)(3, "div", 96);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 97);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 98);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", item_r9.productImage, i0.ɵɵsanitizeUrl)("alt", item_r9.productName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r9.productName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Qty ", item_r9.quantity, "", item_r9.color ? " \u00B7 " + item_r9.color : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.ps.formatPrice(item_r9.price * item_r9.quantity));
} }
function MyOrdersComponent_div_11_div_1_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80)(1, "h4", 81);
    i0.ɵɵtext(2, "All Items");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 91);
    i0.ɵɵtemplate(4, MyOrdersComponent_div_11_div_1_div_26_div_1_div_4_Template, 9, 6, "div", 92);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", o_r3.items);
} }
function MyOrdersComponent_div_11_div_1_div_26_div_52_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 101);
    i0.ɵɵelement(1, "div", 102);
    i0.ɵɵelementStart(2, "div", 103)(3, "div", 104);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 105);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ev_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMap("te-" + ev_r10.status);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ev_r10.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ev_r10.location, " \u00B7 ", i0.ɵɵpipeBind2(7, 5, ev_r10.timestamp, "d MMM, h:mm a"), "");
} }
function MyOrdersComponent_div_11_div_1_div_26_div_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80)(1, "h4", 81);
    i0.ɵɵtext(2, "Tracking History");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 99);
    i0.ɵɵtemplate(4, MyOrdersComponent_div_11_div_1_div_26_div_52_div_4_Template, 8, 8, "div", 100);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", o_r3.trackingEvents.slice().reverse());
} }
function MyOrdersComponent_div_11_div_1_div_26_div_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 106)(1, "span", 25);
    i0.ɵɵtext(2, "local_shipping");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Estimated delivery: ");
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const o_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 1, o_r3.estimatedDelivery, "EEEE, d MMMM yyyy"));
} }
function MyOrdersComponent_div_11_div_1_div_26_div_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "span", 25);
    i0.ɵɵtext(2, "check_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Delivered on ");
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const o_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 1, o_r3.deliveredAt, "d MMMM yyyy"));
} }
function MyOrdersComponent_div_11_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77);
    i0.ɵɵtemplate(1, MyOrdersComponent_div_11_div_1_div_26_div_1_Template, 5, 1, "div", 78);
    i0.ɵɵelementStart(2, "div", 79)(3, "div", 80)(4, "h4", 81);
    i0.ɵɵtext(5, "Delivery Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 82)(7, "div", 83);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 84)(14, "span", 25);
    i0.ɵɵtext(15, "phone");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 80)(18, "h4", 81);
    i0.ɵɵtext(19, "Payment Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 85)(21, "div", 86)(22, "span");
    i0.ɵɵtext(23, "Method");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 86)(27, "span");
    i0.ɵɵtext(28, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span");
    i0.ɵɵtext(30);
    i0.ɵɵpipe(31, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 86)(33, "span");
    i0.ɵɵtext(34, "Subtotal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "span");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 86)(38, "span");
    i0.ɵɵtext(39, "Shipping");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "span");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 86)(43, "span");
    i0.ɵɵtext(44, "GST (5%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "span");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 87)(48, "span");
    i0.ɵɵtext(49, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "span", 88);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(52, MyOrdersComponent_div_11_div_1_div_26_div_52_Template, 5, 1, "div", 78);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(53, MyOrdersComponent_div_11_div_1_div_26_div_53_Template, 8, 4, "div", 89)(54, MyOrdersComponent_div_11_div_1_div_26_div_54_Template, 8, 4, "div", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", o_r3.items.length > 2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(o_r3.shippingAddress.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r3.shippingAddress.street);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", o_r3.shippingAddress.city, ", ", o_r3.shippingAddress.state, " \u2014 ", o_r3.shippingAddress.pincode, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", o_r3.shippingAddress.phone, " ");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(o_r3.paymentMethod);
    i0.ɵɵadvance(4);
    i0.ɵɵclassMap(o_r3.paymentStatus === "paid" ? "paid-tag" : "pending-tag");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(31, 20, o_r3.paymentStatus));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.ps.formatPrice(o_r3.subtotal));
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("free", o_r3.shipping === 0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(o_r3.shipping === 0 ? "FREE" : ctx_r0.ps.formatPrice(o_r3.shipping));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.ps.formatPrice(o_r3.tax));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.ps.formatPrice(o_r3.total));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", o_r3.trackingEvents == null ? null : o_r3.trackingEvents.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", o_r3.estimatedDelivery && !i0.ɵɵpureFunction0(22, _c2).includes(o_r3.status));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", o_r3.status === "delivered" && o_r3.deliveredAt);
} }
function MyOrdersComponent_div_11_div_1_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108)(1, "span", 25);
    i0.ɵɵtext(2, "local_shipping");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", o_r3.trackingNumber, " ");
} }
function MyOrdersComponent_div_11_div_1_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 109);
    i0.ɵɵlistener("click", function MyOrdersComponent_div_11_div_1_button_42_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const o_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.cancelOrder(o_r3._id)); });
    i0.ɵɵelementStart(1, "span", 25);
    i0.ɵɵtext(2, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Cancel Order ");
    i0.ɵɵelementEnd();
} }
function MyOrdersComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29);
    i0.ɵɵlistener("click", function MyOrdersComponent_div_11_div_1_Template_div_click_1_listener() { const o_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggleExpand(o_r3._id)); });
    i0.ɵɵelementStart(2, "div", 30)(3, "div", 31)(4, "span", 32);
    i0.ɵɵtext(5, "receipt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 33);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 34);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 35)(12, "span", 36);
    i0.ɵɵelement(13, "span", 37);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 38);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 39);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 40);
    i0.ɵɵtemplate(21, MyOrdersComponent_div_11_div_1_div_21_Template, 2, 1, "div", 41)(22, MyOrdersComponent_div_11_div_1_div_22_Template, 5, 3, "div", 42);
    i0.ɵɵelementStart(23, "div", 43);
    i0.ɵɵtemplate(24, MyOrdersComponent_div_11_div_1_div_24_Template, 16, 8, "div", 44)(25, MyOrdersComponent_div_11_div_1_div_25_Template, 2, 2, "div", 45);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, MyOrdersComponent_div_11_div_1_div_26_Template, 55, 23, "div", 46);
    i0.ɵɵelementStart(27, "div", 47)(28, "div", 48)(29, "div", 49)(30, "span", 25);
    i0.ɵɵtext(31, "payment");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(32);
    i0.ɵɵelementStart(33, "span", 50);
    i0.ɵɵtext(34);
    i0.ɵɵpipe(35, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(36, MyOrdersComponent_div_11_div_1_div_36_Template, 4, 1, "div", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "div", 52)(38, "button", 53);
    i0.ɵɵlistener("click", function MyOrdersComponent_div_11_div_1_Template_button_click_38_listener() { const o_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.downloadInvoice(o_r3._id, o_r3.orderNumber)); });
    i0.ɵɵelementStart(39, "span", 25);
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(42, MyOrdersComponent_div_11_div_1_button_42_Template, 4, 0, "button", 54);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const o_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("expanded", ctx_r0.expandedOrder() === o_r3._id);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(o_r3.orderNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 24, o_r3.createdAt, "d MMMM yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap("status-" + o_r3.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 27, o_r3.status), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.ps.formatPrice(o_r3.total));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.expandedOrder() === o_r3._id ? "expand_less" : "expand_more");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", o_r3.status !== "cancelled" && o_r3.status !== "returned");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", o_r3.status === "cancelled" || o_r3.status === "returned");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", o_r3.items.slice(0, 2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", o_r3.items.length > 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.expandedOrder() === o_r3._id);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", o_r3.paymentMethod, " ");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(o_r3.paymentStatus === "paid" ? "pay-paid" : "pay-pending");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u00B7 ", i0.ɵɵpipeBind1(35, 29, o_r3.paymentStatus), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", o_r3.trackingNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.downloading() === o_r3._id + "-inv")("title", "Download Invoice");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.downloading() === o_r3._id + "-inv" ? "hourglass_top" : "receipt_long");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.downloading() === o_r3._id + "-inv" ? "Generating..." : "Download Invoice", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.canCancel(o_r3.status));
} }
function MyOrdersComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, MyOrdersComponent_div_11_div_1_Template, 43, 31, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.orders());
} }
export class MyOrdersComponent {
    constructor() {
        this.orderService = inject(OrderService);
        this.ps = inject(ProductService);
        this.toast = inject(ToastService);
        this.orders = signal([]);
        this.loading = signal(true);
        this.downloading = signal('');
        this.expandedOrder = signal(null);
        this.trackSteps = ['Ordered', 'Confirmed', 'Processing', 'Shipped', 'Delivered'];
        this.statusIdx = {
            pending: 0, confirmed: 1, processing: 2,
            shipped: 3, out_for_delivery: 3, delivered: 4
        };
    }
    ngOnInit() {
        this.orderService.getMyOrders().subscribe({
            next: (r) => { this.orders.set(r.orders); this.loading.set(false); },
            error: () => this.loading.set(false),
        });
    }
    isStepDone(status, i) { return (this.statusIdx[status] ?? 0) > i; }
    isCurrentStep(status, i) { return (this.statusIdx[status] ?? 0) === i; }
    canCancel(status) { return ['pending', 'confirmed'].includes(status); }
    toggleExpand(id) { this.expandedOrder.update(cur => cur === id ? null : id); }
    // Users only get Invoice download
    downloadInvoice(orderId, orderNum) {
        this.downloading.set(orderId + '-inv');
        this.orderService.downloadInvoice(orderId).subscribe({
            next: (blob) => {
                this._saveBlob(blob, `invoice-${orderNum}.pdf`);
                this.downloading.set('');
                this.toast.success('Invoice downloaded!');
            },
            error: (e) => { this.toast.error(e.message || 'Download failed'); this.downloading.set(''); },
        });
    }
    cancelOrder(id) {
        if (!confirm('Are you sure you want to cancel this order?'))
            return;
        this.orderService.cancelOrder(id, 'Cancelled by customer').subscribe({
            next: (r) => {
                this.toast.success(r.message);
                this.orders.update(os => os.map(o => o._id === id ? { ...o, status: 'cancelled' } : o));
            },
            error: (e) => this.toast.error(e.message),
        });
    }
    _saveBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    onImgErr(e) {
        e.target.src = 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=100';
    }
    static { this.ɵfac = function MyOrdersComponent_Factory(t) { return new (t || MyOrdersComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyOrdersComponent, selectors: [["app-my-orders"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 12, vars: 4, consts: [[1, "page-header"], [1, "container"], [1, "section-subtitle"], [1, "section-title"], [1, "section-divider"], ["class", "header-desc", 4, "ngIf"], [1, "container", "orders-page"], ["class", "orders-list", 4, "ngIf"], ["class", "orders-empty", 4, "ngIf"], [1, "header-desc"], [1, "orders-list"], ["class", "order-skeleton", 4, "ngFor", "ngForOf"], [1, "order-skeleton"], [1, "sk-header"], [1, "sk-line", "w40"], [1, "sk-line", "w20"], [1, "sk-body"], ["class", "sk-item", 4, "ngFor", "ngForOf"], [1, "sk-item"], [1, "sk-img"], [1, "sk-info"], [1, "sk-line", "w60"], [1, "sk-line", "w30"], [1, "orders-empty"], [1, "empty-icon-wrap"], [1, "material-icons"], ["routerLink", "/products", 1, "btn", "btn-primary", "btn-lg"], ["class", "order-card", 3, "expanded", 4, "ngFor", "ngForOf"], [1, "order-card"], [1, "oc-header", 3, "click"], [1, "oc-left"], [1, "oc-order-num"], [1, "material-icons", "oc-icon"], [1, "order-num-text"], [1, "oc-date"], [1, "oc-right"], [1, "status-pill"], [1, "status-dot"], [1, "oc-total-header"], [1, "material-icons", "expand-icon"], [1, "oc-body"], ["class", "progress-track", 4, "ngIf"], ["class", "cancelled-bar", 4, "ngIf"], [1, "items-preview"], ["class", "preview-item", 4, "ngFor", "ngForOf"], ["class", "more-items", 4, "ngIf"], ["class", "oc-expanded", 4, "ngIf"], [1, "oc-footer"], [1, "oc-footer-left"], [1, "oc-payment-chip"], [1, "pay-status"], ["class", "oc-ship-chip", 4, "ngIf"], [1, "oc-footer-actions"], [1, "action-btn", "invoice-btn", 3, "click", "disabled", "title"], ["class", "action-btn cancel-btn", 3, "click", 4, "ngIf"], [1, "progress-track"], ["class", "progress-step", 3, "done", "active", 4, "ngFor", "ngForOf"], [1, "progress-step"], [1, "ps-node"], ["class", "material-icons ps-check", 4, "ngIf"], ["class", "ps-num", 4, "ngIf"], [1, "ps-label"], ["class", "ps-connector", 3, "filled", 4, "ngIf"], [1, "material-icons", "ps-check"], [1, "ps-num"], [1, "ps-connector"], [1, "cancelled-bar"], [1, "preview-item"], [1, "pi-img", 3, "error", "src", "alt"], [1, "pi-info"], [1, "pi-name"], [1, "pi-meta"], ["class", "meta-sep", 4, "ngIf"], [4, "ngIf"], [1, "meta-sep"], [1, "pi-price"], [1, "more-items"], [1, "oc-expanded"], ["class", "expanded-section", 4, "ngIf"], [1, "exp-row-grid"], [1, "expanded-section"], [1, "exp-title"], [1, "exp-addr"], [1, "addr-name"], [1, "addr-phone"], [1, "payment-summary"], [1, "ps-row"], [1, "ps-row", "total-row"], [1, "total-amt"], ["class", "delivery-estimate", 4, "ngIf"], ["class", "delivered-notice", 4, "ngIf"], [1, "all-items"], ["class", "exp-item", 4, "ngFor", "ngForOf"], [1, "exp-item"], [1, "ei-img", 3, "error", "src", "alt"], [1, "ei-info"], [1, "ei-name"], [1, "ei-meta"], [1, "ei-price"], [1, "tracking-timeline"], ["class", "track-event", 4, "ngFor", "ngForOf"], [1, "track-event"], [1, "te-dot"], [1, "te-info"], [1, "te-desc"], [1, "te-meta"], [1, "delivery-estimate"], [1, "delivered-notice"], [1, "oc-ship-chip"], [1, "action-btn", "cancel-btn", 3, "click"]], template: function MyOrdersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtext(3, "Account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1", 3);
            i0.ɵɵtext(5, "My Orders");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 4);
            i0.ɵɵtemplate(7, MyOrdersComponent_p_7_Template, 2, 2, "p", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵtemplate(9, MyOrdersComponent_div_9_Template, 2, 2, "div", 7)(10, MyOrdersComponent_div_10_Template, 12, 0, "div", 8)(11, MyOrdersComponent_div_11_Template, 2, 1, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", !ctx.loading());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading() && ctx.orders().length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading() && ctx.orders().length > 0);
        } }, dependencies: [RouterLink, CommonModule, i1.NgForOf, i1.NgIf, i1.TitleCasePipe, i1.DatePipe], styles: ["//[_ngcontent-%COMP%]   My[_ngcontent-%COMP%]   Orders[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n.orders-page[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-bottom: 80px;\n  max-width: 900px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Skeleton[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.orders-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 20px; }\n\n.order-skeleton[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n\n.sk-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  background: var(--surface);\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.sk-body[_ngcontent-%COMP%] { padding: 20px 24px; display: flex; flex-direction: column; gap: 12px; }\n\n.sk-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n\n.sk-img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 70px;\n  background: linear-gradient(90deg, var(--surface) 25%, var(--bg-2) 50%, var(--surface) 75%);\n  background-size: 400px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: var(--radius-sm);\n  flex-shrink: 0;\n}\n\n.sk-info[_ngcontent-%COMP%] { flex: 1; display: flex; flex-direction: column; gap: 8px; }\n\n.sk-line[_ngcontent-%COMP%] {\n  height: 12px;\n  background: linear-gradient(90deg, var(--surface) 25%, var(--bg-2) 50%, var(--surface) 75%);\n  background-size: 400px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n\n.w20[_ngcontent-%COMP%] { width: 20%; }\n.w30[_ngcontent-%COMP%] { width: 30%; }\n.w40[_ngcontent-%COMP%] { width: 40%; }\n.w60[_ngcontent-%COMP%] { width: 60%; }\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% { background-position: -400px 0; }\n  100% { background-position: 400px 0; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Empty[_ngcontent-%COMP%]   State[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.orders-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n\n  .empty-icon-wrap {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    background: var(--burgundy-pale);\n    border: 2px solid rgba(123, 30, 58, 0.15);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto 24px;\n\n    .material-icons {\n      font-size: 36px;\n      color: var(--burgundy);\n    }\n  }\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.8rem;\n    color: var(--text);\n    margin-bottom: 10px;\n  }\n\n  p {\n    color: var(--text-muted);\n    font-size: 0.95rem;\n    max-width: 380px;\n    margin: 0 auto 28px;\n    line-height: 1.7;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Order[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.order-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  transition: box-shadow 0.3s, border-color 0.3s;\n\n  &:hover { box-shadow: var(--shadow-md); }\n  &.expanded { border-color: var(--border-warm); box-shadow: var(--shadow-md); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Header[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.oc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  user-select: none;\n  transition: background 0.2s;\n\n  &:hover { background: var(--bg-2); }\n}\n\n.oc-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.oc-order-num[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  .oc-icon {\n    font-size: 18px;\n    color: var(--burgundy);\n  }\n}\n\n.order-num-text[_ngcontent-%COMP%] {\n  font-family: 'Courier New', monospace;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: 0.04em;\n}\n\n.oc-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n\n.oc-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n//[_ngcontent-%COMP%]   Status[_ngcontent-%COMP%]   pill\n.status-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n\n  .status-dot {\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: currentColor;\n  }\n}\n\n.status-pending[_ngcontent-%COMP%], .status-confirmed[_ngcontent-%COMP%], .status-processing[_ngcontent-%COMP%] { background: rgba(107,84,71,0.1); color: var(--text-muted); }\n.status-shipped[_ngcontent-%COMP%], .status-out_for_delivery[_ngcontent-%COMP%] { background: rgba(201,149,42,0.12); color: var(--gold-warm); }\n.status-delivered[_ngcontent-%COMP%] { background: rgba(45,122,79,0.12); color: var(--success); }\n.status-cancelled[_ngcontent-%COMP%], .status-returned[_ngcontent-%COMP%] { background: rgba(192,57,43,0.1); color: var(--error); }\n\n.oc-total-header[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: var(--burgundy);\n  font-weight: 400;\n}\n\n.expand-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n  transition: transform 0.2s;\n  .expanded & { transform: rotate(180deg); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Body[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.oc-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n}\n\n//[_ngcontent-%COMP%]   Progress[_ngcontent-%COMP%]   tracker\n.progress-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n  padding: 0 8px;\n}\n\n.progress-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  position: relative;\n\n  &:last-child .ps-connector { display: none; }\n}\n\n.ps-node[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n  z-index: 1;\n  position: relative;\n\n  .ps-check { font-size: 14px; }\n  .ps-num { font-size: 0.75rem; color: var(--text-muted); font-weight: 600; }\n}\n\n.progress-step.done[_ngcontent-%COMP%]   .ps-node[_ngcontent-%COMP%] {\n  background: var(--success);\n  border-color: var(--success);\n  color: white;\n}\n\n.progress-step.active[_ngcontent-%COMP%]   .ps-node[_ngcontent-%COMP%] {\n  background: var(--burgundy);\n  border-color: var(--burgundy);\n  color: white;\n  box-shadow: 0 0 0 4px rgba(123,30,58,0.15);\n}\n\n.ps-label[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  margin-top: 6px;\n  text-align: center;\n}\n\n.progress-step.done[_ngcontent-%COMP%]   .ps-label[_ngcontent-%COMP%], .progress-step.active[_ngcontent-%COMP%]   .ps-label[_ngcontent-%COMP%] { color: var(--burgundy); }\n\n.ps-connector[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 50%;\n  right: -50%;\n  height: 2px;\n  background: var(--border);\n  z-index: 0;\n  transition: background 0.3s;\n}\n\n.ps-connector.filled[_ngcontent-%COMP%] { background: var(--success); }\n\n.cancelled-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  background: rgba(192,57,43,0.08);\n  border: 1px solid rgba(192,57,43,0.2);\n  border-radius: var(--radius-md);\n  color: var(--error);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 16px;\n\n  .material-icons { font-size: 18px; }\n}\n\n//[_ngcontent-%COMP%]   Items[_ngcontent-%COMP%]   preview\n.items-preview[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 0; }\n\n.preview-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 0;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n\n  &:last-child { border-bottom: none; }\n}\n\n.pi-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 67px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n}\n\n.pi-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n\n.pi-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.pi-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  margin-top: 3px;\n\n  .meta-sep { color: var(--text-dim); }\n}\n\n.pi-price[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  color: var(--burgundy);\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n\n.more-items[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--gold-warm);\n  padding: 8px 0;\n  font-style: italic;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Expanded[_ngcontent-%COMP%]   Content[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.oc-expanded[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: var(--surface);\n  border-top: 1px solid var(--border);\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }\n\n.exp-row-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-top: 16px;\n}\n\n.expanded-section[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 18px;\n}\n\n.exp-title[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 14px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--border);\n  font-family: var(--font-body);\n  font-weight: 600;\n}\n\n//[_ngcontent-%COMP%]   Address\n.exp-addr[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n\n  .addr-name {\n    font-weight: 600;\n    color: var(--text);\n    font-size: 0.9rem;\n    margin-bottom: 3px;\n  }\n\n  .addr-phone {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    margin-top: 4px;\n    color: var(--text-muted);\n\n    .material-icons { font-size: 13px; }\n  }\n}\n\n//[_ngcontent-%COMP%]   Payment[_ngcontent-%COMP%]   summary\n.payment-summary[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 0; }\n\n.ps-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  padding: 7px 0;\n  border-bottom: 1px solid rgba(107,84,71,0.05);\n\n  &:last-child { border-bottom: none; }\n\n  &.total-row {\n    font-size: 0.9rem;\n    font-weight: 600;\n    color: var(--text);\n    padding-top: 10px;\n  }\n\n  .paid-tag { color: var(--success); font-weight: 600; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em; }\n  .pending-tag { color: var(--warning); font-weight: 600; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em; }\n  .free { color: var(--success); font-weight: 600; }\n}\n\n.total-amt[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.15rem;\n  color: var(--burgundy);\n}\n\n//[_ngcontent-%COMP%]   Tracking[_ngcontent-%COMP%]   timeline\n.tracking-timeline[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 12px; }\n\n.track-event[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n\n.te-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-top: 4px;\n  flex-shrink: 0;\n  background: var(--text-dim);\n\n  &.te-delivered { background: var(--success); }\n  &.te-shipped, &.te-out_for_delivery { background: var(--gold-warm); }\n  &.te-cancelled { background: var(--error); }\n  &.te-confirmed, &.te-processing { background: var(--burgundy); }\n}\n\n.te-desc[_ngcontent-%COMP%] { font-size: 0.82rem; color: var(--text); }\n.te-meta[_ngcontent-%COMP%] { font-size: 0.72rem; color: var(--text-muted); margin-top: 1px; }\n\n//[_ngcontent-%COMP%]   All[_ngcontent-%COMP%]   items\n.all-items[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n\n.exp-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n  &:last-child { border-bottom: none; }\n}\n\n.ei-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 58px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n}\n\n.ei-info[_ngcontent-%COMP%] { flex: 1; }\n.ei-name[_ngcontent-%COMP%] { font-size: 0.875rem; color: var(--text); }\n.ei-meta[_ngcontent-%COMP%] { font-size: 0.72rem; color: var(--text-muted); }\n.ei-price[_ngcontent-%COMP%] { font-family: var(--font-display); color: var(--burgundy); font-size: 0.9rem; }\n\n//[_ngcontent-%COMP%]   Delivery[_ngcontent-%COMP%]   notices\n.delivery-estimate[_ngcontent-%COMP%], .delivered-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  margin-top: 16px;\n  font-size: 0.875rem;\n\n  .material-icons { font-size: 18px; }\n  strong { color: var(--text); }\n}\n\n.delivery-estimate[_ngcontent-%COMP%] {\n  background: var(--gold-pale);\n  border: 1px solid var(--border-warm);\n  color: var(--gold-warm);\n}\n\n.delivered-notice[_ngcontent-%COMP%] {\n  background: rgba(45,122,79,0.08);\n  border: 1px solid rgba(45,122,79,0.2);\n  color: var(--success);\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Footer[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.oc-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 24px;\n  background: white;\n  border-top: 1px solid var(--border);\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.oc-footer-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.oc-payment-chip[_ngcontent-%COMP%], .oc-ship-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n\n  .material-icons { font-size: 14px; }\n}\n\n.pay-status[_ngcontent-%COMP%] {\n  font-weight: 600;\n  &.pay-paid { color: var(--success); }\n  &.pay-pending { color: var(--warning); }\n}\n\n.oc-footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n//[_ngcontent-%COMP%]   Action[_ngcontent-%COMP%]   buttons\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 18px;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  cursor: pointer;\n  transition: all 0.25s;\n  border: 1.5px solid;\n\n  .material-icons { font-size: 15px; }\n\n  &:disabled { opacity: 0.55; cursor: not-allowed; }\n}\n\n.invoice-btn[_ngcontent-%COMP%] {\n  background: var(--burgundy);\n  border-color: var(--burgundy);\n  color: white;\n  box-shadow: 0 3px 12px rgba(123,30,58,0.22);\n\n  &:hover:not(:disabled) {\n    background: var(--burgundy-light);\n    transform: translateY(-1px);\n    box-shadow: 0 6px 20px rgba(123,30,58,0.28);\n  }\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: var(--border);\n  color: var(--text-muted);\n\n  &:hover {\n    border-color: var(--error);\n    color: var(--error);\n    background: rgba(192,57,43,0.05);\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Responsive[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:   640px)[_ngcontent-%COMP%] {\n  .oc-header { padding: 14px 16px; flex-wrap: wrap; gap: 10px; }\n  .oc-body { padding: 16px; }\n  .oc-footer { padding: 12px 16px; }\n  .oc-right { gap: 10px; }\n  .oc-total-header { display: none; }\n  .progress-track { overflow-x: auto; padding-bottom: 4px; }\n  .ps-label { font-size: 0.55rem; }\n  .exp-row-grid { grid-template-columns: 1fr; }\n}\n\n\n\n@media (max-width: 768px) {\n  .orders-page[_ngcontent-%COMP%] { padding-top: 24px; padding-bottom: 56px; max-width: 100%; }\n  .oc-header[_ngcontent-%COMP%] { padding: 14px 16px; }\n  .oc-body[_ngcontent-%COMP%] { padding: 16px; }\n  .oc-footer[_ngcontent-%COMP%] { padding: 12px 16px; flex-direction: column; align-items: flex-start; gap: 10px; }\n  .oc-footer-actions[_ngcontent-%COMP%] { width: 100%; flex-wrap: wrap; gap: 8px; .action-btn { flex: 1; min-width: 120px; justify-content: center; } }\n  .oc-right[_ngcontent-%COMP%] { gap: 8px; }\n  .oc-total-header[_ngcontent-%COMP%] { font-size: 0.95rem; }\n  .progress-track[_ngcontent-%COMP%] { padding: 14px 8px; }\n  .ps-label[_ngcontent-%COMP%] { font-size: 0.58rem; }\n  .ps-node[_ngcontent-%COMP%] { width: 26px; height: 26px; .ps-check { font-size: 12px; } .ps-num { font-size: 0.68rem; } }\n  .exp-row-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 12px; }\n  .oc-expanded[_ngcontent-%COMP%] { padding: 16px; }\n}\n\n@media (max-width: 480px) {\n  .oc-header[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 8px; }\n  .oc-right[_ngcontent-%COMP%] { flex-direction: row; align-items: center; gap: 8px; flex-wrap: wrap; }\n  .order-num-text[_ngcontent-%COMP%] { font-size: 0.78rem; }\n  .status-pill[_ngcontent-%COMP%] { font-size: 0.65rem; padding: 4px 10px; }\n  .preview-item[_ngcontent-%COMP%] { gap: 10px; }\n  .pi-img[_ngcontent-%COMP%] { width: 44px; height: 59px; }\n  .action-btn[_ngcontent-%COMP%] { font-size: 0.7rem; padding: 8px 12px; }\n  .tracking-timeline[_ngcontent-%COMP%] { gap: 10px; }\n  .payment-summary[_ngcontent-%COMP%]   .ps-row[_ngcontent-%COMP%] { font-size: 0.78rem; }\n  .orders-empty[_ngcontent-%COMP%] { padding: 48px 16px; }\n  .orders-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 1.4rem; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyOrdersComponent, [{
        type: Component,
        args: [{ selector: 'app-my-orders', standalone: true, imports: [RouterLink, CommonModule], template: "<!-- Page header -->\n<div class=\"page-header\">\n  <div class=\"container\">\n    <div class=\"section-subtitle\">Account</div>\n    <h1 class=\"section-title\">My Orders</h1>\n    <div class=\"section-divider\"></div>\n    <p class=\"header-desc\" *ngIf=\"!loading()\">{{ orders().length }} order{{ orders().length !== 1 ? 's' : '' }} placed</p>\n  </div>\n</div>\n\n<div class=\"container orders-page\">\n\n  <!-- Loading skeletons -->\n  <div *ngIf=\"loading()\" class=\"orders-list\">\n    <div *ngFor=\"let s of [1,2,3]\" class=\"order-skeleton\">\n      <div class=\"sk-header\">\n        <div class=\"sk-line w40\"></div>\n        <div class=\"sk-line w20\"></div>\n      </div>\n      <div class=\"sk-body\">\n        <div class=\"sk-item\" *ngFor=\"let i of [1,2]\">\n          <div class=\"sk-img\"></div>\n          <div class=\"sk-info\">\n            <div class=\"sk-line w60\"></div>\n            <div class=\"sk-line w30\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Empty state -->\n  <div *ngIf=\"!loading() && orders().length === 0\" class=\"orders-empty\">\n    <div class=\"empty-icon-wrap\">\n      <span class=\"material-icons\">receipt_long</span>\n    </div>\n    <h3>No orders yet</h3>\n    <p>You haven't placed any orders. Start exploring our heritage saree collection.</p>\n    <a routerLink=\"/products\" class=\"btn btn-primary btn-lg\">\n      <span class=\"material-icons\">auto_awesome</span>\n      Explore Collection\n    </a>\n  </div>\n\n  <!-- Orders list -->\n  <div *ngIf=\"!loading() && orders().length > 0\" class=\"orders-list\">\n    <div *ngFor=\"let o of orders()\" class=\"order-card\" [class.expanded]=\"expandedOrder() === o._id\">\n\n      <!-- Card Header -->\n      <div class=\"oc-header\" (click)=\"toggleExpand(o._id)\">\n        <div class=\"oc-left\">\n          <div class=\"oc-order-num\">\n            <span class=\"material-icons oc-icon\">receipt</span>\n            <span class=\"order-num-text\">{{ o.orderNumber }}</span>\n          </div>\n          <div class=\"oc-date\">{{ o.createdAt | date:'d MMMM yyyy' }}</div>\n        </div>\n        <div class=\"oc-right\">\n          <span class=\"status-pill\" [class]=\"'status-' + o.status\">\n            <span class=\"status-dot\"></span>\n            {{ o.status | titlecase }}\n          </span>\n          <span class=\"oc-total-header\">{{ ps.formatPrice(o.total) }}</span>\n          <span class=\"material-icons expand-icon\">{{ expandedOrder() === o._id ? 'expand_less' : 'expand_more' }}</span>\n        </div>\n      </div>\n\n      <!-- Order Body (always visible: items preview + progress) -->\n      <div class=\"oc-body\">\n        <!-- Progress tracker -->\n        <div class=\"progress-track\" *ngIf=\"o.status !== 'cancelled' && o.status !== 'returned'\">\n          <div *ngFor=\"let step of trackSteps; let i = index\"\n               class=\"progress-step\"\n               [class.done]=\"isStepDone(o.status, i)\"\n               [class.active]=\"isCurrentStep(o.status, i)\">\n            <div class=\"ps-node\">\n              <span class=\"material-icons ps-check\" *ngIf=\"isStepDone(o.status, i)\">check</span>\n              <span *ngIf=\"!isStepDone(o.status, i)\" class=\"ps-num\">{{ i + 1 }}</span>\n            </div>\n            <div class=\"ps-label\">{{ step }}</div>\n            <div class=\"ps-connector\" *ngIf=\"i < trackSteps.length - 1\" [class.filled]=\"isStepDone(o.status, i)\"></div>\n          </div>\n        </div>\n        <div class=\"cancelled-bar\" *ngIf=\"o.status === 'cancelled' || o.status === 'returned'\">\n          <span class=\"material-icons\">cancel</span>\n          Order {{ o.status | titlecase }}\n        </div>\n\n        <!-- Items preview (first 2) -->\n        <div class=\"items-preview\">\n          <div *ngFor=\"let item of o.items.slice(0, 2)\" class=\"preview-item\">\n            <img [src]=\"item.productImage\" [alt]=\"item.productName\" class=\"pi-img\" (error)=\"onImgErr($event)\">\n            <div class=\"pi-info\">\n              <div class=\"pi-name\">{{ item.productName }}</div>\n              <div class=\"pi-meta\">\n                <span>Qty {{ item.quantity }}</span>\n                <span *ngIf=\"item.color\" class=\"meta-sep\">\u00B7</span>\n                <span *ngIf=\"item.color\">{{ item.color }}</span>\n                <span class=\"meta-sep\">\u00B7</span>\n                <span>{{ item.category }}</span>\n              </div>\n            </div>\n            <div class=\"pi-price\">{{ ps.formatPrice(item.price * item.quantity) }}</div>\n          </div>\n          <div *ngIf=\"o.items.length > 2\" class=\"more-items\">\n            +{{ o.items.length - 2 }} more item{{ o.items.length - 2 > 1 ? 's' : '' }}\n          </div>\n        </div>\n      </div>\n\n      <!-- Expanded Details -->\n      <div class=\"oc-expanded\" *ngIf=\"expandedOrder() === o._id\">\n\n        <!-- All items -->\n        <div class=\"expanded-section\" *ngIf=\"o.items.length > 2\">\n          <h4 class=\"exp-title\">All Items</h4>\n          <div class=\"all-items\">\n            <div *ngFor=\"let item of o.items\" class=\"exp-item\">\n              <img [src]=\"item.productImage\" [alt]=\"item.productName\" class=\"ei-img\" (error)=\"onImgErr($event)\">\n              <div class=\"ei-info\">\n                <div class=\"ei-name\">{{ item.productName }}</div>\n                <div class=\"ei-meta\">Qty {{ item.quantity }}{{ item.color ? ' \u00B7 ' + item.color : '' }}</div>\n              </div>\n              <div class=\"ei-price\">{{ ps.formatPrice(item.price * item.quantity) }}</div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Order summary -->\n        <div class=\"exp-row-grid\">\n          <div class=\"expanded-section\">\n            <h4 class=\"exp-title\">Delivery Address</h4>\n            <div class=\"exp-addr\">\n              <div class=\"addr-name\">{{ o.shippingAddress.name }}</div>\n              <div>{{ o.shippingAddress.street }}</div>\n              <div>{{ o.shippingAddress.city }}, {{ o.shippingAddress.state }} \u2014 {{ o.shippingAddress.pincode }}</div>\n              <div class=\"addr-phone\">\n                <span class=\"material-icons\">phone</span>{{ o.shippingAddress.phone }}\n              </div>\n            </div>\n          </div>\n\n          <div class=\"expanded-section\">\n            <h4 class=\"exp-title\">Payment Summary</h4>\n            <div class=\"payment-summary\">\n              <div class=\"ps-row\"><span>Method</span><span>{{ o.paymentMethod }}</span></div>\n              <div class=\"ps-row\"><span>Status</span>\n                <span [class]=\"o.paymentStatus === 'paid' ? 'paid-tag' : 'pending-tag'\">{{ o.paymentStatus | titlecase }}</span>\n              </div>\n              <div class=\"ps-row\"><span>Subtotal</span><span>{{ ps.formatPrice(o.subtotal) }}</span></div>\n              <div class=\"ps-row\"><span>Shipping</span><span [class.free]=\"o.shipping === 0\">{{ o.shipping === 0 ? 'FREE' : ps.formatPrice(o.shipping) }}</span></div>\n              <div class=\"ps-row\"><span>GST (5%)</span><span>{{ ps.formatPrice(o.tax) }}</span></div>\n              <div class=\"ps-row total-row\"><span>Total</span><span class=\"total-amt\">{{ ps.formatPrice(o.total) }}</span></div>\n            </div>\n          </div>\n\n          <div class=\"expanded-section\" *ngIf=\"o.trackingEvents?.length\">\n            <h4 class=\"exp-title\">Tracking History</h4>\n            <div class=\"tracking-timeline\">\n              <div *ngFor=\"let ev of o.trackingEvents.slice().reverse()\" class=\"track-event\">\n                <div class=\"te-dot\" [class]=\"'te-' + ev.status\"></div>\n                <div class=\"te-info\">\n                  <div class=\"te-desc\">{{ ev.description }}</div>\n                  <div class=\"te-meta\">{{ ev.location }} \u00B7 {{ ev.timestamp | date:'d MMM, h:mm a' }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Estimated delivery -->\n        <div *ngIf=\"o.estimatedDelivery && !['delivered','cancelled','returned'].includes(o.status)\" class=\"delivery-estimate\">\n          <span class=\"material-icons\">local_shipping</span>\n          <span>Estimated delivery: <strong>{{ o.estimatedDelivery | date:'EEEE, d MMMM yyyy' }}</strong></span>\n        </div>\n        <div *ngIf=\"o.status === 'delivered' && o.deliveredAt\" class=\"delivered-notice\">\n          <span class=\"material-icons\">check_circle</span>\n          <span>Delivered on <strong>{{ o.deliveredAt | date:'d MMMM yyyy' }}</strong></span>\n        </div>\n      </div>\n\n      <!-- Card Footer actions -->\n      <div class=\"oc-footer\">\n        <div class=\"oc-footer-left\">\n          <div class=\"oc-payment-chip\">\n            <span class=\"material-icons\">payment</span>\n            {{ o.paymentMethod }}\n            <span class=\"pay-status\" [class]=\"o.paymentStatus === 'paid' ? 'pay-paid' : 'pay-pending'\">\n              \u00B7 {{ o.paymentStatus | titlecase }}\n            </span>\n          </div>\n          <div class=\"oc-ship-chip\" *ngIf=\"o.trackingNumber\">\n            <span class=\"material-icons\">local_shipping</span>\n            {{ o.trackingNumber }}\n          </div>\n        </div>\n        <div class=\"oc-footer-actions\">\n          <!-- User gets Invoice only -->\n          <button class=\"action-btn invoice-btn\" (click)=\"downloadInvoice(o._id, o.orderNumber)\"\n                  [disabled]=\"downloading() === o._id + '-inv'\" [title]=\"'Download Invoice'\">\n            <span class=\"material-icons\">{{ downloading() === o._id + '-inv' ? 'hourglass_top' : 'receipt_long' }}</span>\n            {{ downloading() === o._id + '-inv' ? 'Generating...' : 'Download Invoice' }}\n          </button>\n          <button *ngIf=\"canCancel(o.status)\" class=\"action-btn cancel-btn\" (click)=\"cancelOrder(o._id)\">\n            <span class=\"material-icons\">cancel</span>\n            Cancel Order\n          </button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n", styles: ["// My Orders Component Styles\n\n.orders-page {\n  padding-top: 40px;\n  padding-bottom: 80px;\n  max-width: 900px;\n}\n\n// \u2500\u2500 Skeleton \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.orders-list { display: flex; flex-direction: column; gap: 20px; }\n\n.order-skeleton {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n\n.sk-header {\n  padding: 20px 24px;\n  background: var(--surface);\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.sk-body { padding: 20px 24px; display: flex; flex-direction: column; gap: 12px; }\n\n.sk-item {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n\n.sk-img {\n  width: 52px;\n  height: 70px;\n  background: linear-gradient(90deg, var(--surface) 25%, var(--bg-2) 50%, var(--surface) 75%);\n  background-size: 400px 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: var(--radius-sm);\n  flex-shrink: 0;\n}\n\n.sk-info { flex: 1; display: flex; flex-direction: column; gap: 8px; }\n\n.sk-line {\n  height: 12px;\n  background: linear-gradient(90deg, var(--surface) 25%, var(--bg-2) 50%, var(--surface) 75%);\n  background-size: 400px 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n\n.w20 { width: 20%; }\n.w30 { width: 30%; }\n.w40 { width: 40%; }\n.w60 { width: 60%; }\n\n@keyframes shimmer {\n  0% { background-position: -400px 0; }\n  100% { background-position: 400px 0; }\n}\n\n// \u2500\u2500 Empty State \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.orders-empty {\n  text-align: center;\n  padding: 80px 24px;\n\n  .empty-icon-wrap {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    background: var(--burgundy-pale);\n    border: 2px solid rgba(123, 30, 58, 0.15);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto 24px;\n\n    .material-icons {\n      font-size: 36px;\n      color: var(--burgundy);\n    }\n  }\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.8rem;\n    color: var(--text);\n    margin-bottom: 10px;\n  }\n\n  p {\n    color: var(--text-muted);\n    font-size: 0.95rem;\n    max-width: 380px;\n    margin: 0 auto 28px;\n    line-height: 1.7;\n  }\n}\n\n// \u2500\u2500 Order Card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.order-card {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  transition: box-shadow 0.3s, border-color 0.3s;\n\n  &:hover { box-shadow: var(--shadow-md); }\n  &.expanded { border-color: var(--border-warm); box-shadow: var(--shadow-md); }\n}\n\n// \u2500\u2500 Card Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.oc-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  user-select: none;\n  transition: background 0.2s;\n\n  &:hover { background: var(--bg-2); }\n}\n\n.oc-left {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.oc-order-num {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  .oc-icon {\n    font-size: 18px;\n    color: var(--burgundy);\n  }\n}\n\n.order-num-text {\n  font-family: 'Courier New', monospace;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: 0.04em;\n}\n\n.oc-date {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n\n.oc-right {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n// Status pill\n.status-pill {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n\n  .status-dot {\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: currentColor;\n  }\n}\n\n.status-pending,\n.status-confirmed,\n.status-processing { background: rgba(107,84,71,0.1); color: var(--text-muted); }\n.status-shipped,\n.status-out_for_delivery { background: rgba(201,149,42,0.12); color: var(--gold-warm); }\n.status-delivered { background: rgba(45,122,79,0.12); color: var(--success); }\n.status-cancelled,\n.status-returned { background: rgba(192,57,43,0.1); color: var(--error); }\n\n.oc-total-header {\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: var(--burgundy);\n  font-weight: 400;\n}\n\n.expand-icon {\n  color: var(--text-muted);\n  font-size: 20px;\n  transition: transform 0.2s;\n  .expanded & { transform: rotate(180deg); }\n}\n\n// \u2500\u2500 Card Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.oc-body {\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n}\n\n// Progress tracker\n.progress-track {\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n  padding: 0 8px;\n}\n\n.progress-step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  position: relative;\n\n  &:last-child .ps-connector { display: none; }\n}\n\n.ps-node {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n  z-index: 1;\n  position: relative;\n\n  .ps-check { font-size: 14px; }\n  .ps-num { font-size: 0.75rem; color: var(--text-muted); font-weight: 600; }\n}\n\n.progress-step.done .ps-node {\n  background: var(--success);\n  border-color: var(--success);\n  color: white;\n}\n\n.progress-step.active .ps-node {\n  background: var(--burgundy);\n  border-color: var(--burgundy);\n  color: white;\n  box-shadow: 0 0 0 4px rgba(123,30,58,0.15);\n}\n\n.ps-label {\n  font-size: 0.62rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  margin-top: 6px;\n  text-align: center;\n}\n\n.progress-step.done .ps-label,\n.progress-step.active .ps-label { color: var(--burgundy); }\n\n.ps-connector {\n  position: absolute;\n  top: 15px;\n  left: 50%;\n  right: -50%;\n  height: 2px;\n  background: var(--border);\n  z-index: 0;\n  transition: background 0.3s;\n}\n\n.ps-connector.filled { background: var(--success); }\n\n.cancelled-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  background: rgba(192,57,43,0.08);\n  border: 1px solid rgba(192,57,43,0.2);\n  border-radius: var(--radius-md);\n  color: var(--error);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 16px;\n\n  .material-icons { font-size: 18px; }\n}\n\n// Items preview\n.items-preview { display: flex; flex-direction: column; gap: 0; }\n\n.preview-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 0;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n\n  &:last-child { border-bottom: none; }\n}\n\n.pi-img {\n  width: 50px;\n  height: 67px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n}\n\n.pi-info { flex: 1; min-width: 0; }\n\n.pi-name {\n  font-size: 0.875rem;\n  color: var(--text);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.pi-meta {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  margin-top: 3px;\n\n  .meta-sep { color: var(--text-dim); }\n}\n\n.pi-price {\n  font-family: var(--font-display);\n  color: var(--burgundy);\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n\n.more-items {\n  font-size: 0.78rem;\n  color: var(--gold-warm);\n  padding: 8px 0;\n  font-style: italic;\n}\n\n// \u2500\u2500 Expanded Content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.oc-expanded {\n  padding: 24px;\n  background: var(--surface);\n  border-top: 1px solid var(--border);\n  animation: fadeIn 0.25s ease;\n}\n\n@keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }\n\n.exp-row-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-top: 16px;\n}\n\n.expanded-section {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 18px;\n}\n\n.exp-title {\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 14px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--border);\n  font-family: var(--font-body);\n  font-weight: 600;\n}\n\n// Address\n.exp-addr {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n\n  .addr-name {\n    font-weight: 600;\n    color: var(--text);\n    font-size: 0.9rem;\n    margin-bottom: 3px;\n  }\n\n  .addr-phone {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    margin-top: 4px;\n    color: var(--text-muted);\n\n    .material-icons { font-size: 13px; }\n  }\n}\n\n// Payment summary\n.payment-summary { display: flex; flex-direction: column; gap: 0; }\n\n.ps-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  padding: 7px 0;\n  border-bottom: 1px solid rgba(107,84,71,0.05);\n\n  &:last-child { border-bottom: none; }\n\n  &.total-row {\n    font-size: 0.9rem;\n    font-weight: 600;\n    color: var(--text);\n    padding-top: 10px;\n  }\n\n  .paid-tag { color: var(--success); font-weight: 600; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em; }\n  .pending-tag { color: var(--warning); font-weight: 600; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em; }\n  .free { color: var(--success); font-weight: 600; }\n}\n\n.total-amt {\n  font-family: var(--font-display);\n  font-size: 1.15rem;\n  color: var(--burgundy);\n}\n\n// Tracking timeline\n.tracking-timeline { display: flex; flex-direction: column; gap: 12px; }\n\n.track-event {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n\n.te-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-top: 4px;\n  flex-shrink: 0;\n  background: var(--text-dim);\n\n  &.te-delivered { background: var(--success); }\n  &.te-shipped, &.te-out_for_delivery { background: var(--gold-warm); }\n  &.te-cancelled { background: var(--error); }\n  &.te-confirmed, &.te-processing { background: var(--burgundy); }\n}\n\n.te-desc { font-size: 0.82rem; color: var(--text); }\n.te-meta { font-size: 0.72rem; color: var(--text-muted); margin-top: 1px; }\n\n// All items\n.all-items { display: flex; flex-direction: column; }\n\n.exp-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n  &:last-child { border-bottom: none; }\n}\n\n.ei-img {\n  width: 44px;\n  height: 58px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n}\n\n.ei-info { flex: 1; }\n.ei-name { font-size: 0.875rem; color: var(--text); }\n.ei-meta { font-size: 0.72rem; color: var(--text-muted); }\n.ei-price { font-family: var(--font-display); color: var(--burgundy); font-size: 0.9rem; }\n\n// Delivery notices\n.delivery-estimate,\n.delivered-notice {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  margin-top: 16px;\n  font-size: 0.875rem;\n\n  .material-icons { font-size: 18px; }\n  strong { color: var(--text); }\n}\n\n.delivery-estimate {\n  background: var(--gold-pale);\n  border: 1px solid var(--border-warm);\n  color: var(--gold-warm);\n}\n\n.delivered-notice {\n  background: rgba(45,122,79,0.08);\n  border: 1px solid rgba(45,122,79,0.2);\n  color: var(--success);\n}\n\n// \u2500\u2500 Card Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.oc-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 24px;\n  background: white;\n  border-top: 1px solid var(--border);\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.oc-footer-left {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.oc-payment-chip,\n.oc-ship-chip {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n\n  .material-icons { font-size: 14px; }\n}\n\n.pay-status {\n  font-weight: 600;\n  &.pay-paid { color: var(--success); }\n  &.pay-pending { color: var(--warning); }\n}\n\n.oc-footer-actions {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n// Action buttons\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 18px;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  cursor: pointer;\n  transition: all 0.25s;\n  border: 1.5px solid;\n\n  .material-icons { font-size: 15px; }\n\n  &:disabled { opacity: 0.55; cursor: not-allowed; }\n}\n\n.invoice-btn {\n  background: var(--burgundy);\n  border-color: var(--burgundy);\n  color: white;\n  box-shadow: 0 3px 12px rgba(123,30,58,0.22);\n\n  &:hover:not(:disabled) {\n    background: var(--burgundy-light);\n    transform: translateY(-1px);\n    box-shadow: 0 6px 20px rgba(123,30,58,0.28);\n  }\n}\n\n.cancel-btn {\n  background: transparent;\n  border-color: var(--border);\n  color: var(--text-muted);\n\n  &:hover {\n    border-color: var(--error);\n    color: var(--error);\n    background: rgba(192,57,43,0.05);\n  }\n}\n\n// \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media (max-width: 640px) {\n  .oc-header { padding: 14px 16px; flex-wrap: wrap; gap: 10px; }\n  .oc-body { padding: 16px; }\n  .oc-footer { padding: 12px 16px; }\n  .oc-right { gap: 10px; }\n  .oc-total-header { display: none; }\n  .progress-track { overflow-x: auto; padding-bottom: 4px; }\n  .ps-label { font-size: 0.55rem; }\n  .exp-row-grid { grid-template-columns: 1fr; }\n}\n\n/* \u2500\u2500 Additional Mobile Responsive \u2500\u2500 */\n@media (max-width: 768px) {\n  .orders-page { padding-top: 24px; padding-bottom: 56px; max-width: 100%; }\n  .oc-header { padding: 14px 16px; }\n  .oc-body { padding: 16px; }\n  .oc-footer { padding: 12px 16px; flex-direction: column; align-items: flex-start; gap: 10px; }\n  .oc-footer-actions { width: 100%; flex-wrap: wrap; gap: 8px; .action-btn { flex: 1; min-width: 120px; justify-content: center; } }\n  .oc-right { gap: 8px; }\n  .oc-total-header { font-size: 0.95rem; }\n  .progress-track { padding: 14px 8px; }\n  .ps-label { font-size: 0.58rem; }\n  .ps-node { width: 26px; height: 26px; .ps-check { font-size: 12px; } .ps-num { font-size: 0.68rem; } }\n  .exp-row-grid { grid-template-columns: 1fr; gap: 12px; }\n  .oc-expanded { padding: 16px; }\n}\n\n@media (max-width: 480px) {\n  .oc-header { flex-direction: column; align-items: flex-start; gap: 8px; }\n  .oc-right { flex-direction: row; align-items: center; gap: 8px; flex-wrap: wrap; }\n  .order-num-text { font-size: 0.78rem; }\n  .status-pill { font-size: 0.65rem; padding: 4px 10px; }\n  .preview-item { gap: 10px; }\n  .pi-img { width: 44px; height: 59px; }\n  .action-btn { font-size: 0.7rem; padding: 8px 12px; }\n  .tracking-timeline { gap: 10px; }\n  .payment-summary .ps-row { font-size: 0.78rem; }\n  .orders-empty { padding: 48px 16px; }\n  .orders-empty h3 { font-size: 1.4rem; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MyOrdersComponent, { className: "MyOrdersComponent", filePath: "src\\app\\components\\my-orders\\my-orders.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=my-orders.component.js.map