const { Characteristic } = require('bleno')

const REPORT_MAP_CHARACTERISTIC_UUID = '2A4B'

// http://eleccelerator.com/tutorial-about-usb-hid-report-descriptors/
// https://docs.mbed.com/docs/ble-hid/en/latest/HID/#keyboard
// http://www.usb.org/developers/hidpage/Hut1_12v2.pdf

class ReportMap extends Characteristic {
  constructor() {
    super({
      uuid: REPORT_MAP_CHARACTERISTIC_UUID,
      properties: ['read'],
      value: Buffer.from([
        0x05, 0x01, // USAGE_PAGE (Generic Desktop)
        0x09, 0x06, // USAGE (Keyboard)
        0xA1, 0x01, // COLLECTION (Application)
        0x85, 0x01, // REPORT_ID
        0x05, 0x07, // USAGE_PAGE (Keyboard)(Key Codes)
        0x19, 0xE0, // USAGE_MINIMUM (Keyboard LeftCtrl)(224/E0)
        0x29, 0xE7, // USAGE_MAXIMUM (Keyboard Right GUI)(231/E7)
        0x15, 0x00, // LOGICAL_MINIMUM (0)
        0x25, 0x01, // LOGICAL_MAXIMUM (1)
        0x75, 0x01, // REPORT_SIZE (1) (1 bit each)
        0x95, 0x08, // REPORT_COUNT (8) (8 in the byte)
        0x81, 0x02, // INPUT (Data,Var,Abs): Modifier byte
        0x75, 0x08, // REPORT_SIZE (8) (8 bits of reserved data)
        0x95, 0x01, // REPORT_COUNT (1) (taking a whole byte)
        0x81, 0x03, // INPUT (Cnst,Var,Abs): Reserved byte
        0x75, 0x08, // REPORT_SIZE (8) (8 bits of data per key)
        0x95, 0x06, // REPORT_COUNT (6) (up to 6 keys)
        0x15, 0x00, // LOGICAL_MINIMUM (0) (No key pressed)
        0x26, 0x65, // LOGICAL_MAXIMUM (101) (101 key codes)
        0x81, 0x00, // INPUT (Data,Ary,Abs)
        0xC0, // END_COLLECTION
      ]),
    })
  }
}

module.exports = ReportMap
