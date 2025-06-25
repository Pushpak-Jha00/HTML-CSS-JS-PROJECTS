const btnElement = document.getElementById("calculate");
const resultElement = document.getElementById("result");


  function calculateAge() {
    const birthDate = document.getElementById("birthday").value;
    // console.log(birthDate);

    if(birthDate === "") {
      resultElement.innerHTML = "Please enter a valid date.";
      alert("Please enter a valid date.");
      return;
    } else {
     getAge(birthDate);
    
    
    }
     
  }

  function getAge(birthDate) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthDate);
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthdayDate.getMonth();
    const dayDifference = currentDate.getDate() - birthdayDate.getDate();
    // console.log(age,monthDifference, dayDifference);

    if(currentDate < birthdayDate ) {
      resultElement.innerHTML = "Please enter a valid date.";
      alert("Please enter a valid date.");
      return;
    }
    resultElement.innerHTML = `You are ${age} years ${monthDifference} month and ${dayDifference} days old.`;
    
    
  }

btnElement.addEventListener("click", function () {
  calculateAge();   
})