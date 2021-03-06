import DataType from 'sequelize';
import Model from '../sequelize';

const Subject = Model.define('Subject', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  userId: {
    type: DataType.UUID,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING,
  },

  description: {
    type: DataType.STRING,
  },

  score: {
    type: DataType.INTEGER,
  }
});

export default Subject;
