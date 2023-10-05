const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector("form"));

  try {
    const result = await search(formData);
    console.log(result);
  } catch (error) {
    console.error("Error: ", error);
  }
});

async function search(formData) {
  try {
    const response = await fetch(
      `https://check-connection-v1.vercel.app/check`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      return data;
    } else {
      alert("An error occurred while sending the request.");
      return data;
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}
