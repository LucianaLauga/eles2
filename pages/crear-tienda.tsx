import { useState } from "react";

export default function CrearTienda() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !precio || !imagen) return;
    alert(`Producto creado: ${nombre} - $${precio}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />

      <label>Precio</label>
      <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />

      <label>Imagen del producto</label>
      <input type="file" accept="image/*" onChange={(e) => {
        const file = e.target.files?.[0];
        setImagen(file || null);
        if (file) setPreview(URL.createObjectURL(file));
      }} />

      {preview && <img src={preview} alt="preview" width={100} />}

      <button type="submit">Crear tienda</button>
    </form>
  );
}