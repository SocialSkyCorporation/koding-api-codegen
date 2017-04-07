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

import (
	"time"
)

type JProxyRestriction struct {

	Id string `json:"_id,omitempty"`

	DomainName string `json:"domainName,omitempty"`

	Filters []string `json:"filters,omitempty"`

	Owner string `json:"owner,omitempty"`

	CreatedAt time.Time `json:"createdAt,omitempty"`

	ModifiedAt time.Time `json:"modifiedAt,omitempty"`
}
