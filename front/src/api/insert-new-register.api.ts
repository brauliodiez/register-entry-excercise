import Axios from "axios";
import {RegisterEntityApi} from "./model";
import {baseRoute, backendRoutes} from "./routes";

const registerCollection = `${baseRoute}${backendRoutes.registerCollection}`;

//Todo: Manage errors
export const getSpecificRegister = (register: RegisterEntityApi) : Promise<RegisterEntityApi> => {
    return new Promise<RegisterEntityApi>((resolve, reject) =>
        Axios.post<RegisterEntityApi>(registerCollection, register).then((response) => resolve(response.data)
        ));
};
