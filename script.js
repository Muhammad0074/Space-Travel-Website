document.getElementById('reg-form').addEventListener('submit' , function(event){
    // form will not refresh after submittion
    event.preventDefault();
    // collect form data
    const name = document.getElementById('name').value;
    const email = document.querySelector('input[name="email"]').value;
    const country = document.querySelector('select').value;
    const experienceLevel = document.querySelector('input[name="Experience lvl"]:checked')?.value;
    const motivation = document.getElementById('motivational-q').value;
    
    // create array to store
    const data = [
        ["name","email","country","experience Level","motivation"],
        [name,email,country,experienceLevel,motivation]
    ];

    // debug    
    console.log(name, email, country, experienceLevel, motivation, consent);

    // convert data into Excel sheet
    const ws = XLSX.utils.aoa_to_sheet(data);

    // create Excel file
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Registration");
    
    //download file 
    XLSX.writeFile(wb, "Space_Trip_Registration.xlsx");
    
    //successful page after submittion
    window.location.href = "confirm.html";
});