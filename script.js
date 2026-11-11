const themes=[
  {name:"light",
  message:"Hello sunshine — Light theme is on!",
  color:"white"
  },
  {
    name:"dark",
    message:"The night is yours — Dark theme is on!",
    color:"black"
  },
  {
      name:"blue",
      message:"Blue skies and high tides — Ocean theme is on!",
      color:"lightblue"
  },
  {
      name:"frost",
      message:"The frost has settled - Nord theme is on!",
      color:"grey"
  }
];

const btn=document.getElementById("theme-switcher-button");
const themeDrop=document.getElementById("theme-dropdown");
const themeSt=document.getElementById("theme-status");
const themeOpt = document.querySelectorAll("#theme-dropdown li");

let currentTheme="";

btn.addEventListener("click",()=>{
  if(btn.getAttribute("aria-expanded")==="true"){
          themeDrop.hidden=true;
          btn.setAttribute("aria-expanded","false");

  }else{
    themeDrop.hidden=false;
    btn.setAttribute("aria-expanded","true");
  }
});

themeOpt.forEach((opt)=>{
  opt.addEventListener("click",()=>{
    const selectTheme = opt.textContent.trim();

    if(currentTheme===selectTheme){
        themeDrop.hidden=true;
        btn.setAttribute("aria-expanded","false");
        return;
    }

    if (currentTheme) {
      document.body.classList.remove(`theme-${currentTheme.toLowerCase()}`);
    }

    document.body.classList.add(`theme-${selectTheme.toLowerCase()}`);


    themes.forEach((t)=>{
        if(t.name===selectTheme){
          themeSt.textContent=t.message;
          document.body.style.backgroundColor=t.color;
        }
    });
    currentTheme=selectTheme;

    themeDrop.hidden=true;
    btn.setAttribute("aria-expanded","false");
  });
});
