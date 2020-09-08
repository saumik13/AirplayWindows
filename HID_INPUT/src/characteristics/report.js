const { Characteristic, Descriptor } = require('bleno')

const Configuration = require('../descriptors/configuration')

const REPORT_CHARACTERISTIC_UUID = '2A4D'
const REPORT_DESCRIPTOR_UUID = '2908'

class Report extends Characteristic {
  constructor() {
    super({
      uuid: REPORT_CHARACTERISTIC_UUID,
      properties: ['read', 'notify'],
      value: null,
      descriptors: [
        new Configuration(),
        new Descriptor({
          uuid: REPORT_DESCRIPTOR_UUID,
          value: Buffer.from([0x01, 0x01]), // Report ID, Report Type (Input)
        }),
      ],
    })
  }

  onReadRequest(offset, callback) {
    callback(this.RESULT_SUCCESS, Buffer.from([
      0x00, // Modifier Key
      0x00, // Reserved
      0x00, // Key 1
      0x00, // Key 2
      0x00, // Key 3
      0x00, // Key 4
      0x00, // Key 5
      0x00, // Key 6
    ]))
  }
}

module.exports = Report
