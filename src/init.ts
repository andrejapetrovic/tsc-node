import { driverRoutes } from './routes/driver.routes';
import { teamRoutes } from './routes/team.routes';

export let initRoutes = async () => {
    driverRoutes();
    teamRoutes();
}   