const version = (req, res) => {
    res.json({ 
      currentVersion: 2
    })
  }
// hello  
module.exports = { version }
