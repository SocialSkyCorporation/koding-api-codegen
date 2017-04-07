/**
 * Koding API
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'koding-api/JUserRegisteredFrom'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JUserRegisteredFrom'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.JUser = factory(root.KodingApi.ApiClient, root.KodingApi.JUserRegisteredFrom);
  }
}(this, function(ApiClient, JUserRegisteredFrom) {
  'use strict';




  /**
   * The JUser model module.
   * @module koding-api/JUser
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>JUser</code>.
   * @alias module:koding-api/JUser
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>JUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/JUser} obj Optional instance to populate.
   * @return {module:koding-api/JUser} The populated <code>JUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('oldUsername')) {
        obj['oldUsername'] = ApiClient.convertToType(data['oldUsername'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('sanitizedEmail')) {
        obj['sanitizedEmail'] = ApiClient.convertToType(data['sanitizedEmail'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('salt')) {
        obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
      }
      if (data.hasOwnProperty('twofactorkey')) {
        obj['twofactorkey'] = ApiClient.convertToType(data['twofactorkey'], 'String');
      }
      if (data.hasOwnProperty('blockedUntil')) {
        obj['blockedUntil'] = ApiClient.convertToType(data['blockedUntil'], 'Date');
      }
      if (data.hasOwnProperty('blockedReason')) {
        obj['blockedReason'] = ApiClient.convertToType(data['blockedReason'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('passwordStatus')) {
        obj['passwordStatus'] = ApiClient.convertToType(data['passwordStatus'], 'String');
      }
      if (data.hasOwnProperty('registeredAt')) {
        obj['registeredAt'] = ApiClient.convertToType(data['registeredAt'], 'Date');
      }
      if (data.hasOwnProperty('registeredFrom')) {
        obj['registeredFrom'] = JUserRegisteredFrom.constructFromObject(data['registeredFrom']);
      }
      if (data.hasOwnProperty('lastLoginDate')) {
        obj['lastLoginDate'] = ApiClient.convertToType(data['lastLoginDate'], 'Date');
      }
      if (data.hasOwnProperty('emailFrequency')) {
        obj['emailFrequency'] = ApiClient.convertToType(data['emailFrequency'], Object);
      }
      if (data.hasOwnProperty('sshKeys')) {
        obj['sshKeys'] = ApiClient.convertToType(data['sshKeys'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} oldUsername
   */
  exports.prototype['oldUsername'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} sanitizedEmail
   */
  exports.prototype['sanitizedEmail'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} salt
   */
  exports.prototype['salt'] = undefined;
  /**
   * @member {String} twofactorkey
   */
  exports.prototype['twofactorkey'] = undefined;
  /**
   * @member {Date} blockedUntil
   */
  exports.prototype['blockedUntil'] = undefined;
  /**
   * @member {String} blockedReason
   */
  exports.prototype['blockedReason'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} passwordStatus
   */
  exports.prototype['passwordStatus'] = undefined;
  /**
   * @member {Date} registeredAt
   */
  exports.prototype['registeredAt'] = undefined;
  /**
   * @member {module:koding-api/JUserRegisteredFrom} registeredFrom
   */
  exports.prototype['registeredFrom'] = undefined;
  /**
   * @member {Date} lastLoginDate
   */
  exports.prototype['lastLoginDate'] = undefined;
  /**
   * @member {Object} emailFrequency
   */
  exports.prototype['emailFrequency'] = undefined;
  /**
   * @member {Object} sshKeys
   */
  exports.prototype['sshKeys'] = undefined;



  return exports;
}));

