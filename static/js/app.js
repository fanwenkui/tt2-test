var winner_e = '';
var winner_n = '';
var winner_s1 = '';
var winner_s2 = '';
var winner_s3 = '';
var winner_s4 = ''; 
var winner_s5 = '';
var winner_value = 0;
var winner_svalue = 0;
var obfuscate = 0;
var white_rabbit = 0;

function toggleDark() {
	$('body').removeClass('bg-dark text-light');
	$('.sticky-top').removeClass('bg-dark');
	$('.card').removeClass('bg-dark');
	$('.nav-link').removeClass('text-light');
	$('table').removeClass('table-dark');
	if($('#wolf').prop('checked') == true) {
		$('body').addClass('bg-dark text-light');
		$('.sticky-top').addClass('bg-dark');
		$('.card').addClass('bg-dark');
		$('.nav-link').addClass('text-light');
		$('table').addClass('table-dark');
		$('#btnwolf').removeClass('btn-dark text-secondary').addClass('btn-danger');
		$('#btnlamb').removeClass('btn-info').addClass('btn-light text-secondary');
	} else {
		$('#btnlamb').removeClass('btn-light text-secondary').addClass('btn-info');
		$('#btnwolf').removeClass('btn-danger').addClass('btn-dark text-secondary');
	}
	storeData();
}

function toggleSplash(reweight) {
	if($('#wet').prop('checked') == true) {
		$('#btnwet').removeClass('btn-dark text-secondary').addClass('btn-info');
		$('#btndry').removeClass('btn-info').addClass('btn-dark text-secondary');
	} else {
		$('#btndry').removeClass('btn-dark text-secondary').addClass('btn-info');
		$('#btnwet').removeClass('btn-info').addClass('btn-dark text-secondary');
	}
	if(false != reweight) {
		adjustWeights();
	}
}

function generateArtifacts() {
	$('#accept2').hide();
	$('#artifacts').empty();
	$('#daltifacts').empty();
	$.each(artifacts.data, function(k,v) {
		if(isNaN(v.level)) {
			v.level = 0;
		}
		var row = '<tr class="' + (1 == v.active ? '' : 'text-dark bg-secondary') + '" id="'+ k + 'row">';
			row += '<td>';
				row += '<input type="checkbox" aria-label="Checkbox to designate active status for ' + v.name + '" id="' + k + 'active"' + (v.active == 1 ? ' checked="checked"' : '') + ' onchange="updateActive(\'' + k + '\');" tabindex="-1">';
			row += '</td>';
			row += '<td>';
				row += '<label for="' + k + 'active" id="basic-addon' + k + '">';
					row += '<span class="d-block d-sm-none">' + v.nickname + '</span>';
					row += '<span class="d-none d-sm-block">' + v.name + '</span>';
				row += '</label>';
			row += '</td>';
			row += '<td>';
				row += '<input' + (1 == v.active ? '' : ' readonly="readonly"') + ' id="' + k + '" value="' + v.level + '" type="tel" class="form-control artlvl" placeholder="0" aria-label="Level of ' + v.name + '" aria-describedby="basic-addon' + k + '"onchange="updateArtifact(\'' + k + '\')">';
			row += '</td>';
			row += '<td>';
				row += '<span class="badge" id="' + k + 'expo"></span>';
			row += '</td>';
			row += '<td>';
				row += '<button class="badge badge-secondary" type="button" data-toggle="collapse" data-target="#' + k + 'info" aria-expanded="false" aria-controls="' + k + 'info" tabindex="-1">&#x00A0;i&#x00A0;</button>';
			row += '</td>';
		row += '</tr>';
		row += '<tr class="collapse" id="' + k + 'info">';
			row += '<td colspan="5">';
				row += '<dl class="row">';
					row += '<dt class="col-3 col-sm-6 text-right">Name</dt>';
					row += '<dd class="col-9 col-sm-6">' + v.name + '</dd>';
					row += '<dt class="col-3 col-sm-6 text-right">Effect</dt>';
					row += '<dd class="col-9 col-sm-6" id="' + k + 'effect"></dd>';
					row += '<dt class="col-3 col-sm-6 text-right">';
						row += '<span class="d-block d-sm-none">AD</span>';
						row += '<span class="d-none d-sm-block">Artifact Damage</span>';
					row += '</dt>';
					row += '<dd class="col-9 col-sm-6" id="' + k + 'ad"></dd>';
					row += '<dt class="col-3 col-sm-6 text-right">';
						row += '<span class="d-block d-sm-none">Cost</span>';
						row += '<span class="d-none d-sm-block">Cost to Upgrade</span>';
					row += '</dt>';
					row += '<dd class="col-9 col-sm-6" id="' + k + 'cost"></dd>';
					row += '<dt class="col-3 col-sm-6 text-right">';
						row += '<span class="d-block d-sm-none">Effc.</span>';
						row += '<span class="d-none d-sm-block">Efficiency</span>';
					row += '</dt>';
					row += '<dd class="col-9 col-sm-6" id="' + k + 'eff"></dd>';
				row += '</dl>';
			row += '</td>';
		row += '</tr>';
		$('#artifacts').append(row);
    var div = '<div class="col-3 col-sm-2 col-lg-1 border text-center">';
    div += '<strong>' + v.nickname + '</strong><br><span id="' + k + 'dalt">' + displayTruncated(v.level) + '</span>';
    div += '</div>'
		$('#daltifacts').append(div);
	});
}

