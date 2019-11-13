import { Component, OnInit } from "@angular/core";
// import { BehaviorSubject, Observable, Subject } from "rxjs";
import * as grpcWeb from 'grpc-web';
import { EchoService } from "../../services/echo.service";
import { EchoRequest, EchoResponse } from "../../pb/echo_pb";
import { EchoClient } from "../../pb/EchoServiceClientPb";


@Component({
    selector: 'app-echo',
    templateUrl: './echo.component.html'
})
export class EchoComponent {

    private echoClient: EchoClient;

    result: any;

    constructor(private echoService: EchoService) {
        const initialResponse = new EchoResponse();
        initialResponse.setMessage('Starting');
        if (!this.echoClient) {
            this.echoClient = this.echoService.echoClient;
        }
    }

    ngOnInit() {
    }

    echo(message: string): any {
        const request = new EchoRequest();
        request.setMessage(message);

        console.log("Pasa")
        console.log(message)
        const call = this.echoClient.unaryEcho(request, null,
        (err: grpcWeb.Error, response: EchoResponse) => {
            this.result = response.getMessage();
        });
        call.on('status', (status: grpcWeb.Status) => {
        console.log(status);
        });
    }

}