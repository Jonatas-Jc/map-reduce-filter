const list = document.querySelector('ul')






function showAll(item) {
    let newList = ''

    item.forEach(product => {

        newList +=
            `
        <li>
        <img src="${product.src}" alt="x-bacon"> 
        <p>${product.name}</p><br>
        <p>R$ ${product.price}</p>
    </li>
        `

        list.innerHTML = newList

    });
}




function mapAll(){
   
   
    const newValue = menuOptions.map(product => {

            name:product.name,
            price: product.price * 0.9,
            vegan: product.vegan,
            src: product.src
            
        })

    }


    console.log(newValue)    