function generateSkills() {
	$('#skills').empty();
	$.each(skills.data, function(k,v) {
		if(isNaN(v.level)) {
			v.level = 0;
		}
		var row = '<tr class="' + (1 == v.active ? '' : 'text-dark bg-secondary') + '" id="skill'+ k + 'row">';
			row += '<td>';
				row += '<input type="checkbox" aria-label="Checkbox to designate active status for ' + v.name + '" id="skill' + k + 'active"' + (v.active == 1 ? ' checked="checked"' : '') + ' onchange="updateActiveSkill(\'' + k + '\');" tabindex="-1">';
			row += '</td>';
			row += '<td>';
				row += '<label for="skill' + k + 'active" id="basic-addonskill' + k + '">';
					row += '<span class="d-block d-sm-none">' + v.nickname + '</span>';
					row += '<span class="d-none d-sm-block">' + v.name + '</span>';
				row += '</label>';
			row += '</td>';
			row += '<td>';
				row += '<input' + (1 == v.active ? '' : ' readonly="readonly"') + ' id="skill' + k + '" value="' + v.level + '" type="tel" class="form-control artlvl" placeholder="0" aria-label="Level of ' + v.name + '" aria-describedby="basic-addonskill' + k + '"onchange="updateSkill(\'' + k + '\')">';
			row += '</td>';
			row += '<td>';
				row += '<span class="badge" id="skill' + k + 'expo"></span>';
			row += '</td>';
			row += '<td>';
				row += '<button class="badge badge-secondary" type="button" data-toggle="collapse" data-target="#skill' + k + 'info" aria-expanded="false" aria-controls="skill' + k + 'info" tabindex="-1">&#x00A0;i&#x00A0;</button>';
			row += '</td>';
		row += '</tr>';
		row += '<tr class="collapse" id="skill' + k + 'info">';
			row += '<td colspan="5">';
				row += '<dl class="row">';
					row += '<dt class="col-3 col-sm-6 text-right">Name</dt>';
					row += '<dd class="col-9 col-sm-6">' + v.name + '</dd>';
					row += '<dt class="col-3 col-sm-6 text-right">Effect</dt>';
					row += '<dd class="col-9 col-sm-6" id="skill' + k + 'effect"></dd>';
					row += '<dt class="col-3 col-sm-6 text-right">Effect2</dt>';
					row += '<dd class="col-9 col-sm-6" id="skill' + k + 'effect2"></dd>';
					row += '<dt class="col-3 col-sm-6 text-right">Effect3</dt>';
					row += '<dd class="col-9 col-sm-6" id="skill' + k + 'effect3"></dd>';
					row += '<dt class="col-3 col-sm-6 text-right">';
						row += '<span class="d-block d-sm-none">Cost</span>';
						row += '<span class="d-none d-sm-block">Cost to Upgrade</span>';
					row += '</dt>';
					row += '<dd class="col-9 col-sm-6" id="skill' + k + 'cost"></dd>';
					row += '<dt class="col-3 col-sm-6 text-right">';
						row += '<span class="d-block d-sm-none">Effc.</span>';
						row += '<span class="d-none d-sm-block">Efficiency</span>';
					row += '</dt>';
					row += '<dd class="col-9 col-sm-6" id="skill' + k + 'eff"></dd>';
				row += '</dl>';
			row += '</td>';
		row += '</tr>';
		$('#skills').append(row);
	});
}

function adjustBoS() {
	var i = artifacts.data.bos.expo.sum_sort;
	var expo = 0
	$.each(artifacts.data, function(k,v) {
		if(v.sort <= i && k != 'bos' && v.active == 1) {
			expo += v.rating;
		}
	});
	artifacts.data.bos.rating = expo;
	artifacts = calculate(artifacts, 'bos', true, true);
}

function updateActive(k) {
	if($('#' + k + 'active').is(':checked')) {
		artifacts.data[k].active = 1;
		$('#' + k + 'row').removeClass('text-dark bg-secondary');
		$('#' + k).prop('readonly', false);
	} else {
		artifacts.data[k].active = 0;
		$('#' + k + 'row').addClass('text-dark bg-secondary');
		$('#' + k).prop('readonly', true);
	}
	adjustBoS();
	artifacts = calculate(artifacts, k, true, true);
}

function updateActiveSkill(k) {
	if($('#skill' + k + 'active').is(':checked')) {
		skills.data[k].active = 1;
		$('#skill' + k + 'row').removeClass('text-dark bg-secondary');
		$('#skill' + k).prop('readonly', false);
	} else {
		skills.data[k].active = 0;
		$('#skill' + k + 'row').addClass('text-dark bg-secondary');
		$('#skill' + k).prop('readonly', true);
	}
	calculateAllSkills();
}

function checkAllArtifacts() {
	$.each(artifacts.data, function(k,v) {
		$('#' + k + 'active').prop('checked', true);
		artifacts.data[k].active = 1;
		$('#' + k + 'row').removeClass('text-dark bg-secondary');
		$('#' + k).prop('readonly', false);
	});
	artifacts = calculateAll(artifacts, true);
}

function checkAllSkills() {
	$.each(skills.data, function(k,v) {
		$('#skill' + k + 'active').prop('checked', true);
		skills.data[k].active = 1;
		$('#skill' + k + 'row').removeClass('text-dark bg-secondary');
		$('#skill' + k).prop('readonly', false);
	});
	calculateAllSkills();
}

function resetSkills() {
	$.each(skills.data, function(k,v) {
		skills.data[k].level = 0;
	});
	calculateSkillTotals();
	calculateAllSkills();
}

function dalViewArtifact(litmus) {
  if(litmus) {
    $('#dal-tab').tab('show');
  } else {
    $('#artifacts-tab').tab('show');
  }
}

function regenerateArtifacts() {
	$.each(artifacts.data, function(k,v) {
		if(isNaN(v.level)) {
			v.level = 0;
		}
		$('#' + k).val(v.level);
		$('#' + k + 'dalt').text(displayTruncated(v.level));
		var value = '';
		if(0 < v.level && undefined != v.current_effect) {
			value = displayEffect(v.current_effect, v.type);
		}
		value += v.bonus;
		$('#' + k + 'effect').empty().append(value);
		value = '';
		if(0 < v.level && undefined != v.current_ad) {
			value = displayPct(v.current_ad);
		}
		$('#' + k + 'ad').empty().append(value);
		value = '';
		if(1 == v.active && undefined != v.displayCost) {
			value = v.displayCost + ' Relics';
		}
		$('#' + k + 'cost').empty().append(value);
		value = '';
		if(1 == v.active && undefined != v.efficiency) {
			value = v.efficiency.toExponential(12);
		}
		$('#' + k + 'eff').empty().append(value);
		value = '';
		if(undefined != v.rating) {
			value = v.rating.toFixed(2).replace(/\.?0+$/, '');
		}
		$('#' + k + 'expo').empty().append(value).removeClass().addClass('badge').addClass('badge-' + v.color);
	});
	storeData();
}

