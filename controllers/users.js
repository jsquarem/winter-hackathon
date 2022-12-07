const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const signup = async (req, res) => {
  console.log(req.body, ' req.body in signup');
  const user = new User({ ...req.body });
  console.log(user, '<-user');
  try {
    await user.save();
    console.log('success');
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    if (err.name === 'MongoServerError' && err.code === 11000) {
      console.log(err.message, 'err.message');
      res.status(423).json({
        errorMessage: err,
        err: `${identifyKeyInMongooseValidationError(
          err.message
        )} Already taken!`
      });
    } else {
      res.status(500).json({
        err: err,
        message: 'Internal Server Error, Please try again'
      });
    }
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user, ' this user in login');
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    // had to update the password from req.body.pw, to req.body password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(401).json({ err: 'error message' });
  }
};

const update = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const userEmail = req.body.userEmail;
  try {
    const user = await User.findOne({ email: userEmail });
    console.log(user, '<-user updating');
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    await user.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(401).json(err);
  }
};

/*----- Helper Functions -----*/

const createJWT = (user) => {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: '24h' }
  );
};

const identifyKeyInMongooseValidationError = (err) => {
  let key = err.split('dup key: {')[1].trim();
  key = key.slice(0, key.indexOf(':'));
  return key.replace(/^./, (str) => str.toUpperCase());
};

module.exports = {
  signup,
  login,
  update
};
