var pets_gold = 2;

var pets_dmg = {
	'all' : 2,
	'tap' : 2,
	'hero' : 4,
	'splash' : 1,
};

var reducts = {
	'gold' : 0.82,
	'helmet' : {
		'hero' : 1,
		'tap' : 1,
		'pet' : 1,
		'sc' : .67,
		'hs' : .67,
		'cs' : 1
	},
	'sword' : {
		'hero' : 1,
		'tap' : 1,
		'pet' : 1,
		'sc' : 1,
		'hs' : 1,
		'cs' : 1
	},
	'tap' : {
		'hero' : 0,
		'tap' : 1,
		'pet' : 1,
		'sc' : .67,
		'hs' : 1,
		'cs' : 0
	},
	'hero' : {
		'hero' : 1,
		'tap' : .5,
		'pet' : .5,
		'sc' : .67,
		'hs' : .5,
		'cs' : 1
	},
	'ds' : {
		'hero' : 0,
		'tap' : 1,
		'pet' : .5,
		'sc' : .5,
		'hs' : .67,
		'cs' : .5
	},
	'wc' : {
		'hero' : 1,
		'tap' : .5,
		'pet' : 1,
		'sc' : .67,
		'hs' : .5,
		'cs' : 1
	},
	'fs' : {
		'hero' : 0,
		'tap' : 1,
		'pet' : 0,
		'sc' : .5,
		'hs' : 1,
		'cs' : 0
	},
	'sad' : {
		'hero' : 0,
		'tap' : 1,
		'pet' : 0,
		'sc' : .67,
		'hs' : .67,
		'cs' : 0
	},
	'crit' : {
		'hero' : 0,
		'tap' : 1,
		'pet' : 1,
		'sc' : 1,
		'hs' : 1,
		'cs' : 1
	},
	'splash' : {
		'hero' : 0,
		'tap' : 0,
		'pet' : 1,
		'sc' : 1,
		'hs' : 1,
		'cs' : 1
	},
	'pet' : {
		'hero' : 0,
		'tap' : 0,
		'pet' : 1,
		'sc' : 0,
		'hs' : 0,
		'cs' : 0
	},
	'ship' : {
		'hero' : 0,
		'tap' : 0,
		'pet' : 0,
		'sc' : 0,
		'hs' : 0,
		'cs' : 1
	},
	'sc' : {
		'hero' : 0,
		'tap' : 0,
		'pet' : 0,
		'sc' : 1,
		'hs' : 0,
		'cs' : 0
	},
	'hs' : {
		'hero' : 0,
		'tap' : 0,
		'pet' : 0,
		'sc' : 0,
		'hs' : 1,
		'cs' : 0
	},
	'companion' : {
		'hero' : 0,
		'tap' : 0,
		'pet' : 1,
		'sc' : 1,
		'hs' : 0,
		'cs' : 1
	},
}

