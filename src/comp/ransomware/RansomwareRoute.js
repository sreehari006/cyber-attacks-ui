import React, { useState, useEffect } from 'react';
import RansomwareAppBar from './RansomwareAppBar';
import RansomwareDrawer from './RansomwareDrawer';
import RansomwareHome from './RansomwareHome'
import RansomwareSearch from './RansomwareSearch'
import RansomwareAdd from './RansomwareAdd'
import RansomwareItem from './RansomwareItem'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

export default function RansomwareRoute() {
    const [currentPath, setCurrentPath] = useState('/');
    const [drawerSharedState, setDrawerSharedState] = useState(false);

    const handleDrawerSharedStateChange = (newState) => {
        setDrawerSharedState(newState);
    }

    function RouteChangeHandler({ setCurrentPath }) {
        const location = useLocation();
      
        useEffect(() => {
          
          setCurrentPath(location.pathname);
        }, [location, setCurrentPath]);
      
        return null;
    }


    return(
        <React.Fragment>
            <Router>
           <RansomwareAppBar 
                drawerSharedState={drawerSharedState} 
                onDrawerSharedStateChange={handleDrawerSharedStateChange} 
            />
            
           <RansomwareDrawer 
                drawerSharedState={drawerSharedState} 
                onDrawerSharedStateChange={handleDrawerSharedStateChange} 
            />
            
                <Routes>
                    <Route path="/" element={<RansomwareHome /> } />
                    <Route path="/home" element={<RansomwareHome /> } />
                    <Route path="/search" element={<RansomwareSearch /> } />
                    <Route path="/add" element={<RansomwareAdd /> } />
                    <Route path="/ransomware/:item" element={<RansomwareItem /> } />
                </Routes>
                <RouteChangeHandler setCurrentPath={setCurrentPath} />
            </Router>
           
        </React.Fragment>
    );
}