const awilix = require("awilix");
import UsuariosController from "./controllers/UsuariosController";
import UsuariosServices from "./services/UsuariosServices";
import Usuario from "./models/Usuario";

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function setup() {
  container.register({
    usuariosController: awilix.asClass(UsuariosController),
    usuariosServices: awilix.asClass(UsuariosServices),
    usuarioModel: awilix.asValue(Usuario),
  });
}


module.exports = {
  container,
  setup,
};