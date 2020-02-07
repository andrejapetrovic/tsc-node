import { DriverController } from '../controllers/driver.controller';
import { app } from '../app';

export let driverRoutes = () => {

    const ctrl = new DriverController();

    app.post('/driver/add', ctrl.create);
    
    app.get('/drivers', ctrl.findAll);

    app.put('/driver/update/:id', ctrl.update);

    app.delete('/driver/delete/:id', ctrl.delete);

    app.get('/driver/find/:name', ctrl.findByName);

    app.get('/driver/by-team/:teamName', ctrl.findByTeam);

    app.get('/drivers/teamless', ctrl.findTeamless);

}