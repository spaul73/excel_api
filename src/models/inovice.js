module.exports = (sequelize, Sequelize) => {
    const Inovice = sequelize.define("inovice", {
      inoviceNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      docNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dueDate: {
          type: Sequelize.DATE,
          allowNull: false
      },
      docDate: {
          type: Sequelize.DATE,
          allowNull: false
      },
      pstngDate: {
          type: Sequelize.DATE,
          allowNull: false
      },
      amount: {
          type: Sequelize.DOUBLE,
          allowNull: false
      },
      vendorCode: {
          type: Sequelize.STRING,
          allowNull: false
      }
    });
  
    return Inovice;
  };