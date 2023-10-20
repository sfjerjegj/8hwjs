document
  .getElementById("student-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Студент добавлен:", data);
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
      });
  });
