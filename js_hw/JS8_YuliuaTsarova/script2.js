"use script";

document.documentElement.setAttribute("lang", "ru");

let metaUTF = document.createElement("meta");
metaUTF.setAttribute("charset", "UTF-8");
document.head.prepend(metaUTF);

let metaEquiv = document.createElement("meta");
metaEquiv.setAttribute("http-equiv", "X-UA-Compatible");
metaEquiv.setAttribute("content", "IE=edge");
metaUTF.after(metaEquiv);

let metaViewport = document.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width");
metaViewport.setAttribute("initial-scale", "1.0");
metaEquiv.after(metaViewport);

let titleHead = document.createElement("title");
titleHead.innerText = "Homework 08";
document.head.append(titleHead);

let style = document.createElement("style");
style.innerHTML = `
	* {
		margin: 0;
		padding: 0;
	}

	body {
		background-color: #E5E5E5;
	}

	.container {
		width: 100%;
		max-width: 1280px;
		height: 880px;
		margin: auto;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 60px;
	}

	.titleContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 10px;
	}

	.titleMain {
		font-size: 36px;
		line-height: 48px;
		color: #212121;
	}

	.explain {
		font-size: 14px;
		line-height: 26px;
		color: #9FA3A7;
	}

	.cardsContainer {
		display: flex;
		justify-content: center;
	}

	.card {
		height: 480px;
		width: 400px;
		border: 1px solid #E8E9ED;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 40px;
	}

	.cardTitleTop {
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 2.4px;
		text-transform: uppercase;
		color: #9FA3A7;
	}

	.cardTitleMain {
		width: 210px;
		font-size: 36px;
		line-height: 46px;
		color: #212121;
	}

	.cardText {
		width: 210px;
		font-size: 12px;
		line-height: 22px;
		color: #9FA3A7;
	}

	.cardButtonBox {
		width: 147px;
		height: 46px;
		border: 3px solid #FFC80A;
		border-radius: 40px;
	}

	.cardButtonBox {
		font-size: 12px;
		font-weight: 700;
		line-height: 15px;
		letter-spacing: 2.4px;
		color: #212121;
	}

`;

document.head.append(style);

let body = document.body;

let container = document.createElement("div");
container.className = "container";
body.append(container);

let titleContainer = document.createElement("div");
titleContainer.className = "titleContainer";
container.append(titleContainer);

let titleMain = document.createElement("h1");
titleMain.className = "titleMain";
titleMain.innerText = "Choose Your Option";
titleContainer.append(titleMain);

let explain = document.createElement("span");
explain.className = "explain";
explain.innerText =
	"But I must explain to you how all this mistaken idea of denouncing ";
titleContainer.append(explain);

let cardsContainer = document.createElement("div");
cardsContainer.className = "cardsContainer";
container.append(cardsContainer);

let cards = [
	{
		cardTitleTop: "Freelancer",
		cardTitleMain: "Initially designed to",
		cardText:
			"But I must explain to you how all this mistaken idea of denouncing ",
		cardButtonText: "Start here",
	},

	{
		cardTitleTop: "Studio",
		cardTitleMain: "Initially designed to",
		cardText:
			"But I must explain to you how all this mistaken idea of denouncing ",
		cardButtonText: "Start here",
	},
];

cards.forEach((element) => {
	const card = document.createElement("div");
	card.className = "card";
	cardsContainer.append(card);

	const cardTitleTop = document.createElement("h4");
	cardTitleTop.className = "cardTitleTop";
	cardTitleTop.innerText = element.cardTitleTop;

	const cardTitleMain = document.createElement("h2");
	cardTitleMain.className = "cardTitleMain";
	cardTitleMain.innerText = element.cardTitleMain;

	const cardText = document.createElement("p");
	cardText.className = "cardText";
	cardText.innerText = element.cardText;

	const cardButtonBox = document.createElement("button");
	cardButtonBox.className = "cardButtonBox";

	const cardButtonText = document.createElement("span");
	cardButtonText.className = "cardButtonText";
	cardButtonText.innerText = element.cardButtonText;
	cardButtonBox.append(cardButtonText);

	card.append(cardTitleTop, cardTitleMain, cardText, cardButtonBox);
// добавиди стили прямо в тег
	if (element.cardTitleTop === "Studio") {
		card.style.backgroundColor = "#8F75BE";
		cardTitleTop.style.color = "#FFC80A";
		cardTitleMain.style.color = "#fff";
		cardText.style.color = "#fff";
		cardButtonBox.style.backgroundColor = "#8F75BE";
		cardButtonText.style.color = "#fff";
	}
});