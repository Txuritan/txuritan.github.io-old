$.ajax({
    type: "GET",
    url: "https://github.com/Txuritan/txuritan.github.io/commits/master.atom",
    dataType: "xml",
    success: function (data) {
        var xml = $.parseXML(data), list = $('ul.timeline');
        $(data).find('entry').each(function (index, element) {
            var field = $(element), id = field.find('id').text(), link = field.find('link').text(), title = field.find('title').text(), updated = field.find('updated').text();
            list.append('<li><i class="fa fa-cloud-upload bg-blue"></i><div class="timeline-item"><h3 class="timeline-header">' + title + '</h3><div class="timeline-body">' + updated + '</div><div class="timeline-footer">' + id + ',' + link '</div></div></li>');
            $("#post1").after('<li><i class="fa fa-clock-o bg-gray"></i></li>');
        });
    }
});
