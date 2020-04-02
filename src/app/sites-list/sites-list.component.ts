import { Component, OnInit } from '@angular/core';
import { IResponse } from '@contentchef/contentchef-node';
import { ContentChefService, Site } from '../contentChef';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css'],
})
export class SitesListComponent implements OnInit {
  sites: IResponse<Site>[] = [];
  constructor(private contentChefService: ContentChefService) {}

  async ngOnInit() {
    const result = await this.contentChefService.getSites();
    this.sites = result.items;
  }

}