function regenerateSkills() {
	$.each(skills.data, function(k,v) {
		if(isNaN(v.level)) {
			v.level = 0;
		}
		$('#skill' + k).val(v.level);
		$('#' + v.nickname).text(v.level);
		var value = '';
		if(0 < v.level && undefined != v.current_effect) {
			value = displayEffect(v.current_effect, v.type);
		}
		value += v.bonus;
		$('#skill' + k + 'effect').empty().append(value);
		var value = '';
		if(0 < v.level && undefined != v.current_effect2 && false != v.current_effect2 && -1 != v.current_effect2) {
			value = displayEffect(v.current_effect2, v.type2);
		}
		value += (-1 != v.bonus2 ? v.bonus2 : '');
		$('#skill' + k + 'effect2').empty().append(value);
		var value = '';
		if(0 < v.level && undefined != v.current_effect3 && false != v.current_effect3 && -1 != v.current_effect3) {
			value = displayEffect(v.current_effect3, v.type3);
		}
		value += (-1 != v.bonus3 ? v.bonus3 : '');
		$('#skill' + k + 'effect3').empty().append(value);
		value = '';
		if(1 == v.active && undefined != v.cost) {
			value = v.cost + ' SP';
		}
		$('#skill' + k + 'cost').empty().append(value);
		value = '';
		if(1 == v.active && undefined != v.efficiency) {
			value = v.efficiency.toExponential(12);
		}
		$('#skill' + k + 'eff').empty().append(value);
		value = '';
		if(undefined != v.rating) {
			value = v.rating.toFixed(2).replace(/\.?0+$/, '');
		}
		$('#skill' + k + 'expo').empty().append(value).removeClass().addClass('badge').addClass('badge-' + ('info' == v.color ? 'success' : v.color));
	});
	storeData();
}

function updateArtifact(k) {
	artifacts.data[k].level = parseInt($('#' + k).val());
	artifacts.totalAD = calculateTotalAD(artifacts.data, true);
	artifacts = calculate(artifacts, k, true, true);
}

function updateSkill(k) {
	skills.data[k].level = parseInt($('#skill' + k).val());
	adjustWeights();
}
function countArtifacts(data) {
	var i = 0;
	$.each(data, function(k,v) {
		if(v.level > 0) {
			i++;
		}
	});
	return(i);
}

function determineAverage(data) {
	var i = countArtifacts(data);
	var x = 0;
	var y = 0;
	$.each(data, function(k,v) {
		obfuscate++;
		if(v.level > 0) {
			x += v.level;
		}
	});
	if(i > 0 && x > 0) {
		y = x / i;
	}
	return(y);
}

function optimize() {
	while(buffer-- > 0 && relics >= temp_artifacts.data[winner_e].cost) {
		obfuscate++;
		if(undefined == upgrades[winner_e]) {
			upgrades[winner_e] = 1;
		} else {
			upgrades[winner_e]++;
		}
		relics -= temp_artifacts.data[winner_e].cost;
		temp_artifacts.data[winner_e].level++;
		temp_artifacts = calculate(temp_artifacts, winner_e, false, false);
	}
 	if(relics >= temp_artifacts.data[winner_e].cost) {
		var progress = (1 - (relics > 0 ? relics / orelics : 0 / orelics)) * 100;
		$('#progress').width(progress + '%');
		$('#progress').prop('aria-valuenow', progress);
		buffer = obuffer;
		window.setTimeout(optimize, 1);
	} else {
		var progress = 100;
		$('#progress').width(progress + '%');
		$('#progress').prop('aria-valuenow', progress);
		$('#progress').removeClass('progress-bar-striped progress-bar-animated');
		renderSuggestions();
	}
}

