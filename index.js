const contents = document.querySelector(".contents")

let title = ""
let str = ""
for( let i = 2; i < 10; i++){
   title = `<li><h3>${i}</h3></li>`;
  for( let k = 1 ; k < 10 ; k++){
    str = `<li><p>${i} x ${k} = ${i*k}</p></li>`
    title+=str

  }
  title = `<li><div class="multiplication"><ul>${title}</ul></div></li>`;
  contents.innerHTML += title
}
