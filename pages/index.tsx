import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [storeName, setStoreName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/tienda-creada');
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem' }}>Crea tu tienda online gratis</h1>
      <p>Comenzá ahora. Sin tarjeta. Sin comisiones.</p>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <div>
          <input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Nombre de tu tienda"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.75rem', background: '#000', color: '#fff' }}>
          Crear mi tienda
        </button>
      </form>
    </div>
  );
}
