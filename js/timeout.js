



function timeout_start(){

let red = document.getElementById('color-red')
let yellow = document.getElementById('color-yellow')
let green = document.getElementById('color-green')


let arr = [
	{
		param:param0 = () => {

			document.querySelector('.container4').classList.add("none")

			document.querySelector(".quiz-container").classList.add("active-test")
			console.log("=====================================");
			console.log("started");

			console.log("you see at display");


			// function timeout_started(){


			// 	let arr = [
			// 		{
			// 			param:param = () => {
			// 				correctedorwrong();
			// 			},
			// 			set :4000
			// 		},
			// 		{
			// 			param:param0 = () => {
			// 				console.log(0)
			// 			},
			// 			set :3000
			// 		},
			// 		{
			// 			param:param1 = () => {
			// 				console.log(1)

			// 			},
			// 			set :2000
			// 		},
			// 		{
			// 			param:param2 = () => {
			// 				console.log(2)
			// 			},
			// 			set :1000
			// 		},
			// 		{
			// 			param:param3 = () => {
			// 				console.log(3)
			// 			},
			// 			set :0
			// 		}
			// 	]


			// 	const items = arr.forEach(item => {
			// 		setTimeout(item.param,item.set);
			// 	})


			// 	};

			countdown();
			randomQuestion();
			answerTracker();
		},
		set :3000
	},
	{
		param:param1 = () => {
			yellow.classList.remove("color-yellow")
			green.innerHTML = "1"
			yellow.innerHTML = ""

		},
		set :2000
	},
	{
		param:param2 = () => {
			red.classList.remove("color-red")
			yellow.innerHTML = "2"
			red.innerHTML = ""

		},
		set :1000
	},
	{
		param:param3 = () => {
			red.innerHTML = "3"
		},
		set :0
	}
]


const items = arr.forEach(item => {
	setTimeout(item.param,item.set);
})

};







