# \ComputeProviderApi

All URIs are relative to *https://koding.com/remote.api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](ComputeProviderApi.md#Create) | **Post** /ComputeProvider.create | 
[**CreateGroupStack**](ComputeProviderApi.md#CreateGroupStack) | **Post** /ComputeProvider.createGroupStack | 
[**FetchAvailable**](ComputeProviderApi.md#FetchAvailable) | **Post** /ComputeProvider.fetchAvailable | 
[**FetchProviders**](ComputeProviderApi.md#FetchProviders) | **Post** /ComputeProvider.fetchProviders | 
[**Ping**](ComputeProviderApi.md#Ping) | **Post** /ComputeProvider.ping | 
[**Remove**](ComputeProviderApi.md#Remove) | **Post** /ComputeProvider.remove | 
[**SetGroupStack**](ComputeProviderApi.md#SetGroupStack) | **Post** /ComputeProvider.setGroupStack | 
[**Update**](ComputeProviderApi.md#Update) | **Post** /ComputeProvider.update | 
[**UpdateTeamCounters**](ComputeProviderApi.md#UpdateTeamCounters) | **Post** /ComputeProvider.updateTeamCounters | 


# **Create**
> JMachine Create($body)



creates a JMachine for requested provider with the provided options


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body1**](Body1.md)| body of the request | 

### Return type

[**JMachine**](JMachine.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateGroupStack**
> DefaultResponse CreateGroupStack()



Method ComputeProvider.createGroupStack


### Parameters
This endpoint does not need any parameter.

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FetchAvailable**
> DefaultResponse FetchAvailable($body)






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

# **FetchProviders**
> DefaultResponse FetchProviders()






### Parameters
This endpoint does not need any parameter.

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Ping**
> DefaultResponse Ping($body)



pings to requested provider implementation


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Remove**
> DefaultResponse Remove($body)






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

# **SetGroupStack**
> DefaultResponse SetGroupStack($body)



Method ComputeProvider.setGroupStack


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

# **Update**
> DefaultResponse Update($body)






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

# **UpdateTeamCounters**
> DefaultResponse UpdateTeamCounters($body)



Method ComputeProvider.updateTeamCounters


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

