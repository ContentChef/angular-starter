
# Installation

* clone repo and install dependencies
```zsh
git clone git@github.com:ContentChef/angular-starter.git
cd angular-starter
npm install # or yarn
```
* change options in `./src/app/contentChef.ts`;
```typescript
export class ContentChefService {
    constructor() {
        this.onlineChannel = configure({
            apiKey: '<your api key>',
            host: '<contentchef host>',
            spaceId: '<your spaceId>',
        }).onlineChannel('<your channel>');
    }
}

```
* and then run the following command
```zsh
npm run start
```

