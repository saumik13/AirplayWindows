const { Characteristic } = require('bleno')

const Configuration = require('../descriptors/configuration');

const iohook = require("iohook");
const converter = require("hex2dec");

const BOOT_MOUSE_INPUT_CHARACTERISTIC_UUID = '2A33'
// https://www.yumpu.com/en/document/read/40705072/hid-service-specification-bluetooth-development-portal
class Appearance extends Characteristic {
  constructor() {
    super({
      uuid: BOOT_MOUSE_INPUT_CHARACTERISTIC_UUID,
      properties: ['notify'],
      descriptors: [
        new Configuration(),
        // uuid is 2902 , and notifciation is added
      ],
    })
  }

  onReadRequest(offset, callback) {
    callback(this.RESULT_SUCCESS, Buffer.from([]))
  }

  onSubscribe = function(maxSize, updateValueCallback){

  // testing
  console.log("This shit is working");
  // robotjs or the other library
    iohook.on('mousemove', event =>{
      updateValueCallback(new Buffer([]));
    })
  }
}

module.exports = Appearance
