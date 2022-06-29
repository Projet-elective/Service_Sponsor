module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user_roles', {
      userId: {
        type: Sequelize.INT || null
      },
      roleId: {
        type: Sequelize.INT || null
      }
    })
    return User
  }
  