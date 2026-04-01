import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import * as i0 from "@angular/core";
export class AppComponent {
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-navbar");
            i0.ɵɵelementStart(1, "main");
            i0.ɵɵelement(2, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "app-footer")(4, "app-toast-container");
        } }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent, ToastContainerComponent], styles: ["main[_ngcontent-%COMP%] { min-height: calc(100vh - 80px); }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [RouterOutlet, NavbarComponent, FooterComponent, ToastContainerComponent], template: "<app-navbar></app-navbar>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n    <app-footer></app-footer>\n    <app-toast-container></app-toast-container>\n", styles: ["main { min-height: calc(100vh - 80px); }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=app.component.js.map