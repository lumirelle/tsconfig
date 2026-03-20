import { genNumber } from './fn'

export const test = 1

// Isolation error example:
export const randomNumber = genNumber()
export const correctRandomNumber: number = genNumber()
