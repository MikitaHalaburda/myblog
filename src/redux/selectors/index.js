import { createSelector } from "reselect";

const getPerson = state => state.singlePerson.person;
const getPersonLoading = state => state.singlePerson.loading;
const getPersonError = state => state.singlePerson.error;

const getPersonSelector = createSelector(
  [getPerson, getPersonLoading, getPersonError],
  (person, loading, error) => {
    console.log("Computing person");
    return { person, loading, error };
  }
);

export default getPersonSelector;
