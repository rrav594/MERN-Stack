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
export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok)
    throw Error(`Couldn't find order with the id: #${id}. Type in correct id`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
