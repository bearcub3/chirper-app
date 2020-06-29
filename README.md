# Chirper Project

This repo is a code-along with the first project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

Most of the commits in this repository correspond to videos in the program.

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

5. Actions
   With the APIs given to work with, we need to fetch the data on the componentDidMount cycle.
   The action creator which will fetch each state should be asynchronous action.
   Redux middleware can gain access to an action when it's on its way to the reducers.

> The middleware will call that function with dispatch method itself as the first argument...The action will only reach the reducers once the API request is completed. It will also “swallow” such actions so don't worry about your reducers receiving weird function arguments. Your reducers will only receive plain object actions—either emitted directly, or emitted by the functions as we just described.” By Dan Abramov

6. Reducers & Middleware
   (previousState, action) => newState

2 ways to initialize the state inside the store
[Initializing State](https://redux.js.org/recipes/structuring-reducers/initializing-state)

-   pass the initial state(or a part of the initial state) as `preloadedState` to the `createStore` function.


    const store = createStore (
        rootReducer,
        { tweets: {} }
    );

-   include a default state parameter as the first argument inside a particular reducer function.


    function tweets (state = {}, action) {
    }

Middleware is called in the order it is listed.
