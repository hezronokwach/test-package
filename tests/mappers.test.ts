import { describe, it, expect } from 'vitest'
import { mapper } from '../src/index'
import type { 
    AcademicLevel,
    Country,
    Campus,
    Department,
    Gender,
    Honorific,
    Religion,
    MaritalStatus } from '../src/types/models'

describe('Function Mappers', () => {
  it('should map academic levels correctly', () => {
    const input: AcademicLevel[] = [
      { id: 1, name: 'Undergraduate' },
      { id: 2, name: 'Postgraduate' }
    ]
    
    const mapperFn = mapper<AcademicLevel>('academic_levels')
    const result = mapperFn(input)
    
    expect(result).toEqual([
      { label: 'Undergraduate', value: 1 },
      { label: 'Postgraduate', value: 2 }
    ])
  })

  it('should map countries correctly', () => {
    const input: Country[] = [
      { id: 1, name: 'Kenya', dial_code: '+254', short_code: 'KE' }
    ]
    
    const mapperFn = mapper<Country>('countries')
    const result = mapperFn(input)
    
    expect(result).toEqual([
      { label: 'Kenya', value: 1 }
    ])
  })

  it('should map campuses with caption', () => {
    const input: Campus[] = [
      { id: '1', name: 'Main Campus', alias: 'MC', institution: undefined }
    ]
    
    const mapperFn = mapper<Campus>('campuses')
    const result = mapperFn(input)
    
    expect(result).toEqual([
      { value: '1', label: 'Main Campus', caption: 'MC' }
    ])
  })

  it('should map departments with caption', () => {
    const input: Department[] = [
      { id: 1, display_name: 'Computer Science', alias: 'CS', campus: undefined }
    ]
    
    const mapperFn = mapper<Department>('departments')
    const result = mapperFn(input)
    
    expect(result).toEqual([
      { value: 1, label: 'Computer Science', caption: 'CS' }
    ])
  })

  it('should map genders correctly', () => {
    const input: Gender[] = [
      { id: 1, name: 'Male' },
      { id: 2, name: 'Female' }
    ]
    
    const mapperFn = mapper<Gender>('genders')
    const result = mapperFn(input)
    
    expect(result).toEqual([
      { value: 1, label: 'Male' },
      { value: 2, label: 'Female' }
    ])
  })

  it('should map honorifics correctly', () => {
    const input: Honorific[] = [
      { id: 1, name: 'Mr.' },
      { id: 2, name: 'Dr.' }
    ]
    
    const mapperFn = mapper<Honorific>('honorifics')
    const result = mapperFn(input)
    
    expect(result).toEqual([
      { value: 1, label: 'Mr.' },
      { value: 2, label: 'Dr.' }
    ])
  })

  it('should map religions correctly', () => {
    const input: Religion[] = [
      { id: 1, name: 'Christianity' }
    ]
    
    const mapperFn = mapper<Religion>('religions')
    const result = mapperFn(input)
    
    expect(result).toEqual([
      { value: 1, label: 'Christianity' }
    ])
  })

  it('should map marital statuses correctly', () => {
    const input: MaritalStatus[] = [
      { id: 1, name: 'Single' },
      { id: 2, name: 'Married' }
    ]
    
    const mapperFn = mapper<MaritalStatus>('marital_statuses')
    const result = mapperFn(input)
    
    expect(result).toEqual([
      { value: 1, label: 'Single' },
      { value: 2, label: 'Married' }
    ])
  })

  it('should handle empty arrays', () => {
    const input: Gender[] = []
    
    const mapperFn = mapper<Gender>('genders')
    const result = mapperFn(input)
    
    expect(result).toEqual([])
  })
})