var artifacts = {
	'totalAD' : 0,
  'data' : {
	  'bos' : {
		  'active' : 1,
			'sort' : 1,
			'name' : 'Book of Shadows',
			'nickname' : 'BoS',
			'bonus' : ' Prestige Relic',
			'ad' : .3,
			'effect' : .05,
			'max' : -1,
			'gmax' : 0.12,
			'grate' : .0001,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 2.5,
			'type' : 'multiply',
			'expo' : {
				'sum_sort' : 40
			}
		},
		'sov' : {
			'active' : 1,
			'sort' : 2,
			'name' : 'Stone of the Valrunes',
			'nickname' : 'SotV',
			'bonus' : ' Basic Titan Gold',
			'ad' : .5,
			'effect' : .3,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .00025,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.8,
			'type' : 'multiply',
			'expo' : {
				'gold' : [
					'sov',
					'all',
					'splash',
					'inactive'
				]
			}
		},
		'coc' : {
			'active' : 1,
			'sort' : 3,
			'name' : 'Chest of Contentment',
			'nickname' : 'CoC',
			'bonus' : ' Chesterson Gold',
			'ad' : .4,
			'effect' : .25,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : 1,
			'cexpo' : 1.8,
			'type' : 'multiply',
			'expo' : {
				'gold' : [
					'coc',
					'fairy',
					'splash'
					'inactive'
					'all'
				]
			}
		},
		'hs' : {
			'active' : 1,
			'sort' : 4,
			'name' : 'Heroic Shield',
			'nickname' : 'HSh',
			'bonus' : ' Boss Gold',
			'ad' : .4,
			'effect' : .2,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.8,
			'type' : 'multiply',
			'expo' : {
				'gold' : [
					'boss',
					'all'
				]
			}
		},
		'bop' : {
			'active' : 1,
			'sort' : 5,
			'name' : 'Book of Prophecy',
			'nickname' : 'BoP',
			'bonus' : ' All Gold',
			'ad' : .3,
			'effect' : .2,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 2.2,
			'type' : 'multiply',
			'expo' : {
				'flat' : 'gold'
			}
		},
		'zc' : {
			'active' : 1,
			'sort' : 6,
			'name' : 'Zakynthos Coin',
			'nickname' : 'ZC',
			'bonus' : ' Inactive Gold',
			'ad' : .3,
			'effect' : .2,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.8,
			'type' : 'multiply',
			'expo' : {
				'gold' : [
					'inactive'
				]
			}
		},
		'gfa' : {
			'active' : 1,
			'sort' : 7,
			'name' : 'Great Fay Medallion',
			'nickname' : 'GFM',
			'bonus' : ' Fairy Gold',
			'ad' : .4,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .00018,
			'gexpo' : .5,
			'ccoef' : 1,
			'cexpo' : 1.8,
			'type' : 'multiply',
			'expo' : {
				'gold' : [
					'fairy',
					'all'
				]
			}
		},
		'coe' : {
			'active' : 1,
			'sort' : 8,
			'name' : 'Coins of Ebizu',
			'nickname' : 'CoE',
			'bonus' : ' Splash Gold',
			'ad' : .5,
			'effect' : .3,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.8,
			'type' : 'multiply',
			'expo' : {
				'gold' : [
					'all',
					'splash'
				]
			}
		},
		'hsw' : {
			'active' : 1,
			'sort' : 9,
			'name' : 'Heavenly Sword',
			'nickname' : 'HSw',
			'bonus' : ' All Artifact Damage',
			'ad' : 1,
			'effect' : .05,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .00025,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 2.2,
			'type' : 'multiply',
			'expo' : {
				'flat' : 'dmg'
			}
		},
		'dr' : {
			'active' : 1,
			'sort' : 10,
			'name' : 'Divine Retribution',
			'nickname' : 'DR',
			'bonus' : ' All Damage',
			'ad' : 1,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : 1,
			'cexpo' : 2,
			'type' : 'multiply',
			'expo' : {
				'flat' : 'dmg'
			}
		},
		'dh' : {
			'active' : 1,
			'sort' : 11,
			'name' : 'Drunken Hammer',
			'nickname' : 'DH',
			'bonus' : ' Tap Damage',
			'ad' : .3,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'tap'
			}
		},
		'ss' : {
			'active' : 1,
			'sort' : 12,
			'name' : 'Samosek Sword',
			'nickname' : 'SS',
			'bonus' : ' Sword Attack Damage',
			'ad' : .5,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00014,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 2,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'sad'
			}
		},
		'tr' : {
			'active' : 1,
			'sort' : 13,
			'name' : 'The Retaliator',
			'nickname' : 'TR',
			'bonus' : ' Critical Damage',
			'ad' : .2,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'crit'
			}
		},
		'hb' : {
			'active' : 1,
			'sort' : 14,
			'name' : 'Hero\'s Blade',
			'nickname' : 'HB',
			'bonus' : ' All Hero Damage',
			'ad' : .5,
			'effect' : .15,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'hero'
			}
		},
		'tsos' : {
			'active' : 1,
			'sort' : 15,
			'name' : 'The Sword of Storms',
			'nickname' : 'TSoS',
			'bonus' : ' Melee Hero Damage',
			'ad' : .3,
			'effect' : .2,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'hero_type' : 'melee'
			}
		},
		'fb' : {
			'active' : 1,
			'sort' : 16,
			'name' : 'Furies\' Bow',
			'nickname' : 'FB',
			'bonus' : ' Ranged Hero Damage',
			'ad' : .3,
			'effect' : .2,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'hero_type' : 'ranged'
			}
		},
		'cota' : {
			'active' : 1,
			'sort' : 17,
			'name' : 'Charm of the Ancients',
			'nickname' : 'CotA',
			'bonus' : ' Spell Hero Damage',
			'ad' : .3,
			'effect' : .2,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'hero_type' : 'spell'
			}
		},
		'ttt' : {
			'active' : 1,
			'sort' : 18,
			'name' : 'Tiny Titan Tree',
			'nickname' : 'TTT',
			'bonus' : ' Ground Hero Damage',
			'ad' : .3,
			'effect' : .2,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'hero_type' : 'ground'
			}
		},
		'hh' : {
			'active' : 1,
			'sort' : 19,
			'name' : 'Helm of Hermes',
			'nickname' : 'HoH',
			'bonus' : ' Flying Hero Damage',
			'ad' : .3,
			'effect' : .2,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'hero_type' : 'flying'
			}
		},
		'foe' : {
			'active' : 1,
			'sort' : 20,
			'name' : 'Fruit of Eden',
			'nickname' : 'FoE',
			'bonus' : ' Pet Damage',
			'ad' : .5,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 2,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'pet'
			}
		},
		'ie' : {
			'active' : 1,
			'sort' : 21,
			'name' : 'Influential Elixir',
			'nickname' : 'IE',
			'bonus' : ' Clan Ship Damage',
			'ad' : .5,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'ship'
			}
		},
		'orc' : {
			'active' : 1,
			'sort' : 22,
			'name' : 'O\'Ryan\'s Charm',
			'nickname' : 'oRC',
			'bonus' : ' Companion Damage',
			'ad' : .5,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 1.8,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'companion'
			}
		},
		'hos2' : {
			'active' : 1,
			'sort' : 23,
			'name' : 'Heart of Storms',
			'nickname' : 'HoS',
			'bonus' : ' Pet Damage Bonuses',
			'ad' : .5,
			'effect' : .005,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 2.2,
			'type' : 'multiply',
			'expo' : {
				'sum' : 'pet_dmg'
			}
		},
		'ao' : {
			'active' : 1,
			'sort' : 24,
			'name' : 'Apollo Orb',
			'nickname' : 'AO',
			'bonus' : ' Pet Gold Bonuses',
			'ad' : .5,
			'effect' : .02,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .7,
			'cexpo' : 2.2,
			'type' : 'multiply',
			'expo' : {
				'sum' : 'pet_gold'
			}
		},
		'af' : {
			'active' : 1,
			'sort' : 25,
			'name' : 'Avian Feather',
			'nickname' : 'AF',
			'bonus' : ' Inactive Damage',
			'ad' : .3,
			'effect' : .2,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'flat' : 'inactive'
			}
		},
		'hos' : {
			'active' : 1,
			'sort' : 26,
			'name' : 'Corrupted Rune Heart',
			'nickname' : 'CRH',
			'bonus' : ' Splash Damage',
			'ad' : .3,
			'effect' : .00025,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.7,
			'type' : 'pct',
			'expo' : {
				'reduct' : 'splash'
			}
		},
		'td' : {
			'active' : 1,
			'sort' : 27,
			'name' : 'Durendal Sword',
			'nickname' : 'DS',
			'bonus' : ' Non-Boss Damage',
			'ad' : 1,
			'effect' : .24,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : 1,
			'cexpo' : 2,
			'type' : 'multiply',
			'expo' : {
				'flat' : 'hsk'
			}
		},
		'hs2' : {
			'active' : 1,
			'sort' : 28,
			'name' : 'Helheim Skull',
			'nickname' : 'HSk',
			'bonus' : ' Boss Damage',
			'ad' : 1,
			'effect' : .12,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : 1,
			'cexpo' : 2,
			'type' : 'multiply',
			'expo' : {
				'flat' : 'dmg'
			}
		},
		'roc' : {
			'active' : 1,
			'sort' : 29,
			'name' : 'Ring of Calisto',
			'nickname' : 'RoC',
			'bonus' : ' All Equipment Boost',
			'ad' : .5,
			'effect' : .01,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .65,
			'cexpo' : 2.2,
			'type' : 'multiply',
			'expo' : {
				'sum' : 'equip'
			}
		},
		'bod' : {
			'active' : 1,
			'sort' : 27,
			'name' : 'Blade of Damocles',
			'nickname' : 'BoD',
			'bonus' : ' Sword Boost',
			'ad' : .5,
			'effect' : .08,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .65,
			'cexpo' : 2,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'sword'
			}
		},
		'hom' : {
			'active' : 1,
			'sort' : 31,
			'name' : 'Helmet of Madness',
			'nickname' : 'HoM',
			'bonus' : ' Helmet Boost',
			'ad' : .5,
			'effect' : .08,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .65,
			'cexpo' : 2,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'helmet'
			}
		},
		'tp' : {
			'active' : 1,
			'sort' : 32,
			'name' : 'Titanium Plating',
			'nickname' : 'TP',
			'bonus' : ' Armor Boost',
			'ad' : .5,
			'effect' : .08,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .65,
			'cexpo' : 2,
			'type' : 'multiply',
			'expo' : {
				'flat' : 'gold'
			}
		},
		'as' : {
			'active' : 1,
			'sort' : 33,
			'name' : 'Amethyst Staff',
			'nickname' : 'ASt',
			'bonus' : ' Slash Boost',
			'ad' : .5,
			'effect' : .08,
			'max' : -1,
			'gmax' : 0.32,
			'grate' : .00015,
			'gexpo' : .5,
			'ccoef' : .65,
			'cexpo' : 2,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'companion'
			}
		},
		'ig' : {
			'active' : 1,
			'sort' : 34,
			'name' : 'Invader\'s Gjalarhorn',
			'nickname' : 'IG',
			'bonus' : ' All Active Skill Effect',
			'ad' : .2,
			'effect' : .02,
			'max' : -1,
			'gmax' : 0.36,
			'grate' : .00018,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.8,
			'type' : 'multiply',
			'expo' : {
				'sum' : 'skill'
			}
		},
		'tm' : {
			'active' : 1,
			'sort' : 35,
			'name' : 'Titan\'s Mask',
			'nickname' : 'TM',
			'bonus' : ' Heavenly Strike Damage',
			'ad' : .2,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'hs'
			}
		},
		'rt' : {
			'active' : 1,
			'sort' : 36,
			'name' : 'Royal Toxin',
			'nickname' : 'RT',
			'bonus' : ' Deadly Strike Effect',
			'ad' : .2,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'ds'
			}
		},
		'lp' : {
			'active' : 1,
			'sort' : 37,
			'name' : 'Laborer\'s Pendant',
			'nickname' : 'LP',
			'bonus' : ' Hand of Midas Gold Bonus',
			'ad' : .2,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'flat' : 'gold'
			}
		},
		'bor' : {
			'active' : 1,
			'sort' : 38,
			'name' : 'Bringer of Ragnarok',
			'nickname' : 'BoR',
			'bonus' : ' Fire Sword Damage',
			'ad' : .2,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'fs'
			}
		},
		'pof' : {
			'active' : 1,
			'sort' : 39,
			'name' : 'Parchment of Foresight',
			'nickname' : 'PoF',
			'bonus' : ' War Cry Damage',
			'ad' : .2,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'wc'
			}
		},
		'eoe' : {
			'active' : 1,
			'sort' : 40,
			'name' : 'Elixir of Eden',
			'nickname' : 'EoE',
			'bonus' : ' Shadow Clone Damage',
			'ad' : .2,
			'effect' : .1,
			'max' : -1,
			'gmax' : 0.4,
			'grate' : .0002,
			'gexpo' : .5,
			'ccoef' : .6,
			'cexpo' : 1.7,
			'type' : 'multiply',
			'expo' : {
				'reduct' : 'sc'
			}
		},
		'hoti' : {
			'active' : 1,
			'sort' : 41,
			'name' : 'Hourglass of the Impatient',
			'nickname' : 'HotI',
			'bonus' : ' All Active Skill Cooldown',
			'ad' : .8,
			'effect' : -0.02,
			'max' : 40,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .5,
			'cexpo' : 2.6,
			'type' : 'pct',
			'expo' : {
				'sum' : 'skill'
			}
		},
		'pt' : {
			'active' : 1,
			'sort' : 42,
			'name' : 'Phantom Timepiece',
			'nickname' : 'PT',
			'bonus' : 's All Active Skill Duration',
			'ad' : .8,
			'effect' : 1,
			'max' : 30,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : 1,
			'cexpo' : 3,
			'type' : 'add',
			'expo' : {
				'sum' : 'skill'
			}
		},
		'fs' : {
			'active' : 1,
			'sort' : 43,
			'name' : 'Forbidden Scroll',
			'nickname' : 'FS',
			'bonus' : 's Deadly Strike Duration',
			'ad' : 1.5,
			'effect' : 2,
			'max' : 30,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 2.4,
			'type' : 'add',
			'expo' : {
				'reduct' : 'ds'
			}
		},
		'rof' : {
			'active' : 1,
			'sort' : 44,
			'name' : 'Ring of Fealty',
			'nickname' : 'RoF',
			'bonus' : 's Hand of Midas Duration',
			'ad' : 1.5,
			'effect' : 2,
			'max' : 30,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 2.4,
			'type' : 'add',
			'expo' : {
				'flat' : 'gold'
			}
		},
		'ga' : {
			'active' : 1,
			'sort' : 45,
			'name' : 'Glacial Axe',
			'nickname' : 'GA',
			'bonus' : 's Fire Sword Duration',
			'ad' : 1.5,
			'effect' : 2,
			'max' : 30,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 2.4,
			'type' : 'add',
			'expo' : {
				'reduct' : 'fs'
			}
		},
		'a' : {
			'active' : 1,
			'sort' : 46,
			'name' : 'Aegis',
			'nickname' : 'A',
			'bonus' : 's War Cry Duration',
			'ad' : 1.5,
			'effect' : 2,
			'max' : 30,
			'gmax' : 0,
			'grate' : 0,
			'cexpo' : 2.4,
			'gexpo' : 1,
			'ccoef' : .6,
			'type' : 'add',
			'expo' : {
				'reduct' : 'wc'
			}
		},
		'sg' : {
			'active' : 1,
			'sort' : 47,
			'name' : 'Swamp Guantlet',
			'nickname' : 'SG',
			'bonus' : 's Shadow Clone Duration',
			'ad' : 1.5,
			'effect' : 2,
			'max' : 30,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 2.4,
			'type' : 'add',
			'expo' : {
				'reduct' : 'sc'
			}
		},
		'ip' : {
			'active' : 1,
			'sort' : 48,
			'name' : 'Infinity Pendulum',
			'nickname' : 'IP',
			'bonus' : ' Heavenly Strike Mana Cost',
			'ad' : .9,
			'effect' : -1,
			'max' : 20,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 3,
			'type' : 'add',
			'expo' : {
				'reduct' : 'hs'
			}
		},
		'gok' : {
			'active' : 1,
			'sort' : 49,
			'name' : 'Glove of Kuma',
			'nickname' : 'GoK',
			'bonus' : ' Deadly Strike Mana Cost',
			'ad' : .8,
			'effect' : -1,
			'max' : 30,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 3,
			'type' : 'add',
			'expo' : {
				'reduct' : 'ds'
			}
		},
		'ts' : {
			'active' : 1,
			'sort' : 50,
			'name' : 'Titan Spear',
			'nickname' : 'TS',
			'bonus' : ' Hand of Midas Mana Cost',
			'ad' : .8,
			'effect' : -1,
			'max' : 40,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 3,
			'type' : 'add',
			'expo' : {
				'flat' : 'gold'
			}
		},
		'os' : {
			'active' : 1,
			'sort' : 51,
			'name' : 'Oak Staff',
			'nickname' : 'OS',
			'bonus' : ' Fire Sword Mana Cost',
			'ad' : .8,
			'effect' : -1,
			'max' : 30,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 3,
			'type' : 'add',
			'expo' : {
				'reduct' : 'fs'
			}
		},
		'tac' : {
			'active' : 1,
			'sort' : 52,
			'name' : 'The Arcana Cloak',
			'nickname' : 'TAC',
			'bonus' : ' War Cry Mana Cost',
			'ad' : .8,
			'effect' : -1,
			'max' : 40,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 3,
			'type' : 'add',
			'expo' : {
				'reduct' : 'wc'
			}
		},
		'ho' : {
			'active' : 1,
			'sort' : 53,
			'name' : 'Hunter\'s Ointment',
			'nickname' : 'HO',
			'bonus' : ' Shadow Clone Mana Cost',
			'ad' : .8,
			'effect' : -1,
			'max' : 40,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 3,
			'type' : 'add',
			'expo' : {
				'reduct' : 'sc'
			}
		},
		'ae' : {
			'active' : 1,
			'sort' : 54,
			'name' : 'Ambrosia Elixir',
			'nickname' : 'AE',
			'bonus' : ' Mana Pool Cap',
			'ad' : .8,
			'effect' : 2,
			'max' : 40,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .6,
			'cexpo' : 3,
			'type' : 'add',
			'expo' : {
				'sum' : 'skill'
			}
		},
		'ms' : {
			'active' : 1,
			'sort' : 55,
			'name' : 'Mystic Staff',
			'nickname' : 'MS',
			'bonus' : ' Mana Regeneration',
			'ad' : 2,
			'effect' : .075,
			'max' : 40,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .5,
			'cexpo' : 2.6,
			'type' : 'add',
			'expo' : {
				'sum' : 'skill'
			}
		},
		'eof' : {
			'active' : 1,
			'sort' : 56,
			'name' : 'Egg of Fortune',
			'nickname' : 'EoF',
			'bonus' : ' Chesterson Chance',
			'ad' : 2,
			'effect' : .01,
			'max' : 10,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : 1.4,
			'cexpo' : 3,
			'type' : 'pct',
			'expo' : {
				'gold' : [
					'coc',
					'all'
				]
			}
		},
		'dc' : {
			'active' : 1,
			'sort' : 57,
			'name' : 'Divine Chalice',
			'nickname' : 'DC',
			'bonus' : ' 10x Gold Chance',
			'ad' : 1,
			'effect' : .01,
			'max' : 50,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .8,
			'cexpo' : 2.6,
			'type' : 'pct',
			'expo' : {
				'gold' : [
					'active'
				]
			}
		},
		'is' : {
			'active' : 1,
			'sort' : 58,
			'name' : 'Invader\'s Shield',
			'nickname' : 'IS',
			'bonus' : ' Multiple Fairy Chance',
			'ad' : 1.6,
			'effect' : 0.005,
			'max' : 50,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .5,
			'cexpo' : 2.1,
			'type' : 'pct',
			'expo' : {
				'flat' : 'active'
			}
		},
		'aom' : {
			'active' : 1,
			'sort' : 59,
			'name' : 'Axe of Muerte',
			'nickname' : 'AoM',
			'bonus' : ' Critical Chance',
			'ad' : 3,
			'effect' : 0.005,
			'max' : 20,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .8,
			'cexpo' : 2.5,
			'type' : 'pct',
			'expo' : {
				'reduct' : 'crit'
			}
		},
		'eotk' : {
			'active' : 1,
			'sort' : 60,
			'name' : 'Essence of the Kitsune',
			'nickname' : 'EotK',
			'bonus' : ' Multi-Spawn Chance',
			'ad' : 3,
			'effect' : .005,
			'max' : 20,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .8,
			'cexpo' : 2.5,
			'type' : 'pct',
			'expo' : {
				'flat' : 'dmg'
			}
		},
		'lkm' : {
			'active' : 1,
			'sort' : 61,
			'name' : 'Lost King\'s Mask',
			'nickname' : 'LKM',
			'bonus' : ' All Upgrade Cost',
			'ad' : .8,
			'effect' : -.02,
			'max' : 40,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .5,
			'cexpo' : 3,
			'type' : 'pct',
			'expo' : {
				'flat' : 'dmg'
			}
		},
		'sor' : {
			'active' : 1,
			'sort' : 62,
			'name' : 'Staff of Radiance',
			'nickname' : 'SoR',
			'bonus' : ' Hero Upgrade Cost',
			'ad' : .8,
			'effect' : -.02,
			'max' : 40,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .5,
			'cexpo' : 2.6,
			'type' : 'pct',
			'expo' : {
				'reduct' : 'hero'
			}
		},
		'tms' : {
			'active' : 1,
			'sort' : 63,
			'name' : 'The Master\'s Sword',
			'nickname' : 'TMS',
			'bonus' : ' Sword Master Upgrade Cost',
			'ad' : 2,
			'effect' : -.02,
			'max' : 40,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .5,
			'cexpo' : 2.6,
			'type' : 'pct',
			'expo' : {
				'reduct' : 'tap'
			}
		},
		'as2' : {
			'active' : 1,
			'sort' : 64,
			'name' : 'Aram Spear',
			'nickname' : 'ASp',
			'bonus' : ' All Titan HP',
			'ad' : 2,
			'effect' : -.02,
			'max' : 40,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .5,
			'cexpo' : 2.6,
			'type' : 'pct',
			'expo' : {
				'flat' : 'dmg'
			}
		},
		'wod' : {
			'active' : 1,
			'sort' : 65,
			'name' : 'Ward of Darkness',
			'nickname' : 'WoD',
			'bonus' : 's Boss Timer Duration',
			'ad' : 2,
			'effect' : 1,
			'max' : 60,
			'gmax' : 0,
			'grate' : 0,
			'gexpo' : 1,
			'ccoef' : .5,
			'cexpo' : 2.6,
			'type' : 'add',
			'expo' : {
				'flat' : 'dmg'
			}
		}
	}
};

