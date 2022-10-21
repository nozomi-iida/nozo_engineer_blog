// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: tag.service.proto

package nozo_engineer_blogv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetTagsReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *GetTagsReq) Reset() {
	*x = GetTagsReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tag_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTagsReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTagsReq) ProtoMessage() {}

func (x *GetTagsReq) ProtoReflect() protoreflect.Message {
	mi := &file_tag_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTagsReq.ProtoReflect.Descriptor instead.
func (*GetTagsReq) Descriptor() ([]byte, []int) {
	return file_tag_service_proto_rawDescGZIP(), []int{0}
}

type GetTagsRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tags []*Tag `protobuf:"bytes,1,rep,name=tags,proto3" json:"tags,omitempty"`
}

func (x *GetTagsRes) Reset() {
	*x = GetTagsRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tag_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTagsRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTagsRes) ProtoMessage() {}

func (x *GetTagsRes) ProtoReflect() protoreflect.Message {
	mi := &file_tag_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTagsRes.ProtoReflect.Descriptor instead.
func (*GetTagsRes) Descriptor() ([]byte, []int) {
	return file_tag_service_proto_rawDescGZIP(), []int{1}
}

func (x *GetTagsRes) GetTags() []*Tag {
	if x != nil {
		return x.Tags
	}
	return nil
}

type GetTagReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetTagReq) Reset() {
	*x = GetTagReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tag_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTagReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTagReq) ProtoMessage() {}

func (x *GetTagReq) ProtoReflect() protoreflect.Message {
	mi := &file_tag_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTagReq.ProtoReflect.Descriptor instead.
func (*GetTagReq) Descriptor() ([]byte, []int) {
	return file_tag_service_proto_rawDescGZIP(), []int{2}
}

func (x *GetTagReq) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type GetTagRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tag *Tag `protobuf:"bytes,1,opt,name=tag,proto3" json:"tag,omitempty"`
}

func (x *GetTagRes) Reset() {
	*x = GetTagRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tag_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTagRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTagRes) ProtoMessage() {}

func (x *GetTagRes) ProtoReflect() protoreflect.Message {
	mi := &file_tag_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTagRes.ProtoReflect.Descriptor instead.
func (*GetTagRes) Descriptor() ([]byte, []int) {
	return file_tag_service_proto_rawDescGZIP(), []int{3}
}

func (x *GetTagRes) GetTag() *Tag {
	if x != nil {
		return x.Tag
	}
	return nil
}

var File_tag_service_proto protoreflect.FileDescriptor

var file_tag_service_proto_rawDesc = []byte{
	0x0a, 0x11, 0x74, 0x61, 0x67, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x15, 0x6e, 0x6f, 0x7a, 0x6f, 0x5f, 0x65, 0x6e, 0x67, 0x69, 0x6e, 0x65,
	0x65, 0x72, 0x5f, 0x62, 0x6c, 0x6f, 0x67, 0x2e, 0x76, 0x31, 0x1a, 0x0d, 0x61, 0x72, 0x74, 0x69,
	0x63, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x09, 0x74, 0x61, 0x67, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x0c, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x54, 0x61, 0x67, 0x73, 0x52,
	0x65, 0x71, 0x22, 0x3c, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x54, 0x61, 0x67, 0x73, 0x52, 0x65, 0x73,
	0x12, 0x2e, 0x0a, 0x04, 0x74, 0x61, 0x67, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x6e, 0x6f, 0x7a, 0x6f, 0x5f, 0x65, 0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x5f, 0x62,
	0x6c, 0x6f, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x61, 0x67, 0x52, 0x04, 0x74, 0x61, 0x67, 0x73,
	0x22, 0x1b, 0x0a, 0x09, 0x47, 0x65, 0x74, 0x54, 0x61, 0x67, 0x52, 0x65, 0x71, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x22, 0x39, 0x0a,
	0x09, 0x47, 0x65, 0x74, 0x54, 0x61, 0x67, 0x52, 0x65, 0x73, 0x12, 0x2c, 0x0a, 0x03, 0x74, 0x61,
	0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x6e, 0x6f, 0x7a, 0x6f, 0x5f, 0x65,
	0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x5f, 0x62, 0x6c, 0x6f, 0x67, 0x2e, 0x76, 0x31, 0x2e,
	0x54, 0x61, 0x67, 0x52, 0x03, 0x74, 0x61, 0x67, 0x32, 0xab, 0x01, 0x0a, 0x0a, 0x54, 0x61, 0x67,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x4f, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x54, 0x61,
	0x67, 0x73, 0x12, 0x21, 0x2e, 0x6e, 0x6f, 0x7a, 0x6f, 0x5f, 0x65, 0x6e, 0x67, 0x69, 0x6e, 0x65,
	0x65, 0x72, 0x5f, 0x62, 0x6c, 0x6f, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x61,
	0x67, 0x73, 0x52, 0x65, 0x71, 0x1a, 0x21, 0x2e, 0x6e, 0x6f, 0x7a, 0x6f, 0x5f, 0x65, 0x6e, 0x67,
	0x69, 0x6e, 0x65, 0x65, 0x72, 0x5f, 0x62, 0x6c, 0x6f, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65,
	0x74, 0x54, 0x61, 0x67, 0x73, 0x52, 0x65, 0x73, 0x12, 0x4c, 0x0a, 0x06, 0x47, 0x65, 0x74, 0x54,
	0x61, 0x67, 0x12, 0x20, 0x2e, 0x6e, 0x6f, 0x7a, 0x6f, 0x5f, 0x65, 0x6e, 0x67, 0x69, 0x6e, 0x65,
	0x65, 0x72, 0x5f, 0x62, 0x6c, 0x6f, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x61,
	0x67, 0x52, 0x65, 0x71, 0x1a, 0x20, 0x2e, 0x6e, 0x6f, 0x7a, 0x6f, 0x5f, 0x65, 0x6e, 0x67, 0x69,
	0x6e, 0x65, 0x65, 0x72, 0x5f, 0x62, 0x6c, 0x6f, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74,
	0x54, 0x61, 0x67, 0x52, 0x65, 0x73, 0x42, 0xd9, 0x01, 0x0a, 0x19, 0x63, 0x6f, 0x6d, 0x2e, 0x6e,
	0x6f, 0x7a, 0x6f, 0x5f, 0x65, 0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x5f, 0x62, 0x6c, 0x6f,
	0x67, 0x2e, 0x76, 0x31, 0x42, 0x0f, 0x54, 0x61, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x3e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x6e, 0x6f, 0x7a, 0x6f, 0x6d, 0x69, 0x2d, 0x69, 0x69, 0x64, 0x61, 0x2f,
	0x6e, 0x6f, 0x7a, 0x6f, 0x5f, 0x65, 0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x5f, 0x62, 0x6c,
	0x6f, 0x67, 0x3b, 0x6e, 0x6f, 0x7a, 0x6f, 0x5f, 0x65, 0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72,
	0x5f, 0x62, 0x6c, 0x6f, 0x67, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x4e, 0x58, 0x58, 0xaa, 0x02, 0x13,
	0x4e, 0x6f, 0x7a, 0x6f, 0x45, 0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x42, 0x6c, 0x6f, 0x67,
	0x2e, 0x56, 0x31, 0xca, 0x02, 0x13, 0x4e, 0x6f, 0x7a, 0x6f, 0x45, 0x6e, 0x67, 0x69, 0x6e, 0x65,
	0x65, 0x72, 0x42, 0x6c, 0x6f, 0x67, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1f, 0x4e, 0x6f, 0x7a, 0x6f,
	0x45, 0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x42, 0x6c, 0x6f, 0x67, 0x5c, 0x56, 0x31, 0x5c,
	0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x14, 0x4e, 0x6f,
	0x7a, 0x6f, 0x45, 0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x42, 0x6c, 0x6f, 0x67, 0x3a, 0x3a,
	0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_tag_service_proto_rawDescOnce sync.Once
	file_tag_service_proto_rawDescData = file_tag_service_proto_rawDesc
)

func file_tag_service_proto_rawDescGZIP() []byte {
	file_tag_service_proto_rawDescOnce.Do(func() {
		file_tag_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_tag_service_proto_rawDescData)
	})
	return file_tag_service_proto_rawDescData
}

