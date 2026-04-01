import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import { ApiService } from '../../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = () => ({ exact: true });
function AdminProductsComponent_option_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r1);
} }
function AdminProductsComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1, "Loading products...");
    i0.ɵɵelementEnd();
} }
function AdminProductsComponent_div_55_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1, "New");
    i0.ɵɵelementEnd();
} }
function AdminProductsComponent_div_55_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 53);
    i0.ɵɵtext(1, "Best");
    i0.ɵɵelementEnd();
} }
function AdminProductsComponent_div_55_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 54);
    i0.ɵɵtext(1, "Hidden");
    i0.ɵɵelementEnd();
} }
function AdminProductsComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35)(2, "img", 36);
    i0.ɵɵlistener("error", function AdminProductsComponent_div_55_div_1_Template_img_error_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onImgErr($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 37);
    i0.ɵɵtemplate(4, AdminProductsComponent_div_55_div_1_span_4_Template, 2, 0, "span", 38)(5, AdminProductsComponent_div_55_div_1_span_5_Template, 2, 0, "span", 39)(6, AdminProductsComponent_div_55_div_1_span_6_Template, 2, 0, "span", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 41)(8, "button", 42);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_55_div_1_Template_button_click_8_listener() { const p_r4 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openEdit(p_r4)); });
    i0.ɵɵelementStart(9, "span", 8);
    i0.ɵɵtext(10, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 43);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_55_div_1_Template_button_click_11_listener() { const p_r4 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openStock(p_r4)); });
    i0.ɵɵelementStart(12, "span", 8);
    i0.ɵɵtext(13, "inventory");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "button", 44);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_55_div_1_Template_button_click_14_listener() { const p_r4 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.askDelete(p_r4)); });
    i0.ɵɵelementStart(15, "span", 8);
    i0.ɵɵtext(16, "delete_outline");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(17, "div", 45)(18, "div", 46);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 47);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 48);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 49)(25, "span", 50);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 51);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", p_r4.images[0], i0.ɵɵsanitizeUrl)("alt", p_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", p_r4.newArrival);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", p_r4.bestseller);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !p_r4.isActive);
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(p_r4.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r4.origin);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u20B9", p_r4.price.toLocaleString("en-IN"), "");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("low", p_r4.stock <= 5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", p_r4.stock, " left");
} }
function AdminProductsComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtemplate(1, AdminProductsComponent_div_55_div_1_Template, 29, 12, "div", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.products());
} }
function AdminProductsComponent_div_56_option_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r6);
} }
function AdminProductsComponent_div_56_div_70_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 83);
} if (rf & 2) {
    const u_r7 = ctx.$implicit;
    i0.ɵɵproperty("src", u_r7, i0.ɵɵsanitizeUrl);
} }
function AdminProductsComponent_div_56_div_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵtemplate(1, AdminProductsComponent_div_56_div_70_img_1_Template, 1, 1, "img", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.uploadedUrls());
} }
function AdminProductsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_56_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵelementStart(1, "div", 56);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_56_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 57)(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 58);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_56_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵelementStart(6, "span", 8);
    i0.ɵɵtext(7, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 59)(9, "div", 60)(10, "div", 61)(11, "label", 62);
    i0.ɵɵtext(12, "Product Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 63);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 61)(15, "label", 62);
    i0.ɵɵtext(16, "Category *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "select", 63);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_select_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.category, $event) || (ctx_r2.form.category = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(18, AdminProductsComponent_div_56_option_18_Template, 2, 2, "option", 26);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 61)(20, "label", 62);
    i0.ɵɵtext(21, "Description *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "textarea", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_textarea_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 60)(24, "div", 61)(25, "label", 62);
    i0.ɵɵtext(26, "Price (\u20B9) *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "input", 65);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.price, $event) || (ctx_r2.form.price = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 61)(29, "label", 62);
    i0.ɵɵtext(30, "Original Price (\u20B9)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "input", 65);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.originalPrice, $event) || (ctx_r2.form.originalPrice = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 61)(33, "label", 62);
    i0.ɵɵtext(34, "Stock *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "input", 65);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.stock, $event) || (ctx_r2.form.stock = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "div", 60)(37, "div", 61)(38, "label", 62);
    i0.ɵɵtext(39, "Origin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "input", 66);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.origin, $event) || (ctx_r2.form.origin = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 61)(42, "label", 62);
    i0.ɵɵtext(43, "Fabric");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "input", 67);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_44_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.fabric, $event) || (ctx_r2.form.fabric = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(45, "div", 60)(46, "div", 61)(47, "label", 62);
    i0.ɵɵtext(48, "SKU");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "input", 68);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_49_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.sku, $event) || (ctx_r2.form.sku = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 61)(51, "label", 62);
    i0.ɵɵtext(52, "Tags (comma-separated)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "input", 69);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_53_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.tags, $event) || (ctx_r2.form.tags = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "div", 61)(55, "label", 62);
    i0.ɵɵtext(56, "Colors (comma-separated)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "input", 70);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_57_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.colors, $event) || (ctx_r2.form.colors = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 61)(59, "label", 62);
    i0.ɵɵtext(60, "Occasions (comma-separated)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "input", 71);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_61_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.occasion, $event) || (ctx_r2.form.occasion = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "div", 61)(63, "label", 62);
    i0.ɵɵtext(64, "Image URL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "input", 72);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_65_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.imageUrl, $event) || (ctx_r2.form.imageUrl = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "div", 61)(67, "label", 62);
    i0.ɵɵtext(68, "Upload Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "input", 73);
    i0.ɵɵlistener("change", function AdminProductsComponent_div_56_Template_input_change_69_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onFileChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(70, AdminProductsComponent_div_56_div_70_Template, 2, 1, "div", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "div", 75)(72, "label", 76)(73, "input", 77);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_73_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.newArrival, $event) || (ctx_r2.form.newArrival = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(74, " New Arrival");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "label", 76)(76, "input", 77);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_76_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.bestseller, $event) || (ctx_r2.form.bestseller = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(77, " Bestseller");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "label", 76)(79, "input", 77);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_79_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.featured, $event) || (ctx_r2.form.featured = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(80, " Featured");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "label", 76)(82, "input", 77);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_56_Template_input_ngModelChange_82_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.blouseIncluded, $event) || (ctx_r2.form.blouseIncluded = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(83, " Blouse Included");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "div", 78)(85, "button", 79);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_56_Template_button_click_85_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵtext(86, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "button", 80);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_56_Template_button_click_87_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.save()); });
    i0.ɵɵtext(88);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.editing() ? "Edit Product" : "Add New Product");
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.category);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.categories);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.description);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.price);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.originalPrice);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.stock);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.origin);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.fabric);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.sku);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.tags);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.colors);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.occasion);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.imageUrl);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r2.uploadedUrls().length);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.newArrival);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.bestseller);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.featured);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.blouseIncluded);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r2.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.saving() ? "Saving..." : ctx_r2.editing() ? "Save Changes" : "Add Product");
} }
function AdminProductsComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_57_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.stockModal.set(null)); });
    i0.ɵɵelementStart(1, "div", 84);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_57_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r8); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 57)(3, "h3");
    i0.ɵɵtext(4, "Adjust Stock");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 58);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_57_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.stockModal.set(null)); });
    i0.ɵɵelementStart(6, "span", 8);
    i0.ɵɵtext(7, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 85)(9, "p", 86);
    i0.ɵɵtext(10, "Current stock: ");
    i0.ɵɵelementStart(11, "strong", 87);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " units");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 61)(15, "label", 62);
    i0.ɵɵtext(16, "Change (use negative for deduction)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 88);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_57_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.stockChange, $event) || (ctx_r2.stockChange = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 61)(19, "label", 62);
    i0.ɵɵtext(20, "Reason");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "select", 63);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_div_57_Template_select_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.stockReason, $event) || (ctx_r2.stockReason = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(22, "option", 89);
    i0.ɵɵtext(23, "Restock");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "option", 90);
    i0.ɵɵtext(25, "Manual Adjustment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 91);
    i0.ɵɵtext(27, "Damage / Loss");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 92);
    i0.ɵɵtext(29, "Customer Return");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 93)(31, "button", 79);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_57_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.stockModal.set(null)); });
    i0.ɵɵtext(32, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "button", 19);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_57_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.saveStock()); });
    i0.ɵɵtext(34, "Update Stock");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r2.stockModal()) == null ? null : tmp_1_0.stock);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.stockChange);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.stockReason);
} }
function AdminProductsComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_58_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.deleteTarget.set(null)); });
    i0.ɵɵelementStart(1, "div", 94);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_58_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r9); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 57)(3, "h3");
    i0.ɵɵtext(4, "Remove Product");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 85)(6, "p", 95);
    i0.ɵɵtext(7, "Remove ");
    i0.ɵɵelementStart(8, "strong", 87);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " from the store? It will be hidden from customers.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 96)(12, "button", 79);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_58_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.deleteTarget.set(null)); });
    i0.ɵɵtext(13, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 97);
    i0.ɵɵlistener("click", function AdminProductsComponent_div_58_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.doDelete()); });
    i0.ɵɵtext(15, "Remove");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r2.deleteTarget()) == null ? null : tmp_1_0.name);
} }
export class AdminProductsComponent {
    constructor() {
        this.ps = inject(ProductService);
        this.api = inject(ApiService);
        this.auth = inject(AuthService);
        this.toast = inject(ToastService);
        this.products = signal([]);
        this.loading = signal(true);
        this.total = signal(0);
        this.modalOpen = signal(false);
        this.editing = signal(null);
        this.deleteTarget = signal(null);
        this.stockModal = signal(null);
        this.saving = signal(false);
        this.uploadedUrls = signal([]);
        this.searchQ = '';
        this.catFilter = '';
        this.stockChange = 0;
        this.stockReason = 'restock';
        this.categories = [];
        this.categoriesLoading = false;
        this.form = this.blankForm();
    }
    blankForm() {
        return { name: '', category: 'Banarasi', description: '', price: 0, originalPrice: 0, stock: 10, origin: '', fabric: '', colors: 'Red, Gold', occasion: 'Wedding, Party', imageUrl: '', sku: '', tags: '', newArrival: false, bestseller: false, featured: false, blouseIncluded: true };
    }
    ngOnInit() {
        this.load();
        this.loadCategories();
    }
    loadCategories() {
        this.api.get('/categories/all').subscribe({
            next: r => {
                this.categories = (r.categories || []).filter((c) => c.isActive).map((c) => c.name);
                if (this.categories.length > 0 && !this.form.category) {
                    this.form.category = this.categories[0];
                }
            },
            error: () => { },
        });
    }
    load() {
        this.loading.set(true);
        const params = { limit: 50 };
        if (this.searchQ)
            params['q'] = this.searchQ;
        if (this.catFilter)
            params['category'] = this.catFilter;
        this.ps.getProducts(params).subscribe({
            next: (r) => { this.products.set(r.products); this.total.set(r.pagination.total); this.loading.set(false); },
            error: () => this.loading.set(false),
        });
    }
    openAdd() { this.form = this.blankForm(); this.editing.set(null); this.uploadedUrls.set([]); this.modalOpen.set(true); }
    openEdit(p) {
        this.form = {
            name: p.name, category: p.category, description: p.description,
            price: p.price, originalPrice: p.originalPrice || 0, stock: p.stock,
            origin: p.origin, fabric: p.fabric,
            colors: p.colors.join(', '), occasion: p.occasion.join(', '),
            imageUrl: p.images[0] || '',
            sku: p.sku || '',
            tags: (p.tags || []).join(', '),
            newArrival: p.newArrival, bestseller: p.bestseller, featured: p.featured, blouseIncluded: p.blouseIncluded,
        };
        this.editing.set(p);
        this.uploadedUrls.set([]);
        this.modalOpen.set(true);
    }
    closeModal() { this.modalOpen.set(false); this.editing.set(null); }
    onFileChange(e) {
        const files = Array.from(e.target.files || []);
        if (!files.length)
            return;
        this.ps.uploadImages(files).subscribe({
            next: (r) => { this.uploadedUrls.set(r.urls); this.toast.success(`${r.urls.length} image(s) uploaded`); },
            error: (e) => this.toast.error(e.message),
        });
    }
    save() {
        if (!this.form.name || this.form.price <= 0) {
            this.toast.error('Name and price are required.');
            return;
        }
        this.saving.set(true);
        const images = this.uploadedUrls().length ? this.uploadedUrls() : (this.form.imageUrl ? [this.form.imageUrl] : []);
        const data = {
            ...this.form,
            colors: this.form.colors.split(',').map((s) => s.trim()).filter(Boolean),
            occasion: this.form.occasion.split(',').map((s) => s.trim()).filter(Boolean),
            images,
            sku: this.form.sku || undefined,
            tags: this.form.tags
                ? this.form.tags.split(',').map((s) => s.trim()).filter(Boolean)
                : [this.form.category, this.form.fabric].filter(Boolean),
            length: '6.3m',
        };
        delete data.imageUrl;
        const op = this.editing()
            ? this.ps.update(this.editing()._id, data)
            : this.ps.create(data);
        op.subscribe({
            next: (r) => { this.toast.success(r.message || 'Saved!'); this.closeModal(); this.saving.set(false); this.load(); },
            error: (e) => { this.toast.error(e.message); this.saving.set(false); },
        });
    }
    askDelete(p) { this.deleteTarget.set(p); }
    doDelete() {
        this.ps.delete(this.deleteTarget()._id).subscribe({
            next: () => { this.toast.success('Product removed.'); this.deleteTarget.set(null); this.load(); },
            error: (e) => this.toast.error(e.message),
        });
    }
    openStock(p) { this.stockModal.set(p); this.stockChange = 0; this.stockReason = 'restock'; }
    saveStock() {
        if (!this.stockChange) {
            this.toast.error('Enter a change value.');
            return;
        }
        this.ps.updateStock(this.stockModal()._id, Number(this.stockChange), this.stockReason).subscribe({
            next: (r) => { this.toast.success(`Stock updated! New stock: ${r.stock}`); this.stockModal.set(null); this.load(); },
            error: (e) => this.toast.error(e.message),
        });
    }
    onImgErr(e) { e.target.src = 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=200'; }
    static { this.ɵfac = function AdminProductsComponent_Factory(t) { return new (t || AdminProductsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminProductsComponent, selectors: [["app-admin-products"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 59, vars: 11, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-logo"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [2, "width", "32px", "height", "32px", "background", "var(--gold-warm)", "color", "white", "display", "flex", "align-items", "center", "justify-content", "center", "border-radius", "2px", "font-family", "var(--font-display)"], [2, "color", "rgba(255,255,255,0.85)", "font-family", "var(--font-display)"], [1, "sidebar-nav"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "material-icons"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], [1, "nav-divider"], ["routerLink", "/", 1, "nav-item"], [1, "nav-item", "logout", 3, "click"], [1, "admin-main"], [1, "admin-topbar"], [1, "admin-page-title"], [1, "admin-page-sub"], [1, "btn", "btn-primary", 3, "click"], [1, "toolbar"], [2, "position", "relative", "flex", "1"], [1, "material-icons", 2, "position", "absolute", "left", "10px", "top", "50%", "transform", "translateY(-50%)", "color", "var(--text-muted)", "font-size", "18px"], ["placeholder", "Search products...", 1, "form-control", 2, "padding-left", "36px", 3, "ngModelChange", "input", "ngModel"], [1, "form-control", 2, "width", "auto", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["style", "text-align:center;padding:60px;color:var(--text-muted)", 4, "ngIf"], ["class", "products-grid", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "value"], [2, "text-align", "center", "padding", "60px", "color", "var(--text-muted)"], [1, "products-grid"], ["class", "prod-card", 4, "ngFor", "ngForOf"], [1, "prod-card"], [1, "pc-img"], [3, "error", "src", "alt"], [1, "pc-badges"], ["class", "badge badge-new", 4, "ngIf"], ["class", "badge badge-best", 4, "ngIf"], ["class", "badge", "style", "background:var(--error);color:white", 4, "ngIf"], [1, "pc-acts"], [1, "pac-btn", "edit", 3, "click"], ["title", "Adjust Stock", 1, "pac-btn", "stock", 3, "click"], [1, "pac-btn", "del", 3, "click"], [1, "pc-body"], [1, "pc-cat"], [1, "pc-name"], [1, "pc-origin"], [1, "pc-foot"], [1, "pc-price"], [1, "pc-stock"], [1, "badge", "badge-new"], [1, "badge", "badge-best"], [1, "badge", 2, "background", "var(--error)", "color", "white"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 2, "max-width", "min(660px,96vw)", "width", "96vw", "max-height", "90vh", 3, "click"], [1, "modal-header"], [1, "pac-btn", 3, "click"], [2, "padding", "24px", "overflow-y", "auto", "max-height", "75vh"], [1, "fg-row"], [1, "form-group"], [1, "form-label"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Varanasi, UP", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Pure Silk", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "VV-BAN-001", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "banarasi, silk, bridal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Red, Gold, Green", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Wedding, Party, Festive", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "https://...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", "image/*", "multiple", "", 1, "form-control", 3, "change"], ["style", "margin-top:8px;display:flex;gap:8px;flex-wrap:wrap", 4, "ngIf"], [1, "checkboxes"], [1, "check-opt"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "justify-content", "flex-end", "gap", "12px", "margin-top", "20px", "padding-top", "16px", "border-top", "1px solid var(--border)"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [2, "margin-top", "8px", "display", "flex", "gap", "8px", "flex-wrap", "wrap"], ["style", "width:60px;height:80px;object-fit:cover;border-radius:4px;border:1px solid var(--border)", 3, "src", 4, "ngFor", "ngForOf"], [2, "width", "60px", "height", "80px", "object-fit", "cover", "border-radius", "4px", "border", "1px solid var(--border)", 3, "src"], [1, "modal-box", 2, "max-width", "min(400px,96vw)", "width", "96vw", 3, "click"], [2, "padding", "24px"], [2, "color", "var(--text-muted)", "margin-bottom", "16px"], [2, "color", "var(--text)"], ["type", "number", "placeholder", "e.g. +10 or -5", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "restock"], ["value", "manual"], ["value", "damage"], ["value", "return"], [2, "display", "flex", "justify-content", "flex-end", "gap", "12px", "margin-top", "16px"], [1, "modal-box", 2, "max-width", "min(420px,96vw)", "width", "96vw", 3, "click"], [2, "color", "var(--text-muted)"], [2, "display", "flex", "justify-content", "flex-end", "gap", "12px", "margin-top", "20px"], [1, "btn", 2, "background", "var(--error)", "color", "white", 3, "click"]], template: function AdminProductsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵtext(5, "V");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 5);
            i0.ɵɵtext(7, "Vastra Vaibhav");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "nav", 6)(9, "a", 7)(10, "span", 8);
            i0.ɵɵtext(11, "dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, " Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 9)(14, "span", 8);
            i0.ɵɵtext(15, "receipt_long");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " Orders");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "a", 10)(18, "span", 8);
            i0.ɵɵtext(19, "inventory_2");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(20, " Products");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "a", 11)(22, "span", 8);
            i0.ɵɵtext(23, "group");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(24, " Customers");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(25, "div", 12);
            i0.ɵɵelementStart(26, "a", 13)(27, "span", 8);
            i0.ɵɵtext(28, "storefront");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(29, " View Store");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "button", 14);
            i0.ɵɵlistener("click", function AdminProductsComponent_Template_button_click_30_listener() { return ctx.auth.logout(); });
            i0.ɵɵelementStart(31, "span", 8);
            i0.ɵɵtext(32, "logout");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(33, " Logout");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "div", 15)(35, "div", 16)(36, "div")(37, "h1", 17);
            i0.ɵɵtext(38, "Products");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "p", 18);
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "button", 19);
            i0.ɵɵlistener("click", function AdminProductsComponent_Template_button_click_41_listener() { return ctx.openAdd(); });
            i0.ɵɵelementStart(42, "span", 8);
            i0.ɵɵtext(43, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(44, " Add Product");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 20)(46, "div", 21)(47, "span", 22);
            i0.ɵɵtext(48, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "input", 23);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_Template_input_ngModelChange_49_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchQ, $event) || (ctx.searchQ = $event); return $event; });
            i0.ɵɵlistener("input", function AdminProductsComponent_Template_input_input_49_listener() { return ctx.load(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "select", 24);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminProductsComponent_Template_select_ngModelChange_50_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.catFilter, $event) || (ctx.catFilter = $event); return $event; });
            i0.ɵɵlistener("change", function AdminProductsComponent_Template_select_change_50_listener() { return ctx.load(); });
            i0.ɵɵelementStart(51, "option", 25);
            i0.ɵɵtext(52, "All Categories");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(53, AdminProductsComponent_option_53_Template, 2, 2, "option", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(54, AdminProductsComponent_div_54_Template, 2, 0, "div", 27)(55, AdminProductsComponent_div_55_Template, 2, 1, "div", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(56, AdminProductsComponent_div_56_Template, 89, 22, "div", 29)(57, AdminProductsComponent_div_57_Template, 35, 3, "div", 29)(58, AdminProductsComponent_div_58_Template, 16, 1, "div", 29);
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(10, _c0));
            i0.ɵɵadvance(31);
            i0.ɵɵtextInterpolate1("", ctx.total(), " products in catalogue");
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchQ);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.catFilter);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalOpen());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.stockModal());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.deleteTarget());
        } }, dependencies: [RouterLink, RouterLinkActive, CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["//[_ngcontent-%COMP%]   Admin[_ngcontent-%COMP%]   Products[_ngcontent-%COMP%]   Management[_ngcontent-%COMP%]   Styles\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n\n//[_ngcontent-%COMP%]   Products[_ngcontent-%COMP%]   grid\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n}\n\n.prod-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.25s;\n\n  &:hover {\n    box-shadow: var(--shadow-md);\n    border-color: var(--border-warm);\n\n    .pc-acts { opacity: 1; }\n    .pc-img img { transform: scale(1.04); }\n  }\n}\n\n.pc-img[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3 / 4;\n  overflow: hidden;\n  background: var(--surface);\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.5s;\n  }\n}\n\n.pc-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.pc-acts[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.pac-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  background: white;\n  color: var(--text-muted);\n  box-shadow: 0 2px 6px rgba(44,24,16,0.12);\n  transition: all 0.2s;\n\n  .material-icons { font-size: 15px; }\n\n  &.edit:hover { background: var(--burgundy-pale); color: var(--burgundy); }\n  &.stock:hover { background: var(--gold-pale); color: var(--gold-warm); }\n  &.del:hover { background: rgba(192,57,43,0.1); color: var(--error); }\n}\n\n.pc-body[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n\n.pc-cat[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 4px;\n}\n\n.pc-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text);\n  font-weight: 500;\n  line-height: 1.3;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.pc-origin[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--text-dim);\n  margin-bottom: 8px;\n}\n\n.pc-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pc-price[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  color: var(--burgundy);\n  font-size: 1rem;\n}\n\n.pc-stock[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--success);\n  font-weight: 500;\n\n  &.low { color: var(--error); }\n}\n\n//[_ngcontent-%COMP%]   Modal[_ngcontent-%COMP%]   styles\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface);\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.3rem;\n    color: var(--text);\n    font-weight: 400;\n  }\n}\n\n.fg-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.checkboxes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-top: 4px;\n}\n\n.check-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.84rem;\n  color: var(--text-muted);\n  cursor: pointer;\n\n  input[type=\"checkbox\"] { accent-color: var(--burgundy); cursor: pointer; }\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 24px;\n  background: var(--error);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  font-family: var(--font-body);\n  font-size: 0.82rem;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  transition: all 0.2s;\n\n  &:hover { background: #a93226; transform: translateY(-1px); }\n}\n\n@media (max-width: 640px) { .fg-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }\n\n\n\n@media (max-width: 768px) {\n  .toolbar[_ngcontent-%COMP%] { flex-direction: column; gap: 10px; }\n  .products-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); gap: 12px; }\n  .pc-acts[_ngcontent-%COMP%] { opacity: 1; }\n}\n\n@media (max-width: 480px) {\n  .products-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); gap: 10px; }\n  .pc-body[_ngcontent-%COMP%] { padding: 10px; }\n  .pc-name[_ngcontent-%COMP%] { font-size: 0.8rem; }\n  .pc-price[_ngcontent-%COMP%] { font-size: 0.9rem; }\n  .fg-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .modal-body[_ngcontent-%COMP%] { padding: 16px; }\n  .modal-header[_ngcontent-%COMP%] { padding: 14px 16px; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminProductsComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-products', standalone: true, imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule], template: "<div class=\"admin-layout\">\n      <aside class=\"admin-sidebar\">\n        <div class=\"sidebar-logo\"><div style=\"display:flex;align-items:center;gap:10px\"><div style=\"width:32px;height:32px;background:var(--gold-warm);color:white;display:flex;align-items:center;justify-content:center;border-radius:2px;font-family:var(--font-display)\">V</div><span style=\"color:rgba(255,255,255,0.85);font-family:var(--font-display)\">Vastra Vaibhav</span></div></div>\n        <nav class=\"sidebar-nav\">\n          <a routerLink=\"/admin\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\"><span class=\"material-icons\">dashboard</span> Dashboard</a>\n          <a routerLink=\"/admin/orders\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">receipt_long</span> Orders</a>\n          <a routerLink=\"/admin/products\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">inventory_2</span> Products</a>\n          <a routerLink=\"/admin/users\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">group</span> Customers</a>\n          <div class=\"nav-divider\"></div>\n          <a routerLink=\"/\" class=\"nav-item\"><span class=\"material-icons\">storefront</span> View Store</a>\n          <button class=\"nav-item logout\" (click)=\"auth.logout()\"><span class=\"material-icons\">logout</span> Logout</button>\n        </nav>\n      </aside>\n\n      <div class=\"admin-main\">\n        <div class=\"admin-topbar\">\n          <div><h1 class=\"admin-page-title\">Products</h1><p class=\"admin-page-sub\">{{ total() }} products in catalogue</p></div>\n          <button class=\"btn btn-primary\" (click)=\"openAdd()\"><span class=\"material-icons\">add</span> Add Product</button>\n        </div>\n\n        <!-- Toolbar -->\n        <div class=\"toolbar\">\n          <div style=\"position:relative;flex:1\">\n            <span class=\"material-icons\" style=\"position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--text-muted);font-size:18px\">search</span>\n            <input class=\"form-control\" style=\"padding-left:36px\" [(ngModel)]=\"searchQ\" (input)=\"load()\" placeholder=\"Search products...\">\n          </div>\n          <select class=\"form-control\" style=\"width:auto\" [(ngModel)]=\"catFilter\" (change)=\"load()\">\n            <option value=\"\">All Categories</option>\n            <option *ngFor=\"let c of categories\" [value]=\"c\">{{ c }}</option>\n          </select>\n        </div>\n\n        <!-- Products grid -->\n        <div *ngIf=\"loading()\" style=\"text-align:center;padding:60px;color:var(--text-muted)\">Loading products...</div>\n        <div class=\"products-grid\" *ngIf=\"!loading()\">\n          <div *ngFor=\"let p of products()\" class=\"prod-card\">\n            <div class=\"pc-img\">\n              <img [src]=\"p.images[0]\" [alt]=\"p.name\" (error)=\"onImgErr($event)\">\n              <div class=\"pc-badges\">\n                <span *ngIf=\"p.newArrival\" class=\"badge badge-new\">New</span>\n                <span *ngIf=\"p.bestseller\" class=\"badge badge-best\">Best</span>\n                <span *ngIf=\"!p.isActive\" class=\"badge\" style=\"background:var(--error);color:white\">Hidden</span>\n              </div>\n              <div class=\"pc-acts\">\n                <button class=\"pac-btn edit\" (click)=\"openEdit(p)\"><span class=\"material-icons\">edit</span></button>\n                <button class=\"pac-btn stock\" (click)=\"openStock(p)\" title=\"Adjust Stock\"><span class=\"material-icons\">inventory</span></button>\n                <button class=\"pac-btn del\" (click)=\"askDelete(p)\"><span class=\"material-icons\">delete_outline</span></button>\n              </div>\n            </div>\n            <div class=\"pc-body\">\n              <div class=\"pc-cat\">{{ p.category }}</div>\n              <div class=\"pc-name\">{{ p.name }}</div>\n              <div class=\"pc-origin\">{{ p.origin }}</div>\n              <div class=\"pc-foot\">\n                <span class=\"pc-price\">\u20B9{{ p.price.toLocaleString('en-IN') }}</span>\n                <span class=\"pc-stock\" [class.low]=\"p.stock<=5\">{{ p.stock }} left</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Add/Edit Modal -->\n    <div class=\"modal-overlay\" *ngIf=\"modalOpen()\" (click)=\"closeModal()\">\n      <div class=\"modal-box\" style=\"max-width:min(660px,96vw);width:96vw;max-height:90vh\" (click)=\"$event.stopPropagation()\">\n        <div class=\"modal-header\">\n          <h3>{{ editing() ? 'Edit Product' : 'Add New Product' }}</h3>\n          <button class=\"pac-btn\" (click)=\"closeModal()\"><span class=\"material-icons\">close</span></button>\n        </div>\n        <div style=\"padding:24px;overflow-y:auto;max-height:75vh\">\n          <div class=\"fg-row\">\n            <div class=\"form-group\"><label class=\"form-label\">Product Name *</label><input class=\"form-control\" [(ngModel)]=\"form.name\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">Category *</label>\n              <select class=\"form-control\" [(ngModel)]=\"form.category\">\n                <option *ngFor=\"let c of categories\" [value]=\"c\">{{ c }}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group\"><label class=\"form-label\">Description *</label><textarea class=\"form-control\" [(ngModel)]=\"form.description\" rows=\"3\"></textarea></div>\n          <div class=\"fg-row\">\n            <div class=\"form-group\"><label class=\"form-label\">Price (\u20B9) *</label><input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.price\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">Original Price (\u20B9)</label><input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.originalPrice\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">Stock *</label><input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.stock\"></div>\n          </div>\n          <div class=\"fg-row\">\n            <div class=\"form-group\"><label class=\"form-label\">Origin</label><input class=\"form-control\" [(ngModel)]=\"form.origin\" placeholder=\"Varanasi, UP\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">Fabric</label><input class=\"form-control\" [(ngModel)]=\"form.fabric\" placeholder=\"Pure Silk\"></div>\n          </div>\n          <div class=\"fg-row\">\n            <div class=\"form-group\"><label class=\"form-label\">SKU</label><input class=\"form-control\" [(ngModel)]=\"form.sku\" placeholder=\"VV-BAN-001\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">Tags (comma-separated)</label><input class=\"form-control\" [(ngModel)]=\"form.tags\" placeholder=\"banarasi, silk, bridal\"></div>\n          </div>\n          <div class=\"form-group\"><label class=\"form-label\">Colors (comma-separated)</label><input class=\"form-control\" [(ngModel)]=\"form.colors\" placeholder=\"Red, Gold, Green\"></div>\n          <div class=\"form-group\"><label class=\"form-label\">Occasions (comma-separated)</label><input class=\"form-control\" [(ngModel)]=\"form.occasion\" placeholder=\"Wedding, Party, Festive\"></div>\n          <div class=\"form-group\"><label class=\"form-label\">Image URL</label><input class=\"form-control\" [(ngModel)]=\"form.imageUrl\" placeholder=\"https://...\"></div>\n          <!-- Upload -->\n          <div class=\"form-group\">\n            <label class=\"form-label\">Upload Image</label>\n            <input type=\"file\" class=\"form-control\" accept=\"image/*\" multiple (change)=\"onFileChange($event)\">\n            <div *ngIf=\"uploadedUrls().length\" style=\"margin-top:8px;display:flex;gap:8px;flex-wrap:wrap\">\n              <img *ngFor=\"let u of uploadedUrls()\" [src]=\"u\" style=\"width:60px;height:80px;object-fit:cover;border-radius:4px;border:1px solid var(--border)\">\n            </div>\n          </div>\n          <div class=\"checkboxes\">\n            <label class=\"check-opt\"><input type=\"checkbox\" [(ngModel)]=\"form.newArrival\"> New Arrival</label>\n            <label class=\"check-opt\"><input type=\"checkbox\" [(ngModel)]=\"form.bestseller\"> Bestseller</label>\n            <label class=\"check-opt\"><input type=\"checkbox\" [(ngModel)]=\"form.featured\"> Featured</label>\n            <label class=\"check-opt\"><input type=\"checkbox\" [(ngModel)]=\"form.blouseIncluded\"> Blouse Included</label>\n          </div>\n          <div style=\"display:flex;justify-content:flex-end;gap:12px;margin-top:20px;padding-top:16px;border-top:1px solid var(--border)\">\n            <button class=\"btn btn-ghost\" (click)=\"closeModal()\">Cancel</button>\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"saving()\">{{ saving()?'Saving...': editing()?'Save Changes':'Add Product' }}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Stock Adjust Modal -->\n    <div class=\"modal-overlay\" *ngIf=\"stockModal()\" (click)=\"stockModal.set(null)\">\n      <div class=\"modal-box\" style=\"max-width:min(400px,96vw);width:96vw\" (click)=\"$event.stopPropagation()\">\n        <div class=\"modal-header\">\n          <h3>Adjust Stock</h3>\n          <button class=\"pac-btn\" (click)=\"stockModal.set(null)\"><span class=\"material-icons\">close</span></button>\n        </div>\n        <div style=\"padding:24px\">\n          <p style=\"color:var(--text-muted);margin-bottom:16px\">Current stock: <strong style=\"color:var(--text)\">{{ stockModal()?.stock }}</strong> units</p>\n          <div class=\"form-group\"><label class=\"form-label\">Change (use negative for deduction)</label><input type=\"number\" class=\"form-control\" [(ngModel)]=\"stockChange\" placeholder=\"e.g. +10 or -5\"></div>\n          <div class=\"form-group\"><label class=\"form-label\">Reason</label>\n            <select class=\"form-control\" [(ngModel)]=\"stockReason\">\n              <option value=\"restock\">Restock</option>\n              <option value=\"manual\">Manual Adjustment</option>\n              <option value=\"damage\">Damage / Loss</option>\n              <option value=\"return\">Customer Return</option>\n            </select>\n          </div>\n          <div style=\"display:flex;justify-content:flex-end;gap:12px;margin-top:16px\">\n            <button class=\"btn btn-ghost\" (click)=\"stockModal.set(null)\">Cancel</button>\n            <button class=\"btn btn-primary\" (click)=\"saveStock()\">Update Stock</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Delete Confirm -->\n    <div class=\"modal-overlay\" *ngIf=\"deleteTarget()\" (click)=\"deleteTarget.set(null)\">\n      <div class=\"modal-box\" style=\"max-width:min(420px,96vw);width:96vw\" (click)=\"$event.stopPropagation()\">\n        <div class=\"modal-header\"><h3>Remove Product</h3></div>\n        <div style=\"padding:24px\">\n          <p style=\"color:var(--text-muted)\">Remove <strong style=\"color:var(--text)\">{{ deleteTarget()?.name }}</strong> from the store? It will be hidden from customers.</p>\n          <div style=\"display:flex;justify-content:flex-end;gap:12px;margin-top:20px\">\n            <button class=\"btn btn-ghost\" (click)=\"deleteTarget.set(null)\">Cancel</button>\n            <button class=\"btn\" style=\"background:var(--error);color:white\" (click)=\"doDelete()\">Remove</button>\n          </div>\n        </div>\n      </div>\n    </div>\n", styles: ["// Admin Products Management Styles\n\n.toolbar {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n\n// Products grid\n.products-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n}\n\n.prod-card {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.25s;\n\n  &:hover {\n    box-shadow: var(--shadow-md);\n    border-color: var(--border-warm);\n\n    .pc-acts { opacity: 1; }\n    .pc-img img { transform: scale(1.04); }\n  }\n}\n\n.pc-img {\n  position: relative;\n  aspect-ratio: 3 / 4;\n  overflow: hidden;\n  background: var(--surface);\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.5s;\n  }\n}\n\n.pc-badges {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.pc-acts {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.pac-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  background: white;\n  color: var(--text-muted);\n  box-shadow: 0 2px 6px rgba(44,24,16,0.12);\n  transition: all 0.2s;\n\n  .material-icons { font-size: 15px; }\n\n  &.edit:hover { background: var(--burgundy-pale); color: var(--burgundy); }\n  &.stock:hover { background: var(--gold-pale); color: var(--gold-warm); }\n  &.del:hover { background: rgba(192,57,43,0.1); color: var(--error); }\n}\n\n.pc-body {\n  padding: 12px 14px;\n}\n\n.pc-cat {\n  font-size: 0.58rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  margin-bottom: 4px;\n}\n\n.pc-name {\n  font-size: 0.875rem;\n  color: var(--text);\n  font-weight: 500;\n  line-height: 1.3;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.pc-origin {\n  font-size: 0.68rem;\n  color: var(--text-dim);\n  margin-bottom: 8px;\n}\n\n.pc-foot {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pc-price {\n  font-family: var(--font-display);\n  color: var(--burgundy);\n  font-size: 1rem;\n}\n\n.pc-stock {\n  font-size: 0.7rem;\n  color: var(--success);\n  font-weight: 500;\n\n  &.low { color: var(--error); }\n}\n\n// Modal styles\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface);\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.3rem;\n    color: var(--text);\n    font-weight: 400;\n  }\n}\n\n.fg-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.checkboxes {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-top: 4px;\n}\n\n.check-opt {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.84rem;\n  color: var(--text-muted);\n  cursor: pointer;\n\n  input[type=\"checkbox\"] { accent-color: var(--burgundy); cursor: pointer; }\n}\n\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 24px;\n  background: var(--error);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  font-family: var(--font-body);\n  font-size: 0.82rem;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  transition: all 0.2s;\n\n  &:hover { background: #a93226; transform: translateY(-1px); }\n}\n\n@media (max-width: 640px) { .fg-row { grid-template-columns: 1fr; } }\n\n/* \u2500\u2500 Mobile Responsive \u2500\u2500 */\n@media (max-width: 768px) {\n  .toolbar { flex-direction: column; gap: 10px; }\n  .products-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }\n  .pc-acts { opacity: 1; }\n}\n\n@media (max-width: 480px) {\n  .products-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }\n  .pc-body { padding: 10px; }\n  .pc-name { font-size: 0.8rem; }\n  .pc-price { font-size: 0.9rem; }\n  .fg-row { grid-template-columns: 1fr; }\n  .modal-body { padding: 16px; }\n  .modal-header { padding: 14px 16px; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminProductsComponent, { className: "AdminProductsComponent", filePath: "src\\app\\components\\admin\\products-mgmt\\admin-products.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=admin-products.component.js.map