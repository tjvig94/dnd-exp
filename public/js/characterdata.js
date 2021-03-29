$(document).ready(function(){

    const generateBtn = $('.generate');

    generateBtn.on('click', (event) => {
        event.preventDefault();

        let userData = {
            charName: $('.char_name').val(),
            charClass: $('.char_class').val(),
            charRace: $('.char_race').val()
        }

        if (!userData.charName || userData.charClass == "Class" || userData.charRace == "Race") {
            console.log("All fields must be entered");
        } else {
            $.post('/api/characterGenerator', userData).then(response => {
                console.log(response);
            })
        }        
    });
});
