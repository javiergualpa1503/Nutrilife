
export const Informacion = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">

    <h2 className="text-2xl font-bold mb-4">Metabolismo Basal (TMB)</h2>

    <p className="text-base mb-4">El metabolismo basal (TMB) representa la cantidad mínima de energía que tu cuerpo necesita para mantener funciones vitales mientras estás en reposo, es decir, sin realizar ninguna actividad física externa. Estas funciones vitales incluyen la respiración, la circulación sanguínea, la regulación de la temperatura corporal, la función cerebral y otras actividades metabólicas básicas.</p>

    <h2 className="text-xl font-bold mb-2">Fórmula de Harris-Benedict para el TMB:</h2>

    <div className="mb-4">
        <p className="font-semibold">Para hombres:</p>
        <p className="ml-4">TMB = 88.362 + (13.397 × peso en kg) + (4.799 × altura en cm) - (5.677 × edad en años)</p>
    </div>

    <div className="mb-4">
        <p className="font-semibold">Para mujeres:</p>
        <p className="ml-4">TMB = 447.593 + (9.247 × peso en kg) + (3.098 × altura en cm) - (4.330 × edad en años)</p>
    </div>

    <h2 className="text-xl font-bold mb-2">Explicación de los Componentes de la Fórmula:</h2>

    <ul className="list-disc list-inside mb-4">
        <li>Peso en kg: Es el peso corporal en kilogramos.</li>
        <li>Altura en cm: Es la altura corporal en centímetros.</li>
        <li>Edad en años: Es la edad del individuo en años.</li>
    </ul>

    <h2 className="text-xl font-bold mb-2">Uso de la Fórmula:</h2>

    <p className="text-base mb-4">Para calcular el metabolismo basal (TMB) utilizando la fórmula de Harris-Benedict, simplemente sustituyes los valores del peso, altura y edad en la ecuación correspondiente al sexo del individuo. Una vez que aplicas estos valores en la fórmula adecuada, obtienes una estimación de la cantidad de calorías que tu cuerpo necesita en reposo para mantener sus funciones vitales básicas.</p>

    <p className="text-base mb-4">Es importante tener en cuenta que el metabolismo basal puede variar entre individuos debido a factores como la masa muscular, la genética y otros aspectos metabólicos únicos de cada persona. La fórmula de Harris-Benedict proporciona una estimación general y útil del metabolismo basal basado en parámetros básicos como el peso, la altura, la edad y el sexo.</p>

</div>
  )
}
