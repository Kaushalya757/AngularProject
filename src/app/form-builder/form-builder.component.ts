import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup,FormBuilder,FormArray} from '@angular/forms';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
// employee: FormGroup;
//   constructor(private fb: FormBuilder) { }

//   ngOnInit() {
//     this.employee = this.fb.group({
//       fullname: [''],
//       email: [''],
//       skills:this.fb.group({
//         skillName:[''],
//         experience:[''],
//         proficiency:[''],
//       })
//     });
//   }
//   onSubmit(){
//     console.log(this.employee);
//   }

// }

name = 'Angular';
myForm: FormGroup;
arr: FormArray;

constructor(private fb: FormBuilder) { }

ngOnInit() {
  this.myForm = this.fb.group({
    arr: this.fb.array([this.createItem()])
  })
}

createItem() {
  return this.fb.group({
    name: [''],
    pay: ['']
  })
}

addItem() {
  this.arr = this.myForm.get('arr') as FormArray;
  this.arr.push(this.createItem());
}

onSubmit() {
  console.log(this.myForm.value);
}
}
