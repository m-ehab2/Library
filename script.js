let myLibrary = [];
const books=document.getElementById('catalogue');
let bookForm=document.getElementById('form');
bookForm.addEventListener('submit',(e)=>{
	e.preventDefault();
	let title=document.getElementsByName('title');
	let author=document.getElementsByName('author');
	let noP=document.getElementsByName('noP');
	let read=document.getElementsByName('read');
	
	let bookX=new Book(`${title[0].value}`,`${author[0].value}`,`${noP[0].value}`,read[0].checked);
	addBookToLibrary(bookX);
	printArray();
	closeForm();
});
function Book(title,author,noPage,read) {
	this.title=title;
	this.author=author;
	this.noPage=noPage;
	this.read=read;
}
function openForm(){
	document.getElementById('myForm').style.display = 'flex';
}
function closeForm() {
	document.getElementById('myForm').style.display = 'none';
}
function addBookToLibrary(Book) {
	myLibrary.push(Book);
}
function remove(n){
	console.log(myLibrary);
	console.log(`Removed ${n}`);
	myLibrary.splice(n,1);
	console.log(myLibrary);
	printArray();
}
function printArray(){
	while(books.firstChild){
		books.removeChild(books.lastChild);
	}
	let i=0;
	myLibrary.forEach(element => {
		const card=document.createElement('div');
		card.className='card';
		const title=document.createElement('h2');
		title.innerHTML=`${element.title}`;
		const author=document.createElement('h3');
		author.innerHTML=`${element.author}`;
		const noP=document.createElement('p');
		noP.innerHTML=`${element.noPage} Pages`;
		const buttons=document.createElement('div');
		buttons.className='buttons';
		const btn1=document.createElement('button');
		if(element.read){
			btn1.innerHTML='Read';
		}
		else{
			btn1.innerHTML='Not Read';
		}
		const btn2=document.createElement('button');
		btn2.innerHTML='Remove';
		btn2.setAttribute('onclick',`remove(${i})`);
		buttons.appendChild(btn1);
		buttons.appendChild(btn2);
		card.appendChild(title);
		card.appendChild(author);
		card.appendChild(noP);
		card.appendChild(buttons);
		books.appendChild(card);
		i++;
	});
}