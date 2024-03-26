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
   
   
    const newValue = menuOptions.map(product => ({

            ...product,  //spread operator - modifica apenas as alterações feitas
            price: product.price * 0.9,
            
        }))

            showAll(newValue)
    }


    function sumAll() {
        const totalSum = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
        console.log(totalSum)

        list.innerHTML = `
        <li>
            <p>O valor Total Dos Itens é R$ ${totalSum}</p>
         </li>
        `

    }


    function filterAll() {

            const filterAllItems = menuOptions.filter(item => item.vegan)

            showAll(filterAllItems)
     }