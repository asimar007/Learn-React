const baseURL = "https://api.weatherapi.com/v1/current.json?key=8276f4f199984b65bb543341242904";
export const getCityData = async (city) => {
    try {
        const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const getCurrentLocation = async (lat, lon) => {
    try {
        const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
