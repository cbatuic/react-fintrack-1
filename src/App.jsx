import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function App() {
  const categories = [
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
      </div>
    </div>
  );
}

export default App;
