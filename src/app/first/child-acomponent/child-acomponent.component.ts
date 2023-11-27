import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-acomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-acomponent.component.html',
  styleUrl: './child-acomponent.component.scss'
})
export class ChildAComponent {

}
