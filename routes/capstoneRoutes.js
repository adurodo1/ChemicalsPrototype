import { addNewEntry,getParameter,getParameterwithID,updateParameter,deleteParameter ,sendEmail} from "../controllers/parameterController";
const cors=require('cors')
const routes=(app)=>{

    app.use(cors())
    app.route('/parameters').get(getParameter).post(addNewEntry);

    app.route('/parameters/:ParameterId').get(getParameterwithID).put(updateParameter).delete(deleteParameter);
    app.route('/sendEmail').post(sendEmail);
}

export default routes;