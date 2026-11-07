

const postcontainer=document.querySelector(".cards")
console.log(postcontainer)



const projects = [
  {
    id: 1,
    title: "Corporate Dashboard System",
    description: "Pellentesque habitant morbi tristique senectus et netus.",
    category: "Web design",
    isFeatured: false,
    date: "2024",
    tags: ["HTML", "CSS"],
    image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-2.webp"
  },
  {
    id: 2,
    title: "Smart Finance Application",
    description: "Maecenas tempus tellus eget condimentum rhoncus.",
    category: "Mobile App",
    isFeatured: true,
    date: "2024",
    tags: ["Flutter", "Dart"],
    image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-4.webp"
  },
  {
    id: 3,
    title: "Fashion Label Identity",
    description: "Donec quam felis ultricies nec pellentesque pretium.",
    category: "branding",
    isFeatured: false,
    date: "2023",
    tags: ["Photoshop", "Illustrator"],
    image: "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-6.webp"
  }
  
];



projects.forEach(project=>{
postcontainer.innerHTML+=`<div class="card   rounded-2xl group w-full h-auto border-2 border-gray-200 overflow-hidden hover:translate-y-[-5px] duration-200">
       <div class="image-card  relative  opacity-100   w-[100%] h-[270px]">
        <img src=${project.image} class="w-[100%] h-[100%] group-hover:scale-110 duration-500 overflow-hidden rounded-2xl ">
        <div class="layer-image flex items-center justify-center gap-2 absolute inset-0 bg-black/40 opacity-0 duration-300 group-hover:opacity-100 ">
            <div class="icons  flex items-center justify-center gap-2">
                <div class="eye bg-white text-blue-400 w-[50px]  h-[50px]  rounded-full flex items-center justify-center p-1">
                    <i class="fa-solid fa-eye"></i>
                </div>
                <div class="eye  bg-white text-blue-400 w-[50px]  h-[50px]  rounded-full flex items-center justify-center p-1">
                    <i class="fa-solid fa-eye"></i>
                </div>
            </div>
        </div>
        <span class="absolute top-1.5 left-1.5 text-sky-500 bg-white shadow-lg rounded-xl flex items-center justify-center px-3 py-3 mt-2 ml-1.5">${project.category}</span>
       </div>
       <div class="card-content w-[100%]  p-2 bg-white flex flex-col gap-1.5">
        <h3 class="text-xl font-medium text-black">${project.title}</h3>
        <p class="text-gray-400 text-sm mb-1.5 pb-[20px] border-gray-200 border-b ">${project.description}</p>



      
<div class="card-tags flex justify-between ">
    <div class="tags pl-1.5 flex gap-1.5">
       ${project.tags.map(tag=>` <span class="bg-blue-100 text-blue-700   flex items-center justify-center w-[150px] h-[50px] rounded-[30px] text-sm p-[4px]">${tag.toUpperCase()}</span>
    `).join("")}
    </div>
    <div class="year-tag">
        <span class="text-gray-600 text-sm">${project.date}</span>
    </div>
    
</div>       

 </div>
    </div>
</div>

`
})



