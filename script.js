const addbtn= document.querySelector("#addbtn")
const main= document.querySelector(".main")

addbtn.addEventListener("click", function(){
    addNote()
})

const addNote=()=>{
    const note= document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
    <div class="header">
        <ion-icon name="save-outline"></ion-icon>
        <!-- <ion-icon name="save"></ion-icon> -->
        <ion-icon name="trash-outline"></ion-icon>
    </div>
    <textarea></textarea>
    `;
    
    main.appendChild(note);
}