import { config } from "dotenv";
import connectDB from "./db/index.js";

config();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((err) => {
    console.log(`Mongo DB connection failed - ${err}`)
});