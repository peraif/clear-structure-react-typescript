### `yarn start`

Runs the app in the development mode.

### `yarn build`

Builds the app for production to the `build` folder.\

## `PROJECT STRUCTURE`

~ `Components:`

1) `Smart` - Smart components are those components that can use relatively serious logic to display something.

  * Can use local storage as well as access global storage without changing it
  * Can use all available hooks except those that interact with the network
  * Can use Ordinary, Simple and UI components in their implementation

2) `Ordinary` - Ordinary components are those components that can have some kind of logic to display something

* Can't use local storage, nor access global
* Cannot use hooks other than those natively shipped with React (with the exception of useState)
* Can use Simple and UI components in their implementation

4) `Simple` - Simple components are those components that are simple, in other words, components that do not have any logic in them, that just render something.
* Cannot use local storage and access global
* Cannot use hooks other than those natively shipped with React (with the exception of useState)
* Can use UI components in their implementation

5) `UI (UI, oddly enough)` - UI components are those components that replace native (standard) components by type: button, input, textarea, select, etc.

* Cannot use their local storage and access the global
---

~  `Containers`- these are the components that form some containers, which, in the future, are used to form pages, which, moreover, contain in their implementation the components of the other four groups and at the same time interact in some way with services or the network, speaking generally

---

~ `Pages` are those components that are formed thanks to containers and components from the Components folder, if necessary. They can, like containers, interact with services.

---

~ `Core`. This folder is the "core" of your application. It stores everything to interact with the server, global storage, the theme of your application, etc

This folder contains:
* Config - this folder stores the configuration files of the application (for example, it can store data needed to interact with the backend)
* Constants - this folder contains all the constants that are used in the application (for example, error and warning messages)
* Hooks - this folder stores all custom hooks (hooks that were made by you).
* Models - this folder stores models that come from the backend.
* Schemes - this folder stores the schemes of forms, tables, etc.
* Services - this folder stores the services themselves, thanks to which communication with the backend takes place.
* Store - global storage schemes are stored in this folder (if you use MobX), if you prefer Redux, then actions, reducers, etc. can be stored in this folder.
* Theme (for Styled-Components) - This folder stores application themes.
* Types - this folder stores auxiliary types, as well as module declarations.
* Utils - this folder contains auxiliary, simple, functions that can be used in hooks or components.
* api.ts - this file contains an instance of an HTTP client (for example, axios), which is used by services and which somehow mutates these requests (to transfer any headers, for example).
---

~ `Assets` - this folder stores all static files, such as: icons, images, fonts, etc. (they, of course, should also be grouped and divided into folders)

---

~ `Routes` - in this folder (or a file, as you like) all application routes are stored (an example will be below)

---

~ `Styles` - this folder stores all global styles that apply to all elements and the document, including


