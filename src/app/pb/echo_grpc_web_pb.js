/**
 * @fileoverview gRPC-Web generated client stub for echo_pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.echo_pb = require('./echo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.echo_pb.EchoClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.echo_pb.EchoPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.echo_pb.EchoRequest,
 *   !proto.echo_pb.EchoResponse>}
 */
const methodDescriptor_Echo_UnaryEcho = new grpc.web.MethodDescriptor(
  '/echo_pb.Echo/UnaryEcho',
  grpc.web.MethodType.UNARY,
  proto.echo_pb.EchoRequest,
  proto.echo_pb.EchoResponse,
  /**
   * @param {!proto.echo_pb.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo_pb.EchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.echo_pb.EchoRequest,
 *   !proto.echo_pb.EchoResponse>}
 */
const methodInfo_Echo_UnaryEcho = new grpc.web.AbstractClientBase.MethodInfo(
  proto.echo_pb.EchoResponse,
  /**
   * @param {!proto.echo_pb.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo_pb.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.echo_pb.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.echo_pb.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.echo_pb.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.echo_pb.EchoClient.prototype.unaryEcho =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/echo_pb.Echo/UnaryEcho',
      request,
      metadata || {},
      methodDescriptor_Echo_UnaryEcho,
      callback);
};


/**
 * @param {!proto.echo_pb.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.echo_pb.EchoResponse>}
 *     A native promise that resolves to the response
 */
proto.echo_pb.EchoPromiseClient.prototype.unaryEcho =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/echo_pb.Echo/UnaryEcho',
      request,
      metadata || {},
      methodDescriptor_Echo_UnaryEcho);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.echo_pb.EchoRequest,
 *   !proto.echo_pb.EchoResponse>}
 */
const methodDescriptor_Echo_ServerStreamingEcho = new grpc.web.MethodDescriptor(
  '/echo_pb.Echo/ServerStreamingEcho',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.echo_pb.EchoRequest,
  proto.echo_pb.EchoResponse,
  /**
   * @param {!proto.echo_pb.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo_pb.EchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.echo_pb.EchoRequest,
 *   !proto.echo_pb.EchoResponse>}
 */
const methodInfo_Echo_ServerStreamingEcho = new grpc.web.AbstractClientBase.MethodInfo(
  proto.echo_pb.EchoResponse,
  /**
   * @param {!proto.echo_pb.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo_pb.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.echo_pb.EchoRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.echo_pb.EchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.echo_pb.EchoClient.prototype.serverStreamingEcho =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/echo_pb.Echo/ServerStreamingEcho',
      request,
      metadata || {},
      methodDescriptor_Echo_ServerStreamingEcho);
};


/**
 * @param {!proto.echo_pb.EchoRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.echo_pb.EchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.echo_pb.EchoPromiseClient.prototype.serverStreamingEcho =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/echo_pb.Echo/ServerStreamingEcho',
      request,
      metadata || {},
      methodDescriptor_Echo_ServerStreamingEcho);
};


module.exports = proto.echo_pb;

