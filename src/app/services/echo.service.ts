import { Injectable } from "@angular/core";
import { EchoClient } from "../pb/EchoServiceClientPb";

@Injectable({
    providedIn: 'root'
})
export class EchoService {
    public echoClient: EchoClient;

    constructor() {
        if (!this.echoClient) {
            this.echoClient = new EchoClient('http://localhost:8080');
        }
    }
}