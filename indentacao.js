




function IdentacaoJson(minha_serie) {
  
//if(document.getElementById('fileInput').files[0] ==undefined) return alert("insirar um arquivo json")

 


let serie_ = ""
let serie_parte1 = "";
let serie_parte2 = `
]
 }
]
},
`

let serie_parte3 = `
]
 }
]
}`

var novo =0
var capitulo = "";
while (novo < minha_serie.series.length) {


for (let x = 0; x < minha_serie.series[novo].seasons[0].episodes.length; x++) {
 
 if( x  ==   (minha_serie.series[novo].seasons[0].episodes.length -1) ){
let titulo = minha_serie.series[novo].title
let meuId = minha_serie.series[novo].id
  

serie_parte1=`
{
"id": "${meuId}",
"title": "${titulo}", 
"releaseDate": "2020-03-15T02:01:00+02:00",
"shortDescription": "Desde a mor de Tanjirou ha remota, a família Kamado pode desfrutar de uma vida relativamente tranquila e feliz. Um dia, Tanjirou decide descer à aldeia local para ganhar algum dinheiro vendendo carvão.",
"thumbnail":  "https://cdn.glitch.global/9a97079b-950e-4516-9de5-db3952bcb3d4/icon_serie.jpg?v=1710509333522", 
"genres": [
"educational"
],
"tags": [
"RSG"
],
"seasons": [
{
"title": "Season 1",
"episodes": [
` 
 
if((minha_serie.series.length-1) == novo){
capitulo+= JSON.stringify(minha_serie.series[novo].seasons[0].episodes[x])
serie_+= serie_parte1+capitulo+serie_parte3
capitulo = "";

}else{
capitulo+= JSON.stringify(minha_serie.series[novo].seasons[0].episodes[x])
serie_+= serie_parte1+capitulo+serie_parte2
capitulo = "";
}


}else{
capitulo+= JSON.stringify(minha_serie.series[novo].seasons[0].episodes[x]) +", \n"
 

}






}





if(novo == ( minha_serie.series.length - 1)){
 
let json1 = `{
  "providerName": "AnimeFire",
  "language": "pt-BR",
  "lastUpdated": "2020-03-15T02:01:00+02:00",
  "series": [
 `;


let json2 = `
], \n
`;



let jsonFim =`}`
let filmes =  "\"Filmes\":"+ JSON.stringify(minha_serie.Filmes) 
let tv =  "\"TV\":"+ JSON.stringify(minha_serie.TV)
let completo = json1+serie_+   json2+ filmes + ",\n"+ tv+ "\n" + jsonFim









return completo


}

novo ++
}}





  
  
  
  
  
   