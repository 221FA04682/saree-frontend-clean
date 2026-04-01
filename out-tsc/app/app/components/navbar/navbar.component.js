import { Component, signal, computed, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, switchMap, of, takeUntil } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = () => ({ exact: true });
const _c1 = () => ({ filter: "new" });
const _c2 = () => ({ filter: "bestseller" });
const _c3 = () => ({ filter: "featured" });
const _c4 = () => ({ occasion: "Wedding" });
const _c5 = a0 => [a0, "INR", "symbol", "1.0-0", "en-IN"];
const _c6 = () => ["/products"];
const _c7 = a0 => ({ category: a0 });
function NavbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "p", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r0.announcementText(), i0.ɵɵsanitizeHtml);
} }
function NavbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "span", 19);
    i0.ɵɵtext(2, "admin_panel_settings");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Admin Mode ");
    i0.ɵɵelementStart(4, "span", 20);
    i0.ɵɵtext(5, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 21);
    i0.ɵɵtext(7, "Dashboard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 20);
    i0.ɵɵtext(9, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 22);
    i0.ɵɵtext(11, "Orders");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 20);
    i0.ɵɵtext(13, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "a", 23);
    i0.ɵɵtext(15, "Products");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 20);
    i0.ɵɵtext(17, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "a", 24);
    i0.ɵɵtext(19, "Categories");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 20);
    i0.ɵɵtext(21, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "a", 25);
    i0.ɵɵtext(23, "Homepage Builder");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 20);
    i0.ɵɵtext(25, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "a", 26);
    i0.ɵɵtext(27, "Users");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 27);
    i0.ɵɵlistener("click", function NavbarComponent_div_1_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.logout()); });
    i0.ɵɵelementStart(29, "span", 19);
    i0.ɵɵtext(30, "logout");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(31, " Sign Out ");
    i0.ɵɵelementEnd()();
} }
function NavbarComponent_ul_12_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 38);
    i0.ɵɵlistener("click", function NavbarComponent_ul_12_a_14_Template_a_click_0_listener() { const cat_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.navTo(cat_r5.name)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cat_r5.name);
} }
function NavbarComponent_ul_12_div_15_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 38);
    i0.ɵɵlistener("click", function NavbarComponent_ul_12_div_15_a_3_Template_a_click_0_listener() { const cat_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.navTo(cat_r7.name)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cat_r7.name);
} }
function NavbarComponent_ul_12_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "h5");
    i0.ɵɵtext(2, "More Fabrics");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NavbarComponent_ul_12_div_15_a_3_Template, 2, 1, "a", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.catCol2());
} }
function NavbarComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 28)(1, "li")(2, "a", 29);
    i0.ɵɵtext(3, "Home");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "li", 30)(5, "a", 31);
    i0.ɵɵtext(6, "Collections ");
    i0.ɵɵelementStart(7, "span", 32);
    i0.ɵɵtext(8, "\u203A");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 33)(10, "div", 34)(11, "div", 35)(12, "h5");
    i0.ɵɵtext(13, "By Fabric");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, NavbarComponent_ul_12_a_14_Template, 2, 1, "a", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, NavbarComponent_ul_12_div_15_Template, 4, 1, "div", 37);
    i0.ɵɵelementStart(16, "div", 35)(17, "h5");
    i0.ɵɵtext(18, "By Occasion");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "a", 38);
    i0.ɵɵlistener("click", function NavbarComponent_ul_12_Template_a_click_19_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.navToOcc("Wedding")); });
    i0.ɵɵtext(20, "Bridal & Wedding");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "a", 38);
    i0.ɵɵlistener("click", function NavbarComponent_ul_12_Template_a_click_21_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.navToOcc("Party")); });
    i0.ɵɵtext(22, "Party Wear");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "a", 38);
    i0.ɵɵlistener("click", function NavbarComponent_ul_12_Template_a_click_23_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.navToOcc("Festive")); });
    i0.ɵɵtext(24, "Festive");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "a", 38);
    i0.ɵɵlistener("click", function NavbarComponent_ul_12_Template_a_click_25_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.navToOcc("Casual")); });
    i0.ɵɵtext(26, "Everyday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "a", 38);
    i0.ɵɵlistener("click", function NavbarComponent_ul_12_Template_a_click_27_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.navToOcc("Office")); });
    i0.ɵɵtext(28, "Office Wear");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 35)(30, "h5");
    i0.ɵɵtext(31, "Curated Edits");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "a", 39);
    i0.ɵɵtext(33, "New Arrivals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "a", 39);
    i0.ɵɵtext(35, "Bestsellers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "a", 39);
    i0.ɵɵtext(37, "Featured");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 40)(39, "div", 41);
    i0.ɵɵelement(40, "img", 42);
    i0.ɵɵelementStart(41, "div", 43)(42, "span");
    i0.ɵɵtext(43, "New Season");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "h4");
    i0.ɵɵtext(45, "Bridal Collection");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "a", 44);
    i0.ɵɵtext(47, "Explore");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(48, "li")(49, "a", 39);
    i0.ɵɵtext(50, "New Arrivals");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "li")(52, "a", 39);
    i0.ɵɵtext(53, "Bestsellers");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "li")(55, "a", 39);
    i0.ɵɵtext(56, "Bridal");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(10, _c0));
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngForOf", ctx_r0.catCol1());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.catCol2().length > 0);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(11, _c1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(12, _c2));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(13, _c3));
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(14, _c4));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(15, _c1));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(16, _c2));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(17, _c4));
} }
function NavbarComponent_ul_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 45)(1, "li")(2, "a", 46)(3, "span", 19);
    i0.ɵɵtext(4, "dashboard");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Dashboard");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "li")(7, "a", 47)(8, "span", 19);
    i0.ɵɵtext(9, "receipt_long");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " Orders");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "li")(12, "a", 48)(13, "span", 19);
    i0.ɵɵtext(14, "inventory_2");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, " Products");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "li")(17, "a", 49)(18, "span", 19);
    i0.ɵɵtext(19, "category");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20, " Categories");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "li")(22, "a", 50)(23, "span", 19);
    i0.ɵɵtext(24, "tune");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, " Homepage");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(1, _c0));
} }
function NavbarComponent_ng_container_15_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60)(1, "span", 61);
    i0.ɵɵtext(2, "search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 62);
    i0.ɵɵlistener("ngModelChange", function NavbarComponent_ng_container_15_div_2_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onSearchInput($event)); })("keyup.enter", function NavbarComponent_ng_container_15_div_2_Template_input_keyup_enter_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.doSearch()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 63);
    i0.ɵɵlistener("click", function NavbarComponent_ng_container_15_div_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeSearch()); });
    i0.ɵɵelementStart(5, "span", 19);
    i0.ɵɵtext(6, "close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.searchQ);
} }
function NavbarComponent_ng_container_15_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtext(1, "Searching...");
    i0.ɵɵelementEnd();
} }
function NavbarComponent_ng_container_15_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵlistener("click", function NavbarComponent_ng_container_15_div_3_button_2_Template_button_click_0_listener() { const item_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.chooseQuickSuggestion(item_r11)); });
    i0.ɵɵelementStart(1, "span", 19);
    i0.ɵɵtext(2, "history");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r11, " ");
} }
function NavbarComponent_ng_container_15_div_3_button_3_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 77);
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", item_r13.image, i0.ɵɵsanitizeUrl)("alt", item_r13.name);
} }
function NavbarComponent_ng_container_15_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function NavbarComponent_ng_container_15_div_3_button_3_Template_button_click_0_listener() { const item_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.chooseSuggestion(item_r13)); });
    i0.ɵɵtemplate(1, NavbarComponent_ng_container_15_div_3_button_3_img_1_Template, 1, 2, "img", 72);
    i0.ɵɵelementStart(2, "div", 73)(3, "span", 74);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 75);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 76);
    i0.ɵɵtext(9, "north_east");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r13.image);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r13.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r13.category, " \u00B7 ", i0.ɵɵpipeBindV(7, 4, i0.ɵɵpureFunction1(10, _c5, item_r13.price)), "");
} }
function NavbarComponent_ng_container_15_div_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 78);
    i0.ɵɵlistener("click", function NavbarComponent_ng_container_15_div_3_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.doSearch()); });
    i0.ɵɵelementStart(1, "span", 19);
    i0.ɵɵtext(2, "search");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" View all results for \"", ctx_r0.searchQ, "\" ");
} }
function NavbarComponent_ng_container_15_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64);
    i0.ɵɵtemplate(1, NavbarComponent_ng_container_15_div_3_div_1_Template, 2, 0, "div", 65)(2, NavbarComponent_ng_container_15_div_3_button_2_Template, 4, 1, "button", 66)(3, NavbarComponent_ng_container_15_div_3_button_3_Template, 10, 12, "button", 67)(4, NavbarComponent_ng_container_15_div_3_button_4_Template, 4, 1, "button", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.searching());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.quickSuggestions());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.suggestions());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.searchQ.trim());
} }
function NavbarComponent_ng_container_15_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 79);
    i0.ɵɵlistener("click", function NavbarComponent_ng_container_15_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggleSearch()); });
    i0.ɵɵelementStart(1, "span", 19);
    i0.ɵɵtext(2, "search");
    i0.ɵɵelementEnd()();
} }
function NavbarComponent_ng_container_15_a_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 80)(1, "span", 19);
    i0.ɵɵtext(2, "favorite_border");
    i0.ɵɵelementEnd()();
} }
function NavbarComponent_ng_container_15_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 81);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.cart.count());
} }
function NavbarComponent_ng_container_15_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 86)(1, "div", 87)(2, "div", 88);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "div", 89);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 90);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(9, "div", 91);
    i0.ɵɵelementStart(10, "a", 92);
    i0.ɵɵlistener("click", function NavbarComponent_ng_container_15_div_10_div_4_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.closeUserMenu()); });
    i0.ɵɵelementStart(11, "span", 19);
    i0.ɵɵtext(12, "manage_accounts");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " My Account ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "a", 93);
    i0.ɵɵlistener("click", function NavbarComponent_ng_container_15_div_10_div_4_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.closeUserMenu()); });
    i0.ɵɵelementStart(15, "span", 19);
    i0.ɵɵtext(16, "receipt_long");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " My Orders ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "div", 91);
    i0.ɵɵelementStart(19, "button", 94);
    i0.ɵɵlistener("click", function NavbarComponent_ng_container_15_div_10_div_4_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.logout()); });
    i0.ɵɵelementStart(20, "span", 19);
    i0.ɵɵtext(21, "logout");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(22, " Sign Out ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_3_0 = ctx_r0.auth.currentUser()) == null ? null : tmp_3_0.name == null ? null : tmp_3_0.name[0]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_4_0 = ctx_r0.auth.currentUser()) == null ? null : tmp_4_0.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_5_0 = ctx_r0.auth.currentUser()) == null ? null : tmp_5_0.email);
} }
function NavbarComponent_ng_container_15_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 82)(1, "button", 83);
    i0.ɵɵlistener("click", function NavbarComponent_ng_container_15_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggleUserOpen()); });
    i0.ɵɵelementStart(2, "div", 84);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, NavbarComponent_ng_container_15_div_10_div_4_Template, 23, 3, "div", 85);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r0.auth.currentUser()) == null ? null : tmp_2_0.name == null ? null : tmp_2_0.name[0]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userOpen());
} }
function NavbarComponent_ng_container_15_a_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 95);
    i0.ɵɵtext(1, "Sign In");
    i0.ɵɵelementEnd();
} }
function NavbarComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 51);
    i0.ɵɵlistener("click", function NavbarComponent_ng_container_15_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r8); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵtemplate(2, NavbarComponent_ng_container_15_div_2_Template, 7, 1, "div", 52)(3, NavbarComponent_ng_container_15_div_3_Template, 5, 4, "div", 53)(4, NavbarComponent_ng_container_15_button_4_Template, 3, 0, "button", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NavbarComponent_ng_container_15_a_5_Template, 3, 0, "a", 55);
    i0.ɵɵelementStart(6, "a", 56)(7, "span", 19);
    i0.ɵɵtext(8, "shopping_bag");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, NavbarComponent_ng_container_15_span_9_Template, 2, 1, "span", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, NavbarComponent_ng_container_15_div_10_Template, 5, 2, "div", 58)(11, NavbarComponent_ng_container_15_a_11_Template, 2, 0, "a", 59);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("open", ctx_r0.searchOpen());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.searchOpen());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showSuggestions());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.searchOpen());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.auth.isLoggedIn());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.cart.count() > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.auth.isLoggedIn());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.auth.isLoggedIn());
} }
function NavbarComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 96)(1, "div", 97);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 98);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r0.auth.currentUser()) == null ? null : tmp_1_0.name == null ? null : tmp_1_0.name[0]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r0.auth.currentUser()) == null ? null : tmp_2_0.name);
} }
function NavbarComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 99);
    i0.ɵɵlistener("click", function NavbarComponent_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggleMobile()); });
    i0.ɵɵelementStart(1, "span", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.mobileOpen() ? "close" : "menu");
} }
function NavbarComponent_div_18_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 110);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_a_9_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r21 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(3, _c6))("queryParams", i0.ɵɵpureFunction1(4, _c7, cat_r21.name));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", cat_r21.name, " ");
} }
function NavbarComponent_div_18_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 111);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.cart.count());
} }
function NavbarComponent_div_18_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 112);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_ng_container_19_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r22); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(2, "My Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 113);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_ng_container_19_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r22); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(4, "My Orders");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 38);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_ng_container_19_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r22); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.logout()); });
    i0.ɵɵtext(6, "Sign Out");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function NavbarComponent_div_18_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 114);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_ng_container_20_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(2, "Sign In");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 115);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_ng_container_20_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(4, "Register");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function NavbarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100)(1, "a", 101);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(2, "Home");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 102);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(4, "All Collections");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 103)(6, "span", 104);
    i0.ɵɵtext(7, "Shop by Fabric");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 105);
    i0.ɵɵtemplate(9, NavbarComponent_div_18_a_9_Template, 2, 6, "a", 106);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "a", 107);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(11, "New Arrivals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "a", 107);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_Template_a_click_12_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(13, "Bestsellers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "a", 107);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(15, "Bridal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "a", 108);
    i0.ɵɵlistener("click", function NavbarComponent_div_18_Template_a_click_16_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeMobileMenu()); });
    i0.ɵɵtext(17, " Bag ");
    i0.ɵɵtemplate(18, NavbarComponent_div_18_span_18_Template, 2, 1, "span", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, NavbarComponent_div_18_ng_container_19_Template, 7, 0, "ng-container", 12)(20, NavbarComponent_div_18_ng_container_20_Template, 5, 0, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("open", ctx_r0.mobileOpen());
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r0.categories().slice(0, 8));
    i0.ɵɵadvance();
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(9, _c1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(10, _c2));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(11, _c4));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.cart.count() > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.auth.isLoggedIn());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.auth.isLoggedIn());
} }
const DEFAULT_CATEGORIES = [
    'Banarasi', 'Kanjivaram', 'Chanderi', 'Georgette', 'Paithani',
    'Chiffon', 'Bandhani', 'Linen', 'Ikat', 'Mysore Silk', 'Net', 'Uppada',
];
export class NavbarComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.cart = inject(CartService);
        this.router = inject(Router);
        this.api = inject(ApiService);
        this.scrolled = signal(false);
        this.searchOpen = signal(false);
        this.userOpen = signal(false);
        this.mobileOpen = signal(false);
        this.searchQ = '';
        this.searching = signal(false);
        this.suggestions = signal([]);
        this.searchTerms = signal([
            'Banarasi',
            'Kanjivaram',
            'Chanderi',
            'Silk',
            'Cotton',
            'Bridal',
            'Wedding',
            'Festive',
            'Party Wear',
            'Handloom',
        ]);
        this.categories = signal(DEFAULT_CATEGORIES.map((n) => ({ name: n })));
        this.announcementText = signal('Complimentary shipping on orders above Rs 10,000 · New Banarasi arrivals this week · Use code VASTRA15 for 15% off');
        this.announcementActive = signal(true);
        this.catCol1 = computed(() => this.categories().slice(0, 6));
        this.catCol2 = computed(() => this.categories().slice(6, 12));
        this.quickSuggestions = computed(() => {
            const q = this.searchQ.trim().toLowerCase();
            if (!q)
                return [];
            return this.searchTerms()
                .filter((term) => term.toLowerCase().includes(q))
                .slice(0, 4);
        });
        this.showSuggestions = computed(() => this.searchOpen() && (!!this.searchQ.trim()) && (this.searching() || this.suggestions().length > 0 || this.quickSuggestions().length > 0));
        this.searchInput$ = new Subject();
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.loadCategories();
        this.loadHomeConfig();
        this.loadSearchTerms();
        this.searchInput$
            .pipe(debounceTime(180), distinctUntilChanged(), switchMap((query) => {
            const q = query.trim();
            if (!q) {
                this.searching.set(false);
                return of({ success: true, suggestions: [] });
            }
            this.searching.set(true);
            return this.api.get('/products/search-suggestions', { q });
        }), takeUntil(this.destroy$))
            .subscribe({
            next: (response) => {
                this.suggestions.set(response.suggestions || []);
                this.searching.set(false);
            },
            error: () => {
                this.suggestions.set([]);
                this.searching.set(false);
            },
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    loadCategories() {
        this.api.get('/categories').subscribe({
            next: r => {
                if (r.categories && r.categories.length) {
                    this.categories.set(r.categories.filter((c) => c.isActive !== false));
                }
            },
            error: () => { },
        });
    }
    loadHomeConfig() {
        this.api.get('/homeconfig').subscribe({
            next: r => {
                const cfg = r.config;
                if (cfg) {
                    if (cfg.announcementText !== undefined)
                        this.announcementText.set(cfg.announcementText);
                    if (cfg.announcementActive !== undefined)
                        this.announcementActive.set(cfg.announcementActive);
                }
            },
            error: () => { },
        });
    }
    loadSearchTerms() {
        this.api.get('/products', { limit: 48 }).subscribe({
            next: (response) => {
                const bucket = new Set(this.searchTerms());
                for (const product of response.products || []) {
                    if (product.name)
                        bucket.add(product.name);
                    if (product.category)
                        bucket.add(product.category);
                    (product.tags || []).forEach((tag) => bucket.add(tag));
                    (product.colors || []).forEach((color) => bucket.add(color));
                    (product.occasion || []).forEach((occasion) => bucket.add(occasion));
                }
                this.searchTerms.set(Array.from(bucket));
            },
            error: () => { },
        });
    }
    onScroll() { this.scrolled.set(window.scrollY > 10); }
    onDocClick(e) {
        const target = e.target;
        if (!target.closest('.user-wrap'))
            this.userOpen.set(false);
        if (!target.closest('.search-wrap'))
            this.closeSearch();
    }
    toggleSearch() {
        const next = !this.searchOpen();
        this.searchOpen.set(next);
        if (!next)
            this.resetSearchState();
    }
    closeSearch() {
        this.searchOpen.set(false);
        this.resetSearchState();
    }
    onSearchInput(value) {
        this.searchQ = value;
        if (!value.trim()) {
            this.suggestions.set([]);
            this.searching.set(false);
            return;
        }
        this.searchInput$.next(value);
    }
    doSearch() {
        const query = this.searchQ.trim();
        if (!query)
            return;
        this.router.navigate(['/products'], { queryParams: { q: query } });
        this.closeSearch();
    }
    chooseSuggestion(item) {
        this.router.navigate(['/products', item._id]);
        this.closeSearch();
    }
    chooseQuickSuggestion(value) {
        this.router.navigate(['/products'], { queryParams: { q: value } });
        this.closeSearch();
    }
    toggleUserOpen() { this.userOpen.update(v => !v); }
    toggleMobile() { this.mobileOpen.update(v => !v); }
    navTo(cat) { this.router.navigate(['/products'], { queryParams: { category: cat } }); }
    navToOcc(occ) { this.router.navigate(['/products'], { queryParams: { occasion: occ } }); }
    closeUserMenu() { this.userOpen.set(false); }
    closeMobileMenu() { this.mobileOpen.set(false); }
    logout() {
        this.userOpen.set(false);
        this.mobileOpen.set(false);
        this.auth.logout();
    }
    resetSearchState() {
        this.searchQ = '';
        this.suggestions.set([]);
        this.searching.set(false);
    }
    static { this.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function NavbarComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow)("click", function NavbarComponent_click_HostBindingHandler($event) { return ctx.onDocClick($event); }, false, i0.ɵɵresolveDocument);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 19, vars: 15, consts: [["class", "announce-bar", 4, "ngIf"], ["class", "admin-bar", 4, "ngIf"], [1, "navbar"], [1, "nav-container"], ["routerLink", "/", 1, "logo"], [1, "logo-mark"], [1, "logo-text"], [1, "logo-main"], [1, "logo-tagline"], ["class", "nav-links", 4, "ngIf"], ["class", "nav-links admin-nav-links", 4, "ngIf"], [1, "nav-actions"], [4, "ngIf"], ["class", "admin-badge", 4, "ngIf"], ["class", "nav-icon-btn mobile-menu-btn", 3, "click", 4, "ngIf"], ["class", "mobile-nav", 3, "open", 4, "ngIf"], [1, "announce-bar"], [3, "innerHTML"], [1, "admin-bar"], [1, "material-icons"], [1, "ab-sep"], ["routerLink", "/admin"], ["routerLink", "/admin/orders"], ["routerLink", "/admin/products"], ["routerLink", "/admin/categories"], ["routerLink", "/admin/homepage"], ["routerLink", "/admin/users"], [1, "ab-logout", 3, "click"], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "has-mega"], ["routerLink", "/products"], [1, "nav-chevron"], [1, "mega-menu"], [1, "mega-inner"], [1, "mega-col"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "mega-col", 4, "ngIf"], [3, "click"], ["routerLink", "/products", 3, "queryParams"], [1, "mega-featured"], [1, "mega-feat-img"], ["src", "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&q=80", "alt", "Featured"], [1, "mega-feat-overlay"], ["routerLink", "/products", 1, "mega-feat-btn", 3, "queryParams"], [1, "nav-links", "admin-nav-links"], ["routerLink", "/admin", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/admin/orders", "routerLinkActive", "active"], ["routerLink", "/admin/products", "routerLinkActive", "active"], ["routerLink", "/admin/categories", "routerLinkActive", "active"], ["routerLink", "/admin/homepage", "routerLinkActive", "active"], [1, "search-wrap", 3, "click"], ["class", "search-field", 4, "ngIf"], ["class", "search-suggestions", 4, "ngIf"], ["type", "button", "class", "nav-icon-btn", 3, "click", 4, "ngIf"], ["routerLink", "/account", "class", "nav-icon-btn", "title", "Wishlist", 4, "ngIf"], ["routerLink", "/cart", 1, "nav-icon-btn", "cart-btn"], ["class", "cart-count", 4, "ngIf"], ["class", "user-wrap", 4, "ngIf"], ["routerLink", "/login", "class", "btn btn-outline btn-sm", 4, "ngIf"], [1, "search-field"], [1, "material-icons", "si"], ["placeholder", "Search sarees, fabrics, colors...", "autofocus", "", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "search-close", 3, "click"], [1, "search-suggestions"], ["class", "search-suggestion-head", 4, "ngIf"], ["type", "button", "class", "quick-chip", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "search-suggestion-item", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "search-view-all", 3, "click", 4, "ngIf"], [1, "search-suggestion-head"], ["type", "button", 1, "quick-chip", 3, "click"], ["type", "button", 1, "search-suggestion-item", 3, "click"], ["class", "search-suggestion-img", 3, "src", "alt", 4, "ngIf"], [1, "search-suggestion-copy"], [1, "search-suggestion-name"], [1, "search-suggestion-meta"], [1, "material-icons", "search-suggestion-arrow"], [1, "search-suggestion-img", 3, "src", "alt"], ["type", "button", 1, "search-view-all", 3, "click"], ["type", "button", 1, "nav-icon-btn", 3, "click"], ["routerLink", "/account", "title", "Wishlist", 1, "nav-icon-btn"], [1, "cart-count"], [1, "user-wrap"], [1, "nav-icon-btn", 3, "click"], [1, "user-avatar"], ["class", "user-dropdown", 4, "ngIf"], [1, "user-dropdown"], [1, "ud-head"], [1, "ud-avatar"], [1, "ud-name"], [1, "ud-email"], [1, "ud-divider"], ["routerLink", "/account", 1, "ud-item", 3, "click"], ["routerLink", "/orders", 1, "ud-item", 3, "click"], [1, "ud-item", "ud-logout", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-outline", "btn-sm"], [1, "admin-badge"], [1, "admin-av"], [1, "admin-name"], [1, "nav-icon-btn", "mobile-menu-btn", 3, "click"], [1, "mobile-nav"], ["routerLink", "/", 3, "click"], ["routerLink", "/products", 3, "click"], [1, "mobile-cats-section"], [1, "mobile-cats-label"], [1, "mobile-cats-grid"], ["class", "mobile-cat-chip", 3, "routerLink", "queryParams", "click", 4, "ngFor", "ngForOf"], ["routerLink", "/products", 3, "click", "queryParams"], ["routerLink", "/cart", 3, "click"], ["class", "mobile-cart-ct", 4, "ngIf"], [1, "mobile-cat-chip", 3, "click", "routerLink", "queryParams"], [1, "mobile-cart-ct"], ["routerLink", "/account", 3, "click"], ["routerLink", "/orders", 3, "click"], ["routerLink", "/login", 3, "click"], ["routerLink", "/register", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NavbarComponent_div_0_Template, 2, 1, "div", 0)(1, NavbarComponent_div_1_Template, 32, 0, "div", 1);
            i0.ɵɵelementStart(2, "nav", 2)(3, "div", 3)(4, "a", 4)(5, "div", 5);
            i0.ɵɵtext(6, "V");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6)(8, "span", 7);
            i0.ɵɵtext(9, "Vastra Vaibhav");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span", 8);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(12, NavbarComponent_ul_12_Template, 57, 18, "ul", 9)(13, NavbarComponent_ul_13_Template, 26, 2, "ul", 10);
            i0.ɵɵelementStart(14, "div", 11);
            i0.ɵɵtemplate(15, NavbarComponent_ng_container_15_Template, 12, 9, "ng-container", 12)(16, NavbarComponent_div_16_Template, 5, 2, "div", 13)(17, NavbarComponent_button_17_Template, 3, 1, "button", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(18, NavbarComponent_div_18_Template, 21, 12, "div", 15);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.auth.isAdmin() && ctx.announcementActive());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.auth.isAdmin());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("scrolled", ctx.scrolled())("admin-mode", ctx.auth.isAdmin());
            i0.ɵɵadvance(8);
            i0.ɵɵclassProp("admin-tag", ctx.auth.isAdmin());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.auth.isAdmin() ? "Admin Panel" : "Est. Heritage Weaves", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.auth.isAdmin());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.auth.isAdmin());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.auth.isAdmin());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.auth.isAdmin());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.auth.isAdmin());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.auth.isAdmin());
        } }, dependencies: [RouterLink, RouterLinkActive, CommonModule, i1.NgForOf, i1.NgIf, i1.CurrencyPipe, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["//[_ngcontent-%COMP%]   Navbar[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Announcement[_ngcontent-%COMP%]   Bar[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.announce-bar[_ngcontent-%COMP%] {\n  background: var(--text);\n  color: rgba(255,255,255,0.78);\n  text-align: center;\n  padding: 9px 24px;\n  font-size: 0.72rem;\n  letter-spacing: 0.05em;\n  font-family: var(--font-body);\n\n  strong { color: var(--gold-warm); font-weight: 600; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Admin[_ngcontent-%COMP%]   Bar[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.admin-bar[_ngcontent-%COMP%] {\n  background: var(--text);\n  color: rgba(255,255,255,0.7);\n  padding: 8px 32px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.75rem;\n  letter-spacing: 0.04em;\n  overflow-x: auto;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n\n  .material-icons { font-size: 15px; color: var(--gold-warm); flex-shrink: 0; }\n\n  a {\n    color: rgba(255,255,255,0.75);\n    text-decoration: none;\n    transition: color 0.2s;\n    font-weight: 500;\n    flex-shrink: 0;\n    &:hover { color: var(--gold-warm); }\n  }\n\n  .ab-sep { color: rgba(255,255,255,0.2); flex-shrink: 0; }\n}\n\n.ab-logout[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(192,57,43,0.2);\n  border: 1px solid rgba(192,57,43,0.3);\n  color: rgba(255,150,150,0.9);\n  padding: 4px 12px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  transition: all 0.2s;\n  flex-shrink: 0;\n\n  .material-icons { font-size: 14px; color: inherit; }\n  &:hover { background: var(--error); color: white; border-color: var(--error); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Main[_ngcontent-%COMP%]   Navbar[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: var(--bg);\n  border-bottom: 1px solid var(--border);\n  transition: box-shadow 0.3s, background 0.3s;\n\n  &.scrolled {\n    box-shadow: 0 2px 20px rgba(44,24,16,0.1);\n    background: rgba(250,248,244,0.96);\n    backdrop-filter: blur(12px);\n  }\n\n  &.admin-mode {\n    background: var(--bg) !important;\n    border-bottom: 2px solid var(--gold-warm);\n  }\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 32px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Logo[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n\n.logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 3px;\n}\n\n.logo-text[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n.logo-main[_ngcontent-%COMP%] { font-family: var(--font-display); font-size: 1.1rem; color: var(--text); letter-spacing: 0.03em; line-height: 1.1; }\n.logo-tagline[_ngcontent-%COMP%] { font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-muted); }\n.admin-tag[_ngcontent-%COMP%] { color: var(--gold-warm) !important; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Nav[_ngcontent-%COMP%]   Links[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  flex: 1;\n\n  li > a {\n    display: block;\n    padding: 0 16px;\n    height: 72px;\n    line-height: 72px;\n    font-size: 0.82rem;\n    letter-spacing: 0.06em;\n    color: var(--text-muted);\n    text-decoration: none;\n    transition: color 0.2s;\n    white-space: nowrap;\n\n    &:hover, &.active { color: var(--burgundy); }\n  }\n}\n\n.nav-chevron[_ngcontent-%COMP%] { font-size: 0.9rem; opacity: 0.5; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Mega[_ngcontent-%COMP%]   Menu[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.has-mega[_ngcontent-%COMP%] { position: relative; }\n\n.mega-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: white;\n  border: 1px solid var(--border);\n  border-top: none;\n  box-shadow: 0 12px 40px rgba(44,24,16,0.12);\n  border-radius: 0 0 var(--radius-md) var(--radius-md);\n  min-width: 780px;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s, transform 0.2s;\n  transform: translateX(-50%) translateY(-8px);\n  z-index: 200;\n}\n\n.has-mega[_ngcontent-%COMP%]:hover   .mega-menu[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n  transform: translateX(-50%) translateY(0);\n}\n\n.mega-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr) 180px;\n  gap: 0;\n  padding: 24px 0;\n}\n\n.mega-col[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  border-right: 1px solid var(--border);\n\n  &:last-of-type { border-right: none; }\n\n  h5 {\n    font-size: 0.62rem;\n    letter-spacing: 0.22em;\n    text-transform: uppercase;\n    color: var(--gold-warm);\n    font-family: var(--font-body);\n    font-weight: 700;\n    margin-bottom: 14px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--border);\n  }\n\n  a {\n    display: block;\n    font-size: 0.84rem;\n    color: var(--text-muted);\n    text-decoration: none;\n    padding: 5px 0;\n    transition: color 0.15s;\n    cursor: pointer;\n\n    &:hover { color: var(--burgundy); padding-left: 3px; }\n  }\n}\n\n//[_ngcontent-%COMP%]   Mega[_ngcontent-%COMP%]   featured[_ngcontent-%COMP%]   image[_ngcontent-%COMP%]   column\n.mega-featured[_ngcontent-%COMP%] { padding: 0 0 0 20px; }\n\n.mega-feat-img[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  min-height: 180px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n\n  img { width: 100%; height: 100%; object-fit: cover; }\n}\n\n.mega-feat-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(44,24,16,0.85) 0%, transparent 60%);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 16px;\n\n  span { font-size: 0.62rem; color: var(--gold-warm); letter-spacing: 0.16em; text-transform: uppercase; }\n  h4   { font-family: var(--font-display); font-size: 1rem; color: white; margin: 4px 0 10px; font-weight: 400; }\n}\n\n.mega-feat-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 14px;\n  background: var(--gold-warm);\n  color: white !important;\n  border-radius: 2px;\n  font-size: 0.7rem;\n  letter-spacing: 0.1em;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.2s;\n\n  &:hover { background: var(--gold-dark); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Admin[_ngcontent-%COMP%]   Nav[_ngcontent-%COMP%]   Links[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.admin-nav-links[_ngcontent-%COMP%] {\n  li a {\n    display: flex !important;\n    align-items: center;\n    gap: 6px;\n    .material-icons { font-size: 16px; }\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Right[_ngcontent-%COMP%]   actions[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.nav-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; margin-left: auto; flex-shrink: 0; }\n\n.nav-icon-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  text-decoration: none;\n  position: relative;\n  transition: all 0.2s;\n\n  .material-icons { font-size: 22px; }\n  &:hover { background: var(--surface); color: var(--burgundy); }\n}\n\n//[_ngcontent-%COMP%]   Search\n.search-wrap[_ngcontent-%COMP%] { position: relative; }\n\n.search-field[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 320px;\n  min-width: 320px;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  background: white;\n  border: 1.5px solid var(--burgundy);\n  border-radius: 24px;\n  box-shadow: 0 4px 20px rgba(44,24,16,0.12);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_expandSearch 0.25s ease;\n  z-index: 10;\n}\n\n@keyframes _ngcontent-%COMP%_expandSearch {\n  from { width: 40px; opacity: 0; }\n  to   { width: 300px; opacity: 1; }\n}\n\n.si[_ngcontent-%COMP%] { font-size: 18px !important; padding: 0 10px; color: var(--text-muted); flex-shrink: 0; }\n\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  outline: none;\n  padding: 10px 4px;\n  font-size: 0.875rem;\n  font-family: var(--font-body);\n  background: transparent;\n  color: var(--text);\n  min-width: 0;\n  flex: 1;\n}\n\n.search-close[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  .material-icons { font-size: 18px; }\n  &:hover { color: var(--burgundy); }\n}\n\n.search-suggestions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: min(420px, 88vw);\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  box-shadow: 0 18px 48px rgba(44, 24, 16, 0.16);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  z-index: 25;\n}\n\n.search-suggestion-head[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  padding: 6px 10px 2px;\n}\n\n.quick-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  border: none;\n  background: var(--surface);\n  color: var(--text-muted);\n  padding: 10px 12px;\n  border-radius: 12px;\n  cursor: pointer;\n  text-align: left;\n  font-family: var(--font-body);\n\n  .material-icons { font-size: 16px; color: var(--gold-warm); }\n\n  &:hover {\n    background: var(--burgundy-pale);\n    color: var(--burgundy);\n  }\n}\n\n.search-suggestion-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 52px 1fr 20px;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px;\n  border: none;\n  background: transparent;\n  border-radius: 14px;\n  cursor: pointer;\n  text-align: left;\n  font-family: var(--font-body);\n\n  &:hover {\n    background: var(--surface);\n  }\n}\n\n.search-suggestion-img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 64px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n}\n\n.search-suggestion-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.search-suggestion-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.search-suggestion-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n\n.search-suggestion-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-dim);\n}\n\n.search-view-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  margin-top: 4px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  color: var(--burgundy);\n  font-family: var(--font-body);\n  font-weight: 500;\n  cursor: pointer;\n\n  &:hover {\n    background: var(--burgundy-pale);\n    border-color: var(--burgundy);\n  }\n}\n\n//[_ngcontent-%COMP%]   Cart[_ngcontent-%COMP%]   count[_ngcontent-%COMP%]   badge\n.cart-btn[_ngcontent-%COMP%] { position: relative; }\n\n.cart-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-size: 0.6rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  font-family: var(--font-body);\n}\n\n//[_ngcontent-%COMP%]   User[_ngcontent-%COMP%]   menu\n.user-wrap[_ngcontent-%COMP%] { position: relative; }\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n\n.user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  box-shadow: 0 12px 40px rgba(44,24,16,0.14);\n  min-width: 240px;\n  animation: _ngcontent-%COMP%_dropIn 0.2s ease;\n  z-index: 150;\n}\n\n@keyframes _ngcontent-%COMP%_dropIn {\n  from { opacity: 0; transform: translateY(-8px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.ud-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 18px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n}\n\n.ud-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.ud-name[_ngcontent-%COMP%]  { font-size: 0.875rem; font-weight: 500; color: var(--text); }\n.ud-email[_ngcontent-%COMP%] { font-size: 0.72rem; color: var(--text-muted); }\n\n.ud-divider[_ngcontent-%COMP%] { height: 1px; background: var(--border); }\n\n.ud-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 18px;\n  color: var(--text-muted);\n  font-size: 0.84rem;\n  text-decoration: none;\n  transition: all 0.2s;\n  background: none;\n  border: none;\n  width: 100%;\n  cursor: pointer;\n  font-family: var(--font-body);\n\n  .material-icons { font-size: 17px; }\n  &:hover { background: var(--surface); color: var(--burgundy); }\n}\n\n.ud-logout[_ngcontent-%COMP%] { color: var(--error); &:hover { background: rgba(192,57,43,0.05); } }\n\n//[_ngcontent-%COMP%]   Admin[_ngcontent-%COMP%]   badge\n.admin-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 14px 4px 4px;\n  background: var(--gold-pale);\n  border: 1px solid var(--border-warm);\n  border-radius: 100px;\n}\n\n.admin-av[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.admin-name[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--text-muted); font-weight: 500; }\n\n//[_ngcontent-%COMP%]   Mobile[_ngcontent-%COMP%]   hamburger\n.mobile-menu-btn[_ngcontent-%COMP%] { display: none; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Mobile[_ngcontent-%COMP%]   Nav[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  background: white;\n  border-top: 1px solid var(--border);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.35s ease;\n\n  &.open { max-height: 90svh; overflow-y: auto; }\n\n  a, button {\n    display: flex;\n    align-items: center;\n    padding: 14px 24px;\n    font-size: 0.9rem;\n    color: var(--text-muted);\n    text-decoration: none;\n    border-bottom: 1px solid rgba(107,84,71,0.06);\n    background: none;\n    border-left: none;\n    border-right: none;\n    border-top: none;\n    cursor: pointer;\n    font-family: var(--font-body);\n    width: 100%;\n    text-align: left;\n    transition: all 0.15s;\n\n    &:hover { background: var(--surface); color: var(--burgundy); }\n  }\n}\n\n.mobile-cats-section[_ngcontent-%COMP%] {\n  padding: 12px 24px 6px;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n}\n\n.mobile-cats-label[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  font-weight: 600;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.mobile-cats-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-bottom: 8px;\n}\n\n.mobile-cat-chip[_ngcontent-%COMP%] {\n  padding: 5px 12px !important;\n  background: var(--surface) !important;\n  border: 1px solid var(--border) !important;\n  border-radius: 100px !important;\n  font-size: 0.78rem !important;\n  color: var(--text-muted) !important;\n  cursor: pointer;\n  transition: all 0.2s !important;\n  display: inline-flex !important;\n  width: auto !important;\n\n  &:hover { border-color: var(--burgundy) !important; color: var(--burgundy) !important; background: var(--burgundy-pale) !important; }\n}\n\n.mobile-cart-ct[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: var(--burgundy);\n  color: white;\n  border-radius: 50%;\n  font-size: 0.62rem;\n  font-weight: 700;\n  margin-left: 6px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Responsive[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:   1100px)[_ngcontent-%COMP%] {\n  .mega-inner { grid-template-columns: repeat(3, 1fr) 160px; }\n  \n\n  .mega-col:nth-child(2):not(:last-child) { display: none; }\n}\n\n@media (max-width: 960px) {\n  .nav-links[_ngcontent-%COMP%] { display: none; }\n  .mobile-menu-btn[_ngcontent-%COMP%] { display: flex !important; }\n  .mobile-nav[_ngcontent-%COMP%] { display: flex; }\n  .nav-container[_ngcontent-%COMP%] { padding: 0 16px; height: 64px; gap: 8px; }\n  .admin-nav-links[_ngcontent-%COMP%] { display: none !important; }\n  .search-field[_ngcontent-%COMP%] { width: min(320px, calc(100vw - 32px)); min-width: min(320px, calc(100vw - 32px)); }\n  .search-suggestions[_ngcontent-%COMP%] { width: min(360px, calc(100vw - 24px)); right: -44px; }\n}\n\n@media (max-width: 480px) {\n  .announce-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 0.65rem; }\n  .admin-bar[_ngcontent-%COMP%] { padding: 6px 12px; font-size: 0.68rem; gap: 6px; }\n  .ab-logout[_ngcontent-%COMP%] { padding: 3px 8px; }\n  .nav-container[_ngcontent-%COMP%] { padding: 0 12px; height: 58px; }\n  .logo-mark[_ngcontent-%COMP%] { width: 32px; height: 32px; font-size: 1rem; }\n  .logo-tagline[_ngcontent-%COMP%] { display: none; }\n  .search-field[_ngcontent-%COMP%] { width: min(300px, calc(100vw - 24px)); }\n  .search-suggestions[_ngcontent-%COMP%] { right: -8px; width: min(320px, calc(100vw - 24px)); }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'app-navbar', standalone: true, imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule], template: "<div class=\"announce-bar\" *ngIf=\"!auth.isAdmin() && announcementActive()\">\n  <p [innerHTML]=\"announcementText()\"></p>\n</div>\n\n<div class=\"admin-bar\" *ngIf=\"auth.isAdmin()\">\n  <span class=\"material-icons\">admin_panel_settings</span>\n  Admin Mode <span class=\"ab-sep\">\u00B7</span>\n  <a routerLink=\"/admin\">Dashboard</a><span class=\"ab-sep\">\u00B7</span>\n  <a routerLink=\"/admin/orders\">Orders</a><span class=\"ab-sep\">\u00B7</span>\n  <a routerLink=\"/admin/products\">Products</a><span class=\"ab-sep\">\u00B7</span>\n  <a routerLink=\"/admin/categories\">Categories</a><span class=\"ab-sep\">\u00B7</span>\n  <a routerLink=\"/admin/homepage\">Homepage Builder</a><span class=\"ab-sep\">\u00B7</span>\n  <a routerLink=\"/admin/users\">Users</a>\n  <button class=\"ab-logout\" (click)=\"logout()\">\n    <span class=\"material-icons\">logout</span> Sign Out\n  </button>\n</div>\n\n<nav class=\"navbar\" [class.scrolled]=\"scrolled()\" [class.admin-mode]=\"auth.isAdmin()\">\n  <div class=\"nav-container\">\n    <a routerLink=\"/\" class=\"logo\">\n      <div class=\"logo-mark\">V</div>\n      <div class=\"logo-text\">\n        <span class=\"logo-main\">Vastra Vaibhav</span>\n        <span class=\"logo-tagline\" [class.admin-tag]=\"auth.isAdmin()\">\n          {{ auth.isAdmin() ? 'Admin Panel' : 'Est. Heritage Weaves' }}\n        </span>\n      </div>\n    </a>\n\n    <ul class=\"nav-links\" *ngIf=\"!auth.isAdmin()\">\n      <li>\n        <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Home</a>\n      </li>\n\n      <li class=\"has-mega\">\n        <a routerLink=\"/products\">Collections <span class=\"nav-chevron\">\u203A</span></a>\n        <div class=\"mega-menu\">\n          <div class=\"mega-inner\">\n            <div class=\"mega-col\">\n              <h5>By Fabric</h5>\n              <a *ngFor=\"let cat of catCol1()\" (click)=\"navTo(cat.name)\">{{ cat.name }}</a>\n            </div>\n\n            <div class=\"mega-col\" *ngIf=\"catCol2().length > 0\">\n              <h5>More Fabrics</h5>\n              <a *ngFor=\"let cat of catCol2()\" (click)=\"navTo(cat.name)\">{{ cat.name }}</a>\n            </div>\n\n            <div class=\"mega-col\">\n              <h5>By Occasion</h5>\n              <a (click)=\"navToOcc('Wedding')\">Bridal & Wedding</a>\n              <a (click)=\"navToOcc('Party')\">Party Wear</a>\n              <a (click)=\"navToOcc('Festive')\">Festive</a>\n              <a (click)=\"navToOcc('Casual')\">Everyday</a>\n              <a (click)=\"navToOcc('Office')\">Office Wear</a>\n            </div>\n\n            <div class=\"mega-col\">\n              <h5>Curated Edits</h5>\n              <a routerLink=\"/products\" [queryParams]=\"{ filter: 'new' }\">New Arrivals</a>\n              <a routerLink=\"/products\" [queryParams]=\"{ filter: 'bestseller' }\">Bestsellers</a>\n              <a routerLink=\"/products\" [queryParams]=\"{ filter: 'featured' }\">Featured</a>\n            </div>\n\n            <div class=\"mega-featured\">\n              <div class=\"mega-feat-img\">\n                <img src=\"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&q=80\" alt=\"Featured\" />\n                <div class=\"mega-feat-overlay\">\n                  <span>New Season</span>\n                  <h4>Bridal Collection</h4>\n                  <a routerLink=\"/products\" [queryParams]=\"{ occasion: 'Wedding' }\" class=\"mega-feat-btn\">Explore</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n\n      <li><a routerLink=\"/products\" [queryParams]=\"{ filter: 'new' }\">New Arrivals</a></li>\n      <li><a routerLink=\"/products\" [queryParams]=\"{ filter: 'bestseller' }\">Bestsellers</a></li>\n      <li><a routerLink=\"/products\" [queryParams]=\"{ occasion: 'Wedding' }\">Bridal</a></li>\n    </ul>\n\n    <ul class=\"nav-links admin-nav-links\" *ngIf=\"auth.isAdmin()\">\n      <li><a routerLink=\"/admin\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"><span class=\"material-icons\">dashboard</span> Dashboard</a></li>\n      <li><a routerLink=\"/admin/orders\" routerLinkActive=\"active\"><span class=\"material-icons\">receipt_long</span> Orders</a></li>\n      <li><a routerLink=\"/admin/products\" routerLinkActive=\"active\"><span class=\"material-icons\">inventory_2</span> Products</a></li>\n      <li><a routerLink=\"/admin/categories\" routerLinkActive=\"active\"><span class=\"material-icons\">category</span> Categories</a></li>\n      <li><a routerLink=\"/admin/homepage\" routerLinkActive=\"active\"><span class=\"material-icons\">tune</span> Homepage</a></li>\n    </ul>\n\n    <div class=\"nav-actions\">\n      <ng-container *ngIf=\"!auth.isAdmin()\">\n        <div class=\"search-wrap\" [class.open]=\"searchOpen()\" (click)=\"$event.stopPropagation()\">\n          <div class=\"search-field\" *ngIf=\"searchOpen()\">\n            <span class=\"material-icons si\">search</span>\n            <input\n              [ngModel]=\"searchQ\"\n              (ngModelChange)=\"onSearchInput($event)\"\n              (keyup.enter)=\"doSearch()\"\n              placeholder=\"Search sarees, fabrics, colors...\"\n              autofocus\n              class=\"search-input\"\n            />\n            <button type=\"button\" class=\"search-close\" (click)=\"closeSearch()\">\n              <span class=\"material-icons\">close</span>\n            </button>\n          </div>\n\n          <div class=\"search-suggestions\" *ngIf=\"showSuggestions()\">\n            <div class=\"search-suggestion-head\" *ngIf=\"searching()\">Searching...</div>\n\n            <button type=\"button\" class=\"quick-chip\" *ngFor=\"let item of quickSuggestions()\" (click)=\"chooseQuickSuggestion(item)\">\n              <span class=\"material-icons\">history</span>\n              {{ item }}\n            </button>\n\n            <button type=\"button\" class=\"search-suggestion-item\" *ngFor=\"let item of suggestions()\" (click)=\"chooseSuggestion(item)\">\n              <img *ngIf=\"item.image\" [src]=\"item.image\" [alt]=\"item.name\" class=\"search-suggestion-img\" />\n              <div class=\"search-suggestion-copy\">\n                <span class=\"search-suggestion-name\">{{ item.name }}</span>\n                <span class=\"search-suggestion-meta\">{{ item.category }} \u00B7 {{ item.price | currency:'INR':'symbol':'1.0-0':'en-IN' }}</span>\n              </div>\n              <span class=\"material-icons search-suggestion-arrow\">north_east</span>\n            </button>\n\n            <button type=\"button\" class=\"search-view-all\" *ngIf=\"searchQ.trim()\" (click)=\"doSearch()\">\n              <span class=\"material-icons\">search</span>\n              View all results for \"{{ searchQ }}\"\n            </button>\n          </div>\n\n          <button type=\"button\" class=\"nav-icon-btn\" (click)=\"toggleSearch()\" *ngIf=\"!searchOpen()\">\n            <span class=\"material-icons\">search</span>\n          </button>\n        </div>\n\n        <a routerLink=\"/account\" class=\"nav-icon-btn\" title=\"Wishlist\" *ngIf=\"auth.isLoggedIn()\">\n          <span class=\"material-icons\">favorite_border</span>\n        </a>\n\n        <a routerLink=\"/cart\" class=\"nav-icon-btn cart-btn\">\n          <span class=\"material-icons\">shopping_bag</span>\n          <span *ngIf=\"cart.count() > 0\" class=\"cart-count\">{{ cart.count() }}</span>\n        </a>\n\n        <div class=\"user-wrap\" *ngIf=\"auth.isLoggedIn()\">\n          <button class=\"nav-icon-btn\" (click)=\"toggleUserOpen()\">\n            <div class=\"user-avatar\">{{ auth.currentUser()?.name?.[0] }}</div>\n          </button>\n          <div class=\"user-dropdown\" *ngIf=\"userOpen()\">\n            <div class=\"ud-head\">\n              <div class=\"ud-avatar\">{{ auth.currentUser()?.name?.[0] }}</div>\n              <div>\n                <div class=\"ud-name\">{{ auth.currentUser()?.name }}</div>\n                <div class=\"ud-email\">{{ auth.currentUser()?.email }}</div>\n              </div>\n            </div>\n            <div class=\"ud-divider\"></div>\n            <a routerLink=\"/account\" (click)=\"closeUserMenu()\" class=\"ud-item\">\n              <span class=\"material-icons\">manage_accounts</span> My Account\n            </a>\n            <a routerLink=\"/orders\" (click)=\"closeUserMenu()\" class=\"ud-item\">\n              <span class=\"material-icons\">receipt_long</span> My Orders\n            </a>\n            <div class=\"ud-divider\"></div>\n            <button (click)=\"logout()\" class=\"ud-item ud-logout\">\n              <span class=\"material-icons\">logout</span> Sign Out\n            </button>\n          </div>\n        </div>\n\n        <a *ngIf=\"!auth.isLoggedIn()\" routerLink=\"/login\" class=\"btn btn-outline btn-sm\">Sign In</a>\n      </ng-container>\n\n      <div class=\"admin-badge\" *ngIf=\"auth.isAdmin()\">\n        <div class=\"admin-av\">{{ auth.currentUser()?.name?.[0] }}</div>\n        <span class=\"admin-name\">{{ auth.currentUser()?.name }}</span>\n      </div>\n\n      <button class=\"nav-icon-btn mobile-menu-btn\" (click)=\"toggleMobile()\" *ngIf=\"!auth.isAdmin()\">\n        <span class=\"material-icons\">{{ mobileOpen() ? 'close' : 'menu' }}</span>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"mobile-nav\" [class.open]=\"mobileOpen()\" *ngIf=\"!auth.isAdmin()\">\n    <a routerLink=\"/\" (click)=\"closeMobileMenu()\">Home</a>\n    <a routerLink=\"/products\" (click)=\"closeMobileMenu()\">All Collections</a>\n\n    <div class=\"mobile-cats-section\">\n      <span class=\"mobile-cats-label\">Shop by Fabric</span>\n      <div class=\"mobile-cats-grid\">\n        <a\n          *ngFor=\"let cat of categories().slice(0, 8)\"\n          [routerLink]=\"['/products']\"\n          [queryParams]=\"{ category: cat.name }\"\n          (click)=\"closeMobileMenu()\"\n          class=\"mobile-cat-chip\"\n        >\n          {{ cat.name }}\n        </a>\n      </div>\n    </div>\n\n    <a routerLink=\"/products\" [queryParams]=\"{ filter: 'new' }\" (click)=\"closeMobileMenu()\">New Arrivals</a>\n    <a routerLink=\"/products\" [queryParams]=\"{ filter: 'bestseller' }\" (click)=\"closeMobileMenu()\">Bestsellers</a>\n    <a routerLink=\"/products\" [queryParams]=\"{ occasion: 'Wedding' }\" (click)=\"closeMobileMenu()\">Bridal</a>\n    <a routerLink=\"/cart\" (click)=\"closeMobileMenu()\">\n      Bag <span *ngIf=\"cart.count() > 0\" class=\"mobile-cart-ct\">{{ cart.count() }}</span>\n    </a>\n\n    <ng-container *ngIf=\"auth.isLoggedIn()\">\n      <a routerLink=\"/account\" (click)=\"closeMobileMenu()\">My Account</a>\n      <a routerLink=\"/orders\" (click)=\"closeMobileMenu()\">My Orders</a>\n      <button (click)=\"logout()\">Sign Out</button>\n    </ng-container>\n    <ng-container *ngIf=\"!auth.isLoggedIn()\">\n      <a routerLink=\"/login\" (click)=\"closeMobileMenu()\">Sign In</a>\n      <a routerLink=\"/register\" (click)=\"closeMobileMenu()\">Register</a>\n    </ng-container>\n  </div>\n</nav>\n", styles: ["// Navbar Component Styles\n\n// \u2500\u2500 Announcement Bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.announce-bar {\n  background: var(--text);\n  color: rgba(255,255,255,0.78);\n  text-align: center;\n  padding: 9px 24px;\n  font-size: 0.72rem;\n  letter-spacing: 0.05em;\n  font-family: var(--font-body);\n\n  strong { color: var(--gold-warm); font-weight: 600; }\n}\n\n// \u2500\u2500 Admin Bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.admin-bar {\n  background: var(--text);\n  color: rgba(255,255,255,0.7);\n  padding: 8px 32px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.75rem;\n  letter-spacing: 0.04em;\n  overflow-x: auto;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n\n  .material-icons { font-size: 15px; color: var(--gold-warm); flex-shrink: 0; }\n\n  a {\n    color: rgba(255,255,255,0.75);\n    text-decoration: none;\n    transition: color 0.2s;\n    font-weight: 500;\n    flex-shrink: 0;\n    &:hover { color: var(--gold-warm); }\n  }\n\n  .ab-sep { color: rgba(255,255,255,0.2); flex-shrink: 0; }\n}\n\n.ab-logout {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(192,57,43,0.2);\n  border: 1px solid rgba(192,57,43,0.3);\n  color: rgba(255,150,150,0.9);\n  padding: 4px 12px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  transition: all 0.2s;\n  flex-shrink: 0;\n\n  .material-icons { font-size: 14px; color: inherit; }\n  &:hover { background: var(--error); color: white; border-color: var(--error); }\n}\n\n// \u2500\u2500 Main Navbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.navbar {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: var(--bg);\n  border-bottom: 1px solid var(--border);\n  transition: box-shadow 0.3s, background 0.3s;\n\n  &.scrolled {\n    box-shadow: 0 2px 20px rgba(44,24,16,0.1);\n    background: rgba(250,248,244,0.96);\n    backdrop-filter: blur(12px);\n  }\n\n  &.admin-mode {\n    background: var(--bg) !important;\n    border-bottom: 2px solid var(--gold-warm);\n  }\n}\n\n.nav-container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 32px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n// \u2500\u2500 Logo \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n\n.logo-mark {\n  width: 36px;\n  height: 36px;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 3px;\n}\n\n.logo-text { display: flex; flex-direction: column; }\n.logo-main { font-family: var(--font-display); font-size: 1.1rem; color: var(--text); letter-spacing: 0.03em; line-height: 1.1; }\n.logo-tagline { font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-muted); }\n.admin-tag { color: var(--gold-warm) !important; }\n\n// \u2500\u2500 Nav Links \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.nav-links {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  flex: 1;\n\n  li > a {\n    display: block;\n    padding: 0 16px;\n    height: 72px;\n    line-height: 72px;\n    font-size: 0.82rem;\n    letter-spacing: 0.06em;\n    color: var(--text-muted);\n    text-decoration: none;\n    transition: color 0.2s;\n    white-space: nowrap;\n\n    &:hover, &.active { color: var(--burgundy); }\n  }\n}\n\n.nav-chevron { font-size: 0.9rem; opacity: 0.5; }\n\n// \u2500\u2500 Mega Menu \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.has-mega { position: relative; }\n\n.mega-menu {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: white;\n  border: 1px solid var(--border);\n  border-top: none;\n  box-shadow: 0 12px 40px rgba(44,24,16,0.12);\n  border-radius: 0 0 var(--radius-md) var(--radius-md);\n  min-width: 780px;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s, transform 0.2s;\n  transform: translateX(-50%) translateY(-8px);\n  z-index: 200;\n}\n\n.has-mega:hover .mega-menu {\n  opacity: 1;\n  pointer-events: all;\n  transform: translateX(-50%) translateY(0);\n}\n\n.mega-inner {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr) 180px;\n  gap: 0;\n  padding: 24px 0;\n}\n\n.mega-col {\n  padding: 0 20px;\n  border-right: 1px solid var(--border);\n\n  &:last-of-type { border-right: none; }\n\n  h5 {\n    font-size: 0.62rem;\n    letter-spacing: 0.22em;\n    text-transform: uppercase;\n    color: var(--gold-warm);\n    font-family: var(--font-body);\n    font-weight: 700;\n    margin-bottom: 14px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--border);\n  }\n\n  a {\n    display: block;\n    font-size: 0.84rem;\n    color: var(--text-muted);\n    text-decoration: none;\n    padding: 5px 0;\n    transition: color 0.15s;\n    cursor: pointer;\n\n    &:hover { color: var(--burgundy); padding-left: 3px; }\n  }\n}\n\n// Mega featured image column\n.mega-featured { padding: 0 0 0 20px; }\n\n.mega-feat-img {\n  position: relative;\n  height: 100%;\n  min-height: 180px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n\n  img { width: 100%; height: 100%; object-fit: cover; }\n}\n\n.mega-feat-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(44,24,16,0.85) 0%, transparent 60%);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 16px;\n\n  span { font-size: 0.62rem; color: var(--gold-warm); letter-spacing: 0.16em; text-transform: uppercase; }\n  h4   { font-family: var(--font-display); font-size: 1rem; color: white; margin: 4px 0 10px; font-weight: 400; }\n}\n\n.mega-feat-btn {\n  display: inline-block;\n  padding: 6px 14px;\n  background: var(--gold-warm);\n  color: white !important;\n  border-radius: 2px;\n  font-size: 0.7rem;\n  letter-spacing: 0.1em;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.2s;\n\n  &:hover { background: var(--gold-dark); }\n}\n\n// \u2500\u2500 Admin Nav Links \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.admin-nav-links {\n  li a {\n    display: flex !important;\n    align-items: center;\n    gap: 6px;\n    .material-icons { font-size: 16px; }\n  }\n}\n\n// \u2500\u2500 Right actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.nav-actions { display: flex; align-items: center; gap: 4px; margin-left: auto; flex-shrink: 0; }\n\n.nav-icon-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  text-decoration: none;\n  position: relative;\n  transition: all 0.2s;\n\n  .material-icons { font-size: 22px; }\n  &:hover { background: var(--surface); color: var(--burgundy); }\n}\n\n// Search\n.search-wrap { position: relative; }\n\n.search-field {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 320px;\n  min-width: 320px;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  background: white;\n  border: 1.5px solid var(--burgundy);\n  border-radius: 24px;\n  box-shadow: 0 4px 20px rgba(44,24,16,0.12);\n  overflow: hidden;\n  animation: expandSearch 0.25s ease;\n  z-index: 10;\n}\n\n@keyframes expandSearch {\n  from { width: 40px; opacity: 0; }\n  to   { width: 300px; opacity: 1; }\n}\n\n.si { font-size: 18px !important; padding: 0 10px; color: var(--text-muted); flex-shrink: 0; }\n\n.search-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  padding: 10px 4px;\n  font-size: 0.875rem;\n  font-family: var(--font-body);\n  background: transparent;\n  color: var(--text);\n  min-width: 0;\n  flex: 1;\n}\n\n.search-close {\n  width: 36px;\n  height: 36px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  .material-icons { font-size: 18px; }\n  &:hover { color: var(--burgundy); }\n}\n\n.search-suggestions {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: min(420px, 88vw);\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  box-shadow: 0 18px 48px rgba(44, 24, 16, 0.16);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  z-index: 25;\n}\n\n.search-suggestion-head {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  padding: 6px 10px 2px;\n}\n\n.quick-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  border: none;\n  background: var(--surface);\n  color: var(--text-muted);\n  padding: 10px 12px;\n  border-radius: 12px;\n  cursor: pointer;\n  text-align: left;\n  font-family: var(--font-body);\n\n  .material-icons { font-size: 16px; color: var(--gold-warm); }\n\n  &:hover {\n    background: var(--burgundy-pale);\n    color: var(--burgundy);\n  }\n}\n\n.search-suggestion-item {\n  display: grid;\n  grid-template-columns: 52px 1fr 20px;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px;\n  border: none;\n  background: transparent;\n  border-radius: 14px;\n  cursor: pointer;\n  text-align: left;\n  font-family: var(--font-body);\n\n  &:hover {\n    background: var(--surface);\n  }\n}\n\n.search-suggestion-img {\n  width: 52px;\n  height: 64px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n}\n\n.search-suggestion-copy {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.search-suggestion-name {\n  font-size: 0.9rem;\n  color: var(--text);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.search-suggestion-meta {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n\n.search-suggestion-arrow {\n  font-size: 18px;\n  color: var(--text-dim);\n}\n\n.search-view-all {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  margin-top: 4px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  color: var(--burgundy);\n  font-family: var(--font-body);\n  font-weight: 500;\n  cursor: pointer;\n\n  &:hover {\n    background: var(--burgundy-pale);\n    border-color: var(--burgundy);\n  }\n}\n\n// Cart count badge\n.cart-btn { position: relative; }\n\n.cart-count {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-size: 0.6rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  font-family: var(--font-body);\n}\n\n// User menu\n.user-wrap { position: relative; }\n\n.user-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n\n.user-dropdown {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  box-shadow: 0 12px 40px rgba(44,24,16,0.14);\n  min-width: 240px;\n  animation: dropIn 0.2s ease;\n  z-index: 150;\n}\n\n@keyframes dropIn {\n  from { opacity: 0; transform: translateY(-8px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.ud-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 18px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n}\n\n.ud-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.ud-name  { font-size: 0.875rem; font-weight: 500; color: var(--text); }\n.ud-email { font-size: 0.72rem; color: var(--text-muted); }\n\n.ud-divider { height: 1px; background: var(--border); }\n\n.ud-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 18px;\n  color: var(--text-muted);\n  font-size: 0.84rem;\n  text-decoration: none;\n  transition: all 0.2s;\n  background: none;\n  border: none;\n  width: 100%;\n  cursor: pointer;\n  font-family: var(--font-body);\n\n  .material-icons { font-size: 17px; }\n  &:hover { background: var(--surface); color: var(--burgundy); }\n}\n\n.ud-logout { color: var(--error); &:hover { background: rgba(192,57,43,0.05); } }\n\n// Admin badge\n.admin-badge {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 14px 4px 4px;\n  background: var(--gold-pale);\n  border: 1px solid var(--border-warm);\n  border-radius: 100px;\n}\n\n.admin-av {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--burgundy);\n  color: white;\n  font-family: var(--font-display);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.admin-name { font-size: 0.78rem; color: var(--text-muted); font-weight: 500; }\n\n// Mobile hamburger\n.mobile-menu-btn { display: none; }\n\n// \u2500\u2500 Mobile Nav \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.mobile-nav {\n  display: none;\n  flex-direction: column;\n  background: white;\n  border-top: 1px solid var(--border);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.35s ease;\n\n  &.open { max-height: 90svh; overflow-y: auto; }\n\n  a, button {\n    display: flex;\n    align-items: center;\n    padding: 14px 24px;\n    font-size: 0.9rem;\n    color: var(--text-muted);\n    text-decoration: none;\n    border-bottom: 1px solid rgba(107,84,71,0.06);\n    background: none;\n    border-left: none;\n    border-right: none;\n    border-top: none;\n    cursor: pointer;\n    font-family: var(--font-body);\n    width: 100%;\n    text-align: left;\n    transition: all 0.15s;\n\n    &:hover { background: var(--surface); color: var(--burgundy); }\n  }\n}\n\n.mobile-cats-section {\n  padding: 12px 24px 6px;\n  border-bottom: 1px solid rgba(107,84,71,0.06);\n}\n\n.mobile-cats-label {\n  font-size: 0.62rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  font-weight: 600;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.mobile-cats-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-bottom: 8px;\n}\n\n.mobile-cat-chip {\n  padding: 5px 12px !important;\n  background: var(--surface) !important;\n  border: 1px solid var(--border) !important;\n  border-radius: 100px !important;\n  font-size: 0.78rem !important;\n  color: var(--text-muted) !important;\n  cursor: pointer;\n  transition: all 0.2s !important;\n  display: inline-flex !important;\n  width: auto !important;\n\n  &:hover { border-color: var(--burgundy) !important; color: var(--burgundy) !important; background: var(--burgundy-pale) !important; }\n}\n\n.mobile-cart-ct {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: var(--burgundy);\n  color: white;\n  border-radius: 50%;\n  font-size: 0.62rem;\n  font-weight: 700;\n  margin-left: 6px;\n}\n\n// \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media (max-width: 1100px) {\n  .mega-inner { grid-template-columns: repeat(3, 1fr) 160px; }\n  /* Hide second fabric column on smaller screens */\n  .mega-col:nth-child(2):not(:last-child) { display: none; }\n}\n\n@media (max-width: 960px) {\n  .nav-links { display: none; }\n  .mobile-menu-btn { display: flex !important; }\n  .mobile-nav { display: flex; }\n  .nav-container { padding: 0 16px; height: 64px; gap: 8px; }\n  .admin-nav-links { display: none !important; }\n  .search-field { width: min(320px, calc(100vw - 32px)); min-width: min(320px, calc(100vw - 32px)); }\n  .search-suggestions { width: min(360px, calc(100vw - 24px)); right: -44px; }\n}\n\n@media (max-width: 480px) {\n  .announce-bar p { font-size: 0.65rem; }\n  .admin-bar { padding: 6px 12px; font-size: 0.68rem; gap: 6px; }\n  .ab-logout { padding: 3px 8px; }\n  .nav-container { padding: 0 12px; height: 58px; }\n  .logo-mark { width: 32px; height: 32px; font-size: 1rem; }\n  .logo-tagline { display: none; }\n  .search-field { width: min(300px, calc(100vw - 24px)); }\n  .search-suggestions { right: -8px; width: min(320px, calc(100vw - 24px)); }\n}\n"] }]
    }], null, { onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }], onDocClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\components\\navbar\\navbar.component.ts", lineNumber: 39 }); })();
//# sourceMappingURL=navbar.component.js.map