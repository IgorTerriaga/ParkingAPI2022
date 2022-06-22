import { Router } from "express";
import { CreateEstacionamentoController } from "../src/controllers/CreateEstacionamentoController";
import { ListEstacionamentoController } from "../src/controllers/ListEstacionamentoController";
import { GetEstacionamentoController } from "../src/controllers/GetEstacionamentoController";
import { CreateMotoristaController } from "./controllers/CreateMotoristaController";
import { ListMotoristaController } from "./controllers/ListMotoristaController";
import { GetMotoristaController } from "./controllers/GetMotoristaController";
import { CreatePortaoController } from "./controllers/CreatePortaoController";
import { CreateLojaController } from "./controllers/CreateLojaController";
import { GetLojaController } from "./controllers/GetLojaController";
import { ListLojaController } from "./controllers/ListLojaController";
import { CreateVagaController } from "./controllers/CreateVagaController";
import { CreateVeiculoController } from "./controllers/CreateVeiculoController";
import { ListPortaoController } from "./controllers/ListPortaoController";
import { GetPortaoController } from "./controllers/GetPortaoController";
import { GetVeiculoController } from "./controllers/GetVeiculoController";
import { ListVeiculoController } from "./controllers/ListVeiculoController";
import { ensureAuthenticated } from "./middlewares/Authenticate";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateAcessoController } from "./controllers/CreateAcessoController";
import { UpdateVeiculoController } from "./controllers/UpdateVeiculoController";
import { ListVagaController } from "./controllers/ListVagaController";
import { InformarOcupacaoVagaController } from "./controllers/InformarOcupacaoVagaController";
import { InformarDesocupacaoVagaController } from "./controllers/InformarDesocupacaoVagaController";
import { VeiculoOcuparVagaController } from "./controllers/VeiculoOcuparVagaController";
import { ListVagasOcupadasVeiculoController } from "./controllers/ListVagasOcupadasVeiculoController";
import { RecomendarVagaController } from "./controllers/RecomendarVagaController";
import { GetVagaController } from "./controllers/GetVagaController";
import { UpdateMotoristaController } from "./controllers/UpdateMotoristaController";

import { ListAllVagaController } from "./controllers/ListAllVagaController";
import { UpdateVagaController } from "./controllers/UpdateVagaController";

const routes = Router();

const createEstacionamentoController = new CreateEstacionamentoController();
const listEstacionamentoController = new ListEstacionamentoController();
const getEstacionamentoController = new GetEstacionamentoController();

const createMotoristaController = new CreateMotoristaController();
const listMotoristaController = new ListMotoristaController();
const getMotoristaController = new GetMotoristaController();
const updateMotoristaController = new UpdateMotoristaController();

const createPortaoController = new CreatePortaoController();
const listPortaoController = new ListPortaoController();
const getPortaoController = new GetPortaoController();

const updateVagaController = new UpdateVagaController();

const getLojaController = new GetLojaController();
const createLojaController = new CreateLojaController();
const listLojaController = new ListLojaController();

const getAllVagaController = new ListAllVagaController();
const getVagaController = new GetVagaController();
const createVagaController = new CreateVagaController();
const listVagaController = new ListVagaController();
const informarOcupacaoVagaController = new InformarOcupacaoVagaController();
const informarDesocupacaoVagaController =
  new InformarDesocupacaoVagaController();

const listVeiculoController = new ListVeiculoController();
const updateVeiculoController = new UpdateVeiculoController();

const createVeiculoController = new CreateVeiculoController();
const getVeiculoController = new GetVeiculoController();

const authenticateUserController = new AuthenticateUserController();

const createAcessoController = new CreateAcessoController();

const veiculoOcuparVagaController = new VeiculoOcuparVagaController();
const listVagasOcupadasVeiculoController =
  new ListVagasOcupadasVeiculoController();
const recomendarVagaSimples = new RecomendarVagaController();

routes.post("/estacionamento", createEstacionamentoController.execute);
routes.get("/estacionamento", listEstacionamentoController.execute);
routes.get("/estacionamento/:id", getEstacionamentoController.execute);

routes.post("/motorista", createMotoristaController.execute);
routes.get("/motoristaLista/", listMotoristaController.execute);
routes.get("/motorista", ensureAuthenticated, getMotoristaController.execute);
routes.put(
  "/motorista/:id/:latitude/:longitude",
  updateMotoristaController.execute
);

routes.post("/portao", createPortaoController.execute);
routes.get("/portao", listPortaoController.execute);
routes.get("/portao/:id", getPortaoController.execute);

routes.post("/veiculo", createVeiculoController.execute);
routes.get("/veiculo/:id", ensureAuthenticated, getVeiculoController.execute);
routes.get("/veiculo", ensureAuthenticated, listVeiculoController.execute);
routes.put(
  "/veiculo/:id",
  ensureAuthenticated,
  updateVeiculoController.execute
);

routes.post("/loja", createLojaController.execute);
routes.get(
  "/estacionamento/:estacionamentoId/loja",
  listLojaController.execute
);
routes.get(
  "/estacionamento/:estacionamentoId/loja/:idLoja",
  getLojaController.execute
);

routes.put("/vagas/:id", updateVagaController.execute);
routes.get("/vagas", getAllVagaController.execute);
routes.get("/vaga/:id", getVagaController.execute);
routes.post("/vaga", createVagaController.execute);
routes.get(
  "/estacionamento/:estacionamentoId/vaga",
  listVagaController.execute
);
routes.post(
  "/motorista/:idMotorista/recomendarvaga",
  recomendarVagaSimples.execute
);

//Rotas para o microcontrolador informar o status da vaga
routes.post(
  "/informar_ocupacao_vaga/:id",
  informarOcupacaoVagaController.execute
);
routes.post(
  "/informar_desocupacao_vaga/:id",
  informarDesocupacaoVagaController.execute
);

//Rota para o motorista efetivamente ocupar vaga
routes.post(
  "/veiculo/:idVeiculo/vaga/:idVaga",
  veiculoOcuparVagaController.execute
);

//Rota para listar as vagas ocupadas pelo veiculo
routes.get(
  "/veiculo/:idVeiculo/vaga/",
  listVagasOcupadasVeiculoController.execute
);

routes.post("/login", authenticateUserController.execute);
routes.post("/acesso", createAcessoController.execute);

export { routes };
