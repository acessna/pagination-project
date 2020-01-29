/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
Global variables that hold all the students and tell the number of students that should be on each page.
***/
let listOfStudents = document.querySelector('.student-list').children;

const itemsPerPage = 10;

/*** 
showPage function is used to tell the browser what students to show on the given page. 
***/
const showPage = (list, page) => {
   const lastStudent = page * 10;
   const firstStudent =  (page * 10)- 10;

   for(let i = 0; i < list.length; i ++){
      if (i < lastStudent && i >= firstStudent) {
         list[i].style.display = 'block';
      } else { 
         list[i].style.display = 'none';
      }
   }

};

showPage(listOfStudents, 1);

/*** 
The appendPageLinks function generates the correct amount of links based on the number of pages needed for the list. It also listens for clicks on the links to make them active or inactive.
***/
const appendPageLinks = (list) => {
   const numOfPages = list.length / itemsPerPage;
   const div = document.createElement('div');
   div.className = "pagination";
   const pageDiv = document.querySelector('.page'); 
   pageDiv.appendChild(div);
   div.innerHTML += '<ul class = "link-list"></ul>';
   ul = document.querySelector('.link-list');
   const a = document.getElementsByTagName('a');
   
   //Loop that generates page links
    for(let i = 0; i < numOfPages; i++){
       let pageNum = i+1;
      ul.innerHTML += "<li><a>"+ pageNum +"</a></li>";
      if(i === 0){
         a[i].className = 'active';
      }
   } 

   //Loop that listens for clicks on the page links, adds active class, and runs showPage function
   for(let i = 0; i < a.length; i++){
      let pageNum = i+1;
      
      a[i].addEventListener('click', () => {
      for(let i = 0; i < a.length; i++) {
         a[i].className= '';
      }
      a[i].className = 'active';
         showPage(listOfStudents, pageNum);
      });

   }
   
};

appendPageLinks(listOfStudents);




