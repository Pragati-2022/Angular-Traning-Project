import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProducForm!: FormGroup;
  isFormSubmitted = false;

  options!: number[];
  selectedOption!: number;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initialization();

    this.options = [1,2,3,4,5];
    this.selectedOption = this.options[0];
  }

  initialization() {
    this.addProducForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      color: ['', [Validators.required]],
      price: ['', [Validators.required]],
      review: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get _addProducForm() {
    return this.addProducForm.controls;
  }

  changeSelectedOption(option : number){
    this.selectedOption = option;
    this._addProducForm['review'].setValue(option);

    console.log(this._addProducForm['review'].value);
  }

  onSubmit() {
    this.isFormSubmitted = true;
  }
}
