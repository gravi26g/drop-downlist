import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit{
@ViewChild(ChildComponent) child!:ChildComponent;
  childelement: any;

ngAfterViewInit(): void {
  
}
accessChildDom(){
  console.log(this.child.childiv)
  
}

}
