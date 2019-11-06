import {
    ChangeDetectorRef,
    Component,
    NgModule
}                        from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TestComponent } from './test/test.component';
import {
    HttpClient,
    HttpClientModule
}                        from '@angular/common/http';
import { RouterModule }  from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    show = false;
    title = 'Test Angular 9 RC0';
    
    constructor(private cdr: ChangeDetectorRef,
                // private store: Store,
                private http: HttpClient) {
    
    }
    
    click() {
        this.http.get('https://ya.ru').subscribe();
        this.show = !this.show;
        // this.store.dispatch(new TestAction());
        this.cdr.detectChanges();
    }
}
