document.addEventListener('DOMContentLoaded',()=>{

    const text="Construire le future".toUpperCase();
    const textContaint=document.getElementById("main-header");

    //this function is used to make text typing animation
    
    let i=0;
    
    (
        
        function typeText(){
            if(i<text.length){
                textContaint.innerHTML+=text[i];
                i++;
                setTimeout(typeText,100);
            }
        }
    )();

    setTimeout(function(){
        textContaint.classList.add('effects');
    },2000);


    //this one here is string template to make some on fly loader when clicking on selected button bellow
    const menuLoader=document.querySelectorAll('.menu-loader');
    const ALL=`
        <a target="_blank" href="../assets/images/construction/13.jpg" class=" hover:scale-105 transition-all rounded row-span-2 "><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/13.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/17.jpg" class=" hover:scale-105 transition-all  rounded   "><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/17.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/20.jpg" class=" hover:scale-105 transition-all  rounded  row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/20.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/4.jpg" class=" hover:scale-105 transition-all  rounded row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/4.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/4.jpg" class=" hover:scale-105 transition-all  rounded" ><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/4.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/5.jpg" class=" hover:scale-105 transition-all  rounded  row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/13.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/21.jpg" class=" hover:scale-105 transition-all  rounded   row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/13.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/3.jpg" class=" hover:scale-105 transition-all  rounded row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/3.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/2.jpg" class=" hover:scale-105 transition-all  rounded bg-center"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/2.jpg" alt=""></a>
    `;
    const TEAM=`
        <a target="_blank" href="../assets/images/construction/13.jpg" class=" hover:scale-105 transition-all rounded row-span-2 "><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/team/13.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/team/17.jpg" class=" hover:scale-105 transition-all  rounded   "><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/team/17.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/team/20.jpg" class=" hover:scale-105 transition-all  rounded  row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/team/20.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/team/1.jpg" class=" hover:scale-105 transition-all  rounded row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/team/1.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/team/4.jpg" class=" hover:scale-105 transition-all  rounded" ><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/team/4.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/team/5.jpg" class=" hover:scale-105 transition-all  rounded  row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/team/5.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/team/19.jpg" class=" hover:scale-105 transition-all  rounded   row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/team/19.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/team/3.jpg" class=" hover:scale-105 transition-all  rounded row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/team/3.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/team/2.jpg" class=" hover:scale-105 transition-all  rounded bg-center"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/team/2.jpg" alt=""></a>
    `;
    const TROISD=`
       <a target="_blank" href="../assets/images/construction/1.jpg" class=" hover:scale-105 transition-all rounded row-span-2 "><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/1.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/3.jpg" class=" hover:scale-105 transition-all  rounded   "><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/3.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/2.jpg" class=" hover:scale-105 transition-all  rounded  row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/2.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/1.jpg" class=" hover:scale-105 transition-all  rounded row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/1.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/4.jpg" class=" hover:scale-105 transition-all  rounded" ><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/4.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/3.jpg" class=" hover:scale-105 transition-all  rounded  row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/3.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/4.jpg" class=" hover:scale-105 transition-all  rounded   row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/4.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/3.jpg" class=" hover:scale-105 transition-all  rounded row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/3.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/3d/2.jpg" class=" hover:scale-105 transition-all  rounded bg-center"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/3d/2.jpg" alt=""></a>
    `;

    const CONSTRUCTION=`
        <a target="_blank" href="../assets/images/construction/17.jpg" class=" hover:scale-105 transition-all rounded row-span-2 "><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/17.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/17.jpg" class=" hover:scale-105 transition-all  rounded   "><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/20.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/20.jpg" class=" hover:scale-105 transition-all  rounded  row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/20.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/4.jpg" class=" hover:scale-105 transition-all  rounded row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/4.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/4.jpg" class=" hover:scale-105 transition-all  rounded" ><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/4.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/16.jpg" class=" hover:scale-105 transition-all  rounded  row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/16.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/21.jpg" class=" hover:scale-105 transition-all  rounded   row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/21.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/3.jpg" class=" hover:scale-105 transition-all  rounded row-span-2"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/3.jpg" alt=""></a>
        <a target="_blank" href="../assets/images/construction/2.jpg" class=" hover:scale-105 transition-all  rounded bg-center"><img class="rounded-2xl w-full h-full object-cover" src="../assets/images/construction/2.jpg" alt=""></a>

    `;

    //the table above is tickly coupled with the items of menu-loader-container
    let pageTable=[ALL,TROISD,TEAM,CONSTRUCTION];

    menuLoader.forEach((item,index)=>{
        item.addEventListener('click',(e)=>{
            console.log('click...');
       
           
                let div=document.createElement('div');
                div.innerHTML=pageTable[index];
                let containtLoader=document.getElementById('menu-loader-container');

                for(let i=0;i<pageTable.length;i++){
                    if(i===index){
                        menuLoader[i].classList.add('underliner');
                    
                    }
                    else{
                        menuLoader[i].classList.remove('underliner');
                    }
                }
                containtLoader.innerHTML="";
                containtLoader.innerHTML=div.innerHTML;
           
        });
    });

    //open close menu
    (
        ()=>{
            console.log('...');
            let menu=document.getElementById('id-menu');
            const BTN=document.getElementById('show-menu-btn');
            BTN.addEventListener('click',()=>{
                menu.classList.toggle('hidden');
            });

            document.addEventListener('click',(e)=>{
                if(!BTN.contains(e.target)){
                    menu.classList.add('hidden');
                }
            })
        }
    )();
    

    //actions based on scrolling
    (
       ()=>{
        const entInfo=document.getElementById('ent-info');
        const MENU_BAR=document.querySelectorAll('[data-menu="items"]');
        console.log(MENU_BAR.length);
            window.addEventListener('scroll',()=>{
                if(window.scrollY>1000){
                    MENU_BAR.forEach(item=>{
                        item.classList.add('hidden');
                        
                    });
                    entInfo.classList.remove('hidden');
                    
                }else{
                    MENU_BAR.forEach(item=>{
                        item.classList.remove('hidden');
                        
                    });
                    entInfo.classList.add('hidden');
                }
            });
       }
    )();
});