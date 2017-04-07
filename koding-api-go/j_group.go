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

type JGroup struct {

	Id string `json:"_id,omitempty"`

	Title string `json:"title"`

	Body string `json:"body,omitempty"`

	SocialApiChannelId string `json:"socialApiChannelId,omitempty"`

	Avatar string `json:"avatar,omitempty"`

	Slug string `json:"slug,omitempty"`

	Privacy string `json:"privacy,omitempty"`

	Visibility string `json:"visibility,omitempty"`

	Customize JGroupCustomize `json:"customize,omitempty"`

	DisabledFeatures interface{} `json:"disabledFeatures,omitempty"`

	StackTemplates []string `json:"stackTemplates,omitempty"`

	DefaultChannels []string `json:"defaultChannels,omitempty"`

	AllowedDomains []string `json:"allowedDomains,omitempty"`

	Config interface{} `json:"config,omitempty"`

	IsApiEnabled bool `json:"isApiEnabled,omitempty"`

	Payment interface{} `json:"payment,omitempty"`

	Countly interface{} `json:"countly,omitempty"`
}