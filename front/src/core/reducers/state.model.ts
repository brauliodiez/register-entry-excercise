export interface RegisterEntryEntity {
  firstname: string;
  lastname: string;
  dni: string;
  company: string;
  visits: string;
  entry: Date;
  exit: Date;
  cardNumber: string;
  date: Date;
  // signature --> blob / canvas (check this)
}
