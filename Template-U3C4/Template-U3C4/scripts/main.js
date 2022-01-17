async function apiCall(url) {


    //add api call logic here


    try{
        let res= await fetch(url)
        let data = await res.json()
            return data
        
    }
    catch(err){
        console.log("erroe:",err)
    }


}


function appendArticles(articles, main) {

    //add append logic here

    articles.map((el)=>{
         let{title,image}=el

         let div=document.createElement('div')
          div.setAttribute('class',"news")

        //  div.setAttribute('class',)
        let Title=document.createElement("h3")
        Title.innerHTML=title;
        let Img=document.createElement('img')
        Img.src=image;
        
    //     let publish=document.createElement("h5")
    //    publish.innerHTML=publishedAt;

       div.append(Img,Title)

       main.append(div)

       div.addEventListener("click",function(){
        getitem(el)
       })
      


    });

    }


    function getitem(el){
        localStorage.setitem("articles",JSON.stringify(el))

        window.location.href="news.html"
    }
    


    function appendnews(article,main,heading,img,detail){


        main.innerHTML=null;

        let {title,description,image}=article

        let head= document.createElement("h1")
        head.innerHTML=title;
        heading.append(head)

        img.src=image;
        let descrip=document.createElement("h1")
        descrip.innerHTML=description
        detail.append(descrip)
    }
    




export { apiCall, appendArticles }