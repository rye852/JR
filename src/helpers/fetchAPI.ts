const BASE_URL = 'https://exercisedb.p.rapidapi.com/exercises';

export const fetchFromApi = async (url: string) => {
  try {
    const resault = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '22f8b29f47msh8ed4637887659c3p12728ejsn0b0a369de2b4',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    });
    const data = await resault.json();
    if (!resault.ok) throw new Error('network error');
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
