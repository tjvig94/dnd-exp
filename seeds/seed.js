const sequelize = require("sequelize");
const seedUser = require("");
const seedCharacter = require("");



const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USER DATA SYNCED -----\n');

    await seedCharacter();
    console.log('\n----- CHARACTER DATA SYNCED -----\n');

    process.exit(0);

};

seedAll();