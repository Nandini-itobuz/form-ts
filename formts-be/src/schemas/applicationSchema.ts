import mongoose from 'mongoose'
import { JobApplication } from '../interfaces/jobApplication';
const schema = mongoose.Schema;

const jobApplicationSchema = new schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    position: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true },
    institution: { type: String, required: true },
    degree: { type: String },
    fieldOfStudy: { type: String },
    startDate: { type: Date },
    score: { type: Number, required: true },
    status: Boolean
});

export const JAModel = mongoose.model<JobApplication>('JobApplication', jobApplicationSchema);

// {
//     "firstName" : "qwer",
//     "lastName" : "asdf",
//     "age":23,
//     "email":"ss@gmail.com",
//     "phone":1234567890,
//     "position" : "assasdc",
//     "yearsOfExperience": 1,
//     "status":true,
//     "education": [{
//           "institution": "kiit",
//           "degree": "swdcdc",
//           "fieldOfStudy": "it",
//           "score" : 90
//       }]
//   }
