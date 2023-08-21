
//  Kitchenware section  
let totalPrice = 0; 
//1 
function cardOneTotal(){
    // get input price 
    const getPrice = inputPrize('card-one-price'); 

    // set input price 
    setInnerText ('add-title1'); 

    // total  price
    totalPrice= parseFloat(totalPrice) + getPrice
    document.getElementById("total-price").innerText = totalPrice 

}


// 2
function cardTwoTotal(){

    const getPrice = inputPrize('card-two-price'); 
    setInnerText ('add-title2'); 
    totalPrice= parseFloat(totalPrice) + getPrice
    document.getElementById("total-price").innerText = totalPrice      
}

// 3
function cardThreeTotal(){

    const getPrice = inputPrize('card-three-price'); 
    setInnerText ('add-title3');
    totalPrice= parseFloat(totalPrice) + getPrice
    document.getElementById("total-price").innerText = totalPrice
    
}


// Sportswear  section  

//4
function cardFourTotal(){
    
    const getPrice = inputPrize('card-four-price'); 
    setInnerText ('add-title4');
    totalPrice= parseFloat(totalPrice) + getPrice
    document.getElementById("total-price").innerText = totalPrice

}

// 5
function cardFiveTotal(){

    const getPrice = inputPrize('card-five-price'); 
    setInnerText ('add-title5');
    totalPrice= parseFloat(totalPrice) + getPrice
    document.getElementById("total-price").innerText = totalPrice


}

// 6
function cardSixTotal(){
    
    const getPrice = inputPrize('card-six-price'); 
    setInnerText ('add-title6');
    totalPrice= parseFloat(totalPrice) + getPrice
    document.getElementById("total-price").innerText = totalPrice

}

// reuseable input price function 

function inputPrize(parameter){
    const getInput  = document.getElementById(parameter)
    const getPriceString = getInput.innerText
    const getPrice = parseFloat(getPriceString)
    return getPrice;
}



// set the inner text reuseable
function setInnerText (textId){
    const addTitle = document.getElementById(textId).innerText;
    const li = document.createElement('li')
    li.innerText = addTitle
    const selectedItemsContainer = document.getElementById("selected-items")
    selectedItemsContainer.appendChild(li)
}


// total and discount part 
let inTotal = 0

    const couponInput = document.getElementById('coupon-confirm');
    const applyButton = document.getElementById('apply-btn');

    couponInput.addEventListener('click', function() {          

        inTotal = inTotal + totalPrice;
        const getInTotal = document.getElementById("total")
        getInTotal.innerText = inTotal;

        
        

        if (couponInput.value.trim() === 'SELL200' && totalPrice > 200  ) {
            applyButton.disabled = false;

            let discountInput = 0.2; // 20% discount
            const totalDiscount = totalPrice * discountInput;
            const discountElement = document.getElementById('discount-price');
            discountElement.innerText = totalDiscount.toFixed(3);

            // in total value 
            const inTotal = totalPrice - totalDiscount;
            const totalElement = document.getElementById('total')
            totalElement.innerText = inTotal.toFixed(3);

        

        } else {
            applyButton.disabled = true;
        }

          // disabled make purchase button 
          if (inTotal>0){
            const getPurchase = document.getElementById("purchase-btn")
            getPurchase.removeAttribute("disabled")
    }
    });



// Clear all stored values from local storage

function resetValuesAndGoHome() {

    localStorage.clear();

    const totalPriceElement = document.getElementById('total-price');
    const discountElement = document.getElementById('discount-price');
    const totalElement = document.getElementById('total');

    const initialTotalPrice = 0;
    const initialDiscount = 0;
    const initialTotal = 0;

    totalPriceElement.innerText = initialTotalPrice.toFixed(2);
    discountElement.innerText = initialDiscount.toFixed(2);
    totalElement.innerText = initialTotal.toFixed(2);

}































