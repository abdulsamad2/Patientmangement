const passport = require("passport");
const { ExtractJwt } = require("passport-jwt");
const { Strategy } = require("passport-jwt");
const UserModel = require("./model/userModel");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = UserModel.findById(payload.id);
      if (user) return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;
