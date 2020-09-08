const { PrimaryService } = require('bleno')

const Appearance = require('../characteristics/appearance')
const DeviceName = require('../characteristics/deviceName')
const HID = require('../characteristics/hidInformation')
const { to128Bit } = require('../utils/uuid')

const GENERIC_ACCESS_SERVICE_UUID = to128Bit('1800')

class GenericAccessService extends PrimaryService {
  constructor() {
    super({
      uuid: GENERIC_ACCESS_SERVICE_UUID,
      characteristics: [
        new Appearance(),
        new DeviceName(),
          new HID()
      ],
    })
  }
}

module.exports = GenericAccessService
