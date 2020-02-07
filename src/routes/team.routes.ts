import { TeamController } from "../controllers/team.controller";
import { app } from "../app";

export let teamRoutes = () => {

    const ctrl = new TeamController();

    app.get('/teams', ctrl.findAll);

    app.post('/team/add', ctrl.create);

    app.put('/team/update/:id', ctrl.update);

    app.delete('/team/delete/:id', ctrl.delete);

    app.patch('/team/add-driver/:teamId/:driverId', ctrl.addDriver);

    app.patch('/team/remove-driver/:teamId/:driverId', ctrl.removeDriver);
}