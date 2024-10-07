import { Job, Worker } from "bullmq";

import redisConnection from "../config/redisConfig";
import SampleJob from "../jobs/SampleJob";

export default function SampleWorker (queuename:string){
    new Worker(
        queuename,
        async (job: Job) => {
            if(job.name === "SampleJob"){
                const sampleJobInstance = new SampleJob(job.data);
                
                sampleJobInstance.handle(job);
                return true;
            }
        },
        {
            connection:redisConnection,
        }
    );
}