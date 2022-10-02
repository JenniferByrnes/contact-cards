const form = document.getElementById("formToggle");
console.log(form);


// Export a function we will use to toggle the form off and on
  export const toggleForm = () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

export const clearForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}
