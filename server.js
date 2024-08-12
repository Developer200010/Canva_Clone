const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
dotenv.config();

if (process.env.NODE_ENV == "local") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credential: true,
    })
  );
} else {
  app.use(
    cors({
      credential: true,
    })
  );
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./frontend/dist")));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./","frontend","dist", "index.html"));
  })
}

// database connection function.
const dbConnect = async () => {
  try {
    if (process.env.NODE_ENV === "local") {
      await mongoose.connect(process.env.LOCAL_URL);
      console.log("local database is connected...");
    } else {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("production database is connected....");
    }
  } catch (error) {
    console.log("database connection fail...." + error);
  }
};
dbConnect();

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running in port ${process.env.PORT}`);
});
