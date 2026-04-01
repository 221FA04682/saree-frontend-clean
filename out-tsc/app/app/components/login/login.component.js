import { Component, inject, signal } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function LoginComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "span", 24);
    i0.ɵɵtext(2, "error_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.error(), " ");
} }
export class LoginComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.toast = inject(ToastService);
        this.router = inject(Router);
        this.route = inject(ActivatedRoute);
        this.email = '';
        this.password = '';
        this.showPass = signal(false);
        this.loading = signal(false);
        this.error = signal('');
    }
    togglePass() { this.showPass.update(v => !v); }
    fillAdmin() { this.email = 'admin@vastrav.com'; this.password = 'Admin@123'; }
    fillUser() { this.email = 'priya@example.com'; this.password = 'User@123'; }
    onLogin() {
        if (!this.email || !this.password) {
            this.error.set('Please enter email and password.');
            return;
        }
        this.loading.set(true);
        this.error.set('');
        this.auth.login(this.email, this.password).subscribe({
            next: (r) => {
                this.loading.set(false);
                this.toast.success(r.message);
                // Admin always goes to admin panel, never to user pages
                if (this.auth.isAdmin()) {
                    this.router.navigate(['/admin']);
                }
                else {
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigate([returnUrl]);
                }
            },
            error: (e) => { this.loading.set(false); this.error.set(e.message); },
        });
    }
    static { this.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 65, vars: 7, consts: [[1, "auth-page"], [1, "auth-visual"], ["src", "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85", "alt", "Heritage Saree"], [1, "auth-visual-overlay"], [2, "font-family", "var(--font-display)", "font-size", "2rem", "color", "white", "margin-bottom", "12px"], [2, "font-family", "var(--font-display)", "font-size", "1.3rem", "color", "rgba(255,255,255,0.85)", "font-style", "italic", "line-height", "1.5"], [1, "auth-form-side"], [1, "auth-card"], ["routerLink", "/", 1, "auth-brand"], [1, "auth-title"], [1, "auth-sub"], [1, "demo-box"], [1, "demo-row"], [2, "font-size", "0.65rem", "color", "var(--gold-warm)", "margin-left", "4px"], [3, "click"], [3, "ngSubmit"], [1, "form-group"], [1, "form-label"], ["type", "email", "name", "email", "placeholder", "your@email.com", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-label", 2, "display", "flex", "justify-content", "space-between"], ["href", "#", 2, "font-size", "0.72rem", "color", "var(--burgundy)"], [1, "pass-wrap"], ["name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "pass-eye", 3, "click"], [1, "material-icons"], ["class", "auth-error", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 2, "width", "100%", "justify-content", "center", "margin-top", "8px", 3, "disabled"], [1, "auth-switch"], ["routerLink", "/register"], [1, "auth-error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
            i0.ɵɵtext(5, "Vastra Vaibhav");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 5);
            i0.ɵɵtext(7, "\"Draped in heritage,");
            i0.ɵɵelement(8, "br");
            i0.ɵɵtext(9, "adorned in elegance.\"");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 6)(11, "div", 7)(12, "a", 8);
            i0.ɵɵtext(13, "\u2726 Vastra Vaibhav");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "h1", 9);
            i0.ɵɵtext(15, "Welcome Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p", 10);
            i0.ɵɵtext(17, "Sign in to continue your saree journey");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 11)(19, "h5");
            i0.ɵɵtext(20, "Demo Credentials");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 12)(22, "span");
            i0.ɵɵtext(23, "Admin:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "code");
            i0.ɵɵtext(25, "admin@vastrav.com");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " / ");
            i0.ɵɵelementStart(27, "code");
            i0.ɵɵtext(28, "Admin@123");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "span", 13);
            i0.ɵɵtext(30, "\u2192 Admin Panel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "button", 14);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_31_listener() { return ctx.fillAdmin(); });
            i0.ɵɵtext(32, "Use");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "div", 12)(34, "span");
            i0.ɵɵtext(35, "User:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "code");
            i0.ɵɵtext(37, "priya@example.com");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(38, " / ");
            i0.ɵɵelementStart(39, "code");
            i0.ɵɵtext(40, "User@123");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "button", 14);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_41_listener() { return ctx.fillUser(); });
            i0.ɵɵtext(42, "Use");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "form", 15);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_43_listener() { return ctx.onLogin(); });
            i0.ɵɵelementStart(44, "div", 16)(45, "label", 17);
            i0.ɵɵtext(46, "Email Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_47_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "div", 16)(49, "div", 19);
            i0.ɵɵtext(50, " Password ");
            i0.ɵɵelementStart(51, "a", 20);
            i0.ɵɵtext(52, "Forgot?");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(53, "div", 21)(54, "input", 22);
            i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_54_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "button", 23);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_55_listener() { return ctx.togglePass(); });
            i0.ɵɵelementStart(56, "span", 24);
            i0.ɵɵtext(57);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(58, LoginComponent_div_58_Template, 4, 1, "div", 25);
            i0.ɵɵelementStart(59, "button", 26);
            i0.ɵɵtext(60);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(61, "p", 27);
            i0.ɵɵtext(62, "Don't have an account? ");
            i0.ɵɵelementStart(63, "a", 28);
            i0.ɵɵtext(64, "Create one");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(47);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("type", ctx.showPass() ? "text" : "password");
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.showPass() ? "visibility_off" : "visibility");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error());
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.loading() ? "Signing In..." : "Sign In", " ");
        } }, dependencies: [RouterLink, CommonModule, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.NgModel, i2.NgForm], styles: ["//[_ngcontent-%COMP%]   Login[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Visual[_ngcontent-%COMP%]   panel[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.auth-visual[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center top;\n  }\n}\n\n.auth-visual-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    to top,\n    rgba(44, 24, 16, 0.88) 0%,\n    rgba(44, 24, 16, 0.35) 55%,\n    rgba(44, 24, 16, 0.1) 100%\n  );\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 52px 48px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Form[_ngcontent-%COMP%]   side[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.auth-form-side[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 40px;\n  background: var(--bg);\n  overflow-y: auto;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 428px;\n}\n\n.auth-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: var(--burgundy);\n  text-decoration: none;\n  margin-bottom: 32px;\n  letter-spacing: 0.03em;\n  transition: opacity 0.2s;\n\n  &:hover { opacity: 0.8; }\n}\n\n.auth-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2.2rem;\n  color: var(--text);\n  font-weight: 400;\n  margin-bottom: 6px;\n  line-height: 1.1;\n}\n\n.auth-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin-bottom: 28px;\n  line-height: 1.5;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Demo[_ngcontent-%COMP%]   credentials[_ngcontent-%COMP%]   box[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.demo-box[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--gold-pale) 0%, rgba(253,246,227,0.5) 100%);\n  border: 1px solid var(--border-warm);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  margin-bottom: 28px;\n\n  h5 {\n    font-size: 0.62rem;\n    letter-spacing: 0.2em;\n    text-transform: uppercase;\n    color: var(--gold-warm);\n    font-family: var(--font-body);\n    font-weight: 700;\n    margin-bottom: 12px;\n  }\n}\n\n.demo-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n\n  &:last-child { margin-bottom: 0; }\n\n  span { flex-shrink: 0; font-weight: 500; color: var(--text); }\n\n  code {\n    background: white;\n    padding: 2px 8px;\n    border-radius: 3px;\n    font-size: 0.7rem;\n    color: var(--burgundy);\n    border: 1px solid var(--border);\n    font-family: 'Courier New', monospace;\n    letter-spacing: 0.02em;\n  }\n\n  button {\n    margin-left: auto;\n    padding: 3px 12px;\n    background: var(--burgundy);\n    color: white;\n    border: none;\n    border-radius: 3px;\n    font-size: 0.7rem;\n    font-weight: 600;\n    cursor: pointer;\n    letter-spacing: 0.06em;\n    transition: all 0.2s;\n    font-family: var(--font-body);\n\n    &:hover { background: var(--burgundy-light); transform: translateY(-1px); }\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Password[_ngcontent-%COMP%]   field[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.pass-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.pass-wrap[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 46px;\n}\n\n.pass-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  transition: all 0.2s;\n\n  .material-icons { font-size: 18px; }\n\n  &:hover {\n    color: var(--burgundy);\n    background: var(--burgundy-pale);\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Error[_ngcontent-%COMP%]   message[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.auth-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(192, 57, 43, 0.07);\n  border: 1px solid rgba(192, 57, 43, 0.2);\n  border-radius: var(--radius-md);\n  padding: 12px 14px;\n  color: var(--error);\n  font-size: 0.84rem;\n  margin-bottom: 16px;\n  line-height: 1.5;\n\n  .material-icons { font-size: 17px; flex-shrink: 0; margin-top: 1px; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Footer[_ngcontent-%COMP%]   link[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.auth-switch[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin-top: 24px;\n\n  a {\n    color: var(--burgundy);\n    font-weight: 500;\n    text-decoration: none;\n\n    &:hover { text-decoration: underline; }\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Responsive[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:   900px)[_ngcontent-%COMP%] {\n  .auth-page { grid-template-columns: 1fr; }\n  .auth-visual { display: none; }\n  .auth-form-side { padding: 40px 24px; min-height: 100vh; }\n}\n\n@media (max-width: 480px) {\n  .auth-form-side[_ngcontent-%COMP%] { padding: 32px 16px; }\n  .auth-title[_ngcontent-%COMP%] { font-size: 1.8rem; }\n}\n\n\n\n@media (max-width: 480px) {\n  .auth-form-side[_ngcontent-%COMP%] { padding: 24px 16px; justify-content: flex-start; padding-top: 40px; }\n  .auth-title[_ngcontent-%COMP%] { font-size: 1.7rem; }\n  .auth-brand[_ngcontent-%COMP%] { margin-bottom: 20px; }\n  .demo-box[_ngcontent-%COMP%] { padding: 12px; }\n  .demo-row[_ngcontent-%COMP%] { flex-wrap: wrap; gap: 4px; button { margin-left: 0; margin-top: 4px; } }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [RouterLink, CommonModule, FormsModule], template: "<div class=\"auth-page\">\r\n      <div class=\"auth-visual\">\r\n        <img src=\"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85\" alt=\"Heritage Saree\">\r\n        <div class=\"auth-visual-overlay\">\r\n          <div style=\"font-family:var(--font-display);font-size:2rem;color:white;margin-bottom:12px\">Vastra Vaibhav</div>\r\n          <p style=\"font-family:var(--font-display);font-size:1.3rem;color:rgba(255,255,255,0.85);font-style:italic;line-height:1.5\">\"Draped in heritage,<br>adorned in elegance.\"</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"auth-form-side\">\r\n        <div class=\"auth-card\">\r\n          <a routerLink=\"/\" class=\"auth-brand\">\u2726 Vastra Vaibhav</a>\r\n          <h1 class=\"auth-title\">Welcome Back</h1>\r\n          <p class=\"auth-sub\">Sign in to continue your saree journey</p>\r\n\r\n          <div class=\"demo-box\">\r\n            <h5>Demo Credentials</h5>\r\n            <div class=\"demo-row\"><span>Admin:</span><code>admin&#64;vastrav.com</code> / <code>Admin&#64;123</code> <span style=\"font-size:0.65rem;color:var(--gold-warm);margin-left:4px\">\u2192 Admin Panel</span><button (click)=\"fillAdmin()\">Use</button></div>\r\n            <div class=\"demo-row\"><span>User:</span><code>priya&#64;example.com</code> / <code>User&#64;123</code><button (click)=\"fillUser()\">Use</button></div>\r\n          </div>\r\n\r\n          <form (ngSubmit)=\"onLogin()\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">Email Address</label>\r\n              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"your@email.com\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"form-label\" style=\"display:flex;justify-content:space-between\">\r\n                Password <a href=\"#\" style=\"font-size:0.72rem;color:var(--burgundy)\">Forgot?</a>\r\n              </div>\r\n              <div class=\"pass-wrap\">\r\n                <input [type]=\"showPass()?'text':'password'\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\" required>\r\n                <button type=\"button\" class=\"pass-eye\" (click)=\"togglePass()\">\r\n                  <span class=\"material-icons\">{{ showPass()?'visibility_off':'visibility' }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"error()\" class=\"auth-error\">\r\n              <span class=\"material-icons\">error_outline</span> {{ error() }}\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"width:100%;justify-content:center;margin-top:8px\" [disabled]=\"loading()\">\r\n              {{ loading() ? 'Signing In...' : 'Sign In' }}\r\n            </button>\r\n          </form>\r\n\r\n          <p class=\"auth-switch\">Don't have an account? <a routerLink=\"/register\">Create one</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n", styles: ["// Login Component Styles\n\n.auth-page {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n// \u2500\u2500 Visual panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.auth-visual {\n  position: relative;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center top;\n  }\n}\n\n.auth-visual-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    to top,\n    rgba(44, 24, 16, 0.88) 0%,\n    rgba(44, 24, 16, 0.35) 55%,\n    rgba(44, 24, 16, 0.1) 100%\n  );\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 52px 48px;\n}\n\n// \u2500\u2500 Form side \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.auth-form-side {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 40px;\n  background: var(--bg);\n  overflow-y: auto;\n}\n\n.auth-card {\n  width: 100%;\n  max-width: 428px;\n}\n\n.auth-brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: var(--burgundy);\n  text-decoration: none;\n  margin-bottom: 32px;\n  letter-spacing: 0.03em;\n  transition: opacity 0.2s;\n\n  &:hover { opacity: 0.8; }\n}\n\n.auth-title {\n  font-family: var(--font-display);\n  font-size: 2.2rem;\n  color: var(--text);\n  font-weight: 400;\n  margin-bottom: 6px;\n  line-height: 1.1;\n}\n\n.auth-sub {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin-bottom: 28px;\n  line-height: 1.5;\n}\n\n// \u2500\u2500 Demo credentials box \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.demo-box {\n  background: linear-gradient(135deg, var(--gold-pale) 0%, rgba(253,246,227,0.5) 100%);\n  border: 1px solid var(--border-warm);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  margin-bottom: 28px;\n\n  h5 {\n    font-size: 0.62rem;\n    letter-spacing: 0.2em;\n    text-transform: uppercase;\n    color: var(--gold-warm);\n    font-family: var(--font-body);\n    font-weight: 700;\n    margin-bottom: 12px;\n  }\n}\n\n.demo-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n\n  &:last-child { margin-bottom: 0; }\n\n  span { flex-shrink: 0; font-weight: 500; color: var(--text); }\n\n  code {\n    background: white;\n    padding: 2px 8px;\n    border-radius: 3px;\n    font-size: 0.7rem;\n    color: var(--burgundy);\n    border: 1px solid var(--border);\n    font-family: 'Courier New', monospace;\n    letter-spacing: 0.02em;\n  }\n\n  button {\n    margin-left: auto;\n    padding: 3px 12px;\n    background: var(--burgundy);\n    color: white;\n    border: none;\n    border-radius: 3px;\n    font-size: 0.7rem;\n    font-weight: 600;\n    cursor: pointer;\n    letter-spacing: 0.06em;\n    transition: all 0.2s;\n    font-family: var(--font-body);\n\n    &:hover { background: var(--burgundy-light); transform: translateY(-1px); }\n  }\n}\n\n// \u2500\u2500 Password field \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.pass-wrap {\n  position: relative;\n}\n\n.pass-wrap .form-control {\n  padding-right: 46px;\n}\n\n.pass-eye {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  transition: all 0.2s;\n\n  .material-icons { font-size: 18px; }\n\n  &:hover {\n    color: var(--burgundy);\n    background: var(--burgundy-pale);\n  }\n}\n\n// \u2500\u2500 Error message \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.auth-error {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(192, 57, 43, 0.07);\n  border: 1px solid rgba(192, 57, 43, 0.2);\n  border-radius: var(--radius-md);\n  padding: 12px 14px;\n  color: var(--error);\n  font-size: 0.84rem;\n  margin-bottom: 16px;\n  line-height: 1.5;\n\n  .material-icons { font-size: 17px; flex-shrink: 0; margin-top: 1px; }\n}\n\n// \u2500\u2500 Footer link \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.auth-switch {\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin-top: 24px;\n\n  a {\n    color: var(--burgundy);\n    font-weight: 500;\n    text-decoration: none;\n\n    &:hover { text-decoration: underline; }\n  }\n}\n\n// \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@media (max-width: 900px) {\n  .auth-page { grid-template-columns: 1fr; }\n  .auth-visual { display: none; }\n  .auth-form-side { padding: 40px 24px; min-height: 100vh; }\n}\n\n@media (max-width: 480px) {\n  .auth-form-side { padding: 32px 16px; }\n  .auth-title { font-size: 1.8rem; }\n}\n\n/* \u2500\u2500 Additional Mobile Responsive \u2500\u2500 */\n@media (max-width: 480px) {\n  .auth-form-side { padding: 24px 16px; justify-content: flex-start; padding-top: 40px; }\n  .auth-title { font-size: 1.7rem; }\n  .auth-brand { margin-bottom: 20px; }\n  .demo-box { padding: 12px; }\n  .demo-row { flex-wrap: wrap; gap: 4px; button { margin-left: 0; margin-top: 4px; } }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\components\\login\\login.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=login.component.js.map