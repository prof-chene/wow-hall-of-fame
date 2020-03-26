import { Mongo } from 'meteor/mongo';
import {Character} from "../characters/characters";

export const Achievement = new Mongo.Collection('achievements');
Achievement.schema = new SimpleSchema({
    name: {
        type: String,
        required: true,
        index: true,
        validate: val => val/length > 0
    },
    img: {
        type: String,
        required: true,
        validate: val =>
            fs.existsSync(val)
    },
    encounterId: {
        type: Number,
        required: false,
        get: val => Math.round(val),
        set: val => Math.round(val),
        validate: val =>
            _.isInteger(val) && val > 0
    },
    reportType: {
        type: String,
        required: true,
        validate: val =>
            reportTypes.includes(val)
    },
    characters: [{
        character: Character,
        date: {
            type: Date,
            required: true,
        }
    }]
});
