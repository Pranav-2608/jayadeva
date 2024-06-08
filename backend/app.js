import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import prescriptionRouter from "./router/prescriptionRouter.js"

const app = express();
config({ path: "./config.env" });

app.use(
  cors({
    origin: ['http://localhost:5173','http://localhost:5174','http://localhost:3000'],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/prescriptions", prescriptionRouter);
// Define a route to handle GET requests to fetch a specific patient by their ID
// app.get('/api/v1/user/patient/:userId', async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const patient = await User.findById(userId).populate('prescription');
//     if (!patient) {
//       return res.status(404).json({ success: false, message: 'Patient not found' });
//     }
//     res.status(200).json({ success: true, patient });
//   } catch (error) {
//     console.error('Error fetching patient:', error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });


dbConnection();

app.use(errorMiddleware);

export default app;
