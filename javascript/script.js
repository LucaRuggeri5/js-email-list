

// generatore email API
//  https://flynn.boolean.careers/exercises/api/random/mail

const numbersList = document.getElementById("lista-email");
const genera = document.getElementById("genera");

const endPointApi = `https://flynn.boolean.careers/exercises/api/random/mail`;

genera.addEventListener("click", emailCasuali);

function emailCasuali() {
    numbersList.innerHTML = "";
    for (let index = 0; index < 10; index++) {
        axios.get(endPointApi)
            .then(rispApi => {
                const result = rispApi.data.response;
                console.log(result);

                // svuoto il li e poi inserisco l'output
                numbersList.innerHTML = "";
                numbersList.innerHTML = result;

                // faccio sì che mi si crei 10 volte nel li
                const li = document.createElement("li");
                li.textContent = result;
                numbersList.appendChild(li);

            })

    }
};