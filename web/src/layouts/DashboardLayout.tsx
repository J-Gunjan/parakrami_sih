import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ClipboardList,

  BookOpen,
  FileText,
  Users,
  Building2,
  BarChart3,
  LogOut,
  Menu
} from 'lucide-react';
import { cn } from '../lib/utils';

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Inspections', path: '/inspections', icon: ClipboardList },
    { name: 'Analytics & Risk', path: '/analytics', icon: BarChart3 },
    { name: 'Rule Engine', path: '/rules', icon: BookOpen },
    { name: 'Reports', path: '/reports', icon: FileText },
    { name: 'Officers', path: '/officers', icon: Users },
    { name: 'Manufacturers', path: '/manufacturers', icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex overflow-hidden">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:static inset-y-0 left-0 z-50 w-64 bg-sky-100 text-slate-900 border-r border-sky-200 transform transition-transform duration-200 ease-in-out md:transform-none flex flex-col",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 flex items-center px-6 border-b border-sky-300">
          <img src="/niyam_dristi_logo.png" alt="Logo" className="h-8 w-auto object-contain mr-3" />
          <span className="font-bold text-lg tracking-tight text-slate-900">Niyam Dristi</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => cn(
                "flex items-center px-3 py-2.5 rounded-r-lg text-sm font-medium transition-colors border-l-4",
                isActive
                  ? "bg-sky-200 text-sky-900 border-sky-700"
                  : "border-transparent text-slate-700 hover:bg-sky-200/50 hover:text-sky-900"
              )}
            >
              <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-sky-300">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-sky-300 flex items-center justify-center text-sm font-semibold text-sky-900 mr-3">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Admin User</p>
              <p className="text-xs text-slate-600 truncate">National Admin</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-100/50 transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3 flex-shrink-0" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 bg-white border-b border-slate-200 shadow-sm z-10">
          <div className="flex items-center flex-1">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 mr-2 -ml-2 rounded-md text-slate-500 hover:text-slate-900 md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            {/* Breadcrumb could go here */}
            <div className="text-sm font-semibold text-slate-700 hidden sm:block">
              Admin & Reviewer Portal
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              API Synced
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
