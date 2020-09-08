const { Descriptor } = require('bleno')
// 2902 is for like any HID devices
const CONFIGURATION_DESCRIPTOR_UUID = '2902'

class Configuration extends Descriptor {
  constructor() {
    super({
      uuid: CONFIGURATION_DESCRIPTOR_UUID,
      value: Buffer.from([0x00, 0x01]), // Notifications enabled
    })
  }
}

module.exports = Configuration
