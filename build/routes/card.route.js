"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _card = _interopRequireDefault(require("../controllers/card.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/list_Vcard', _card.default.list_Vcard);
router.post('/create_Vcard', // You can do some validations here
_card.default.create_Vcard);
router.post('/fund_Vcard', // You can do some validations here
_card.default.fund_Vcard);
router.post('/pay', // You can do some validations here
_card.default.pay_Vcard);
var _default = router;
exports.default = _default;
//# sourceMappingURL=card.route.js.map