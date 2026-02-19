// realizar lo mismo

const API_KEY = 'TU_VALOR';

const getHeroData = async () => {
    try {
        // 1. Esperamos a que la petición termine
        const response = await fetch(`url${API_KEY}`);
        
        // 2. Esperamos a que el cuerpo se transforme a JSON
        // (A diferencia de los .then, acá no se anida nada)
        const data = await response.json();

        console.log(data);
        
    } catch (err) {
        // 3. Si algo falla en cualquier 'await', cae directo acá
        console.error('Error en la petición:', err);
    }
};

getHeroData();