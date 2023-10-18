import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function App() {
  const initialCategories = [
    {
      id: 1,
      name: "Allowance",
      description: "From Parents"
    },
    {
      id: 2,
      name: "Donation",
      description: "From Friends"
    },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState({ id: '', name: '', description: '' });

  const handleAdd = () => {
    if (newCategory.name && newCategory.description) {
      setCategories([...categories, { ...newCategory, id: categories.length + 1 }]);
      setNewCategory({ id: '', name: '', description: '' });
    }
  };

  return (
    <div>
      <h1>Categories</h1>
      <div className="master-detail-container">
        <div className="master-section">
          <DataTable
            value={categories}>
            <Column field="id" header="ID"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="description" header="Description"></Column>
          </DataTable>
        </div>
        <div className="detail-section">
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
