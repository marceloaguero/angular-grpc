import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import * as grpcWeb from 'grpc-web';
import { EchoService } from "../../services/echo.service";
import { EchoRequest, EchoResponse } from "../../pb/echo_pb";
import { EchoClient } from "../../pb/EchoServiceClientPb";


@Component({
    selector: 'app-echo',
    templateUrl: './echo.component.html'
})
export class EchoComponent implements OnInit {

    private echoClient: EchoClient;
    private streamSubject: BehaviorSubject<EchoResponse>;

    result: any;
    items: string[] = [];

    constructor(private echoService: EchoService) {
        const initialResponse = new EchoResponse();
        initialResponse.setMessage('Starting');
        this.streamSubject =  new BehaviorSubject<EchoResponse>(initialResponse);
        if (!this.echoClient) {
            this.echoClient = this.echoService.echoClient;
        }
    }

    ngOnInit() {
        this.streamObs$().subscribe((response) => {
            this.items.push(response.getMessage());
        });
    }

    sayHello(message: string): any {
        const request = new EchoRequest();
        request.setMessage(message);

        const call = this.echoClient.unaryEcho(request, null,
        (err: grpcWeb.Error, response: EchoResponse) => {
            this.result = response.getMessage();
        });
        call.on('status', (status: grpcWeb.Status) => {
        console.log(status);
        });
    }

    streamObs$() {
        return this.streamSubject.asObservable();
    }
}