function generateUpgrades() {
	obfuscate = 0;
	white_rabbit = new Date();
	$('#export_wrap').hide();
	$('#import_wrap').hide();
	$('#new_artifact').empty();
	$('#pudding').empty();
	$('#accept').empty();
	$('#suggestions').empty();
	$('#progressBar').hide();
	$('#progress').width('0%');
	$('#progress').prop('aria-valuenow', 0);
	$('#progress').addClass('progress-bar-striped progress-bar-animated');
	$('#progressBar').show();
	$('#relicsuggs').show();
	$('#relicreccs').hide();
	storeData();
	if(winner_n != '' || 1 > artifacts.data.bos.level) {
		$('#new_artifact').empty().append('<em>NOTE: You would be better off saving up for a new artifact.</em>');
	}
	var forceBOS = parseInt($('#forcebos').val());
	relics = new Decimal(('' == $('#relics').val() ? 0 : $('#relics').val()) + '.' + ('' == $('#relics_decimal').val() ? 0 : $('#relics_decimal').val()));
	buffer = 0;
	switch($('#relic_factor').val()) {
		case '_':
			relics = relics.toNumber();
			buffer = 10;
			break;
		case 'K':
			relics = relics.mul(1000).toNumber();
			buffer = 100;
			break;
		case 'M':
			relics = relics.mul(1000000).toNumber();
			buffer = 250;
			break;
		case 'B':
			relics = relics.mul(1000000000).toNumber();
			buffer = 500;
			break;
		case 'T':
			relics = relics.mul(1000000000000).toNumber();
			buffer = 750;
			break;
		case 'e13':
			relics = relics.mul(10000000000000).toNumber();
			buffer = 1000;
			break;
		case 'e14':
			relics = relics.mul(100000000000000).toNumber();
			buffer = 2500;
			break;
		case 'e15':
			relics = relics.mul(1000000000000000).toNumber();
			buffer = 5000;
			break;
		case 'e16':
			relics = relics.mul(10000000000000000).toNumber();
			buffer = 7500;
			break;
		case 'e17':
			relics = relics.mul(100000000000000000).toNumber();
			buffer = 10000;
			break;
		case 'e18':
			relics = relics.mul(1000000000000000000).toNumber();
			buffer = 25000;
			break;
		case 'e19':
			relics = relics.mul(10000000000000000000).toNumber();
			buffer = 50000;
			break;
		case 'e20':
			relics = relics.mul(100000000000000000000).toNumber();
			buffer = 75000;
			break;
		case 'e21':
			relics = relics.mul(1000000000000000000000).toNumber();
			buffer = 100000;
			break;
		case 'e22':
			relics = relics.mul(10000000000000000000000).toNumber();
			buffer = 125000;
			break;
		case 'e23':
			relics = relics.mul(100000000000000000000000).toNumber();
			buffer = 150000;
			break;
		case 'e24':
			relics = relics.mul(1000000000000000000000000).toNumber();
			buffer = 175000;
			break;
		case 'e25':
			relics = relics.mul(10000000000000000000000000).toNumber();
			buffer = 250000;
			break;
		case 'e26':
			relics = relics.mul(100000000000000000000000000).toNumber();
			buffer = 500000;
			break;
		case 'e27':
			relics = relics.mul(1000000000000000000000000000).toNumber();
			buffer = 750000;
			break;
		case 'e28':
			relics = relics.mul(10000000000000000000000000000).toNumber();
			buffer = 1000000;
			break;
		case 'e29':
			relics = relics.mul(100000000000000000000000000000).toNumber();
			buffer = 1250000;
			break;
		case 'e30':
			relics = relics.mul(1000000000000000000000000000000).toNumber();
			buffer = 1500000;
			break;
		case 'e31':
			relics = relics.mul(10000000000000000000000000000000).toNumber();
			buffer = 1750000;
			break;
		case 'e32':
			relics = relics.mul(100000000000000000000000000000000).toNumber();
			buffer = 2500000;
			break;
		case 'e33':
			relics = relics.mul(1000000000000000000000000000000000).toNumber();
			buffer = 5000000;
			break;
		case 'e34':
			relics = relics.mul(10000000000000000000000000000000000).toNumber();
			buffer = 7500000;
			break;
		case 'e35':
			relics = relics.mul(100000000000000000000000000000000000).toNumber();
			buffer = 10000000;
			break;
		case 'e36':
			relics = relics.mul(1000000000000000000000000000000000000).toNumber();
			buffer = 12500000;
			break;
		case 'e37':
			relics = relics.mul(10000000000000000000000000000000000000).toNumber();
			buffer = 25000000;
			break;
		case 'e38':
			relics = relics.mul(100000000000000000000000000000000000000).toNumber();
			buffer = 75000000;
			break;
		case 'e39':
			relics = relics.mul(1000000000000000000000000000000000000000).toNumber();
			buffer = 100000000;
			break;
	}
	orelics = relics;
	obuffer = buffer;
	upgrades = {};
	temp_artifacts = $.extend(true, {}, artifacts);
	var litmus = false;
	$.each(temp_artifacts.data, function(k,v) {
		if(v.level > 0) { litmus = true; }
	});
	if(false == litmus) {
		$('#suggestions').empty().append('<p>You must have at least 1 artifact enabled to use this.</p>');
		return
	}
	optimize();
}

function renderSuggestions() {
	var step = (null == $('#ocd').val() ? 1 : $('#ocd').val());
	if(1 != step) {
		$.each(artifacts.data, function(k,v) {
			obfuscate++;
			if(k in upgrades) {
				var x = Math.floor(temp_artifacts.data[k].level/step) * step;
				if(x > artifacts.data[k].level) {
					temp_artifacts.data[k].level = x;
					temp_artifacts = calculate(temp_artifacts, k, false, false);
					upgrades[k] = x - artifacts.data[k].level;
				} else if(-1 == artifacts.data[k].max) {
					delete upgrades[k];
				}
			}
		});
	}
	var suggestions = '';
	var litmus = false;
	$.each(upgrades, function(k,v) {
		litmus = true;
	});
	if(false == litmus) {
		$('#suggestions').empty().append('<p>You cannot afford to make the next best upgrade(s). Please try again when you have more relics or try lowering your rounding to see results.</p>');
		$('#accept').empty().append('<button type="button" class="btn btn-danger" onclick="rejectSuggestions();">Cancel</button>');
		relics = 0;
		return;
	}
	$.each(artifacts.data, function(k,v) {
		if(k in upgrades) {
			suggestions += '<div class="card border border-secondary ' + ($('#wolf').prop('checked') == true ? 'bg-dark' : '') + '">';
				suggestions += '<div class="card-header d-flex justify-content-between align-items-center" id="' + k + 'deetsh">';
					suggestions += '<span>';
						suggestions += '<span class="d-inline d-sm-none">' + v.nickname + '</span>';
						suggestions += '<span class="d-none d-sm-inline">' + v.name + '</span>';
						suggestions += ' <small>' + displayTruncated(v.level) + '&#x00A0;=>&#x00A0;' + displayTruncated(temp_artifacts.data[k].level) + '</small>';
						suggestions += '<span class="badge badge-' + v.color + ' ml-3">+' + upgrades[k] + '</span>';
					suggestions += '</span>';
					suggestions += '<button class="badge badge-secondary" type="button" data-toggle="collapse" data-target="#' + k + 'deets" aria-expanded="false" aria-controls="' + k + 'deets">&#x00A0;i&#x00A0;</button>';
				suggestions += '</div>';
				suggestions += '<div class="collapse" id="' + k + 'deets" aria-labelledby="' + k + 'deetsh" data-parent="#suggestions">';
					suggestions += '<div class="card-body">';
						suggestions += '<dl class="row">';
							suggestions += '<dt class="col-3 col-sm-6 text-right">Effect</dt>';
							suggestions += '<dd class="col-9 col-sm-6">' + displayEffect(artifacts.data[k].current_effect, artifacts.data[k].type) + ' => ' + displayEffect(temp_artifacts.data[k].current_effect, artifacts.data[k].type) + '</dd>';
							suggestions += '<dt class="col-3 col-sm-6 text-right">';
								suggestions += '<span class="d-block d-sm-none">AD</span>';
								suggestions += '<span class="d-none d-sm-block">Artifact Damage</span>';
							suggestions += '</dt>';
							suggestions += '<dd class="col-9 col-sm-6">' + displayPct(artifacts.data[k].current_ad) + ' => ' + displayPct(temp_artifacts.data[k].current_ad) + '</dd>';
						suggestions += '</dl>';
					suggestions += '</div>';
				suggestions += '</div>';
			suggestions += '</div>';

		}
	});
	var alice = new Date();
	var curiouser = alice.getTime() - white_rabbit.getTime();
	$('#pudding').empty().append('Total Calculations Performed: ' + obfuscate + ' in ' + (curiouser / 1000).toFixed(3) + 's (' + ((obfuscate/curiouser) * 1000).toFixed(3) + '/s)');
	$('#suggestions').empty().append(suggestions);
	$('#accept2').show();
	$('#accept').empty().append('<button type="button" class="btn btn-primary" onclick="acceptSuggestions();">Complete</button><button type="button" class="btn btn-danger" onclick="rejectSuggestions();">Cancel</button>');
}

