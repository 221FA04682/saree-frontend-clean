import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
export const appConfig = {
    providers: [
        provideRouter(routes, withViewTransitions()),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
    ],
};
//# sourceMappingURL=app.config.js.map