document.getElementById("search").addEventListener("click", () => {
  
  let srchLoc = document.getElementById("city").value;
  let loc = document.getElementById("location");
  let tempIcon = document.getElementById("temp-icon");
  let tempValue = document.getElementById("temp-value");
  let climate = document.getElementById("climate");

  const api = `https://api.weatherapi.com/v1/current.json?key=126a09e53c244898ad1182436210112&q=${srchLoc}`;

  fetch(api)
    .then((response) => {
        //console.log(response)
        //console.log(response.json())
      return response.json();
    })

    .then((data) => {
      console.log(data);
      const { name } = data.location; //destructuring of the name
      const { temp_c } = data.current;
      const { text, icon } = data.current.condition;

      loc.textContent = name;
      tempValue.textContent = temp_c;
      climate.textContent = text;
      tempIcon.src = icon;
    });
});