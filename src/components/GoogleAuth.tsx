import React, { useEffect } from 'react';

const CLIENT_ID = '421119199177-f6uqukr6auj57l5bvic2r2jvbkpho6pu.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

const REDIRECT_URI = 'http://localhost:5173'; // URL de redirecionamento

const GoogleAuth: React.FC = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetchAccessToken(code);
    }
  }, []);

  const handleLoginClick = () => {
    const scope = 'https://www.googleapis.com/auth/userinfo.profile';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${scope}`;

    window.location.href = authUrl;
  };

  const fetchAccessToken = async (code: string) => {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `code=${code}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&grant_type=authorization_code`,
    });

    const data = await response.json();
    console.log(data)
    // Utilize o token de acesso para fazer chamadas à API do Google
    const accessToken = data.access_token;
    console.log('Token de Acesso:', accessToken);
  };

  return (
    <div>
      <h1>Autenticação com o Google</h1>
      <button onClick={handleLoginClick}>Fazer login com o Google</button>
    </div>
  );
};

export default GoogleAuth;