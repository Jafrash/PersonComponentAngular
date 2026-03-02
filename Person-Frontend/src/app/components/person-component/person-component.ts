import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-component.html',
  styleUrls: ['./person-component.css']
})
export class PersonComponent {

  @Input() name!: string;
  @Input() age!: number;
  @Input() role!: string;

}