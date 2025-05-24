const userModel = require('../../models/users');
const surveyModel = require('../../models/survey');

module.exports.submit = async (req, res, next) => {
    const { data } = req.body;
    const { externalOperations, expenses, attendance, inventory, tenderVendor, departmentalBudget, boardCompanyActivity, fragmanted, manualWork, highCost, consultants, complex, expensive, outdated, expectations, adopt, reduceTime, noCustomizationCost, reduceExpenditure, selfManaged, earlyAdopter, user } = data;
    console.log(user);
    try {
        let userSubmit = null;
        if(user) {
            userSubmit = await userModel.create(user);
        }
        const surveySubmit = await surveyModel.create({
            respondent: userSubmit._id,
            externalOperations,
            expenses,
            attendance,
            inventory,
            tenderVendor,
            departmentalBudget,
            boardCompanyActivity,
            fragmanted,
            manualWork,
            highCost,
            consultants,
            complex,
            expensive,
            outdated,
            expectations,
            adopt,
            reduceTime,
            noCustomizationCost,
            reduceExpenditure,
            selfManaged,
            earlyAdopter
        });
        console.log(surveySubmit);
        res.sendStatus(200);
    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
}