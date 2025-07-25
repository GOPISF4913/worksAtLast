var form =document.getElementById("myForm");
console.log(form);
let category = document.getElementById("category");
console.log(category);
let book = document.getElementById("book");
console.log(book);
let authorEmail = document.getElementById("author-email");
console.log(authorEmail);
let authorName = document.getElementById("author-name");
console.log(authorName);
let published = document.getElementById("published");
console.log(published);
let price = document.getElementById("price");
console.log(price);

let categoryValue;
categoryValue =validateCategory();
let bookValue =book.Value??"";
let authorEmailValue =authorEmail.Value??"";
let authorNameValue =authorName.Value??"";
let publishedValue =published.Value??"";
let priceValue =price.Value??"";


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    globalValidation();
})

category.addEventListener("blur",(e)=>{
    console.log("category clicked");
    validateCategory();
})
book.addEventListener("blur",(e)=>{
    console.log("book clicked");
    validateBook();
})
authorEmail.addEventListener("blur",(e)=>{
   validateEmail();
})
authorName.addEventListener("blur",(e)=>{
    validateAuthorName();
})
published.addEventListener("blur",(e)=>{
    console.log("published clicked");
    validatePublish()
})
price.addEventListener("blur",(e)=>{
    console.log("price clicked");
    validatePrice();
})


function globalValidation(){
    let isValidBook =  validateBook()
    let isValidEmail =validateEmail();
    let isValidAuthorName = validateAuthorName() 
    let isValidPublish =validatePublish()
    let isValidPrice = validatePrice()
    if(validateCategory() && isValidBook && isValidEmail && isValidAuthorName && isValidPublish && isValidPrice){
        return true
    }
    return false

}
function validateCategory(){
     let elementOptions =category.options;
     let selectedIndexValue = elementOptions.selectedIndex;
     let elementValue = elementOptions[selectedIndexValue].value??"";
     console.log(elementOptions)
     console.log(selectedIndexValue)
     console.log(elementValue)
     if(elementValue !=""){
        setSuccess(category);
        categoryValue=elementValue;
        return true;
     }
     else{
        setError(category,"Select Any one value");
        return false;
     }
}
function validateBook(){
   
     let elementValue = book.value??"";
     let regexName = /^[a-zA-Z ]+$/;
     console.log(elementValue)
     if(elementValue.trim() ==""){
        setError(book,"Please Enter the book value");
        return false;
     }
     else if ( ! regexName.test(elementValue)) {
        setError(book,"Numeric Values are not allowed");
        return false;
        
        
     }
     else if (elementValue.length> 50){
        setError(book,"Book Name Length Should not Exceeds 50");
        return false;
        
     }
     else{
        setSuccess(book);
        bookValue=elementValue
        return true
     }
}

let wrappers = document.getElementsByClassName("error-validator");
let messagers = document.getElementsByClassName("message");

let categorymessage = document.getElementById("catetory-messagers");
let bookheader = document.getElementById("book-header-messagers");
let bookmessagers = document.getElementById("book-messagers");
let  emailmessager = document.getElementById("email-messagers");
let namemessagers = document.getElementById("name-messagers");
let publishedmessagers = document.getElementById("published-messagers");
let pricemessagers = document.getElementById("price-messagers");


function showDetails(){
   let result= globalValidation();
   if(result){
    console.log(wrappers)
    Array.from(wrappers).forEach(element => {
        element.style.display = "none"; 
        
    });
    bookheader.textContent =`${categoryValue} Book Details`
    categorymessage.textContent =categoryValue;
    pricemessagers.textContent=priceValue;
    emailmessager.textContent=authorEmailValue;
    bookmessagers.textContent=bookValue;
    namemessagers.textContent =authorNameValue;
    publishedmessagers.textContent=publishedValue;

    Array.from(messagers).forEach(element => {
        element.style.display = "block"; 
        
    });
   }
   
   else{
    alert("Invalid")
   }
}


function validateEmail(){
    let elementValue =authorEmail.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(elementValue)) {
        authorEmailValue = elementValue
        setSuccess(authorEmail)
        return true
    }
    else {
        setError(authorEmail, "Enter Valid EmailID")
        return false
    }
}
function validateAuthorName(){
    let elementValue =authorName.value;
    const authorNameRegex = /^[a-zA-Z ]+$/;

    if(elementValue.trim() ==""){
        setError(authorName,"Please Enter the Author Name");
        return false;
     }
     else if ( ! authorNameRegex .test(elementValue)) {
        setError(authorName,"Numeric Values are not allowed and special Characters are not allowed");
        return false;
        
        
     }
     else if (elementValue.length> 50){
        setError(authorName,"Author Name Length Should not Exceeds 50");
        return false;
        
     }
    
    else {
        setSuccess(authorName)
        authorNameValue=elementValue;
        return true;
    }
}
function validatePublish(){
    let elementValue =published.value;
    const publishregex = /[0-9]+$/;

    if(elementValue.trim() ==""){
        setError(published,"Please Enter the Published year");
        return false;
     }
     else if ( ! publishregex.test(elementValue)) {
        setError(published,"Please Enter Valid Published year");
        return false;
        
        
     }
     
     else if (parseInt(published.value)<0 || parseInt(published.value) >2025 ){
        setError(published,"Please Enter Valid Published year");
        return false;
        
     }
    
    else {
        setSuccess(published)
        publishedValue=elementValue;
        return true
    }
}
function validatePrice(){
    let elementValue =price.value;
    const publishregex = /[0-9]+$/;

    if(elementValue.trim() ==""){
        setError(price,"Please Enter the Price");
        return false;
     }
     else if ( ! publishregex.test(elementValue)) {
        setError(price,"Please Enter Valid Price");
        return false;
        
        
     }
    
    else {
        setSuccess(price)
        priceValue=elementValue;
        return true
    }
}

function setSuccess(element){
    const inputGroup = element.parentNode;
    const errorElement = inputGroup.querySelector("#errorMessage");
    errorElement.textContent = '';
    element.classList.remove('error');
    element.classList.add('success');
}

function setError(element,message){
    const inputGroup = element.parentNode;
    const errorElement = inputGroup.querySelector("#errorMessage");
    errorElement.textContent = message;
    element.classList.add('error');
    element.classList.remove('success');
}