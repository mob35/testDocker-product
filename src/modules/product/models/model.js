'use strict';

var Model = "Product";
exports.model = Model;

// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ModelSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: 'Please fill Product name',
        trim: true
    },
    price: {
        type: Number
    },
    shop: {
        type: {
            _id: String,
            name: String
        }
    },
    categories: {
        type: [{
            _id: String,
            name: String
        }]
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayName: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayName: {
            type: String
        }
    }
});

mongoose.model(Model, ModelSchema);