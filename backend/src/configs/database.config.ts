import { connect, ConnectOptions } from "mongoose";
require("dotenv").config;
export const dbConnect = () => {
  const mongo_url = process.env.MONGO_URI;
  connect(mongo_url!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(
    () => console.log("connect successfully"),
    (error) => console.log(error)
  );
};
