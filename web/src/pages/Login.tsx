import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scale, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { authService } from '../services/api';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('inspector');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authService.login(email, password);
      if (response.token) {
        // Normally store token in context/localStorage here
        localStorage.setItem('auth_token', response.token);
        navigate('/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="mb-8 flex flex-col items-center">
        <div className="p-3 rounded-2xl bg-nyaya-50 border border-nyaya-200 text-nyaya-700 mb-4">
          <Scale className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Niyam Dristi</h1>
        <p className="text-slate-600 text-sm mt-1">Admin & Reviewer Portal</p>
      </div>

      <Card className="w-full max-w-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl">Welcome Back</CardTitle>
          <CardDescription>Sign in to your official account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="role">
                Select Role
              </label>
              <select
                id="role"
                className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-nyaya-500 focus:border-transparent transition-colors"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="inspector">Inspector</option>
                <option value="admin">Admin</option>
                <option value="district_head">District Head</option>
                <option value="reviewing_official">Reviewing Official</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="email">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="officer@legalmetrology.gov.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-6"
              disabled={loading}
            >
              {loading ? 'Authenticating...' : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Sign In
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center text-xs text-slate-500 max-w-sm">
        Authorized personnel only. Access to this system is monitored and restricted.
      </div>
    </div>
  );
}
