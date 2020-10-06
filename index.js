console.log("app is loading ....");

const si = require("systeminformation");

si.mem()
  .then((data) => {
    console.log("MEMORY");
    console.log(data);
  })
  .catch((err) => console.error(err));

si.currentLoad()
  .then((data) => {
    console.log("CPU");
    console.log(data);
  })
  .catch((err) => console.error(err));
