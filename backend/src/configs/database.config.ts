import { connect, ConnectOptions } from "mongoose";

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
