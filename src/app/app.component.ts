import {
    ChangeDetectorRef,
    Component
}                     from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    show = false;
    title = 'Test Angular 9 RC0';
    
    constructor(private cdr: ChangeDetectorRef,
                private http: HttpClient) {
    
    }
    
    click() {
        this.http.get('https://google.ru').subscribe();
        this.show = !this.show;
        this.cdr.detectChanges();
    }
}
