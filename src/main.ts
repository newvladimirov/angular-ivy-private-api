import {
    enableProdMode,
    ErrorHandler,
    Injector,
    NgZone,
    PLATFORM_ID,
    StaticProvider,
    ɵcreateInjector,
    ɵrenderComponent,
} from '@angular/core';


import { DOCUMENT }      from '@angular/common';
import { environment }   from './environments/environment';
import { AppComponent, } from './app/app.component';
import { AppModule }     from './app/app.module';
import { NoopNgZone }    from './app/angular-shims/noop-ng-zone';

if (environment.production) {
    enableProdMode();
}

const extraProviders: StaticProvider[] = [
    {
        provide: ErrorHandler,
        useClass: ErrorHandler,
    },
    {
        provide: DOCUMENT,
        useValue: window['document']
    },
    {
        provide: PLATFORM_ID,
        useValue: 'browser'
    }
];


const zoneInjector = ɵcreateInjector(null, null, [
    {
        provide: NgZone,
        useFactory: () => new NoopNgZone()
    },
], 'zone_injector');

const rootInjector: Injector = ɵcreateInjector(
    AppModule,
    zoneInjector,
    extraProviders,
    'root');

ɵrenderComponent(AppComponent, {
    injector: rootInjector,
});

