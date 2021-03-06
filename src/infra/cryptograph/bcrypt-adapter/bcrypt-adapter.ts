import { Hasher } from '../../../data/protocols/criptograph/hasher'
import bcrypt from 'bcrypt'
import { HashComparer } from '../../../data/protocols/criptograph/hash-comparer'

export class BcryptAdapter implements Hasher, HashComparer {
  private readonly salt
  constructor (salt: number) {
    this.salt = salt
  }

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return new Promise(resolve => resolve(hash))
  }

  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
