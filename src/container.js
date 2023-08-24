import { createContainer, asClass, asValue } from "awilix";
import UsuariosServices from "./services/UsuariosServices";
import Usuario from "./models/Usuario";

const container = createContainer();

container.register({
  usuariosServices: asClass(UsuariosServices),
	usuario: asClass(Usuario),
});


export default container;