import Axios from "axios";
import {RegisterEntityApi} from "./model";
import {baseRoute, backendRoutes} from "./routes";

const registerCollection = `${baseRoute}${backendRoutes.registerCollection}`;

const getSpecificRegistryUrl = (registerId: String) => `${registerCollection}?id=${registerId}`;

//Todo: Manage errors
export const getSpecificRegister = (registerId: String) : Promise<RegisterEntityApi> => {
    return new Promise<RegisterEntityApi>((resolve, reject) =>
        Axios.get<RegisterEntityApi>(getSpecificRegistryUrl(registerId)).then((response) => resolve(response.data[0])
        ));
};
