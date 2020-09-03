const { Characteristic } = require('bleno')

const APPEARANCE_CHARACTERISTIC_UUID = '2A01'
//<Buffer c1 03> is the value for this characteristic that represents a keyboard
//c203 would be the one for a mouse
const value = Buffer.alloc(2)
value.writeUInt16LE(961)

class Appearance extends Characteristic {
  constructor() {
    super({
      uuid: APPEARANCE_CHARACTERISTIC_UUID,
      properties: ['read'],
      value,
    })
  }
}

module.exports = Appearance
