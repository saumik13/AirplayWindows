const { Characteristic } = require('bleno')
// the following uuid is same for any hid device
const HID_INFORMATION_CHARACTERISTIC_UUID = '2A4A'

class HIDInformation extends Characteristic {
  constructor() {
    super({
      uuid: HID_INFORMATION_CHARACTERISTIC_UUID,
      properties: ['read'],
      // https://infocenter.nordicsemi.com/index.jsp?topic=%2Fcom.nordic.infocenter.sdk5.v11.0.0%2Fgroup__ble__sdk__srv__hids.html
      // following array is same for any hid device
      value: Buffer.from([0x11, 0x01, 0x00, 0x02]),
    })
  }
}

module.exports = HIDInformation
