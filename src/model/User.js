/*
 * User Management API
 * A simple API for managing users.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.64
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient.js';

/**
 * The User model module.
 * @module model/User
 * @version 1.0.0
 */
export default class User {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   * @param name {String}
   * @param email {String}
   */
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new User();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
User.prototype.id = undefined;

/**
 * @member {String} name
 */
User.prototype.name = undefined;

/**
 * @member {String} email
 */
User.prototype.email = undefined;

