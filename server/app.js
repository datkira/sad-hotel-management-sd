import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url';
import activeRoutes from './middlewares/routes.mdw.js'
import swaggerUI from 'swagger-ui-express'
import swaggerFile from './swagger-output-json.json'
const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();

app.use(express.json());
activeRoutes(app);
//app.use('/api/users',userRoute);
app.use('/doc',swaggerUI.serve,swaggerUI.setup(swaggerFile));
const PORT = 3000;
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`));

