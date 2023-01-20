import { User, UserConstructorArguments } from '../entity/User';
import Repository from '../libs/base-repository';

export default class UsersRepository extends Repository<User> {
  constructor() {
    super(User);
  }

  findOneByKakaoId(kakaoId: number) {
    return this.repository.findOne({ where: { kakaoId } });
  }

  create(userData: UserConstructorArguments) {
    return this.repository.save(new User(userData));
  }

  findOneByUserId(userId: number) {
    return this.repository.findOne({ where: { userId } });
  }

  findAll() {
    return this.repository.find();
  }

  updateUsername(user: User, username: string) {
    return this.repository.update(user.userId, { username });
  }

  updateProfileImageUrl(user: User, profileImageUrl: string) {
    return this.repository.update(user.userId, { profileImageUrl });
  }

  delete(user: User) {
    return this.repository.delete(user);
  }
}