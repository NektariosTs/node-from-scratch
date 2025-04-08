//1* enw prwta ginetai h diadikasia na syndethei sthn vash kai meta ston server,edw ginetai to antitheto giati
//to promise auto kanei sthn mongoose connect exoume promsise opote kapoia stigmh tha ulopoihthei h sunarthsh alla mexri na ginei auto den stamataei to programma, energopoietai prwta h apo katw diadiasia


const mongoose = require("mongoose");
const app = require("./app")//import app.js
const port = 3000;

mongoose.connect(process.env.MONGODB_URI)
.then(//1*
  () => {
    console.log("Connection to MongoDB established");
    app.listen(port,() => {
      console.log("Server is up")
    })
  },
  err => {console.log("Failed to connect to MongoDB", err); }
)

