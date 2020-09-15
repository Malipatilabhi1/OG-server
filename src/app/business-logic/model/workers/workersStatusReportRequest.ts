/**
 * workers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.9
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { MachineStats } from './machineStats';


export interface WorkersStatusReportRequest {
    /**
     * Worker id.
     */
    worker: string;
    /**
     * ID of a task currently being run by the worker. If no task is sent, the   worker\'s task field will be cleared.
     */
    task?: string;
    /**
     * ID of the queue from which task was received. If no queue is sent, the worker\'s   queue field will be cleared.
     */
    queue?: string;
    /**
     * List of queue IDs on which the worker is listening. If null, the worker\'s   queues list will not be updated.
     */
    queues?: Array<string>;
    /**
     * UNIX time in seconds since epoch.
     */
    timestamp: number;
    machine_stats?: MachineStats;
}
