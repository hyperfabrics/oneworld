import { Injectable } from '@angular/core';

@Injectable()

//provides configurate to composer rest server
export class Configuration {
    public ApiIP: string = "http://34.227.76.39";
    public ApiPort: string = "3000";
    public Server: string = this.ApiIP+":"+this.ApiPort;
    public ApiUrl: string = "/api/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
