import { createSelector } from "reselect";

const getPerson = state => state.singlePerson.person;
const getPersonLoading = state => state.singlePerson.loading;
const getPersonError = state => state.singlePerson.error;
const getPersonId = state => state.singlePerson.personId;

const getPersonSelector = createSelector(
  [getPerson, getPersonLoading, getPersonError, getPersonId],
  (person, loading, error, personId) => {
    console.log("Computing person");
    return { person, loading, error, personId };
  }
);

export default getPersonSelector;
