// package: public.v1
// file: public/v1/tag.service.proto

var public_v1_tag_service_pb = require("../../public/v1/tag.service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TagService = (function () {
  function TagService() {}
  TagService.serviceName = "public.v1.TagService";
  return TagService;
})();

TagService.GetTags = {
  methodName: "GetTags",
  service: TagService,
  requestStream: false,
  responseStream: false,
  requestType: public_v1_tag_service_pb.GetTagsRequest,
  responseType: public_v1_tag_service_pb.GetTagsResponse,
};

TagService.GetTag = {
  methodName: "GetTag",
  service: TagService,
  requestStream: false,
  responseStream: false,
  requestType: public_v1_tag_service_pb.GetTagRequest,
  responseType: public_v1_tag_service_pb.GetTagResponse,
};

exports.TagService = TagService;

function TagServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TagServiceClient.prototype.getTags = function getTags(
  requestMessage,
  metadata,
  callback
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TagService.GetTags, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    },
  };
};

TagServiceClient.prototype.getTag = function getTag(
  requestMessage,
  metadata,
  callback
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TagService.GetTag, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    },
  };
};

exports.TagServiceClient = TagServiceClient;
