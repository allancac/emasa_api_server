export default class UsuariosController {
  constructor({ usuariosServices }) {
    this.usuariosServices = usuariosServices;
  }
  getAll = async (req, res) => {
    console.log(this.usuariosService);
    const { offset, limit } = req.query;
    try {
      console.log("CONTROLLER CHAMADO");
      const { count, rows } = await this.usuariosServices.getAllUsuarios(
        offset,
        limit
      );
      if (rows.length > 0) {
        return res.status(200).json({
          status: {
            code: 200,
            message: "OK",
          },
          metadata: {
            offset: parseInt(offset), // Offset de registros
            limit: parseInt(limit), // Limite total de registros
            count: rows.length, // Total de registros retornados na requisição atual
            countAll: count,
          },
          data: rows,
        });
      }
      return res.status(404).json({
        status: {
          code: 404,
          errors: ["Nenhum usuário foi encontrado."],
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: {
          code: 500,
          errors: [error.message],
        },
      });
    }
  };
}