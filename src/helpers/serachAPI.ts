const BASE_URL =
  'https://youtube-search-results.p.rapidapi.com/youtube-search/?q=';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '22f8b29f47msh8ed4637887659c3p12728ejsn0b0a369de2b4',
    'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
  },
};

export const searchFetch = async (serachTerme: string) => {
  try {
    const response = await fetch(`${BASE_URL}${serachTerme}`, options);
    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    return error;
  }
};
