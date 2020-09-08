const { Characteristic } = require('bleno')

const PROTOCOL_MODE_CHARACTERISTIC_UUID = '2A4E'

class ProtocolMode extends Characteristic {
  constructor() {
    super({
      uuid: PROTOCOL_MODE_CHARACTERISTIC_UUID,
      properties: ['read'],
      value: Buffer.from([0x01]), // Report Protocol Mode
    })
  }
}

module.exports = ProtocolMode
