# Financial Tracker using React JS

```bash
# git clone https://github.com/cbatuic/react-fintrack-1.git
# cd react-fintrack-1
# npm install
# npm run dev
```

### Code Structure
```bash
+ react-fintrack-1
|___+ node_modules
    |___ ...
|___+ public
    |___ vite.svg
|___+ src
    |___+ assets
    |___ App.css
    |___ App.jsx
    |___ index.css
    |___ main.jsx
|___ index.html
|___ README.md
|___ vite.config.js
|___ package.json
|___ package-lock.json
|___ .gitignore
```
* ```react-fintrack-1``` (Directory): The root directory of the React project.
    1. ```node_modules``` (Directory): This directory contains the dependencies installed for the project. It's managed by npm or Yarn and typically not added to version control.
    2. ```public``` (Directory): This directory may contain publicly accessible files, like static assets or the index.html file.
        * ```vite.svg```: A static asset (SVG file) that may be used in the application.
    3. ```src``` (Directory): The directory where the application's source code is located.
        * ```assets``` (Directory): This directory might contain additional assets used in the project.
        * ```App.css```: A CSS file related to the React component(s), likely used for styling App component.
        * ```App.jsx```: A JavaScript/React component file that may represent the main application or a key part of the app. In this starter code this file contains the Category component that allows user to add new item.
        * ```index.css```: Another CSS file, possibly for global styles or custom styling related to the entry point of the application.
        * ```main.jsx```: A JavaScript file that serves as the entry point of the React application or where the main logic is implemented.
    4. ```index.html```: The main HTML file for the application, which is typically the starting point for rendering React components.
    5. ```README.md```: A markdown file that usually contains documentation or instructions for the project.
    6. ```vite.config.js```: A configuration file for Vite, the build tool or bundler for the project.
    7. ```package.json```: A JSON file that defines the project's metadata and dependencies, often used for package management with npm or Yarn.
    8. ```package-lock.json```: A lockfile that records the exact versions of all the dependencies installed in the project to ensure consistent builds.
    9. ```.gitignore```: A file that specifies patterns of files and directories to be ignored by Git, typically used to exclude generated or temporary files.

This project structure is for the ```React JS``` application built with ```Vite```, a build tool and development server for modern web development. The specific purpose and content of these files may vary depending on the project's requirements and setup.

### Code Snippets

```js
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
```
> The code sets up the necessary imports for using ```React``` and ```PrimeReact``` components in a React component. It builds a web application with a data table, columns, input fields, and buttons using the PrimeReact library in a React application. 

```js
function App(){
    //App component's behavior/logic here...
    return(
        //App component's structure/user-interface here...
    );
}
export default App;
```
> This code snippet defines a ```React``` [***functional component***](https://react.dev/learn/keeping-components-pure#purity-components-as-formulas) named ```App```, which typically houses the core ***logic*** and ***user*** interface structure of a React application. The comment placeholders indicate where developers should add application-specific logic and the user interface structure using [***JSX***](https://react.dev/learn/writing-markup-with-jsx). 

> The final line ```exports App``` as the default export, enabling it to be imported and used with a chosen variable name in other parts of the application. This snippet represents the foundational structure of a React application, separating logic and presentation within the same component.

```js
  const initialCategories = [...];

  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState({ id: '', name: '', description: '' });

```
> The provided code initializes and manages the ***state of categories*** in a ```React``` application. It starts by defining an ***initialCategories*** array containing predefined category objects, each with *id*, *name*, and *description* properties. The code then utilizes the [***useState hook***](https://react.dev/reference/react#state-hooks) to create two state variables: *categories* and *newCategory*. 

> The categories state variable holds the category data and is initialized with the initialCategories array. Meanwhile, ***newCategory*** is used to *capture user input* for adding new categories and is initially set as an empty category object. This code sets up the foundational ***state management*** for category data, allowing the application to display existing categories and facilitate the addition of new ones.

```js
const handleAdd = () => {
    if (newCategory.name && newCategory.description) {
        setCategories(...);
        setNewCategory(...);
    }
};
```
> This code defines a function named `handleAdd`, which is typically triggered when a user attempts to add a new category in a React application. The function first checks if both the `name` and `description` properties in the `newCategory` state variable have valid values. If they do, it creates a new category object by spreading the `newCategory` object and assigning it a unique `id` based on the length of the `categories` array. 

> This new category is then added to the existing `categories` array using the `setCategories` function, effectively updating the application's state with the new category. Finally, the `newCategory` state is reset to its initial empty state, clearing the input fields for the next category addition. This code encapsulates the behavior for adding new categories to the application's data.

```js
<DataTable value={categories}>
    <Column field="id" header="ID"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="description" header="Description"></Column>
</DataTable>
```
> This code represents the rendering of a data table using [***PrimeReact components***](https://primereact.org/datatable/) within a React application. The `DataTable` component is used to display tabular data, and it is populated with data from the `categories` state. Inside the `DataTable`, three `Column` components define the columns of the table: "ID," "Name," and "Description." 

> These columns are configured to display data from the `categories` array based on the corresponding `field` properties, which specify which object property to show in each column. This code is responsible for rendering a table that displays the categories' ID, name, and description in the user interface of the application.

```js
<h2>Add Category</h2>
<InputText
    value={newCategory.name}
    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
    placeholder="Name"
/>
<InputText
    value={newCategory.description}
    onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
    placeholder="Description"
/>
<Button label="Add" icon="pi pi-plus" onClick={handleAdd} />
```
> These lines of code represent the user interface elements for adding a new category in a React application. A heading with "Add Category" is displayed to provide context. Below the heading, there are two `InputText` components, each associated with the `name` and `description` properties of the `newCategory` state. Users can input the name and description of the new category in these text fields, and their changes are captured with the `onChange` event handlers, updating the `newCategory` state accordingly. 

> Finally, a [`Button`](https://primereact.org/button/) component with the label "Add" and a "plus" icon is displayed, allowing users to trigger the `handleAdd` function when clicked. This code segment collectively forms the user interface for inputting and adding new category data in the application.

### Extra Challenge
1. Create an **Edit** functional component which includes user interface to modify ```name``` and ```description``` properties.

    ```js
    const handleEdit = () => {
        // edit logic here...
    };
    ```

2. Update the ```DataTable``` once the changes are saved.
3. Create a ```categories.json``` data and use ```axios``` to perform ```GET``` and ```PUT``` requests.