import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))
const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}
describe('EmailValidator Adapter', () => {
  test('should returns false if adapter returns false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email')
    expect(isValid).toBe(false)
  })
  test('should returns true if adapter returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })
  test('should emailValidator called with right parameters', () => {
    const sut = makeSut()
    const isValid = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@mail.com')
    expect(isValid).toHaveBeenCalledWith('any_email@mail.com')
  })
})
