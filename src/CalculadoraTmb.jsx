import  { useState } from 'react'

export const CalculadoraTmb = () => {
    
    const [form, setForm] = useState({
        edad: '',
        genero: 'masculino',
        peso:'',
        altura:'',
        nivelActividad: '',
        res : ''
    })
    
    const [calories, setCalories] = useState(null);
    
    
    const {edad, genero,peso,altura,nivelActividad} = form
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
        // Lógica para calcular calorías
        const { genero, edad, altura, peso, nivelActividad } = form;
        let tmb = 0;   
    
        if (genero === 'masculino') {
          tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
        } else if (genero === 'femenino') {
          tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
        }
    
        let factorActividad = 1.2;
        if (nivelActividad === 'ligero') {
        factorActividad = 1.375;
        } else if (nivelActividad === 'moderado') {
        factorActividad = 1.55;
        } else if (nivelActividad === 'activo') {
        factorActividad = 1.725;
        } else if (nivelActividad === 'muyActivo') {
        factorActividad = 1.9;
        }
    
    const calorias = Math.round(tmb * factorActividad);
        setCalories(calorias);
    };
    
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
        ...form,
        [name]: value
        });
    };
    



  return (
    <div className="max-w-lg mx-auto mt-8 mb-10 p-6 bg-gray-200 rounded-lg shadow-xl">
    <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
            <span className="text-gray-700">Edad:</span>
            <input
                type="number"
                placeholder='Ejm: 20'
                name="edad"
                value={edad}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                />
        </label>

        <label className="block">
            <span className="text-gray-700">Selecciona tu género</span>
            <select
                value={genero}
                onChange={handleInputChange}
                name='genero'
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                >
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
               
            </select>
        </label>



        <label className="block">
            <span className="text-gray-700">Peso (kg):</span>
            <input
                type="number"
                placeholder='Ejm: 70 kg'
                name='peso'
                value={peso}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                step="0.1"
                required
                />
        </label>

        <label className="block">
            <span className="text-gray-700">Altura (cm):</span>
            <input
                type="number"
                name='altura'
                placeholder='Ejm: 170 cm'
                value={altura}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                />
        </label>

        <label className="block">
            <span className="text-gray-700">Nivel de Actividad Física:</span>
            <select
                value={nivelActividad}
                onChange={handleInputChange}
                name='nivelActividad'
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                >
                <option value="sedentario">Sedentario</option>
                <option value="ligero">Ligero (ejercicio ligero 1-3 días/semana)</option>
                <option value="moderado">Moderado (ejercicio moderado 3-5 días/semana)</option>
                <option value="activo">Activo (ejercicio duro 6-7 días/semana)</option>
                <option value="muyActivo">Muy activo (trabajo físico duro + ejercicio diario)</option>
               
            </select>
        </label>

        <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
            Calcular Metabolismo Basal
        </button>
    </form>


{calories !== null && (
<div className="mt-4">
    <h3 className="text-lg font-semibold">Calorías diarias estimadas:</h3>
    <p className="text-xl">{calories} kcal</p>
</div>
)}

</div>
)
}
