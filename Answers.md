1. What problem does the context API help solve?

- Lets us share data across the entire app in every level.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Actions: a payload of info that sends data to the store.
-Reducers: it lets changes in the app.
-Store: its what it keeps the actions, reducers etc. Is what contains the entire app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application State:
Is global, it can access any component.

-Component State:
Is Local, it could only be accessed within its component.

-Using Application state is for bigger, complex apps.

-
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-It allows us call actions, that are used to dispatch.
It returns a action object which passes to the store dispatch.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

- I don't have a favorite yet :/
