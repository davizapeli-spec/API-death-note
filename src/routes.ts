
import { Router } from "express";
import personagemController from "./controllers/personagem";


const routes = Router();

routes.get("/", (request, response) => {
    return response.status(200).json({ message: "API Death Note funcionando!" });
});

// Rotas de personagens
routes.get("/personagens", personagemController.list);
routes.get("/personagens/:id", personagemController.getById);
routes.post("/personagens", personagemController.create);
routes.put("/personagens/:id", personagemController.update);
routes.delete("/personagens/:id", personagemController.delete);



export default routes;



