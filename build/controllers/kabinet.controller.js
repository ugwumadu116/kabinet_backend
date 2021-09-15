"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _kabinet = _interopRequireDefault(require("../services/kabinet.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

class KabinetController {
  static async registerEvent(req, res) {
    try {
      const result = await _kabinet.default.createEvent(req.body);
      return res.status(201).json({
        status: 201,
        data: { ...result
        }
      });
    } catch (error) {
      return res.status(409).json({
        status: 409,
        error: error.message
      });
    }
  }

  static async registerInterest(req, res) {
    try {
      const result = await _kabinet.default.createInterest(req.body);
      return res.status(201).json({
        status: 201,
        data: { ...result
        }
      });
    } catch (error) {
      return res.status(409).json({
        status: 409,
        error: error.message
      });
    }
  }

  static async getInterest(req, res) {
    try {
      const result = await _kabinet.default.getInterest(req.body);
      return res.status(200).json({
        status: 200,
        data: {
          val: result
        }
      });
    } catch (error) {
      return res.status(409).json({
        status: 409,
        error: error.message
      });
    }
  }

  static async getEvents(req, res) {
    try {
      const result = await _kabinet.default.getEvent(req.body);
      return res.status(200).json({
        status: 200,
        data: {
          val: result
        }
      });
    } catch (error) {
      return res.status(409).json({
        status: 409,
        error: error.message
      });
    }
  }

  static async delEvents(req, res) {
    try {
      const result = await _kabinet.default.delEvent(req.body);
      return res.status(200).json({
        status: 200,
        data: { ...result
        }
      });
    } catch (error) {
      return res.status(409).json({
        status: 409,
        error: error.message
      });
    }
  }

}

var _default = KabinetController;
exports.default = _default;
//# sourceMappingURL=kabinet.controller.js.map