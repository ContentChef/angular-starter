import { Injectable } from '@angular/core';
import { configure, IOnlineChannelMethods } from '@contentchef/contentchef-node';

@Injectable({
    providedIn: 'root'
})
export class ContentChefService {
    private onlineChannel: IOnlineChannelMethods;
    constructor() {
        this.onlineChannel = configure({
            apiKey: '<your api key>',
            host: '<contentchef host>',
            spaceId: '<your spaceId>',
        }).onlineChannel('<your channel>');
    }

    async getSites() {
        return (await this.onlineChannel.search<Record<string, string>>({contentDefinition: 'top-site', skip: 0, take: 100})).data;
    }

    async getSite(publicId: string) {
        return (await this.onlineChannel.content<Record<string, string>>({publicId})).data;
    }
}
