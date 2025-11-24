'use client';

import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">ERP Speed</h1>
        </div>
        
        <nav className="header-nav">
          <button className="header-button">Notificaciones</button>
          <button className="header-button">Ayuda</button>
          <div className="header-user">
            {session?.user && (
              <>
                <div className="user-details">
                  <span className="user-name">{session.user.name}</span>
                  <span className="user-role">({session.user.role})</span>
                </div>
                <button 
                  className="header-button" 
                  onClick={() => signOut({ callbackUrl: '/login' })}
                >
                  Cerrar Sesión
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
