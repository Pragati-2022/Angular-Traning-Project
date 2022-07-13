import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  translation! : string;

  constructor(public translateService : TranslateService) { }

  getTranslateData(text : string){
    this.translateService.get(text).pipe().subscribe((value) => {
      this.translation = value;
      console.log("Translation",this.translation);
      
    });
    return this.translation;
  } 
}
