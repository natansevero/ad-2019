import { createSelector } from "reselect";

const selectPerson = state => state.person;

export const selectPeopleList = createSelector(
    [selectPerson],
    person => person.list
);

export const selectNumberOfPeople = createSelector(
    [selectPeopleList],
    peopleList => peopleList.length
)