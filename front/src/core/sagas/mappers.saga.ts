import { RegisterEntityApi } from "api/model";
import * as CoreModel from "core/reducers/state.model";

export type RegisterCollectionState = CoreModel.RegisterEntryEntity[];

export const mappedFromApiToState = (apiModel: RegisterEntityApi):CoreModel.RegisterEntryEntity  => ({
  firstname: apiModel.firstName,
  lastname: apiModel.lastName,
  dni: apiModel.idNumber,
  company: apiModel.company,
  visits: apiModel.host,
  entry: new Date(`${apiModel.date} ${apiModel.inTime}`),
  exit: new Date(`${apiModel.date} ${apiModel.outTime}`)
});

export const mappedFromApiToStateCollection = (
  apiModelCollection: RegisterEntityApi[]
): RegisterCollectionState => {
  return apiModelCollection.map((apiModel: RegisterEntityApi) =>
    mappedFromApiToState(apiModel)
  );
};
