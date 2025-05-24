const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    respondent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    externalOperations: {
        type: String,
        trim: true
    },
    expenses: {
        type: String,
        trim: true
    },
    attendance: {
        type: String,
        trim: true
    },
    inventory: {
        type: String,
        trim: true
    },
    tenderVendor: {
        type: String,
        trim: true
    },
    departmentalBudget: {
        type: String,
        trim: true
    },
    boardCompanyActivity: {
        type: String,
        trim: true
    },
    fragmanted: {
        opinion: {
            type: Boolean
        },
        explanation: {
            type: String,
            trim: true
        }
    },
    manualWork: {
        opinion: {
            type: Boolean
        },
        explanation: {
            type: String,
            trim: true
        }
    },
    highCost: {
        opinion: {
            type: Boolean
        },
        explanation: {
            type: String,
            trim: true
        }
    },
    consultants: {
        opinion: {
            type: Boolean
        },
        explanation: {
            type: String,
            trim: true
        }
    },
    complex: {
        opinion: {
            type: Boolean
        },
        explanation: {
            type: String,
            trim: true
        }
    },
    expensive: {
        opinion: {
            type: Boolean
        },
        explanation: {
            type: String,
            trim: true
        }
    },
    outdated: {
        opinion: {
            type: Boolean
        },
        explanation: {
            type: String,
            trim: true
        }
    },
    expectation: {
        opinion: {
            type: Boolean
        },
        explanation: {
            type: String,
            trim: true
        }
    },
    adopt: {
        type: Boolean
    },
    reduceTime: {
        type: Boolean
    },
    noCustomizationCost: {
        type: Boolean
    },
    reduceExpenditure: {
        type: Boolean
    },
    selfManaged: {
        type: Boolean
    },
    earlyAdopter: {
        type: Boolean
    },
}, { timestamps: true });

module.exports = mongoose.model('survey', surveySchema);