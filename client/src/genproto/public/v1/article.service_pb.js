// source: public/v1/article.service.proto
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

var public_v1_article_pb = require('../../public/v1/article_pb.js');
goog.object.extend(proto, public_v1_article_pb);
goog.exportSymbol('proto.public.v1.GetArticleRequest', null, global);
goog.exportSymbol('proto.public.v1.GetArticleResponse', null, global);
goog.exportSymbol('proto.public.v1.GetArticlesRequest', null, global);
goog.exportSymbol('proto.public.v1.GetArticlesResponse', null, global);
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
proto.public.v1.GetArticlesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.public.v1.GetArticlesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.public.v1.GetArticlesRequest.displayName = 'proto.public.v1.GetArticlesRequest';
}
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
proto.public.v1.GetArticlesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.public.v1.GetArticlesResponse.repeatedFields_, null);
};
goog.inherits(proto.public.v1.GetArticlesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.public.v1.GetArticlesResponse.displayName = 'proto.public.v1.GetArticlesResponse';
}
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
proto.public.v1.GetArticleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.public.v1.GetArticleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.public.v1.GetArticleRequest.displayName = 'proto.public.v1.GetArticleRequest';
}
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
proto.public.v1.GetArticleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.public.v1.GetArticleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.public.v1.GetArticleResponse.displayName = 'proto.public.v1.GetArticleResponse';
}



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
proto.public.v1.GetArticlesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.public.v1.GetArticlesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.public.v1.GetArticlesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.public.v1.GetArticlesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.public.v1.GetArticlesRequest}
 */
proto.public.v1.GetArticlesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.public.v1.GetArticlesRequest;
  return proto.public.v1.GetArticlesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.public.v1.GetArticlesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.public.v1.GetArticlesRequest}
 */
proto.public.v1.GetArticlesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.public.v1.GetArticlesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.public.v1.GetArticlesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.public.v1.GetArticlesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.public.v1.GetArticlesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.public.v1.GetArticlesResponse.repeatedFields_ = [1];



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
proto.public.v1.GetArticlesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.public.v1.GetArticlesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.public.v1.GetArticlesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.public.v1.GetArticlesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    articlesList: jspb.Message.toObjectList(msg.getArticlesList(),
    public_v1_article_pb.Article.toObject, includeInstance)
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
 * @return {!proto.public.v1.GetArticlesResponse}
 */
proto.public.v1.GetArticlesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.public.v1.GetArticlesResponse;
  return proto.public.v1.GetArticlesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.public.v1.GetArticlesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.public.v1.GetArticlesResponse}
 */
proto.public.v1.GetArticlesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new public_v1_article_pb.Article;
      reader.readMessage(value,public_v1_article_pb.Article.deserializeBinaryFromReader);
      msg.addArticles(value);
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
proto.public.v1.GetArticlesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.public.v1.GetArticlesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.public.v1.GetArticlesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.public.v1.GetArticlesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticlesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      public_v1_article_pb.Article.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Article articles = 1;
 * @return {!Array<!proto.public.v1.Article>}
 */
proto.public.v1.GetArticlesResponse.prototype.getArticlesList = function() {
  return /** @type{!Array<!proto.public.v1.Article>} */ (
    jspb.Message.getRepeatedWrapperField(this, public_v1_article_pb.Article, 1));
};


/**
 * @param {!Array<!proto.public.v1.Article>} value
 * @return {!proto.public.v1.GetArticlesResponse} returns this
*/
proto.public.v1.GetArticlesResponse.prototype.setArticlesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.public.v1.Article=} opt_value
 * @param {number=} opt_index
 * @return {!proto.public.v1.Article}
 */
proto.public.v1.GetArticlesResponse.prototype.addArticles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.public.v1.Article, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.public.v1.GetArticlesResponse} returns this
 */
proto.public.v1.GetArticlesResponse.prototype.clearArticlesList = function() {
  return this.setArticlesList([]);
};





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
proto.public.v1.GetArticleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.public.v1.GetArticleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.public.v1.GetArticleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.public.v1.GetArticleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.public.v1.GetArticleRequest}
 */
proto.public.v1.GetArticleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.public.v1.GetArticleRequest;
  return proto.public.v1.GetArticleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.public.v1.GetArticleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.public.v1.GetArticleRequest}
 */
proto.public.v1.GetArticleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.public.v1.GetArticleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.public.v1.GetArticleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.public.v1.GetArticleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.public.v1.GetArticleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.public.v1.GetArticleRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.public.v1.GetArticleRequest} returns this
 */
proto.public.v1.GetArticleRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





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
proto.public.v1.GetArticleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.public.v1.GetArticleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.public.v1.GetArticleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.public.v1.GetArticleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    article: (f = msg.getArticle()) && public_v1_article_pb.Article.toObject(includeInstance, f)
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
 * @return {!proto.public.v1.GetArticleResponse}
 */
proto.public.v1.GetArticleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.public.v1.GetArticleResponse;
  return proto.public.v1.GetArticleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.public.v1.GetArticleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.public.v1.GetArticleResponse}
 */
proto.public.v1.GetArticleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new public_v1_article_pb.Article;
      reader.readMessage(value,public_v1_article_pb.Article.deserializeBinaryFromReader);
      msg.setArticle(value);
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
proto.public.v1.GetArticleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.public.v1.GetArticleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.public.v1.GetArticleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.public.v1.GetArticleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArticle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      public_v1_article_pb.Article.serializeBinaryToWriter
    );
  }
};


/**
 * optional Article article = 1;
 * @return {?proto.public.v1.Article}
 */
proto.public.v1.GetArticleResponse.prototype.getArticle = function() {
  return /** @type{?proto.public.v1.Article} */ (
    jspb.Message.getWrapperField(this, public_v1_article_pb.Article, 1));
};


/**
 * @param {?proto.public.v1.Article|undefined} value
 * @return {!proto.public.v1.GetArticleResponse} returns this
*/
proto.public.v1.GetArticleResponse.prototype.setArticle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.public.v1.GetArticleResponse} returns this
 */
proto.public.v1.GetArticleResponse.prototype.clearArticle = function() {
  return this.setArticle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.public.v1.GetArticleResponse.prototype.hasArticle = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.public.v1);
