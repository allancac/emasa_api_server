const { Sequelize, DataTypes} = require ('sequelize');

const Usuario=(sequelize)=>{
	return sequelize.define('Usuario',{
		id: {type:Sequelize.UUID, primaryKey:true},
		nomeUsuario: DataTypes.STRING(50),
		nome: DataTypes.STRING(50),
		sobrenome: DataTypes.STRING(50),
		foto: DataTypes.STRING(200),
		ativo: DataTypes.BOOLEAN,
		email: DataTypes.STRING(50),
		senha: DataTypes.STRING(100),
		perfil: DataTypes.ENUM('vendedor', 'gerente', 'administrador'),
	})
}

module.exports = Usuario;