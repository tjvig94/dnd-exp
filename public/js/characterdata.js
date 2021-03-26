$(document).ready(function(){

    const generateBtn = $('.generate');
    const apiURL = "https://www.dnd5eapi.co/api";

    // const getClass = async () => {
    //     let charClass = $('.char_class').val().toLowerCase();
    //     let response = await $.get(`${apiURL}/classes/${charClass}`);
    //     let data = await response;
    //     return data;
    // }

    // const getRace = async () => {
    //     let charRace = $('.char_race').val().toLowerCase();
    //     let response = await $.get(`${apiURL}/races/${charRace}`);
    //     let data = await response;
    //     return data;
    // }

    // const requestHandler = async () => {
    //     let classData = await getClass();
    //     let raceData = await getRace();
    //     return { classData, raceData };
    // }

    generateBtn.on('click', (event) => {
        event.preventDefault();
        // let data = requestHandler();

        //fetch(<Backend endpoit>)
        //send the user choice
        //wait response

        let userData = {
            charName: $('.char_name').val(),
            charClass: $('.char_class').val().toLowerCase(),
            charRace: $('.char_race').val().toLowerCase(),
        }

        $.post('/api/characterGenerator', userData)
    });
});
