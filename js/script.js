/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
Global variables that hold all the students and tell the number of students that should be on each page.
***/
let listOfStudents = document.querySelector('.student-list').children;



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



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   const numOfItemsInList = list.length;
   console.log(numOfItemsInList);

};

appendPageLinks(listOfStudents);




// Remember to delete the comments that came with this file, and replace them with your own code comments.