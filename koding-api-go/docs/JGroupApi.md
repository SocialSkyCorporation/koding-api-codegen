# \JGroupApi

All URIs are relative to *https://koding.com/remote.api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddSubscription**](JGroupApi.md#AddSubscription) | **Post** /JGroup.addSubscription/{id} | 
[**ByRelevance**](JGroupApi.md#ByRelevance) | **Post** /JGroup.byRelevance | 
[**CanEditGroup**](JGroupApi.md#CanEditGroup) | **Post** /JGroup.canEditGroup/{id} | 
[**ChangeMemberRoles**](JGroupApi.md#ChangeMemberRoles) | **Post** /JGroup.changeMemberRoles/{id} | 
[**Count**](JGroupApi.md#Count) | **Post** /JGroup.count | 
[**Create**](JGroupApi.md#Create) | **Post** /JGroup.create | 
[**Destroy**](JGroupApi.md#Destroy) | **Post** /JGroup.destroy/{id} | 
[**Each**](JGroupApi.md#Each) | **Post** /JGroup.each | 
[**FetchAdmins**](JGroupApi.md#FetchAdmins) | **Post** /JGroup.fetchAdmins/{id} | 
[**FetchAdminsWithEmail**](JGroupApi.md#FetchAdminsWithEmail) | **Post** /JGroup.fetchAdminsWithEmail/{id} | 
[**FetchApiTokens**](JGroupApi.md#FetchApiTokens) | **Post** /JGroup.fetchApiTokens/{id} | 
[**FetchBlockedAccounts**](JGroupApi.md#FetchBlockedAccounts) | **Post** /JGroup.fetchBlockedAccounts/{id} | 
[**FetchBlockedAccountsWithEmail**](JGroupApi.md#FetchBlockedAccountsWithEmail) | **Post** /JGroup.fetchBlockedAccountsWithEmail/{id} | 
[**FetchDataAt**](JGroupApi.md#FetchDataAt) | **Post** /JGroup.fetchDataAt/{id} | 
[**FetchMembers**](JGroupApi.md#FetchMembers) | **Post** /JGroup.fetchMembers/{id} | 
[**FetchMembersWithEmail**](JGroupApi.md#FetchMembersWithEmail) | **Post** /JGroup.fetchMembersWithEmail/{id} | 
[**FetchModerators**](JGroupApi.md#FetchModerators) | **Post** /JGroup.fetchModerators/{id} | 
[**FetchModeratorsWithEmail**](JGroupApi.md#FetchModeratorsWithEmail) | **Post** /JGroup.fetchModeratorsWithEmail/{id} | 
[**FetchMyMemberships**](JGroupApi.md#FetchMyMemberships) | **Post** /JGroup.fetchMyMemberships | 
[**FetchMyRoles**](JGroupApi.md#FetchMyRoles) | **Post** /JGroup.fetchMyRoles/{id} | 
[**FetchPermissionSetOrDefault**](JGroupApi.md#FetchPermissionSetOrDefault) | **Post** /JGroup.fetchPermissionSetOrDefault/{id} | 
[**FetchPermissions**](JGroupApi.md#FetchPermissions) | **Post** /JGroup.fetchPermissions/{id} | 
[**FetchResources**](JGroupApi.md#FetchResources) | **Post** /JGroup.fetchResources/{id} | 
[**FetchRoles**](JGroupApi.md#FetchRoles) | **Post** /JGroup.fetchRoles/{id} | 
[**FetchSubscription**](JGroupApi.md#FetchSubscription) | **Post** /JGroup.fetchSubscription/{id} | 
[**FetchUserRoles**](JGroupApi.md#FetchUserRoles) | **Post** /JGroup.fetchUserRoles/{id} | 
[**FetchUserStatus**](JGroupApi.md#FetchUserStatus) | **Post** /JGroup.fetchUserStatus/{id} | 
[**IsMember**](JGroupApi.md#IsMember) | **Post** /JGroup.isMember/{id} | 
[**Join**](JGroupApi.md#Join) | **Post** /JGroup.join/{id} | 
[**JoinUser**](JGroupApi.md#JoinUser) | **Post** /JGroup.joinUser | 
[**KickMember**](JGroupApi.md#KickMember) | **Post** /JGroup.kickMember/{id} | 
[**Leave**](JGroupApi.md#Leave) | **Post** /JGroup.leave/{id} | 
[**Modify**](JGroupApi.md#Modify) | **Post** /JGroup.modify/{id} | 
[**ModifyData**](JGroupApi.md#ModifyData) | **Post** /JGroup.modifyData/{id} | 
[**One**](JGroupApi.md#One) | **Post** /JGroup.one | 
[**SearchMembers**](JGroupApi.md#SearchMembers) | **Post** /JGroup.searchMembers/{id} | 
[**SendNotification**](JGroupApi.md#SendNotification) | **Post** /JGroup.sendNotification/{id} | 
[**SetLimit**](JGroupApi.md#SetLimit) | **Post** /JGroup.setLimit/{id} | 
[**SetOAuth**](JGroupApi.md#SetOAuth) | **Post** /JGroup.setOAuth/{id} | 
[**SomeWithRelationship**](JGroupApi.md#SomeWithRelationship) | **Post** /JGroup.someWithRelationship | 
[**SuggestUniqueSlug**](JGroupApi.md#SuggestUniqueSlug) | **Post** /JGroup.suggestUniqueSlug | 
[**ToggleFeature**](JGroupApi.md#ToggleFeature) | **Post** /JGroup.toggleFeature/{id} | 
[**TransferOwnership**](JGroupApi.md#TransferOwnership) | **Post** /JGroup.transferOwnership/{id} | 
[**UnblockMember**](JGroupApi.md#UnblockMember) | **Post** /JGroup.unblockMember/{id} | 
[**UpdatePermissions**](JGroupApi.md#UpdatePermissions) | **Post** /JGroup.updatePermissions/{id} | 


# **AddSubscription**
> DefaultResponse AddSubscription($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ByRelevance**
> DefaultResponse ByRelevance($body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CanEditGroup**
> DefaultResponse CanEditGroup($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ChangeMemberRoles**
> DefaultResponse ChangeMemberRoles($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Count**
> DefaultResponse Count($body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Create**
> DefaultResponse Create($body)



Method JGroup.create


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Destroy**
> DefaultResponse Destroy($id, $body)



Method JGroup.destroy


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Each**
> DefaultResponse Each($body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchAdmins**
> DefaultResponse FetchAdmins($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchAdminsWithEmail**
> DefaultResponse FetchAdminsWithEmail($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchApiTokens**
> DefaultResponse FetchApiTokens($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchBlockedAccounts**
> DefaultResponse FetchBlockedAccounts($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchBlockedAccountsWithEmail**
> DefaultResponse FetchBlockedAccountsWithEmail($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchDataAt**
> DefaultResponse FetchDataAt($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchMembers**
> DefaultResponse FetchMembers($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchMembersWithEmail**
> DefaultResponse FetchMembersWithEmail($id, $body)



Method JGroup.fetchMembersWithEmail


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchModerators**
> DefaultResponse FetchModerators($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchModeratorsWithEmail**
> DefaultResponse FetchModeratorsWithEmail($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchMyMemberships**
> DefaultResponse FetchMyMemberships($body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchMyRoles**
> DefaultResponse FetchMyRoles($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchPermissionSetOrDefault**
> DefaultResponse FetchPermissionSetOrDefault($id, $body)



Method JGroup.fetchPermissionSetOrDefault


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchPermissions**
> DefaultResponse FetchPermissions($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchResources**
> DefaultResponse FetchResources($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchRoles**
> DefaultResponse FetchRoles($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchSubscription**
> DefaultResponse FetchSubscription($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchUserRoles**
> DefaultResponse FetchUserRoles($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchUserStatus**
> DefaultResponse FetchUserStatus($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IsMember**
> DefaultResponse IsMember($id, $body)



Method JGroup.isMember


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Join**
> DefaultResponse Join($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **JoinUser**
> DefaultResponse JoinUser($body)



joinUser  Joins user with given options to group either by logging in or converting them.


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **KickMember**
> DefaultResponse KickMember($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Leave**
> DefaultResponse Leave($id, $body)



Method JGroup.leave


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Modify**
> DefaultResponse Modify($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ModifyData**
> ModelError ModifyData($id, $body)



modifies JGroupData related with the JGroup instance


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**Body4**](Body4.md)| body of the request | 

### Return type

[**ModelError**](Error.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **One**
> DefaultResponse One($body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SearchMembers**
> DefaultResponse SearchMembers($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SendNotification**
> DefaultResponse SendNotification($id, $body)



Method JGroup.sendNotification


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SetLimit**
> DefaultResponse SetLimit($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SetOAuth**
> DefaultResponse SetOAuth($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SomeWithRelationship**
> DefaultResponse SomeWithRelationship($body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SuggestUniqueSlug**
> DefaultResponse SuggestUniqueSlug($body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ToggleFeature**
> DefaultResponse ToggleFeature($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TransferOwnership**
> DefaultResponse TransferOwnership($id, $body)



Method JGroup.transferOwnership


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UnblockMember**
> DefaultResponse UnblockMember($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UpdatePermissions**
> DefaultResponse UpdatePermissions($id, $body)






### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

