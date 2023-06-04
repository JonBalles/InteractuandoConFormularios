window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//

    let form = document.querySelector("form")
    let $submitError = document.getElementById("submitError")

    let entre60y360 =/^(?:[6-9]|[1-9][0-9]|[1-2][0-9]{2}|3[0-5][0-9]|360)$/ // valores entre 60 y 360
    let entre1y10 = /^(10|[0-9])$/; // valores entre 1 y 10

    let $titulo = document.getElementById("title")
    let $tituloError = document.getElementById("titleError")
    let $rating = document.getElementById("rating")
    let $ratingError = document.getElementById("ratingError")
    let $awards = document.getElementById("awards")
    let $awardsError = document.getElementById("awardsError")
    let $releaseDate = document.getElementById("releaseDate")
    let $releaseDateError = document.getElementById("releaseDateError")
    let $length = document.getElementById("length")
    let $lengthError = document.getElementById("lengthError")
    let $genre = document.getElementById("genre")
    let $genreError = document.getElementById("genreError")
    let $erroresUl = document.querySelector(".errores")


    $titulo.focus();

    //titulo
    $titulo.addEventListener("blur", () =>{
        if(!$titulo.value.trim()){
            $titulo.classList.add("is-invalid")
            $tituloError.innerText = "Titulo requerido";
            $tituloError.style.color = "red";
        }else{
            $titulo.classList.add("is-valid")
            $titulo.classList.remove("is-invalid")
            $tituloError.innerText = "";
        }
    })
    //rating
    $rating.addEventListener("blur", () =>{
       
        switch(true){
            case !$rating.value.trim():
            $rating.classList.add("is-invalid")
            $ratingError.innerText = "rating necesario";
            $ratingError.style.color = "red";
            break;

            case !entre1y10.test($rating.value):
            $rating.classList.add("is-invalid")
            $ratingError.innerText = "rango de valor entre 0 - 10";
            $ratingError.style.color = "red";
            break;

            default:
                $rating.classList.remove("is-invalid")
                $rating.classList.add("is-valid")
                $ratingError.innerText = ""
        }
    })
    //awards
    $awards.addEventListener("blur", () =>{
        switch(true){
            case !$awards.value.trim():
            $awards.classList.add("is-invalid")
            $awardsError.innerText = "awards necesario";
            $awardsError.style.color = "red";
            break;

            case !entre1y10.test($awards.value):
            $awards.classList.add("is-invalid")
            $awardsError.innerText = "rango de valor entre 0 - 10";
            $awardsError.style.color = "red";
            break;

            default:
                $awards.classList.remove("is-invalid")
                $awards.classList.add("is-valid")
                $awardsError.innerText = ""
        }

    })
    //releaseDate
    $releaseDate.addEventListener("blur", () =>{
        if(!$releaseDate.value.trim()){
            $releaseDate.classList.add("is-invalid")
            $releaseDateError.innerText = "releaseDate requerido";
            $releaseDateError.style.color = "red";
        }else{
            $releaseDate.classList.remove("is-invalid")
            $releaseDate.classList.add("is-valid")
            $releaseDateError.innerText = "";
        }
    })
    //length
    $length.addEventListener("blur", () =>{
        switch(true){
            case !$length.value.trim():
            $length.classList.add("is-invalid")
            $lengthError.innerText = "length necesario";
            $lengthError.style.color = "red";
            break;

            case !entre60y360.test($length.value):
            $length.classList.add("is-invalid")
            $lengthError.innerText = "rango de valor entre 0 - 10";
            $lengthError.style.color = "red";
            break;

            default:
                $lenght.classList.remove("is-invalid")
                $length.classList.add("is-valid")
                $lenghtError.innerText = ""
        }
    })
    //genre
    $genre.addEventListener("blur", () =>{
        console.log($genre.value)
        if($genre.value == ""){
            $genre.classList.add("is-invalid")
            $genreError.innerText = "genre requerido";
            $genreError.style.color = "red";
        }else{
            $genreError.innerText = "";
            $genre.classList.remove("is-invalid")
            $genre.classList.add("is-valid")
        }
    })


    //Gestion del submit
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
       let elementosConErrores = document.querySelectorAll(".is-invalid");
        let errores = elementosConErrores.length > 0;
        
        elementosConErrores.forEach(error => {
            $erroresUl.innerHTML += `<li>Se requiere: ${error.name}</li>`
            $erroresUl.style.listStyle = "none"
        })


        if(errores){
          
            $submitError.innerText = "Datos incompletos";
            $submitError.style.color = "red"
        }else{
            $submitError.innerText = "";
            $erroresUl.innerHTML ="";
            alert("La película se guardó satisfactoriamente")
            form.submit();
        }
    })

}