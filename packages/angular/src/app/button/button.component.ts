import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import tokens from '../../../../tokens/tokens.json';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';

  getStyle() {
    return {
      'background-color': tokens.color[this.variant].value,
      'color': '#fff',
      'padding': `${tokens.space.medium.value} ${tokens.space.large.value}`,
      'border': 'none',
      'border-radius': '4px',
      'cursor': 'pointer',
      'font-family': tokens.typography.fontFamily.value,
      'font-size': tokens.typography.fontSize.medium.value,
      'font-weight': tokens.typography.fontWeight.bold.value,
    };
  }
}
