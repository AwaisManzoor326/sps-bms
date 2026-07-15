import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Placeholder from './pages/Placeholder';

// Pages not yet converted from PHP — routed to a placeholder so
// every link in the Layout/Home dropdowns already works end-to-end.
const stubPages = [
  { path: 'employee-detail', title: 'Employee Detail' },
  { path: 'hr-talks', title: 'HR Talk' },
  { path: 'blog', title: 'Employee Blog' },
  { path: 'orientation-plan', title: 'Orientation Plan' },
  { path: 'profile', title: 'My Profile' },
  { path: 'planning-form', title: 'Planning Form' },
  { path: 'performance', title: 'Performance' },
  { path: 'timelive-blog', title: 'TimeLive' },
  { path: 'onboarding-steps', title: 'Onboarding Steps' },
  { path: 'onboarding-plan', title: 'Onboarding Plan' },
  { path: 'onboarding-checklist', title: 'Onboarding Checklist' },
  { path: 'offboarding-checklist', title: 'Offboarding Checklist' },
  { path: 'offboarding-plan', title: 'Offboarding Plan' },
];

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {stubPages.map(({ path, title }) => (
          <Route key={path} path={`/${path}`} element={<Placeholder title={title} />} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
