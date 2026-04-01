import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
import { ProductService } from '../../../services/product.service';
import { ToastService } from '../../../services/toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => ({ exact: true });
function HomepageBuilderComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1, "Loading configuration...");
    i0.ɵɵelementEnd();
} }
function HomepageBuilderComponent_div_54_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function HomepageBuilderComponent_div_54_button_2_Template_button_click_0_listener() { const t_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.activeTab = t_r2.key); });
    i0.ɵɵelementStart(1, "span", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r2.activeTab === t_r2.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r2.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", t_r2.label, " ");
} }
function HomepageBuilderComponent_div_54_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 43);
    i0.ɵɵtext(2, "Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 44);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.announcementText());
} }
function HomepageBuilderComponent_div_54_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32)(2, "h3");
    i0.ɵɵtext(3, "Announcement Bar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "The thin strip at the very top visible to all customers.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 33)(7, "label", 34)(8, "input", 35);
    i0.ɵɵlistener("change", function HomepageBuilderComponent_div_54_div_4_Template_input_change_8_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.announcementActive.set($event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "span", 36);
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11, "Show announcement bar");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 37)(13, "label", 38);
    i0.ɵɵtext(14, "Announcement Text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "textarea", 39);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_4_Template_textarea_input_15_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.announcementText.set($event.target.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 40);
    i0.ɵɵtext(17, "Use \u2726 as a decorative separator. Keep it short and punchy.");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(18, HomepageBuilderComponent_div_54_div_4_div_18_Template, 5, 1, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("checked", ctx_r2.announcementActive());
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("value", ctx_r2.announcementText());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.announcementActive());
} }
function HomepageBuilderComponent_div_54_div_5_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵelement(1, "img", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.heroImage(), i0.ɵɵsanitizeUrl);
} }
function HomepageBuilderComponent_div_54_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32)(2, "h3");
    i0.ɵɵtext(3, "Hero Section Text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "The title, subtitle, and CTA button on the full-screen hero banner.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 37)(7, "label", 38);
    i0.ɵɵtext(8, "Hero Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 45);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_5_Template_input_input_9_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.heroTitle.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 37)(11, "label", 38);
    i0.ɵɵtext(12, "Hero Subtitle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "textarea", 46);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_5_Template_textarea_input_13_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.heroSubtitle.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 37)(15, "label", 38);
    i0.ɵɵtext(16, "CTA Button Text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 47);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_5_Template_input_input_17_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.heroCTA.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 37)(19, "label", 38);
    i0.ɵɵtext(20, "Background Image URL ");
    i0.ɵɵelementStart(21, "span", 48);
    i0.ɵɵtext(22, "optional \u2014 uses default if empty");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "input", 49);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_5_Template_input_input_23_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.heroImage.set($event.target.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, HomepageBuilderComponent_div_54_div_5_div_24_Template, 2, 1, "div", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 51)(26, "div", 43);
    i0.ɵɵtext(27, "Text Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 52);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 53);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 54);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("value", ctx_r2.heroTitle());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.heroSubtitle());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.heroCTA());
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("value", ctx_r2.heroImage());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.heroImage());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.heroTitle());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.heroSubtitle());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r2.heroCTA(), " \u2192");
} }
function HomepageBuilderComponent_div_54_div_6_div_7_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵelement(1, "img", 67);
    i0.ɵɵelementStart(2, "span", 68);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const card_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", card_r9.image, i0.ɵɵsanitizeUrl)("alt", card_r9.cat);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r9.cat);
} }
function HomepageBuilderComponent_div_54_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60)(1, "div", 61);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 62)(4, "div", 37)(5, "label", 38);
    i0.ɵɵtext(6, "Category Name (links to this category)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 63);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_6_div_7_Template_input_input_7_listener($event) { const i_r8 = i0.ɵɵrestoreView(_r7).index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.updateHeroCard(i_r8, "cat", $event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 37)(9, "label", 38);
    i0.ɵɵtext(10, "Image URL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 49);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_6_div_7_Template_input_input_11_listener($event) { const i_r8 = i0.ɵɵrestoreView(_r7).index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.updateHeroCard(i_r8, "image", $event.target.value)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, HomepageBuilderComponent_div_54_div_6_div_7_div_12_Template, 4, 3, "div", 64);
    i0.ɵɵelementStart(13, "button", 65);
    i0.ɵɵlistener("click", function HomepageBuilderComponent_div_54_div_6_div_7_Template_button_click_13_listener() { const i_r8 = i0.ɵɵrestoreView(_r7).index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.removeHeroCard(i_r8)); });
    i0.ɵɵelementStart(14, "span", 8);
    i0.ɵɵtext(15, "delete_outline");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const card_r9 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r8 + 1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", card_r9.cat);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", card_r9.image);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", card_r9.image);
} }
function HomepageBuilderComponent_div_54_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32)(2, "h3");
    i0.ɵɵtext(3, "Hero Side Images");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "The small category cards shown to the right of the hero text. Each card links to its category page.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 57);
    i0.ɵɵtemplate(7, HomepageBuilderComponent_div_54_div_6_div_7_Template, 16, 4, "div", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 59);
    i0.ɵɵlistener("click", function HomepageBuilderComponent_div_54_div_6_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.addHeroCard()); });
    i0.ɵɵelementStart(9, "span", 8);
    i0.ɵɵtext(10, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r2.heroSidebarCards());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.heroSidebarCards().length >= 4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Add Hero Card (", ctx_r2.heroSidebarCards().length, "/4) ");
} }
function HomepageBuilderComponent_div_54_div_7_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function HomepageBuilderComponent_div_54_div_7_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.featuredIds.set([])); });
    i0.ɵɵtext(1, " Clear all ");
    i0.ɵɵelementEnd();
} }
function HomepageBuilderComponent_div_54_div_7_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81)(1, "span", 8);
    i0.ɵɵtext(2, "check_circle");
    i0.ɵɵelementEnd()();
} }
function HomepageBuilderComponent_div_54_div_7_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵlistener("click", function HomepageBuilderComponent_div_54_div_7_div_12_Template_div_click_0_listener() { const p_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.toggleFeatured(p_r12._id)); });
    i0.ɵɵelementStart(1, "div", 75);
    i0.ɵɵelement(2, "img", 67);
    i0.ɵɵtemplate(3, HomepageBuilderComponent_div_54_div_7_div_12_div_3_Template, 3, 0, "div", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 77)(5, "div", 78);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 79);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 80);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("selected", ctx_r2.isFeatured(p_r12._id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", p_r12.images[0], i0.ɵɵsanitizeUrl)("alt", p_r12.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isFeatured(p_r12._id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r12.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.ps.formatPrice(p_r12.price));
} }
function HomepageBuilderComponent_div_54_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32)(2, "h3");
    i0.ɵɵtext(3, "Featured Products");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Hand-pick up to 8 products for the Featured section. If none selected, auto-picks products with the Featured flag.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 69)(7, "span", 8);
    i0.ɵɵtext(8, "star");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9);
    i0.ɵɵtemplate(10, HomepageBuilderComponent_div_54_div_7_button_10_Template, 2, 0, "button", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 71);
    i0.ɵɵtemplate(12, HomepageBuilderComponent_div_54_div_7_div_12_Template, 11, 8, "div", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.featuredIds().length, " of 8 selected ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.featuredIds().length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.allProducts());
} }
function HomepageBuilderComponent_div_54_div_8_div_25_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function HomepageBuilderComponent_div_54_div_8_div_25_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.newArrivalIds.set([])); });
    i0.ɵɵtext(1, " Clear all ");
    i0.ɵɵelementEnd();
} }
function HomepageBuilderComponent_div_54_div_8_div_25_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81)(1, "span", 8);
    i0.ɵɵtext(2, "check_circle");
    i0.ɵɵelementEnd()();
} }
function HomepageBuilderComponent_div_54_div_8_div_25_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵlistener("click", function HomepageBuilderComponent_div_54_div_8_div_25_div_7_Template_div_click_0_listener() { const p_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.toggleNewArrival(p_r16._id)); });
    i0.ɵɵelementStart(1, "div", 75);
    i0.ɵɵelement(2, "img", 67);
    i0.ɵɵtemplate(3, HomepageBuilderComponent_div_54_div_8_div_25_div_7_div_3_Template, 3, 0, "div", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 77)(5, "div", 78);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 79);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 80);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("selected", ctx_r2.isNewArrival(p_r16._id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", p_r16.images[0], i0.ɵɵsanitizeUrl)("alt", p_r16.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isNewArrival(p_r16._id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r16.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r16.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.ps.formatPrice(p_r16.price));
} }
function HomepageBuilderComponent_div_54_div_8_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 88)(1, "div", 69)(2, "span", 8);
    i0.ɵɵtext(3, "fiber_new");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, HomepageBuilderComponent_div_54_div_8_div_25_button_5_Template, 2, 0, "button", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 71);
    i0.ɵɵtemplate(7, HomepageBuilderComponent_div_54_div_8_div_25_div_7_Template, 11, 8, "div", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.newArrivalIds().length, " of 8 selected ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.newArrivalIds().length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.allProducts());
} }
function HomepageBuilderComponent_div_54_div_8_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 89)(1, "span", 8);
    i0.ɵɵtext(2, "info");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Products flagged as \"New Arrival\" in inventory will automatically appear here. ");
    i0.ɵɵelementEnd();
} }
function HomepageBuilderComponent_div_54_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32)(2, "h3");
    i0.ɵɵtext(3, "New Arrivals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Choose automatic or manual for the New Arrivals section.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 82)(7, "label", 83)(8, "input", 84);
    i0.ɵɵlistener("change", function HomepageBuilderComponent_div_54_div_8_Template_input_change_8_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.newArrivalsMode.set("auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 8);
    i0.ɵɵtext(10, "auto_awesome");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div")(12, "strong");
    i0.ɵɵtext(13, "Automatic");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15, "Auto-picks latest products with the \"New Arrival\" flag");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "label", 83)(17, "input", 85);
    i0.ɵɵlistener("change", function HomepageBuilderComponent_div_54_div_8_Template_input_change_17_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.newArrivalsMode.set("manual")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 8);
    i0.ɵɵtext(19, "tune");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "strong");
    i0.ɵɵtext(22, "Manual Pick");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p");
    i0.ɵɵtext(24, "You choose exactly which products appear");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(25, HomepageBuilderComponent_div_54_div_8_div_25_Template, 8, 3, "div", 86)(26, HomepageBuilderComponent_div_54_div_8_div_26_Template, 4, 0, "div", 87);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("active", ctx_r2.newArrivalsMode() === "auto");
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r2.newArrivalsMode() === "auto");
    i0.ɵɵadvance(8);
    i0.ɵɵclassProp("active", ctx_r2.newArrivalsMode() === "manual");
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r2.newArrivalsMode() === "manual");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r2.newArrivalsMode() === "manual");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.newArrivalsMode() === "auto");
} }
function HomepageBuilderComponent_div_54_div_9_div_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵelement(1, "img", 100);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.promoBannerImage(), i0.ɵɵsanitizeUrl);
} }
function HomepageBuilderComponent_div_54_div_9_div_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 101)(1, "div", 43);
    i0.ɵɵtext(2, "Live Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 102)(4, "div", 103);
    i0.ɵɵelement(5, "img", 104);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 105)(7, "div", 106);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 107);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 108);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 109)(14, "div", 110);
    i0.ɵɵtext(15, "Up to");
    i0.ɵɵelement(16, "br");
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "br");
    i0.ɵɵtext(20, "off");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div")(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p", 111);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 112);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("src", ctx_r2.promoBannerImage() || "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.promoBannerSubtitle());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.promoBannerTitle());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.promoBannerText());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.promoBannerBadge());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.promoBannerOfferLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.promoBannerOfferSub());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.promoBannerCTA());
} }
function HomepageBuilderComponent_div_54_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32)(2, "h3");
    i0.ɵɵtext(3, "Promotional Banner");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "The editorial two-column banner displayed between Featured and New Arrivals on the homepage.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 33)(7, "label", 34)(8, "input", 35);
    i0.ɵɵlistener("change", function HomepageBuilderComponent_div_54_div_9_Template_input_change_8_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.promoBannerActive.set($event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "span", 36);
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11, "Show promo banner");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 90)(13, "div", 37)(14, "label", 38);
    i0.ɵɵtext(15, "Section Label ");
    i0.ɵɵelementStart(16, "span", 48);
    i0.ɵɵtext(17, "small text above title");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "input", 91);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_9_Template_input_input_18_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.promoBannerSubtitle.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 37)(20, "label", 38);
    i0.ɵɵtext(21, "Main Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "input", 92);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_9_Template_input_input_22_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.promoBannerTitle.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 93)(24, "label", 38);
    i0.ɵɵtext(25, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "textarea", 94);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_9_Template_textarea_input_26_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.promoBannerText.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 37)(28, "label", 38);
    i0.ɵɵtext(29, "Offer Badge ");
    i0.ɵɵelementStart(30, "span", 48);
    i0.ɵɵtext(31, "e.g. 30%");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "input", 95);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_9_Template_input_input_32_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.promoBannerBadge.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 37)(34, "label", 38);
    i0.ɵɵtext(35, "Offer Sub-label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "input", 92);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_9_Template_input_input_36_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.promoBannerOfferLabel.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 37)(38, "label", 38);
    i0.ɵɵtext(39, "Offer Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "input", 96);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_9_Template_input_input_40_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.promoBannerOfferSub.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 37)(42, "label", 38);
    i0.ɵɵtext(43, "CTA Button Text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "input", 97);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_9_Template_input_input_44_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.promoBannerCTA.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 37)(46, "label", 38);
    i0.ɵɵtext(47, "Button Link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "input", 98);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_9_Template_input_input_48_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.promoBannerLink.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div", 93)(50, "label", 38);
    i0.ɵɵtext(51, "Banner Image URL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "input", 49);
    i0.ɵɵlistener("input", function HomepageBuilderComponent_div_54_div_9_Template_input_input_52_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.promoBannerImage.set($event.target.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(53, HomepageBuilderComponent_div_54_div_9_div_53_Template, 2, 1, "div", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(54, HomepageBuilderComponent_div_54_div_9_div_54_Template, 28, 8, "div", 99);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("checked", ctx_r2.promoBannerActive());
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("value", ctx_r2.promoBannerSubtitle());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.promoBannerTitle());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.promoBannerText());
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("value", ctx_r2.promoBannerBadge());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.promoBannerOfferLabel());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.promoBannerOfferSub());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.promoBannerCTA());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.promoBannerLink());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.promoBannerImage());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.promoBannerImage());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.promoBannerActive());
} }
function HomepageBuilderComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "nav", 26);
    i0.ɵɵtemplate(2, HomepageBuilderComponent_div_54_button_2_Template, 4, 4, "button", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 28);
    i0.ɵɵtemplate(4, HomepageBuilderComponent_div_54_div_4_Template, 19, 3, "div", 29)(5, HomepageBuilderComponent_div_54_div_5_Template, 34, 8, "div", 29)(6, HomepageBuilderComponent_div_54_div_6_Template, 12, 3, "div", 29)(7, HomepageBuilderComponent_div_54_div_7_Template, 13, 3, "div", 29)(8, HomepageBuilderComponent_div_54_div_8_Template, 27, 8, "div", 29)(9, HomepageBuilderComponent_div_54_div_9_Template, 55, 12, "div", 29);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.tabs);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.activeTab === "announcement");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.activeTab === "hero");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.activeTab === "hero_images");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.activeTab === "featured");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.activeTab === "new_arrivals");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.activeTab === "promo_banner");
} }
export class HomepageBuilderComponent {
    constructor() {
        this.api = inject(ApiService);
        this.auth = inject(AuthService);
        this.ps = inject(ProductService);
        this.toast = inject(ToastService);
        this.loading = signal(true);
        this.saving = signal(false);
        this.activeTab = 'announcement';
        this.allProducts = signal([]);
        // ── Use signals for everything so Angular detects changes ──
        this.announcementText = signal('✦ Free Shipping on orders above ₹10,000 · Use code VASTRA15 for 15% off ✦');
        this.announcementActive = signal(true);
        this.heroTitle = signal('Where Heritage Meets Haute Couture');
        this.heroSubtitle = signal("Exquisite handcrafted sarees woven by India's most celebrated artisans.");
        this.heroCTA = signal('Explore Collection');
        this.heroImage = signal('');
        // Hero sidebar cards — 3 entries
        this.heroSidebarCards = signal([
            { cat: 'Banarasi', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80' },
            { cat: 'Kanjivaram', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&q=80' },
            { cat: 'Chanderi', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=300&q=80' },
        ]);
        // Featured — signal so [class.selected] reacts instantly
        this.featuredIds = signal([]);
        this.newArrivalIds = signal([]);
        this.newArrivalsMode = signal('auto');
        // Promo banner
        this.promoBannerActive = signal(true);
        this.promoBannerTitle = signal('Bridal Season Sale');
        this.promoBannerSubtitle = signal('Bridal Season 2024');
        this.promoBannerText = signal('Up to 30% off on our exclusive bridal collection.');
        this.promoBannerBadge = signal('30%');
        this.promoBannerOfferLabel = signal('Bridal Season Sale');
        this.promoBannerOfferSub = signal('On selected bridal & festive pieces');
        this.promoBannerImage = signal('');
        this.promoBannerLink = signal('/products?occasion=Wedding');
        this.promoBannerCTA = signal('Shop Bridal →');
        this.tabs = [
            { key: 'announcement', label: 'Announcement', icon: 'campaign' },
            { key: 'hero', label: 'Hero Section', icon: 'photo_size_select_large' },
            { key: 'hero_images', label: 'Hero Side Images', icon: 'view_carousel' },
            { key: 'featured', label: 'Featured', icon: 'star' },
            { key: 'new_arrivals', label: 'New Arrivals', icon: 'fiber_new' },
            { key: 'promo_banner', label: 'Promo Banner', icon: 'local_offer' },
        ];
    }
    ngOnInit() {
        this.loadConfig();
        this.loadProducts();
    }
    loadConfig() {
        this.api.get('/homeconfig/admin').subscribe({
            next: r => {
                const c = r.config || {};
                if (c.announcementText !== undefined)
                    this.announcementText.set(c.announcementText);
                if (c.announcementActive !== undefined)
                    this.announcementActive.set(c.announcementActive);
                if (c.heroTitle !== undefined)
                    this.heroTitle.set(c.heroTitle);
                if (c.heroSubtitle !== undefined)
                    this.heroSubtitle.set(c.heroSubtitle);
                if (c.heroCTA !== undefined)
                    this.heroCTA.set(c.heroCTA);
                if (c.heroImage !== undefined)
                    this.heroImage.set(c.heroImage);
                if (c.heroSidebarCards && c.heroSidebarCards.length)
                    this.heroSidebarCards.set(c.heroSidebarCards);
                if (c.newArrivalsMode !== undefined)
                    this.newArrivalsMode.set(c.newArrivalsMode);
                // IDs already stringified by backend
                this.featuredIds.set((c.featuredProductIds || []).map((x) => String(x)));
                this.newArrivalIds.set((c.newArrivalProductIds || []).map((x) => String(x)));
                if (c.promoBannerActive !== undefined)
                    this.promoBannerActive.set(c.promoBannerActive);
                if (c.promoBannerTitle !== undefined)
                    this.promoBannerTitle.set(c.promoBannerTitle);
                if (c.promoBannerSubtitle !== undefined)
                    this.promoBannerSubtitle.set(c.promoBannerSubtitle);
                if (c.promoBannerText !== undefined)
                    this.promoBannerText.set(c.promoBannerText);
                if (c.promoBannerBadge !== undefined)
                    this.promoBannerBadge.set(c.promoBannerBadge);
                if (c.promoBannerOfferLabel !== undefined)
                    this.promoBannerOfferLabel.set(c.promoBannerOfferLabel);
                if (c.promoBannerOfferSub !== undefined)
                    this.promoBannerOfferSub.set(c.promoBannerOfferSub);
                if (c.promoBannerImage !== undefined)
                    this.promoBannerImage.set(c.promoBannerImage);
                if (c.promoBannerLink !== undefined)
                    this.promoBannerLink.set(c.promoBannerLink);
                if (c.promoBannerCTA !== undefined)
                    this.promoBannerCTA.set(c.promoBannerCTA);
                this.loading.set(false);
            },
            error: () => this.loading.set(false),
        });
    }
    loadProducts() {
        this.ps.getProducts({ limit: 100 }).subscribe({
            next: r => this.allProducts.set(r.products),
            error: () => { },
        });
    }
    // ── Featured helpers ─────────────────────────────────────────
    isFeatured(id) {
        return this.featuredIds().includes(String(id));
    }
    toggleFeatured(id) {
        const sid = String(id);
        if (this.isFeatured(sid)) {
            this.featuredIds.update(ids => ids.filter(x => x !== sid));
        }
        else {
            if (this.featuredIds().length >= 8) {
                this.toast.warning('Max 8 featured products');
                return;
            }
            this.featuredIds.update(ids => [...ids, sid]);
        }
    }
    // ── New Arrival helpers ──────────────────────────────────────
    isNewArrival(id) {
        return this.newArrivalIds().includes(String(id));
    }
    toggleNewArrival(id) {
        const sid = String(id);
        if (this.isNewArrival(sid)) {
            this.newArrivalIds.update(ids => ids.filter(x => x !== sid));
        }
        else {
            if (this.newArrivalIds().length >= 8) {
                this.toast.warning('Max 8 new arrival products');
                return;
            }
            this.newArrivalIds.update(ids => [...ids, sid]);
        }
    }
    // ── Hero sidebar helpers ─────────────────────────────────────
    updateHeroCard(i, field, val) {
        this.heroSidebarCards.update(cards => {
            const updated = [...cards];
            updated[i] = { ...updated[i], [field]: val };
            return updated;
        });
    }
    addHeroCard() {
        if (this.heroSidebarCards().length >= 4) {
            this.toast.warning('Max 4 hero side images');
            return;
        }
        this.heroSidebarCards.update(c => [...c, { cat: '', image: '' }]);
    }
    removeHeroCard(i) {
        this.heroSidebarCards.update(cards => cards.filter((_, idx) => idx !== i));
    }
    // ── Save all ─────────────────────────────────────────────────
    save() {
        this.saving.set(true);
        const payload = {
            announcementText: this.announcementText(),
            announcementActive: this.announcementActive(),
            heroTitle: this.heroTitle(),
            heroSubtitle: this.heroSubtitle(),
            heroCTA: this.heroCTA(),
            heroImage: this.heroImage(),
            heroSidebarCards: this.heroSidebarCards(),
            featuredProductIds: this.featuredIds(),
            newArrivalsMode: this.newArrivalsMode(),
            newArrivalProductIds: this.newArrivalIds(),
            promoBannerActive: this.promoBannerActive(),
            promoBannerTitle: this.promoBannerTitle(),
            promoBannerSubtitle: this.promoBannerSubtitle(),
            promoBannerText: this.promoBannerText(),
            promoBannerBadge: this.promoBannerBadge(),
            promoBannerOfferLabel: this.promoBannerOfferLabel(),
            promoBannerOfferSub: this.promoBannerOfferSub(),
            promoBannerImage: this.promoBannerImage(),
            promoBannerLink: this.promoBannerLink(),
            promoBannerCTA: this.promoBannerCTA(),
        };
        this.api.put('/homeconfig', payload).subscribe({
            next: r => { this.toast.success(r.message || 'Homepage saved!'); this.saving.set(false); },
            error: (e) => { this.toast.error(e.message || 'Save failed'); this.saving.set(false); },
        });
    }
    static { this.ɵfac = function HomepageBuilderComponent_Factory(t) { return new (t || HomepageBuilderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomepageBuilderComponent, selectors: [["app-homepage-builder"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 55, vars: 7, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-logo"], [1, "s-logo-inner"], [1, "s-logo-mark"], [1, "s-logo-text"], [1, "sidebar-nav"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "material-icons"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/categories", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/homepage", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], [1, "nav-divider"], ["routerLink", "/", 1, "nav-item"], [1, "nav-item", "logout", 3, "click"], [1, "admin-main"], [1, "admin-topbar"], [1, "admin-page-title"], [1, "admin-page-sub"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "loading-placeholder", 4, "ngIf"], ["class", "builder-layout", 4, "ngIf"], [1, "loading-placeholder"], [1, "builder-layout"], [1, "builder-tabs"], ["class", "btab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "builder-panel"], ["class", "section-form", 4, "ngIf"], [1, "btab", 3, "click"], [1, "section-form"], [1, "sf-header"], [1, "toggle-row"], [1, "toggle-label"], ["type", "checkbox", 1, "toggle-input", 3, "change", "checked"], [1, "toggle-slider"], [1, "form-group"], [1, "form-label"], ["rows", "2", "placeholder", "\u2726 Free Shipping above \u20B910,000 ...", 1, "form-control", 3, "input", "value"], [1, "field-hint"], ["class", "preview-box", 4, "ngIf"], [1, "preview-box"], [1, "preview-label"], [1, "preview-announce"], ["placeholder", "Where Heritage Meets Haute Couture", 1, "form-control", 3, "input", "value"], ["rows", "2", 1, "form-control", 3, "input", "value"], ["placeholder", "Explore Collection", 1, "form-control", 3, "input", "value"], [1, "optional-tag"], ["placeholder", "https://images.unsplash.com/...", 1, "form-control", 3, "input", "value"], ["class", "img-preview-sm", 4, "ngIf"], [1, "preview-box", "hero-preview"], [1, "hp-title"], [1, "hp-sub"], [1, "hp-cta"], [1, "img-preview-sm"], ["alt", "Hero background preview", 3, "src"], [1, "hero-cards-list"], ["class", "hero-card-edit", 4, "ngFor", "ngForOf"], [1, "btn", "btn-ghost", "btn-sm", 2, "margin-top", "12px", 3, "click", "disabled"], [1, "hero-card-edit"], [1, "hce-num"], [1, "hce-fields"], ["placeholder", "e.g. Banarasi", 1, "form-control", 3, "input", "value"], ["class", "hce-preview", 4, "ngIf"], ["title", "Remove", 1, "hce-del", 3, "click"], [1, "hce-preview"], [3, "src", "alt"], [1, "hce-label"], [1, "selected-count"], ["class", "clear-sel-btn", 3, "click", 4, "ngIf"], [1, "product-picker"], ["class", "pick-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "clear-sel-btn", 3, "click"], [1, "pick-card", 3, "click"], [1, "pick-img"], ["class", "pick-check", 4, "ngIf"], [1, "pick-info"], [1, "pick-name"], [1, "pick-cat"], [1, "pick-price"], [1, "pick-check"], [1, "mode-selector"], [1, "mode-opt"], ["type", "radio", "name", "naMode", "value", "auto", 3, "change", "checked"], ["type", "radio", "name", "naMode", "value", "manual", 3, "change", "checked"], ["style", "margin-top:20px", 4, "ngIf"], ["class", "auto-note", 4, "ngIf"], [2, "margin-top", "20px"], [1, "auto-note"], [1, "promo-form-grid"], ["placeholder", "Bridal Season 2024", 1, "form-control", 3, "input", "value"], ["placeholder", "Bridal Season Sale", 1, "form-control", 3, "input", "value"], [1, "form-group", 2, "grid-column", "1/-1"], ["rows", "2", "placeholder", "Up to 30% off on our exclusive bridal collection...", 1, "form-control", 3, "input", "value"], ["placeholder", "30%", 1, "form-control", 3, "input", "value"], ["placeholder", "On selected bridal & festive pieces", 1, "form-control", 3, "input", "value"], ["placeholder", "Shop Bridal \u2192", 1, "form-control", 3, "input", "value"], ["placeholder", "/products?occasion=Wedding", 1, "form-control", 3, "input", "value"], ["class", "promo-preview", 4, "ngIf"], ["alt", "Banner preview", 3, "src"], [1, "promo-preview"], [1, "pp-inner"], [1, "pp-img"], ["alt", "preview", 3, "src"], [1, "pp-content"], [1, "pp-sub"], [1, "pp-title"], [1, "pp-desc"], [1, "pp-offer"], [1, "pp-badge"], [2, "font-size", "0.75rem", "color", "var(--text-muted)"], [1, "pp-cta"]], template: function HomepageBuilderComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtext(32, " Customers");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "div", 14);
            i0.ɵɵelementStart(34, "a", 15)(35, "span", 8);
            i0.ɵɵtext(36, "storefront");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(37, " View Store");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "button", 16);
            i0.ɵɵlistener("click", function HomepageBuilderComponent_Template_button_click_38_listener() { return ctx.auth.logout(); });
            i0.ɵɵelementStart(39, "span", 8);
            i0.ɵɵtext(40, "logout");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, " Logout");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(42, "div", 17)(43, "div", 18)(44, "div")(45, "h1", 19);
            i0.ɵɵtext(46, "Homepage Builder");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "p", 20);
            i0.ɵɵtext(48, "Control what customers see when they visit your store");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "button", 21);
            i0.ɵɵlistener("click", function HomepageBuilderComponent_Template_button_click_49_listener() { return ctx.save(); });
            i0.ɵɵelementStart(50, "span", 8);
            i0.ɵɵtext(51);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(52);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(53, HomepageBuilderComponent_div_53_Template, 2, 0, "div", 22)(54, HomepageBuilderComponent_div_54_Template, 10, 7, "div", 23);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(6, _c0));
            i0.ɵɵadvance(40);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.saving() ? "hourglass_top" : "save");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving() ? "Saving..." : "Save All Changes", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading());
        } }, dependencies: [RouterLink, RouterLinkActive, CommonModule, i1.NgForOf, i1.NgIf, FormsModule], styles: ["//[_ngcontent-%COMP%]   Homepage[_ngcontent-%COMP%]   Builder[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n.s-logo-inner[_ngcontent-%COMP%] { display:flex; align-items:center; gap:10px; }\n.s-logo-mark[_ngcontent-%COMP%] { width:32px; height:32px; background:var(--gold-warm); color:white; display:flex; align-items:center; justify-content:center; border-radius:2px; font-family:var(--font-display); font-size:1rem; }\n.s-logo-text[_ngcontent-%COMP%] { color:rgba(255,255,255,0.85); font-family:var(--font-display); font-size:1rem; }\n\n.loading-placeholder[_ngcontent-%COMP%] { padding:60px; text-align:center; color:var(--text-muted); }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Builder[_ngcontent-%COMP%]   Layout[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.builder-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Tab[_ngcontent-%COMP%]   Navigation[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.builder-tabs[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  position: sticky;\n  top: 100px;\n  display: flex;\n  flex-direction: column;\n}\n\n.btab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 16px;\n  background: none;\n  border: none;\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  font-family: var(--font-body);\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  text-align: left;\n  transition: all 0.2s;\n  position: relative;\n\n  .material-icons { font-size: 18px; flex-shrink: 0; }\n\n  &:last-child { border-bottom: none; }\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0; top: 0; bottom: 0;\n    width: 3px;\n    background: var(--burgundy);\n    border-radius: 0 2px 2px 0;\n    opacity: 0;\n    transition: opacity 0.2s;\n  }\n\n  &:hover { background: var(--surface); color: var(--text); &::before { opacity: 0.4; } }\n\n  &.active {\n    background: var(--burgundy-pale);\n    color: var(--burgundy);\n    font-weight: 500;\n    &::before { opacity: 1; }\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Builder[_ngcontent-%COMP%]   Panel[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.builder-panel[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n\n.section-form[_ngcontent-%COMP%] { padding: 28px; }\n\n.sf-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding-bottom: 18px;\n  border-bottom: 1px solid var(--border);\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.3rem;\n    color: var(--text);\n    font-weight: 400;\n    margin-bottom: 5px;\n  }\n\n  p { font-size: 0.84rem; color: var(--text-muted); line-height: 1.5; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Toggle[_ngcontent-%COMP%]   Switch[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.toggle-row[_ngcontent-%COMP%] { margin-bottom: 20px; }\n\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.toggle-input[_ngcontent-%COMP%] {\n  display: none;\n\n  &:checked + .toggle-slider {\n    background: var(--burgundy);\n\n    &::after { transform: translateX(20px); }\n  }\n}\n\n.toggle-slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  background: var(--border-strong);\n  border-radius: 100px;\n  transition: background 0.3s;\n  flex-shrink: 0;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    width: 18px;\n    height: 18px;\n    background: white;\n    border-radius: 50%;\n    transition: transform 0.3s;\n    box-shadow: 0 1px 4px rgba(0,0,0,0.2);\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Preview[_ngcontent-%COMP%]   Boxes[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.preview-box[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  margin-top: 20px;\n}\n\n.preview-label[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  font-weight: 600;\n  padding: 8px 16px;\n  background: var(--gold-pale);\n  border-bottom: 1px solid var(--border-warm);\n}\n\n.preview-announce[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  font-size: 0.78rem;\n  color: var(--text);\n  text-align: center;\n  background: var(--text);\n  color: rgba(255,255,255,0.8);\n}\n\n.hero-preview[_ngcontent-%COMP%] { padding: 0; }\n\n.hp-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  color: var(--text);\n  padding: 20px 20px 6px;\n}\n\n.hp-sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  padding: 0 20px 12px;\n  line-height: 1.6;\n}\n\n.hp-cta[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px 20px;\n  padding: 10px 20px;\n  background: var(--burgundy);\n  color: white;\n  border-radius: var(--radius-sm);\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Product[_ngcontent-%COMP%]   Picker[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.selected-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  margin-bottom: 16px;\n  padding: 10px 14px;\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n\n  .material-icons { font-size: 16px; color: var(--gold-warm); }\n}\n\n.product-picker[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 12px;\n  max-height: 500px;\n  overflow-y: auto;\n  padding: 4px;\n}\n\n.pick-card[_ngcontent-%COMP%] {\n  border: 2px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover { border-color: var(--border-strong); transform: translateY(-1px); }\n\n  &.selected {\n    border-color: var(--burgundy);\n    box-shadow: 0 0 0 2px rgba(123,30,58,0.15);\n  }\n}\n\n.pick-img[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3/4;\n  overflow: hidden;\n  background: var(--surface);\n\n  img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }\n  .pick-card:hover & img { transform: scale(1.04); }\n}\n\n.pick-check[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(123,30,58,0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .material-icons { font-size: 32px; color: white; }\n}\n\n.pick-info[_ngcontent-%COMP%] { padding: 8px; }\n\n.pick-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 2px;\n}\n\n.pick-cat[_ngcontent-%COMP%] { font-size: 0.62rem; color: var(--gold-warm); text-transform: uppercase; letter-spacing: 0.1em; }\n.pick-price[_ngcontent-%COMP%] { font-family: var(--font-display); font-size: 0.85rem; color: var(--burgundy); margin-top: 2px; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Mode[_ngcontent-%COMP%]   Selector[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.mode-selector[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.mode-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  border: 2px solid var(--border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.2s;\n\n  input[type=\"radio\"] { display: none; }\n\n  .material-icons { font-size: 22px; color: var(--text-muted); flex-shrink: 0; margin-top: 2px; }\n\n  div {\n    strong { display: block; font-size: 0.9rem; color: var(--text); margin-bottom: 3px; }\n    p { font-size: 0.78rem; color: var(--text-muted); line-height: 1.4; }\n  }\n\n  &.active {\n    border-color: var(--burgundy);\n    background: var(--burgundy-pale);\n\n    .material-icons { color: var(--burgundy); }\n    strong { color: var(--burgundy); }\n  }\n\n  &:hover:not(.active) { border-color: var(--border-strong); }\n}\n\n.auto-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 14px 16px;\n  background: var(--gold-pale);\n  border: 1px solid var(--border-warm);\n  border-radius: var(--radius-md);\n  font-size: 0.84rem;\n  color: var(--gold-warm);\n  line-height: 1.5;\n  margin-top: 16px;\n\n  .material-icons { font-size: 18px; flex-shrink: 0; margin-top: 1px; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Form[_ngcontent-%COMP%]   helpers[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.fg-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n.optional-tag[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--text-dim);\n  font-weight: 300;\n  text-transform: none;\n  letter-spacing: 0;\n}\n\n.field-hint[_ngcontent-%COMP%] { font-size: 0.72rem; color: var(--text-dim); margin-top: 5px; }\n\n.img-preview-sm[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 120px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  border: 1px solid var(--border);\n\n  img { width: 100%; height: 100%; object-fit: cover; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Responsive[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:   960px)[_ngcontent-%COMP%] {\n  .builder-layout { grid-template-columns: 1fr; }\n  .builder-tabs { position: static; flex-direction: row; overflow-x: auto; }\n  .btab { flex-direction: column; gap: 4px; padding: 10px 14px; font-size: 0.7rem; border-bottom: none; border-right: 1px solid var(--border); white-space: nowrap; &:last-child { border-right: none; } }\n  .mode-selector { grid-template-columns: 1fr; }\n  .fg-row { grid-template-columns: 1fr; }\n}\n\n\n\n@media (max-width: 768px) {\n  .builder-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .builder-tabs[_ngcontent-%COMP%] { position: static; flex-direction: row; overflow-x: auto; -webkit-overflow-scrolling: touch; }\n  .btab[_ngcontent-%COMP%] { flex-direction: column; gap: 3px; padding: 10px 12px; font-size: 0.68rem; border-bottom: none; border-right: 1px solid var(--border); white-space: nowrap; &:last-child { border-right: none; } }\n  .section-form[_ngcontent-%COMP%] { padding: 18px; }\n  .sf-header[_ngcontent-%COMP%] { margin-bottom: 16px; padding-bottom: 12px; h3 { font-size: 1.1rem; } }\n  .product-picker[_ngcontent-%COMP%] { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }\n  .mode-selector[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .fg-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .admin-topbar[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 12px; .btn { width: 100%; justify-content: center; } }\n}\n\n@media (max-width: 480px) {\n  .product-picker[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); gap: 8px; }\n  .pick-info[_ngcontent-%COMP%] { padding: 6px; }\n  .pick-name[_ngcontent-%COMP%] { font-size: 0.68rem; }\n  .pick-cat[_ngcontent-%COMP%] { display: none; }\n  .pick-price[_ngcontent-%COMP%] { font-size: 0.75rem; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Hero[_ngcontent-%COMP%]   Card[_ngcontent-%COMP%]   Edit[_ngcontent-%COMP%]   List[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.hero-cards-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 16px; }\n\n.hero-card-edit[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28px 1fr 100px 36px;\n  gap: 14px;\n  align-items: start;\n  padding: 16px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  transition: border-color 0.2s;\n\n  &:hover { border-color: var(--border-strong); }\n}\n\n.hce-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--burgundy-pale);\n  color: var(--burgundy);\n  font-weight: 700;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 6px;\n  flex-shrink: 0;\n}\n\n.hce-fields[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n\n.hce-preview[_ngcontent-%COMP%] {\n  position: relative;\n  height: 90px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n\n  img { width: 100%; height: 100%; object-fit: cover; }\n\n  .hce-label {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 4px 6px;\n    background: rgba(44,24,16,0.7);\n    color: white;\n    font-size: 0.62rem;\n    text-align: center;\n    font-family: var(--font-display);\n  }\n}\n\n.hce-del[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 4px;\n  transition: all 0.2s;\n  flex-shrink: 0;\n\n  .material-icons { font-size: 17px; }\n  &:hover { border-color: var(--error); color: var(--error); background: rgba(192,57,43,0.06); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Clear[_ngcontent-%COMP%]   selection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.clear-sel-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n\n  &:hover { border-color: var(--error); color: var(--error); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Promo[_ngcontent-%COMP%]   banner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   grid[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.promo-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Promo[_ngcontent-%COMP%]   preview[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.promo-preview[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  margin-top: 4px;\n}\n\n.pp-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  min-height: 160px;\n}\n\n.pp-img[_ngcontent-%COMP%] {\n  overflow: hidden;\n  img { width: 100%; height: 100%; object-fit: cover; }\n}\n\n.pp-content[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  background: var(--bg);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.pp-sub[_ngcontent-%COMP%] { font-size: 0.62rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold-warm); }\n.pp-title[_ngcontent-%COMP%] { font-family: var(--font-display); font-size: 1.1rem; color: var(--text); }\n.pp-desc[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--text-muted); }\n.pp-offer[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; margin-top: 5px; }\n.pp-badge[_ngcontent-%COMP%] {\n  background: var(--burgundy);\n  color: white;\n  border-radius: var(--radius-sm);\n  padding: 6px 10px;\n  text-align: center;\n  font-size: 0.62rem;\n  line-height: 1.3;\n  span { font-size: 1.1rem; font-weight: 700; font-family: var(--font-display); }\n}\n.pp-cta[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 6px;\n  padding: 7px 14px;\n  background: var(--burgundy);\n  color: white;\n  border-radius: 3px;\n  font-size: 0.72rem;\n  letter-spacing: 0.08em;\n  font-weight: 500;\n  width: fit-content;\n}\n\n//[_ngcontent-%COMP%]   Responsive[_ngcontent-%COMP%]   additions\n@media[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:   640px)[_ngcontent-%COMP%] {\n  .hero-card-edit { grid-template-columns: 28px 1fr 36px; .hce-preview { display: none; } }\n  .promo-form-grid { grid-template-columns: 1fr; }\n  .pp-inner { grid-template-columns: 100px 1fr; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomepageBuilderComponent, [{
        type: Component,
        args: [{ selector: 'app-homepage-builder', standalone: true, imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule], template: "<div class=\"admin-layout\">\n  <aside class=\"admin-sidebar\">\n    <div class=\"sidebar-logo\">\n      <div class=\"s-logo-inner\"><div class=\"s-logo-mark\">V</div><span class=\"s-logo-text\">Vastra Vaibhav</span></div>\n    </div>\n    <nav class=\"sidebar-nav\">\n      <a routerLink=\"/admin\"            routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\"><span class=\"material-icons\">dashboard</span> Dashboard</a>\n      <a routerLink=\"/admin/orders\"     routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">receipt_long</span> Orders</a>\n      <a routerLink=\"/admin/products\"   routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">inventory_2</span> Products</a>\n      <a routerLink=\"/admin/categories\" routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">category</span> Categories</a>\n      <a routerLink=\"/admin/homepage\"   routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">tune</span> Homepage</a>\n      <a routerLink=\"/admin/users\"      routerLinkActive=\"active\" class=\"nav-item\"><span class=\"material-icons\">group</span> Customers</a>\n      <div class=\"nav-divider\"></div>\n      <a routerLink=\"/\"    class=\"nav-item\"><span class=\"material-icons\">storefront</span> View Store</a>\n      <button class=\"nav-item logout\" (click)=\"auth.logout()\"><span class=\"material-icons\">logout</span> Logout</button>\n    </nav>\n  </aside>\n\n  <div class=\"admin-main\">\n    <div class=\"admin-topbar\">\n      <div>\n        <h1 class=\"admin-page-title\">Homepage Builder</h1>\n        <p class=\"admin-page-sub\">Control what customers see when they visit your store</p>\n      </div>\n      <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"saving()\">\n        <span class=\"material-icons\">{{ saving() ? 'hourglass_top' : 'save' }}</span>\n        {{ saving() ? 'Saving...' : 'Save All Changes' }}\n      </button>\n    </div>\n\n    <div *ngIf=\"loading()\" class=\"loading-placeholder\">Loading configuration...</div>\n\n    <div *ngIf=\"!loading()\" class=\"builder-layout\">\n\n      <!-- \u2500\u2500 Tab Nav \u2500\u2500 -->\n      <nav class=\"builder-tabs\">\n        <button *ngFor=\"let t of tabs\" class=\"btab\" [class.active]=\"activeTab === t.key\" (click)=\"activeTab = t.key\">\n          <span class=\"material-icons\">{{ t.icon }}</span>\n          {{ t.label }}\n        </button>\n      </nav>\n\n      <!-- \u2500\u2500 Tab Panels \u2500\u2500 -->\n      <div class=\"builder-panel\">\n\n        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 ANNOUNCEMENT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n        <div *ngIf=\"activeTab === 'announcement'\" class=\"section-form\">\n          <div class=\"sf-header\">\n            <h3>Announcement Bar</h3>\n            <p>The thin strip at the very top visible to all customers.</p>\n          </div>\n          <div class=\"toggle-row\">\n            <label class=\"toggle-label\">\n              <input type=\"checkbox\" [checked]=\"announcementActive()\"\n                     (change)=\"announcementActive.set($any($event.target).checked)\" class=\"toggle-input\">\n              <span class=\"toggle-slider\"></span>\n              <span>Show announcement bar</span>\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Announcement Text</label>\n            <textarea class=\"form-control\" [value]=\"announcementText()\"\n                      (input)=\"announcementText.set($any($event.target).value)\"\n                      rows=\"2\" placeholder=\"\u2726 Free Shipping above \u20B910,000 ...\"></textarea>\n            <p class=\"field-hint\">Use \u2726 as a decorative separator. Keep it short and punchy.</p>\n          </div>\n          <div class=\"preview-box\" *ngIf=\"announcementActive()\">\n            <div class=\"preview-label\">Preview</div>\n            <div class=\"preview-announce\">{{ announcementText() }}</div>\n          </div>\n        </div>\n\n        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 HERO TEXT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n        <div *ngIf=\"activeTab === 'hero'\" class=\"section-form\">\n          <div class=\"sf-header\">\n            <h3>Hero Section Text</h3>\n            <p>The title, subtitle, and CTA button on the full-screen hero banner.</p>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Hero Title</label>\n            <input class=\"form-control\" [value]=\"heroTitle()\"\n                   (input)=\"heroTitle.set($any($event.target).value)\"\n                   placeholder=\"Where Heritage Meets Haute Couture\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Hero Subtitle</label>\n            <textarea class=\"form-control\" [value]=\"heroSubtitle()\"\n                      (input)=\"heroSubtitle.set($any($event.target).value)\"\n                      rows=\"2\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">CTA Button Text</label>\n            <input class=\"form-control\" [value]=\"heroCTA()\"\n                   (input)=\"heroCTA.set($any($event.target).value)\"\n                   placeholder=\"Explore Collection\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Background Image URL\n              <span class=\"optional-tag\">optional \u2014 uses default if empty</span>\n            </label>\n            <input class=\"form-control\" [value]=\"heroImage()\"\n                   (input)=\"heroImage.set($any($event.target).value)\"\n                   placeholder=\"https://images.unsplash.com/...\">\n            <div class=\"img-preview-sm\" *ngIf=\"heroImage()\">\n              <img [src]=\"heroImage()\" alt=\"Hero background preview\">\n            </div>\n          </div>\n          <div class=\"preview-box hero-preview\">\n            <div class=\"preview-label\">Text Preview</div>\n            <div class=\"hp-title\">{{ heroTitle() }}</div>\n            <div class=\"hp-sub\">{{ heroSubtitle() }}</div>\n            <div class=\"hp-cta\">{{ heroCTA() }} \u2192</div>\n          </div>\n        </div>\n\n        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 HERO SIDE IMAGES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n        <div *ngIf=\"activeTab === 'hero_images'\" class=\"section-form\">\n          <div class=\"sf-header\">\n            <h3>Hero Side Images</h3>\n            <p>The small category cards shown to the right of the hero text. Each card links to its category page.</p>\n          </div>\n\n          <div class=\"hero-cards-list\">\n            <div *ngFor=\"let card of heroSidebarCards(); let i = index\" class=\"hero-card-edit\">\n              <div class=\"hce-num\">{{ i + 1 }}</div>\n              <div class=\"hce-fields\">\n                <div class=\"form-group\">\n                  <label class=\"form-label\">Category Name (links to this category)</label>\n                  <input class=\"form-control\" [value]=\"card.cat\"\n                         (input)=\"updateHeroCard(i, 'cat', $any($event.target).value)\"\n                         placeholder=\"e.g. Banarasi\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\">Image URL</label>\n                  <input class=\"form-control\" [value]=\"card.image\"\n                         (input)=\"updateHeroCard(i, 'image', $any($event.target).value)\"\n                         placeholder=\"https://images.unsplash.com/...\">\n                </div>\n              </div>\n              <div class=\"hce-preview\" *ngIf=\"card.image\">\n                <img [src]=\"card.image\" [alt]=\"card.cat\">\n                <span class=\"hce-label\">{{ card.cat }}</span>\n              </div>\n              <button class=\"hce-del\" (click)=\"removeHeroCard(i)\" title=\"Remove\">\n                <span class=\"material-icons\">delete_outline</span>\n              </button>\n            </div>\n          </div>\n\n          <button class=\"btn btn-ghost btn-sm\" (click)=\"addHeroCard()\" style=\"margin-top:12px\"\n                  [disabled]=\"heroSidebarCards().length >= 4\">\n            <span class=\"material-icons\">add</span>\n            Add Hero Card ({{ heroSidebarCards().length }}/4)\n          </button>\n        </div>\n\n        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 FEATURED PRODUCTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n        <div *ngIf=\"activeTab === 'featured'\" class=\"section-form\">\n          <div class=\"sf-header\">\n            <h3>Featured Products</h3>\n            <p>Hand-pick up to 8 products for the Featured section. If none selected, auto-picks products with the Featured flag.</p>\n          </div>\n\n          <div class=\"selected-count\">\n            <span class=\"material-icons\">star</span>\n            {{ featuredIds().length }} of 8 selected\n            <button *ngIf=\"featuredIds().length > 0\" class=\"clear-sel-btn\" (click)=\"featuredIds.set([])\">\n              Clear all\n            </button>\n          </div>\n\n          <div class=\"product-picker\">\n            <div *ngFor=\"let p of allProducts()\"\n                 class=\"pick-card\"\n                 [class.selected]=\"isFeatured(p._id)\"\n                 (click)=\"toggleFeatured(p._id)\">\n              <div class=\"pick-img\">\n                <img [src]=\"p.images[0]\" [alt]=\"p.name\">\n                <div class=\"pick-check\" *ngIf=\"isFeatured(p._id)\">\n                  <span class=\"material-icons\">check_circle</span>\n                </div>\n              </div>\n              <div class=\"pick-info\">\n                <div class=\"pick-name\">{{ p.name }}</div>\n                <div class=\"pick-cat\">{{ p.category }}</div>\n                <div class=\"pick-price\">{{ ps.formatPrice(p.price) }}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 NEW ARRIVALS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n        <div *ngIf=\"activeTab === 'new_arrivals'\" class=\"section-form\">\n          <div class=\"sf-header\">\n            <h3>New Arrivals</h3>\n            <p>Choose automatic or manual for the New Arrivals section.</p>\n          </div>\n\n          <div class=\"mode-selector\">\n            <label class=\"mode-opt\" [class.active]=\"newArrivalsMode() === 'auto'\">\n              <input type=\"radio\" name=\"naMode\" value=\"auto\"\n                     [checked]=\"newArrivalsMode() === 'auto'\"\n                     (change)=\"newArrivalsMode.set('auto')\">\n              <span class=\"material-icons\">auto_awesome</span>\n              <div>\n                <strong>Automatic</strong>\n                <p>Auto-picks latest products with the \"New Arrival\" flag</p>\n              </div>\n            </label>\n            <label class=\"mode-opt\" [class.active]=\"newArrivalsMode() === 'manual'\">\n              <input type=\"radio\" name=\"naMode\" value=\"manual\"\n                     [checked]=\"newArrivalsMode() === 'manual'\"\n                     (change)=\"newArrivalsMode.set('manual')\">\n              <span class=\"material-icons\">tune</span>\n              <div>\n                <strong>Manual Pick</strong>\n                <p>You choose exactly which products appear</p>\n              </div>\n            </label>\n          </div>\n\n          <div *ngIf=\"newArrivalsMode() === 'manual'\" style=\"margin-top:20px\">\n            <div class=\"selected-count\">\n              <span class=\"material-icons\">fiber_new</span>\n              {{ newArrivalIds().length }} of 8 selected\n              <button *ngIf=\"newArrivalIds().length > 0\" class=\"clear-sel-btn\" (click)=\"newArrivalIds.set([])\">\n                Clear all\n              </button>\n            </div>\n            <div class=\"product-picker\">\n              <div *ngFor=\"let p of allProducts()\"\n                   class=\"pick-card\"\n                   [class.selected]=\"isNewArrival(p._id)\"\n                   (click)=\"toggleNewArrival(p._id)\">\n                <div class=\"pick-img\">\n                  <img [src]=\"p.images[0]\" [alt]=\"p.name\">\n                  <div class=\"pick-check\" *ngIf=\"isNewArrival(p._id)\">\n                    <span class=\"material-icons\">check_circle</span>\n                  </div>\n                </div>\n                <div class=\"pick-info\">\n                  <div class=\"pick-name\">{{ p.name }}</div>\n                  <div class=\"pick-cat\">{{ p.category }}</div>\n                  <div class=\"pick-price\">{{ ps.formatPrice(p.price) }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"newArrivalsMode() === 'auto'\" class=\"auto-note\">\n            <span class=\"material-icons\">info</span>\n            Products flagged as \"New Arrival\" in inventory will automatically appear here.\n          </div>\n        </div>\n\n        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 PROMO BANNER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n        <div *ngIf=\"activeTab === 'promo_banner'\" class=\"section-form\">\n          <div class=\"sf-header\">\n            <h3>Promotional Banner</h3>\n            <p>The editorial two-column banner displayed between Featured and New Arrivals on the homepage.</p>\n          </div>\n\n          <div class=\"toggle-row\">\n            <label class=\"toggle-label\">\n              <input type=\"checkbox\" [checked]=\"promoBannerActive()\"\n                     (change)=\"promoBannerActive.set($any($event.target).checked)\" class=\"toggle-input\">\n              <span class=\"toggle-slider\"></span>\n              <span>Show promo banner</span>\n            </label>\n          </div>\n\n          <div class=\"promo-form-grid\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Section Label <span class=\"optional-tag\">small text above title</span></label>\n              <input class=\"form-control\" [value]=\"promoBannerSubtitle()\"\n                     (input)=\"promoBannerSubtitle.set($any($event.target).value)\"\n                     placeholder=\"Bridal Season 2024\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Main Title</label>\n              <input class=\"form-control\" [value]=\"promoBannerTitle()\"\n                     (input)=\"promoBannerTitle.set($any($event.target).value)\"\n                     placeholder=\"Bridal Season Sale\">\n            </div>\n            <div class=\"form-group\" style=\"grid-column:1/-1\">\n              <label class=\"form-label\">Description</label>\n              <textarea class=\"form-control\" [value]=\"promoBannerText()\"\n                        (input)=\"promoBannerText.set($any($event.target).value)\"\n                        rows=\"2\" placeholder=\"Up to 30% off on our exclusive bridal collection...\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Offer Badge <span class=\"optional-tag\">e.g. 30%</span></label>\n              <input class=\"form-control\" [value]=\"promoBannerBadge()\"\n                     (input)=\"promoBannerBadge.set($any($event.target).value)\"\n                     placeholder=\"30%\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Offer Sub-label</label>\n              <input class=\"form-control\" [value]=\"promoBannerOfferLabel()\"\n                     (input)=\"promoBannerOfferLabel.set($any($event.target).value)\"\n                     placeholder=\"Bridal Season Sale\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Offer Description</label>\n              <input class=\"form-control\" [value]=\"promoBannerOfferSub()\"\n                     (input)=\"promoBannerOfferSub.set($any($event.target).value)\"\n                     placeholder=\"On selected bridal & festive pieces\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">CTA Button Text</label>\n              <input class=\"form-control\" [value]=\"promoBannerCTA()\"\n                     (input)=\"promoBannerCTA.set($any($event.target).value)\"\n                     placeholder=\"Shop Bridal \u2192\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Button Link</label>\n              <input class=\"form-control\" [value]=\"promoBannerLink()\"\n                     (input)=\"promoBannerLink.set($any($event.target).value)\"\n                     placeholder=\"/products?occasion=Wedding\">\n            </div>\n            <div class=\"form-group\" style=\"grid-column:1/-1\">\n              <label class=\"form-label\">Banner Image URL</label>\n              <input class=\"form-control\" [value]=\"promoBannerImage()\"\n                     (input)=\"promoBannerImage.set($any($event.target).value)\"\n                     placeholder=\"https://images.unsplash.com/...\">\n              <div class=\"img-preview-sm\" *ngIf=\"promoBannerImage()\">\n                <img [src]=\"promoBannerImage()\" alt=\"Banner preview\">\n              </div>\n            </div>\n          </div>\n\n          <!-- Live Preview -->\n          <div class=\"promo-preview\" *ngIf=\"promoBannerActive()\">\n            <div class=\"preview-label\">Live Preview</div>\n            <div class=\"pp-inner\">\n              <div class=\"pp-img\">\n                <img [src]=\"promoBannerImage() || 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&q=80'\" alt=\"preview\">\n              </div>\n              <div class=\"pp-content\">\n                <div class=\"pp-sub\">{{ promoBannerSubtitle() }}</div>\n                <div class=\"pp-title\">{{ promoBannerTitle() }}</div>\n                <div class=\"pp-desc\">{{ promoBannerText() }}</div>\n                <div class=\"pp-offer\">\n                  <div class=\"pp-badge\">Up to<br><span>{{ promoBannerBadge() }}</span><br>off</div>\n                  <div>\n                    <strong>{{ promoBannerOfferLabel() }}</strong>\n                    <p style=\"font-size:0.75rem;color:var(--text-muted)\">{{ promoBannerOfferSub() }}</p>\n                  </div>\n                </div>\n                <div class=\"pp-cta\">{{ promoBannerCTA() }}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div><!-- /builder-panel -->\n    </div><!-- /builder-layout -->\n  </div>\n</div>\n", styles: ["// Homepage Builder Component Styles\n\n.s-logo-inner { display:flex; align-items:center; gap:10px; }\n.s-logo-mark { width:32px; height:32px; background:var(--gold-warm); color:white; display:flex; align-items:center; justify-content:center; border-radius:2px; font-family:var(--font-display); font-size:1rem; }\n.s-logo-text { color:rgba(255,255,255,0.85); font-family:var(--font-display); font-size:1rem; }\n\n.loading-placeholder { padding:60px; text-align:center; color:var(--text-muted); }\n\n// \u2500\u2500 Builder Layout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.builder-layout {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n\n// \u2500\u2500 Tab Navigation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.builder-tabs {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  position: sticky;\n  top: 100px;\n  display: flex;\n  flex-direction: column;\n}\n\n.btab {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 16px;\n  background: none;\n  border: none;\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  font-family: var(--font-body);\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  text-align: left;\n  transition: all 0.2s;\n  position: relative;\n\n  .material-icons { font-size: 18px; flex-shrink: 0; }\n\n  &:last-child { border-bottom: none; }\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0; top: 0; bottom: 0;\n    width: 3px;\n    background: var(--burgundy);\n    border-radius: 0 2px 2px 0;\n    opacity: 0;\n    transition: opacity 0.2s;\n  }\n\n  &:hover { background: var(--surface); color: var(--text); &::before { opacity: 0.4; } }\n\n  &.active {\n    background: var(--burgundy-pale);\n    color: var(--burgundy);\n    font-weight: 500;\n    &::before { opacity: 1; }\n  }\n}\n\n// \u2500\u2500 Builder Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.builder-panel {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n\n.section-form { padding: 28px; }\n\n.sf-header {\n  margin-bottom: 24px;\n  padding-bottom: 18px;\n  border-bottom: 1px solid var(--border);\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.3rem;\n    color: var(--text);\n    font-weight: 400;\n    margin-bottom: 5px;\n  }\n\n  p { font-size: 0.84rem; color: var(--text-muted); line-height: 1.5; }\n}\n\n// \u2500\u2500 Toggle Switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.toggle-row { margin-bottom: 20px; }\n\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n.toggle-input {\n  display: none;\n\n  &:checked + .toggle-slider {\n    background: var(--burgundy);\n\n    &::after { transform: translateX(20px); }\n  }\n}\n\n.toggle-slider {\n  position: relative;\n  width: 44px;\n  height: 24px;\n  background: var(--border-strong);\n  border-radius: 100px;\n  transition: background 0.3s;\n  flex-shrink: 0;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    width: 18px;\n    height: 18px;\n    background: white;\n    border-radius: 50%;\n    transition: transform 0.3s;\n    box-shadow: 0 1px 4px rgba(0,0,0,0.2);\n  }\n}\n\n// \u2500\u2500 Preview Boxes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.preview-box {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  margin-top: 20px;\n}\n\n.preview-label {\n  font-size: 0.62rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--gold-warm);\n  font-weight: 600;\n  padding: 8px 16px;\n  background: var(--gold-pale);\n  border-bottom: 1px solid var(--border-warm);\n}\n\n.preview-announce {\n  padding: 10px 16px;\n  font-size: 0.78rem;\n  color: var(--text);\n  text-align: center;\n  background: var(--text);\n  color: rgba(255,255,255,0.8);\n}\n\n.hero-preview { padding: 0; }\n\n.hp-title {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  color: var(--text);\n  padding: 20px 20px 6px;\n}\n\n.hp-sub {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  padding: 0 20px 12px;\n  line-height: 1.6;\n}\n\n.hp-cta {\n  display: inline-block;\n  margin: 0 20px 20px;\n  padding: 10px 20px;\n  background: var(--burgundy);\n  color: white;\n  border-radius: var(--radius-sm);\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\n// \u2500\u2500 Product Picker \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.selected-count {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  margin-bottom: 16px;\n  padding: 10px 14px;\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n\n  .material-icons { font-size: 16px; color: var(--gold-warm); }\n}\n\n.product-picker {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 12px;\n  max-height: 500px;\n  overflow-y: auto;\n  padding: 4px;\n}\n\n.pick-card {\n  border: 2px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover { border-color: var(--border-strong); transform: translateY(-1px); }\n\n  &.selected {\n    border-color: var(--burgundy);\n    box-shadow: 0 0 0 2px rgba(123,30,58,0.15);\n  }\n}\n\n.pick-img {\n  position: relative;\n  aspect-ratio: 3/4;\n  overflow: hidden;\n  background: var(--surface);\n\n  img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }\n  .pick-card:hover & img { transform: scale(1.04); }\n}\n\n.pick-check {\n  position: absolute;\n  inset: 0;\n  background: rgba(123,30,58,0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .material-icons { font-size: 32px; color: white; }\n}\n\n.pick-info { padding: 8px; }\n\n.pick-name {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 2px;\n}\n\n.pick-cat { font-size: 0.62rem; color: var(--gold-warm); text-transform: uppercase; letter-spacing: 0.1em; }\n.pick-price { font-family: var(--font-display); font-size: 0.85rem; color: var(--burgundy); margin-top: 2px; }\n\n// \u2500\u2500 Mode Selector \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.mode-selector {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.mode-opt {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  border: 2px solid var(--border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.2s;\n\n  input[type=\"radio\"] { display: none; }\n\n  .material-icons { font-size: 22px; color: var(--text-muted); flex-shrink: 0; margin-top: 2px; }\n\n  div {\n    strong { display: block; font-size: 0.9rem; color: var(--text); margin-bottom: 3px; }\n    p { font-size: 0.78rem; color: var(--text-muted); line-height: 1.4; }\n  }\n\n  &.active {\n    border-color: var(--burgundy);\n    background: var(--burgundy-pale);\n\n    .material-icons { color: var(--burgundy); }\n    strong { color: var(--burgundy); }\n  }\n\n  &:hover:not(.active) { border-color: var(--border-strong); }\n}\n\n.auto-note {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 14px 16px;\n  background: var(--gold-pale);\n  border: 1px solid var(--border-warm);\n  border-radius: var(--radius-md);\n  font-size: 0.84rem;\n  color: var(--gold-warm);\n  line-height: 1.5;\n  margin-top: 16px;\n\n  .material-icons { font-size: 18px; flex-shrink: 0; margin-top: 1px; }\n}\n\n// \u2500\u2500 Form helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.fg-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n.optional-tag {\n  font-size: 0.68rem;\n  color: var(--text-dim);\n  font-weight: 300;\n  text-transform: none;\n  letter-spacing: 0;\n}\n\n.field-hint { font-size: 0.72rem; color: var(--text-dim); margin-top: 5px; }\n\n.img-preview-sm {\n  margin-top: 10px;\n  height: 120px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  border: 1px solid var(--border);\n\n  img { width: 100%; height: 100%; object-fit: cover; }\n}\n\n// \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media (max-width: 960px) {\n  .builder-layout { grid-template-columns: 1fr; }\n  .builder-tabs { position: static; flex-direction: row; overflow-x: auto; }\n  .btab { flex-direction: column; gap: 4px; padding: 10px 14px; font-size: 0.7rem; border-bottom: none; border-right: 1px solid var(--border); white-space: nowrap; &:last-child { border-right: none; } }\n  .mode-selector { grid-template-columns: 1fr; }\n  .fg-row { grid-template-columns: 1fr; }\n}\n\n/* \u2500\u2500 Additional Mobile Responsive \u2500\u2500 */\n@media (max-width: 768px) {\n  .builder-layout { grid-template-columns: 1fr; }\n  .builder-tabs { position: static; flex-direction: row; overflow-x: auto; -webkit-overflow-scrolling: touch; }\n  .btab { flex-direction: column; gap: 3px; padding: 10px 12px; font-size: 0.68rem; border-bottom: none; border-right: 1px solid var(--border); white-space: nowrap; &:last-child { border-right: none; } }\n  .section-form { padding: 18px; }\n  .sf-header { margin-bottom: 16px; padding-bottom: 12px; h3 { font-size: 1.1rem; } }\n  .product-picker { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }\n  .mode-selector { grid-template-columns: 1fr; }\n  .fg-row { grid-template-columns: 1fr; }\n  .admin-topbar { flex-direction: column; align-items: flex-start; gap: 12px; .btn { width: 100%; justify-content: center; } }\n}\n\n@media (max-width: 480px) {\n  .product-picker { grid-template-columns: repeat(3, 1fr); gap: 8px; }\n  .pick-info { padding: 6px; }\n  .pick-name { font-size: 0.68rem; }\n  .pick-cat { display: none; }\n  .pick-price { font-size: 0.75rem; }\n}\n\n// \u2500\u2500 Hero Card Edit List \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.hero-cards-list { display: flex; flex-direction: column; gap: 16px; }\n\n.hero-card-edit {\n  display: grid;\n  grid-template-columns: 28px 1fr 100px 36px;\n  gap: 14px;\n  align-items: start;\n  padding: 16px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  transition: border-color 0.2s;\n\n  &:hover { border-color: var(--border-strong); }\n}\n\n.hce-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--burgundy-pale);\n  color: var(--burgundy);\n  font-weight: 700;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 6px;\n  flex-shrink: 0;\n}\n\n.hce-fields { display: flex; flex-direction: column; gap: 10px; }\n\n.hce-preview {\n  position: relative;\n  height: 90px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n\n  img { width: 100%; height: 100%; object-fit: cover; }\n\n  .hce-label {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 4px 6px;\n    background: rgba(44,24,16,0.7);\n    color: white;\n    font-size: 0.62rem;\n    text-align: center;\n    font-family: var(--font-display);\n  }\n}\n\n.hce-del {\n  width: 36px;\n  height: 36px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 4px;\n  transition: all 0.2s;\n  flex-shrink: 0;\n\n  .material-icons { font-size: 17px; }\n  &:hover { border-color: var(--error); color: var(--error); background: rgba(192,57,43,0.06); }\n}\n\n// \u2500\u2500 Clear selection button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.clear-sel-btn {\n  margin-left: auto;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-family: var(--font-body);\n  transition: all 0.2s;\n\n  &:hover { border-color: var(--error); color: var(--error); }\n}\n\n// \u2500\u2500 Promo banner form grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.promo-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n// \u2500\u2500 Promo preview \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.promo-preview {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  margin-top: 4px;\n}\n\n.pp-inner {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  min-height: 160px;\n}\n\n.pp-img {\n  overflow: hidden;\n  img { width: 100%; height: 100%; object-fit: cover; }\n}\n\n.pp-content {\n  padding: 16px 18px;\n  background: var(--bg);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.pp-sub { font-size: 0.62rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold-warm); }\n.pp-title { font-family: var(--font-display); font-size: 1.1rem; color: var(--text); }\n.pp-desc { font-size: 0.78rem; color: var(--text-muted); }\n.pp-offer { display: flex; align-items: center; gap: 10px; margin-top: 5px; }\n.pp-badge {\n  background: var(--burgundy);\n  color: white;\n  border-radius: var(--radius-sm);\n  padding: 6px 10px;\n  text-align: center;\n  font-size: 0.62rem;\n  line-height: 1.3;\n  span { font-size: 1.1rem; font-weight: 700; font-family: var(--font-display); }\n}\n.pp-cta {\n  display: inline-block;\n  margin-top: 6px;\n  padding: 7px 14px;\n  background: var(--burgundy);\n  color: white;\n  border-radius: 3px;\n  font-size: 0.72rem;\n  letter-spacing: 0.08em;\n  font-weight: 500;\n  width: fit-content;\n}\n\n// Responsive additions\n@media (max-width: 640px) {\n  .hero-card-edit { grid-template-columns: 28px 1fr 36px; .hce-preview { display: none; } }\n  .promo-form-grid { grid-template-columns: 1fr; }\n  .pp-inner { grid-template-columns: 100px 1fr; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomepageBuilderComponent, { className: "HomepageBuilderComponent", filePath: "src\\app\\components\\admin\\homepage-builder\\homepage-builder.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=homepage-builder.component.js.map