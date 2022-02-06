
function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }


include("./js/timeout.js");
include("./js/timezone.js");
include("./js/countdown.js");




/* Переменные из документа */

const 
	option1 = document.querySelector(`.option1`),
	option2 = document.querySelector(`.option2`),
	option3 = document.querySelector(`.option3`),
	option4 = document.querySelector(`.option4`);



const optionElements = document.querySelectorAll(`.option`);

const question = document.getElementById(`question`);


const 
	numberOfQuestion = document.getElementById(`number-of-question`),
	numberOfAllQuestions = document.getElementById(`number-of-all-questions`);


const answersTracker = document.getElementById(`answers-tracker`);


const correctAnswer = document.getElementById(`correct-answer`),
	numberOfQuestion2 = document.getElementById(`number-of-all-questions-2`),
	btnSendResult = document.getElementById(`btn-try-again`);

const errors = document.querySelector(".errors");

const btnStart = document.getElementById(`btn-start`);

const result = document.getElementById(`resullt`);







const questions = [
	
	{
		question:'Найдите значение выражения: <img alt="4 \frac{2}{5} \cdot ((-1,8) : 6)" src="https://fs5.onlinetestpad.com/gif.latex?4%20%5Cfrac%7B2%7D%7B5%7D%20%5Ccdot%20%28%28-1%2C8%29%20%3A%206%29">',

		options: [
			'-1,32',
			'1,35',
			'1,32',
			'-1,35'],

		rightAnswer:0

	},

	{
		question:'Из данных выражений выберите выражение, не имеющее смысла.',

		options: [
			'<img class="ans-img" src="https://images.onlinetestpad.com/59/f2/7274cdaf4bd99b36965aba8b911b.png" style="">',
			'<img class="ans-img" src="https://images.onlinetestpad.com/b7/1e/2c8208344f7181d44a51dc41b8e9.png" style="">',
			'<img class="ans-img" src="https://images.onlinetestpad.com/bb/67/f518f2c64de481249ae351ea3c13.png" style="">',
			'<img class="ans-img" src="https://images.onlinetestpad.com/6c/39/b941cdaa486d86ab36b7556861c3.png" style="">'],

		rightAnswer:2

	},
	{
		question:'<img src="https://images.onlinetestpad.com/3c/6c/e01643504132800149d1a0befd73.png" class="" style=" ">',

		options: [
			'-1',
			'<img class="ans-img" src="https://images.onlinetestpad.com/cf/23/2968199d41bd90c2b4ce13b97ec7.png" style="">',
			'12',
			'1'],

		rightAnswer:0

	},
	{
		question:'Найдите среднее арифметическое чисел 21; 32,4 и 40,2.',

		options: [
			'32,4',
			'31,2',
			'46,8',
			'31,4'],

		rightAnswer:1

	},
	{
		question:'Назовите самую красивую, самую известную, самую  величественную "царицу" – долгожительницу, царицу из цариц.',

		options: [
			'Арифметика',
			'Математика',
			'Геометрия',
			'Стереометрия'],

		rightAnswer:0 //Правильный ответ

	},
	{
		question:'Кто из великих математиков древности создал учения о производной и интеграле, которые используют до сих пор?',

		options: [
			'Арихмет',
			'Демокрит',
			'Евклид',
			'Пифогор'],

		rightAnswer:0

	},
	{
		question:'Кто из великих математиков впервые ввёл в математике употребление x, y… латинского алфавита?',

		options: [
			'Декарт',
			'Гаусс',
			'Ковалевская',
			'Лобачевский'],

		rightAnswer:0

	},
	{
		question:'Кому из великих математиков принадлежат слова «Математика – царица наук, а арифметика – царица математики»?',

		options: [
			'Гаусс',
			'Ньютон',
			'Ковалевская',
			'Евклид'],

		rightAnswer:0

	},
	{
		question:'Назовите фамилии двух учёных математиков, которые независимо друг от друга получили формулу для вычисления интеграла.',

		options: [
			'Декарт и Ковалевская',
			'Ньютон и Лейбниц',
			'Ковалевская и Лейбниц',
			'Ньютон и Коши'],

		rightAnswer:1

	},
	{
		question:'Какая система счисления применяется в ЭВМ?',

		options: [
			'Восмеричная',
			'Десятичная',
			'Пятеричная',
			'Двоичная'],

		rightAnswer:3

	},
	{
		question:'Автор первого русского учебника математики?',

		options: [
			'Ньютон',
			'Ковалевская',
			'Евклид',
			'Магницкий'],

		rightAnswer:3

	},
	{
		question:'Кому принадлежат эти строки «Математику уже затем учить надо, что она ум в порядок приводит»?',

		options: [
			'Пифогору',
			'Демокриту',
			'Ломоносову',
			'Арихмеду'],

		rightAnswer:2

	},
	{
		question:'В книге «Метрика» (I век до н.э.) Герона Александрийского площадь треугольника по трём сторонам определяется по «формуле Герона». Кто впервые получил эту формулу?',

		options: [
			'Пифогор',
			'Демокрит',
			'Евклид',
			'Арихмед'],

		rightAnswer:3

	},
	{
		question:'Автор школьных математических таблиц.',

		options: [
			'Жохов',
			'Арихмед',
			'Брадис',
			'Ковалевская'],

		rightAnswer:2

	},
	{
		question:'Какой русский математик нашёл математический способ рационального использования материи при выкройке одежды?',

		options: [
			'Пифогор',
			'Чебышев',
			'Ковалевская',
			'Николаев'],

		rightAnswer:1

	},
	{
		question:'Русский математик – кораблестроитель?',

		options: [
			'Чебышев',
			'Крылов',
			'Евклид',
			'Ковалевская'],

		rightAnswer:1

	},
	{
		question:'Расположите имена великих математиков, начиная с древности:',

		options: [
			'Герон, Арихмед, Пифогор, Гипатия',
			'Пифогор, Герон, Арихмед, Гипатия',
			'Арихмед, Пифогор, Гипатия, Герон',
			'Гипатия, Пифогор, Герон, Арихмед'],

		rightAnswer:0

	},


	
	
	];





