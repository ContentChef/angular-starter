import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from '@contentchef/contentchef-node';
import { ContentChefService } from '../contentChef';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css'],
})
export class SitesListComponent implements OnInit {
  sites: ISearchResponse<object>[] = [];
  constructor(private contentChefService: ContentChefService) {}

  async ngOnInit() {
    const result = await this.contentChefService.getSites();
    this.sites = result.items;
  }

}
