# Contributing to Unixar Mappers

Thank you for considering contributing to Unixar Mappers! This document provides guidelines for contributing to the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Adding New Mappers](#adding-new-mappers)
- [Version Update Process](#version-update-process)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/hezronokwach/test-package.git
   cd test-package
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```

## Development Workflow

1. Make your changes in the `src/` directory
2. Run tests to ensure everything works:
   ```bash
   npm test
   ```
3. Build the package:
   ```bash
   npm run build
   ```
4. Commit your changes with a descriptive message

## Adding New Mappers

To add a new mapper function, follow these steps:

### 1. Add Type Definition

Add the model type to `src/types/models.ts`:

```typescript
export type YourModel = {
    id: number,
    name: string,
    // Add other fields as needed
}
```

### 2. Create Mapper Function

Add the mapper function to `src/mappers.ts` in the `functionMappers` object:

```typescript
const functionMappers: Record<string, MapperFunction<any>> = {
    // ... existing mappers
    
    your_model: (yourModels: YourModel[]): SelectOption[] => {
        return yourModels.map((model) => ({
            label: model.name,
            value: model.id,
            // Add caption or avatar if needed
        }))
    },
}
```

### 3. Add Tests

Add test cases to `tests/mappers.test.ts`:

```typescript
it('should map your model correctly', () => {
    const input: YourModel[] = [
        { id: 1, name: 'Test Item' }
    ]
    
    const mapperFn = mapper<YourModel>('your_model')
    const result = mapperFn(input)
    
    expect(result).toEqual([
        { label: 'Test Item', value: 1 }
    ])
})
```

### 4. Update Documentation

Add your mapper to the list in `README.md`:

```markdown
- `your_model` - Your model description
```

### 5. Run Tests and Build

```bash
npm test
npm run build
```

## Version Update Process

Follow semantic versioning (MAJOR.MINOR.PATCH):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Steps to Release a New Version

1. **Update version in package.json:**
   ```json
   {
     "version": "1.1.0"
   }
   ```

2. **Update CHANGELOG.md:**
   Document all changes under the new version

3. **Commit changes:**
   ```bash
   git add .
   git commit -m "chore: bump version to 1.1.0"
   ```

4. **Create PR and merge to main**

5. **Tag the release (after merge):**
   ```bash
   git checkout main
   git pull origin main
   git tag v1.1.0
   git push origin v1.1.0
   ```

6. **Create GitHub Release:**
   - Go to GitHub repository
   - Click "Releases" → "Create a new release"
   - Select the tag you just created
   - Add release notes from CHANGELOG.md
   - Publish release

## Testing

### Run All Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm test -- --watch
```

### Test Coverage

Ensure your changes are covered by tests. Aim for high test coverage on new code.

## Pull Request Process

1. **Create a descriptive PR title:**
   - `feat: add new mapper for X`
   - `fix: correct mapping for Y`
   - `docs: update README with Z`

2. **Fill out the PR template:**
   - Summary of changes
   - List of changes made
   - Testing performed

3. **Ensure all checks pass:**
   - Tests pass
   - Build succeeds
   - No linting errors

4. **Request review:**
   - Tag relevant reviewers
   - Address feedback promptly

5. **After approval:**
   - Squash commits if needed
   - Merge to main

## Code Style

- Use TypeScript for all source files
- Follow existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Questions?

If you have questions or need help, please:
- Open an issue on GitHub
- Contact the maintainers

Thank you for contributing!
