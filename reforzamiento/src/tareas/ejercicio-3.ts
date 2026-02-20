const URL = 'https://jsonplaceholder.typicode.com/users/1';

const getUserInfo = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json()
        const { name, email, address: {city}} = data;

        console.log(`El usuario ${name}, correo: ${email} vive en ${city}`);
        
        
    } catch (error) {
        console.error(error);
        
    }
}

getUserInfo();