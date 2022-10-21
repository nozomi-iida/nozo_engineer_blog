// package: public.v1
// file: public/v1/article.service.proto

import * as public_v1_article_service_pb from "../../public/v1/article.service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ArticleServiceGetArticles = {
  readonly methodName: string;
  readonly service: typeof ArticleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_v1_article_service_pb.GetArticlesRequest;
  readonly responseType: typeof public_v1_article_service_pb.GetArticlesResponse;
};

type ArticleServiceGetArticle = {
  readonly methodName: string;
  readonly service: typeof ArticleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_v1_article_service_pb.GetArticleRequest;
  readonly responseType: typeof public_v1_article_service_pb.GetArticleResponse;
};

export class ArticleService {
  static readonly serviceName: string;
  static readonly GetArticles: ArticleServiceGetArticles;
  static readonly GetArticle: ArticleServiceGetArticle;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ArticleServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getArticles(
    requestMessage: public_v1_article_service_pb.GetArticlesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_v1_article_service_pb.GetArticlesResponse|null) => void
  ): UnaryResponse;
  getArticles(
    requestMessage: public_v1_article_service_pb.GetArticlesRequest,
    callback: (error: ServiceError|null, responseMessage: public_v1_article_service_pb.GetArticlesResponse|null) => void
  ): UnaryResponse;
  getArticle(
    requestMessage: public_v1_article_service_pb.GetArticleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: public_v1_article_service_pb.GetArticleResponse|null) => void
  ): UnaryResponse;
  getArticle(
    requestMessage: public_v1_article_service_pb.GetArticleRequest,
    callback: (error: ServiceError|null, responseMessage: public_v1_article_service_pb.GetArticleResponse|null) => void
  ): UnaryResponse;
}

