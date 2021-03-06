import App from '@/app';
import validateEnv from '@utils/validateEnv';
import { AuthController } from '@controllers/auth.controller';
import { IndexController } from '@controllers/index.controller';
import { UsersController } from '@controllers/users.controller';

validateEnv();

const app = new App([IndexController, AuthController, UsersController]);
app.listen();
