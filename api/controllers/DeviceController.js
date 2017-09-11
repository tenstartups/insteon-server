module.exports = {

  index: (req, res) => {
    Device.find().exec((err, devices) => {
      if (err) {
        return res.serverError(err)
      }
      return res.json({ device: devices })
    })
  },

  show: (req, res) => {
    var insteonId = req.params.insteon_id
    Device.findOne({ insteon_id: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      return res.json({ device: device })
    })
  },

  create: (req, res) => {
    var attrs = {
      insteon_id: req.params.insteon_id,
      name: req.param('name'),
      description: req.param('description')
    }
    Device.create(attrs).exec((err, device) => {
      if (err) {
        return res.serverError({ error: err })
      }
      return res.json({ device: device })
    })
  },

  update: (req, res) => {
    var insteonId = req.params.insteon_id
    Device.findOne({ insteon_id: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      return res.json({ device: device })
    })
  },

  destroy: (req, res) => {
    var insteonId = req.params.insteon_id
    Device.findOne({ insteon_id: insteonId }).exec((err, device) => {
      if (err) {
        return res.serverError(err)
      }
      return res.json({ device: device })
    })
  }
}

function unknownDevice (res, insteonId) {
  return res.notFound({ error: `Device with Insteon ID ${insteonId} unknown to Hub` })
}