import * as React from "react";
import {RegisterEntryEntity} from "../../core/reducers/state.model";
import {mapFromRegisterCoreToRegisterView, mapFromRegisterCoreToRegisterViewCollection} from "./register-collection.mapper";
import {EntryEntity} from "./register-collection.vm";
import {instanceOf} from "prop-types";
import {RegisterCollectionState} from "../../core/reducers/register-collection.reducer";

describe("NameEdit mapper specs", () => {
  it("should map dates from RegisterEntryEntity to EntryEntity strings", () => {
    // Arrange
    const specDate = new Date();
    const entity = {
      firstname: "firstname",
      lastname: "lastname",
      dni: "dni",
      company: "company",
      visits: "visits",
      entry: specDate,
      exit: specDate,
      cardNumber: "cardNumber",
      date: specDate,
    };

    const registerEntryEntity = entity as RegisterEntryEntity;

    // Act
    const mappedEntity : EntryEntity = mapFromRegisterCoreToRegisterView(registerEntryEntity);

    // Assert
    expect(mappedEntity.entry).toBe(
        specDate.toString()
    );
      expect(mappedEntity.exit).toBe(
          specDate.toString()
      );
      expect(mappedEntity.date).toBe(
          specDate.toString()
      );
  });

    it("should map multiple dates from RegisterEntryEntity to EntryEntity strings", () => {
        // Arrange
        const specDate = new Date();
        const entity = [
        {
            firstname: "firstname",
            lastname: "lastname",
            dni: "dni",
            company: "company",
            visits: "visits",
            entry: specDate,
            exit: specDate,
            cardNumber: "cardNumber",
            date: specDate,
        },
        {
            firstname: "firstname",
            lastname: "lastname",
            dni: "dni",
            company: "company",
            visits: "visits",
            entry: specDate,
            exit: specDate,
            cardNumber: "cardNumber",
            date: specDate,
        },
        ];

        const registerEntryEntity = entity as RegisterCollectionState;

        // Act
        const mappedEntity : EntryEntity[] = mapFromRegisterCoreToRegisterViewCollection(registerEntryEntity);

        // Assert
        expect(mappedEntity.length).toBe(
            2
        );
    });
});
