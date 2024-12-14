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
import ApiClient from './ApiClient';
import User from './model/User';
import DefaultApi from './api/DefaultApi';

/**
* A_simple_API_for_managing_users_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var UserManagementApi = require('index'); // See note below*.
* var xxxSvc = new UserManagementApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new UserManagementApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new UserManagementApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new UserManagementApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
