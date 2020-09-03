const os = require('os')
const { exec } = require('child_process')
const { Characteristic, Descriptor } = require('bleno')

const BATTERY_LEVEL_CHARACTERISTIC_UUID = '2A19'
const USER_DESCRIPTION_UUID = '2901'
const PRESENTATION_FORMAT_UUID = '2904'

class BatteryLevel extends Characteristic {
  constructor() {
    super({
      uuid: BATTERY_LEVEL_CHARACTERISTIC_UUID,
      properties: ['read'],
      descriptors: [
        new Descriptor({
          uuid: USER_DESCRIPTION_UUID,
          value: 'Battery level between 0 and 100 percent',
        }),
        new Descriptor({
          uuid: PRESENTATION_FORMAT_UUID,
          value: Buffer.from([0x04, 0x01, 0x27, 0xAD, 0x01, 0x00, 0x00]),
        }),
      ],
    })
  }

  onReadRequest(offset, callback) {
    if (os.platform() === 'darwin') {
      exec('pmset -g batt', (error, stdout) => {
        const data = stdout.toString()
        const percent = parseInt(data.match(/([0-9]*)%/), 10)
        callback(this.RESULT_SUCCESS, Buffer.from([percent]))
      })
    } else {
      callback(this.RESULT_SUCCESS, Buffer.from([100]))
    }
  }
}

module.exports = BatteryLevel
