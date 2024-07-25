import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ViewChild('childdiv',{static:true}) childiv:ElementRef | undefined;
  
}
