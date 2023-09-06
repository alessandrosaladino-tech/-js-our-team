/*


Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede

Wayne Barnett
Founder & CEO	
wayne-barnett-founder-ceo.jpg

Angela Caroll	
Chief Editor	
angela-caroll-chief-editor.jpg

Walter Gordon
Office Manager
walter-gordon-office-manager.jpg

Angela Lopez
Social Media Manager	
angela-lopez-social-media-manager.jpg

Scott Estrada	
Developer	
scott-estrada-developer.jpg

Barbara Ramos	
Graphic Designer	
barbara-ramos-graphic-designer.jpg







*/

// Creo l'array di oggetti con i componenti del team

const team = [

    {
        name: "Wayne Barnett",
        job: "Founder & CEO",
        imag: "./assets/img/wayne-barnett-founder-ceo.jpg",

    },
    {
        name: "Angela Carrol",
        job: "Chief Editor",
        imag: './assets/img/angela-caroll-chief-editor.jpg',
    },

    {
        name: "Walter Gordon",
        job: "Office Manager",
        imag: './assets/img/walter-gordon-office-manager.jpg',
    },

    {
        name: "Angela Lopez",
        job: "Social Media Manager",
        imag: './assets/img/angela-lopez-social-media-manager.jpg',
    },

    {
        name: "Scott Estrada",
        job: "Developer",
        imag: './assets/img/scott-estrada-developer.jpg',
    },

    {
        name: "Barbara Ramos",
        job: "Graphic Designer",
        imag: './assets/img/barbara-ramos-graphic-designer.jpg',
    },




]

//Stampo su console le informazioni del membro del team per ognuno di essi
for (let i = 0; i < team.length; i++) {
    const teamComponent = team[i];

    for (const key in teamComponent) {
        console.log(` ${key} : ${teamComponent[key]}`);
    }
}


//Stampo in pagina le informazioni

const DOMEl = document.querySelector(".team_list");

for (let i = 0; i < team.length; i++) {
    const teamComponent = team[i]
    const markup =
        `
        <div class="col-4">
            <div class="card">
                <img src="${teamComponent.imag}" alt="">
                <div class="card-body">
                    <h3>${teamComponent.name}</h3>
                    <p>${teamComponent.job}</p>
                </div>
            </div>
        </div>
    `
    DOMEl.insertAdjacentHTML("beforeend", markup)

}