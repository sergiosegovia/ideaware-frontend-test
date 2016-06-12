var token = '209610676.ad6141f.d19e59b8d3fb4218994b183d694e407d',
    username = 	'sergiomsl',
    num_photos = 10;

    $.ajax({
    	url: 'https://api.instagram.com/v1/users/search',
    	dataType: 'jsonp',
    	type: 'GET',
    	data: {access_token: token, q: username},
    	success: function(data){
    		console.log(data);
    		$.ajax({
    			url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
    			dataType: 'jsonp',
    			type: 'GET',
    			data: {access_token: token, count: num_photos},
    			success: function(data2){
    				console.log(data2);
    				for(x in data2.data){
    					$('.instagram-list').append('<li><img src="'+data2.data[x].images.low_resolution
.url+'"></li>');
    				}
        			},
    			error: function(data2){
    				console.log(data2);
    			}
    		});
    	},
    	error: function(data){
    		console.log(data);
    	}
    });