/* Переменные для работы логики */


let score = 0;



let indexOfQuestion,
	indexOfPage = 0;







/* Начало логики */


numberOfAllQuestions.innerHTML = questions.length;



/*Логика загрузки вопросов*/

const load = () => {

	question.innerHTML = questions[indexOfQuestion].question;


	option1.innerHTML = questions[indexOfQuestion].options[0];
	option2.innerHTML = questions[indexOfQuestion].options[1];
	option3.innerHTML = questions[indexOfQuestion].options[2];
	option4.innerHTML = questions[indexOfQuestion].options[3];



	indexOfPage++;
		
	


	numberOfQuestion.innerHTML = indexOfPage;

};



	/*Логика выполнение след рандомного ыопроса и вызова */





let completedAnswerd = [];

let propuskquestions = [];	



const randomQuestion = () => { 
	let randomNumber = Math.floor(Math.random()*questions.length);
	let hiteDublicate = false;

	if(indexOfPage == questions.length){
		quisOver();
	}else{

		if(completedAnswerd.length > 0){
			completedAnswerd.forEach(item => {
				if(item == randomNumber){
					hiteDublicate = true;
				}
			});

			if(hiteDublicate){
				randomQuestion();
			}else{
				indexOfQuestion = randomNumber;
				load();
			}

		}
		if(completedAnswerd.length == 0){
			indexOfQuestion = randomNumber;
				load();
		}
	};
	completedAnswerd.push(randomNumber);
};


	/*Функция для выполнение заливки на правильных отвеченных конгтейнеров  */
	/*Главная фунция  */


const checkAnswer = el => {
	if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
		el.target.classList.add("correct")
		score++;
		colorInTracker("correct")
	}else{
		el.target.classList.add("wrong")
		colorInTracker("wrong")
	}
	disabledOptions();
	timeout_started();
}


for(option of optionElements){

	option.addEventListener('click', e => checkAnswer(e))

}



/* */


const disabledOptions = () => {
	optionElements.forEach(item => {
		item.classList.add("disabled");
		if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
			item.classList.add("correct");
		}
	})
};




const EnabledOptions = () => {
	optionElements.forEach(item => {
		item.classList.remove("disabled","correct","wrong");
	})
};


const answerTracker = () => {
	questions.forEach(() => {
		const TrackerDiv = document.createElement("div");
		answersTracker.appendChild(TrackerDiv);
	})
}

const colorInTracker = status => {
	answersTracker.children[indexOfPage - 1].classList.add(`${status}`)
}

const correctedorwrong = () => {
	if(!optionElements[0].classList.contains("disabled")){

		console.log("null is working")


	}else{
		randomQuestion();
		EnabledOptions();
	}
}










const quisOver = () => {



	/*Контент для вывода результата*/




	document.querySelector(".quiz-over-modal").classList.add("active")

	if(score == indexOfPage){
		result.innerHTML = "Отлично! Вы получили 5 баллов"
	}else if(score <= 10 && score > 0){
		result.innerHTML = "Плохо! Вы получили 2 балла"
	}else if(score > 10 && score <= 15){
		result.innerHTML = "Не плохо! Вы получили 3 баллов"
	}else if(score >15 && score < 17){
		result.innerHTML = "Хорошо! Вы получили 4 баллов"
	}else{
		result.innerHTML = "Вы нечего не получили"
	}

	correctAnswer.innerHTML = score;
	numberOfQuestion2.innerHTML = questions.length;;

	btnSendResult.addEventListener('click', () => {
		clickSendMassage();
	})


};
 
const clickSendMassage = () => {
	
	console.log("send")
	// Здесь будет логика отправки результата


};




const startpage = () => {  // 



	btnStart.addEventListener('click', () => {
		document.querySelector(".quiz-over-modal-start").classList.add("active") 

		
		timeout_start()




		// if(document.getElementById('timeout-div') === ""){
		// 	document.querySelector(".quiz-container").classList.add("active-test")
		// 	console.log("=====================================");
		// 	console.log("clicked");

		// 	console.log("you see at display");

		// 	randomQuestion();
		// 	answerTracker();
		// }else{
		// 	console.log("foo")
		// }

	})

}



window.addEventListener('load', () => {   // При после загрузки сайта заупскает отдельную фунцию для запуска викторину
	console.log("display is none");
	startpage(); // запускает мини описания про викторину потом запускает весь викторину
	
});