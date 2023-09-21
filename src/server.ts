import app from "@/app";
import { logger } from "@utils/logger";
import { NODE_ENV, PORT } from "@config";
import validator from "@utils/validateEnv";
validator();
// ROUTES
import admin from "@/routes/admin.route"
import student from '@/routes/student.routes'
import connectDatabase from "./databases";

app.use('/v1',admin)

app.use('/v1',student)

connectDatabase();
app.listen(PORT, () => {
  logger.info(`======= ENV: ${NODE_ENV} =======`);
  logger.info(`🚀 App listening on the port http://localhost:${PORT}`);
});
