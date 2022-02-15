/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface TasksUpdateRequest {
    /**
     * ID of the task
     */
    task: string;
    /**
     * Task name Unique within the company.
     */
    name?: string;
    /**
     * User-defined tags list
     */
    tags?: Array<string>;
    /**
     * System tags list. This field is reserved for system use, please don\'t use it.
     */
    system_tags?: Array<string>;
    /**
     * Free text comment
     */
    comment?: string;
    /**
     * Project ID of the project to which this task is assigned
     */
    project?: string;
    /**
     * Free text error
     */
    output__error?: string;
    /**
     * Task creation time (UTC)
     */
    created?: string;
}