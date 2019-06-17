
	var user = {
		correct: 0
	};
	var question1 = {
		question: "Đố biết anh yêu ai",
		A: "Em",
		B: "Thùy Dương",
		C: "Nguyễn Thùy Dương",
		ans: "c"
	};
	var question2 = {
		question: "The biggest desert in the world is?",
		A: "Great Australian",
		B: "Arabian",
		C: "Sahara",
		ans: "c"
	};
	var question3 = {
		question: "Which of these cities is not in Europe?",
		A: "Moscow",
		B: "Barcelona",
		C: "Reykjavik",
		ans: "a"
	};
	var question4 = {
		question: "Which is the longest river in the world?",
		A: "Red River",
		B: "Nile River",
		C: "Amazon River",
		ans: "b"
	};
	var question5 = {
		question: "Which is the largest body of water?",
		A: "Atlantic Ocean",
		B: "Pacific Ocean",
		C: "Indian Ocean",
		ans: "b"
	};
	var quiz = [question1, question2, question3,question4,question5];
	var no = 0;
	var userA;
	document.getElementById("question").innerText = quiz[no].question;
	document.getElementById("a").innerText = quiz[no].A;
	document.getElementById("b").innerText = quiz[no].B;
	document.getElementById("c").innerText = quiz[no].C;
	document.getElementById("score").innerText = "Score: " + user.correct + "/" + quiz.length;
	function check(a) {
		if (userA != true) {
			if(a.id == quiz[no].ans) {
				a.classList.add("active");
				a.innerHTML = a.innerHTML + ' <i class="fas fa-check"></i>';
				user.correct += 1;
				userA = true;
			} else {
				a.classList.add("active");
				a.innerHTML = a.innerHTML + ' <i class="fas fa-times"></i>';
				userA = true;
			}
			document.getElementById("score").innerText = "Score: " + user.correct + "/" + quiz.length;
		}
	}
	function next() {
		if (userA == true) {
			no += 1;
			if (no < quiz.length) {
				document.getElementById("question").innerText = quiz[no].question;
				document.getElementById("a").innerText = quiz[no].A;
				document.getElementById("b").innerText = quiz[no].B;
				document.getElementById("c").innerText = quiz[no].C;
				userA = false;
				document.getElementsByClassName("active")[0].classList.remove("active");
				} else {
					if (user.correct == quiz.length) {
						sessionStorage.setItem ("score", document.getElementById("score").innerText);
						window.location.assign("congrats.html");
					} else {
						sessionStorage.setItem ("score", document.getElementById("score").innerText);
						window.location.assign("again.html");
					}
				}
		}
	}