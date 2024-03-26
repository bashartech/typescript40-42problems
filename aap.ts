//  project 40

function make_album(names, albumTitles, tracks) {
    for (let i = 0; i < names.length; i++) {
        if (tracks !== undefined && tracks[i] !== undefined) {
            console.log(names[i] + ', ' + albumTitles[i] + ', ' + tracks[i]);
        } else {
            console.log(names[i] + ', ' + albumTitles[i]);
        }
    }
}

let names = ["Babar", "Kohli", "Amir"];
let dictionaries = ["Album1", "Album2", "Album3"];
let tracks = [12, 23, 34];

make_album(names, dictionaries, tracks);

 

    
    // project 41
    let magicians_name = ["Brook","Hooks"]
    function show_magician (magicians_name){
        for(let i = 0;i<magicians_name.length;i++)
        console.log(`${magicians_name[i]}`)
}show_magician(magicians_name)

// project 42

function make_great (magicians_name){
    for(let i = 0;i<magicians_name.length;i++)
    console.log(`The Great ${magicians_name[i]}`)
}make_great(magicians_name)



