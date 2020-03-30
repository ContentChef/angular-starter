import { Injectable } from '@angular/core';
import { Cloudinary } from 'cloudinary-core';

@Injectable({
    providedIn: 'root'
})
export class CloudinaryService {
    private client: Cloudinary;
    constructor() {
        this.client = Cloudinary.new({});
    }

    createUrl(publicId: string, cloudName: string) {
        return this.client.url(publicId, {cloud_name: cloudName});
    }
}
