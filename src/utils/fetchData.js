export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_EXERCISE_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
}

export const bmiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_BMI_API_KEY,
    'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
  }
}

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}



