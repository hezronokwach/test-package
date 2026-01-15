import { SelectOption } from './types/common'
import {
    AcademicLevel,
    AcademicQualification,
    AcademicTerm,
    AcademicTitle,
    AcademicYear,
    Campus,
    Cohort,
    Country,
    Course,
    CourseUnit,
    Department,
    DigitalFileType,
    Gender,
    Honorific,
    Institution,
    Intake,
    MaritalStatus,
    Religion,
    Semester
} from './types/models';

export type MapperFunction<T> = (collection: T[]) => SelectOption[];

const functionMappers: Record<string, MapperFunction<any>> = {
    academic_levels: (academicLevels: AcademicLevel[]): SelectOption[] => {
        return academicLevels.map((academicLevel) => ({
            label: academicLevel.name,
            value: academicLevel.id,
        }))
    },

    academic_terms: (academicTerms: AcademicTerm[]): SelectOption[] => {
        return academicTerms.map((academicTerm) => ({
            label: academicTerm.name,
            value: academicTerm.id,
        }))
    },

    academic_titles: (academicTitles: AcademicTitle[]): SelectOption[] => {
        return academicTitles.map((academicTitle) => ({
            label: academicTitle.display_name,
            value: academicTitle.id,
        }))
    },

    academic_qualifications: (academicQualifications: AcademicQualification[]): SelectOption[] => {
        return academicQualifications.map((academicQualification) => ({
            value: academicQualification.id,
            label: academicQualification.name,
        }))
    },

    academic_years: (academicYears: AcademicYear[]): SelectOption[] => {
        return academicYears.map((academicYear) => ({
            label: academicYear.name,
            value: academicYear.id,
        }))
    },

    campuses: (campuses: Campus[]): SelectOption[] => {
        return campuses.map((campus) => ({
            value: campus.id,
            label: campus.name,
            caption: campus.alias,
        }))
    },

    cohorts: (cohorts: Cohort[]): SelectOption[] => {
        return cohorts.map((cohort) => ({
            value: cohort.id,
            label: `${cohort.academic_level.name} - ${cohort.academic_term.name}`,
        }))
    },

    countries: (countries: Country[]): SelectOption[] => {
        return countries.map((country) => ({
            value: country.id,
            label: country.name,
        }))
    },

    course_units: (courseUnits: CourseUnit[]): SelectOption[] => {
        return courseUnits.map((courseUnit) => ({
            value: courseUnit.id,
            label: `${courseUnit.unit!.name} - ${courseUnit.unit!.code}`,
            caption: courseUnit.course!.name,
        }))
    },

    courses: (courses: Course[]): SelectOption[] => {
        return courses.map((course) => ({
            value: course.id,
            label: course.name,
        }))
    },

    departments: (departments: Department[]): SelectOption[] => {
        return departments.map((department) => ({
            value: department.id,
            label: department.display_name,
            caption: department.alias,
        }))
    },

    digital_file_types: (digitalFileTypes: DigitalFileType[]): SelectOption[] => {
        return digitalFileTypes.map((digitalFileType) => ({
            value: digitalFileType.id,
            label: digitalFileType.display_name
        }))
    },

    genders: (genders: Gender[]): SelectOption[] => {
        return genders.map((gender) => ({
            value: gender.id,
            label: gender.name,
        }))
    },

    honorifics: (honorifics: Honorific[]): SelectOption[] => {
        return honorifics.map((honorific) => ({
            value: honorific.id,
            label: honorific.name,
        }))
    },

    institutions: (institutions: Institution[]): SelectOption[] => {
        return institutions.map((institution) => ({
            value: institution.id,
            label: institution.name,
            avatar: institution.logo,
            caption: institution.alias,
        }))
    },

    intakes: (intakes: Intake[]): SelectOption[] => {
        return intakes.map((intake) => ({
            value: intake.id,
            label: intake.display_name,
            // caption: institution.alias,
        }))
    },

    marital_statuses: (maritalStatuses: MaritalStatus[]): SelectOption[] => {
        return maritalStatuses.map((maritalStatus) => ({
            value: maritalStatus.id,
            label: maritalStatus.name
        }))
    },

    religions: (religions: Religion[]): SelectOption[] => {
        return religions.map((religion) => ({
            value: religion.id,
            label: religion.name
        }))
    },

    semesters: (semesters: Semester[]): SelectOption[] => {
        return semesters.map((semester) => ({
            value: semester.id,
            label: semester.display_name_month,
        }))
    },
}

export const mapper = <T>(functionMapper: string): MapperFunction<T> => {
    return functionMappers[functionMapper];
}
