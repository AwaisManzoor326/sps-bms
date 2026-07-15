import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import EmployeeDetail from './pages/EmployeeDetail';
import HrTalks from './pages/HrTalks';
import Blog from './pages/Blog';
import OrientationPlan from './pages/OrientationPlan';
import Profile from './pages/Profile';
import PlanningForm from './pages/PlanningForm';
import Performance from './pages/Performance';
import TimeliveBlog from './pages/TimeliveBlog';
import OnboardingSteps from './pages/OnboardingSteps';
import OnboardingPlan from './pages/OnboardingPlan';
import OnboardingChecklist from './pages/OnboardingChecklist';
import OffboardingChecklist from './pages/OffboardingChecklist';
import OffboardingPlan from './pages/OffboardingPlan';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-detail" element={<EmployeeDetail />} />
        <Route path="/hr-talks" element={<HrTalks />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/orientation-plan" element={<OrientationPlan />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/planning-form" element={<PlanningForm />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/timelive-blog" element={<TimeliveBlog />} />
        <Route path="/onboarding-steps" element={<OnboardingSteps />} />
        <Route path="/onboarding-plan" element={<OnboardingPlan />} />
        <Route path="/onboarding-checklist" element={<OnboardingChecklist />} />
        <Route path="/offboarding-checklist" element={<OffboardingChecklist />} />
        <Route path="/offboarding-plan" element={<OffboardingPlan />} />
      </Route>
    </Routes>
  );
}

export default App;
