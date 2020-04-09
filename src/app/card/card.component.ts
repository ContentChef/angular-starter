import { Component, Input } from '@angular/core';
import { ContentChefService } from '../contentChef';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string;
  @Input() image: string;
  @Input() url: string;
  @Input() description: string;
  @Input() publicId: string;
  @Input() cloudName: string;

  constructor(private contentChefService: ContentChefService) {}

  getImageUrl() {
    return this.contentChefService.createUrl(this.image);
  }
}
