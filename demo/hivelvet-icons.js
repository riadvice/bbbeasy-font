var glyphs = {
    'mp4': 'e100',
	'room': 'e101',
	'zcaleright': 'e102',
	'role': 'e103',
	'general-settings': 'e104',
	'bigbluebutton': 'e105',
	'playback-presentation': 'e106',
	'playback-podcast': 'e107',
	'activity-reports': 'e108',
	'preset': 'e109'
};

$(document).ready(
    function () {
        renderFont();
        calculateGlyphs();
        $('#liveDemoSize').change(function () {
            $('.fs0').css('font-size', $('#liveDemoSize').val() + 'px');
        })
    }
);

function renderFont() {
    for (name in glyphs) {
        renderGlyph(name, glyphs[name]);
    }
}

function renderGlyph(name, index) {
    var glyphDiv = '<div class="glyph fs1"><div class="clearfix bshadow0 pbs"><span class="icon-icon-hivelvet-applause"></span><span class="mls"> icon-hivelvet-' + name + '</span></div>';
    glyphDiv += '<fieldset class="fs0 size1of1 clearfix hidden-false"><input type="text" readonly value="' + index + '" class="unit size1of2" />';
    glyphDiv += '<input type="text" maxlength="1" readonly value="&#x' + index + ';" class="unitRight size1of2 talign-right icon-hivelvet-' + name + '" />';
    glyphDiv += '</fieldset>';
    glyphDiv += '<div class="fs0 bshadow0 clearfix hidden-true">';
    glyphDiv += '<span class="unit pvs fgc1">liga: </span>';
    glyphDiv += '<input type="text" readonly value="" class="liga unitRight" /></div></div>';

    $('#hivelvet-container').append(glyphDiv);
}

function calculateGlyphs() {
    $('#glyphs-number').html('(Glyphs:&nbsp;' + Object.keys(glyphs).length + ')');
}
