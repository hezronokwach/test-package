# Unixar Mappers

Type-safe mapper functions for transforming model data into select options for UI components.

## Installation

Install directly from GitHub:

```bash
npm install github:hezronokwach/test-package
```

Or add to your package.json:

```json
{
  "dependencies": {
    "unixar-mappers": "github:hezronokwach/test-package#v1.0.0"
  }
}
```

## Usage

### Basic Example

```typescript
import { mapper } from 'unixar-mappers'
import type { AcademicLevel } from 'unixar-mappers'

const academicLevels: AcademicLevel[] = [
  { id: 1, name: 'Undergraduate' },
  { id: 2, name: 'Postgraduate' }
]

const mapperFn = mapper<AcademicLevel>('academic_levels')
const options = mapperFn(academicLevels)

console.log(options)
// Output: [
//   { label: 'Undergraduate', value: 1 },
//   { label: 'Postgraduate', value: 2 }
// ]
```

### With Type Safety

```typescript
import { mapper, MapperFunction, SelectOption } from 'unixar-mappers'
import type { Country } from 'unixar-mappers'

const countries: Country[] = [
  { id: 1, name: 'Kenya', dial_code: '+254', short_code: 'KE' },
  { id: 2, name: 'Uganda', dial_code: '+256', short_code: 'UG' }
]

const countryMapper: MapperFunction<Country> = mapper('countries')
const countryOptions: SelectOption[] = countryMapper(countries)
```

### With Additional Fields

```typescript
import { mapper } from 'unixar-mappers'
import type { Department } from 'unixar-mappers'

const departments: Department[] = [
  { id: 1, display_name: 'Computer Science', alias: 'CS', campus: undefined },
  { id: 2, display_name: 'Mathematics', alias: 'MATH', campus: undefined }
]

const departmentMapper = mapper<Department>('departments')
const options = departmentMapper(departments)

console.log(options)
// Output: [
//   { value: 1, label: 'Computer Science', caption: 'CS' },
//   { value: 2, label: 'Mathematics', caption: 'MATH' }
// ]
```

## Available Mappers

The package provides mappers for the following data types:

- `academic_levels` - Academic level data
- `academic_terms` - Academic term data
- `academic_titles` - Academic title data
- `academic_qualifications` - Academic qualification data
- `academic_years` - Academic year data
- `campuses` - Campus data with alias
- `cohorts` - Cohort data
- `countries` - Country data
- `course_units` - Course unit data
- `courses` - Course data
- `departments` - Department data with alias
- `digital_file_types` - Digital file type data
- `genders` - Gender data
- `honorifics` - Honorific data
- `institutions` - Institution data with logo
- `intakes` - Intake data
- `marital_statuses` - Marital status data
- `religions` - Religion data
- `semesters` - Semester data

## API Reference

### mapper(functionMapper: string)

Returns a mapper function for the specified data type.

**Parameters:**
- `functionMapper` (string) - The name of the mapper to use

**Returns:**
- `MapperFunction<T>` - A function that transforms an array of type T into SelectOption[]

### Types

#### SelectOption

```typescript
type SelectOption = {
  label: string
  value: string | number
  caption?: string
  avatar?: string
}
```

#### MapperFunction

```typescript
type MapperFunction<T> = (collection: T[]) => SelectOption[]
```

## Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

```bash
git clone https://github.com/hezronokwach/test-package.git
cd test-package
npm install
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

## Project Structure

```
test-package/
├── src/
│   ├── types/
│   │   ├── common.ts      # SelectOption type definition
│   │   └── models.ts      # Model type definitions
│   ├── mappers.ts         # Mapper implementations
│   └── index.ts           # Package entry point
├── tests/
│   └── mappers.test.ts    # Unit tests
├── build/                 # Compiled output
├── package.json
├── tsconfig.json
└── README.md
```

## License

MIT

## Author

fayaz

## Repository

https://github.com/hezronokwach/test-package
