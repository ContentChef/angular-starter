import { Component, OnInit, Input } from '@angular/core';
import { CloudinaryService } from '../cloudinary';

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

  constructor(private cloudinaryService: CloudinaryService) {}

  getImageUrl() {
    return this.cloudinaryService.createUrl(this.image, this.cloudName);
  }
}
