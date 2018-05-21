var hero_type = '';
var build = '';
var gold = '';
var active = '';
var splash = '';

function adjustWeights() {
	gtag('event', 'Dark Mode', {
		'event_category': 'Dark Mode',
		'event_action': 'Setting',
		'event_label': ($('#dark').prop('checked') ? 'Dark' : 'Light' )
	});
	if($('#build').val()) {
		gtag('event', 'Build', {
			'event_category': 'Build',
			'event_action': 'Value',
			'event_label': $('#build').val()
		});
	}
	if($('#hero').val()) {
		gtag('event', 'Hero', {
			'event_category': 'Hero',
			'event_action': 'Set',
			'event_label': $('#hero').val()
		});
	}
	if($('#gold').val()) {
		gtag('event', 'Gold', {
			'event_category': 'Gold',
			'event_action': 'Set',
			'event_label': $('#gold').val()
		});
	}
	if($('#active').val()) {
		gtag('event', 'Active', {
			'event_category': 'Active',
			'event_action': 'Set',
			'event_label': $('#active').val()
		});
	}
	build = $('#build').val();
	active = ("online" == $('#active').val() ? true : false);
	splash = (true == $('#wet').prop('checked') ? true: false);
	gold = $('#gold').val();

	switch($('#hero').val()) {
		case 'maya':
		case 'kronus':
		case 'kiki':
		case 'beany':
		case 'ursa':
		case 'wally':
		case 'pharaoh':
		case 'cass':
		case 'lucy':
		case 'jazz':
		case 'mina':
			hero_type = 'spell_ground';
			break;

		case 'zato':
		case 'sophia':
		case 'lance':
		case 'gulbrand':
		case 'rhys':
		case 'cosette':
		case 'jayce':
		case 'boomoh':
		case 'aya':
		case 'yzafa':
			hero_type = 'melee_ground';
			break;

		case 'pingo':
		case 'rosabella':
		case 'davey':
		case 'maddie':
		case 'sawyer':
		case 'saje':
		case 'dex':
		case 'lala':
		case 'miki':
		case 'finn':
			hero_type = 'ranged_ground';
			break;

		case 'maple':
		case 'nohni':
			hero_type = 'melee_flying';
		break;

		case 'kin':
		case 'zolom':
			hero_type = 'ranged_flying';
			break;

		case 'titania':
		case 'damon':
			hero_type = 'spell_flying';
			break;
	}
	$.each(artifacts.data, function(k,v) {
		v = calculateWeight(k,v);
		artifacts.data[k].rating = v.rating;
		artifacts.data[k].color = v.color;
	});
	adjustBoS();
	artifacts = calculateAll(artifacts, true);
	$.each(skills.data, function(k,v) {
		v = calculateWeight(k,v);
		skills.data[k].rating = v.rating;
		skills.data[k].color = v.color;
	});
	calculateAllSkills();
	storeData();
}

