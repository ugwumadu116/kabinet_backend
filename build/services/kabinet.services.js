"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../config/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class KabinetService {
  static async createEvent(user) {
    const {
      date,
      title,
      event_type,
      location,
      organization_name,
      description,
      category,
      organizer_info,
      website,
      organizer_contact
    } = user;
    const sql = 'INSERT INTO kabinetevents (date, title, event_type, location, organization_name, description, category, organizer_info, website, organizer_contact) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
    const bindParameters = [date, title, event_type, location, organization_name, description, category, organizer_info, website, organizer_contact];
    const client = await _db.default.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rows[0];
  }

  static async createInterest(user) {
    const {
      contact,
      eventid
    } = user;
    const sql = 'INSERT INTO kabinetinterest (contact, eventid) VALUES($1, $2) RETURNING *';
    const bindParameters = [contact, eventid];
    const client = await _db.default.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rows[0];
  }

  static async getEvent() {
    const sql = 'SELECT * from kabinetevents';
    const client = await _db.default.connect();
    const result = await client.query(sql);
    client.release();
    return result.rows;
  }

  static async getInterest() {
    const sql = 'SELECT * from kabinetinterest';
    const client = await _db.default.connect();
    const result = await client.query(sql);
    client.release();
    return result.rows;
  }

  static async delEvent(user) {
    const sql = 'DELETE FROM kabinetevents WHERE id = $1';
    const bindParameters = [user.id];
    const client = await _db.default.connect();
    const result = await client.query(sql, bindParameters);
    client.release();
    return result.rows;
  }

}

var _default = KabinetService;
exports.default = _default;
//# sourceMappingURL=kabinet.services.js.map