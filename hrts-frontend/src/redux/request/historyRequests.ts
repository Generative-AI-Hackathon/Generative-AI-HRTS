

export async function loadHistory(payload: string ) {
  const response: Response = await fetch(
    `${import.meta.env.VITE_APP_BASE}/patient/hisory/${payload}`,
    {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status != 200) {
    const error = await response.json();
    throw new Error(error.error);
  }
  return await response.json();
}

