const apiURL = "https://www.dnd5eapi.co/api";
const classMenu = $('.dropdown-menu');

async function getClasses() {
    const response = await $.get(`${apiURL}/classes`, data => {
        return data.results;
    })
    return response;
}

const classes = getClasses();
