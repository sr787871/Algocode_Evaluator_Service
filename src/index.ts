import express,{ Express } from "express";

import bullBoardAdapter from "./config/bullBoardConfig";
import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/sampleWorker";

const app : Express = express();

app.use('/api',apiRouter);
app.use('/ui',bullBoardAdapter.getRouter());

app.listen(serverConfig.PORT,()=>{
    console.log(`Server started at ${serverConfig.PORT}`);
    console.log(`BullBoard dashboard running on: http://localhost:${serverConfig.PORT}/ui`);

    SampleWorker("SampleQueue");

    sampleQueueProducer('SampleJob',{
        name : "Sachin",
        company : "XYZ",
        position : "Intern",
        location : "Delhi | Remote", 
    },2);
    sampleQueueProducer('SampleJob',{
        name : "Hello",
        company : "XYZ",
        position : "Intern",
        location : "Delhi | Remote", 
    },1);
});