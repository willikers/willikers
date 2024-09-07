import { useEffect } from 'react';
import { Outlet, redirect } from 'react-router-dom';
import { Nav } from './Nav.tsx';

export const App = () => {
  // Used for github pages to redirect to the correct page
  useEffect(() => {
    if (window.location.search.includes('redirect=')) {
      redirect(atob(window.location.search.split('=')[1]));
    }
  }, []);

  return (
    <div className="m-auto flex min-h-full w-full flex-col">
      <div className="m-auto flex w-full max-w-[70rem]">
        <Nav />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
      <footer className="h-[300px] bg-slate-950 p-20">hello</footer>
    </div>
  );
};
