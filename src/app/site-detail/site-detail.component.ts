import { Component, OnInit } from '@angular/core';
import { ContentChefService } from '../contentChef';
import { CloudinaryService } from '../cloudinary';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css'],
})
export class SiteDetailComponent implements OnInit {
  title: string;
  image: string;
  description: string;
  url: string;
  publicId: string;
  cloudName: string;
  constructor(
    private contentChefService: ContentChefService,
    private cloudinaryService: CloudinaryService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    const publicId = this.route.snapshot.paramMap.get('sitePublicId');
    const result = await this.contentChefService.getSite(publicId);

    this.title = result.payload.title;
    this.image = result.payload.image;
    this.description = result.payload.description;
    this.url = result.payload.url;
    this.publicId = result.publicId;
    this.cloudName = (result as unknown as { requestContext: { cloudName: string } }).requestContext.cloudName;

  }

  getImageUrl() {
    return this.cloudinaryService.createUrl(this.image, this.cloudName);
  }

}
