const form=document.querySelector('.add-form');
const list=document.querySelector('.todos');
const searchInput=document.querySelector('.search input');


searchInput.addEventListener('keyup',function(e){
    const term=searchInput.value.trim().toLowerCase();
    filterCreate(term);
});

const filterCreate=(term)=>{
    Array.from(list.children).filter((todos)=>{
        return !todos.textContent.toLowerCase().includes(term);
    }).forEach((todos)=>{
    todos.classList.add('filtered');
    });

    Array.from(list.children).filter((todos)=>{
        return todos.textContent.toLowerCase().includes(term);
    }).forEach((todos)=>{
    todos.classList.remove('filtered');
    });
}

function templateCreate(todos){
    let html=`
    <li class="list-group-item d-flex justify-content-between align-items-center" >
                   <span >${todos}</span>
                   <i class="fa-solid fa-trash-can delete"></i>
    </li>
    `;
    list.innerHTML+=html;
}

form.addEventListener('submit',e=>{
    e.preventDefault();


    const todos=form.add.value.trim().toLowerCase();
    //console.log(todo);
   

    if(todos.length>0){
       templateCreate(todos);
       form.reset();
    }
});

list.addEventListener('click',e=>{
   if(e.target.classList.contains('delete')){
       e.target.parentElement.remove();
   }
});