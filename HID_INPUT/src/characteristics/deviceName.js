const { Characteristic } = require('bleno')

const DEVICE_NAME_CHARACTERISTIC_UUID = '2A00'

class Appearance extends Characteristic {
  constructor() {
    super({
      uuid: DEVICE_NAME_CHARACTERISTIC_UUID,
      properties: ['read'],
      value: Buffer.from('Bluetooth HID Mouse for iPad'),
    })
  }
}

module.exports = Appearance
