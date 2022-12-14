//Функция получения данных и занесения в таблицу 
async function GetAllFilms() {
	const response = await fetch("/Films", {
		method: "GET",
		headers: { "Accept": "application/json"}
	});

	if (response.ok === true) {
		const films = await response.json();
		let rows = document.querySelector("tbody");
		films.forEach(film => {
			rows.append(row(film));
		});
	}
}

//Функция для создания строки таблицы
function row() {
	const tr_row = document.createElement("tr").setAttribute("row-id", film.id);
	tr_row.append(document.createElement("td").append(film.Id));
	tr_row.append(document.createElement("td").append(film.Name))

	tr_row.append(document.createElement("td").append(film.GenreId));
	tr_row.append(document.createElement("td").append(film.Duration));
	tr_row.append(document.createElement("td").append(film.GenreId))
	tr_row.append(document.createElement("td").append(film.FilmProductionId));
	tr_row.append(document.createElement("td").append(film.CountryProductionId));
	tr_row.append(document.createElement("td").append(film.Description))

	const linksTd = document.createElement("td");

	const linkForEdit = document.createElement("a").setAttribute("film-id", film.Id).append("Изменить");
	linkForEdit.addEventListener("click", ClickOnEditLink(event));
	linksTd.append(linkForEdit);

	const linkForDelete = document.createElement("a").setAttribute("film-id", film.Id).append("Удалить");
	linkForDelete.addEventListener("click", ClickOnDeleteLink(event));
	linksTd.append(linkForDelete);

	tr_row.append(linksTd);
	return tr_row;
}

//Событие клика на ссылку редактирвоания
function ClickOnEditLink(event) {
	event.preventDefault();
	GetById(film.id);
}

//Событие клика на сслыку удаления записи
function ClickOnDeleteLink(event) {
	event.preventDefault();
	Delete(film.id);
}