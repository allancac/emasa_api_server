export default class UsuariosServices {
  constructor({usuarioModel}) {
    this.usuarioModel = usuarioModel;
  }

  getAllUsuarios = async (offset = 0, limit = 10) => {
    try {
      if (offset >= 0 && limit >= 0) {
        const { count, rows } = await this.usuarioModel.findAndCountAll({
          offset: parseInt(offset),
          limit: parseInt(limit),
        });
        if (rows) {
          return { count, rows };
        }
        throw new Error("Nenhum usuário encontrado.");
      }
      throw new Error("Parâmetros inválidos.");
    } catch (error) {
      throw error;
    }
  };
}