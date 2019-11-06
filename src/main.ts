import {
    enableProdMode,
    ErrorHandler,
    Injectable,
    Injector,
    PLATFORM_ID,
    StaticProvider,
    ɵcreateInjector,
    ɵrenderComponent,
} from '@angular/core';


import { environment }   from './environments/environment';
import { AppComponent, } from './app/app.component';
import { DOCUMENT }      from '@angular/common';
import { AppModule }     from './app/app.module';

if (environment.production) {
    enableProdMode();
}

@Injectable()
export class Console {
    log(message: string): void {
        // tslint:disable-next-line:no-console
        console.log(message);
    }
    
    // Note: for reporting errors use `DOM.logError()` as it is platform specific
    warn(message: string): void {
        // tslint:disable-next-line:no-console
        console.warn(message);
    }
}

// const platform: PlatformRef = platformBrowser([{
//     provide: NgZone,
//     useClass: NoopNgZone
// }]);
const extraProviders: StaticProvider[] = [
    {
        deps: [],
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
    //     provide: ApplicationRef,
    //     useClass: ApplicationRef,
    //     deps: [NgZone, Console]
    // },
    // {
    //     provide: NgZone,
    //     useFactory: () => new NoopNgZone()
    // },
    
    // {
    //     provide: PlatformLocation,
    //     useClass:
    // }
    // {
    // provide: Console
    // }
    // {
    //     provide: ComponentFactoryResolver,
    //     useValue: ComponentFactoryResolver.NULL,
    // }
];


const rootInjector: Injector =
    ɵcreateInjector(
        AppModule,
        null,
        extraProviders,
        'root');

ɵrenderComponent(AppComponent, {
    
    injector: rootInjector,
    // sanitizer: rootInjector.get(Sanitizer),
});