function acceptSuggestions() {
	gtag('event', 'Upgrades', {
		'event_category': 'Upgrades',
		'event_action': 'Accept',
		'event_label': 'Artifacts',
	});
	$.each(upgrades, function(k,v) {
		artifacts.data[k].level += v;
	});
	artifacts.totalAD = calculateTotalAD(artifacts.data, true);
	$('#new_artifact').empty();
	$('#accept').empty();
	$('#accept2').hide();
	$('#suggestions').empty();
	$('#relics').val('');
	$('#relics_decimal').val('');
	$('#relicsuggs').hide();
	$('#relicreccs').show();
	adjustWeights();
}

function rejectSuggestions() {
	$('#new_artifact').empty();
	$('#accept').empty();
	$('#accept2').hide();
	$('#suggestions').empty();
	$('#relics').val('');
	$('#relics_decimal').val('');
	$('#relicsuggs').hide();
	$('#relicreccs').show();
}

function skillEff(k, v) {
	var current_effect = false;
	var current_effect2 = false;
	var current_effect3 = false;
	if(0 < v.level) {
		current_effect = v.levels[v.level].bonus;
	}
	if(-1 != v.bonus2) {
		current_effect2 = v.level > 0 ? v.levels[v.level].bonus2 : 1;
	}
	if(-1 != v.bonus3) {
		current_effect3 = v.level > 0 ? v.levels[v.level].bonus3 : 1;
	}
	skills.data[k].current_effect = current_effect;
	skills.data[k].current_effect2 = current_effect2;
	skills.data[k].current_effect3 = current_effect3;
	var running_eff = 1;
	if(v.max > v.level) {
		if(false == current_effect) {
			current_effect = 0;
			current_effect2 = 0;
			current_effect3 = 0;
		}
		skills.data[k].cost = v.levels[v.level + 1].cost;;
		var lvl = v.level + 1;
		var totalCost = 0;
		while(lvl > 0) {
			totalCost += v.levels[lvl--].cost;
		}
		var next_effect = v.levels[v.level + 1].bonus;
		var effect_diff = Math.abs(next_effect)/(0 != current_effect ? Math.abs(current_effect) : Math.abs(next_effect/2));
		var effect_eff = Math.pow(effect_diff, v.rating);
		running_eff *= effect_eff;
		if(false != current_effect2) {
			var next_effect2 = v.levels[v.level + 1].bonus2;
			var effect_diff2 = Math.abs(next_effect2)/(0 != current_effect2 ? Math.abs(current_effect2) : Math.abs(next_effect2/2));
			var effect_eff2 = Math.pow(effect_diff2, v.rating);
			if('cs' == k) {
//				running_eff /= effect_eff2;
			} else {
				running_eff *= effect_eff2;
			}
		}
		if(false != current_effect3) {
			var next_effect3 = v.levels[v.level + 1].bonus3;
			var effect_diff3 = Math.abs(next_effect3)/(0 != current_effect3 ? Math.abs(current_effect3) : Math.abs(next_effect3/2));
			var effect_eff3 = Math.pow(effect_diff3, v.rating);
			running_eff *= next_effect3;
		}
		var effDec = Decimal(running_eff);
		var eff = effDec.pow(1/totalCost).sub(1).toNumber();
		skills.data[k].efficiency = eff;
	}
}

function oldEff(data, k, v) {
	var current_ad = v.level * v.ad;
	var current_effect = 1 + v.effect * Math.pow(v.level, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * v.level, v.gmax)), v.gexpo));
	data.data[k].current_ad = current_ad;
	data.data[k].current_effect = current_effect;
	if(v.max == -1 || v.max > v.level) {
		var cost = Math.pow(v.level + 1, v.cexpo) * v.ccoef;
		data.data[k].cost = cost;
		data.data[k].displayCost = displayTruncated(cost);
		var next_effect = 1 + v.effect * Math.pow(v.level + 1, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * (v.level + 1), v.gmax)), v.gexpo));
		var effect_diff = Math.abs(next_effect)/Math.abs(current_effect);
		var effect_eff = Math.pow(effect_diff, v.rating);
		var ad_change = (((v.level + 1) * v.ad) - current_ad);
		var ad_eff = 1 + (ad_change/data.totalAD);
		var effDec = effect_eff * ad_eff;
 		var eff = Math.abs(((effect_eff * ad_eff) - 1)/cost);
		data.data[k].efficiency = eff;
	}
	return(data);
}

function newEff(data, k, v, avglvl, cost, remainingArtifacts) {
	data.data[k].current_ad = '';
	data.data[k].current_effect = '';
	var i = 1;
	var j = (v.max == -1 || v.max > avglvl ? avglvl : v.max);
	while(i <= j) {
		cost += Math.pow(i++, v.cexpo) * v.ccoef;
	}
	if(v.max == -1 || v.max > avglvl) {
		var next_effect = 1 + v.effect * Math.pow(avglvl, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * avglvl, v.gmax)), v.gexpo));
	} else  {
		var next_effect = 1 + v.effect * Math.pow(v.max, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * v.max, v.gmax)), v.gexpo));
	}
	var effect_eff = Math.pow(Math.abs(next_effect), v.rating);
	var ad_eff = 1 + ((avglvl * v.ad)/data.totalAD);
	var effDec = effect_eff * ad_eff;
	var eff = Math.abs(((effect_eff * ad_eff) - 1)/cost/remainingArtifacts);
	data.data[k].efficiency = eff;
	return(data)
}

function calculateTotalAD(data, update) {
	var total = 0;
	$.each(data, function(k,v) {
		obfuscate++;
		total += v.level * v.ad;
	});
	if(true == update) {
		$('#adsanity').text(displayPct(total * ("" != artifacts.data.hsw.current_effect ? artifacts.data.hsw.current_effect : 1)));
	}
	return(total);
}

