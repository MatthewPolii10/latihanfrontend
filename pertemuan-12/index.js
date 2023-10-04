export default function ambilDataUser() {
  // Lakukan fetch ke API
  fetch("https://reqres.in/api/users")
    .then((response) => {
      // Return response dalam bentuk JSON
      return response.json();
    })
    .then((data) => {
      // Cetak data bagian 'data' ke konsol
      console.log(data.data);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
      });
  }