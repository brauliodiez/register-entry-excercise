import * as CoreModel from "core/reducers/state.model";
import * as vm from "./register-collection.vm";
import { RegisterCollectionState } from "core/reducers/register-collection.reducer";

export const mapFromRegisterCoreToRegisterView = (coreModel: CoreModel.RegisterEntryEntity): vm.EntryEntity  => ({
  firstName: coreModel.firstname,
  lastName: coreModel.lastname,
  dni: coreModel.dni,
  company: coreModel.company,
  visits: coreModel.visits,
  entry: (coreModel.entry).toString(), 
  exit: (coreModel.exit).toString(),
  cardNumber: coreModel.cardNumber,
  date: (coreModel.date).toString(),
});

export const mapFromRegisterCoreToRegisterViewCollection = (coreModelCollection: RegisterCollectionState): vm.EntryEntity[] => 
  coreModelCollection.map(mapFromRegisterCoreToRegisterView);


