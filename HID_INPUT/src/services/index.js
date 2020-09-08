const GenericAccess = require('./genericAccess')
const HID = require('./hid')
const Battery = require('./battery')
const DeviceInformation = require('./deviceInformation')

const buildServices = () => {
  const services = [
    new GenericAccess(),
    new HID(),
    new Battery(),
    new DeviceInformation(),
  ]
  const uuids = services.map(s => s.uuid)

  return {
    services,
    uuids,
  }
}

module.exports = buildServices
