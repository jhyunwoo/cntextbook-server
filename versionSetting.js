const expressTest = (req, res) => {
    res.json({ 
      currentVersion: "v2"
    })
  }
  
module.exports = { expressTest }