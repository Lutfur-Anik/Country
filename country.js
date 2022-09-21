const load=()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>display(data))
}
const display=country=>{
    const info=document.getElementById('county')
    for(countries of country){
        console.log(countries)
        
        const div=document.createElement('div');
        div.classList.add('style')
        div.innerHTML=`<div><h2>name:${countries.name}<h2>
        <img src="${countries.flags.png}"</div>`
        info.appendChild(div)
    }
}
load()