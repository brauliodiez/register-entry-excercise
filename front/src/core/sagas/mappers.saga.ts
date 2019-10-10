import { RegisterEntityApi } from "api/model";
import * as CoreModel from "core/reducers/state.model";
import { RegisterCollectionState } from "core/reducers/register-collection.reducer";


export const mapFromRegisterApiToRegisterCore = (apiModel: RegisterEntityApi):CoreModel.RegisterEntryEntity  => ({
  firstname: apiModel.firstName,
  lastname: apiModel.lastName,
  dni: apiModel.idNumber,
  company: apiModel.company,
  visits: apiModel.host,
  entry: new Date(`${apiModel.date} ${apiModel.inTime}`),
  exit: new Date(`${apiModel.date} ${apiModel.outTime}`),
  cardNumber: apiModel.cardNumber,
  date: new Date(`${apiModel.date}`),
});

export const mapFromRegisterApiToRegisterCoreCollection = (apiModelCollection: RegisterEntityApi[]): RegisterCollectionState => 
apiModelCollection.map(mapFromRegisterApiToRegisterCore);

