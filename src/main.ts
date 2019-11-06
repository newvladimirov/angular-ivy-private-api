import {
    enableProdMode,
    ErrorHandler,
    Injector,
    PLATFORM_ID,
    StaticProvider,
    ɵcreateInjector,
    ɵrenderComponent,
} from '@angular/core';


import { DOCUMENT }      from '@angular/common';
import { environment }   from './environments/environment';
import { AppComponent, } from './app/app.component';
import { AppModule }     from './app/app.module';

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
    },
    // {
    //     provide: NgZone,
    //     useClass: NoopNgZone
    // }
];


const rootInjector: Injector = ɵcreateInjector(
    AppModule,
    null,
    extraProviders,
    'root');

ɵrenderComponent(AppComponent, {
    injector: rootInjector,
});

