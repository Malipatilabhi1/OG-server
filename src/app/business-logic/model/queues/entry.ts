/**
 * queues
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.9
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface Entry {
    /**
     * Queued task ID
     */
    task?: string;
    /**
     * Time this entry was added to the queue
     */
    added?: Date;
}