var file_tag_service_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_tag_service_proto_goTypes = []interface{}{
	(*GetTagsReq)(nil), // 0: nozo_engineer_blog.v1.GetTagsReq
	(*GetTagsRes)(nil), // 1: nozo_engineer_blog.v1.GetTagsRes
	(*GetTagReq)(nil),  // 2: nozo_engineer_blog.v1.GetTagReq
	(*GetTagRes)(nil),  // 3: nozo_engineer_blog.v1.GetTagRes
	(*Tag)(nil),        // 4: nozo_engineer_blog.v1.Tag
}
var file_tag_service_proto_depIdxs = []int32{
	4, // 0: nozo_engineer_blog.v1.GetTagsRes.tags:type_name -> nozo_engineer_blog.v1.Tag
	4, // 1: nozo_engineer_blog.v1.GetTagRes.tag:type_name -> nozo_engineer_blog.v1.Tag
	0, // 2: nozo_engineer_blog.v1.TagService.GetTags:input_type -> nozo_engineer_blog.v1.GetTagsReq
	2, // 3: nozo_engineer_blog.v1.TagService.GetTag:input_type -> nozo_engineer_blog.v1.GetTagReq
	1, // 4: nozo_engineer_blog.v1.TagService.GetTags:output_type -> nozo_engineer_blog.v1.GetTagsRes
	3, // 5: nozo_engineer_blog.v1.TagService.GetTag:output_type -> nozo_engineer_blog.v1.GetTagRes
	4, // [4:6] is the sub-list for method output_type
	2, // [2:4] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_tag_service_proto_init() }
func file_tag_service_proto_init() {
	if File_tag_service_proto != nil {
		return
	}
	file_article_proto_init()
	file_tag_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_tag_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTagsReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_tag_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTagsRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_tag_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTagReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_tag_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTagRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_tag_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_tag_service_proto_goTypes,
		DependencyIndexes: file_tag_service_proto_depIdxs,
		MessageInfos:      file_tag_service_proto_msgTypes,
	}.Build()
	File_tag_service_proto = out.File
	file_tag_service_proto_rawDesc = nil
	file_tag_service_proto_goTypes = nil
	file_tag_service_proto_depIdxs = nil
}
