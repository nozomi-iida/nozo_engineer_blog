// package: public.v1
// file: public/v1/tag.service.proto

import * as jspb from "google-protobuf";
import * as public_v1_tag_pb from "../../public/v1/tag_pb";

export class GetTagsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTagsRequest
  ): GetTagsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTagsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTagsRequest;
  static deserializeBinaryFromReader(
    message: GetTagsRequest,
    reader: jspb.BinaryReader
  ): GetTagsRequest;
}

export namespace GetTagsRequest {
  export type AsObject = {};
}

export class GetTagsResponse extends jspb.Message {
  clearTagsList(): void;
  getTagsList(): Array<public_v1_tag_pb.Tag>;
  setTagsList(value: Array<public_v1_tag_pb.Tag>): void;
  addTags(value?: public_v1_tag_pb.Tag, index?: number): public_v1_tag_pb.Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTagsResponse
  ): GetTagsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTagsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTagsResponse;
  static deserializeBinaryFromReader(
    message: GetTagsResponse,
    reader: jspb.BinaryReader
  ): GetTagsResponse;
}

export namespace GetTagsResponse {
  export type AsObject = {
    tagsList: Array<public_v1_tag_pb.Tag.AsObject>;
  };
}

export class GetTagRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTagRequest
  ): GetTagRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTagRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTagRequest;
  static deserializeBinaryFromReader(
    message: GetTagRequest,
    reader: jspb.BinaryReader
  ): GetTagRequest;
}

export namespace GetTagRequest {
  export type AsObject = {
    id: number;
  };
}

export class GetTagResponse extends jspb.Message {
  hasTag(): boolean;
  clearTag(): void;
  getTag(): public_v1_tag_pb.Tag | undefined;
  setTag(value?: public_v1_tag_pb.Tag): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTagResponse
  ): GetTagResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTagResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTagResponse;
  static deserializeBinaryFromReader(
    message: GetTagResponse,
    reader: jspb.BinaryReader
  ): GetTagResponse;
}

export namespace GetTagResponse {
  export type AsObject = {
    tag?: public_v1_tag_pb.Tag.AsObject;
  };
}
