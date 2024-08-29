import { useState } from 'react';
import supabase from '../../supaconfig';  // Asegúrate de que la ruta es correcta

function Formulario () {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    usuario: '',
    cc: '',
    telefono: '',
    correo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insertar datos en la base de datos de Supabase
    const { data, error } = await supabase
      .from('profesores')  // Reemplaza 'profesores' por el nombre de tu tabla
      .insert([
        {
          nombre: formData.nombreCompleto,
          usuario: formData.usuario,
          cc: formData.cc,
          telefono: formData.telefono,
          email: formData.correo
        }
      ]);

    if (error) {
      console.error('Error al insertar los datos:', error);
    } else {
      console.log('Datos insertados correctamente:', data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreCompleto">Nombre Completo:</label>
        <input
          type="text"
          id="nombreCompleto"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="usuario">Nombre Usuario:</label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="cc">CC:</label>
        <input
          type="text"
          id="cc"
          name="cc"
          value={formData.cc}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
