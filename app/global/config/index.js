'use strict';

module.exports = {

    server: {
        PORT: process.env.PORT || 1221,
    },

    database: {
        HOST: process.env.MONGODB || 'mongodb://admin:admin101@ds037165.mlab.com:37165/graphql',
    },

};
