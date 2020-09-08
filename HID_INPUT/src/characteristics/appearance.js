const { Characteristic } = require('bleno')

const APPEARANCE_CHARACTERISTIC_UUID = '2A01'

const value = Buffer.alloc(2)
// The appearance value for mouse is 962 according to https://developer.nordicsemi.com/nRF5_SDK/nRF51_SDK_v4.x.x/doc/html/group___b_l_e___a_p_p_e_a_r_a_n_c_e_s.html
value.writeUInt16LE(962)

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
