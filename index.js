const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const host = document.querySelector("#host").value;
  const user = document.querySelector("#user").value;
  const password = document.querySelector("#password").value;
  const port = document.querySelector("#port").value;
  const database = document.querySelector("#database").value;

  const formData = new FormData();
  formData.append("host", host);
  formData.append("user", user);
  formData.append("password", password);
  formData.append("port", port);
  formData.append("database", database);

  const result = await search("check", formData);
  console.log(result);
});

async function search(url, formData) {
  try {
    const response = await fetch(
      `https://check-connection-v1.vercel.app/${url}/`,
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
      alert("Đã xảy ra lỗi khi gửi yêu cầu.");
    }
  } catch (error) {
    console.error("Lỗi: ", error);
  }
}
