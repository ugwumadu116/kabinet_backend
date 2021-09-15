"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flutterwave_init = _interopRequireDefault(require("../config/flutterwave_init"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CardController {
  static async create_Vcard(req, res) {
    try {
      const response = await _flutterwave_init.default.VirtualCards.create(req.body);
      return res.status(201).json({
        status: 201,
        data: { ...response
        }
      });
    } catch (error) {
      // handle error here
      console.log(error);
    }
  }

  static async fund_Vcard(req, res) {
    try {
      const response = await _flutterwave_init.default.VirtualCards.fund(req.body);
      return res.status(200).json({
        status: 200,
        data: { ...response
        }
      });
    } catch (error) {
      // handle error here
      console.log(error);
    }
  }

  static async list_Vcard(req, res) {
    try {
      const payload = {
        page: 1
      };
      const response = await _flutterwave_init.default.VirtualCards.list(payload);
      return res.status(200).json({
        status: 200,
        data: { ...response
        }
      });
    } catch (error) {
      // handle error here
      console.log(error);
    }
  }

  static async pay_Vcard(req, res) {
    try {
      const resp = await _flutterwave_init.default.Card.charge(req.body);
      const response = await _flutterwave_init.default.Card.validate({
        "transaction_reference": resp.body.data.flwRef,
        "otp": 12345 // your otp code

      });
      return res.status(200).json({
        status: 200,
        data: { ...response.body
        }
      });
    } catch (error) {
      // handle error here
      console.log(error);
    }
  }

}

var _default = CardController;
exports.default = _default;
//# sourceMappingURL=card.controller.js.map