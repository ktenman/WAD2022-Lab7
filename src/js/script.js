window.onload = function () {


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            for (const jsonElement of json) {
                let divElement = document.createElement("div");
                let title = document.createElement("h3");
                divElement.className = "post"
                title.innerHTML = jsonElement.title
                divElement.appendChild(title)
                document.body.appendChild(divElement)
            }

        })

}