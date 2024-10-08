const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

class UserService {
  async signUp(email, password) {
    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { email, password: await bcrypt.hash(password, 10) },
    });

    if (!isCreated) {
      throw new Error('User already exists');
    }

    const plainUser = user.get();
    delete plainUser.password;

    return { user: plainUser };
  }

  async signIn(email, password) {


    const user = await User.findOne({ where: { email } });
   

    if (!user) throw new Error('User not found');

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) throw new Error('Incorrect email or password');

    const plainUser = user.get();
    delete plainUser.password;

    return { user: plainUser };
  }

  async check(email) {
    const user = await User.findOne({
      where: { email }
    });
    if (!user) throw new Error('User not');

    return user;
  }




  async check1(email, password) {
    const user = await User.findOne({
      where: { email }
    });
    if (user) throw new Error('User already exists');

    const hashPassword = await bcrypt.hash(password, 10)

    return hashPassword;
  }

  async updateUserPassword(password, email) {
    try {
      const user = await User.findOne({ where: { email } });


      if (user) {
        user.password = await bcrypt.hash(password, 10)
        //user.password = password;
        await user.save();
        return user;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }


}

module.exports = new UserService();