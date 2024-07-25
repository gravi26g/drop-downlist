import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParentComponent } from '../pages/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,MatSelectModule,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  // options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  optins2=[
    {id:1, name:"1"},
    {id:2, name:"2"},
    {id:3, name:"3"},
    {id:4, name:"4"},
    {id:5,name:"5"}
    
  ]
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    
    this.form = this.fb.group({
      dropdown1: [''],
      dropdown2: ['']
    });
      // Subscribe to changes on the first dropdown

      this.form.get('dropdown1')!.valueChanges.subscribe(value => {
        this.form.get('dropdown2')!.setValue(value, { emitEvent: false });
      });
       // Subscribe to changes on the second dropdown
    this.form.get('dropdown2')!.valueChanges.subscribe(value => {
      this.form.get('dropdown1')!.setValue(value, { emitEvent: false });
    });
  }
}
