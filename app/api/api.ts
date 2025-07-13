import axios from "axios";

export async function getQuotes() {
    const quotes = await axios.get(
        'https://api.api-ninjas.com/v1/quotes', {
            headers: {
                "X-Api-Key": process.env.API_KEY
            }
        }
    )
    return quotes.data
}