function calculateSkillTotals() {
	skills.totals.SP = 0;
	skills.totals.red = 0;
	skills.totals.yellow = 0;
	skills.totals.blue = 0;
	skills.totals.green = 0;
	$.each(skills.data, function(k,v) {
		if(v.level > 0) {
			var lvl = 1;
			while(lvl <= v.level) {
				var stats = v.levels[lvl];
				skills.totals.SP += stats.cost;
				skills.totals[v.branch] += stats.cost;
				lvl++;
			}
		}
	});
	$('#totalSP').text(skills.totals.SP);
	$('#totalSPred').text(skills.totals.red);
	$('#totalSPyellow').text(skills.totals.yellow);
	$('#totalSPblue').text(skills.totals.blue);
	$('#totalSPgreen').text(skills.totals.green);
}

function calculate(data, k, regenerate, pinch) {
	obfuscate++;
	var next_artifact = countArtifacts(artifacts.data) + 1;
	var next_artifact_cost = artifact_costs[next_artifact];
	var average_level = determineAverage(artifacts.data);
	var v = data.data[k];
	data.data[k].efficiency = '';
	data.data[k].cost = '';
	data.data[k].displayCost = '';
	if(v.level > 0 && v.active == 1) {
		var prior_ad = v.current_ad;
		data = oldEff(data, k, v);
		var new_ad = data.data[k].current_ad;
	} else if(v.level == 0 && next_artifact_cost != -1 && v.active == 1 && true === pinch) {
		data = newEff(data, k, v, average_level, next_artifact_cost, Object.keys(artifact_costs).length - 3 - next_artifact);
	} else {
		data.data[k].current_ad = '';
		data.data[k].current_effect = '';
	}
	winner_e = ''
	var temp_winner_n = ''
	winner_value = 0;
	$.each(data.data, function(k,v) {
		obfuscate++;
		if(v.efficiency > winner_value) {
			if(v.level > 0 && v.active == 1) {
				winner_e = k;
				winner_value = v.efficiency;
			} else if(v.level == 0 && next_artifact_cost != -1 && v.active == 1 && true === pinch) {
				temp_winner_n = k;
			}
		}
	});
	if(true === regenerate) {
		regenerateArtifacts();
		winner_n = temp_winner_n;
	}
	data.totalAD = calculateTotalAD(data.data, regenerate);
	return(data);
}

