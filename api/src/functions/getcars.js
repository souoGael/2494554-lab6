const { app } = require('@azure/functions');
const cars = require('./cars.json');

app.http('getcars', {
    methods: ['GET'],
    route:'cars',
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return { body: JSON.stringify(cars) };
    }
});
