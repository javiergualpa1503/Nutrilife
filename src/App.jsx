import { Informacion } from './Informacion';
import { CalculadoraTmb } from './CalculadoraTmb';

function App() {

return (
<div className='p-8 bg-gray-200 mt-4 container mx-auto min-h-screen'>
    <h1 className="text-2xl font-semibold mb-4 text-center">Calculadora de Metabolismo Basal</h1>
    <p className='text-md text-center'>Calcula tu tasa de metabolismo basal, gracias a la calculadora de tasa de metabolismo basal, podrás conocer las calorías que necesitas.</p>
      <CalculadoraTmb/>
      <Informacion/>
</div>
  );
  
}

export default App
