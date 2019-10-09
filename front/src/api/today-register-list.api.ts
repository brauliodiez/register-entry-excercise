import Axios from "axios";
import {baseRoute, routesLinks} from "core";

export interface RegisterEntityApi {
    cardNumber: string;
    date: string;
    time: string;
    firstName: string;
    lastName: string;
    idNumber: string,
    company: string;
    host: string;
    signature: string;
    picture: string;
}

const registerCollection = `${baseRoute}${routesLinks.registerCollection}`;
const today = new Date().toJSON().slice(0,10);
const todayRegisterCollection = `${registerCollection}?date=${today}`;

export const getTodayRegisterCollection = () : Promise<RegisterEntityApi[]> => {
    return new Promise<RegisterEntityApi[]>((resolve, reject) =>
        Axios.get<RegisterEntityApi[]>(todayRegisterCollection).then((response) => resolve(response.data)
        ));
};
