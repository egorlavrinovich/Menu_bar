const Hobby = document.querySelector('.hobb'),
      Hobby_Container = document.querySelector('.hobbies_container'),
      Projects = document.querySelector('.Proj'),
      Projects_Container = document.querySelector('.Projects_container')
 
Hobby.addEventListener('click',()=>{
    if (!Projects_Container.classList.contains('active')){
    Hobby_Container.classList.remove('active')
    Projects_Container.classList.toggle('active')
}
})
Projects.addEventListener('click',()=>{
    if (!Hobby_Container.classList.contains('active')){
    Hobby_Container.classList.toggle('active')
    Projects_Container.classList.remove('active')
    }
})
