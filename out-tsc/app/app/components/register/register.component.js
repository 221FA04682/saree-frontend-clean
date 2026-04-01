import { Component, inject, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function RegisterComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "span", 20);
    i0.ɵɵtext(2, "error_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.error(), "");
} }
export class RegisterComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.toast = inject(ToastService);
        this.router = inject(Router);
        this.name = '';
        this.email = '';
        this.phone = '';
        this.password = '';
        this.showPass = signal(false);
        this.loading = signal(false);
        this.error = signal('');
    }
    togglePass() { this.showPass.update(v => !v); }
    onRegister() {
        if (this.password.length < 6) {
            this.error.set('Password must be at least 6 characters.');
            return;
        }
        this.loading.set(true);
        this.error.set('');
        this.auth.register(this.name, this.email, this.password, this.phone).subscribe({
            next: (r) => {
                this.loading.set(false);
                this.toast.success('Account created! Welcome to Vastra Vaibhav 🎉');
                this.router.navigate(['/']);
            },
            error: (e) => { this.loading.set(false); this.error.set(e.message); },
        });
    }
    static { this.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["app-register"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 54, vars: 9, consts: [[1, "auth-page"], [1, "auth-visual"], ["src", "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=900&q=85", "alt", "Saree"], [1, "auth-visual-overlay"], [2, "font-family", "var(--font-display)", "font-size", "2rem", "color", "white", "margin-bottom", "12px"], [2, "font-family", "var(--font-display)", "font-size", "1.3rem", "color", "rgba(255,255,255,0.85)", "font-style", "italic", "line-height", "1.5"], [1, "auth-form-side"], [1, "auth-card"], ["routerLink", "/", 1, "auth-brand"], [1, "auth-title"], [1, "auth-sub"], [3, "ngSubmit"], [1, "form-group"], [1, "form-label"], ["type", "text", "name", "name", "placeholder", "Your full name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "your@email.com", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "10-digit mobile number", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "pass-wrap"], ["name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "minlength", "6", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "pass-eye", 3, "click"], [1, "material-icons"], ["class", "auth-error", 4, "ngIf"], [2, "font-size", "0.72rem", "color", "var(--text-muted)", "margin-bottom", "12px"], ["href", "#", 2, "color", "var(--burgundy)"], ["type", "submit", 1, "btn", "btn-primary", 2, "width", "100%", "justify-content", "center", 3, "disabled"], [1, "auth-switch"], ["routerLink", "/login"], [1, "auth-error"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
            i0.ɵɵtext(5, "Join Our Story");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 5);
            i0.ɵɵtext(7, "\"Every woman deserves");
            i0.ɵɵelement(8, "br");
            i0.ɵɵtext(9, "to feel like royalty.\"");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 6)(11, "div", 7)(12, "a", 8);
            i0.ɵɵtext(13, "\u2726 Vastra Vaibhav");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "h1", 9);
            i0.ɵɵtext(15, "Create Account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p", 10);
            i0.ɵɵtext(17, "Join thousands celebrating Indian fashion");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "form", 11);
            i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_18_listener() { return ctx.onRegister(); });
            i0.ɵɵelementStart(19, "div", 12)(20, "label", 13);
            i0.ɵɵtext(21, "Full Name *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "input", 14);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.name, $event) || (ctx.name = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 12)(24, "label", 13);
            i0.ɵɵtext(25, "Email Address *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_26_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 12)(28, "label", 13);
            i0.ɵɵtext(29, "Phone Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "input", 16);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_30_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.phone, $event) || (ctx.phone = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "div", 12)(32, "label", 13);
            i0.ɵɵtext(33, "Password * (min 6 characters)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 17)(35, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_35_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "button", 19);
            i0.ɵɵlistener("click", function RegisterComponent_Template_button_click_36_listener() { return ctx.togglePass(); });
            i0.ɵɵelementStart(37, "span", 20);
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(39, RegisterComponent_div_39_Template, 4, 1, "div", 21);
            i0.ɵɵelementStart(40, "p", 22);
            i0.ɵɵtext(41, "By registering, you agree to our ");
            i0.ɵɵelementStart(42, "a", 23);
            i0.ɵɵtext(43, "Terms");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(44, " and ");
            i0.ɵɵelementStart(45, "a", 23);
            i0.ɵɵtext(46, "Privacy Policy");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(47, ".");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "button", 24);
            i0.ɵɵtext(49);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "p", 25);
            i0.ɵɵtext(51, "Already have an account? ");
            i0.ɵɵelementStart(52, "a", 26);
            i0.ɵɵtext(53, "Sign In");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(22);
            i0.ɵɵtwoWayProperty("ngModel", ctx.name);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.phone);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("type", ctx.showPass() ? "text" : "password");
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.showPass() ? "visibility_off" : "visibility");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error());
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.loading() ? "Creating Account..." : "Create Account", " ");
        } }, dependencies: [RouterLink, CommonModule, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.NgModel, i2.NgForm], styles: ["//[_ngcontent-%COMP%]   Register[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\r\n//[_ngcontent-%COMP%]   Shares[_ngcontent-%COMP%]   structure[_ngcontent-%COMP%]   with[_ngcontent-%COMP%]   login[_ngcontent-%COMP%]   -[_ngcontent-%COMP%]   same[_ngcontent-%COMP%]   auth[_ngcontent-%COMP%]   layout[_ngcontent-%COMP%]   pattern\r\n\r\n.auth-page[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.auth-visual[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n  }\r\n}\r\n\r\n.auth-visual-overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  inset: 0;\r\n  background: linear-gradient(\r\n    to top,\r\n    rgba(44, 24, 16, 0.88) 0%,\r\n    rgba(44, 24, 16, 0.3) 55%,\r\n    transparent 100%\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  padding: 52px 48px;\r\n}\r\n\r\n.auth-form-side[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 48px 40px;\r\n  background: var(--bg);\r\n  overflow-y: auto;\r\n}\r\n\r\n.auth-card[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 428px;\r\n}\r\n\r\n.auth-brand[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  font-family: var(--font-display);\r\n  font-size: 1.1rem;\r\n  color: var(--burgundy);\r\n  text-decoration: none;\r\n  margin-bottom: 32px;\r\n  letter-spacing: 0.03em;\r\n  transition: opacity 0.2s;\r\n\r\n  &:hover { opacity: 0.8; }\r\n}\r\n\r\n.auth-title[_ngcontent-%COMP%] {\r\n  font-family: var(--font-display);\r\n  font-size: 2.2rem;\r\n  color: var(--text);\r\n  font-weight: 400;\r\n  margin-bottom: 6px;\r\n  line-height: 1.1;\r\n}\r\n\r\n.auth-sub[_ngcontent-%COMP%] {\r\n  color: var(--text-muted);\r\n  font-size: 0.9rem;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n//[_ngcontent-%COMP%]   Password[_ngcontent-%COMP%]   field\r\n.pass-wrap[_ngcontent-%COMP%] {\r\n  position: relative;\r\n\r\n  .form-control { padding-right: 46px; }\r\n}\r\n\r\n.pass-eye[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 12px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: var(--text-dim);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 28px;\r\n  height: 28px;\r\n  border-radius: 50%;\r\n  transition: all 0.2s;\r\n\r\n  .material-icons { font-size: 18px; }\r\n  &:hover { color: var(--burgundy); background: var(--burgundy-pale); }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   Error\r\n.auth-error[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n  background: rgba(192, 57, 43, 0.07);\r\n  border: 1px solid rgba(192, 57, 43, 0.2);\r\n  border-radius: var(--radius-md);\r\n  padding: 12px 14px;\r\n  color: var(--error);\r\n  font-size: 0.84rem;\r\n  margin-bottom: 16px;\r\n  line-height: 1.5;\r\n\r\n  .material-icons { font-size: 17px; flex-shrink: 0; margin-top: 1px; }\r\n}\r\n\r\n//[_ngcontent-%COMP%]   Footer\r\n.auth-switch[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 0.875rem;\r\n  color: var(--text-muted);\r\n  margin-top: 24px;\r\n\r\n  a {\r\n    color: var(--burgundy);\r\n    font-weight: 500;\r\n    text-decoration: none;\r\n    &:hover { text-decoration: underline; }\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .auth-page[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .auth-visual[_ngcontent-%COMP%] { display: none; }\r\n  .auth-form-side[_ngcontent-%COMP%] { padding: 40px 24px; min-height: 100vh; }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .auth-form-side[_ngcontent-%COMP%] { padding: 32px 16px; }\r\n  .auth-title[_ngcontent-%COMP%] { font-size: 1.8rem; }\r\n}\r\n\r\n\n\r\n@media (max-width: 480px) {\r\n  .auth-form-side[_ngcontent-%COMP%] { padding: 24px 16px; justify-content: flex-start; padding-top: 40px; }\r\n  .auth-title[_ngcontent-%COMP%] { font-size: 1.7rem; }\r\n  .auth-brand[_ngcontent-%COMP%] { margin-bottom: 20px; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{ selector: 'app-register', standalone: true, imports: [RouterLink, CommonModule, FormsModule], template: "<div class=\"auth-page\">\r\n      <div class=\"auth-visual\">\r\n        <img src=\"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=900&q=85\" alt=\"Saree\">\r\n        <div class=\"auth-visual-overlay\">\r\n          <div style=\"font-family:var(--font-display);font-size:2rem;color:white;margin-bottom:12px\">Join Our Story</div>\r\n          <p style=\"font-family:var(--font-display);font-size:1.3rem;color:rgba(255,255,255,0.85);font-style:italic;line-height:1.5\">\"Every woman deserves<br>to feel like royalty.\"</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"auth-form-side\">\r\n        <div class=\"auth-card\">\r\n          <a routerLink=\"/\" class=\"auth-brand\">\u2726 Vastra Vaibhav</a>\r\n          <h1 class=\"auth-title\">Create Account</h1>\r\n          <p class=\"auth-sub\">Join thousands celebrating Indian fashion</p>\r\n\r\n          <form (ngSubmit)=\"onRegister()\">\r\n            <div class=\"form-group\"><label class=\"form-label\">Full Name *</label><input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Your full name\" required></div>\r\n            <div class=\"form-group\"><label class=\"form-label\">Email Address *</label><input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"your@email.com\" required></div>\r\n            <div class=\"form-group\"><label class=\"form-label\">Phone Number</label><input type=\"tel\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"10-digit mobile number\"></div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">Password * (min 6 characters)</label>\r\n              <div class=\"pass-wrap\">\r\n                <input [type]=\"showPass()?'text':'password'\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\" required minlength=\"6\">\r\n                <button type=\"button\" class=\"pass-eye\" (click)=\"togglePass()\">\r\n                  <span class=\"material-icons\">{{ showPass()?'visibility_off':'visibility' }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"error()\" class=\"auth-error\"><span class=\"material-icons\">error_outline</span> {{ error() }}</div>\r\n            <p style=\"font-size:0.72rem;color:var(--text-muted);margin-bottom:12px\">By registering, you agree to our <a href=\"#\" style=\"color:var(--burgundy)\">Terms</a> and <a href=\"#\" style=\"color:var(--burgundy)\">Privacy Policy</a>.</p>\r\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"width:100%;justify-content:center\" [disabled]=\"loading()\">\r\n              {{ loading() ? 'Creating Account...' : 'Create Account' }}\r\n            </button>\r\n          </form>\r\n\r\n          <p class=\"auth-switch\">Already have an account? <a routerLink=\"/login\">Sign In</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n", styles: ["// Register Component Styles\r\n// Shares structure with login - same auth layout pattern\r\n\r\n.auth-page {\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.auth-visual {\r\n  position: relative;\r\n  overflow: hidden;\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n  }\r\n}\r\n\r\n.auth-visual-overlay {\r\n  position: absolute;\r\n  inset: 0;\r\n  background: linear-gradient(\r\n    to top,\r\n    rgba(44, 24, 16, 0.88) 0%,\r\n    rgba(44, 24, 16, 0.3) 55%,\r\n    transparent 100%\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  padding: 52px 48px;\r\n}\r\n\r\n.auth-form-side {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 48px 40px;\r\n  background: var(--bg);\r\n  overflow-y: auto;\r\n}\r\n\r\n.auth-card {\r\n  width: 100%;\r\n  max-width: 428px;\r\n}\r\n\r\n.auth-brand {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  font-family: var(--font-display);\r\n  font-size: 1.1rem;\r\n  color: var(--burgundy);\r\n  text-decoration: none;\r\n  margin-bottom: 32px;\r\n  letter-spacing: 0.03em;\r\n  transition: opacity 0.2s;\r\n\r\n  &:hover { opacity: 0.8; }\r\n}\r\n\r\n.auth-title {\r\n  font-family: var(--font-display);\r\n  font-size: 2.2rem;\r\n  color: var(--text);\r\n  font-weight: 400;\r\n  margin-bottom: 6px;\r\n  line-height: 1.1;\r\n}\r\n\r\n.auth-sub {\r\n  color: var(--text-muted);\r\n  font-size: 0.9rem;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n// Password field\r\n.pass-wrap {\r\n  position: relative;\r\n\r\n  .form-control { padding-right: 46px; }\r\n}\r\n\r\n.pass-eye {\r\n  position: absolute;\r\n  right: 12px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: var(--text-dim);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 28px;\r\n  height: 28px;\r\n  border-radius: 50%;\r\n  transition: all 0.2s;\r\n\r\n  .material-icons { font-size: 18px; }\r\n  &:hover { color: var(--burgundy); background: var(--burgundy-pale); }\r\n}\r\n\r\n// Error\r\n.auth-error {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n  background: rgba(192, 57, 43, 0.07);\r\n  border: 1px solid rgba(192, 57, 43, 0.2);\r\n  border-radius: var(--radius-md);\r\n  padding: 12px 14px;\r\n  color: var(--error);\r\n  font-size: 0.84rem;\r\n  margin-bottom: 16px;\r\n  line-height: 1.5;\r\n\r\n  .material-icons { font-size: 17px; flex-shrink: 0; margin-top: 1px; }\r\n}\r\n\r\n// Footer\r\n.auth-switch {\r\n  text-align: center;\r\n  font-size: 0.875rem;\r\n  color: var(--text-muted);\r\n  margin-top: 24px;\r\n\r\n  a {\r\n    color: var(--burgundy);\r\n    font-weight: 500;\r\n    text-decoration: none;\r\n    &:hover { text-decoration: underline; }\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .auth-page { grid-template-columns: 1fr; }\r\n  .auth-visual { display: none; }\r\n  .auth-form-side { padding: 40px 24px; min-height: 100vh; }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .auth-form-side { padding: 32px 16px; }\r\n  .auth-title { font-size: 1.8rem; }\r\n}\r\n\r\n/* \u2500\u2500 Additional Mobile Responsive \u2500\u2500 */\r\n@media (max-width: 480px) {\r\n  .auth-form-side { padding: 24px 16px; justify-content: flex-start; padding-top: 40px; }\r\n  .auth-title { font-size: 1.7rem; }\r\n  .auth-brand { margin-bottom: 20px; }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\components\\register\\register.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=register.component.js.map