import Axios from "axios";
import {RegisterEntityApi} from "./model";
import {baseRoute, backendRoutes} from "./routes";
import {getTodayDate} from "../utils";

const registerCollection = `${baseRoute}${backendRoutes.registerCollection}`;
const today = getTodayDate();
const todayRegisterCollection = `${registerCollection}?date=${today}`;

//Todo: Manage errors
export const getTodayRegisterCollection = () : Promise<RegisterEntityApi[]> => {
    return new Promise<RegisterEntityApi[]>((resolve, reject) =>
        Axios.get<RegisterEntityApi[]>(todayRegisterCollection).then((response) => resolve(response.data)
        ));
};
