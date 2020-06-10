const populateUFs = () => {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      states.map((state) => {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      });
    });
};

populateUFs();

const getCities = (event) => {
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");

  const ufValue = event.target.value;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  citySelect.innerHTML += `<option value>Selcione uma Cidade</option>`;
  citySelect.disabled = true;

  const indexSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexSelectedState].text;
  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      cities.map((city) => {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
      });
      citySelect.disabled = false;
    });
};

document.querySelector("select[name=uf]").addEventListener("change", getCities);

const itemsToColected = document.querySelectorAll(".items-grid li");

const colecteditems = document.querySelector("input[name=items]");
let selectItems = [];

const handleSelectedItem = (event) => {
  const itemsLi = event.target;
  //add or remove a class in js
  itemsLi.classList.toggle("selected");

  const itemid = itemsLi.dataset.id;

  const alreadySelected = selectItems.findIndex((item) => item == itemid);

  if (alreadySelected != -1) {
    const filteredItems = selectItems.filter((item) => item != itemid);
    selectItems = filteredItems;
  } else {
    selectItems.push(itemid);
  }
  console.log(selectItems);

  colecteditems.value = selectItems;
};

for (item of itemsToColected) {
  item.addEventListener("click", handleSelectedItem);
}
