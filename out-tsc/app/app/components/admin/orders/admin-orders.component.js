import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OrderService } from '../../../services/order.service';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = () => ({ exact: true });
function AdminOrdersComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Updated ", i0.ɵɵpipeBind2(2, 1, ctx_r0.lastUpdated(), "h:mm a"), "");
} }
function AdminOrdersComponent_option_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 39);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", s_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, s_r2));
} }
function AdminOrdersComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtext(1, "Loading orders...");
    i0.ɵɵelementEnd();
} }
function AdminOrdersComponent_div_69_tr_19_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 39);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", s_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, s_r5));
} }
function AdminOrdersComponent_div_69_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 44);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div", 45);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 46);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "div", 47);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 48);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td")(15, "div", 49);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 50);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "td")(20, "select", 51);
    i0.ɵɵlistener("ngModelChange", function AdminOrdersComponent_div_69_tr_19_Template_select_ngModelChange_20_listener($event) { const o_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.updateStatus(o_r4._id, $event)); });
    i0.ɵɵtemplate(21, AdminOrdersComponent_div_69_tr_19_option_21_Template, 3, 4, "option", 32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td", 52);
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "td")(26, "div", 53)(27, "button", 54);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_69_tr_19_Template_button_click_27_listener() { const o_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.viewOrder(o_r4)); });
    i0.ɵɵelementStart(28, "span", 8);
    i0.ɵɵtext(29, "open_in_new");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "button", 55);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_69_tr_19_Template_button_click_30_listener() { const o_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.downloadInvoice(o_r4._id, o_r4.orderNumber)); });
    i0.ɵɵelementStart(31, "span", 8);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "button", 56);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_69_tr_19_Template_button_click_33_listener() { const o_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.downloadLabel(o_r4._id, o_r4.orderNumber)); });
    i0.ɵɵelementStart(34, "span", 8);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const o_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(o_r4.orderNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(o_r4.userName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r4.userEmail);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Rs ", o_r4.total.toLocaleString("en-IN"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", o_r4.items.length, " item(s)");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(o_r4.paymentMethod);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(o_r4.paymentStatus === "paid" ? "tag-paid" : "tag-pending");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", o_r4.paymentStatus, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("st-" + o_r4.status);
    i0.ɵɵproperty("ngModel", o_r4.status);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.statuses);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(24, 18, o_r4.createdAt, "d MMM yyyy"));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("disabled", ctx_r0.downloading() === o_r4._id + "-inv");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.downloading() === o_r4._id + "-inv" ? "hourglass_top" : "receipt_long");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.downloading() === o_r4._id + "-label");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.downloading() === o_r4._id + "-label" ? "hourglass_top" : "local_shipping");
} }
function AdminOrdersComponent_div_69_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 57);
    i0.ɵɵtext(2, "No orders found");
    i0.ɵɵelementEnd()();
} }
function AdminOrdersComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Customer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Payment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵtemplate(19, AdminOrdersComponent_div_69_tr_19_Template, 36, 21, "tr", 42)(20, AdminOrdersComponent_div_69_tr_20_Template, 3, 0, "tr", 43);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngForOf", ctx_r0.orders());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.orders().length === 0);
} }
function AdminOrdersComponent_div_70_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_70_button_3_Template_button_click_0_listener() { const p_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.goPage(p_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", p_r8 === ctx_r0.page());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r8);
} }
function AdminOrdersComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 58)(1, "button", 59);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_70_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.goPage(ctx_r0.page() - 1)); });
    i0.ɵɵtext(2, "<");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AdminOrdersComponent_div_70_button_3_Template, 2, 3, "button", 60);
    i0.ɵɵelementStart(4, "button", 59);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_70_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.goPage(ctx_r0.page() + 1)); });
    i0.ɵɵtext(5, ">");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.page() === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.pageArr());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.page() === ctx_r0.pages());
} }
function AdminOrdersComponent_div_71_div_21_option_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 39);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", s_r11);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, s_r11));
} }
function AdminOrdersComponent_div_71_div_21_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 93);
    i0.ɵɵelement(1, "img", 94);
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
    const i_r12 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", i_r12.productImage, i0.ɵɵsanitizeUrl)("alt", i_r12.productName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r12.productName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("Qty ", i_r12.quantity, "", i_r12.color ? " - " + i_r12.color : "", " - ", i_r12.category, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Rs ", (i_r12.price * i_r12.quantity).toLocaleString("en-IN"), "");
} }
function AdminOrdersComponent_div_71_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "div", 72)(2, "div", 73)(3, "label");
    i0.ɵɵtext(4, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 74);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 73)(8, "label");
    i0.ɵɵtext(9, "Payment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 75)(13, "label");
    i0.ɵɵtext(14, "Ship To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 76)(18, "h5", 77);
    i0.ɵɵtext(19, "Update Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 78)(21, "div", 79)(22, "label", 80);
    i0.ɵɵtext(23, "New Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "select", 81);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminOrdersComponent_div_71_div_21_Template_select_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.updateForm.status, $event) || (ctx_r0.updateForm.status = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(25, AdminOrdersComponent_div_71_div_21_option_25_Template, 3, 4, "option", 32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 79)(27, "label", 80);
    i0.ɵɵtext(28, "Tracking Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminOrdersComponent_div_71_div_21_Template_input_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.updateForm.trackingNumber, $event) || (ctx_r0.updateForm.trackingNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 79)(31, "label", 80);
    i0.ɵɵtext(32, "Courier");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "input", 83);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminOrdersComponent_div_71_div_21_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.updateForm.courier, $event) || (ctx_r0.updateForm.courier = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 79)(35, "label", 80);
    i0.ɵɵtext(36, "Note / Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "input", 84);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminOrdersComponent_div_71_div_21_Template_input_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.updateForm.description, $event) || (ctx_r0.updateForm.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "button", 85);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_71_div_21_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.saveUpdate()); });
    i0.ɵɵelementStart(39, "span", 86);
    i0.ɵɵtext(40, "save");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(41, " Save Update ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 87)(43, "h5", 77);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(45, AdminOrdersComponent_div_71_div_21_div_45_Template, 9, 7, "div", 88);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 89)(47, "div", 90)(48, "span");
    i0.ɵɵtext(49, "Subtotal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "span");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div", 90)(53, "span");
    i0.ɵɵtext(54, "Shipping");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "span");
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 90)(58, "span");
    i0.ɵɵtext(59, "GST (5%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "span");
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "div", 91)(63, "span");
    i0.ɵɵtext(64, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "span", 92);
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const o_r13 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵclassMap("badge-" + o_r13.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(o_r13.status);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", o_r13.paymentMethod, " - ", o_r13.paymentStatus, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate5("", o_r13.shippingAddress.name, ", ", o_r13.shippingAddress.street, ", ", o_r13.shippingAddress.city, ", ", o_r13.shippingAddress.state, " ", o_r13.shippingAddress.pincode, "");
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.updateForm.status);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.statuses);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.updateForm.trackingNumber);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.updateForm.courier);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.updateForm.description);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("Items (", o_r13.items.length, ")");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", o_r13.items);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Rs ", o_r13.subtotal.toLocaleString("en-IN"), "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(o_r13.shipping === 0 ? "FREE" : "Rs " + o_r13.shipping);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Rs ", o_r13.tax.toLocaleString("en-IN"), "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Rs ", o_r13.total.toLocaleString("en-IN"), "");
} }
function AdminOrdersComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_71_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeOrderModal()); });
    i0.ɵɵelementStart(1, "div", 63);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_71_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r9); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 64)(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 65);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 66)(10, "button", 67);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_71_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.downloadInvoice(ctx_r0.selected()._id, ctx_r0.selected().orderNumber)); });
    i0.ɵɵelementStart(11, "span", 8);
    i0.ɵɵtext(12, "receipt_long");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Invoice ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 68);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_71_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.downloadLabel(ctx_r0.selected()._id, ctx_r0.selected().orderNumber)); });
    i0.ɵɵelementStart(15, "span", 8);
    i0.ɵɵtext(16, "local_shipping");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " Label ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 69);
    i0.ɵɵlistener("click", function AdminOrdersComponent_div_71_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeOrderModal()); });
    i0.ɵɵelementStart(19, "span", 8);
    i0.ɵɵtext(20, "close");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(21, AdminOrdersComponent_div_71_div_21_Template, 67, 21, "div", 70);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.selected().orderNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.selected().userName, " - ", i0.ɵɵpipeBind2(8, 4, ctx_r0.selected().createdAt, "d MMM yyyy"), "");
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngIf", ctx_r0.selected());
} }
export class AdminOrdersComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.orderService = inject(OrderService);
        this.toast = inject(ToastService);
        this.destroyRef = inject(DestroyRef);
        this.orders = signal([]);
        this.loading = signal(true);
        this.total = signal(0);
        this.pages = signal(1);
        this.page = signal(1);
        this.selected = signal(null);
        this.downloading = signal('');
        this.refreshing = signal(false);
        this.lastUpdated = signal(null);
        this.searchQ = '';
        this.statusFilter = '';
        this.statuses = ['pending', 'confirmed', 'processing', 'shipped', 'out_for_delivery', 'delivered', 'cancelled', 'returned'];
        this.updateForm = { status: 'confirmed', trackingNumber: '', courier: '', description: '' };
    }
    pageArr() { return Array.from({ length: this.pages() }, (_, i) => i + 1); }
    ngOnInit() {
        this.load(true);
        interval(20000)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.load(false, true));
    }
    load(showLoading = true, silent = false) {
        if (showLoading)
            this.loading.set(true);
        if (silent)
            this.refreshing.set(true);
        const params = { page: this.page(), limit: 15 };
        if (this.searchQ)
            params['q'] = this.searchQ;
        if (this.statusFilter)
            params['status'] = this.statusFilter;
        this.orderService.adminGetAll(params).subscribe({
            next: (r) => {
                this.orders.set(r.orders);
                this.total.set(r.total);
                this.pages.set(r.pages);
                this.loading.set(false);
                this.refreshing.set(false);
                this.lastUpdated.set(new Date());
            },
            error: () => {
                this.loading.set(false);
                this.refreshing.set(false);
            },
        });
    }
    goPage(p) {
        if (p < 1 || p > this.pages())
            return;
        this.page.set(p);
        this.load();
    }
    viewOrder(o) {
        this.selected.set(o);
        this.updateForm = { status: o.status, trackingNumber: o.trackingNumber || '', courier: o.courier || '', description: '' };
    }
    closeOrderModal() { this.selected.set(null); }
    updateStatus(id, status) {
        this.orderService.adminUpdateStatus(id, { status }).subscribe({
            next: (r) => {
                this.toast.success(r.message);
                this.load(false, true);
            },
            error: (e) => this.toast.error(e.message),
        });
    }
    saveUpdate() {
        if (!this.selected())
            return;
        this.orderService.adminUpdateStatus(this.selected()._id, this.updateForm).subscribe({
            next: (r) => {
                this.toast.success(r.message);
                this.selected.set(r.order);
                this.load(false, true);
            },
            error: (e) => this.toast.error(e.message),
        });
    }
    downloadInvoice(orderId, orderNum) {
        this.downloading.set(orderId + '-inv');
        this.orderService.adminDownloadInvoice(orderId).subscribe({
            next: (blob) => {
                this.saveBlob(blob, `invoice-${orderNum}.pdf`);
                this.downloading.set('');
                this.toast.success('Invoice downloaded');
            },
            error: (e) => {
                this.toast.error(e.message || 'Download failed');
                this.downloading.set('');
            },
        });
    }
    downloadLabel(orderId, orderNum) {
        this.downloading.set(orderId + '-label');
        this.orderService.adminDownloadShippingLabel(orderId).subscribe({
            next: (blob) => {
                this.saveBlob(blob, `shipping-label-${orderNum}.pdf`);
                this.downloading.set('');
                this.toast.success('Shipping label downloaded');
            },
            error: (e) => {
                this.toast.error(e.message || 'Download failed');
                this.downloading.set('');
            },
        });
    }
    saveBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    static { this.ɵfac = function AdminOrdersComponent_Factory(t) { return new (t || AdminOrdersComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminOrdersComponent, selectors: [["app-admin-orders"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 72, vars: 16, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-logo"], [1, "s-logo-inner"], [1, "s-logo-mark"], [1, "s-logo-text"], [1, "sidebar-nav"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "material-icons"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/categories", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/homepage", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], [1, "nav-divider"], ["routerLink", "/", 1, "nav-item"], [1, "nav-item", "logout", 3, "click"], [1, "admin-main"], [1, "admin-topbar"], [1, "admin-page-title"], [1, "admin-page-sub"], [1, "live-status"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "live-pill"], [1, "live-dot"], ["class", "sync-time", 4, "ngIf"], [1, "orders-toolbar"], [1, "search-wrap"], [1, "material-icons", "si"], ["placeholder", "Search order ID or customer...", 1, "form-control", 2, "padding-left", "38px", 3, "ngModelChange", "input", "ngModel"], [1, "form-control", 2, "width", "180px", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "admin-section"], ["class", "loading-state", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], ["class", "pagination", "style", "padding:16px 24px;margin-top:0", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "sync-time"], [3, "value"], [1, "loading-state"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "order-id"], [1, "cust-name"], [1, "cust-email"], [1, "order-amt"], [1, "order-items-ct"], [1, "pay-method"], [1, "pay-status-tag"], [1, "status-sel", 3, "ngModelChange", "ngModel"], [1, "date-cell"], [1, "action-group"], ["title", "View and update", 1, "act-btn", "view-btn", 3, "click"], ["title", "Download invoice", 1, "act-btn", "inv-btn", 3, "click", "disabled"], ["title", "Download shipping label", 1, "act-btn", "label-btn", 3, "click", "disabled"], ["colspan", "7", 1, "empty-row"], [1, "pagination", 2, "padding", "16px 24px", "margin-top", "0"], [1, "page-btn", 3, "click", "disabled"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-btn", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-box", "order-modal", 3, "click"], [1, "modal-header"], [1, "modal-sub"], [1, "modal-header-actions"], ["title", "Invoice", 1, "modal-dl-btn", "inv", 3, "click"], ["title", "Shipping Label", 1, "modal-dl-btn", "label", 3, "click"], [1, "modal-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-body"], [1, "modal-meta"], [1, "meta-item"], [1, "badge"], [1, "meta-item", 2, "grid-column", "1/-1"], [1, "update-form"], [1, "uf-title"], [1, "uf-grid"], [1, "form-group"], [1, "form-label"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. DELHIVERY123", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. Delhivery", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. Out for delivery", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "material-icons", 2, "font-size", "15px"], [1, "modal-items"], ["class", "mi-row", 4, "ngFor", "ngForOf"], [1, "modal-totals"], [1, "tot-row"], [1, "tot-row", "tot-total"], [1, "tot-val"], [1, "mi-row"], [1, "mi-img", 3, "src", "alt"], [1, "mi-info"], [1, "mi-name"], [1, "mi-meta"], [1, "mi-price"]], template: function AdminOrdersComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtext(24, " Categories");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "a", 12)(26, "span", 8);
            i0.ɵɵtext(27, "tune");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(28, " Homepage");
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
            i0.ɵɵtext(37, " View Store");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "button", 16);
            i0.ɵɵlistener("click", function AdminOrdersComponent_Template_button_click_38_listener() { return ctx.auth.logout(); });
            i0.ɵɵelementStart(39, "span", 8);
            i0.ɵɵtext(40, "logout");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, " Logout");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(42, "div", 17)(43, "div", 18)(44, "div")(45, "h1", 19);
            i0.ɵɵtext(46, "Orders");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "p", 20);
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "div", 21)(50, "button", 22);
            i0.ɵɵlistener("click", function AdminOrdersComponent_Template_button_click_50_listener() { return ctx.load(false, true); });
            i0.ɵɵelementStart(51, "span", 8);
            i0.ɵɵtext(52);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(53);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "span", 23);
            i0.ɵɵelement(55, "span", 24);
            i0.ɵɵtext(56);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(57, AdminOrdersComponent_span_57_Template, 3, 4, "span", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(58, "div", 26)(59, "div", 27)(60, "span", 28);
            i0.ɵɵtext(61, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "input", 29);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminOrdersComponent_Template_input_ngModelChange_62_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchQ, $event) || (ctx.searchQ = $event); return $event; });
            i0.ɵɵlistener("input", function AdminOrdersComponent_Template_input_input_62_listener() { return ctx.load(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(63, "select", 30);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminOrdersComponent_Template_select_ngModelChange_63_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event); return $event; });
            i0.ɵɵlistener("change", function AdminOrdersComponent_Template_select_change_63_listener() { return ctx.load(); });
            i0.ɵɵelementStart(64, "option", 31);
            i0.ɵɵtext(65, "All Statuses");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(66, AdminOrdersComponent_option_66_Template, 3, 4, "option", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "div", 33);
            i0.ɵɵtemplate(68, AdminOrdersComponent_div_68_Template, 2, 0, "div", 34)(69, AdminOrdersComponent_div_69_Template, 21, 2, "div", 35)(70, AdminOrdersComponent_div_70_Template, 6, 3, "div", 36);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(71, AdminOrdersComponent_div_71_Template, 22, 7, "div", 37);
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(15, _c0));
            i0.ɵɵadvance(39);
            i0.ɵɵtextInterpolate1("", ctx.total(), " total orders");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.refreshing() ? "hourglass_top" : "refresh");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.refreshing() ? "Refreshing" : "Refresh", " ");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("syncing", ctx.refreshing());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.refreshing() ? "Checking for new orders" : "Auto-refresh every 20s", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.lastUpdated());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchQ);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.statusFilter);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.statuses);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pages() > 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selected());
        } }, dependencies: [RouterLink, RouterLinkActive, CommonModule, i1.NgForOf, i1.NgIf, i1.TitleCasePipe, i1.DatePipe, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["//[_ngcontent-%COMP%]   Admin[_ngcontent-%COMP%]   Orders[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n.s-logo-inner[_ngcontent-%COMP%] { display:flex; align-items:center; gap:10px; }\n.s-logo-mark[_ngcontent-%COMP%] { width:32px; height:32px; background:var(--gold-warm); color:white; display:flex; align-items:center; justify-content:center; border-radius:2px; font-family:var(--font-display); font-size:1rem; }\n.s-logo-text[_ngcontent-%COMP%] { color:rgba(255,255,255,0.85); font-family:var(--font-display); font-size:1rem; }\n\n.orders-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n\n.si[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 18px;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  padding: 48px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n\n.live-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.live-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(45, 122, 79, 0.08);\n  color: var(--success);\n  font-size: 0.76rem;\n  font-weight: 500;\n}\n\n.live-pill.syncing[_ngcontent-%COMP%] {\n  background: rgba(201, 149, 42, 0.12);\n  color: var(--gold-warm);\n}\n\n.live-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: currentColor;\n  animation: pulse 1.6s ease-in-out infinite;\n}\n\n.sync-time[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px !important;\n  color: var(--text-muted);\n}\n\n//[_ngcontent-%COMP%]   Table[_ngcontent-%COMP%]   cells\n.order-id[_ngcontent-%COMP%] {\n  font-family: 'Courier New', monospace;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--burgundy);\n  letter-spacing: 0.04em;\n}\n\n.cust-name[_ngcontent-%COMP%] { font-size: 0.875rem; color: var(--text); font-weight: 500; }\n.cust-email[_ngcontent-%COMP%] { font-size: 0.72rem; color: var(--text-dim); }\n\n.order-amt[_ngcontent-%COMP%] { font-family: var(--font-display); color: var(--burgundy); font-size: 1rem; }\n.order-items-ct[_ngcontent-%COMP%] { font-size: 0.72rem; color: var(--text-muted); }\n\n.pay-method[_ngcontent-%COMP%] { font-size: 0.82rem; color: var(--text-muted); }\n.pay-status-tag[_ngcontent-%COMP%] { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }\n.tag-paid[_ngcontent-%COMP%] { color: var(--success); }\n.tag-pending[_ngcontent-%COMP%] { color: var(--warning); }\n\n.date-cell[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--text-muted); white-space: nowrap; }\n\n//[_ngcontent-%COMP%]   Status[_ngcontent-%COMP%]   select\n.status-sel[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 20px;\n  font-size: 0.68rem;\n  font-family: var(--font-body);\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  border: 1.5px solid var(--border);\n  cursor: pointer;\n  outline: none;\n  appearance: none;\n  transition: all 0.2s;\n  text-align: center;\n}\n\n.st-pending[_ngcontent-%COMP%], .st-confirmed[_ngcontent-%COMP%], .st-processing[_ngcontent-%COMP%] { background:rgba(107,84,71,0.08); color:var(--text-muted); border-color:var(--border); }\n.st-shipped[_ngcontent-%COMP%], .st-out_for_delivery[_ngcontent-%COMP%] { background:rgba(201,149,42,0.12); color:var(--gold-warm); border-color:rgba(201,149,42,0.3); }\n.st-delivered[_ngcontent-%COMP%] { background:rgba(45,122,79,0.12); color:var(--success); border-color:rgba(45,122,79,0.3); }\n.st-cancelled[_ngcontent-%COMP%], .st-returned[_ngcontent-%COMP%] { background:rgba(192,57,43,0.1); color:var(--error); border-color:rgba(192,57,43,0.3); }\n\n//[_ngcontent-%COMP%]   Action[_ngcontent-%COMP%]   buttons\n.action-group[_ngcontent-%COMP%] { display: flex; gap: 6px; align-items: center; }\n\n.act-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  background: white;\n  color: var(--text-muted);\n  transition: all 0.2s;\n\n  .material-icons { font-size: 15px; }\n\n  &:disabled { opacity: 0.45; cursor: not-allowed; }\n}\n\n.view-btn[_ngcontent-%COMP%]:hover { background: var(--surface-2); color: var(--text); border-color: var(--border-strong); }\n.inv-btn[_ngcontent-%COMP%]:hover:not(:disabled) { background: var(--burgundy-pale); color: var(--burgundy); border-color: var(--burgundy); }\n.label-btn[_ngcontent-%COMP%]:hover:not(:disabled) { background: var(--gold-pale); color: var(--gold-warm); border-color: var(--gold-warm); }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Modal[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.order-modal[_ngcontent-%COMP%] { max-width: 620px; width: 95%; }\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface);\n\n  h3 { font-family: var(--font-display); font-size: 1.3rem; color: var(--text); font-family: 'Courier New', monospace; letter-spacing: 0.04em; }\n  .modal-sub { font-size: 0.78rem; color: var(--text-muted); margin-top: 3px; }\n}\n\n.modal-header-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n\n.modal-dl-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1.5px solid;\n\n  .material-icons { font-size: 14px; }\n\n  &.inv {\n    background: var(--burgundy-pale);\n    border-color: var(--burgundy);\n    color: var(--burgundy);\n    &:hover { background: var(--burgundy); color: white; }\n  }\n\n  &.label {\n    background: var(--gold-pale);\n    border-color: var(--gold-warm);\n    color: var(--gold-warm);\n    &:hover { background: var(--gold-warm); color: white; }\n  }\n}\n\n.modal-close[_ngcontent-%COMP%] {\n  width: 32px; height: 32px;\n  display: flex; align-items: center; justify-content: center;\n  border-radius: 50%; background: none; border: 1px solid var(--border);\n  color: var(--text-muted); cursor: pointer; transition: all 0.2s;\n  &:hover { background: var(--surface-2); color: var(--text); }\n  .material-icons { font-size: 16px; }\n}\n\n.modal-body[_ngcontent-%COMP%] { padding: 24px; max-height: 72vh; overflow-y: auto; }\n\n.modal-meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n}\n\n.meta-item[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 3px;\n  label { font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold-warm); font-weight: 600; }\n  span { font-size: 0.85rem; color: var(--text); }\n}\n\n.update-form[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 18px;\n  margin-bottom: 20px;\n}\n\n.uf-title[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  font-family: var(--font-body);\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n\n.uf-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.modal-items[_ngcontent-%COMP%] { margin-bottom: 16px;\n  .uf-title { margin-bottom: 12px; }\n}\n\n.mi-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n  &:last-child { border-bottom: none; }\n}\n\n.mi-img[_ngcontent-%COMP%] { width: 44px; height: 58px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border); flex-shrink: 0; }\n.mi-info[_ngcontent-%COMP%] { flex: 1; }\n.mi-name[_ngcontent-%COMP%] { font-size: 0.875rem; color: var(--text); }\n.mi-meta[_ngcontent-%COMP%] { font-size: 0.72rem; color: var(--text-muted); }\n.mi-price[_ngcontent-%COMP%] { font-family: var(--font-display); color: var(--burgundy); }\n\n.modal-totals[_ngcontent-%COMP%] { border-top: 1px solid var(--border); padding-top: 14px; }\n\n.tot-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n}\n\n.tot-total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text);\n  padding-top: 10px;\n  border-top: 1px solid var(--border);\n}\n\n.tot-val[_ngcontent-%COMP%] { font-family: var(--font-display); color: var(--burgundy); font-size: 1.2rem; }\n\n//[_ngcontent-%COMP%]   Badge[_ngcontent-%COMP%]   styles\n.badge[_ngcontent-%COMP%] { padding:3px 10px; border-radius:2px; font-size:0.65rem; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; }\n.badge-delivered[_ngcontent-%COMP%] { background:rgba(45,122,79,0.1); color:var(--success); }\n.badge-shipped[_ngcontent-%COMP%], .badge-out_for_delivery[_ngcontent-%COMP%] { background:rgba(201,149,42,0.12); color:var(--gold-warm); }\n.badge-pending[_ngcontent-%COMP%], .badge-confirmed[_ngcontent-%COMP%], .badge-processing[_ngcontent-%COMP%] { background:rgba(107,84,71,0.1); color:var(--text-muted); }\n.badge-cancelled[_ngcontent-%COMP%], .badge-returned[_ngcontent-%COMP%] { background:rgba(192,57,43,0.1); color:var(--error); }\n\n@media (max-width: 768px) {\n  .uf-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .modal-meta[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .modal-header-actions[_ngcontent-%COMP%] { gap: 4px; }\n  .modal-dl-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-icons) { display: none; }\n}\n\n\n\n@media (max-width: 1024px) {\n  .orders-toolbar[_ngcontent-%COMP%] { flex-direction: column; gap: 10px; .search-wrap { min-width: 100%; } select { width: 100%; } }\n}\n\n@media (max-width: 768px) {\n  .live-status[_ngcontent-%COMP%] { justify-content: flex-start; }\n  .orders-toolbar[_ngcontent-%COMP%] { margin-bottom: 16px; }\n  \n\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) { display: none; }\n}\n\n@media (max-width: 540px) {\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3), table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) { display: none; }\n  .action-group[_ngcontent-%COMP%] { flex-direction: column; gap: 4px; }\n  .act-btn[_ngcontent-%COMP%] { width: 28px; height: 28px; }\n  .uf-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .modal-dl-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-icons) { display: none; }\n  .modal-header[_ngcontent-%COMP%] { padding: 14px 16px; flex-wrap: wrap; gap: 8px; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminOrdersComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-orders', standalone: true, imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule], template: "<div class=\"admin-layout\">\n  <aside class=\"admin-sidebar\">\n    <div class=\"sidebar-logo\">\n      <div class=\"s-logo-inner\">\n        <div class=\"s-logo-mark\">V</div>\n        <span class=\"s-logo-text\">Vastra Vaibhav</span>\n      </div>\n    </div>\n    <nav class=\"sidebar-nav\">\n      <a routerLink=\"/admin\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-item\">\n        <span class=\"material-icons\">dashboard</span> Dashboard\n      </a>\n      <a routerLink=\"/admin/orders\" routerLinkActive=\"active\" class=\"nav-item\">\n        <span class=\"material-icons\">receipt_long</span> Orders\n      </a>\n      <a routerLink=\"/admin/products\" routerLinkActive=\"active\" class=\"nav-item\">\n        <span class=\"material-icons\">inventory_2</span> Products\n      </a>\n      <a routerLink=\"/admin/categories\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">category</span> Categories</a>\n      <a routerLink=\"/admin/homepage\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">tune</span> Homepage</a>\n      <a routerLink=\"/admin/users\" routerLinkActive=\"active\" class=\"nav-item\">\n        <span class=\"material-icons\">group</span> Customers\n      </a>\n      <div class=\"nav-divider\"></div>\n      <a routerLink=\"/\" class=\"nav-item\"><span class=\"material-icons\">storefront</span> View Store</a>\n      <button class=\"nav-item logout\" (click)=\"auth.logout()\"><span class=\"material-icons\">logout</span> Logout</button>\n    </nav>\n  </aside>\n\n  <div class=\"admin-main\">\n    <div class=\"admin-topbar\">\n      <div>\n        <h1 class=\"admin-page-title\">Orders</h1>\n        <p class=\"admin-page-sub\">{{ total() }} total orders</p>\n      </div>\n      <div class=\"live-status\">\n        <button class=\"btn btn-ghost btn-sm\" (click)=\"load(false, true)\">\n          <span class=\"material-icons\">{{ refreshing() ? 'hourglass_top' : 'refresh' }}</span>\n          {{ refreshing() ? 'Refreshing' : 'Refresh' }}\n        </button>\n        <span class=\"live-pill\" [class.syncing]=\"refreshing()\">\n          <span class=\"live-dot\"></span>\n          {{ refreshing() ? 'Checking for new orders' : 'Auto-refresh every 20s' }}\n        </span>\n        <span class=\"sync-time\" *ngIf=\"lastUpdated()\">Updated {{ lastUpdated() | date:'h:mm a' }}</span>\n      </div>\n    </div>\n\n    <div class=\"orders-toolbar\">\n      <div class=\"search-wrap\">\n        <span class=\"material-icons si\">search</span>\n        <input class=\"form-control\" style=\"padding-left:38px\" [(ngModel)]=\"searchQ\" (input)=\"load()\" placeholder=\"Search order ID or customer...\" />\n      </div>\n      <select class=\"form-control\" style=\"width:180px\" [(ngModel)]=\"statusFilter\" (change)=\"load()\">\n        <option value=\"\">All Statuses</option>\n        <option *ngFor=\"let s of statuses\" [value]=\"s\">{{ s | titlecase }}</option>\n      </select>\n    </div>\n\n    <div class=\"admin-section\">\n      <div *ngIf=\"loading()\" class=\"loading-state\">Loading orders...</div>\n      <div class=\"table-wrapper\" *ngIf=\"!loading()\">\n        <table>\n          <thead>\n            <tr>\n              <th>Order</th>\n              <th>Customer</th>\n              <th>Amount</th>\n              <th>Payment</th>\n              <th>Status</th>\n              <th>Date</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let o of orders()\">\n              <td>\n                <span class=\"order-id\">{{ o.orderNumber }}</span>\n              </td>\n              <td>\n                <div class=\"cust-name\">{{ o.userName }}</div>\n                <div class=\"cust-email\">{{ o.userEmail }}</div>\n              </td>\n              <td>\n                <div class=\"order-amt\">Rs {{ o.total.toLocaleString('en-IN') }}</div>\n                <div class=\"order-items-ct\">{{ o.items.length }} item(s)</div>\n              </td>\n              <td>\n                <div class=\"pay-method\">{{ o.paymentMethod }}</div>\n                <span class=\"pay-status-tag\" [class]=\"o.paymentStatus === 'paid' ? 'tag-paid' : 'tag-pending'\">\n                  {{ o.paymentStatus }}\n                </span>\n              </td>\n              <td>\n                <select class=\"status-sel\" [class]=\"'st-' + o.status\" [ngModel]=\"o.status\" (ngModelChange)=\"updateStatus(o._id, $event)\">\n                  <option *ngFor=\"let s of statuses\" [value]=\"s\">{{ s | titlecase }}</option>\n                </select>\n              </td>\n              <td class=\"date-cell\">{{ o.createdAt | date:'d MMM yyyy' }}</td>\n              <td>\n                <div class=\"action-group\">\n                  <button class=\"act-btn view-btn\" (click)=\"viewOrder(o)\" title=\"View and update\">\n                    <span class=\"material-icons\">open_in_new</span>\n                  </button>\n                  <button class=\"act-btn inv-btn\" (click)=\"downloadInvoice(o._id, o.orderNumber)\" [disabled]=\"downloading() === o._id + '-inv'\" title=\"Download invoice\">\n                    <span class=\"material-icons\">{{ downloading() === o._id + '-inv' ? 'hourglass_top' : 'receipt_long' }}</span>\n                  </button>\n                  <button class=\"act-btn label-btn\" (click)=\"downloadLabel(o._id, o.orderNumber)\" [disabled]=\"downloading() === o._id + '-label'\" title=\"Download shipping label\">\n                    <span class=\"material-icons\">{{ downloading() === o._id + '-label' ? 'hourglass_top' : 'local_shipping' }}</span>\n                  </button>\n                </div>\n              </td>\n            </tr>\n            <tr *ngIf=\"orders().length === 0\">\n              <td colspan=\"7\" class=\"empty-row\">No orders found</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"pagination\" *ngIf=\"pages() > 1\" style=\"padding:16px 24px;margin-top:0\">\n        <button class=\"page-btn\" (click)=\"goPage(page() - 1)\" [disabled]=\"page() === 1\"><</button>\n        <button *ngFor=\"let p of pageArr()\" class=\"page-btn\" [class.active]=\"p === page()\" (click)=\"goPage(p)\">{{ p }}</button>\n        <button class=\"page-btn\" (click)=\"goPage(page() + 1)\" [disabled]=\"page() === pages()\">></button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal-overlay\" *ngIf=\"selected()\" (click)=\"closeOrderModal()\">\n  <div class=\"modal-box order-modal\" (click)=\"$event.stopPropagation()\">\n    <div class=\"modal-header\">\n      <div>\n        <h3>{{ selected()!.orderNumber }}</h3>\n        <p class=\"modal-sub\">{{ selected()!.userName }} - {{ selected()!.createdAt | date:'d MMM yyyy' }}</p>\n      </div>\n      <div class=\"modal-header-actions\">\n        <button class=\"modal-dl-btn inv\" (click)=\"downloadInvoice(selected()!._id, selected()!.orderNumber)\" title=\"Invoice\">\n          <span class=\"material-icons\">receipt_long</span> Invoice\n        </button>\n        <button class=\"modal-dl-btn label\" (click)=\"downloadLabel(selected()!._id, selected()!.orderNumber)\" title=\"Shipping Label\">\n          <span class=\"material-icons\">local_shipping</span> Label\n        </button>\n        <button class=\"modal-close\" (click)=\"closeOrderModal()\">\n          <span class=\"material-icons\">close</span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"modal-body\" *ngIf=\"selected() as o\">\n      <div class=\"modal-meta\">\n        <div class=\"meta-item\"><label>Status</label><span class=\"badge\" [class]=\"'badge-' + o.status\">{{ o.status }}</span></div>\n        <div class=\"meta-item\"><label>Payment</label><span>{{ o.paymentMethod }} - {{ o.paymentStatus }}</span></div>\n        <div class=\"meta-item\" style=\"grid-column:1/-1\">\n          <label>Ship To</label>\n          <span>{{ o.shippingAddress.name }}, {{ o.shippingAddress.street }}, {{ o.shippingAddress.city }}, {{ o.shippingAddress.state }} {{ o.shippingAddress.pincode }}</span>\n        </div>\n      </div>\n\n      <div class=\"update-form\">\n        <h5 class=\"uf-title\">Update Order</h5>\n        <div class=\"uf-grid\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">New Status</label>\n            <select class=\"form-control\" [(ngModel)]=\"updateForm.status\">\n              <option *ngFor=\"let s of statuses\" [value]=\"s\">{{ s | titlecase }}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Tracking Number</label>\n            <input class=\"form-control\" [(ngModel)]=\"updateForm.trackingNumber\" placeholder=\"e.g. DELHIVERY123\" />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Courier</label>\n            <input class=\"form-control\" [(ngModel)]=\"updateForm.courier\" placeholder=\"e.g. Delhivery\" />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Note / Description</label>\n            <input class=\"form-control\" [(ngModel)]=\"updateForm.description\" placeholder=\"e.g. Out for delivery\" />\n          </div>\n        </div>\n        <button class=\"btn btn-primary btn-sm\" (click)=\"saveUpdate()\">\n          <span class=\"material-icons\" style=\"font-size:15px\">save</span> Save Update\n        </button>\n      </div>\n\n      <div class=\"modal-items\">\n        <h5 class=\"uf-title\">Items ({{ o.items.length }})</h5>\n        <div *ngFor=\"let i of o.items\" class=\"mi-row\">\n          <img [src]=\"i.productImage\" [alt]=\"i.productName\" class=\"mi-img\" />\n          <div class=\"mi-info\">\n            <div class=\"mi-name\">{{ i.productName }}</div>\n            <div class=\"mi-meta\">Qty {{ i.quantity }}{{ i.color ? ' - ' + i.color : '' }} - {{ i.category }}</div>\n          </div>\n          <div class=\"mi-price\">Rs {{ (i.price * i.quantity).toLocaleString('en-IN') }}</div>\n        </div>\n      </div>\n\n      <div class=\"modal-totals\">\n        <div class=\"tot-row\"><span>Subtotal</span><span>Rs {{ o.subtotal.toLocaleString('en-IN') }}</span></div>\n        <div class=\"tot-row\"><span>Shipping</span><span>{{ o.shipping === 0 ? 'FREE' : 'Rs ' + o.shipping }}</span></div>\n        <div class=\"tot-row\"><span>GST (5%)</span><span>Rs {{ o.tax.toLocaleString('en-IN') }}</span></div>\n        <div class=\"tot-row tot-total\"><span>Total</span><span class=\"tot-val\">Rs {{ o.total.toLocaleString('en-IN') }}</span></div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["// Admin Orders Component Styles\n\n.s-logo-inner { display:flex; align-items:center; gap:10px; }\n.s-logo-mark { width:32px; height:32px; background:var(--gold-warm); color:white; display:flex; align-items:center; justify-content:center; border-radius:2px; font-family:var(--font-display); font-size:1rem; }\n.s-logo-text { color:rgba(255,255,255,0.85); font-family:var(--font-display); font-size:1rem; }\n\n.orders-toolbar {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n\n.search-wrap {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n\n.si {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 18px;\n}\n\n.loading-state {\n  padding: 48px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n\n.live-status {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.live-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(45, 122, 79, 0.08);\n  color: var(--success);\n  font-size: 0.76rem;\n  font-weight: 500;\n}\n\n.live-pill.syncing {\n  background: rgba(201, 149, 42, 0.12);\n  color: var(--gold-warm);\n}\n\n.live-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: currentColor;\n  animation: pulse 1.6s ease-in-out infinite;\n}\n\n.sync-time {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n\n.empty-row {\n  text-align: center;\n  padding: 48px !important;\n  color: var(--text-muted);\n}\n\n// Table cells\n.order-id {\n  font-family: 'Courier New', monospace;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--burgundy);\n  letter-spacing: 0.04em;\n}\n\n.cust-name { font-size: 0.875rem; color: var(--text); font-weight: 500; }\n.cust-email { font-size: 0.72rem; color: var(--text-dim); }\n\n.order-amt { font-family: var(--font-display); color: var(--burgundy); font-size: 1rem; }\n.order-items-ct { font-size: 0.72rem; color: var(--text-muted); }\n\n.pay-method { font-size: 0.82rem; color: var(--text-muted); }\n.pay-status-tag { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }\n.tag-paid { color: var(--success); }\n.tag-pending { color: var(--warning); }\n\n.date-cell { font-size: 0.78rem; color: var(--text-muted); white-space: nowrap; }\n\n// Status select\n.status-sel {\n  padding: 4px 8px;\n  border-radius: 20px;\n  font-size: 0.68rem;\n  font-family: var(--font-body);\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  border: 1.5px solid var(--border);\n  cursor: pointer;\n  outline: none;\n  appearance: none;\n  transition: all 0.2s;\n  text-align: center;\n}\n\n.st-pending,.st-confirmed,.st-processing { background:rgba(107,84,71,0.08); color:var(--text-muted); border-color:var(--border); }\n.st-shipped,.st-out_for_delivery { background:rgba(201,149,42,0.12); color:var(--gold-warm); border-color:rgba(201,149,42,0.3); }\n.st-delivered { background:rgba(45,122,79,0.12); color:var(--success); border-color:rgba(45,122,79,0.3); }\n.st-cancelled,.st-returned { background:rgba(192,57,43,0.1); color:var(--error); border-color:rgba(192,57,43,0.3); }\n\n// Action buttons\n.action-group { display: flex; gap: 6px; align-items: center; }\n\n.act-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  background: white;\n  color: var(--text-muted);\n  transition: all 0.2s;\n\n  .material-icons { font-size: 15px; }\n\n  &:disabled { opacity: 0.45; cursor: not-allowed; }\n}\n\n.view-btn:hover { background: var(--surface-2); color: var(--text); border-color: var(--border-strong); }\n.inv-btn:hover:not(:disabled) { background: var(--burgundy-pale); color: var(--burgundy); border-color: var(--burgundy); }\n.label-btn:hover:not(:disabled) { background: var(--gold-pale); color: var(--gold-warm); border-color: var(--gold-warm); }\n\n// \u2500\u2500 Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.order-modal { max-width: 620px; width: 95%; }\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface);\n\n  h3 { font-family: var(--font-display); font-size: 1.3rem; color: var(--text); font-family: 'Courier New', monospace; letter-spacing: 0.04em; }\n  .modal-sub { font-size: 0.78rem; color: var(--text-muted); margin-top: 3px; }\n}\n\n.modal-header-actions { display: flex; align-items: center; gap: 8px; }\n\n.modal-dl-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1.5px solid;\n\n  .material-icons { font-size: 14px; }\n\n  &.inv {\n    background: var(--burgundy-pale);\n    border-color: var(--burgundy);\n    color: var(--burgundy);\n    &:hover { background: var(--burgundy); color: white; }\n  }\n\n  &.label {\n    background: var(--gold-pale);\n    border-color: var(--gold-warm);\n    color: var(--gold-warm);\n    &:hover { background: var(--gold-warm); color: white; }\n  }\n}\n\n.modal-close {\n  width: 32px; height: 32px;\n  display: flex; align-items: center; justify-content: center;\n  border-radius: 50%; background: none; border: 1px solid var(--border);\n  color: var(--text-muted); cursor: pointer; transition: all 0.2s;\n  &:hover { background: var(--surface-2); color: var(--text); }\n  .material-icons { font-size: 16px; }\n}\n\n.modal-body { padding: 24px; max-height: 72vh; overflow-y: auto; }\n\n.modal-meta {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n}\n\n.meta-item { display: flex; flex-direction: column; gap: 3px;\n  label { font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold-warm); font-weight: 600; }\n  span { font-size: 0.85rem; color: var(--text); }\n}\n\n.update-form {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 18px;\n  margin-bottom: 20px;\n}\n\n.uf-title {\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  font-family: var(--font-body);\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n\n.uf-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.modal-items { margin-bottom: 16px;\n  .uf-title { margin-bottom: 12px; }\n}\n\n.mi-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n  &:last-child { border-bottom: none; }\n}\n\n.mi-img { width: 44px; height: 58px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border); flex-shrink: 0; }\n.mi-info { flex: 1; }\n.mi-name { font-size: 0.875rem; color: var(--text); }\n.mi-meta { font-size: 0.72rem; color: var(--text-muted); }\n.mi-price { font-family: var(--font-display); color: var(--burgundy); }\n\n.modal-totals { border-top: 1px solid var(--border); padding-top: 14px; }\n\n.tot-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n}\n\n.tot-total {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text);\n  padding-top: 10px;\n  border-top: 1px solid var(--border);\n}\n\n.tot-val { font-family: var(--font-display); color: var(--burgundy); font-size: 1.2rem; }\n\n// Badge styles\n.badge { padding:3px 10px; border-radius:2px; font-size:0.65rem; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; }\n.badge-delivered { background:rgba(45,122,79,0.1); color:var(--success); }\n.badge-shipped,.badge-out_for_delivery { background:rgba(201,149,42,0.12); color:var(--gold-warm); }\n.badge-pending,.badge-confirmed,.badge-processing { background:rgba(107,84,71,0.1); color:var(--text-muted); }\n.badge-cancelled,.badge-returned { background:rgba(192,57,43,0.1); color:var(--error); }\n\n@media (max-width: 768px) {\n  .uf-grid { grid-template-columns: 1fr; }\n  .modal-meta { grid-template-columns: 1fr; }\n  .modal-header-actions { gap: 4px; }\n  .modal-dl-btn span:not(.material-icons) { display: none; }\n}\n\n/* \u2500\u2500 Mobile Responsive \u2500\u2500 */\n@media (max-width: 1024px) {\n  .orders-toolbar { flex-direction: column; gap: 10px; .search-wrap { min-width: 100%; } select { width: 100%; } }\n}\n\n@media (max-width: 768px) {\n  .live-status { justify-content: flex-start; }\n  .orders-toolbar { margin-bottom: 16px; }\n  /* Hide less important table columns on mobile */\n  table thead th:nth-child(4),\n  table tbody td:nth-child(4) { display: none; }\n}\n\n@media (max-width: 540px) {\n  table thead th:nth-child(3),\n  table tbody td:nth-child(3),\n  table thead th:nth-child(6),\n  table tbody td:nth-child(6) { display: none; }\n  .action-group { flex-direction: column; gap: 4px; }\n  .act-btn { width: 28px; height: 28px; }\n  .uf-grid { grid-template-columns: 1fr; }\n  .modal-dl-btn span:not(.material-icons) { display: none; }\n  .modal-header { padding: 14px 16px; flex-wrap: wrap; gap: 8px; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminOrdersComponent, { className: "AdminOrdersComponent", filePath: "src\\app\\components\\admin\\orders\\admin-orders.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=admin-orders.component.js.map