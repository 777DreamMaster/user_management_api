# UserManagementApi.DefaultApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](DefaultApi.md#createUser) | **POST** /users | Create a new user
[**deleteUser**](DefaultApi.md#deleteUser) | **DELETE** /users/{userId} | Delete a user by ID
[**getUserById**](DefaultApi.md#getUserById) | **GET** /users/{userId} | Get a user by ID
[**getUsers**](DefaultApi.md#getUsers) | **GET** /users | Get all users

<a name="createUser"></a>
# **createUser**
> createUser(body)

Create a new user

### Example
```javascript
import {UserManagementApi} from 'user_management_api';

let apiInstance = new UserManagementApi.DefaultApi();
let body = new UserManagementApi.User(); // User | 

apiInstance.createUser(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userId)

Delete a user by ID

### Example
```javascript
import {UserManagementApi} from 'user_management_api';

let apiInstance = new UserManagementApi.DefaultApi();
let userId = "userId_example"; // String | The ID of the user to delete.

apiInstance.deleteUser(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The ID of the user to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserById"></a>
# **getUserById**
> User getUserById(userId)

Get a user by ID

### Example
```javascript
import {UserManagementApi} from 'user_management_api';

let apiInstance = new UserManagementApi.DefaultApi();
let userId = "userId_example"; // String | The ID of the user to retrieve.

apiInstance.getUserById(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The ID of the user to retrieve. | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> [User] getUsers()

Get all users

### Example
```javascript
import {UserManagementApi} from 'user_management_api';

let apiInstance = new UserManagementApi.DefaultApi();
apiInstance.getUsers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

