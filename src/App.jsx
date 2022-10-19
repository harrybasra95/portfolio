import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Routes';
import '@fontsource/roboto';
import './App.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router />);
