import { test, describe, expect } from '@jest/globals'
import { formatDate } from './utils' 

describe('formatDate', () => {
    test('should format date from 2023-12-07 to December 7th', () => {
        const date = formatDate('2023-12-07')
        expect(date).toBe('December 7th')
    })
    test('should format date from 2023-12-01 to December 1st', () => {
        const date = formatDate('2023-12-01')
        expect(date).toBe('December 1st')
    })  
    test('should format date from 2023-12-02 to December 2nd', () => {
        const date = formatDate('2023-12-02')
        expect(date).toBe('December 2nd')
    })
    test('should format date from 2023-12-03 to December 3rd', () => {
        const date = formatDate('2023-12-03')
        expect(date).toBe('December 3rd')
    })
    test('should format date from 2023-12-04 to December 4th', () => {
        const date = formatDate('2023-12-04')
        expect(date).toBe('December 4th')
    })
})