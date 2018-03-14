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
			'name' : '暗影之书',
			'nickname' : 'BoS',
			'bonus' : ' 蜕变圣物',
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
			'name' : '瓦如恩之石',
			'nickname' : 'SotV',
			'bonus' : ' 巨人黄金',
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
			'name' : '满足宝箱',
			'nickname' : 'CoC',
			'bonus' : ' 宝箱兽黄金数量',
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
					'splash',
					'inactive',
					'all'
				]
			}
		},
		'hs' : {
			'active' : 1,
			'sort' : 4,
			'name' : '英勇之盾',
			'nickname' : 'HSh',
			'bonus' : ' 头目黄金',
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
			'name' : '预言之书',
			'nickname' : 'BoP',
			'bonus' : ' 所有黄金',
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
			'name' : '扎金索斯的金币',
			'nickname' : 'ZC',
			'bonus' : ' 离线黄金',
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
			'name' : '崇高仙子徽章',
			'nickname' : 'GFM',
			'bonus' : ' 仙女黄金',
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
			'name' : '惠比须神银币',
			'nickname' : 'CoE',
			'bonus' : ' 溅射金币',
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
			'name' : '天堂之剑',
			'nickname' : 'HSw',
			'bonus' : ' 神器伤害',
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
			'name' : '神圣报应',
			'nickname' : 'DR',
			'bonus' : ' 所有攻击力',
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
			'name' : '醉汉榔头',
			'nickname' : 'DH',
			'bonus' : ' 点击伤害',
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
			'name' : '萨摩赛克之剑',
			'nickname' : 'SS',
			'bonus' : ' 剑术攻击伤害',
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
			'name' : '复仇者',
			'nickname' : 'TR',
			'bonus' : ' 暴击伤害',
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
			'name' : '英雄之刃',
			'nickname' : 'HB',
			'bonus' : ' 所有英雄伤害',
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
			'name' : '风暴之剑',
			'nickname' : 'TSoS',
			'bonus' : ' 近战英雄伤害',
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
			'name' : '复仇女神之弓',
			'nickname' : 'FB',
			'bonus' : ' 远程英雄伤害',
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
			'name' : '古代护身符',
			'nickname' : 'CotA',
			'bonus' : ' 法术英雄伤害',
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
			'name' : '迷你世界树',
			'nickname' : 'TTT',
			'bonus' : ' 地面英雄伤害',
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
			'name' : '埃尔密斯头盔',
			'nickname' : 'HoH',
			'bonus' : ' 飞行英雄伤害',
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
			'name' : '伊甸之果',
			'nickname' : 'FoE',
			'bonus' : ' 宠物伤害',
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
			'name' : '感化灵药',
			'nickname' : 'IE',
			'bonus' : ' 部落大船伤害',
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
			'name' : '奥莱恩护身符',
			'nickname' : 'oRC',
			'bonus' : ' 同伴伤害',
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
			'name' : '风暴之心',
			'nickname' : 'HoS',
			'bonus' : ' 所有伤害型宠物效果',
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
			'name' : '太阳神之石',
			'nickname' : 'AO',
			'bonus' : ' 黄金宠物效果加成',
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
			'name' : '仙鸟羽毛',
			'nickname' : 'AF',
			'bonus' : ' 离线伤害',
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
			'name' : '腐败的符文心',
			'nickname' : 'CRH',
			'bonus' : ' 溅射伤害',
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
			'name' : '迪朗达尔之剑',
			'nickname' : 'DS',
			'bonus' : ' 非魔王伤害',
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
			'name' : '冥界头骨',
			'nickname' : 'HSk',
			'bonus' : ' Boss伤害',
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
			'name' : '卡利斯托之戒',
			'nickname' : 'RoC',
			'bonus' : ' 所有装备效果',
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
			'name' : '达摩克利斯之剑',
			'nickname' : 'BoD',
			'bonus' : ' 刀剑装备加成',
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
			'name' : '疯狂头盔',
			'nickname' : 'HoM',
			'bonus' : ' 头盔加成',
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
			'name' : '钛钢镀饰',
			'nickname' : 'TP',
			'bonus' : ' 盔甲加成',
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
			'name' : '紫晶之杖',
			'nickname' : 'ASt',
			'bonus' : ' 劈砍装备加成',
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
			'name' : '入侵者的海姆达尔之角',
			'nickname' : 'IG',
			'bonus' : ' 所有主动技能效果',
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
			'name' : '巨人面具',
			'nickname' : 'TM',
			'bonus' : ' 天堂圣击伤害',
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
			'name' : '皇室毒药',
			'nickname' : 'RT',
			'bonus' : ' 致命打击效果',
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
			'name' : '工人垂饰',
			'nickname' : 'LP',
			'bonus' : ' 米达斯之手加成',
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
			'name' : '诸神黄昏使者',
			'nickname' : 'BoR',
			'bonus' : ' 火焰之剑伤害',
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
			'name' : '预知羊皮纸',
			'nickname' : 'PoF',
			'bonus' : ' 战嚎伤害加成',
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
			'name' : '伊甸灵丹',
			'nickname' : 'EoE',
			'bonus' : ' 影分身伤害',
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
			'name' : '急速沙漏',
			'nickname' : 'HotI',
			'bonus' : ' 全主动技能冷却速率',
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
			'name' : '幻影时钟',
			'nickname' : 'PT',
			'bonus' : '秒 所有主动技能持续时间',
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
			'name' : '禁忌卷轴',
			'nickname' : 'FS',
			'bonus' : '秒 致命打击持续时间',
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
			'name' : '效忠指环',
			'nickname' : 'RoF',
			'bonus' : '秒 米达斯之手持续时间',
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
			'name' : '冰川之斧',
			'nickname' : 'GA',
			'bonus' : '秒 火焰之剑持续时间',
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
			'name' : '神盾',
			'nickname' : 'A',
			'bonus' : '秒 战嚎持续时间',
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
			'name' : '沼泽手套',
			'nickname' : 'SG',
			'bonus' : '秒 影分身术持续时间',
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
			'name' : '无限钟摆',
			'nickname' : 'IP',
			'bonus' : ' 天堂圣击法力消耗',
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
			'name' : '大熊手套',
			'nickname' : 'GoK',
			'bonus' : ' 致命打击法力消耗',
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
			'name' : '巨人之矛',
			'nickname' : 'TS',
			'bonus' : ' 米达斯之手法力消耗',
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
			'name' : '橡木杖',
			'nickname' : 'OS',
			'bonus' : ' 火焰之剑法力消耗',
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
			'name' : '奥秘斗篷',
			'nickname' : 'TAC',
			'bonus' : ' 战嚎法力消耗',
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
			'name' : '猎人药膏',
			'nickname' : 'HO',
			'bonus' : ' 影分身术法力消耗',
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
			'name' : '众神灵药',
			'nickname' : 'AE',
			'bonus' : ' 法力池上限',
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
			'name' : '神秘法杖',
			'nickname' : 'MS',
			'bonus' : ' 法力回复',
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
			'name' : '幸运之卵',
			'nickname' : 'EoF',
			'bonus' : ' 宝箱兽几率',
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
			'name' : '圣杯',
			'nickname' : 'DC',
			'bonus' : ' 10x 黄金几率',
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
			'name' : '入侵者之盾',
			'nickname' : 'IS',
			'bonus' : ' 多重重生几率',
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
			'name' : '死亡之斧',
			'nickname' : 'AoM',
			'bonus' : ' 暴击几率',
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
			'name' : '神狐精华',
			'nickname' : 'EotK',
			'bonus' : ' 多重重生几率',
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
			'name' : '失落的王者面具',
			'nickname' : 'LKM',
			'bonus' : ' 全升级费用',
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
			'name' : '光辉之杖',
			'nickname' : 'SoR',
			'bonus' : ' 英雄升级花费',
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
			'name' : '大师之剑',
			'nickname' : 'TMS',
			'bonus' : ' 主角升级成本',
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
			'name' : '亚兰之矛',
			'nickname' : 'ASp',
			'bonus' : ' 所有怪物HP',
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
			'name' : '黑暗守卫',
			'nickname' : 'WoD',
			'bonus' : '秒 Boss 持续时间',
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
