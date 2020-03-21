//
function render() {
    const ctx    = $('canvas').get(0).getContext('2d');
    const W      = $('canvas').attr('width');
    const H      = $('canvas').attr('height');

    // background color
    ctx.fillStyle = $('#color').val();
    ctx.fillRect(0, 0, W, H);

    // text1
    ctx.font = '64px arial';
    ctx.textAlign = "end";
    ctx.textBaseline = 'middle';
    ctx.fillStyle = "#000000";
    ctx.fillText($('#text1').val(), W * 0.9, H * 0.17);

    // text2
    ctx.font = '256px arial';
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    ctx.fillStyle = "#000000";
    ctx.fillText($('#text2').val(), W / 2, H / 2 + H * 0.02);

    // text3
    ctx.font = '64px arial';
    ctx.textAlign = "end";
    ctx.textBaseline = 'middle';
    ctx.fillStyle = "#000000";
    ctx.fillText($('#text3').val(), W * 0.9, H * 0.83);

    // update link
    document.getElementById('a').href = $('canvas').get(0).toDataURL()
}

$(function() {
    $('#color, #text1, #text2, #text3').on('input', render)
    render()
})
