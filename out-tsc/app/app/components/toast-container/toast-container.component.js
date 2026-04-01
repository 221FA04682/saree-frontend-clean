import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ToastContainerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "span", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 5);
    i0.ɵɵlistener("click", function ToastContainerComponent_div_1_Template_button_click_5_listener() { const toast_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toastService.remove(toast_r2.id)); });
    i0.ɵɵelementStart(6, "span", 6);
    i0.ɵɵtext(7, "close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    i0.ɵɵclassMap("toast-" + toast_r2.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", toast_r2.type === "success" ? "check_circle" : toast_r2.type === "error" ? "error" : toast_r2.type === "warning" ? "warning" : "info", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(toast_r2.message);
} }
export class ToastContainerComponent {
    constructor() {
        this.toastService = inject(ToastService);
    }
    static { this.ɵfac = function ToastContainerComponent_Factory(t) { return new (t || ToastContainerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastContainerComponent, selectors: [["app-toast-container"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 1, consts: [[1, "toast-container"], ["class", "toast", 3, "class", 4, "ngFor", "ngForOf"], [1, "toast"], [1, "material-icons", "toast-icon"], [1, "toast-msg"], [1, "toast-close", 3, "click"], [1, "material-icons", 2, "font-size", "16px"]], template: function ToastContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, ToastContainerComponent_div_1_Template, 8, 4, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.toastService.toasts());
        } }, dependencies: [CommonModule, i1.NgForOf], styles: ["//[_ngcontent-%COMP%]   Toast[_ngcontent-%COMP%]   Container[_ngcontent-%COMP%]   Component[_ngcontent-%COMP%]   Styles\n\n.toast-container[_ngcontent-%COMP%] {\n      position: fixed;\n      bottom: 32px; right: 32px;\n      z-index: 9999;\n      display: flex; flex-direction: column; gap: 10px;\n    }\n    .toast[_ngcontent-%COMP%] {\n      display: flex; align-items: center; gap: 12px;\n      padding: 14px 18px;\n      background: var(--color-bg-card);\n      border-radius: var(--radius-md);\n      box-shadow: var(--shadow-elevated);\n      min-width: 280px; max-width: 380px;\n      animation: slideInRight 0.35s ease;\n      border-left: 3px solid;\n    }\n    .toast-success[_ngcontent-%COMP%] { border-color: var(--color-success); .toast-icon { color: var(--color-success); } }\n    .toast-error[_ngcontent-%COMP%] { border-color: var(--color-error); .toast-icon { color: var(--color-error); } }\n    .toast-warning[_ngcontent-%COMP%] { border-color: var(--color-warning); .toast-icon { color: var(--color-warning); } }\n    .toast-info[_ngcontent-%COMP%] { border-color: var(--color-gold); .toast-icon { color: var(--color-gold); } }\n    .toast-msg[_ngcontent-%COMP%] { flex: 1; font-size: 0.875rem; color: var(--color-text); }\n    .toast-close[_ngcontent-%COMP%] {\n      background: none; border: none; cursor: pointer;\n      color: var(--color-text-muted); transition: color 0.2s;\n      display: flex; align-items: center;\n      &:hover { color: var(--color-text); }\n    }\n    @media (max-width: 480px) {\n      .toast-container[_ngcontent-%COMP%] { bottom: 16px; right: 16px; left: 16px; }\n      .toast[_ngcontent-%COMP%] { min-width: unset; }\n    }\n\n@media (max-width: 480px) {\n  .toast-container[_ngcontent-%COMP%] { bottom: 16px; right: 12px; left: 12px; }\n  .toast[_ngcontent-%COMP%] { min-width: unset; width: 100%; max-width: 100%; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastContainerComponent, [{
        type: Component,
        args: [{ selector: 'app-toast-container', standalone: true, imports: [CommonModule], template: "<div class=\"toast-container\">\n      <div *ngFor=\"let toast of toastService.toasts()\" class=\"toast\" [class]=\"'toast-' + toast.type\">\n        <span class=\"material-icons toast-icon\">\n          {{ toast.type === 'success' ? 'check_circle' : toast.type === 'error' ? 'error' : toast.type === 'warning' ? 'warning' : 'info' }}\n        </span>\n        <span class=\"toast-msg\">{{ toast.message }}</span>\n        <button class=\"toast-close\" (click)=\"toastService.remove(toast.id)\">\n          <span class=\"material-icons\" style=\"font-size:16px\">close</span>\n        </button>\n      </div>\n    </div>\n", styles: ["// Toast Container Component Styles\n\n.toast-container {\n      position: fixed;\n      bottom: 32px; right: 32px;\n      z-index: 9999;\n      display: flex; flex-direction: column; gap: 10px;\n    }\n    .toast {\n      display: flex; align-items: center; gap: 12px;\n      padding: 14px 18px;\n      background: var(--color-bg-card);\n      border-radius: var(--radius-md);\n      box-shadow: var(--shadow-elevated);\n      min-width: 280px; max-width: 380px;\n      animation: slideInRight 0.35s ease;\n      border-left: 3px solid;\n    }\n    .toast-success { border-color: var(--color-success); .toast-icon { color: var(--color-success); } }\n    .toast-error { border-color: var(--color-error); .toast-icon { color: var(--color-error); } }\n    .toast-warning { border-color: var(--color-warning); .toast-icon { color: var(--color-warning); } }\n    .toast-info { border-color: var(--color-gold); .toast-icon { color: var(--color-gold); } }\n    .toast-msg { flex: 1; font-size: 0.875rem; color: var(--color-text); }\n    .toast-close {\n      background: none; border: none; cursor: pointer;\n      color: var(--color-text-muted); transition: color 0.2s;\n      display: flex; align-items: center;\n      &:hover { color: var(--color-text); }\n    }\n    @media (max-width: 480px) {\n      .toast-container { bottom: 16px; right: 16px; left: 16px; }\n      .toast { min-width: unset; }\n    }\n\n@media (max-width: 480px) {\n  .toast-container { bottom: 16px; right: 12px; left: 12px; }\n  .toast { min-width: unset; width: 100%; max-width: 100%; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "src\\app\\components\\toast-container\\toast-container.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=toast-container.component.js.map