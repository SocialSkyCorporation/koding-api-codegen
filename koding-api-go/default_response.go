/* 
 * Koding API
 *
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type DefaultResponse struct {

	// If the request processed by endpoint
	Ok bool `json:"ok,omitempty"`

	// Error description
	Error_ interface{} `json:"error,omitempty"`

	// Result of the operation
	Data interface{} `json:"data,omitempty"`
}
