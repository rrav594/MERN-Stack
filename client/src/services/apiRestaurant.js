// API URL FOR MENU PROVIDE BY THE COMPANY
// const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

// Menu api is api_url/menu

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const menu = await fetch(`${API_URL}/menu`);
  if (!menu) {
    throw Error("API Provided is not working...Something broke.");
  }
  const { data } = await menu.json();
  return data;
}
