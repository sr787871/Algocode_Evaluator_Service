import { Job } from "bullmq";

import { iJob } from "../types/bullMqJobDefinition";

export default class SampleJob implements iJob {
    name : string;
    payload: Record<string, unknown>;
    constructor(payload: Record<string,unknown>){
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = () => {
        console.log("handler of the job called");
    };

    failed = (job?: Job): void => {
        console.log("Job Failed");
        if(job){
            console.log(job.id);
        }
    };
}