import * as grpcWeb from 'grpc-web';

import {
  EchoRequest,
  EchoResponse} from './echo_pb';

export class EchoClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  unaryEcho(
    request: EchoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: EchoResponse) => void
  ): grpcWeb.ClientReadableStream<EchoResponse>;

  serverStreamingEcho(
    request: EchoRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<EchoResponse>;

}

export class EchoPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  unaryEcho(
    request: EchoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<EchoResponse>;

  serverStreamingEcho(
    request: EchoRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<EchoResponse>;

}

