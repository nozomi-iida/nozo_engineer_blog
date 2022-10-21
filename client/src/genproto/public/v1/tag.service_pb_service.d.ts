// package: public.v1
// file: public/v1/tag.service.proto

import * as public_v1_tag_service_pb from "../../public/v1/tag.service_pb";
import { grpc } from "@improbable-eng/grpc-web";

type TagServiceGetTags = {
  readonly methodName: string;
  readonly service: typeof TagService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_v1_tag_service_pb.GetTagsRequest;
  readonly responseType: typeof public_v1_tag_service_pb.GetTagsResponse;
};

type TagServiceGetTag = {
  readonly methodName: string;
  readonly service: typeof TagService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof public_v1_tag_service_pb.GetTagRequest;
  readonly responseType: typeof public_v1_tag_service_pb.GetTagResponse;
};

export class TagService {
  static readonly serviceName: string;
  static readonly GetTags: TagServiceGetTags;
  static readonly GetTag: TagServiceGetTag;
}

export type ServiceError = {
  message: string;
  code: number;
  metadata: grpc.Metadata;
};
export type Status = { details: string; code: number; metadata: grpc.Metadata };

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: "data", handler: (message: T) => void): ResponseStream<T>;
  on(type: "end", handler: (status?: Status) => void): ResponseStream<T>;
  on(type: "status", handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: "end", handler: (status?: Status) => void): RequestStream<T>;
  on(type: "status", handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(
    type: "data",
    handler: (message: ResT) => void
  ): BidirectionalStream<ReqT, ResT>;
  on(
    type: "end",
    handler: (status?: Status) => void
  ): BidirectionalStream<ReqT, ResT>;
  on(
    type: "status",
    handler: (status: Status) => void
  ): BidirectionalStream<ReqT, ResT>;
}

export class TagServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getTags(
    requestMessage: public_v1_tag_service_pb.GetTagsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: public_v1_tag_service_pb.GetTagsResponse | null
    ) => void
  ): UnaryResponse;
  getTags(
    requestMessage: public_v1_tag_service_pb.GetTagsRequest,
    callback: (
      error: ServiceError | null,
      responseMessage: public_v1_tag_service_pb.GetTagsResponse | null
    ) => void
  ): UnaryResponse;
  getTag(
    requestMessage: public_v1_tag_service_pb.GetTagRequest,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: public_v1_tag_service_pb.GetTagResponse | null
    ) => void
  ): UnaryResponse;
  getTag(
    requestMessage: public_v1_tag_service_pb.GetTagRequest,
    callback: (
      error: ServiceError | null,
      responseMessage: public_v1_tag_service_pb.GetTagResponse | null
    ) => void
  ): UnaryResponse;
}
