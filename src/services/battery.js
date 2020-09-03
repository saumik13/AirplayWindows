const { PrimaryService } = require('bleno')

const BatteryLevel = require('../characteristics/batteryLevel')
const { to128Bit } = require('../utils/uuid')

const BATTERY_SERVICE_UUID = to128Bit('180F')

class BatteryService extends PrimaryService {
  constructor() {
    super({
      uuid: BATTERY_SERVICE_UUID,
      characteristics: [
        new BatteryLevel(),
      ],
    })
  }
}

module.exports = BatteryService
