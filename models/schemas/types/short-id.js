const { nanoid } = require("nanoid");

// shortId 정의
const shortId = {
  type: String,
  default: () => {
    return nanoid();
  },
  require: true,
  index: true,
};

module.exports = shortId;
