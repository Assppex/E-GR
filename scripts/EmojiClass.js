class SingleEmoji {
  constructor(unicode, weight, category, subcategory, id) {
      this.code = unicode;
      this.weight = weight;
      this.category = category;
      this.subcategory = subcategory;
      this.id = id;
  }
}

export class Emojis {
	constructor() {
		this.all = InitializeEmojis();
		this.base = [];
		this.screen2 = [];
		this.screen3 = [];
		this.all_screen2 = [];
		this.all_else = [];
		this.onScreen1 = true;

		for (const emoji of this.all) {
			if (emoji.subcategory == "База") {
				this.base.push(emoji);
			}
			else if (emoji.subcategory == "ППО") {
				this.all_screen2.push(emoji);
			}
			else {
				this.all_else.push(emoji);
			}
		}

		this.sum = [
			{category: "Радостное", value: 0}, 
			{category: "Грустное", value: 0}, 
			{category: "Флекс", value: 0}, 
			{category: "Молодежное", value: 0}, 
			{category: "Спокойное", value: 0}, 
			{category: "Работа/учеба", value: 0}, 
			{category: "Агрессивное", value: 0}, 
			{category: "Ностальгия", value: 0}, 
			{category: "Мрачное", value: 0}, 
		]
	}

	
	AddToSum(key) {
		for (var i of this.sum) {
			if (this.onScreen1) {
				if (this.base[key].category == i.category) {
					i.value += this.base[key].weight;
				}
			}
			else {
				if (this.screen2[key].category == i.category) {
					i.value += this.screen2[key].weight;
				}
			}
		}
	}

	ClearSum() {
		for (var it of this.sum) {
			it.value = 0;
		}
	}

	RemoveFromSum(key) {
		for (var i of this.sum) {
			if (this.onScreen1) {
				if (this.base[key].category == i.category) {
					i.value -= this.base[key].weight;
				}
			}
			else {
				if (this.screen2[key].category == i.category) {
					i.value -= this.screen2[key].weight;
				}
			}
		}

	}

	CalculateScreen2() {
		this.onScreen1 = false;

		var sortedSum = this.sum.sort(function(a, b) {
			return b.value - a.value;
		})

		var num_subcategories = 1;

		var subcategory1 = sortedSum[0].category;
		if (sortedSum[1].value != 0) num_subcategories++;
		if (sortedSum[2].value != 0) num_subcategories++;

		var return_val = [];

		var num_sub1 = 0;
		var num_sub2 = 0;
		var num_sub3 = 0;

		switch(num_subcategories) {
			case 1:
				num_sub1 = 6;
				break;
			case 2:
				num_sub1 = 3;
				num_sub2 = 3;
				break;
			case 3:
				num_sub1 = 2;
				num_sub2 = 2;
				num_sub3 = 2;
				break;
		}

		for (var em of this.all_screen2) {
			if (em.category == sortedSum[0].category && num_sub1 > 0) {
				this.screen2.push(em);
				num_sub1--;
			} 
			if (em.category == sortedSum[1].category && num_sub2 > 0) {
				this.screen2.push(em);
				num_sub2--;
			} 
			if (em.category == sortedSum[2].category && num_sub3 > 0) {
				this.screen2.push(em);
				num_sub3--;
			} 
		}
	}

	CalculateScreen3() {
		var sortedSum = this.sum.sort(function(a, b) {
			return b.value - a.value;
		})

		for (var em of this.all_else) {
			if (em.category == sortedSum[0].category) {
				this.screen3.push(em);
			}
		}
	}

}


