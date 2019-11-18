var article_1 = {
	'foto': 'img/anon1.jpg',
	'title': 'Название',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae, doloremque, ad hic quasi blanditiis repellendus! Voluptate facere odit temporibus deleniti, doloribus recusandae vitae provident nihil eum atque animi incidunt!'
};

var article_2 = {
	'foto': 'img/comp.jpg',
	'title': 'Название',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae, doloremque, ad hic quasi blanditiis repellendus! Voluptate facere odit temporibus deleniti, doloribus recusandae vitae provident nihil eum atque animi incidunt!'
};

var article_3 = {
	'foto': 'img/facebook.jpg',
	'title': 'Название',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae, doloremque, ad hic quasi blanditiis repellendus! Voluptate facere odit temporibus deleniti, doloribus recusandae vitae provident nihil eum atque animi incidunt!'
};

var article_4 = {
	'foto': 'img/google.jpg',
	'title': 'Название',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae, doloremque, ad hic quasi blanditiis repellendus! Voluptate facere odit temporibus deleniti, doloribus recusandae vitae provident nihil eum atque animi incidunt!'
};

var article_5 = {
	'foto': 'img/new2.jpg',
	'title': 'Название',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae, doloremque, ad hic quasi blanditiis repellendus! Voluptate facere odit temporibus deleniti, doloribus recusandae vitae provident nihil eum atque animi incidunt!'
};

var article_6 = {
	'foto': 'img/anon1.jpg',
	'title': 'Название',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae, doloremque, ad hic quasi blanditiis repellendus! Voluptate facere odit temporibus deleniti, doloribus recusandae vitae provident nihil eum atque animi incidunt!'
};

var article_7 = {
	'foto': 'img/comp.jpg',
	'title': 'Название',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae, doloremque, ad hic quasi blanditiis repellendus! Voluptate facere odit temporibus deleniti, doloribus recusandae vitae provident nihil eum atque animi incidunt!'
};

var article_8 = {
	'foto': 'img/facebook.jpg',
	'title': 'Название',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae, doloremque, ad hic quasi blanditiis repellendus! Voluptate facere odit temporibus deleniti, doloribus recusandae vitae provident nihil eum atque animi incidunt!'
};

var articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];

var start = 0;

$("#loadMore").on("click", function () {
	var htmlToInsert = '';

	for(var i = start; i < articles.length; i++) {
		if(i > 3 + start)
			break;
		htmlToInsert += "<div class='card'><img src='" + articles[i].foto + "' class='card-img-top' alt='" + articles[i].title + "'><div class='card-body'><h2 class='card-title'>" + articles[i].title + "</h2><p class='card-text'>" + articles[i].intro + "</p><a href='#' class='btn btn-warning'>Читать далее</a></div></div>";


		if(i == articles.length - 1) {
			$("#loadMore").hide();
			break;
		}
	}

	$("#loadMoreBlock").append(htmlToInsert + "<div style='clear: both'></div>");

	start += 4;
});

// Форма поиска

$("#search").on("click", function () {
	$(this).hide();
	$("#hideSearch").show();
});

$("#hideSearch button").on("click", function () { // Кнопка закрыть
	$("#search").show();
	$("#hideSearch").hide();
});
