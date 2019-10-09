import Axios from "axios";
import {RegisterEntityApi} from "./model";
import {baseRoute, backendRoutes} from "./routes";

const registerCollection = `${baseRoute}${backendRoutes.registerCollection}`;
const today = new Date().toJSON().slice(0,10);
const todayRegisterCollection = `${registerCollection}?date=${today}`;

export const getTodayRegisterCollection = () : Promise<RegisterEntityApi[]> => {
    return new Promise<RegisterEntityApi[]>((resolve, reject) =>
        Axios.get<RegisterEntityApi[]>(todayRegisterCollection).then((response) => resolve(response.data)
        ));
};
