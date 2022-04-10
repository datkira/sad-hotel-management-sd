import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import userRoute from '../routes/user.route.js'

export default function(app){
    app.use('/api/users',userRoute);
}