"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _card = _interopRequireDefault(require("./routes/card.route"));

var _kabinet = _interopRequireDefault(require("./routes/kabinet.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

_dotenv.default.config();

app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use((0, _cors.default)());
const PORT = process.env.PORT || 3001;
const prefix = '/api/v1';
app.get('/', (req, res) => res.status(200).json({
  status: 200,
  data: 'welcome to kabinet'
}));
app.use(`${prefix}/`, _card.default);
app.use(`${prefix}/`, _kabinet.default);
app.use(async (req, res) => {
  try {
    throw new Error('Route does not exist');
  } catch (error) {
    return res.status(error.status || 404).json({
      status: error.status || 404,
      error: error.message
    });
  }
});
app.listen(PORT, () => console.log(`Welcome ${PORT}`));
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map