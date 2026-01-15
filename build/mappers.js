const functionMappers = {
    academic_levels: (academicLevels) => {
        return academicLevels.map((academicLevel) => ({
            label: academicLevel.name,
            value: academicLevel.id,
        }));
    },
    academic_terms: (academicTerms) => {
        return academicTerms.map((academicTerm) => ({
            label: academicTerm.name,
            value: academicTerm.id,
        }));
    },
    academic_titles: (academicTitles) => {
        return academicTitles.map((academicTitle) => ({
            label: academicTitle.display_name,
            value: academicTitle.id,
        }));
    },
    academic_qualifications: (academicQualifications) => {
        return academicQualifications.map((academicQualification) => ({
            value: academicQualification.id,
            label: academicQualification.name,
        }));
    },
    academic_years: (academicYears) => {
        return academicYears.map((academicYear) => ({
            label: academicYear.name,
            value: academicYear.id,
        }));
    },
    campuses: (campuses) => {
        return campuses.map((campus) => ({
            value: campus.id,
            label: campus.name,
            caption: campus.alias,
        }));
    },
    cohorts: (cohorts) => {
        return cohorts.map((cohort) => ({
            value: cohort.id,
            label: `${cohort.academic_level.name} - ${cohort.academic_term.name}`,
        }));
    },
    countries: (countries) => {
        return countries.map((country) => ({
            value: country.id,
            label: country.name,
        }));
    },
    course_units: (courseUnits) => {
        return courseUnits.map((courseUnit) => ({
            value: courseUnit.id,
            label: `${courseUnit.unit.name} - ${courseUnit.unit.code}`,
            caption: courseUnit.course.name,
        }));
    },
    courses: (courses) => {
        return courses.map((course) => ({
            value: course.id,
            label: course.name,
        }));
    },
    departments: (departments) => {
        return departments.map((department) => ({
            value: department.id,
            label: department.display_name,
            caption: department.alias,
        }));
    },
    digital_file_types: (digitalFileTypes) => {
        return digitalFileTypes.map((digitalFileType) => ({
            value: digitalFileType.id,
            label: digitalFileType.display_name
        }));
    },
    genders: (genders) => {
        return genders.map((gender) => ({
            value: gender.id,
            label: gender.name,
        }));
    },
    honorifics: (honorifics) => {
        return honorifics.map((honorific) => ({
            value: honorific.id,
            label: honorific.name,
        }));
    },
    institutions: (institutions) => {
        return institutions.map((institution) => ({
            value: institution.id,
            label: institution.name,
            avatar: institution.logo,
            caption: institution.alias,
        }));
    },
    intakes: (intakes) => {
        return intakes.map((intake) => ({
            value: intake.id,
            label: intake.display_name,
            // caption: institution.alias,
        }));
    },
    marital_statuses: (maritalStatuses) => {
        return maritalStatuses.map((maritalStatus) => ({
            value: maritalStatus.id,
            label: maritalStatus.name
        }));
    },
    religions: (religions) => {
        return religions.map((religion) => ({
            value: religion.id,
            label: religion.name
        }));
    },
    semesters: (semesters) => {
        return semesters.map((semester) => ({
            value: semester.id,
            label: semester.display_name_month,
        }));
    },
};
export const mapper = (functionMapper) => {
    return functionMappers[functionMapper];
};
//# sourceMappingURL=mappers.js.map