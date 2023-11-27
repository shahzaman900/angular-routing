import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-bcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-bcomponent.component.html',
  styleUrl: './child-bcomponent.component.scss'
})
export class ChildBComponent {

}
