import express, { NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import errorMiddleware from "./middlewares/errorMiddleware";
import hospitalRouter from "./routes/hospitalRoute";
import doctorRouter from "./routes/doctorRoute";
import patientRouter from "./routes/patientRoute";
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

dotenv.config({ path: path.resolve(__dirname, "../.env") });
const app = express();


const swaggerSpec = swaggerJsdoc({
    definition: {
        openapi: "3.0.0",
        // info: {
        //     title: "HRTS",
        //     version: "1.0.0",
        //     description: "Health Record Tracking System",
        // },
        servers: {
            url: "http://localhost:3333/",
        }
        
  },
  apis: ["./routes/*.ts"],
});

app.use(cors({origin: "*",}));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use("/api/v1/doctor", doctorRouter);
app.use("/api/v1/patient", patientRouter)
app.use("/api/v1/hospital", hospitalRouter);


app.use(errorMiddleware)

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {})
