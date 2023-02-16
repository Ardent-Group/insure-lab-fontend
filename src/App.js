import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Home from './pages/Home';
import Protocols from './pages/Protocols';
import ProtocolDetails from './pages/ProtocolDetails';
import UnlistedCreate from './pages/UnlistedCreate';
import Dashboard from './pages/Dashboard';
import Proposals from './pages/Proposals';
import Claims from './pages/Claims';
import Governance from './pages/Governance';
import DaoMemberPortal from './pages/DaoMemberPortal';
import Members from './pages/Members'
import ClaimDetails from './pages/ClaimDetails';

function App() {
  return (
    <Router>
      <Flex>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/protocols" element={<Protocols />} />
            <Route path="/protocols/:id" element={<ProtocolDetails />} />
            <Route path="/create-custom-insurance" element={<UnlistedCreate />} />
            <Route path="/risk-assessor-dashboard" element={<Dashboard />} />
            <Route path="/governance-claims" element={<Proposals />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/governance-claims/:id" element={<ClaimDetails />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/dao-member-portal" element={<DaoMemberPortal />} />
            <Route path="/dao-members" element={<Members />} />
          </Routes>
        </Flex>
    </Router>
  );
}

export default App;
