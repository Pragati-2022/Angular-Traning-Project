import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-method-card',
  templateUrl: './method-card.component.html',
  styleUrls: ['./method-card.component.scss'],
})
export class MethodCardComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  @Input() methods: any = [];
  @ContentChild('temp') temp!: TemplateRef<any>;
  @Output() sendMethod: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked in  method card');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked in  method card');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit in method card');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit in method card');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck in method card');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges in method card');
  }

  ngOnInit(): void {
    console.log('ngOnInit in method card');
  }

  onSubmit(method: string) {
    console.log(method);
    this.sendMethod.emit(method);
  }
}
