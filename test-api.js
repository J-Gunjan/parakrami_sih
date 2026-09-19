const fetch = require('node-fetch');

async function test() {
  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@gov.in', password: 'password' })
    });
    const data = await res.json();
    console.log('Login:', data);

    const refreshRes = await fetch('http://localhost:5000/api/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: data.token })
    });
    const refreshData = await refreshRes.json();
    console.log('Refresh:', refreshRes.status, refreshData);

    const uploadRes = await fetch('http://localhost:5000/api/images/upload', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${refreshData.token}` }
    });
    console.log('Upload:', uploadRes.status, await uploadRes.text());
  } catch(e) {
    console.error(e);
  }
}
test();
