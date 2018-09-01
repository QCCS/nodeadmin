var exec = require('child_process').exec;

module.exports = {

  getPstree: function(req, res) {
    exec('pstree -p', function(err, stdout, stderr) {
      if (err) {
        //console.log('Error executing npm list --long: ', err);
      }
      res.send({"stdout": stdout, "stderr": stderr });
    });
  },
  
};