var artifact_costs = {
	'0' : -1,
	'1' : 1,
	'2' : 3,
	'3' : 6,
	'4' : 11,
	'5' : 19,
	'6' : 30,
	'7' : 46,
	'8' : 69,
	'9' : 102,
	'10' : 148,
	'11' : 214,
	'12' : 306,
	'13' : 434,
	'14' : 613,
	'15' : 861,
	'16' : 1203,
	'17' : 1675,
	'18' : 2323,
	'19' : 3212,
	'20' : 4430,
	'21' : 6094,
	'22' : 8363,
	'23' : 11454,
	'24' : 15657,
	'25' : 21365,
	'26' : 29108,
	'27' : 39599,
	'28' : 53796,
	'29' : 72990,
	'30' : 98914,
	'31' : 133897,
	'32' : 181063,
	'33' : 244605,
	'34' : 330143,
	'35' : 445208,
	'36' : 599886,
	'37' : 807680,
	'38' : 1086657,
	'39' : 1460982,
	'40' : 1962961,
	'41' : 2801512,
	'42' : 4271796,
	'43' : 6546742,
	'44' : 10084102,
	'45' : 15611565,
	'46' : 24291381,
	'47' : 37988598,
	'48' : 59710114,
	'49' : 94326541,
	'50' : 149764436,
	'51' : 238984254,
	'52' : 383276658,
	'53' : 617780678,
	'54' : 1000762985,
	'55' : 1629292101,
	'56' : 2665833882,
	'57' : 4383580899,
	'58' : 7244059100,
	'59' : 12030591779,
	'60' : 20078853673,
	'61' : 33676929221,
	'62' : 56762601881,
	'63' : 96144140647,
	'64' : 163647145909,
	'65' : 279906771691,
	'66' : -1
};

// x = 1.4067499999999975
// x += 0.00395
// a = 66
// a * Math.pow(x, a++)
