module.exports = (sequelize, Sequelize) => {
    const Vendor = sequelize.define("vendor", {
      vendorCode: {
          type: Sequelize.STRING,
          primaryKey: true
      },
      vendorName: {
          type: Sequelize.STRING,
          allowNull: false
      },
      vendorType: {
          type: Sequelize.STRING,
          allowNull: false
      }
    });
  
    return Vendor;
  };