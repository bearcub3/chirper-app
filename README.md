# Chirper Project

This repo is a code-along with the first project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

## Project Setup

-   clone the Project - `git@github.com:udacity/reactnd-chirper-app.git`
-   install the dependencies - `npm install`

## License

MIT

---

### Workflow

1. Identify Each View

    > write down the requirments of each view including routes and functionalities

2. Break Each View into a Hierarchy of Components

    > draw boxes around every components and arrange them into a hierarchy.
    > a component should ideally do one thing. If it ends up growing, it should be decomposed into smaller subcomponents. So, we will have a better idea what would become components from the View. For now, we don't care which components will be container, only think about the presentational parts. As we start building out the store, we create additional components that will be the container to get the data.

3. Determine what Events Happen in the App

    > What actions the app or the user is performing on the data. Is the data being set, modified, or deleted?

4. Data and the Store
    > Determine what Data lives in the store
    > Here are the principles of state normalization:

-   Each type of data(state) gets its own "table" in the state.
-   Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.
-   Any references to individual items should be done by storing the item's ID.
-   Arrays of IDs should be used to indicate ordering.
