

// generatore email API
//  https://flynn.boolean.careers/exercises/api/random/mail

const genera = document.getElementById("genera");


const endPointApi = `https://flynn.boolean.careers/exercises/api/random/mail`;

genera.addEventListener("click", emails);

function emails() {
    axios.get(endPointApi)
        .then(rispApi => {
            const result = rispApi.data.response;
            console.log(result);
        })

}