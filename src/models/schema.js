export const schema = {
  models: {
    Workout: {
      name: 'Workout',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        player: {
          name: 'player',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        date: {
          name: 'date',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        exercise: {
          name: 'exercise',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        weight: {
          name: 'weight',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        resistance: {
          name: 'resistance',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        time: {
          name: 'time',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: 'Workouts',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  version: '0d9a52af9cab1796fc559a5c37fa9f26',
};
