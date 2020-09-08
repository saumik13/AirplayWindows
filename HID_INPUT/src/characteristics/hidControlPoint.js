const { Characteristic } = require('bleno')

const HID_CONTROL_POINT_CHARACTERISTIC_UUID = '2A4C'

class HIDControlPoint extends Characteristic {
  constructor() {
    super({
      uuid: HID_CONTROL_POINT_CHARACTERISTIC_UUID,
      properties: ['writeWithoutResponse'],
    })
  }
}

module.exports = HIDControlPoint
