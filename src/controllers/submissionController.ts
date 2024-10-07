import { Request, Response } from "express";

import { CreateSubmisionDto } from "../dtos/CreateSubmisionDto";

export function addSubmission(req: Request, res: Response){
    const submissionDto = req.body as CreateSubmisionDto;
    
    //  

    return res.status(201).json({
        success : true,
        error : {},
        message : "Successfully collected the submission",
        data : submissionDto,
    });
}