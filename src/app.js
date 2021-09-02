let count = 0;


const value = document.querySelector("#value");

const buttons = document.querySelectorAll(".button");


buttons.forEach(function(button){

	button.addEventListener("click", function(event){
			const styles = event.currentTarget.classList;

			if (styles.contains("decrease")){
				count--;
			}else if (styles.contains("increase")){
				count++;
			}else{
				count = 0;
			}

			 if (count > 0) {
		      value.style.color = "green";
		    }
		    if (count < 0) {
		      value.style.color = "orangered";
		    }
		    if (count === 0) {
		      value.style.color = "#222";
		    }
		    value.textContent = count;
		  });
		});