const load=()=>{
    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    .then(data=>display(data))
}
const display=detail=>{
  
 const container=document.getElementById('country')
 const countryHtml=detail.map(info =>getCountry(info))
 
 container.innerHTML=countryHtml.join(' ')
 
}
const getCountry = (info) =>{
    return`
    
    <div class="style"><h2>name:${info.name}<h2>
        <img src="${info.flags.png}"</div>
    
    `
}
load()