function determineSkillWinner(prevWinners) {
	winner_svalue = 0;
	var winner = '';
	$.each(skills.data, function(k,v) {
		console.log(k, prevWinners.indexOf(k);
		if(-1 != prevWinners.indexOf(k)) {
			return true;
		}
		if(v.efficiency > winner_svalue &&
			v.max > v.level
		) {
			if(skills.totals[v.branch] >= tiers[v.tier] && (-1 == v.prereq || 0 < skills.data[v.prereq].level)) {
				winner = k;
				winner_svalue = v.efficiency;
			} else if(skills.totals[v.branch] < tiers[v.tier] && -1 == skills.data[v.prereq].prereq) {
				winner = v.prereq;
				winner_svalue = v.efficiency;
			} else if(skills.totals[v.branch] >= tiers[v.tier] && -1 == skills.data[skills.data[v.prereq].prereq].prereq) {
				if(0 < skills.data[skills.data[v.prereq].prereq].level) {
					winner = v.prereq;
					winner_svalue = v.efficiency;
				} else {
					winner = skills.data[v.prereq].prereq;
					winner_svalue = v.efficiency;
				}
			} else if(skills.totals[v.branch] >= tiers[v.tier] && -1 == skills.data[skills.data[skills.data[v.prereq].prereq].prereq].prereq) {
				if(0 < skills.data[skills.data[skills.data[v.prereq].prereq].prereq].level) {
					if(0 < skills.data[skills.data[v.prereq].prereq].level) {
						winner = v.prereq;
						winner_svalue = v.efficiency;
					} else {
						winner = skills.data[v.prereq].prereq;
						winner_svalue = v.efficiency;
					}
				} else {
					winner = skills.data[skills.data[v.prereq].prereq].prereq;
					winner_svalue = v.efficiency;
				}
			}
		}
	});
	return(winner);
}


function calculateAllSkills() {
	winner_s1 = '';
	winner_s2 = '';
	winner_s3 = '';
	winner_s4 = '';
	winner_s5 = '';
	var prevWinners = [];
	$.each(skills.data, function(k,v) {
		skills.data[k].efficiency = -1;
		skills.data[k].cost = '';
		if(v.active == 1) {
			skillEff(k, v);
		} else {
			skills.data[k].current_effect = '';
			skills.data[k].current_effect2 = '';
			skills.data[k].current_effect3 = '';
		}
	});
	console.log(prevWinners)
	winner_s1 = determineSkillWinner(prevWinners);
	prevWinners.push(winner_s1);
	console.log(prevWinners, winner_s1)
	winner_s2 = determineSkillWinner(prevWinners);
	prevWinners.push(winner_s2);
	console.log(prevWinners, winner_s2)
	winner_s3 = determineSkillWinner(prevWinners);
	prevWinners.push(winner_s3);
	console.log(prevWinners, winner_s3)
	winner_s4 = determineSkillWinner(prevWinners);
	prevWinners.push(winner_s4);
	console.log(prevWinners, winner_s4)
	winner_s5 = determineSkillWinner(prevWinners);
	console.log(prevWinners, winner_s5)
	calculateSkillTotals();
	regenerateSkills();
	var next_skill = '';
	if('' != winner_s1) {
		next_skill += '<button type="button" class="btn btn-primary mb-2 mr-2 col-12 col-md-6 col-xl-4" onclick="acceptSkill(\'' + winner_s1 + '\')">#1: ' + skills.data[winner_s1].name + ' ' + skills.data[winner_s1].nickname + ' (' + skills.data[winner_s1].cost + ' SP) <span class="badge ml-2 badge-pill badge-' + ('info' == skills.data[winner_s1].color ? 'success' : skills.data[winner_s1].color) + '">' + skills.data[winner_s1].efficiency.toExponential(2) + '</span>';
	}
	if('' != winner_s2) {
		next_skill += '<button type="button" class="btn btn-primary mb-2 mr-2 col-12 col-md-6 col-xl-4" onclick="acceptSkill(\'' + winner_s2 + '\')">#2: ' + skills.data[winner_s2].name + ' ' + skills.data[winner_s2].nickname + ' (' + skills.data[winner_s2].cost + ' SP) <span class="badge ml-2 badge-pill badge-' + ('info' == skills.data[winner_s2].color ? 'success' : skills.data[winner_s2].color) + '">' + skills.data[winner_s2].efficiency.toExponential(2) + '</span>';
	}
	if('' != winner_s3) {
		next_skill += '<button type="button" class="btn btn-primary mb-2 mr-2 col-12 col-md-6 col-xl-4" onclick="acceptSkill(\'' + winner_s3 + '\')">#3: ' + skills.data[winner_s3].name + ' ' + skills.data[winner_s3].nickname + ' (' + skills.data[winner_s3].cost + ' SP) <span class="badge ml-2 badge-pill badge-' + ('info' == skills.data[winner_s3].color ? 'success' : skills.data[winner_s3].color) + '">' + skills.data[winner_s3].efficiency.toExponential(2) + '</span></button>';
	}
	if('' != winner_s4) {
		next_skill += '<button type="button" class="btn btn-primary mb-2 mr-2 col-12 col-md-6 col-xl-4" onclick="acceptSkill(\'' + winner_s4 + '\')">#4: ' + skills.data[winner_s4].name + ' ' + skills.data[winner_s4].nickname + ' (' + skills.data[winner_s4].cost + ' SP) <span class="badge ml-2 badge-pill badge-' + ('info' == skills.data[winner_s4].color ? 'success' : skills.data[winner_s4].color) + '">' + skills.data[winner_s4].efficiency.toExponential(2) + '</span></button>';
	}
	if('' != winner_s5) {
		next_skill += '<button type="button" class="btn btn-primary mb-2 mr-2 col-12 col-md-6 col-xl-4" onclick="acceptSkill(\'' + winner_s5 + '\')">#5: ' + skills.data[winner_s5].name + ' ' + skills.data[winner_s5].nickname + ' (' + skills.data[winner_s5].cost + ' SP) <span class="badge ml-2 badge-pill badge-' + ('info' == skills.data[winner_s5].color ? 'success' : skills.data[winner_s5].color) + '">' + skills.data[winner_s5].efficiency.toExponential(2) + '</span></button>';
	}
	next_skill += '';
	$('#nextskill').empty().append(next_skill);
}

function acceptSkill(skill) {
	gtag('event', 'Upgrades', {
		'event_category': 'Upgrades',
		'event_action': 'Accept',
		'event_label': 'SP',
	});
	skills.data[skill].level++;
	calculateSkillTotals();
	adjustWeights();
}

function calculateAll(data, regenerate) {
	winner_e = '';
	var temp_winner_n = '';
	winner_value = 0;
	var next_artifact = countArtifacts(artifacts.data) + 1;
	var next_artifact_cost = artifact_costs[next_artifact];
	var average_level = determineAverage(artifacts.data);
	$.each(data.data, function(k,v) {
		data.data[k].cost = '';
		data.data[k].displayCost = '';
		if(v.level > 0 && v.active == 1) {
			data = oldEff(data, k, v);
			if(data.data[k].efficiency > winner_value) {
				winner_e = k;
				temp_winner_n = '';
				winner_value = data.data[k].efficiency;
			}
		} else if(v.level == 0 && next_artifact_cost != -1 && v.active == 1) {
			data = newEff(data, k, v, average_level, next_artifact_cost, Object.keys(artifact_costs).length - 3 - next_artifact);
			if(data.data[k].efficiency > winner_value) {
				temp_winner_n = k;
			}
		} else {
			data.data[k].current_ad = '';
			data.data[k].current_effect = '';
		}
	});
	if(true === regenerate) {
		regenerateArtifacts();
		winner_n = temp_winner_n;
	}
	data.totalAD = calculateTotalAD(data.data, regenerate);
	return(data)
}

function displayPct(value) {
	value = displayTruncated(value * 100);
	return(value + '%');
}

function displayTruncated(value) {
	if(value > 999999999999999999999) {
		value = (value / 1000000000000000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'e21/ac';
	} else if(value > 99999999999999999999) {
		value = (value / 100000000000000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'e20';
	} else if(value > 9999999999999999999) {
		value = (value / 10000000000000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'e19';
	} else if(value > 999999999999999999) {
		value = (value / 1000000000000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'e18/ab';
	} else if(value > 99999999999999999) {
		value = (value / 100000000000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'e17';
	} else if(value > 9999999999999999) {
		value = (value / 10000000000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'e16';
	} else if(value > 999999999999999) {
		value = (value / 1000000000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'e15/aa';
	} else if(value > 99999999999999) {
		value = (value / 100000000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'e14';
	} else if(value > 9999999999999) {
		value = (value / 10000000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'e13';
	} else if(value > 999999999999) {
		value = (value / 1000000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'T';
	} else if(value > 999999999) {
		value = (value / 1000000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'B';
	} else if(value > 999999) {
		value = (value / 1000000).toFixed(2).replace(/\.?0+$/, '');
		value += 'M';
	} else if(value > 999) {
		value = (value / 1000).toFixed(2).replace(/\.?0+$/, '');
		value += 'K';
	} else {
		value = (value * 1).toFixed(2).replace(/\.?0+$/, '');
	}
	return(value);
}

function displayEffect(value, type) {
	switch(type) {
		case 'multiply':
			return 'x' + displayTruncated(value);
			break;

		case 'add':
			if(false != value) {
				value = value -1
			}
			if(value > 0) {
				return '+' + displayTruncated(value);
			} else {
				return displayTruncated(value);
			}
			break;

		case 'multiply_pct':
			return 'x' + displayPct(value);
			break;

		case 'pct':
			value = value -1
			if(value > 0) {
				return '+' + displayPct(value);
			} else {
				return displayPct(value);
			}
			break;

		case 'pct_pos':
			if(value > 0) {
				return '+' + displayPct(value);
			} else {
				return displayPct(value);
			}
			break;

	}
}

function storageAvailable(type) {
	try {
		var storage = window[type],
		x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return e instanceof DOMException && (
		// everything except Firefox
		e.code === 22 ||
		// Firefox
		e.code === 1014 ||
		// test name field too, because code might not be present
		// everything except Firefox
		e.name === 'QuotaExceededError' ||
		// Firefox
		e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
		// acknowledge QuotaExceededError only if there's something already stored
		storage.length !== 0;
	}
}

if (storageAvailable('localStorage')) {
	var localArtifacts = JSON.parse(window.localStorage.getItem('artifacts'));
	if(null != localArtifacts && 'undefined' == typeof localArtifacts.data) {
		localArtifacts.data = jQuery.extend(true, {}, localArtifacts);
	}
	if(null != localArtifacts && 'undefined' != typeof localArtifacts.data) {
		$.each(localArtifacts.data, function(k, v) {
			if(undefined != artifacts.data[k]) {
				artifacts.data[k].level = v.level;
				artifacts.data[k].active = v.active;
			}
		});
	}
	artifacts.totalAD = calculateTotalAD(artifacts.data, true);
	var localSkills = JSON.parse(window.localStorage.getItem('skills'));
	if(null != localSkills && 'undefined' == typeof localSkills.data) {
		localSkills.data = jQuery.extend(true, {}, localSkills);
	}
	if(null != localSkills && 'undefined' != typeof localSkills.data) {
		$.each(localSkills.data, function(k, v) {
			if(undefined != skills.data[k]) {
				skills.data[k].level = v.level;
				skills.data[k].active = v.active;
			}
		});
	}
	calculateSkillTotals();
	$('#build').val(window.localStorage.getItem('build'));
	$('#hero').val(window.localStorage.getItem('hero'));
	$('#gold').val(window.localStorage.getItem('gold'));
	$('#active').val(window.localStorage.getItem('active'));
	$('#relic_factor').val(window.localStorage.getItem('relic_factor'));
	$('#ocd').val(window.localStorage.getItem('ocd'));
	if(window.localStorage.getItem('dark') == "1") {
		$('#wolf').prop('checked', true);
		$('#lamb').prop('checked', false);
	} else {
		$('#wolf').prop('checked', false);
		$('#lamb').prop('checked', true);
	}
	if(window.localStorage.getItem('splash') == "1") {
		$('#wet').prop('checked', true);
		$('#dry').prop('checked', false);
	} else {
		$('#wet').prop('checked', false);
		$('#dry').prop('checked', true);
	}
	toggleDark();
	toggleSplash(false);
}

function storeData() {
	window.localStorage.setItem('artifacts', JSON.stringify(artifacts));
	window.localStorage.setItem('skills', JSON.stringify(skills));
	window.localStorage.setItem('build', $('#build').val());
	window.localStorage.setItem('hero', $('#hero').val());
	window.localStorage.setItem('gold', $('#gold').val());
	window.localStorage.setItem('active', $('#active').val());
	window.localStorage.setItem('relic_factor', $('#relic_factor').val());
	window.localStorage.setItem('ocd', $('#ocd').val());
	window.localStorage.setItem('dark', ($('#wolf').prop('checked') == true ? 1 : 0));
	window.localStorage.setItem('splash', ($('#wet').prop('checked') == true ? 1 : 0));
}

$('input[type="tel"]').on('focus', function(){
  $(this).data('fontSize', $(this).css('font-size')).css('font-size', '16px');
}).on('blur', function(){
  $(this).css('font-size', $(this).data('fontSize'));
});

function exportData() {
	$('#export_wrap').hide();
	$('#import_wrap').hide();
	var ex = '';
	ex += $('#build').val() + '=';
	ex += $('#hero').val() + '=';
	ex += $('#gold').val() + '=';
	ex += $('#active').val() + '=';
	ex += ($('#wolf').prop('checked') == true ? 1 : 0) + '=';
	ex += ($('#wet').prop('checked') == true ? 1 : 0) + '=';
	ex += $('#relic_factor').val() + '=';
	ex += $('#ocd').val() + '=';
	$.each(artifacts.data,function(k,v) {
		ex += k + '_';
		ex += v.active + '_';
		ex += v.level + '|';
	});
	ex = ex.slice(0, -1);
	ex += '=';
	$.each(skills.data,function(k,v) {
		ex += k + '_';
		ex += v.active + '_';
		ex += v.level + '|';
	});
	ex = ex.slice(0, -1);
	$('#export').empty().text(ex);
	$('#export_wrap').show();
}

function startImport() {
	$('#export_wrap').hide();
	$('#import_wrap').hide();
	$('#import').empty();
	$('#import_wrap').show();
}

function importData() {
	var im = ($('#import').val().trim().split('='));
	$('#build').val(im[0]);
	$('#hero').val(im[1]);
	$('#gold').val(im[2]);
	$('#active').val(im[3]);
	if(im[4] == "1") {
		$('#wolf').prop('checked', true);
		$('#lamb').prop('checked', false);
	} else {
		$('#wolf').prop('checked', false);
		$('#lamb').prop('checked', true);
	}
	toggleDark();
	if(im[5] == "1") {
		$('#wet').prop('checked', true);
		$('#dry').prop('checked', false);
	} else {
		$('#wet').prop('checked', false);
		$('#dry').prop('checked', true);
	}
	toggleSplash(false);
	$('#relic_factor').val(im[6]);
	$('#ocd').val(im[7]);
	var ima = im[8].split('|');
	$.each(ima, function(k,v) {
		var imaa = v.split('_');
		artifacts.data[imaa[0]].active = parseInt(imaa[1]);
		artifacts.data[imaa[0]].level = parseInt(imaa[2]);
	});
	var ims = im[9].split('|');
	$.each(ims, function(k,v) {
		var imss = v.split('_');
		skills.data[imss[0]].active = parseInt(imss[1]);
		skills.data[imss[0]].level = parseInt(imss[2]);
	});
	$('#export_wrap').hide();
	$('#import_wrap').hide();
	generateArtifacts();
	generateSkills();
	adjustWeights();
}

$('#export_wrap').hide();
$('#import_wrap').hide();
$('#relicsuggs').hide();
generateArtifacts();
generateSkills();
adjustWeights();
