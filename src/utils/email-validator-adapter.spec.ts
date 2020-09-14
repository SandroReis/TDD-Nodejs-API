import { EmailValidatorAdapter } from './email-validator-adapter'
describe('EmailValidator Adapter', () => {
  test('should returns false if adapter returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email')
    expect(isValid).toBe(false)
  })
})
