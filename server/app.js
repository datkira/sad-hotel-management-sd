import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url';
import userRoute from './routes/user.route.js';

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();

app.use(express.json());

app.use('/api/users',userRoute);

// sequelize.sync().then(()=>console.log('connected')).catch(error=>{
//     console.log('Something went wrong');
// })
const PORT = 3000;
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`));

