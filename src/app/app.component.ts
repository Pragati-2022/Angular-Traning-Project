import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './modules/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(FooterComponent) message: any;
  title: string = 'ProductDemo';

  constructor(
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
  ) {
    this.translate.setDefaultLang('en');
  }

  ngAfterViewInit() {
    this.title = this.message.message;
    this.cdr.detectChanges();
  }
}
