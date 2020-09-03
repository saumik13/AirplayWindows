const { Characteristic } = require('bleno')

const MANUFACTURER_CHARACTERISTIC_UUID = '2A29'

class Manufacturer extends Characteristic {
  constructor() {
    super({
      uuid: MANUFACTURER_CHARACTERISTIC_UUID,
      properties: ['read'],
      value: 'Chris Atkin',
    })
  }
}

module.exports = Manufacturer
