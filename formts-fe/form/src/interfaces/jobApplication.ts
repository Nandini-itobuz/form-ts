export interface JobApplication {
    firstName: string | null;
    middleName?: string | null;
    age: number | null;
    lastName: string | null;
    email: string;
    phone: number | undefined;
    position: string | null;
    institution: string | null
    degree: string | null;
    fieldOfStudy?: string | null;
    startDate?: Date | null;
    score: number | null
    yearsOfExperience: number | null;
    status: boolean | null,
}