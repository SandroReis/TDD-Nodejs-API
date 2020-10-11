import { Hasher } from '../../data/protocols/criptograph/hasher'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Hasher {
  private readonly salt
  constructor (salt: number) {
    this.salt = salt
  }

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return new Promise(resolve => resolve(hash))
  }
}
