import { Service } from 'typedi'

@Service()
export default class UserRepository {
  /**
   * Find user by id
   * @param id number
   */
  async get(id: number) {
    // @TODO: CODE HERE
  }
}
