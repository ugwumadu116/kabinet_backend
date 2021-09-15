"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = _interopRequireDefault(require("pg"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const {
  Pool
} = _pg.default;
const connectionString = process.env.TEST_DATABASE_URL;
const db = new Pool({
  connectionString
});
var _default = db;
exports.default = _default;
//# sourceMappingURL=db.js.map