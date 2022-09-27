module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'Tasks',
            {
                id: {
                    allowNull: false,
                    autoIncrement: false,
                    primaryKey: true,
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV4,
                },
                title: {
                    type: Sequelize.TEXT,
                    allowNull: false
                },
                isDone: {
                    type: Sequelize.TEXT,
                    allowNull: false
                },
                importance: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                    onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
                }
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Tasks');
    }
};