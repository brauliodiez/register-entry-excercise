import { RegisterEntityApi } from "api/model";
import * as CoreModel from "core/reducers/state.model"


export type RegisterEntityApiState = RegisterEntityApi[];
export type RegisterCollectionState = CoreModel.RegisterEntryEntity[];

export const mappedFromApiToState = (apiModel: RegisterEntityApiState): RegisterCollectionState => {
     const registerStateModel: RegisterCollectionState = [];

     return registerStateModel.map(apiModel => ({
        firstname: apiModel.firstname,
        lastname: apiModel.lastname,
        dni: apiModel.dni,
        company: apiModel.company,
        visits: apiModel.visits,
        entry: apiModel.entry,
        exit: apiModel.exit,
     }))
   }