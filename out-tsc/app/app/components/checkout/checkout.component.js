import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { ToastService } from '../../services/toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function CheckoutComponent_div_20_div_3_div_3_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1, "Default");
    i0.ɵɵelementEnd();
} }
function CheckoutComponent_div_20_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("click", function CheckoutComponent_div_20_div_3_div_3_Template_div_click_0_listener() { const a_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r4.selAddr = a_r4); });
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelement(2, "div", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 21)(4, "div", 22);
    i0.ɵɵtext(5);
    i0.ɵɵtemplate(6, CheckoutComponent_div_20_div_3_div_3_span_6_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 24);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 25);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 26);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("sel", (ctx_r4.selAddr == null ? null : ctx_r4.selAddr._id) === a_r4._id);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("filled", (ctx_r4.selAddr == null ? null : ctx_r4.selAddr._id) === a_r4._id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", a_r4.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", a_r4.isDefault);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate4("", a_r4.street, ", ", a_r4.city, ", ", a_r4.state, " \u2014 ", a_r4.pincode, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r4.phone);
} }
function CheckoutComponent_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "h4");
    i0.ɵɵtext(2, "Saved Addresses");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CheckoutComponent_div_20_div_3_div_3_Template, 13, 12, "div", 15);
    i0.ɵɵelementStart(4, "button", 16);
    i0.ɵɵlistener("click", function CheckoutComponent_div_20_div_3_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r2); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.showNewAddr = !ctx_r4.showNewAddr); });
    i0.ɵɵelementStart(5, "span", 17);
    i0.ɵɵtext(6, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r4.user.addresses);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.showNewAddr ? "Cancel" : "Add New Address", " ");
} }
function CheckoutComponent_div_20_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 29)(4, "div", 30)(5, "label", 31);
    i0.ɵɵtext(6, "Full Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function CheckoutComponent_div_20_div_4_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.na.name, $event) || (ctx_r4.na.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 30)(9, "label", 31);
    i0.ɵɵtext(10, "Phone *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function CheckoutComponent_div_20_div_4_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.na.phone, $event) || (ctx_r4.na.phone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 30)(13, "label", 31);
    i0.ɵɵtext(14, "Street Address *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 34);
    i0.ɵɵtwoWayListener("ngModelChange", function CheckoutComponent_div_20_div_4_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.na.street, $event) || (ctx_r4.na.street = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 35)(17, "div", 30)(18, "label", 31);
    i0.ɵɵtext(19, "City *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function CheckoutComponent_div_20_div_4_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.na.city, $event) || (ctx_r4.na.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 30)(22, "label", 31);
    i0.ɵɵtext(23, "State *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function CheckoutComponent_div_20_div_4_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.na.state, $event) || (ctx_r4.na.state = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 30)(26, "label", 31);
    i0.ɵɵtext(27, "Pincode *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function CheckoutComponent_div_20_div_4_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.na.pincode, $event) || (ctx_r4.na.pincode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "label", 38)(30, "input", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function CheckoutComponent_div_20_div_4_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.saveAddr, $event) || (ctx_r4.saveAddr = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(31, " Save this address");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r4.user == null ? null : ctx_r4.user.addresses == null ? null : ctx_r4.user.addresses.length) ? "New Address" : "Delivery Address");
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.na.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.na.phone);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.na.street);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.na.city);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.na.state);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.na.pincode);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.saveAddr);
} }
function CheckoutComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "h2", 10);
    i0.ɵɵtext(2, "Delivery Address");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CheckoutComponent_div_20_div_3_Template, 8, 2, "div", 11)(4, CheckoutComponent_div_20_div_4_Template, 32, 8, "div", 12);
    i0.ɵɵelementStart(5, "button", 13);
    i0.ɵɵlistener("click", function CheckoutComponent_div_20_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.goStep2()); });
    i0.ɵɵtext(6, "Continue to Payment \u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r4.user == null ? null : ctx_r4.user.addresses == null ? null : ctx_r4.user.addresses.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.showNewAddr || !(ctx_r4.user == null ? null : ctx_r4.user.addresses == null ? null : ctx_r4.user.addresses.length));
} }
function CheckoutComponent_div_21_label_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 45)(1, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function CheckoutComponent_div_21_label_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.payMethod, $event) || (ctx_r4.payMethod = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 47);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "div", 48);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 49);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const pm_r9 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("sel", ctx_r4.payMethod === pm_r9.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", pm_r9.value);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.payMethod);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pm_r9.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(pm_r9.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pm_r9.desc);
} }
function CheckoutComponent_div_21_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "div", 30)(2, "label", 31);
    i0.ɵɵtext(3, "Card Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 29)(6, "div", 30)(7, "label", 31);
    i0.ɵɵtext(8, "Expiry");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 30)(11, "label", 31);
    i0.ɵɵtext(12, "CVV");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "input", 53);
    i0.ɵɵelementEnd()()();
} }
function CheckoutComponent_div_21_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "div", 30)(2, "label", 31);
    i0.ɵɵtext(3, "UPI ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 54);
    i0.ɵɵelementEnd()();
} }
function CheckoutComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "h2", 10);
    i0.ɵɵtext(2, "Payment Method");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 40);
    i0.ɵɵtemplate(4, CheckoutComponent_div_21_label_4_Template, 9, 7, "label", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CheckoutComponent_div_21_div_5_Template, 14, 0, "div", 42)(6, CheckoutComponent_div_21_div_6_Template, 5, 0, "div", 42);
    i0.ɵɵelementStart(7, "div", 43)(8, "button", 44);
    i0.ɵɵlistener("click", function CheckoutComponent_div_21_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r7); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.step.set(1)); });
    i0.ɵɵtext(9, "\u2190 Back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 13);
    i0.ɵɵlistener("click", function CheckoutComponent_div_21_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r7); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.step.set(3)); });
    i0.ɵɵtext(11, "Review Order \u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r4.payMethods);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.payMethod === "Card");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.payMethod === "UPI");
} }
function CheckoutComponent_div_22_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59)(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r4.getAddr().name, " \u00B7 ", ctx_r4.getAddr().phone, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r4.getAddr().street, ", ", ctx_r4.getAddr().city, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r4.getAddr().state, " \u2014 ", ctx_r4.getAddr().pincode, "");
} }
function CheckoutComponent_div_22_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵelement(1, "img", 64);
    i0.ɵɵelementStart(2, "div", 65)(3, "div", 66);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 67);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 68);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r11 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", i_r11.product.images[0], i0.ɵɵsanitizeUrl)("alt", i_r11.product.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r11.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Qty ", i_r11.quantity, "", i_r11.color ? " \u00B7 " + i_r11.color : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.ps.formatPrice(i_r11.product.price * i_r11.quantity));
} }
function CheckoutComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "h2", 10);
    i0.ɵɵtext(2, "Review Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 55)(4, "div", 56)(5, "span");
    i0.ɵɵtext(6, "Delivery Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 57);
    i0.ɵɵlistener("click", function CheckoutComponent_div_22_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.step.set(1)); });
    i0.ɵɵtext(8, "Change");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, CheckoutComponent_div_22_div_9_Template, 7, 6, "div", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 55)(11, "div", 56)(12, "span");
    i0.ɵɵtext(13, "Payment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 57);
    i0.ɵɵlistener("click", function CheckoutComponent_div_22_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r10); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.step.set(2)); });
    i0.ɵɵtext(15, "Change");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 59);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 60)(19, "h4");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(21, CheckoutComponent_div_22_div_21_Template, 9, 6, "div", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 43)(23, "button", 44);
    i0.ɵɵlistener("click", function CheckoutComponent_div_22_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r10); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.step.set(2)); });
    i0.ɵɵtext(24, "\u2190 Back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 62);
    i0.ɵɵlistener("click", function CheckoutComponent_div_22_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r10); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.placeOrder()); });
    i0.ɵɵelementStart(26, "span", 17);
    i0.ɵɵtext(27, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r4.getAddr());
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r4.payMethod);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Items (", ctx_r4.cart.count(), ")");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.cart.items());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r4.placing());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.placing() ? "Placing Order..." : "Place Order \u00B7 " + ctx_r4.ps.formatPrice(ctx_r4.cart.total()), " ");
} }
function CheckoutComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69)(1, "div", 70);
    i0.ɵɵtext(2, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Order Placed!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Your order ");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, " has been confirmed.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 71);
    i0.ɵɵtext(11, "You'll receive delivery updates by email and SMS.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 72)(13, "a", 73);
    i0.ɵɵtext(14, "Track My Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 74);
    i0.ɵɵtext(16, "Continue Shopping");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r4.placedOrderNumber());
} }
function CheckoutComponent_aside_24_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵelement(1, "img", 83);
    i0.ɵɵelementStart(2, "div", 84)(3, "div", 85);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 86);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 87);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r12 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", i_r12.product.images[0], i0.ɵɵsanitizeUrl)("alt", i_r12.product.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r12.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u00D7 ", i_r12.quantity, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.ps.formatPrice(i_r12.product.price * i_r12.quantity));
} }
function CheckoutComponent_aside_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "aside", 75)(1, "h3");
    i0.ɵɵtext(2, "Order Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CheckoutComponent_aside_24_div_3_Template, 9, 5, "div", 76);
    i0.ɵɵelement(4, "div", 77);
    i0.ɵɵelementStart(5, "div", 78)(6, "span");
    i0.ɵɵtext(7, "Subtotal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 78)(11, "span");
    i0.ɵɵtext(12, "Shipping");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 78)(16, "span");
    i0.ɵɵtext(17, "GST (5%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 79)(21, "span");
    i0.ɵɵtext(22, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 80);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 81)(26, "span", 17);
    i0.ɵɵtext(27, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(28, " Secure Checkout");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r4.cart.items());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r4.ps.formatPrice(ctx_r4.cart.subtotal()));
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("green", ctx_r4.cart.shipping() === 0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.cart.shipping() === 0 ? "Free" : ctx_r4.ps.formatPrice(ctx_r4.cart.shipping()));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.ps.formatPrice(ctx_r4.cart.tax()));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.ps.formatPrice(ctx_r4.cart.total()));
} }
export class CheckoutComponent {
    constructor() {
        this.cart = inject(CartService);
        this.auth = inject(AuthService);
        this.orderService = inject(OrderService);
        this.ps = inject(ProductService);
        this.toast = inject(ToastService);
        this.router = inject(Router);
        this.step = signal(1);
        this.placing = signal(false);
        this.placedOrderNumber = signal('');
        this.payMethod = 'UPI';
        this.showNewAddr = false;
        this.saveAddr = true;
        this.selAddr = this.auth.currentUser()?.addresses?.find(a => a.isDefault) || this.auth.currentUser()?.addresses?.[0] || null;
        this.na = { name: this.user?.name || '', phone: this.user?.phone || '', street: '', city: '', state: '', pincode: '' };
        this.payMethods = [
            { value: 'UPI', name: 'UPI Payment', desc: 'GPay, PhonePe, Paytm & more', icon: 'qr_code_scanner' },
            { value: 'Card', name: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay', icon: 'credit_card' },
            { value: 'NetBanking', name: 'Net Banking', desc: 'All major banks supported', icon: 'account_balance' },
            { value: 'COD', name: 'Cash on Delivery', desc: 'Pay when order arrives', icon: 'payments' },
        ];
    }
    get user() { return this.auth.currentUser(); }
    getAddr() {
        if (this.selAddr)
            return this.selAddr;
        if (this.na.name && this.na.street && this.na.city && this.na.pincode)
            return this.na;
        return null;
    }
    goStep2() {
        if (!this.getAddr()) {
            this.toast.error('Please select or enter a delivery address.');
            return;
        }
        // Save new address if requested
        if (this.showNewAddr && this.saveAddr && this.na.name) {
            this.auth.addAddress({ ...this.na, label: 'Home', isDefault: false }).subscribe();
        }
        this.step.set(2);
    }
    placeOrder() {
        const addr = this.getAddr();
        if (!addr)
            return;
        this.placing.set(true);
        this.orderService.placeOrder({
            items: this.cart.toOrderItems(),
            shippingAddress: addr,
            paymentMethod: this.payMethod,
        }).subscribe({
            next: (r) => {
                this.cart.clear();
                this.placedOrderNumber.set(r.order.orderNumber || '');
                this.placing.set(false);
                this.step.set(4);
            },
            error: (e) => {
                this.toast.error(e.message);
                this.placing.set(false);
            },
        });
    }
    static { this.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 25, vars: 21, consts: [[1, "steps-bar"], [1, "container", "steps-row"], [1, "step"], [1, "step-num"], [1, "step-line"], [1, "container", "checkout-layout"], ["class", "checkout-main", 4, "ngIf"], ["class", "success-state", 4, "ngIf"], ["class", "order-summary", 4, "ngIf"], [1, "checkout-main"], [1, "step-title"], ["class", "saved-addrs", 4, "ngIf"], ["class", "new-addr-form", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "saved-addrs"], ["class", "addr-card", 3, "sel", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-ghost", "btn-sm", 2, "margin-top", "8px", 3, "click"], [1, "material-icons"], [1, "addr-card", 3, "click"], [1, "addr-radio"], [1, "rdot"], [1, "addr-body"], [1, "addr-label"], ["class", "def-badge", 4, "ngIf"], [1, "addr-name"], [1, "addr-detail"], [1, "addr-phone"], [1, "def-badge"], [1, "new-addr-form"], [1, "form-row-2"], [1, "form-group"], [1, "form-label"], ["placeholder", "Recipient name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "10-digit mobile", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "House no., Street, Area", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row-3"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["maxlength", "6", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "check-save"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "pay-methods"], ["class", "pay-option", 3, "sel", 4, "ngFor", "ngForOf"], ["class", "pay-form", 4, "ngIf"], [1, "step-actions"], [1, "btn", "btn-ghost", 3, "click"], [1, "pay-option"], ["type", "radio", 3, "ngModelChange", "value", "ngModel"], [1, "material-icons", "pm-icon"], [1, "pm-name"], [1, "pm-desc"], [1, "pay-form"], ["placeholder", "1234 5678 9012 3456", "maxlength", "19", 1, "form-control"], ["placeholder", "MM/YY", 1, "form-control"], ["placeholder", "\u2022\u2022\u2022", "maxlength", "3", "type", "password", 1, "form-control"], ["placeholder", "yourname@upi", 1, "form-control"], [1, "review-block"], [1, "rb-head"], [1, "link-btn", 3, "click"], ["class", "rb-body", 4, "ngIf"], [1, "rb-body"], [1, "review-items"], ["class", "ri-row", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-lg", 3, "click", "disabled"], [1, "ri-row"], [1, "ri-img", 3, "src", "alt"], [1, "ri-info"], [1, "ri-name"], [1, "ri-meta"], [1, "ri-price"], [1, "success-state"], [1, "success-icon"], [2, "color", "var(--text-muted)", "font-size", "0.9rem"], [1, "success-acts"], ["routerLink", "/orders", 1, "btn", "btn-primary"], ["routerLink", "/products", 1, "btn", "btn-outline"], [1, "order-summary"], ["class", "sum-item", 4, "ngFor", "ngForOf"], [1, "sum-divider"], [1, "sum-row"], [1, "sum-total"], [1, "st-val"], [1, "secure-note"], [1, "sum-item"], [1, "sum-img", 3, "src", "alt"], [1, "sum-info"], [1, "sum-name"], [1, "sum-qty"], [1, "sum-price"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Address");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(7, "div", 4);
            i0.ɵɵelementStart(8, "div", 2)(9, "div", 3);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, "Payment");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(13, "div", 4);
            i0.ɵɵelementStart(14, "div", 2)(15, "div", 3);
            i0.ɵɵtext(16, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "span");
            i0.ɵɵtext(18, "Confirm");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(19, "div", 5);
            i0.ɵɵtemplate(20, CheckoutComponent_div_20_Template, 7, 2, "div", 6)(21, CheckoutComponent_div_21_Template, 12, 3, "div", 6)(22, CheckoutComponent_div_22_Template, 29, 6, "div", 6)(23, CheckoutComponent_div_23_Template, 17, 1, "div", 7)(24, CheckoutComponent_aside_24_Template, 29, 7, "aside", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.step() >= 1)("done", ctx.step() > 1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.step() > 1 ? "\u2713" : "1");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("done", ctx.step() > 1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.step() >= 2)("done", ctx.step() > 2);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.step() > 2 ? "\u2713" : "2");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("done", ctx.step() > 2);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.step() >= 3);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.step() === 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.step() === 2);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.step() === 3);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.step() === 4);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.step() < 4);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.MaxLengthValidator, i2.NgModel, RouterLink], styles: ["//[_ngcontent-%COMP%]   Checkout[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Steps[_ngcontent-%COMP%]   bar[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.steps-bar[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid var(--border);\n  padding: 20px 0;\n}\n\n.steps-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 420px;\n  margin: 0 auto;\n}\n\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.step-num[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  transition: all 0.3s;\n  font-family: var(--font-body);\n  font-weight: 500;\n}\n\n.step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  border-color: var(--burgundy);\n  color: var(--burgundy);\n  background: var(--burgundy-pale);\n}\n\n.step.done[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  border-color: var(--success);\n  background: var(--success);\n  color: white;\n}\n\n.step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  font-family: var(--font-body);\n}\n\n.step.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--burgundy); }\n.step.done[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--success); }\n\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: var(--border);\n  transition: background 0.4s;\n  margin: 0 4px;\n  margin-bottom: 20px;\n\n  &.done { background: var(--success); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Layout[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 348px;\n  gap: 40px;\n  padding-top: 40px;\n  padding-bottom: 80px;\n  align-items: start;\n}\n\n.checkout-main[_ngcontent-%COMP%]   h2.step-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  color: var(--text);\n  margin-bottom: 24px;\n  font-weight: 400;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Address[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.saved-addrs[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .new-addr-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 14px;\n  font-family: var(--font-body);\n  font-weight: 600;\n}\n\n.addr-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 16px;\n  margin-bottom: 12px;\n  background: white;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.22s;\n\n  &:hover, &.sel {\n    border-color: var(--burgundy);\n    background: var(--burgundy-pale);\n    box-shadow: 0 2px 12px rgba(123,30,58,0.1);\n  }\n}\n\n.addr-radio[_ngcontent-%COMP%] { padding-top: 2px; }\n\n.rdot[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  transition: all 0.2s;\n\n  &.filled {\n    border-color: var(--burgundy);\n    background: var(--burgundy);\n    box-shadow: inset 0 0 0 3px white;\n  }\n}\n\n.addr-body[_ngcontent-%COMP%] { flex: 1; }\n.addr-label[_ngcontent-%COMP%] { font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-warm); margin-bottom: 4px; font-weight: 600; }\n.def-badge[_ngcontent-%COMP%] { display: inline-block; background: var(--burgundy); color: white; padding: 1px 7px; border-radius: 10px; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin-left: 4px; }\n.addr-name[_ngcontent-%COMP%] { font-weight: 600; color: var(--text); font-size: 0.9rem; margin-bottom: 2px; }\n.addr-detail[_ngcontent-%COMP%], .addr-phone[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--text-muted); margin-top: 1px; }\n\n.form-row-2[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n.form-row-3[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }\n\n.new-addr-form[_ngcontent-%COMP%] { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 20px; margin-bottom: 20px; }\n\n.check-save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.83rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  margin-bottom: 20px;\n\n  input { accent-color: var(--burgundy); cursor: pointer; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Payment[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.pay-methods[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }\n\n.pay-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: white;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.2s;\n\n  input[type=\"radio\"] { accent-color: var(--burgundy); cursor: pointer; }\n\n  &.sel { border-color: var(--burgundy); background: var(--burgundy-pale); }\n  &:hover:not(.sel) { border-color: var(--border-strong); }\n}\n\n.pm-icon[_ngcontent-%COMP%] { color: var(--burgundy); font-size: 22px !important; }\n.pm-name[_ngcontent-%COMP%] { font-weight: 500; color: var(--text); font-size: 0.9rem; }\n.pm-desc[_ngcontent-%COMP%] { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }\n\n.pay-form[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 20px;\n  margin-bottom: 20px;\n}\n\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--border);\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Review[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.review-block[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n\n.rb-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 18px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n  font-size: 0.65rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  font-weight: 600;\n}\n\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--burgundy);\n  font-size: 0.8rem;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: opacity 0.2s;\n\n  &:hover { opacity: 0.7; }\n}\n\n.rb-body[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.review-items[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 18px;\n  margin-bottom: 20px;\n\n  h4 { font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold-warm); margin-bottom: 14px; font-weight: 600; }\n}\n\n.ri-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(107,84,71,0.07);\n\n  &:last-child { border-bottom: none; }\n}\n\n.ri-img[_ngcontent-%COMP%] { width: 50px; height: 67px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border); flex-shrink: 0; }\n.ri-info[_ngcontent-%COMP%] { flex: 1; }\n.ri-name[_ngcontent-%COMP%] { font-size: 0.875rem; color: var(--text); }\n.ri-meta[_ngcontent-%COMP%] { font-size: 0.72rem; color: var(--text-muted); }\n.ri-price[_ngcontent-%COMP%] { font-family: var(--font-display); color: var(--burgundy); font-size: 0.95rem; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Order[_ngcontent-%COMP%]   Summary[_ngcontent-%COMP%]   Sidebar[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.order-summary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  position: sticky;\n  top: 100px;\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.15rem;\n    color: var(--text);\n    font-weight: 400;\n    padding: 20px 22px;\n    border-bottom: 1px solid var(--border);\n    background: var(--surface);\n  }\n}\n\n.sum-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 22px;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n\n  &:last-child { border-bottom: none; }\n}\n\n.sum-img[_ngcontent-%COMP%] { width: 42px; height: 56px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border); flex-shrink: 0; }\n.sum-info[_ngcontent-%COMP%] { flex: 1; }\n.sum-name[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.sum-qty[_ngcontent-%COMP%] { font-size: 0.7rem; color: var(--text-muted); }\n.sum-price[_ngcontent-%COMP%] { font-size: 0.875rem; color: var(--burgundy); flex-shrink: 0; }\n\n.sum-divider[_ngcontent-%COMP%] { height: 1px; background: var(--border); margin: 0 22px; }\n\n.sum-row[_ngcontent-%COMP%] { display: flex; justify-content: space-between; font-size: 0.83rem; color: var(--text-muted); padding: 7px 22px; .green { color: var(--success); font-weight: 600; } }\n\n.sum-total[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; padding: 14px 22px; border-top: 1.5px solid var(--border); }\n.st-val[_ngcontent-%COMP%] { font-family: var(--font-display); font-size: 1.3rem; color: var(--burgundy); }\n\n.secure-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 0.68rem;\n  color: var(--text-dim);\n  padding: 14px;\n  border-top: 1px solid var(--border);\n  background: var(--surface);\n\n  .material-icons { font-size: 12px; color: var(--success); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Success[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.success-state[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  padding: 72px 0;\n}\n\n.success-icon[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background: var(--success);\n  color: white;\n  font-size: 2.2rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 28px;\n  box-shadow: 0 8px 32px rgba(45,122,79,0.3);\n  animation: _ngcontent-%COMP%_popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n@keyframes _ngcontent-%COMP%_popIn {\n  from { transform: scale(0.5); opacity: 0; }\n  to { transform: scale(1); opacity: 1; }\n}\n\n.success-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2.5rem;\n  color: var(--text);\n  margin-bottom: 14px;\n  font-weight: 400;\n}\n\n.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: var(--text-muted); margin-bottom: 6px; line-height: 1.6; }\n\n.success-acts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n  margin-top: 36px;\n  flex-wrap: wrap;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Responsive[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:   960px)[_ngcontent-%COMP%] {\n  .checkout-layout { grid-template-columns: 1fr; }\n  .order-summary { position: static; }\n}\n\n@media (max-width: 600px) {\n  .form-row-2[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .form-row-3[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n  .step-actions[_ngcontent-%COMP%] { flex-direction: column-reverse; }\n}\n\n\n\n@media (max-width: 768px) {\n  .checkout-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 24px; padding-top: 24px; padding-bottom: 56px; }\n  .order-summary[_ngcontent-%COMP%] { position: static; }\n  .pay-option[_ngcontent-%COMP%] { padding: 12px; gap: 10px; }\n  .pm-name[_ngcontent-%COMP%] { font-size: 0.85rem; }\n  .pm-desc[_ngcontent-%COMP%] { font-size: 0.7rem; }\n  .step-actions[_ngcontent-%COMP%] { flex-direction: column-reverse; gap: 8px; .btn { width: 100%; justify-content: center; } }\n}\n\n@media (max-width: 480px) {\n  .steps-row[_ngcontent-%COMP%] { max-width: 100%; padding: 0 8px; }\n  .step-num[_ngcontent-%COMP%] { width: 30px; height: 30px; font-size: 0.78rem; }\n  .step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 0.58rem; }\n  .step-line[_ngcontent-%COMP%] { margin-bottom: 16px; }\n  .checkout-main[_ngcontent-%COMP%]   h2.step-title[_ngcontent-%COMP%] { font-size: 1.3rem; margin-bottom: 18px; }\n  .addr-card[_ngcontent-%COMP%] { padding: 12px; }\n  .form-row-2[_ngcontent-%COMP%], .form-row-3[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .review-items[_ngcontent-%COMP%] { padding: 14px; }\n  .ri-img[_ngcontent-%COMP%] { width: 44px; height: 59px; }\n  .sum-item[_ngcontent-%COMP%] { padding: 10px 16px; }\n  .success-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 1.8rem; }\n  .success-icon[_ngcontent-%COMP%] { width: 68px; height: 68px; font-size: 1.7rem; }\n  .success-acts[_ngcontent-%COMP%] { flex-direction: column; .btn { width: 100%; justify-content: center; } }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckoutComponent, [{
        type: Component,
        args: [{ selector: 'app-checkout', standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: "<!-- Steps -->\n    <div class=\"steps-bar\">\n      <div class=\"container steps-row\">\n        <div class=\"step\" [class.active]=\"step()>=1\" [class.done]=\"step()>1\">\n          <div class=\"step-num\">{{ step()>1?'\u2713':'1' }}</div><span>Address</span>\n        </div>\n        <div class=\"step-line\" [class.done]=\"step()>1\"></div>\n        <div class=\"step\" [class.active]=\"step()>=2\" [class.done]=\"step()>2\">\n          <div class=\"step-num\">{{ step()>2?'\u2713':'2' }}</div><span>Payment</span>\n        </div>\n        <div class=\"step-line\" [class.done]=\"step()>2\"></div>\n        <div class=\"step\" [class.active]=\"step()>=3\">\n          <div class=\"step-num\">3</div><span>Confirm</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container checkout-layout\">\n\n      <!-- STEP 1: Address -->\n      <div class=\"checkout-main\" *ngIf=\"step()===1\">\n        <h2 class=\"step-title\">Delivery Address</h2>\n\n        <div *ngIf=\"user?.addresses?.length\" class=\"saved-addrs\">\n          <h4>Saved Addresses</h4>\n          <div *ngFor=\"let a of user!.addresses\" class=\"addr-card\" [class.sel]=\"selAddr?._id===a._id\" (click)=\"selAddr=a\">\n            <div class=\"addr-radio\"><div class=\"rdot\" [class.filled]=\"selAddr?._id===a._id\"></div></div>\n            <div class=\"addr-body\">\n              <div class=\"addr-label\">{{ a.label }} <span *ngIf=\"a.isDefault\" class=\"def-badge\">Default</span></div>\n              <div class=\"addr-name\">{{ a.name }}</div>\n              <div class=\"addr-detail\">{{ a.street }}, {{ a.city }}, {{ a.state }} \u2014 {{ a.pincode }}</div>\n              <div class=\"addr-phone\">{{ a.phone }}</div>\n            </div>\n          </div>\n          <button class=\"btn btn-ghost btn-sm\" (click)=\"showNewAddr=!showNewAddr\" style=\"margin-top:8px\">\n            <span class=\"material-icons\">add</span> {{ showNewAddr ? 'Cancel' : 'Add New Address' }}\n          </button>\n        </div>\n\n        <div *ngIf=\"showNewAddr || !user?.addresses?.length\" class=\"new-addr-form\">\n          <h4>{{ user?.addresses?.length ? 'New Address' : 'Delivery Address' }}</h4>\n          <div class=\"form-row-2\">\n            <div class=\"form-group\"><label class=\"form-label\">Full Name *</label><input class=\"form-control\" [(ngModel)]=\"na.name\" placeholder=\"Recipient name\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">Phone *</label><input class=\"form-control\" [(ngModel)]=\"na.phone\" placeholder=\"10-digit mobile\"></div>\n          </div>\n          <div class=\"form-group\"><label class=\"form-label\">Street Address *</label><input class=\"form-control\" [(ngModel)]=\"na.street\" placeholder=\"House no., Street, Area\"></div>\n          <div class=\"form-row-3\">\n            <div class=\"form-group\"><label class=\"form-label\">City *</label><input class=\"form-control\" [(ngModel)]=\"na.city\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">State *</label><input class=\"form-control\" [(ngModel)]=\"na.state\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">Pincode *</label><input class=\"form-control\" [(ngModel)]=\"na.pincode\" maxlength=\"6\"></div>\n          </div>\n          <label class=\"check-save\"><input type=\"checkbox\" [(ngModel)]=\"saveAddr\"> Save this address</label>\n        </div>\n\n        <button class=\"btn btn-primary btn-lg\" (click)=\"goStep2()\">Continue to Payment \u2192</button>\n      </div>\n\n      <!-- STEP 2: Payment -->\n      <div class=\"checkout-main\" *ngIf=\"step()===2\">\n        <h2 class=\"step-title\">Payment Method</h2>\n        <div class=\"pay-methods\">\n          <label *ngFor=\"let pm of payMethods\" class=\"pay-option\" [class.sel]=\"payMethod===pm.value\">\n            <input type=\"radio\" [value]=\"pm.value\" [(ngModel)]=\"payMethod\">\n            <span class=\"material-icons pm-icon\">{{ pm.icon }}</span>\n            <div>\n              <div class=\"pm-name\">{{ pm.name }}</div>\n              <div class=\"pm-desc\">{{ pm.desc }}</div>\n            </div>\n          </label>\n        </div>\n        <div *ngIf=\"payMethod==='Card'\" class=\"pay-form\">\n          <div class=\"form-group\"><label class=\"form-label\">Card Number</label><input class=\"form-control\" placeholder=\"1234 5678 9012 3456\" maxlength=\"19\"></div>\n          <div class=\"form-row-2\">\n            <div class=\"form-group\"><label class=\"form-label\">Expiry</label><input class=\"form-control\" placeholder=\"MM/YY\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">CVV</label><input class=\"form-control\" placeholder=\"\u2022\u2022\u2022\" maxlength=\"3\" type=\"password\"></div>\n          </div>\n        </div>\n        <div *ngIf=\"payMethod==='UPI'\" class=\"pay-form\">\n          <div class=\"form-group\"><label class=\"form-label\">UPI ID</label><input class=\"form-control\" placeholder=\"yourname@upi\"></div>\n        </div>\n        <div class=\"step-actions\">\n          <button class=\"btn btn-ghost\" (click)=\"step.set(1)\">\u2190 Back</button>\n          <button class=\"btn btn-primary btn-lg\" (click)=\"step.set(3)\">Review Order \u2192</button>\n        </div>\n      </div>\n\n      <!-- STEP 3: Review -->\n      <div class=\"checkout-main\" *ngIf=\"step()===3\">\n        <h2 class=\"step-title\">Review Order</h2>\n        <div class=\"review-block\">\n          <div class=\"rb-head\"><span>Delivery Address</span><button class=\"link-btn\" (click)=\"step.set(1)\">Change</button></div>\n          <div class=\"rb-body\" *ngIf=\"getAddr()\">\n            <div>{{ getAddr()!.name }} \u00B7 {{ getAddr()!.phone }}</div>\n            <div>{{ getAddr()!.street }}, {{ getAddr()!.city }}</div>\n            <div>{{ getAddr()!.state }} \u2014 {{ getAddr()!.pincode }}</div>\n          </div>\n        </div>\n        <div class=\"review-block\">\n          <div class=\"rb-head\"><span>Payment</span><button class=\"link-btn\" (click)=\"step.set(2)\">Change</button></div>\n          <div class=\"rb-body\">{{ payMethod }}</div>\n        </div>\n        <div class=\"review-items\">\n          <h4>Items ({{ cart.count() }})</h4>\n          <div *ngFor=\"let i of cart.items()\" class=\"ri-row\">\n            <img [src]=\"i.product.images[0]\" [alt]=\"i.product.name\" class=\"ri-img\">\n            <div class=\"ri-info\"><div class=\"ri-name\">{{ i.product.name }}</div><div class=\"ri-meta\">Qty {{ i.quantity }}{{ i.color ? ' \u00B7 ' + i.color : '' }}</div></div>\n            <div class=\"ri-price\">{{ ps.formatPrice(i.product.price * i.quantity) }}</div>\n          </div>\n        </div>\n        <div class=\"step-actions\">\n          <button class=\"btn btn-ghost\" (click)=\"step.set(2)\">\u2190 Back</button>\n          <button class=\"btn btn-primary btn-lg\" (click)=\"placeOrder()\" [disabled]=\"placing()\">\n            <span class=\"material-icons\">lock</span>\n            {{ placing() ? 'Placing Order...' : 'Place Order \u00B7 ' + ps.formatPrice(cart.total()) }}\n          </button>\n        </div>\n      </div>\n\n      <!-- SUCCESS -->\n      <div class=\"success-state\" *ngIf=\"step()===4\">\n        <div class=\"success-icon\">\u2713</div>\n        <h2>Order Placed!</h2>\n        <p>Your order <strong>{{ placedOrderNumber() }}</strong> has been confirmed.</p>\n        <p style=\"color:var(--text-muted);font-size:0.9rem\">You'll receive delivery updates by email and SMS.</p>\n        <div class=\"success-acts\">\n          <a routerLink=\"/orders\" class=\"btn btn-primary\">Track My Order</a>\n          <a routerLink=\"/products\" class=\"btn btn-outline\">Continue Shopping</a>\n        </div>\n      </div>\n\n      <!-- Sidebar Summary -->\n      <aside class=\"order-summary\" *ngIf=\"step()<4\">\n        <h3>Order Summary</h3>\n        <div *ngFor=\"let i of cart.items()\" class=\"sum-item\">\n          <img [src]=\"i.product.images[0]\" [alt]=\"i.product.name\" class=\"sum-img\">\n          <div class=\"sum-info\"><div class=\"sum-name\">{{ i.product.name }}</div><div class=\"sum-qty\">\u00D7 {{ i.quantity }}</div></div>\n          <div class=\"sum-price\">{{ ps.formatPrice(i.product.price * i.quantity) }}</div>\n        </div>\n        <div class=\"sum-divider\"></div>\n        <div class=\"sum-row\"><span>Subtotal</span><span>{{ ps.formatPrice(cart.subtotal()) }}</span></div>\n        <div class=\"sum-row\"><span>Shipping</span><span [class.green]=\"cart.shipping()===0\">{{ cart.shipping()===0?'Free':ps.formatPrice(cart.shipping()) }}</span></div>\n        <div class=\"sum-row\"><span>GST (5%)</span><span>{{ ps.formatPrice(cart.tax()) }}</span></div>\n        <div class=\"sum-total\"><span>Total</span><span class=\"st-val\">{{ ps.formatPrice(cart.total()) }}</span></div>\n        <div class=\"secure-note\"><span class=\"material-icons\">lock</span> Secure Checkout</div>\n      </aside>\n    </div>\n", styles: ["// Checkout Component Styles\n\n// \u2500\u2500 Steps bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.steps-bar {\n  background: white;\n  border-bottom: 1px solid var(--border);\n  padding: 20px 0;\n}\n\n.steps-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 420px;\n  margin: 0 auto;\n}\n\n.step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.step-num {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  transition: all 0.3s;\n  font-family: var(--font-body);\n  font-weight: 500;\n}\n\n.step.active .step-num {\n  border-color: var(--burgundy);\n  color: var(--burgundy);\n  background: var(--burgundy-pale);\n}\n\n.step.done .step-num {\n  border-color: var(--success);\n  background: var(--success);\n  color: white;\n}\n\n.step span {\n  font-size: 0.65rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  font-family: var(--font-body);\n}\n\n.step.active span { color: var(--burgundy); }\n.step.done span { color: var(--success); }\n\n.step-line {\n  flex: 1;\n  height: 2px;\n  background: var(--border);\n  transition: background 0.4s;\n  margin: 0 4px;\n  margin-bottom: 20px;\n\n  &.done { background: var(--success); }\n}\n\n// \u2500\u2500 Layout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.checkout-layout {\n  display: grid;\n  grid-template-columns: 1fr 348px;\n  gap: 40px;\n  padding-top: 40px;\n  padding-bottom: 80px;\n  align-items: start;\n}\n\n.checkout-main h2.step-title {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  color: var(--text);\n  margin-bottom: 24px;\n  font-weight: 400;\n}\n\n// \u2500\u2500 Address \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.saved-addrs h4,\n.new-addr-form h4 {\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 14px;\n  font-family: var(--font-body);\n  font-weight: 600;\n}\n\n.addr-card {\n  display: flex;\n  gap: 14px;\n  padding: 16px;\n  margin-bottom: 12px;\n  background: white;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.22s;\n\n  &:hover, &.sel {\n    border-color: var(--burgundy);\n    background: var(--burgundy-pale);\n    box-shadow: 0 2px 12px rgba(123,30,58,0.1);\n  }\n}\n\n.addr-radio { padding-top: 2px; }\n\n.rdot {\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  transition: all 0.2s;\n\n  &.filled {\n    border-color: var(--burgundy);\n    background: var(--burgundy);\n    box-shadow: inset 0 0 0 3px white;\n  }\n}\n\n.addr-body { flex: 1; }\n.addr-label { font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-warm); margin-bottom: 4px; font-weight: 600; }\n.def-badge { display: inline-block; background: var(--burgundy); color: white; padding: 1px 7px; border-radius: 10px; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin-left: 4px; }\n.addr-name { font-weight: 600; color: var(--text); font-size: 0.9rem; margin-bottom: 2px; }\n.addr-detail, .addr-phone { font-size: 0.78rem; color: var(--text-muted); margin-top: 1px; }\n\n.form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n.form-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }\n\n.new-addr-form { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 20px; margin-bottom: 20px; }\n\n.check-save {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.83rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  margin-bottom: 20px;\n\n  input { accent-color: var(--burgundy); cursor: pointer; }\n}\n\n// \u2500\u2500 Payment \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.pay-methods { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }\n\n.pay-option {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: white;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.2s;\n\n  input[type=\"radio\"] { accent-color: var(--burgundy); cursor: pointer; }\n\n  &.sel { border-color: var(--burgundy); background: var(--burgundy-pale); }\n  &:hover:not(.sel) { border-color: var(--border-strong); }\n}\n\n.pm-icon { color: var(--burgundy); font-size: 22px !important; }\n.pm-name { font-weight: 500; color: var(--text); font-size: 0.9rem; }\n.pm-desc { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }\n\n.pay-form {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 20px;\n  margin-bottom: 20px;\n}\n\n.step-actions {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--border);\n}\n\n// \u2500\u2500 Review \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.review-block {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n\n.rb-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 18px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n  font-size: 0.65rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  font-weight: 600;\n}\n\n.link-btn {\n  background: none;\n  border: none;\n  color: var(--burgundy);\n  font-size: 0.8rem;\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: opacity 0.2s;\n\n  &:hover { opacity: 0.7; }\n}\n\n.rb-body {\n  padding: 14px 18px;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.review-items {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 18px;\n  margin-bottom: 20px;\n\n  h4 { font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold-warm); margin-bottom: 14px; font-weight: 600; }\n}\n\n.ri-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(107,84,71,0.07);\n\n  &:last-child { border-bottom: none; }\n}\n\n.ri-img { width: 50px; height: 67px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border); flex-shrink: 0; }\n.ri-info { flex: 1; }\n.ri-name { font-size: 0.875rem; color: var(--text); }\n.ri-meta { font-size: 0.72rem; color: var(--text-muted); }\n.ri-price { font-family: var(--font-display); color: var(--burgundy); font-size: 0.95rem; }\n\n// \u2500\u2500 Order Summary Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.order-summary {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  position: sticky;\n  top: 100px;\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.15rem;\n    color: var(--text);\n    font-weight: 400;\n    padding: 20px 22px;\n    border-bottom: 1px solid var(--border);\n    background: var(--surface);\n  }\n}\n\n.sum-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 22px;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n\n  &:last-child { border-bottom: none; }\n}\n\n.sum-img { width: 42px; height: 56px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border); flex-shrink: 0; }\n.sum-info { flex: 1; }\n.sum-name { font-size: 0.78rem; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.sum-qty { font-size: 0.7rem; color: var(--text-muted); }\n.sum-price { font-size: 0.875rem; color: var(--burgundy); flex-shrink: 0; }\n\n.sum-divider { height: 1px; background: var(--border); margin: 0 22px; }\n\n.sum-row { display: flex; justify-content: space-between; font-size: 0.83rem; color: var(--text-muted); padding: 7px 22px; .green { color: var(--success); font-weight: 600; } }\n\n.sum-total { display: flex; justify-content: space-between; align-items: center; padding: 14px 22px; border-top: 1.5px solid var(--border); }\n.st-val { font-family: var(--font-display); font-size: 1.3rem; color: var(--burgundy); }\n\n.secure-note {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 0.68rem;\n  color: var(--text-dim);\n  padding: 14px;\n  border-top: 1px solid var(--border);\n  background: var(--surface);\n\n  .material-icons { font-size: 12px; color: var(--success); }\n}\n\n// \u2500\u2500 Success \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.success-state {\n  grid-column: 1 / -1;\n  text-align: center;\n  padding: 72px 0;\n}\n\n.success-icon {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background: var(--success);\n  color: white;\n  font-size: 2.2rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 28px;\n  box-shadow: 0 8px 32px rgba(45,122,79,0.3);\n  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n@keyframes popIn {\n  from { transform: scale(0.5); opacity: 0; }\n  to { transform: scale(1); opacity: 1; }\n}\n\n.success-state h2 {\n  font-family: var(--font-display);\n  font-size: 2.5rem;\n  color: var(--text);\n  margin-bottom: 14px;\n  font-weight: 400;\n}\n\n.success-state p { color: var(--text-muted); margin-bottom: 6px; line-height: 1.6; }\n\n.success-acts {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n  margin-top: 36px;\n  flex-wrap: wrap;\n}\n\n// \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media (max-width: 960px) {\n  .checkout-layout { grid-template-columns: 1fr; }\n  .order-summary { position: static; }\n}\n\n@media (max-width: 600px) {\n  .form-row-2 { grid-template-columns: 1fr; }\n  .form-row-3 { grid-template-columns: 1fr 1fr; }\n  .step-actions { flex-direction: column-reverse; }\n}\n\n/* \u2500\u2500 Additional Mobile Responsive \u2500\u2500 */\n@media (max-width: 768px) {\n  .checkout-layout { grid-template-columns: 1fr; gap: 24px; padding-top: 24px; padding-bottom: 56px; }\n  .order-summary { position: static; }\n  .pay-option { padding: 12px; gap: 10px; }\n  .pm-name { font-size: 0.85rem; }\n  .pm-desc { font-size: 0.7rem; }\n  .step-actions { flex-direction: column-reverse; gap: 8px; .btn { width: 100%; justify-content: center; } }\n}\n\n@media (max-width: 480px) {\n  .steps-row { max-width: 100%; padding: 0 8px; }\n  .step-num { width: 30px; height: 30px; font-size: 0.78rem; }\n  .step span { font-size: 0.58rem; }\n  .step-line { margin-bottom: 16px; }\n  .checkout-main h2.step-title { font-size: 1.3rem; margin-bottom: 18px; }\n  .addr-card { padding: 12px; }\n  .form-row-2, .form-row-3 { grid-template-columns: 1fr; }\n  .review-items { padding: 14px; }\n  .ri-img { width: 44px; height: 59px; }\n  .sum-item { padding: 10px 16px; }\n  .success-state h2 { font-size: 1.8rem; }\n  .success-icon { width: 68px; height: 68px; font-size: 1.7rem; }\n  .success-acts { flex-direction: column; .btn { width: 100%; justify-content: center; } }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src\\app\\components\\checkout\\checkout.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=checkout.component.js.map