
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Placeholder components - these will be replaced later
const HomePage = () => <div className="container mx-auto p-8">Home Page</div>;
const EvidenceHub = () => <div className="container mx-auto p-8">Evidence Hub</div>;
const InnovationPipeline = () => <div className="container mx-auto p-8">Innovation Pipeline</div>;
const PatientResources = () => <div className="container mx-auto p-8">Patient Resources</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="evidence-hub" element={<EvidenceHub />} />
          <Route path="innovation-pipeline" element={<InnovationPipeline />} />
          <Route path="patient-resources" element={<PatientResources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
