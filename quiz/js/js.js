
	var user = {
		correct: 0
	};
	var question1 = {
		question: "Đố biết anh yêu ai?",
		A: "Em",
		B: "Thùy Dương",
		
		ans: "a"
	};
	var question2 = {
		question: "Đố biết ai yêu anh?",
		A: "Em",
		B: "Thùy Dương",
		
		ans: "a" 
	};
	var question3 = {
		question: "Anh thích ăn gì?",
		A: "cơm",
		B: "em",
		
		ans: "a"
	};
	var question4 = {
		question: "Anh thích gì?",
		A: "Thích tiền",
		B: "Hỏi thế đ ai trả lời dc.",
		
		ans: "b"
	};
	var question5 = {
		question: "Anh thích nằm ngủ hay ngồi chơi điện tử?",
		A: "ngủ",
		B: "chơi",
		
		ans: "a"
	};
	var question6 = {
		question: "Anh thích uống gì hơn?",
		A: "coca",
		B: "nước hoa quả",
		
		ans: "b"
	};
	var question7 = {
		question: "Anh thích ăn gì hơn?",
		A: "Gà rán",
		B: "Nem lụi",
		
		ans: "a"
	};
	var question8 = {
		question: "Sau này bọn mình có cưới nhau không :D",
		A: "có",
		B: "yes",
		
		ans: "a"
	};
	var question9 = {
		question: "Thích đi du lịch hay đi chơi vs ny?",
		A: "du lịch",
		B: "chơi vs ny",
		
		ans: "b"
	};
	var question10 = {
		question: "thích hôn kiểu châu âu hay châu á?",
		A: "châu âu",
		B: "châu á",
		
		ans: "a"
	};
	var quiz = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
	var no = 0;
	var userA;
	document.getElementById("question").innerText = quiz[no].question;
	document.getElementById("a").innerText = quiz[no].A;
	document.getElementById("b").innerText = quiz[no].B;
	
	document.getElementById("score").innerText = "Số câu đúng: " + user.correct + "/" + quiz.length;
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
			document.getElementById("score").innerText = "Số câu đúng: " + user.correct + "/" + quiz.length;
		}
	}
	function next() {
		if (userA == true) {
			no += 1;
			if (no < quiz.length) {
				document.getElementById("question").innerText = quiz[no].question;
				document.getElementById("a").innerText = quiz[no].A;
				document.getElementById("b").innerText = quiz[no].B;
				
				userA = false;
				document.getElementsByClassName("active")[0].classList.remove("active");
				} else {
					if (user.correct >= 7) {
						sessionStorage.setItem ("score", document.getElementById("score").innerText);
						window.location.assign("chucmung.html");
					} else {
						sessionStorage.setItem ("score", document.getElementById("score").innerText);
						window.location.assign("again.html");
					}
				}
		}
	}