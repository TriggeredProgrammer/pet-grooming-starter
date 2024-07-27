// const API_BASE_URL = "https://dearpet.co/api";

const API_BASE_URL = "https://testing.dearpet.co/api";

// const API_BASE_URL = "http://127.0.0.1:8000/api";


let bearerToken = "";

export const setAuthToken = async (token) => {
  bearerToken = token;  
};
(async () => {
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    setAuthToken(authToken);
    bearerToken = authToken;
  }
})();

const headers = {
  Accept: "application/json",
  "CF-Token": "g6k18WbO34+eOXbtywGbZwELsUDz",
  "Content-Type": "application/json",
  Authorization: `Bearer ${bearerToken}`,
  "Accept-Language": "en",
};

const getHeaders = () => {
  const headers = {
    Accept: "application/json",
    "CF-Token": "g6k18WbO34+eOXbtywGbZwELsUDz",
    
    "Content-Type": "application/json",
    "Accept-Language": "en",
  };

  if (bearerToken) {
    headers.Authorization = `Bearer ${bearerToken}`;
  }

  return headers;
};


export const getData = async (url, method = "GET", data = null) => {
  try {
    const config = {
      method,
      headers,
      body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(`${API_BASE_URL}/${url}`, config);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const postData = async (url, data) => {
  try {
    const config = {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    };

    const response = await fetch(`${API_BASE_URL}/${url}`, config);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
