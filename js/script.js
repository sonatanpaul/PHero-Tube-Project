const handleCategory = async () =>{
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();

   
    const tabContainer = document.getElementById("tab-container");
    const allData = data.data;
    allData.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="handleLoadNews('${category.category_id}')" class="btn">${category.category}</button>
        
        `
        tabContainer.appendChild(div);
    });
}


const handleLoadNews = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();

    const cardContainer = document.getElementById("card-conatainer")
    cardContainer.innerHTML = "";
    data.data?.forEach((news)=>{
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="card w-96 h-80  mb-5 mt-8 bg-base-100 shadow-xl">
            <figure><img  src=${news?.thumbnail} /></figure>
            
            <div class="flex justify-center items-center">
                <div>
                    <img class=" rounded-full w-12 mx-5" src=${news?.authors[0].profile_picture}>
                </div>
                <div class="card-body text-left">
                    <p class=" font-extrabold text-xl">${news.title}</p>
                    <h2 class="card-title ">
                    ${news?.authors[0].profile_name}
                    <img class=" w-5" src=${news?.authors[0].verified? true:"" }"./checklist_10629607.png" alt="">
                    </h2>
                    <p>${news?.others?.views}</p>
                  </div>
            </div>
          </div>
    
        
        `;
 
        cardContainer.appendChild(div);
    })
}

const noData = document.getElementById("no-data")





handleCategory();