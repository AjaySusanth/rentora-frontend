import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { AuthProvider } from './utils/AuthContext';

const App = () => {
    return (
        <AuthProvider>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={
                <Layout>
                    <HomePage />
                </Layout>
            } />
            <Route path="/explore" element={
                <Layout>
                    <ExplorePage />
                </Layout>
            } />
            <Route path="*" element={
                <Layout>
                    <div style={{textAlign: 'center', padding: '80px 20px'}}>
                        <h1>Page Not Found</h1>
                        <p>Sorry, the page you're looking for doesn't exist.</p>
                    </div>
                </Layout>
            } />
        </Routes>
        </AuthProvider>
    );
};

export default App;