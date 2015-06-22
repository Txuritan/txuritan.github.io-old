$(window).load(function () {
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "plugins/txuritan/posts.xml",
            dataType: "xml",
            success: function (data) {
                var xml = $.parseXML(data),
                    list = $('ul.timeline');
                $(data)
                    .find('post')
                    .each(function (index, element) {
                        var field = $(element),
                            title = field.find('title').text(),
                            body = field.find('body').text(),
                            footer = field.find('footer').text(),
                            id = field.find('id').text(),
                            fa = field.find('fa').text(),
                            color = field.find('color').text();
                        list.append('<li id=' + id + '><i class="fa fa-' + fa + ' bg-' + color + '"></i><div class="timeline-item"><h3 class="timeline-header">' + title + '</h3><div class="timeline-body">' + body + '</div><div class="timeline-footer">' + footer + '</div></div></li>');
                        $("#post1").after('<li><i class="fa fa-clock-o bg-gray"></i></li>');
                    });
            }
        });
    });
});