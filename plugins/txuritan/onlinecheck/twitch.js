$.ajax({
    url: 'https://api.twitch.tv/kraken/streams/txuritan',
    type: 'GET',
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function (channel) {
        if (channel["stream"] === null) {
            $("#twitch_online").alert('close');
            console.log('Txuritan Online Checker: Channel Offline');
        } else {
            console.log('Txuritan Online Checker: Channel Online');
        }
    }
});
