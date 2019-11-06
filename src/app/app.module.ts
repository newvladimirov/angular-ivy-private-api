import { NgModule }         from '@angular/core';
import { TestComponent }    from './test/test.component';
import { CommonModule }     from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }     from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        // NgxsModule.forRoot([]),
    ],
})
export class AppModule {
}

