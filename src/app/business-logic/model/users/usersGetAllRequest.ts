/**
 * users
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.9
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface UsersGetAllRequest {
    /**
     * Get only users whose name matches this pattern (python regular expression   syntax)
     */
    name?: string;
    /**
     * List of user IDs used to filter results
     */
    id?: Array<string>;
    /**
     * List of user field names (if applicable, nesting is supported using \'.\'). If   provided, this list defines the query\'s projection (only these fields will be   returned for each result entry)
     */
    only_fields?: Array<string>;
    /**
     * Page number, returns a specific page out of the resulting list of users
     */
    page?: number;
    /**
     * Page size, specifies the number of results returned in each page (last page may   contain fewer results)
     */
    page_size?: number;
    /**
     * List of field names to order by. Use \'-\' prefix to specify descending order.   Optional, recommended when using page
     */
    order_by?: Array<string>;
}
