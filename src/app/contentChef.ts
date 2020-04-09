import { Injectable } from '@angular/core';
import { configure, IOnlineChannelMethods, createUrl } from '@contentchef/contentchef-node';

export interface Site {
    title: string;
    image: string;
    description: string;
    url: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContentChefService {
    private onlineChannel: IOnlineChannelMethods;
    constructor() {
        this.onlineChannel = configure({
            spaceId: '<your spaceId>',
        }).onlineChannel('<your online api key>', '<your channel>');
    }

    async getSites() {
        return (await this.onlineChannel.search<Site>({contentDefinition: 'top-site', skip: 0, take: 100})).data;
    }

    async getSite(publicId: string) {
        return (await this.onlineChannel.content<Site>({publicId})).data;
    }

    createUrl(publicId: string) {
        return createUrl(publicId);
    }
}