function InitializeEmojis()
{
	var res = [];

	// https://docs.google.com/spreadsheets/d/15lAB2fIap1gdpQms-ihaG5klumSotlx8fZYhEe7EBv0/edit?usp=sharing

	res.push(new SingleEmoji('\u{1F602}', 0.5, 'Радостное', 'База', 1));
	res.push(new SingleEmoji('\u{1F923}', 1.0, 'Радостное', 'База', 2));
	res.push(new SingleEmoji('\u{1F601}', 0.9, 'Радостное', 'ППО', 3));
	res.push(new SingleEmoji('\u{1F917}', 0.4, 'Радостное', 'ППО', 4));
	res.push(new SingleEmoji('\u{1F60A}', 0.7, 'Радостное', 'ППО', 5));
	res.push(new SingleEmoji('\u{1F609}', 0.8, 'Радостное', 'ППО', 6));
	res.push(new SingleEmoji('\u{1F643}', 0.2, 'Радостное', 'ППО', 7));
	res.push(new SingleEmoji('\u{1F63A}', 0.1, 'Радостное', 'ППО', 8));
	res.push(new SingleEmoji('\u{1F604}', 0.9, 'Радостное', 'Максимум позитива', 9));
	res.push(new SingleEmoji('\u{1F61C}', 1.0, 'Радостное', 'Максимум позитива', 10));
	res.push(new SingleEmoji('\u{1F92A}', 0.7, 'Радостное', 'Весело', 11));
	res.push(new SingleEmoji('\u{1F308}', 0.8, 'Радостное', 'Весело', 12));
	res.push(new SingleEmoji('\u{1F642}', 0.6, 'Радостное', 'Легкая улбыка', 13));
	res.push(new SingleEmoji('\u{1F639}', 0.5, 'Радостное', 'Легкая улбыка', 14));
	res.push(new SingleEmoji('\u{1F97A}', 0.5, 'Грустное', 'База', 15));
	res.push(new SingleEmoji('\u{1F623}', 1.0, 'Грустное', 'База', 16));
	res.push(new SingleEmoji('\u{1F630}', 0.9, 'Грустное', 'ППО', 17));
	res.push(new SingleEmoji('\u{1F613}', 0.4, 'Грустное', 'ППО', 18));
	res.push(new SingleEmoji('\u{1F631}', 0.7, 'Грустное', 'ППО', 19));
	res.push(new SingleEmoji('\u{1F628}', 0.8, 'Грустное', 'ППО', 20));
	res.push(new SingleEmoji('\u{1F63F}', 0.2, 'Грустное', 'ППО', 21));
	res.push(new SingleEmoji('\u{1F640}', 0.1, 'Грустное', 'ППО', 22));
	res.push(new SingleEmoji('\u{1F62D}', 0.9, 'Грустное', 'Депрессия', 23));
	res.push(new SingleEmoji('\u{1F622}', 1.0, 'Грустное', 'Депрессия', 24));
	res.push(new SingleEmoji('\u{2639}', 0.7, 'Грустное', 'Уныние', 25));
	res.push(new SingleEmoji('\u{1F612}', 0.8, 'Грустное', 'Уныние', 26));
	res.push(new SingleEmoji('\u{1F928}', 0.6, 'Грустное', 'Легкий негатив', 27));
	res.push(new SingleEmoji('\u{1F61E}', 0.5, 'Грустное', 'Легкий негатив', 28));
	res.push(new SingleEmoji('\u{1F91F}', 0.5, 'Флекс', 'База', 29));
	res.push(new SingleEmoji('\u{1F916}', 1.0, 'Флекс', 'База', 30));
	res.push(new SingleEmoji('\u{1F37A}', 0.9, 'Флекс', 'ППО', 31));
	res.push(new SingleEmoji('\u{1F451}', 0.4, 'Флекс', 'ППО', 32));
	res.push(new SingleEmoji('\u{1F976}', 0.7, 'Флекс', 'ППО', 33));
	res.push(new SingleEmoji('\u{26A1}', 0.8, 'Флекс', 'ППО', 34));
	res.push(new SingleEmoji('\u{1F4AB}', 0.2, 'Флекс', 'ППО', 35));
	res.push(new SingleEmoji('\u{1F47E}', 0.1, 'Флекс', 'ППО', 36));
	res.push(new SingleEmoji('\u{1F973}', 0.9, 'Флекс', 'Вечеринка', 37));
	res.push(new SingleEmoji('\u{1F57A}', 1.0, 'Флекс', 'Вечеринка', 38));
	res.push(new SingleEmoji('\u{1F92F}', 0.7, 'Флекс', 'Ехать на машинке', 39));
	res.push(new SingleEmoji('\u{1F3CE}', 0.8, 'Флекс', 'Ехать на машинке', 40));
	res.push(new SingleEmoji('\u{1F90C}', 0.6, 'Флекс', 'Потрясти головой', 41));
	res.push(new SingleEmoji('\u{1F483}', 0.5, 'Флекс', 'Потрясти головой', 42));
	res.push(new SingleEmoji('\u{1F4A9}', 0.5, 'Молодежное', 'База', 43));
	res.push(new SingleEmoji('\u{1F921}', 1.0, 'Молодежное', 'База', 44));
	res.push(new SingleEmoji('\u{1F5FF}', 0.9, 'Молодежное', 'ППО', 45));
	res.push(new SingleEmoji('\u{1F648}', 0.4, 'Молодежное', 'ППО', 46));
	res.push(new SingleEmoji('\u{261D}', 0.7, 'Молодежное', 'ППО', 47));
	res.push(new SingleEmoji('\u{1F636}', 0.8, 'Молодежное', 'ППО', 48));
	res.push(new SingleEmoji('\u{1F919}', 0.2, 'Молодежное', 'ППО', 49));
	res.push(new SingleEmoji('\u{1F9AF}', 0.1, 'Молодежное', 'ППО', 50));
	res.push(new SingleEmoji('\u{1F64A}', 0.9, 'Молодежное', 'Витя АК', 51));
	res.push(new SingleEmoji('\u{1F413}', 1.0, 'Молодежное', 'Витя АК', 52));
	res.push(new SingleEmoji('\u{1F32B}', 0.7, 'Молодежное', 'Кальянный рэп', 53));
	res.push(new SingleEmoji('\u{1F4A8}', 0.8, 'Молодежное', 'Кальянный рэп', 54));
	res.push(new SingleEmoji('\u{1F300}', 0.6, 'Молодежное', 'Рэп улиц', 55));
	res.push(new SingleEmoji('\u{1F911}', 0.5, 'Молодежное', 'Рэп улиц', 56));
	res.push(new SingleEmoji('\u{1F634}', 0.5, 'Спокойное', 'База', 57));
	res.push(new SingleEmoji('\u{1F610}', 1.0, 'Спокойное', 'База', 58));
	res.push(new SingleEmoji('\u{1F44C}', 0.9, 'Спокойное', 'ППО', 59));
	res.push(new SingleEmoji('\u{1F92B}', 0.4, 'Спокойное', 'ППО', 60));
	res.push(new SingleEmoji('\u{1F633}', 0.7, 'Спокойное', 'ППО', 61));
	res.push(new SingleEmoji('\u{1F924}', 0.8, 'Спокойное', 'ППО', 62));
	res.push(new SingleEmoji('\u{1F62A}', 0.2, 'Спокойное', 'ППО', 63));
	res.push(new SingleEmoji('\u{1F644}', 0.1, 'Спокойное', 'ППО', 64));
	res.push(new SingleEmoji('\u{1F343}', 0.9, 'Спокойное', 'Шум деревьев', 65));
	res.push(new SingleEmoji('\u{1F333}', 1.0, 'Спокойное', 'Шум деревьев', 66));
	res.push(new SingleEmoji('\u{1F30A}', 0.7, 'Спокойное', 'Морской бриз', 67));
	res.push(new SingleEmoji('\u{1F42C}', 0.8, 'Спокойное', 'Морской бриз', 68));
	res.push(new SingleEmoji('\u{1F525}', 0.6, 'Спокойное', 'У камина', 69));
	res.push(new SingleEmoji('\u{1F30B}', 0.5, 'Спокойное', 'У камина', 70));
	res.push(new SingleEmoji('\u{1F4BC}', 0.5, 'Работа/учеба', 'База', 71));
	res.push(new SingleEmoji('\u{270F}', 1.0, 'Работа/учеба', 'База', 72));
	res.push(new SingleEmoji('\u{1F4CA}', 0.9, 'Работа/учеба', 'ППО', 73));
	res.push(new SingleEmoji('\u{1F4C5}', 0.4, 'Работа/учеба', 'ППО', 74));
	res.push(new SingleEmoji('\u{1F4B0}', 0.7, 'Работа/учеба', 'ППО', 75));
	res.push(new SingleEmoji('\u{1F4DA}', 0.8, 'Работа/учеба', 'ППО', 76));
	res.push(new SingleEmoji('\u{1F4BB}', 0.2, 'Работа/учеба', 'ППО', 77));
	res.push(new SingleEmoji('\u{1F9D0}', 0.1, 'Работа/учеба', 'ППО', 78));
	res.push(new SingleEmoji('\u{1F393}', 0.9, 'Работа/учеба', 'Lofi', 79));
	res.push(new SingleEmoji('\u{1F3A7}', 1.0, 'Работа/учеба', 'Lofi', 80));
	res.push(new SingleEmoji('\u{1F3B9}', 0.7, 'Работа/учеба', 'Нью-Эдж', 81));
	res.push(new SingleEmoji('\u{1F50A}', 0.8, 'Работа/учеба', 'Нью-Эдж', 82));
	res.push(new SingleEmoji('\u{1F3B7}', 0.6, 'Работа/учеба', 'Блюз', 83));
	res.push(new SingleEmoji('\u{1F3BA}', 0.5, 'Работа/учеба', 'Блюз', 84));
	res.push(new SingleEmoji('\u{1F92C}', 0.5, 'Агрессивное', 'База', 85));
	res.push(new SingleEmoji('\u{1F624}', 1.0, 'Агрессивное', 'База', 86));
	res.push(new SingleEmoji('\u{1F918}', 0.9, 'Агрессивное', 'ППО', 87));
	res.push(new SingleEmoji('\u{1F608}', 0.4, 'Агрессивное', 'ППО', 88));
	res.push(new SingleEmoji('\u{1F620}', 0.7, 'Агрессивное', 'ППО', 89));
	res.push(new SingleEmoji('\u{1F4A3}', 0.8, 'Агрессивное', 'ППО', 90));
	res.push(new SingleEmoji('\u{1F44A}', 0.2, 'Агрессивное', 'ППО', 91));
	res.push(new SingleEmoji('\u{1F52B}', 0.1, 'Агрессивное', 'ППО', 92));
	res.push(new SingleEmoji('\u{1F9A7}', 0.9, 'Агрессивное', 'Буря внутри', 93));
	res.push(new SingleEmoji('\u{1F9E8}', 1.0, 'Агрессивное', 'Буря внутри', 94));
	res.push(new SingleEmoji('\u{1F94A}', 0.7, 'Агрессивное', 'Мотивация', 95));
	res.push(new SingleEmoji('\u{1F3C6}', 0.8, 'Агрессивное', 'Мотивация', 96));
	res.push(new SingleEmoji('\u{1F941}', 0.6, 'Агрессивное', 'Металл', 97));
	res.push(new SingleEmoji('\u{1F39A}', 0.5, 'Агрессивное', 'Металл', 98));
	res.push(new SingleEmoji('\u{1F48C}', 0.5, 'Романтическое', 'База', 99));
	res.push(new SingleEmoji('\u{1F60D}', 1.0, 'Романтическое', 'База', 100));
	res.push(new SingleEmoji('\u{1F496}', 0.9, 'Романтическое', 'ППО', 101));
	res.push(new SingleEmoji('\u{1F618}', 0.4, 'Романтическое', 'ППО', 102));
	res.push(new SingleEmoji('\u{1F61A}', 0.7, 'Романтическое', 'ППО', 103));
	res.push(new SingleEmoji('\u{1F917}', 0.8, 'Романтическое', 'ППО', 104));
	res.push(new SingleEmoji('\u{1F63B}', 0.2, 'Романтическое', 'ППО', 105));
	res.push(new SingleEmoji('\u{1F51E}', 0.1, 'Романтическое', 'ППО', 106));
	res.push(new SingleEmoji('\u{1F970}', 0.9, 'Романтическое', 'Французский вайб', 107));
	res.push(new SingleEmoji('\u{1F48B}', 1.0, 'Романтическое', 'Французский вайб', 108));
	res.push(new SingleEmoji('\u{1F49E}', 0.7, 'Романтическое', 'Романтичная Италия', 109));
	res.push(new SingleEmoji('\u{1F618}', 0.8, 'Романтическое', 'Романтичная Италия', 110));
	res.push(new SingleEmoji('\u{1F46A}', 0.6, 'Романтическое', 'Сваты', 111));
	res.push(new SingleEmoji('\u{1F470}', 0.5, 'Романтическое', 'Сваты', 112));
	res.push(new SingleEmoji('\u{1F468}', 0.5, 'Ностальгия', 'База', 113));
	res.push(new SingleEmoji('\u{231B}', 1.0, 'Ностальгия', 'База', 114));
	res.push(new SingleEmoji('\u{1F978}', 0.9, 'Ностальгия', 'ППО', 115));
	res.push(new SingleEmoji('\u{1F474}', 0.4, 'Ностальгия', 'ППО', 116));
	res.push(new SingleEmoji('\u{1F4FB}', 0.7, 'Ностальгия', 'ППО', 117));
	res.push(new SingleEmoji('\u{1F4C0}', 0.8, 'Ностальгия', 'ППО', 118));
	res.push(new SingleEmoji('\u{1F4FC}', 0.2, 'Ностальгия', 'ППО', 119));
	res.push(new SingleEmoji('\u{1F4FD}', 0.1, 'Ностальгия', 'ППО', 120));
	res.push(new SingleEmoji('\u{1F576}', 0.9, 'Ностальгия', 'Песни родительской молодости', 121));
	res.push(new SingleEmoji('\u{1F978}', 1.0, 'Ностальгия', 'Песни родительской молодости', 122));
	res.push(new SingleEmoji('\u{1F3B8}', 0.7, 'Ностальгия', 'Под это флексил дед', 123));
	res.push(new SingleEmoji('\u{1F39E}', 0.8, 'Ностальгия', 'Под это флексил дед', 124));
	res.push(new SingleEmoji('\u{1F996}', 0.6, 'Ностальгия', 'Никто этого не помнит', 125));
	res.push(new SingleEmoji('\u{1F30E}', 0.5, 'Ностальгия', 'Никто этого не помнит', 126));
	res.push(new SingleEmoji('\u{2620}', 0.5, 'Мрачное', 'База', 127));
	res.push(new SingleEmoji('\u{1F578}', 1.0, 'Мрачное', 'База', 128));
	res.push(new SingleEmoji('\u{1F9DF}', 0.9, 'Мрачное', 'ППО', 129));
	res.push(new SingleEmoji('\u{1F31A}', 0.4, 'Мрачное', 'ППО', 130));
	res.push(new SingleEmoji('\u{1F463}', 0.7, 'Мрачное', 'ППО', 131));
	res.push(new SingleEmoji('\u{1F56F}', 0.8, 'Мрачное', 'ППО', 132));
	res.push(new SingleEmoji('\u{1F489}', 0.2, 'Мрачное', 'ППО', 133));
	res.push(new SingleEmoji('\u{1FAA6}', 0.1, 'Мрачное', 'ППО', 134));
	res.push(new SingleEmoji('\u{1F383}', 0.9, 'Мрачное', 'Эмбиент', 135));
	res.push(new SingleEmoji('\u{1F47D}', 1.0, 'Мрачное', 'Эмбиент', 136));
	res.push(new SingleEmoji('\u{1F3D9}', 0.7, 'Мрачное', 'Пост-панк', 137));
	res.push(new SingleEmoji('\u{1F6AC}', 0.8, 'Мрачное', 'Пост-панк', 138));
	res.push(new SingleEmoji('\u{1F577}', 0.6, 'Мрачное', 'Вичуха', 139));
	res.push(new SingleEmoji('\u{1F9DB}', 0.5, 'Мрачное', 'Вичуха', 140));

	return res;
}
