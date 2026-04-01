import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { ToastService } from '../../services/toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = a0 => ["/products", a0];
function AccountComponent_button_18_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", (tmp_3_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_3_0.wishlist == null ? null : tmp_3_0.wishlist.length, " ");
} }
function AccountComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function AccountComponent_button_18_Template_button_click_0_listener() { const t_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.tab = t_r2.key); });
    i0.ɵɵelementStart(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵtemplate(4, AccountComponent_button_18_span_4_Template, 2, 1, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_5_0;
    const t_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.tab === t_r2.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r2.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", t_r2.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", t_r2.key === "wishlist" && ((tmp_5_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_5_0.wishlist == null ? null : tmp_5_0.wishlist.length));
} }
function AccountComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "h3", 24);
    i0.ɵɵtext(3, "Personal Information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 25);
    i0.ɵɵtext(5, "Update your name, phone number, and password");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 26)(7, "h4", 27);
    i0.ɵɵtext(8, "Basic Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 28)(10, "div", 29)(11, "label", 30);
    i0.ɵɵtext(12, "Full Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_25_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.editName, $event) || (ctx_r2.editName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 29)(15, "label", 30);
    i0.ɵɵtext(16, "Phone Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_25_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.editPhone, $event) || (ctx_r2.editPhone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 29)(19, "label", 30);
    i0.ɵɵtext(20, "Email Address ");
    i0.ɵɵelementStart(21, "span", 33);
    i0.ɵɵtext(22, "(cannot be changed)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(23, "input", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 26)(25, "h4", 27);
    i0.ɵɵtext(26, "Change Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 28)(28, "div", 29)(29, "label", 30);
    i0.ɵɵtext(30, "Current Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "input", 35);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_25_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.currPwd, $event) || (ctx_r2.currPwd = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 29)(33, "label", 30);
    i0.ɵɵtext(34, "New Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "input", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_25_Template_input_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.newPwd, $event) || (ctx_r2.newPwd = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "p", 37);
    i0.ɵɵtext(37, "Leave password fields empty if you don't want to change it.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 38)(39, "button", 39);
    i0.ɵɵlistener("click", function AccountComponent_div_25_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.saveProfile()); });
    i0.ɵɵelementStart(40, "span", 16);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.editName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.editPhone);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("value", (tmp_3_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_3_0.email);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.currPwd);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.newPwd);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.saving());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.saving() ? "hourglass_top" : "save");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.saving() ? "Saving..." : "Save Changes", " ");
} }
function AccountComponent_div_26_div_7_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 56);
    i0.ɵɵtext(1, "Default");
    i0.ɵɵelementEnd();
} }
function AccountComponent_div_26_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "span", 47);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 48);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AccountComponent_div_26_div_7_span_7_Template, 2, 0, "span", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 50);
    i0.ɵɵlistener("click", function AccountComponent_div_26_div_7_Template_button_click_8_listener() { const a_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.deleteAddr(a_r6._id)); });
    i0.ɵɵelementStart(9, "span", 16);
    i0.ɵɵtext(10, "delete_outline");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 51)(12, "div", 52);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 53);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 54);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 55)(19, "span", 16);
    i0.ɵɵtext(20, "phone");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const a_r6 = ctx.$implicit;
    i0.ɵɵclassProp("default", a_r6.isDefault);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r6.label === "Home" ? "home" : a_r6.label === "Office" ? "business" : "location_on");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r6.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", a_r6.isDefault);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(a_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r6.street);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", a_r6.city, ", ", a_r6.state, " \u2014 ", a_r6.pincode, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", a_r6.phone, " ");
} }
function AccountComponent_div_26_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵlistener("click", function AccountComponent_div_26_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(2); ctx_r2.showAddr = true; return i0.ɵɵresetView(ctx_r2.resetNA()); });
    i0.ɵɵelementStart(1, "span", 16);
    i0.ɵɵtext(2, "add_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Add New Address");
    i0.ɵɵelementEnd()();
} }
function AccountComponent_div_26_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 58)(1, "h4", 27);
    i0.ɵɵtext(2, "New Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 28)(4, "div", 29)(5, "label", 30);
    i0.ɵɵtext(6, "Label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "select", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_26_div_9_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.na.label, $event) || (ctx_r2.na.label = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(8, "option");
    i0.ɵɵtext(9, "Home");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option");
    i0.ɵɵtext(11, "Office");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option");
    i0.ɵɵtext(13, "Other");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 60)(15, "input", 61);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_26_div_9_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.na.isDefault, $event) || (ctx_r2.na.isDefault = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "label", 62);
    i0.ɵɵtext(17, "Set as default");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 28)(19, "div", 29)(20, "label", 30);
    i0.ɵɵtext(21, "Full Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "input", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_26_div_9_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.na.name, $event) || (ctx_r2.na.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 29)(24, "label", 30);
    i0.ɵɵtext(25, "Phone *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_26_div_9_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.na.phone, $event) || (ctx_r2.na.phone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 29)(28, "label", 30);
    i0.ɵɵtext(29, "Street Address *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "input", 63);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_26_div_9_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.na.street, $event) || (ctx_r2.na.street = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 64)(32, "div", 29)(33, "label", 30);
    i0.ɵɵtext(34, "City *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "input", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_26_div_9_Template_input_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.na.city, $event) || (ctx_r2.na.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 29)(37, "label", 30);
    i0.ɵɵtext(38, "State *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "input", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_26_div_9_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.na.state, $event) || (ctx_r2.na.state = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 29)(41, "label", 30);
    i0.ɵɵtext(42, "Pincode *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "input", 65);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountComponent_div_26_div_9_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.na.pincode, $event) || (ctx_r2.na.pincode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 66)(45, "button", 67);
    i0.ɵɵlistener("click", function AccountComponent_div_26_div_9_Template_button_click_45_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.addAddr()); });
    i0.ɵɵelementStart(46, "span", 16);
    i0.ɵɵtext(47, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(48, " Add Address ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "button", 68);
    i0.ɵɵlistener("click", function AccountComponent_div_26_div_9_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.showAddr = false); });
    i0.ɵɵtext(50, "Cancel");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.na.label);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.na.isDefault);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.na.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.na.phone);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.na.street);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.na.city);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.na.state);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.na.pincode);
} }
function AccountComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "h3", 24);
    i0.ɵɵtext(3, "Saved Addresses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 25);
    i0.ɵɵtext(5, "Manage your delivery addresses");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 40);
    i0.ɵɵtemplate(7, AccountComponent_div_26_div_7_Template, 22, 11, "div", 41)(8, AccountComponent_div_26_div_8_Template, 5, 0, "div", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AccountComponent_div_26_div_9_Template, 51, 8, "div", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", (tmp_1_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_1_0.addresses);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.showAddr);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showAddr);
} }
function AccountComponent_div_27_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 73);
    i0.ɵɵtext(1, "Loading orders...");
    i0.ɵɵelementEnd();
} }
function AccountComponent_div_27_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74)(1, "span", 16);
    i0.ɵɵtext(2, "receipt_long");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "No orders yet. ");
    i0.ɵɵelementStart(5, "a", 75);
    i0.ɵɵtext(6, "Start shopping!");
    i0.ɵɵelementEnd()()();
} }
function AccountComponent_div_27_div_8_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 86);
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    i0.ɵɵproperty("src", i_r9.productImage, i0.ɵɵsanitizeUrl)("alt", i_r9.productName);
} }
function AccountComponent_div_27_div_8_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 87);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("+", o_r10.items.length - 3, "");
} }
function AccountComponent_div_27_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76)(1, "div", 77)(2, "div", 78);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 79);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 80);
    i0.ɵɵtemplate(8, AccountComponent_div_27_div_8_img_8_Template, 1, 2, "img", 81)(9, AccountComponent_div_27_div_8_span_9_Template, 2, 1, "span", 82);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 83)(11, "span", 84);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 85);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const o_r10 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(o_r10.orderNumber);
    i0.ɵɵadvance();
    i0.ɵɵclassMap("mst-" + o_r10.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 8, o_r10.status));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", o_r10.items.slice(0, 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", o_r10.items.length > 3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(13, 10, o_r10.createdAt, "d MMM yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.ps.formatPrice(o_r10.total));
} }
function AccountComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "h3", 24);
    i0.ɵɵtext(3, "Recent Orders");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 69);
    i0.ɵɵtext(5, "View All \u2192");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, AccountComponent_div_27_div_6_Template, 2, 0, "div", 70)(7, AccountComponent_div_27_div_7_Template, 7, 0, "div", 71)(8, AccountComponent_div_27_div_8_Template, 16, 13, "div", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r2.loadingOrders());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.loadingOrders() && ctx_r2.orders().length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.orders());
} }
function AccountComponent_div_28_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 73);
    i0.ɵɵtext(1, "Loading wishlist...");
    i0.ɵɵelementEnd();
} }
function AccountComponent_div_28_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74)(1, "span", 16);
    i0.ɵɵtext(2, "favorite_border");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "No saved items. Tap \u2665 on any saree to save it here.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 89);
    i0.ɵɵtext(6, "Browse Collection");
    i0.ɵɵelementEnd()();
} }
function AccountComponent_div_28_div_8_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 105);
    i0.ɵɵtext(1, "Sold Out");
    i0.ɵɵelementEnd();
} }
function AccountComponent_div_28_div_8_div_1_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 106);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.ps.formatPrice(p_r12.originalPrice));
} }
function AccountComponent_div_28_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 92)(1, "div", 93)(2, "a", 94);
    i0.ɵɵelement(3, "img", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 96);
    i0.ɵɵlistener("click", function AccountComponent_div_28_div_8_div_1_Template_button_click_4_listener() { const p_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.removeFromWishlist(p_r12._id)); });
    i0.ɵɵelementStart(5, "span", 16);
    i0.ɵɵtext(6, "favorite");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, AccountComponent_div_28_div_8_div_1_span_7_Template, 2, 0, "span", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 98)(9, "div", 99);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 100);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 101);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 102)(16, "span", 103);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, AccountComponent_div_28_div_8_div_1_span_18_Template, 2, 1, "span", 104);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, p_r12._id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", p_r12.images[0], i0.ɵɵsanitizeUrl)("alt", p_r12.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", p_r12.stock === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r12.category);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(12, _c0, p_r12._id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r12.origin);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.ps.formatPrice(p_r12.price));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", p_r12.originalPrice);
} }
function AccountComponent_div_28_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90);
    i0.ɵɵtemplate(1, AccountComponent_div_28_div_8_div_1_Template, 19, 14, "div", 91);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.wishlistProducts());
} }
function AccountComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "h3", 24);
    i0.ɵɵtext(3, "My Wishlist");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 25);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, AccountComponent_div_28_div_6_Template, 2, 0, "div", 70)(7, AccountComponent_div_28_div_7_Template, 7, 0, "div", 71)(8, AccountComponent_div_28_div_8_Template, 2, 1, "div", 88);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", ctx_r2.wishlistProducts().length, " saved item", ctx_r2.wishlistProducts().length !== 1 ? "s" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.loadingWishlist());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.loadingWishlist() && ctx_r2.wishlistProducts().length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.wishlistProducts().length > 0);
} }
export class AccountComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.orderService = inject(OrderService);
        this.ps = inject(ProductService);
        this.toast = inject(ToastService);
        this.tab = 'profile';
        this.saving = signal(false);
        this.loadingOrders = signal(false);
        this.loadingWishlist = signal(false);
        this.orders = signal([]);
        this.wishlistProducts = signal([]);
        this.showAddr = false;
        this.editName = this.auth.currentUser()?.name || '';
        this.editPhone = this.auth.currentUser()?.phone || '';
        this.currPwd = '';
        this.newPwd = '';
        this.na = { name: '', phone: '', street: '', city: '', state: '', pincode: '', label: 'Home', isDefault: false };
        this.tabs = [
            { key: 'profile', label: 'My Profile', icon: 'person' },
            { key: 'addresses', label: 'Addresses', icon: 'location_on' },
            { key: 'orders', label: 'My Orders', icon: 'receipt_long' },
            { key: 'wishlist', label: 'Wishlist', icon: 'favorite_border' },
        ];
    }
    ngOnInit() {
        // Preload recent orders and wishlist
        this.loadingOrders.set(true);
        this.orderService.getMyOrders(1, 5).subscribe({
            next: r => { this.orders.set(r.orders); this.loadingOrders.set(false); },
            error: () => this.loadingOrders.set(false),
        });
        this.loadWishlist();
    }
    loadWishlist() {
        const ids = this.auth.currentUser()?.wishlist;
        if (!ids || ids.length === 0) {
            this.wishlistProducts.set([]);
            return;
        }
        // Fetch all wishlist products in one query
        this.loadingWishlist.set(true);
        // We fetch products and filter by wishlist IDs
        this.ps.getProducts({ limit: 50 }).subscribe({
            next: r => {
                const wished = r.products.filter(p => ids.includes(p._id));
                this.wishlistProducts.set(wished);
                this.loadingWishlist.set(false);
            },
            error: () => this.loadingWishlist.set(false),
        });
    }
    removeFromWishlist(productId) {
        this.auth.toggleWishlist(productId).subscribe({
            next: () => {
                this.wishlistProducts.update(ps => ps.filter(p => p._id !== productId));
                this.toast.success('Removed from wishlist');
            },
            error: (e) => this.toast.error(e.message),
        });
    }
    saveProfile() {
        this.saving.set(true);
        const data = { name: this.editName, phone: this.editPhone };
        if (this.currPwd && this.newPwd) {
            data.currentPassword = this.currPwd;
            data.newPassword = this.newPwd;
        }
        this.auth.updateProfile(data).subscribe({
            next: (r) => {
                this.toast.success(r.message);
                this.saving.set(false);
                this.currPwd = '';
                this.newPwd = '';
            },
            error: (e) => { this.toast.error(e.message); this.saving.set(false); },
        });
    }
    resetNA() {
        this.na = {
            name: this.auth.currentUser()?.name || '',
            phone: this.auth.currentUser()?.phone || '',
            street: '', city: '', state: '', pincode: '', label: 'Home', isDefault: false
        };
    }
    addAddr() {
        if (!this.na.name || !this.na.street || !this.na.city || !this.na.pincode) {
            this.toast.error('Please fill all required fields.');
            return;
        }
        this.auth.addAddress(this.na).subscribe({
            next: r => { this.toast.success(r.message); this.showAddr = false; },
            error: e => this.toast.error(e.message),
        });
    }
    deleteAddr(id) {
        this.auth.deleteAddress(id).subscribe({
            next: () => this.toast.info('Address removed'),
            error: e => this.toast.error(e.message),
        });
    }
    static { this.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccountComponent, selectors: [["app-account"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 29, vars: 9, consts: [[1, "page-header"], [1, "container"], [1, "section-subtitle"], [1, "section-title"], [1, "section-divider"], [1, "container", "account-layout"], [1, "acct-sidebar"], [1, "acct-avatar-wrap"], [1, "acct-avatar"], [1, "acct-user-info"], [1, "acct-name"], [1, "acct-email"], [1, "acct-nav"], ["class", "anav-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "nav-sep"], [1, "anav-btn", "logout-btn", 3, "click"], [1, "material-icons"], [1, "acct-content"], ["class", "acct-panel", 4, "ngIf"], [1, "anav-btn", 3, "click"], ["class", "nav-count", 4, "ngIf"], [1, "nav-count"], [1, "acct-panel"], [1, "panel-header"], [1, "panel-title"], [1, "panel-sub"], [1, "form-section"], [1, "form-section-title"], [1, "fg-row"], [1, "form-group"], [1, "form-label"], ["placeholder", "Your full name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "10-digit mobile", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "readonly-note"], ["disabled", "", 1, "form-control", "readonly", 3, "value"], ["type", "password", "placeholder", "Enter current password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Min 6 characters", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "pwd-note"], [1, "panel-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "addresses-grid"], ["class", "addr-card", 3, "default", 4, "ngFor", "ngForOf"], ["class", "addr-add-card", 3, "click", 4, "ngIf"], ["class", "new-addr-form", 4, "ngIf"], [1, "addr-card"], [1, "addr-card-header"], [1, "addr-label-row"], [1, "material-icons", "addr-icon"], [1, "addr-label"], ["class", "default-badge", 4, "ngIf"], [1, "addr-delete-btn", 3, "click"], [1, "addr-body"], [1, "addr-name"], [1, "addr-street"], [1, "addr-city"], [1, "addr-phone"], [1, "default-badge"], [1, "addr-add-card", 3, "click"], [1, "new-addr-form"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", 2, "display", "flex", "align-items", "center", "gap", "8px", "padding-top", "24px"], ["type", "checkbox", "id", "def-addr", 3, "ngModelChange", "ngModel"], ["for", "def-addr", 2, "font-size", "0.85rem", "color", "var(--text-muted)", "cursor", "pointer"], ["placeholder", "House no., Street, Area", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fg-row-3"], ["maxlength", "6", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-ghost", 3, "click"], ["routerLink", "/orders", 1, "btn", "btn-ghost", "btn-sm"], ["class", "panel-loading", 4, "ngIf"], ["class", "panel-empty", 4, "ngIf"], ["class", "mini-order-card", 4, "ngFor", "ngForOf"], [1, "panel-loading"], [1, "panel-empty"], ["routerLink", "/products"], [1, "mini-order-card"], [1, "moc-header"], [1, "moc-num"], [1, "moc-status"], [1, "moc-items"], ["class", "moc-img", 3, "src", "alt", 4, "ngFor", "ngForOf"], ["class", "moc-more", 4, "ngIf"], [1, "moc-footer"], [1, "moc-date"], [1, "moc-total"], [1, "moc-img", 3, "src", "alt"], [1, "moc-more"], ["class", "wishlist-grid", 4, "ngIf"], ["routerLink", "/products", 1, "btn", "btn-outline", "btn-sm"], [1, "wishlist-grid"], ["class", "wish-card", 4, "ngFor", "ngForOf"], [1, "wish-card"], [1, "wc-img-wrap"], [3, "routerLink"], [3, "src", "alt"], ["title", "Remove from wishlist", 1, "wc-remove-btn", 3, "click"], ["class", "wc-oos", 4, "ngIf"], [1, "wc-body"], [1, "wc-cat"], [1, "wc-name", 3, "routerLink"], [1, "wc-origin"], [1, "wc-price-row"], [1, "wc-price"], ["class", "wc-orig", 4, "ngIf"], [1, "wc-oos"], [1, "wc-orig"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtext(3, "My Account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 5)(8, "aside", 6)(9, "div", 7)(10, "div", 8);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 9)(13, "div", 10);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 11);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(17, "nav", 12);
            i0.ɵɵtemplate(18, AccountComponent_button_18_Template, 5, 5, "button", 13);
            i0.ɵɵelement(19, "div", 14);
            i0.ɵɵelementStart(20, "button", 15);
            i0.ɵɵlistener("click", function AccountComponent_Template_button_click_20_listener() { return ctx.auth.logout(); });
            i0.ɵɵelementStart(21, "span", 16);
            i0.ɵɵtext(22, "logout");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(23, " Sign Out ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(24, "div", 17);
            i0.ɵɵtemplate(25, AccountComponent_div_25_Template, 43, 8, "div", 18)(26, AccountComponent_div_26_Template, 10, 3, "div", 18)(27, AccountComponent_div_27_Template, 9, 3, "div", 18)(28, AccountComponent_div_28_Template, 9, 5, "div", 18);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate((tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.name);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate((tmp_1_0 = ctx.auth.currentUser()) == null ? null : tmp_1_0.name == null ? null : tmp_1_0.name[0]);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate((tmp_2_0 = ctx.auth.currentUser()) == null ? null : tmp_2_0.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((tmp_3_0 = ctx.auth.currentUser()) == null ? null : tmp_3_0.email);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.tab === "profile");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tab === "addresses");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tab === "orders");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tab === "wishlist");
        } }, dependencies: [RouterLink, CommonModule, i1.NgForOf, i1.NgIf, i1.TitleCasePipe, i1.DatePipe, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.MaxLengthValidator, i2.NgModel], styles: ["//[_ngcontent-%COMP%]   Account[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n.account-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 40px;\n  padding-top: 40px;\n  padding-bottom: 80px;\n  align-items: start;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Sidebar[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.acct-sidebar[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  position: sticky;\n  top: 100px;\n}\n\n.acct-avatar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 24px;\n  background: linear-gradient(135deg, var(--bg-2) 0%, var(--surface-2) 100%);\n  border-bottom: 1px solid var(--border);\n}\n\n.acct-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(123,30,58,0.25);\n}\n\n.acct-user-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.acct-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1rem;\n  color: var(--text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.acct-email[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.acct-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 12px 0;\n}\n\n.anav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 20px;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 0.82rem;\n  font-family: var(--font-body);\n  cursor: pointer;\n  border-radius: 0;\n  transition: all 0.2s;\n  position: relative;\n  text-align: left;\n\n  .material-icons { font-size: 18px; flex-shrink: 0; }\n\n  .nav-count {\n    margin-left: auto;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background: var(--burgundy);\n    color: white;\n    font-size: 0.65rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 3px;\n    background: var(--burgundy);\n    border-radius: 0 2px 2px 0;\n    opacity: 0;\n    transition: opacity 0.2s;\n  }\n\n  &:hover {\n    background: var(--surface);\n    color: var(--burgundy);\n    &::before { opacity: 0.5; }\n  }\n\n  &.active {\n    background: var(--burgundy-pale);\n    color: var(--burgundy);\n    font-weight: 500;\n    &::before { opacity: 1; }\n  }\n}\n\n.nav-sep[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border);\n  margin: 8px 16px;\n}\n\n.logout-btn[_ngcontent-%COMP%] {\n  color: var(--error) !important;\n  &:hover { background: rgba(192,57,43,0.06) !important; color: var(--error) !important; }\n  &::before { background: var(--error) !important; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Panel[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.acct-panel[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface);\n}\n\n.panel-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  color: var(--text);\n  font-weight: 400;\n}\n\n.panel-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.82rem;\n  margin-top: 4px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Form[_ngcontent-%COMP%]   Sections[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.form-section[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  border-bottom: 1px solid rgba(107,84,71,0.08);\n  &:last-child { border-bottom: none; }\n}\n\n.form-section-title[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  font-family: var(--font-body);\n  font-weight: 600;\n  margin-bottom: 18px;\n}\n\n.fg-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\n.fg-row-3[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }\n\n.readonly[_ngcontent-%COMP%] { background: var(--surface) !important; cursor: not-allowed; }\n.readonly-note[_ngcontent-%COMP%] { font-size: 0.68rem; color: var(--text-dim); font-weight: 300; letter-spacing: 0.04em; text-transform: none; }\n\n.pwd-note[_ngcontent-%COMP%] { font-size: 0.75rem; color: var(--text-dim); margin-top: 8px; }\n\n.panel-actions[_ngcontent-%COMP%] {\n  padding: 20px 28px;\n  background: var(--surface);\n  border-top: 1px solid var(--border);\n}\n\n.form-actions[_ngcontent-%COMP%] { display: flex; gap: 10px; margin-top: 16px; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Address[_ngcontent-%COMP%]   Cards[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.addresses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n  padding: 24px 28px;\n}\n\n.addr-card[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.2s;\n\n  &:hover { border-color: var(--border-strong); box-shadow: var(--shadow-sm); }\n  &.default { border-color: var(--burgundy); }\n}\n\n.addr-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n}\n\n.addr-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n\n  .addr-icon { font-size: 15px; color: var(--gold-warm); }\n  .addr-label { font-size: 0.75rem; font-weight: 600; color: var(--text); letter-spacing: 0.04em; text-transform: uppercase; }\n}\n\n.default-badge[_ngcontent-%COMP%] {\n  padding: 1px 7px;\n  background: var(--burgundy);\n  color: white;\n  border-radius: 10px;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.addr-delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n  .material-icons { font-size: 16px; }\n  &:hover { color: var(--error); }\n}\n\n.addr-body[_ngcontent-%COMP%] {\n  padding: 14px;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n\n  .addr-name { font-weight: 600; color: var(--text); font-size: 0.875rem; margin-bottom: 4px; }\n  .addr-phone { display:flex; align-items:center; gap:4px; margin-top:4px; .material-icons{font-size:12px} }\n}\n\n.addr-add-card[_ngcontent-%COMP%] {\n  border: 1.5px dashed var(--border);\n  border-radius: var(--radius-md);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  transition: all 0.2s;\n  min-height: 140px;\n\n  .material-icons { font-size: 28px; color: var(--gold-warm); }\n  &:hover { border-color: var(--burgundy); color: var(--burgundy); .material-icons { color: var(--burgundy); } }\n}\n\n.new-addr-form[_ngcontent-%COMP%] {\n  margin: 0 28px 24px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 20px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Mini[_ngcontent-%COMP%]   Order[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.mini-order-card[_ngcontent-%COMP%] {\n  margin: 0 28px 16px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n  &:hover { box-shadow: var(--shadow-sm); }\n}\n\n.moc-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n}\n\n.moc-num[_ngcontent-%COMP%] {\n  font-family: 'Courier New', monospace;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text);\n}\n\n.moc-status[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.mst-pending[_ngcontent-%COMP%], .mst-confirmed[_ngcontent-%COMP%], .mst-processing[_ngcontent-%COMP%] { background:rgba(107,84,71,0.1); color:var(--text-muted); }\n.mst-shipped[_ngcontent-%COMP%], .mst-out_for_delivery[_ngcontent-%COMP%] { background:rgba(201,149,42,0.12); color:var(--gold-warm); }\n.mst-delivered[_ngcontent-%COMP%] { background:rgba(45,122,79,0.12); color:var(--success); }\n.mst-cancelled[_ngcontent-%COMP%], .mst-returned[_ngcontent-%COMP%] { background:rgba(192,57,43,0.1); color:var(--error); }\n\n.moc-items[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 16px;\n  align-items: center;\n}\n\n.moc-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 54px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n}\n\n.moc-more[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n\n.moc-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  border-top: 1px solid var(--border);\n  background: var(--surface);\n}\n\n.moc-date[_ngcontent-%COMP%] { font-size: 0.75rem; color: var(--text-muted); }\n.moc-total[_ngcontent-%COMP%] { font-family: var(--font-display); color: var(--burgundy); font-size: 0.95rem; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Wishlist[_ngcontent-%COMP%]   Grid[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.wishlist-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  padding: 24px 28px;\n}\n\n.wish-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.3s;\n\n  &:hover {\n    box-shadow: var(--shadow-md);\n    transform: translateY(-3px);\n    border-color: var(--border-warm);\n  }\n}\n\n.wc-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3/4;\n  overflow: hidden;\n  background: var(--surface);\n\n  a { display: block; width: 100%; height: 100%; }\n  img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }\n  &:hover img { transform: scale(1.04); }\n}\n\n.wc-remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid rgba(224,82,82,0.3);\n  color: #e05252;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 2px 8px rgba(44,24,16,0.1);\n\n  .material-icons { font-size: 16px; }\n  &:hover { background: #e05252; color: white; }\n}\n\n.wc-oos[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(250,248,244,0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.72rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n\n.wc-body[_ngcontent-%COMP%] { padding: 12px; }\n.wc-cat[_ngcontent-%COMP%] { font-size: 0.58rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold-warm); margin-bottom: 4px; }\n.wc-name[_ngcontent-%COMP%] { display:block; font-family:var(--font-display); font-size:0.9rem; color:var(--text); text-decoration:none; line-height:1.3; margin-bottom:2px; &:hover{color:var(--burgundy)} }\n.wc-origin[_ngcontent-%COMP%] { font-size:0.68rem; color:var(--text-dim); margin-bottom:8px; }\n.wc-price-row[_ngcontent-%COMP%] { display:flex; align-items:baseline; gap:6px; }\n.wc-price[_ngcontent-%COMP%] { font-family:var(--font-display); color:var(--burgundy); font-size:1rem; }\n.wc-orig[_ngcontent-%COMP%] { font-size:0.72rem; text-decoration:line-through; color:var(--text-dim); }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Loading[_ngcontent-%COMP%]   /[_ngcontent-%COMP%]   Empty[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.panel-loading[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n\n.panel-empty[_ngcontent-%COMP%] {\n  padding: 48px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n\n  .material-icons { font-size: 40px; color: var(--text-dim); }\n  p { color: var(--text-muted); font-size: 0.875rem; a { color: var(--burgundy); } }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Responsive[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:   960px)[_ngcontent-%COMP%] {\n  .account-layout { grid-template-columns: 1fr; }\n  .acct-sidebar { position: static; }\n}\n\n@media (max-width: 600px) {\n  .panel-header[_ngcontent-%COMP%] { padding: 18px; }\n  .form-section[_ngcontent-%COMP%] { padding: 18px; }\n  .fg-row[_ngcontent-%COMP%], .fg-row-3[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .addresses-grid[_ngcontent-%COMP%] { padding: 18px; grid-template-columns: 1fr; }\n  .wishlist-grid[_ngcontent-%COMP%] { padding: 18px; grid-template-columns: repeat(2, 1fr); gap: 12px; }\n  .mini-order-card[_ngcontent-%COMP%] { margin: 0 18px 14px; }\n}\n\n\n\n@media (max-width: 768px) {\n  .account-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 20px; padding-top: 24px; padding-bottom: 56px; }\n  .acct-sidebar[_ngcontent-%COMP%] { position: static; border-radius: var(--radius-md); }\n  .acct-avatar-wrap[_ngcontent-%COMP%] { padding: 16px; }\n  .acct-nav[_ngcontent-%COMP%] { flex-direction: row; overflow-x: auto; padding: 4px 8px; gap: 2px; -webkit-overflow-scrolling: touch; }\n  .anav-btn[_ngcontent-%COMP%] { flex-direction: column; gap: 3px; padding: 8px 12px; font-size: 0.68rem; white-space: nowrap; border-radius: 0; .material-icons { font-size: 16px; } .nav-count { position: absolute; top: 4px; right: 4px; width: 16px; height: 16px; font-size: 0.55rem; } }\n  .nav-sep[_ngcontent-%COMP%] { width: 1px; height: auto; margin: 4px 0; }\n}\n\n@media (max-width: 600px) {\n  .panel-header[_ngcontent-%COMP%] { padding: 16px 18px; flex-direction: column; align-items: flex-start; gap: 8px; }\n  .form-section[_ngcontent-%COMP%] { padding: 16px 18px; }\n  .fg-row[_ngcontent-%COMP%], .fg-row-3[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .addresses-grid[_ngcontent-%COMP%] { padding: 16px 18px; grid-template-columns: 1fr; }\n  .wishlist-grid[_ngcontent-%COMP%] { padding: 16px 18px; grid-template-columns: repeat(2, 1fr); gap: 10px; }\n  .mini-order-card[_ngcontent-%COMP%] { margin: 0 18px 12px; }\n  .panel-actions[_ngcontent-%COMP%] { padding: 14px 18px; }\n  .new-addr-form[_ngcontent-%COMP%] { margin: 0 18px 16px; }\n}\n\n@media (max-width: 400px) {\n  .wishlist-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .wc-name[_ngcontent-%COMP%] { font-size: 0.85rem; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountComponent, [{
        type: Component,
        args: [{ selector: 'app-account', standalone: true, imports: [RouterLink, CommonModule, FormsModule], template: "<div class=\"page-header\">\n  <div class=\"container\">\n    <div class=\"section-subtitle\">My Account</div>\n    <h1 class=\"section-title\">{{ auth.currentUser()?.name }}</h1>\n    <div class=\"section-divider\"></div>\n  </div>\n</div>\n\n<div class=\"container account-layout\">\n\n  <!-- \u2500\u2500 Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <aside class=\"acct-sidebar\">\n    <div class=\"acct-avatar-wrap\">\n      <div class=\"acct-avatar\">{{ auth.currentUser()?.name?.[0] }}</div>\n      <div class=\"acct-user-info\">\n        <div class=\"acct-name\">{{ auth.currentUser()?.name }}</div>\n        <div class=\"acct-email\">{{ auth.currentUser()?.email }}</div>\n      </div>\n    </div>\n\n    <nav class=\"acct-nav\">\n      <button *ngFor=\"let t of tabs\" class=\"anav-btn\" [class.active]=\"tab === t.key\" (click)=\"tab = t.key\">\n        <span class=\"material-icons\">{{ t.icon }}</span>\n        {{ t.label }}\n        <span *ngIf=\"t.key === 'wishlist' && auth.currentUser()?.wishlist?.length\" class=\"nav-count\">\n          {{ auth.currentUser()?.wishlist?.length }}\n        </span>\n      </button>\n      <div class=\"nav-sep\"></div>\n      <button class=\"anav-btn logout-btn\" (click)=\"auth.logout()\">\n        <span class=\"material-icons\">logout</span>\n        Sign Out\n      </button>\n    </nav>\n  </aside>\n\n  <!-- \u2500\u2500 Main Content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"acct-content\">\n\n    <!-- \u2500\u2500 PROFILE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <div *ngIf=\"tab === 'profile'\" class=\"acct-panel\">\n      <div class=\"panel-header\">\n        <h3 class=\"panel-title\">Personal Information</h3>\n        <p class=\"panel-sub\">Update your name, phone number, and password</p>\n      </div>\n\n      <div class=\"form-section\">\n        <h4 class=\"form-section-title\">Basic Details</h4>\n        <div class=\"fg-row\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Full Name</label>\n            <input class=\"form-control\" [(ngModel)]=\"editName\" placeholder=\"Your full name\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Phone Number</label>\n            <input class=\"form-control\" [(ngModel)]=\"editPhone\" placeholder=\"10-digit mobile\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"form-label\">Email Address <span class=\"readonly-note\">(cannot be changed)</span></label>\n          <input class=\"form-control readonly\" [value]=\"auth.currentUser()?.email\" disabled>\n        </div>\n      </div>\n\n      <div class=\"form-section\">\n        <h4 class=\"form-section-title\">Change Password</h4>\n        <div class=\"fg-row\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Current Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"currPwd\" placeholder=\"Enter current password\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">New Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newPwd\" placeholder=\"Min 6 characters\">\n          </div>\n        </div>\n        <p class=\"pwd-note\">Leave password fields empty if you don't want to change it.</p>\n      </div>\n\n      <div class=\"panel-actions\">\n        <button class=\"btn btn-primary\" (click)=\"saveProfile()\" [disabled]=\"saving()\">\n          <span class=\"material-icons\">{{ saving() ? 'hourglass_top' : 'save' }}</span>\n          {{ saving() ? 'Saving...' : 'Save Changes' }}\n        </button>\n      </div>\n    </div>\n\n    <!-- \u2500\u2500 ADDRESSES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <div *ngIf=\"tab === 'addresses'\" class=\"acct-panel\">\n      <div class=\"panel-header\">\n        <h3 class=\"panel-title\">Saved Addresses</h3>\n        <p class=\"panel-sub\">Manage your delivery addresses</p>\n      </div>\n\n      <div class=\"addresses-grid\">\n        <div *ngFor=\"let a of auth.currentUser()?.addresses\" class=\"addr-card\" [class.default]=\"a.isDefault\">\n          <div class=\"addr-card-header\">\n            <div class=\"addr-label-row\">\n              <span class=\"material-icons addr-icon\">{{ a.label === 'Home' ? 'home' : a.label === 'Office' ? 'business' : 'location_on' }}</span>\n              <span class=\"addr-label\">{{ a.label }}</span>\n              <span *ngIf=\"a.isDefault\" class=\"default-badge\">Default</span>\n            </div>\n            <button class=\"addr-delete-btn\" (click)=\"deleteAddr(a._id!)\">\n              <span class=\"material-icons\">delete_outline</span>\n            </button>\n          </div>\n          <div class=\"addr-body\">\n            <div class=\"addr-name\">{{ a.name }}</div>\n            <div class=\"addr-street\">{{ a.street }}</div>\n            <div class=\"addr-city\">{{ a.city }}, {{ a.state }} \u2014 {{ a.pincode }}</div>\n            <div class=\"addr-phone\">\n              <span class=\"material-icons\">phone</span> {{ a.phone }}\n            </div>\n          </div>\n        </div>\n\n        <!-- Add new address card trigger -->\n        <div *ngIf=\"!showAddr\" class=\"addr-add-card\" (click)=\"showAddr=true; resetNA()\">\n          <span class=\"material-icons\">add_circle_outline</span>\n          <span>Add New Address</span>\n        </div>\n      </div>\n\n      <!-- New address form -->\n      <div *ngIf=\"showAddr\" class=\"new-addr-form\">\n        <h4 class=\"form-section-title\">New Address</h4>\n        <div class=\"fg-row\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Label</label>\n            <select class=\"form-control\" [(ngModel)]=\"na.label\">\n              <option>Home</option><option>Office</option><option>Other</option>\n            </select>\n          </div>\n          <div class=\"form-group\" style=\"display:flex;align-items:center;gap:8px;padding-top:24px\">\n            <input type=\"checkbox\" [(ngModel)]=\"na.isDefault\" id=\"def-addr\">\n            <label for=\"def-addr\" style=\"font-size:0.85rem;color:var(--text-muted);cursor:pointer\">Set as default</label>\n          </div>\n        </div>\n        <div class=\"fg-row\">\n          <div class=\"form-group\"><label class=\"form-label\">Full Name *</label><input class=\"form-control\" [(ngModel)]=\"na.name\"></div>\n          <div class=\"form-group\"><label class=\"form-label\">Phone *</label><input class=\"form-control\" [(ngModel)]=\"na.phone\"></div>\n        </div>\n        <div class=\"form-group\"><label class=\"form-label\">Street Address *</label><input class=\"form-control\" [(ngModel)]=\"na.street\" placeholder=\"House no., Street, Area\"></div>\n        <div class=\"fg-row-3\">\n          <div class=\"form-group\"><label class=\"form-label\">City *</label><input class=\"form-control\" [(ngModel)]=\"na.city\"></div>\n          <div class=\"form-group\"><label class=\"form-label\">State *</label><input class=\"form-control\" [(ngModel)]=\"na.state\"></div>\n          <div class=\"form-group\"><label class=\"form-label\">Pincode *</label><input class=\"form-control\" [(ngModel)]=\"na.pincode\" maxlength=\"6\"></div>\n        </div>\n        <div class=\"form-actions\">\n          <button class=\"btn btn-primary\" (click)=\"addAddr()\">\n            <span class=\"material-icons\">add</span> Add Address\n          </button>\n          <button class=\"btn btn-ghost\" (click)=\"showAddr=false\">Cancel</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- \u2500\u2500 ORDERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <div *ngIf=\"tab === 'orders'\" class=\"acct-panel\">\n      <div class=\"panel-header\">\n        <h3 class=\"panel-title\">Recent Orders</h3>\n        <a routerLink=\"/orders\" class=\"btn btn-ghost btn-sm\">View All \u2192</a>\n      </div>\n\n      <div *ngIf=\"loadingOrders()\" class=\"panel-loading\">Loading orders...</div>\n\n      <div *ngIf=\"!loadingOrders() && orders().length === 0\" class=\"panel-empty\">\n        <span class=\"material-icons\">receipt_long</span>\n        <p>No orders yet. <a routerLink=\"/products\">Start shopping!</a></p>\n      </div>\n\n      <div *ngFor=\"let o of orders()\" class=\"mini-order-card\">\n        <div class=\"moc-header\">\n          <div class=\"moc-num\">{{ o.orderNumber }}</div>\n          <span class=\"moc-status\" [class]=\"'mst-' + o.status\">{{ o.status | titlecase }}</span>\n        </div>\n        <div class=\"moc-items\">\n          <img *ngFor=\"let i of o.items.slice(0,3)\" [src]=\"i.productImage\" [alt]=\"i.productName\" class=\"moc-img\">\n          <span *ngIf=\"o.items.length > 3\" class=\"moc-more\">+{{ o.items.length - 3 }}</span>\n        </div>\n        <div class=\"moc-footer\">\n          <span class=\"moc-date\">{{ o.createdAt | date:'d MMM yyyy' }}</span>\n          <span class=\"moc-total\">{{ ps.formatPrice(o.total) }}</span>\n        </div>\n      </div>\n    </div>\n\n    <!-- \u2500\u2500 WISHLIST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <div *ngIf=\"tab === 'wishlist'\" class=\"acct-panel\">\n      <div class=\"panel-header\">\n        <h3 class=\"panel-title\">My Wishlist</h3>\n        <p class=\"panel-sub\">{{ wishlistProducts().length }} saved item{{ wishlistProducts().length !== 1 ? 's' : '' }}</p>\n      </div>\n\n      <div *ngIf=\"loadingWishlist()\" class=\"panel-loading\">Loading wishlist...</div>\n\n      <div *ngIf=\"!loadingWishlist() && wishlistProducts().length === 0\" class=\"panel-empty\">\n        <span class=\"material-icons\">favorite_border</span>\n        <p>No saved items. Tap \u2665 on any saree to save it here.</p>\n        <a routerLink=\"/products\" class=\"btn btn-outline btn-sm\">Browse Collection</a>\n      </div>\n\n      <div *ngIf=\"wishlistProducts().length > 0\" class=\"wishlist-grid\">\n        <div *ngFor=\"let p of wishlistProducts()\" class=\"wish-card\">\n          <div class=\"wc-img-wrap\">\n            <a [routerLink]=\"['/products', p._id]\">\n              <img [src]=\"p.images[0]\" [alt]=\"p.name\">\n            </a>\n            <button class=\"wc-remove-btn\" (click)=\"removeFromWishlist(p._id)\" title=\"Remove from wishlist\">\n              <span class=\"material-icons\">favorite</span>\n            </button>\n            <span *ngIf=\"p.stock === 0\" class=\"wc-oos\">Sold Out</span>\n          </div>\n          <div class=\"wc-body\">\n            <div class=\"wc-cat\">{{ p.category }}</div>\n            <a [routerLink]=\"['/products', p._id]\" class=\"wc-name\">{{ p.name }}</a>\n            <div class=\"wc-origin\">{{ p.origin }}</div>\n            <div class=\"wc-price-row\">\n              <span class=\"wc-price\">{{ ps.formatPrice(p.price) }}</span>\n              <span *ngIf=\"p.originalPrice\" class=\"wc-orig\">{{ ps.formatPrice(p.originalPrice) }}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n", styles: ["// Account Component Styles\n\n.account-layout {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 40px;\n  padding-top: 40px;\n  padding-bottom: 80px;\n  align-items: start;\n}\n\n// \u2500\u2500 Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.acct-sidebar {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  position: sticky;\n  top: 100px;\n}\n\n.acct-avatar-wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 24px;\n  background: linear-gradient(135deg, var(--bg-2) 0%, var(--surface-2) 100%);\n  border-bottom: 1px solid var(--border);\n}\n\n.acct-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(123,30,58,0.25);\n}\n\n.acct-user-info {\n  min-width: 0;\n}\n\n.acct-name {\n  font-family: var(--font-display);\n  font-size: 1rem;\n  color: var(--text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.acct-email {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.acct-nav {\n  display: flex;\n  flex-direction: column;\n  padding: 12px 0;\n}\n\n.anav-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 20px;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 0.82rem;\n  font-family: var(--font-body);\n  cursor: pointer;\n  border-radius: 0;\n  transition: all 0.2s;\n  position: relative;\n  text-align: left;\n\n  .material-icons { font-size: 18px; flex-shrink: 0; }\n\n  .nav-count {\n    margin-left: auto;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background: var(--burgundy);\n    color: white;\n    font-size: 0.65rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 3px;\n    background: var(--burgundy);\n    border-radius: 0 2px 2px 0;\n    opacity: 0;\n    transition: opacity 0.2s;\n  }\n\n  &:hover {\n    background: var(--surface);\n    color: var(--burgundy);\n    &::before { opacity: 0.5; }\n  }\n\n  &.active {\n    background: var(--burgundy-pale);\n    color: var(--burgundy);\n    font-weight: 500;\n    &::before { opacity: 1; }\n  }\n}\n\n.nav-sep {\n  height: 1px;\n  background: var(--border);\n  margin: 8px 16px;\n}\n\n.logout-btn {\n  color: var(--error) !important;\n  &:hover { background: rgba(192,57,43,0.06) !important; color: var(--error) !important; }\n  &::before { background: var(--error) !important; }\n}\n\n// \u2500\u2500 Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.acct-panel {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n\n.panel-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface);\n}\n\n.panel-title {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  color: var(--text);\n  font-weight: 400;\n}\n\n.panel-sub {\n  color: var(--text-muted);\n  font-size: 0.82rem;\n  margin-top: 4px;\n}\n\n// \u2500\u2500 Form Sections \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.form-section {\n  padding: 24px 28px;\n  border-bottom: 1px solid rgba(107,84,71,0.08);\n  &:last-child { border-bottom: none; }\n}\n\n.form-section-title {\n  font-size: 0.68rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  font-family: var(--font-body);\n  font-weight: 600;\n  margin-bottom: 18px;\n}\n\n.fg-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\n.fg-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }\n\n.readonly { background: var(--surface) !important; cursor: not-allowed; }\n.readonly-note { font-size: 0.68rem; color: var(--text-dim); font-weight: 300; letter-spacing: 0.04em; text-transform: none; }\n\n.pwd-note { font-size: 0.75rem; color: var(--text-dim); margin-top: 8px; }\n\n.panel-actions {\n  padding: 20px 28px;\n  background: var(--surface);\n  border-top: 1px solid var(--border);\n}\n\n.form-actions { display: flex; gap: 10px; margin-top: 16px; }\n\n// \u2500\u2500 Address Cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.addresses-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n  padding: 24px 28px;\n}\n\n.addr-card {\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.2s;\n\n  &:hover { border-color: var(--border-strong); box-shadow: var(--shadow-sm); }\n  &.default { border-color: var(--burgundy); }\n}\n\n.addr-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n}\n\n.addr-label-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n\n  .addr-icon { font-size: 15px; color: var(--gold-warm); }\n  .addr-label { font-size: 0.75rem; font-weight: 600; color: var(--text); letter-spacing: 0.04em; text-transform: uppercase; }\n}\n\n.default-badge {\n  padding: 1px 7px;\n  background: var(--burgundy);\n  color: white;\n  border-radius: 10px;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.addr-delete-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n  .material-icons { font-size: 16px; }\n  &:hover { color: var(--error); }\n}\n\n.addr-body {\n  padding: 14px;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n\n  .addr-name { font-weight: 600; color: var(--text); font-size: 0.875rem; margin-bottom: 4px; }\n  .addr-phone { display:flex; align-items:center; gap:4px; margin-top:4px; .material-icons{font-size:12px} }\n}\n\n.addr-add-card {\n  border: 1.5px dashed var(--border);\n  border-radius: var(--radius-md);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  transition: all 0.2s;\n  min-height: 140px;\n\n  .material-icons { font-size: 28px; color: var(--gold-warm); }\n  &:hover { border-color: var(--burgundy); color: var(--burgundy); .material-icons { color: var(--burgundy); } }\n}\n\n.new-addr-form {\n  margin: 0 28px 24px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 20px;\n}\n\n// \u2500\u2500 Mini Order Card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.mini-order-card {\n  margin: 0 28px 16px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n  &:hover { box-shadow: var(--shadow-sm); }\n}\n\n.moc-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n}\n\n.moc-num {\n  font-family: 'Courier New', monospace;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text);\n}\n\n.moc-status {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.mst-pending,.mst-confirmed,.mst-processing { background:rgba(107,84,71,0.1); color:var(--text-muted); }\n.mst-shipped,.mst-out_for_delivery { background:rgba(201,149,42,0.12); color:var(--gold-warm); }\n.mst-delivered { background:rgba(45,122,79,0.12); color:var(--success); }\n.mst-cancelled,.mst-returned { background:rgba(192,57,43,0.1); color:var(--error); }\n\n.moc-items {\n  display: flex;\n  gap: 8px;\n  padding: 12px 16px;\n  align-items: center;\n}\n\n.moc-img {\n  width: 40px;\n  height: 54px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n}\n\n.moc-more {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n\n.moc-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  border-top: 1px solid var(--border);\n  background: var(--surface);\n}\n\n.moc-date { font-size: 0.75rem; color: var(--text-muted); }\n.moc-total { font-family: var(--font-display); color: var(--burgundy); font-size: 0.95rem; }\n\n// \u2500\u2500 Wishlist Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.wishlist-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  padding: 24px 28px;\n}\n\n.wish-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.3s;\n\n  &:hover {\n    box-shadow: var(--shadow-md);\n    transform: translateY(-3px);\n    border-color: var(--border-warm);\n  }\n}\n\n.wc-img-wrap {\n  position: relative;\n  aspect-ratio: 3/4;\n  overflow: hidden;\n  background: var(--surface);\n\n  a { display: block; width: 100%; height: 100%; }\n  img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }\n  &:hover img { transform: scale(1.04); }\n}\n\n.wc-remove-btn {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid rgba(224,82,82,0.3);\n  color: #e05252;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 2px 8px rgba(44,24,16,0.1);\n\n  .material-icons { font-size: 16px; }\n  &:hover { background: #e05252; color: white; }\n}\n\n.wc-oos {\n  position: absolute;\n  inset: 0;\n  background: rgba(250,248,244,0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.72rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n\n.wc-body { padding: 12px; }\n.wc-cat { font-size: 0.58rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold-warm); margin-bottom: 4px; }\n.wc-name { display:block; font-family:var(--font-display); font-size:0.9rem; color:var(--text); text-decoration:none; line-height:1.3; margin-bottom:2px; &:hover{color:var(--burgundy)} }\n.wc-origin { font-size:0.68rem; color:var(--text-dim); margin-bottom:8px; }\n.wc-price-row { display:flex; align-items:baseline; gap:6px; }\n.wc-price { font-family:var(--font-display); color:var(--burgundy); font-size:1rem; }\n.wc-orig { font-size:0.72rem; text-decoration:line-through; color:var(--text-dim); }\n\n// \u2500\u2500 Loading / Empty \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.panel-loading {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n\n.panel-empty {\n  padding: 48px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n\n  .material-icons { font-size: 40px; color: var(--text-dim); }\n  p { color: var(--text-muted); font-size: 0.875rem; a { color: var(--burgundy); } }\n}\n\n// \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media (max-width: 960px) {\n  .account-layout { grid-template-columns: 1fr; }\n  .acct-sidebar { position: static; }\n}\n\n@media (max-width: 600px) {\n  .panel-header { padding: 18px; }\n  .form-section { padding: 18px; }\n  .fg-row, .fg-row-3 { grid-template-columns: 1fr; }\n  .addresses-grid { padding: 18px; grid-template-columns: 1fr; }\n  .wishlist-grid { padding: 18px; grid-template-columns: repeat(2, 1fr); gap: 12px; }\n  .mini-order-card { margin: 0 18px 14px; }\n}\n\n/* \u2500\u2500 Additional Mobile Responsive \u2500\u2500 */\n@media (max-width: 768px) {\n  .account-layout { grid-template-columns: 1fr; gap: 20px; padding-top: 24px; padding-bottom: 56px; }\n  .acct-sidebar { position: static; border-radius: var(--radius-md); }\n  .acct-avatar-wrap { padding: 16px; }\n  .acct-nav { flex-direction: row; overflow-x: auto; padding: 4px 8px; gap: 2px; -webkit-overflow-scrolling: touch; }\n  .anav-btn { flex-direction: column; gap: 3px; padding: 8px 12px; font-size: 0.68rem; white-space: nowrap; border-radius: 0; .material-icons { font-size: 16px; } .nav-count { position: absolute; top: 4px; right: 4px; width: 16px; height: 16px; font-size: 0.55rem; } }\n  .nav-sep { width: 1px; height: auto; margin: 4px 0; }\n}\n\n@media (max-width: 600px) {\n  .panel-header { padding: 16px 18px; flex-direction: column; align-items: flex-start; gap: 8px; }\n  .form-section { padding: 16px 18px; }\n  .fg-row, .fg-row-3 { grid-template-columns: 1fr; }\n  .addresses-grid { padding: 16px 18px; grid-template-columns: 1fr; }\n  .wishlist-grid { padding: 16px 18px; grid-template-columns: repeat(2, 1fr); gap: 10px; }\n  .mini-order-card { margin: 0 18px 12px; }\n  .panel-actions { padding: 14px 18px; }\n  .new-addr-form { margin: 0 18px 16px; }\n}\n\n@media (max-width: 400px) {\n  .wishlist-grid { grid-template-columns: 1fr; }\n  .wc-name { font-size: 0.85rem; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccountComponent, { className: "AccountComponent", filePath: "src\\app\\components\\account\\account.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=account.component.js.map