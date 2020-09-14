import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))
describe('EmailValidator Adapter', () => {
  test('should returns false if adapter returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email')
    expect(isValid).toBe(false)
  })
  test('should returns true if adapter returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })
  test('should emailValidator called with right parameters', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@mail.com')
    expect(isValid).toHaveBeenCalledWith('any_email@mail.com')
  })
})
