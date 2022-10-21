// package: public.v1
// file: public/v1/article.service.proto

import * as jspb from "google-protobuf";
import * as public_v1_article_pb from "../../public/v1/article_pb";

export class GetArticlesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticlesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetArticlesRequest
  ): GetArticlesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetArticlesRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetArticlesRequest;
  static deserializeBinaryFromReader(
    message: GetArticlesRequest,
    reader: jspb.BinaryReader
  ): GetArticlesRequest;
}

export namespace GetArticlesRequest {
  export type AsObject = {};
}

export class GetArticlesResponse extends jspb.Message {
  clearArticlesList(): void;
  getArticlesList(): Array<public_v1_article_pb.Article>;
  setArticlesList(value: Array<public_v1_article_pb.Article>): void;
  addArticles(
    value?: public_v1_article_pb.Article,
    index?: number
  ): public_v1_article_pb.Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticlesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetArticlesResponse
  ): GetArticlesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetArticlesResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetArticlesResponse;
  static deserializeBinaryFromReader(
    message: GetArticlesResponse,
    reader: jspb.BinaryReader
  ): GetArticlesResponse;
}

export namespace GetArticlesResponse {
  export type AsObject = {
    articlesList: Array<public_v1_article_pb.Article.AsObject>;
  };
}

export class GetArticleRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetArticleRequest
  ): GetArticleRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetArticleRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleRequest;
  static deserializeBinaryFromReader(
    message: GetArticleRequest,
    reader: jspb.BinaryReader
  ): GetArticleRequest;
}

export namespace GetArticleRequest {
  export type AsObject = {
    id: number;
  };
}

export class GetArticleResponse extends jspb.Message {
  hasArticle(): boolean;
  clearArticle(): void;
  getArticle(): public_v1_article_pb.Article | undefined;
  setArticle(value?: public_v1_article_pb.Article): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetArticleResponse
  ): GetArticleResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetArticleResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleResponse;
  static deserializeBinaryFromReader(
    message: GetArticleResponse,
    reader: jspb.BinaryReader
  ): GetArticleResponse;
}

export namespace GetArticleResponse {
  export type AsObject = {
    article?: public_v1_article_pb.Article.AsObject;
  };
}
