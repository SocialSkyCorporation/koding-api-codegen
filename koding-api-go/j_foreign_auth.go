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

type JForeignAuth struct {

	Id string `json:"_id,omitempty"`

	Username string `json:"username"`

	Group string `json:"group"`

	Provider string `json:"provider"`

	ForeignId string `json:"foreignId"`

	ForeignData interface{} `json:"foreignData,omitempty"`
}
