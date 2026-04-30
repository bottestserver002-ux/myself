const API = "http://localhost:8000"; // đổi khi deploy

export const getPoems = async () => {
  const res = await fetch(`${API}/poems`);
  return res.json();
};

export const getPosts = async () => {
  const res = await fetch(`${API}/posts`);
  return res.json();
};

export const addPoem = async (data) => {
  return fetch(`${API}/poems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};