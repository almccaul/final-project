

var videos = ["http://www.youtube.com/watch?v=TzuPL273eDU", "http://www.youtube.com/watch?v=GQClmVgpUu4", "http://www.youtube.com/watch?v=e87tpze6Bi4&feature=emb_title", "http://www.youtube.com/watch?v=nzhTwPvDcoY","http://www.youtube.com/watch?v=lOy3cv-ypXU"];

openVideo = function() {
	 var playerDiv = document.getElementById("random_player");
            var player = document.createElement("IFRAME");
            var randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];
            player.setAttribute('width', '640');
            player.setAttribute('height', '390');
            player.setAttribute('src', randomVideoUrl);

            playerDiv.appendChild(player);
        };

/*		
		//random number
		var randIdx = Math.random() * links.length;
		//round for array
		randIdx = parseInt(randIdx, 10);
		//construct link
		var link = 'http://'+ links[randIdx];
		//open in new window
		window.open(link);
*/
};
				