function calculateWeight(k,v) {
	v.rating = 0;
	v.color = 'danger';
	if('bos' == k) {
		v.color = 'info';
	} else if(undefined != v.expo.sum) {
		switch(v.expo.sum) {
			case 'pet_dmg':
				v.rating += pets_dmg.all;
				v.rating += pets_dmg.tap * reducts.tap[build];
				v.rating += pets_dmg.hero * reducts.hero[build];
				v.rating += pets_dmg.splash * reducts.splash[build] * (true == splash ? 1 : 0);
				v.color = 'info';
				break;

			case 'pet_gold':
				v.rating += pets_gold * reducts.gold;
				v.color = 'warning';
				break;

			case 'tap_mana':
				v.rating = reducts.tap[build];
				v.rating *= skills.data.ms.levels[Math.min(skills.data.ms.level + 1, skills.data.ms.max)].bonus3;
				v.color = determineColor(v.rating);
				break;

			case 'skill':
				v.rating += reducts.hs[build];
				v.rating += reducts.ds[build];
				v.rating += reducts.gold * ('phom' == gold ? .5 : 1);;
				v.rating += reducts.fs[build];
				v.rating += reducts.wc[build];
				v.rating += reducts.sc[build];
				v.color = 'info';
				break;

			case 'skill_fairy':
				v.rating += reducts.hs[build];
				v.rating += reducts.ds[build];
				v.rating += reducts.gold * ('phom' == gold ? .5 : 1);;
				v.rating += reducts.fs[build];
				v.rating += reducts.wc[build];
				v.rating += reducts.sc[build];
				v.rating *= skills.data.fc.levels[Math.min(skills.data.fc.level + 1, skills.data.fc.max)].bonus;
				v.color = 'info';
				break;

			case 'skill_mana':
				v.rating += reducts.hs[build];
				v.rating += reducts.ds[build];
				v.rating += reducts.gold * ('phom' == gold ? .5 : 1);;
				v.rating += reducts.fs[build];
				v.rating += reducts.wc[build];
				v.rating += reducts.sc[build];
				v.rating *= skills.data.mm.levels[Math.min(skills.data.mm.level + 1, skills.data.mm.max)].bonus2;
				v.color = 'info';
				break;

			case 'skill_gold':
				v.rating += (0 < reducts.hs[build] ? reducts.gold : (0 < artifacts.data.ip.level ? reducts.gold : 0));
				v.rating += (0 < reducts.ds[build] ? reducts.gold : (0 < artifacts.data.gok.level ? reducts.gold : 0));
				v.rating += (0 < reducts.fs[build] ? reducts.gold : (0 < artifacts.data.os.level ? reducts.gold : 0));
				v.rating += (0 < reducts.wc[build] ? reducts.gold : (0 < artifacts.data.tac.level ? reducts.gold : 0));
				v.rating += (0 < reducts.sc[build] ? reducts.gold : (0 < artifacts.data.ho.level ? reducts.gold : 0));
        v.rating = (3 * reducts.gold < v.rating ? 3 * reducts.gold : v.rating);
				v.rating += reducts.gold;
				v.color = 'warning';
				break;

			case 'equip':
				v.rating += reducts.sword[build];
				v.rating += reducts.helmet[build];
				v.rating += reducts.gold;
				v.rating += 1;
				v.rating += reducts.companion[build];
				v.color = 'info';
				break;
		}
	} else if(undefined != v.expo.flat) {
		switch(v.expo.flat) {
			case 'gold':
				v.rating = reducts.gold;
				v.color = 'warning';
				break;

			case 'gold_phom':
				v.rating = reducts.gold * ('phom' == gold ? .5 : 1);
				v.color = 'warning';
				break;

			case 'inactive_phom':
				if(0 == active) {
					v.rating = 1;
					v.color = 'success';
				} else {
					v.rating = reducts.gold * ('phom' == gold ? 1 : 0);
					v.color = 'warning';
				}
				break;

			case 'inactive_gold':
				v.rating = reducts.gold;
				v.color = 'warning';
				break;

      case 'rev_cs':
        v.rating = reducts.rev_cs[build];
        v.color = 'success';
        break;

			case 'dmg':
				v.rating = 1;
				v.color = 'info';
				break;

			case 'hsk':
				if(0 < artifacts.data.hs2.level) {
					v.rating = 1;
					v.color = 'info';
				} else {
					v.rating = 0.5;
					v.color = 'secondary';
				}
				break;

			case 'active':
				if(1 == active) {
					v.rating = 1;
					v.color = 'info';
				} else {
					v.rating = 0;
					v.color = 'danger';
				}
				break;

			case 'inactive':
				if(0 == active) {
					v.rating = 1;
					v.color = 'success';
				} else {
					v.rating = 0;
					v.color = 'danger';
				}
				break;

			case 'inactive_pet':
				if(0 == active) {
					v.rating = reducts.pet[build];
					v.color = determineColor(v.rating);
				} else {
					v.rating = ('pet' == build ? reducts.ds[build] : 0);
					v.color = determineColor(v.rating);
				}
				break;


			case 'inactive_ship':
				if(0 == active) {
					v.rating = reducts.cs[build];
					v.color = determineColor(v.rating);
				} else {
					v.rating = ('cs' == build ? reducts.ds[build] : 0);
					v.color = determineColor(v.rating);
				}
				break;

			case 'inactive_clone':
				if(0 == active) {
					v.rating = reducts.sc[build];
					v.color = determineColor(v.rating);
				} else {
					v.rating = ('sc' == build ? reducts.ds[build] : 0);
					v.color = determineColor(v.rating);
				}
				break;
		}
	} else if(undefined != v.expo.reduct) {
		if('splash' == v.expo.reduct && false == splash) {
			v.rating = 0;
		} else {
			v.rating = reducts[v.expo.reduct][build];
		}
		v.color = determineColor(v.rating);
	} else if(undefined != v.expo.hero_type) {
		if(-1 == hero_type.indexOf(v.expo.hero_type)) {
			v.rating = 0;
		} else {
			v.rating = reducts.hero[build];
		}
		v.color = determineColor(v.rating);
	} else if(undefined != v.expo.gold) {
		$.each(v.expo.gold, function(k2,v2) {
			if(gold == v2) {
				v.rating = reducts.gold;
				return false;
			} else if('partial_splash' == v2) {
				v.rating = reducts.splash[build] * reducts.gold * .5;
				return false;
			} else if('splash' == v2) {
				v.rating = reducts.splash[build] * reducts.gold;
				return false;
			} else if('partial_inactive' == v2) {
				if(!active) {
					v.rating = reducts.gold * .5;
					return false;
				}
			} else if('inactive' == v2) {
				if(!active) {
					v.rating = reducts.gold;
					return false;
				}
			} else if('active' == v2) {
				if(active) {
					v.rating = reducts.gold;
					return false;
				}
			}
		});
		v.color = determineColor(v.rating);
	}
	return v;
}

function determineColor(value) {
	if(reducts.gold == value) {
		return 'warning';
	} else if(1 == value) {
		return 'success';
	} else if(0 == value) {
		return 'danger';
	} else {
		return 'secondary';
	}
}
