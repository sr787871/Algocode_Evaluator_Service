import express from 'express';

import { addSubmission } from '../../controllers/submissionController';
import { createSubmissionZodSchema } from '../../dtos/CreateSubmisionDto';
import { validate } from '../../validators/ZodValidator';

const submissionRouter = express.Router();

submissionRouter.post('/',
    validate(createSubmissionZodSchema),
    addSubmission);

export default submissionRouter;