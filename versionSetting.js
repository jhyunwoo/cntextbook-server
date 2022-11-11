const version = (req, res) => {
    res.json({ 
      currentVersion: 2
    })
  }
  
module.exports = { version }