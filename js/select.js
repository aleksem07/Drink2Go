const selectSingle=document.querySelector(".select__wrapper"),selectSingle_title=selectSingle.querySelector(".select__title"),selectSingle_labels=selectSingle.querySelectorAll(".select__label");selectSingle_title.addEventListener("click",(()=>{"active"===selectSingle.getAttribute("data-state")?selectSingle.setAttribute("data-state",""):selectSingle.setAttribute("data-state","active")}));for(let e=0;e<selectSingle_labels.length;e++)selectSingle_labels[e].addEventListener("click",(e=>{selectSingle_title.textContent=e.target.textContent,selectSingle.setAttribute("data-state","")}));