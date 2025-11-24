"use client";

import { SessionProvider } from 'next-auth/react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="dashboard-container">
        <Header />
        
        <div className="dashboard-layout">
          <Sidebar />
          
          <div className="main-content-wrapper">
            <main className="main-content">
              {children}
            </main>
            
            <Footer />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
