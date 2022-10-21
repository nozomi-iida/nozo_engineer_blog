// source: public/v1/article.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var public_v1_tag_pb = require('../../public/v1/tag_pb.js');
goog.object.extend(proto, public_v1_tag_pb);
goog.exportSymbol('proto.public.v1.Article', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.public.v1.Article = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.public.v1.Article.repeatedFields_, null);
};
goog.inherits(proto.public.v1.Article, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.public.v1.Article.displayName = 'proto.public.v1.Article';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.public.v1.Article.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.public.v1.Article.prototype.toObject = function(opt_includeInstance) {
  return proto.public.v1.Article.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.public.v1.Article} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.public.v1.Article.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    publishedAt: (f = msg.getPublishedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    public_v1_tag_pb.Tag.toObject, includeInstance),
    thumbnailUrl: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.public.v1.Article}
 */
proto.public.v1.Article.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.public.v1.Article;
  return proto.public.v1.Article.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.public.v1.Article} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.public.v1.Article}
 */
proto.public.v1.Article.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPublishedAt(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 7:
      var value = new public_v1_tag_pb.Tag;
      reader.readMessage(value,public_v1_tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.public.v1.Article.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.public.v1.Article.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.public.v1.Article} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.public.v1.Article.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPublishedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      public_v1_tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getThumbnailUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.public.v1.Article.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.public.v1.Article} returns this
 */
proto.public.v1.Article.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.public.v1.Article.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.public.v1.Article} returns this
 */
proto.public.v1.Article.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.public.v1.Article.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.public.v1.Article} returns this
 */
proto.public.v1.Article.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp published_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.public.v1.Article.prototype.getPublishedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.public.v1.Article} returns this
*/
proto.public.v1.Article.prototype.setPublishedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.public.v1.Article} returns this
 */
proto.public.v1.Article.prototype.clearPublishedAt = function() {
  return this.setPublishedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.public.v1.Article.prototype.hasPublishedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.public.v1.Article.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.public.v1.Article} returns this
*/
proto.public.v1.Article.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.public.v1.Article} returns this
 */
proto.public.v1.Article.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.public.v1.Article.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.public.v1.Article.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.public.v1.Article} returns this
*/
proto.public.v1.Article.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.public.v1.Article} returns this
 */
proto.public.v1.Article.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.public.v1.Article.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated Tag tags = 7;
 * @return {!Array<!proto.public.v1.Tag>}
 */
proto.public.v1.Article.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.public.v1.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, public_v1_tag_pb.Tag, 7));
};


/**
 * @param {!Array<!proto.public.v1.Tag>} value
 * @return {!proto.public.v1.Article} returns this
*/
proto.public.v1.Article.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.public.v1.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.public.v1.Tag}
 */
proto.public.v1.Article.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.public.v1.Tag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.public.v1.Article} returns this
 */
proto.public.v1.Article.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string thumbnail_url = 8;
 * @return {string}
 */
proto.public.v1.Article.prototype.getThumbnailUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.public.v1.Article} returns this
 */
proto.public.v1.Article.prototype.setThumbnailUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


goog.object.extend(exports, proto.public.v1);
