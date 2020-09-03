const { Characteristic } = require('bleno')

const Configuration = require('../descriptors/configuration')

const BOOT_MOUSE_INPUT_CHARACTERISTIC_UUID = '2A33'

class Appearance extends Characteristic {
    constructor() {
        super({
            uuid: BOOT_MOUSE_INPUT_CHARACTERISTIC_UUID,
            properties: ['notify'],
            descriptors: [
                new Configuration(),
            ],
        })
    }

    onReadRequest(offset, callback) {
        callback(this.RESULT_SUCCESS, Buffer.from([]))
    }
}

module.exports = Appearance
