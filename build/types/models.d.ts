export type AcademicLevel = {
    id: number;
    name: string;
};
export type AcademicTerm = {
    id: number;
    name: string;
};
export type AcademicTitle = {
    id: number;
    alias: string;
    display_name: string;
    rank: number;
};
export type AcademicQualification = {
    id: number;
    name: string;
    academic_title?: AcademicTitle;
};
export type AcademicYear = {
    id: number;
    name: string;
    commencing_at: string;
    concluding_at: string;
    starting_date: string;
    ending_date: string;
};
export type ProgramGroup = {
    id: number;
    name: string;
};
export type Allocation = {
    id: number;
    status: 'pending' | 'accepted' | 'rejected';
    is_normal_load: boolean;
    course_unit?: CourseUnit;
    program_group?: ProgramGroup;
};
export type Bid = {
    id: number;
    course_unit_id: string;
};
export type Biographic = {
    id: number;
    dob_formatted: string;
    date_of_birth: string;
    gender?: Gender;
    marital_status?: MaritalStatus;
    religion?: Religion;
};
export type Campus = {
    id: string;
    name: string;
    alias: string;
    institution?: Institution;
};
export type Cohort = {
    id: number;
    display_name?: string;
    program?: Program;
    semester?: Semester;
    academic_term: AcademicTerm;
    academic_level: AcademicLevel;
};
export type Country = {
    id: number;
    name: string;
    dial_code: string;
    short_code: string;
};
export type Course = {
    id: number;
    name: string;
    details: string;
    thumbnail: string;
    institution?: Institution;
    academic_title?: AcademicTitle;
};
export type CourseClass = {
    id: number;
    cohort?: Cohort;
    department?: Department;
    course_unit?: CourseUnit;
};
export type CourseOption = {
    id: number;
    name: string;
};
export type CourseUnit = {
    id: number;
    course_id: string;
    course: Course;
    unit: Unit;
    course_option?: CourseOption;
    academic_term?: AcademicTerm;
    academic_level?: AcademicLevel;
};
export type Department = {
    id: number;
    display_name: string;
    alias?: string;
    campus?: Campus;
};
export type DigitalFile = {
    id: number;
    front: string;
    back: string | null;
    digital_file_type?: DigitalFileType;
};
export type DigitalFileType = {
    id: number;
    name: string;
    has_back: boolean;
    display_name: string;
};
export type Education = {
    id: number;
    certificate?: DigitalFile;
    academic_qualification: AcademicQualification;
};
export type Gender = {
    id: number;
    name: string;
};
export type Honorific = {
    id: number;
    name: string;
};
export type Institution = {
    id: number;
    name: string;
    alias?: string;
    logo?: string;
    email_suffix: string;
    account?: User;
    departments: Department[];
};
export type Intake = {
    id: number;
    display_name: string;
    has_evening_classes: boolean;
    cohort?: Cohort;
};
export type LecturerApplication = {
    id: number;
    status: string;
    applied_at: string;
    evaluated_at: string | null;
    department: Department;
};
export type Lesson = {
    id: number;
    uuid: string;
    day: string;
    happened_at: string;
    schedule?: Schedule;
    lecturer?: Staff;
    unit?: Unit;
    stream?: Stream;
    course?: Course;
};
export type MaritalStatus = {
    id: number;
    name: string;
};
export type Profile = {
    id: string;
    uuid: string;
    email: string;
    phone: string;
    avatar: string | null;
    name: string;
    full_name: string;
    first_name: string;
    middle_name: string | null;
    family_name: string;
    country?: Country;
    honorific?: Honorific;
};
export type Program = {
    id: number;
    course?: Course;
    department?: Department;
};
export type Publication = {
    id: number;
    title: string;
    link: string;
};
export type Religion = {
    id: number;
    name: string;
};
export type Schedule = {
    id: number;
    period: string;
    start_time: string;
    day_of_week: string;
    course_unit?: CourseUnit;
    cohort?: Cohort;
    venue?: Venue;
};
export type Semester = {
    id: number;
    commencing_at: string;
    concluding_at: string;
    is_bidding_open: boolean;
    display_name: string;
    display_name_short: string;
    display_name_month: string;
};
export type Staff = {
    id: number;
    user_id: number;
    staff_number: string;
    user?: User;
    department?: Department;
};
export type StaffLevel = {
    id: number;
    name: string;
    display_name: string;
    part_time_load: string;
    full_time_load: string | null;
    is_system_managed: boolean;
};
export type Stream = {
    id: number;
    name: string;
    period: 'DAY' | 'EVENING';
    cohort?: Cohort;
};
export type StudentApplication = {
    id: number;
    status: string;
    period: string;
    applied_at: string;
    applied_at_display: string;
    evaluated_at: string;
    evaluated_at_display: string;
    intake?: Intake;
    student?: Student;
};
export type Student = {
    id: number;
    registration_number: string;
    has_completed: string;
    user?: User;
    cohort?: Cohort;
    student_application?: StudentApplication;
};
export type Unit = {
    id: number;
    name: string;
    code: string;
};
export type User = {
    id: number;
    email: string;
    staff?: Staff;
    student?: Student;
    profile?: Profile;
};
export type Venue = {
    id: number;
    name: string;
    campus?: Campus;
};
//# sourceMappingURL=models.d.ts.map