"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flutterwaveNode = _interopRequireDefault(require("flutterwave-node"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const rave = new _flutterwaveNode.default(process.env.PUBLICK_KEY, process.env.SECRET_KEY, false);
var _default = rave;
exports.default = _default;
//# sourceMappingURL=flutterwave_init.js.map