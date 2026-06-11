const API_URL = 'https://www.mmobomb.com/api1/games'

export async function getGames() {
        try {
            const response = await fetch(API_URL)
            if (!response.ok) throw new Error(`Error ${response.status}`)     
            return await response.json()           
        }
        catch (error) {
                console.error('Error fetching games:', error)
                throw error
        }
}
