import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import Home from './components/Home';
import Category from './components/Category';
import About from './components/About';
import Login from './components/Login';

const App = () => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => window.location.assign('/'),
    },
    {
      label: 'Category',
      icon: 'pi pi-fw pi-list',
      command: () => window.location.assign('/category'),
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info',
      command: () => window.location.assign('/about'),
    },
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
              <div>
                <Menubar model={items} />
                <Home />
              </div>
            } />
          <Route path="/category" element={
              <div>
                <Menubar model={items} />
                <Category />
              </div>
            } />
          <Route path="/about" element={
              <div>
                <Menubar model={items} />
                <About />
              </div>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
