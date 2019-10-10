import Axios from "axios";
import {RegisterEntityApi} from "./model";
import {baseRoute, backendRoutes} from "./routes";

const registerCollection = `${baseRoute}${backendRoutes.registerCollection}`;

type UpdatableRegisterEntityApi = Omit<RegisterEntityApi, "id">;

const updateSpecificRegisterUrl = (register: RegisterEntityApi) => `${registerCollection}${register.id}`;

//Todo: Manage errors
export const getSpecificRegister = (register: RegisterEntityApi) : Promise<RegisterEntityApi> => {
    return new Promise<RegisterEntityApi>((resolve, reject) =>
        Axios.put<RegisterEntityApi>(updateSpecificRegisterUrl(register), register as UpdatableRegisterEntityApi).then((response) => resolve(response.data)
        ));
};
