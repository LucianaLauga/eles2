import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CrearTienda() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !precio || !imagen) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(imagen);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-emerald-700">Crear nuevo producto</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold">Nombre del producto</label>
          <Input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Zapatillas urbanas"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Precio</label>
          <Input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="$"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Imagen del producto</label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files?.[0] || null)}
            required
          />
        </div>

        <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
          Crear producto
        </Button>
      </form>

      {preview && (
        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4">Vista previa</h2>
          <img src={preview} alt="preview" className="w-full max-w-sm rounded shadow" />
          <h3 className="text-xl font-bold mt-4">{nombre}</h3>
          <p className="text-gray-600 mb-2">Precio sugerido: ${precio}</p>
          <p className="text-gray-500 italic">Descripción generada: Este producto es ideal para quienes buscan estilo y funcionalidad. ✨</p>
        </div>
      )}
    </div>
  );
}