const { Characteristic } = require('bleno')

const HID_INFORMATION_CHARACTERISTIC_UUID = '2A4A'

class HIDInformation extends Characteristic {
  constructor() {
    super({
      uuid: HID_INFORMATION_CHARACTERISTIC_UUID,
      properties: ['read'],
      value: Buffer.from([0x11, 0x01, 0x00, 0x02]),
    })
  }
}

module.exports = HIDInformation
