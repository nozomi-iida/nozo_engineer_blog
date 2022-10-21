// package: public.v1
// file: public/v1/article.service.proto

var public_v1_article_service_pb = require("../../public/v1/article.service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ArticleService = (function () {
  function ArticleService() {}
  ArticleService.serviceName = "public.v1.ArticleService";
  return ArticleService;
})();

ArticleService.GetArticles = {
  methodName: "GetArticles",
  service: ArticleService,
  requestStream: false,
  responseStream: false,
  requestType: public_v1_article_service_pb.GetArticlesRequest,
  responseType: public_v1_article_service_pb.GetArticlesResponse,
};

ArticleService.GetArticle = {
  methodName: "GetArticle",
  service: ArticleService,
  requestStream: false,
  responseStream: false,
  requestType: public_v1_article_service_pb.GetArticleRequest,
  responseType: public_v1_article_service_pb.GetArticleResponse,
};

exports.ArticleService = ArticleService;

function ArticleServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ArticleServiceClient.prototype.getArticles = function getArticles(
  requestMessage,
  metadata,
  callback
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ArticleService.GetArticles, {
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

ArticleServiceClient.prototype.getArticle = function getArticle(
  requestMessage,
  metadata,
  callback
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ArticleService.GetArticle, {
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

exports.ArticleServiceClient = ArticleServiceClient;
