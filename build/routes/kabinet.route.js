"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _kabinet = _interopRequireDefault(require("../controllers/kabinet.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/events', _kabinet.default.getEvents);
router.get('/interest', _kabinet.default.getEvents);
router.post('/create_events', // You can do some validations here
_kabinet.default.registerEvent);
router.post('/create_interest', // You can do some validations here
_kabinet.default.registerInterest);
router.delete('/del_events', // You can do some validations here
_kabinet.default.delEvents);
var _default = router;
exports.default = _default;
//# sourceMappingURL=kabinet.route.js.map