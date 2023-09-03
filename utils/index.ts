
export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': 'b440ecc1b1mshff4195afb2b0fc6p1aa4fajsn057b9ac418c6',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
	
	const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers : headers});
    const result = await response.json();
    return result;
}