const { Characteristic } = require('bleno')

const PNP_ID_CHARACTERISTIC_UUID = '2A50'

class PNPId extends Characteristic {
  constructor() {
    super({
      uuid: PNP_ID_CHARACTERISTIC_UUID,
      properties: ['read'],
      value: Buffer.from([
        /* eslint-disable no-bitwise */
        0x02, // Sig
        0xe502 >> 8, // VId (0)
        0xe502, // VId (1)
        0xa111 >> 8, // PId (0)
        0xa111, // PId (1)
        0x0210 >> 8, // Version (0)
        0x0210, // Version (1)
        /* eslint-enable no-bitwise */
      ]),
    })
  }
}

module.exports = PNPId
