var libraries = [{
        longitude: -122.33339,
        lattitude: 47.59979,
        location: "117 South Main Street, Suite 100 Seattle WA 98104",
        image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IivnQEAR",
        description: "Reading repositions our perspectives. Allowing us see the world through other frames of reference, we can experience someone elseâ??s life through abstract eyes. Books teach us to hold and share opinions, beliefs, interests, and ideas apart from our own, and help shed light on surfaces we wouldnâ??t naturally explore. This is the conceptual basis for The Reading Lamp: the relationship of literature to how we see the world. Composed of wood, semi-opaque sails, and a concealed light source, the co"
    },
    {
        longitude: -122.33169,
        lattitude: 47.60194,
        location: "508 2nd AVE Seattle WA 98104",
        image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQEEAZ",
        description: "Little Free Library is a program I became excited about following some press coverage years ago. Until recently I did not have a suitable location for the library, however we decided our neighborhood pub would be a perfect fit. With people coming and going all day, and many families looking to entertain their children, Little Free Library has a great, humble home in our Irish pub's lobby."
    },
    {
        longitude: -122.3236821,
        lattitude: 47.6041348,
        location: "325 9th Avenue Seattle WA 98104",
        image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00P0W00000kCJzpUAG",
        description: " "
    },
    {
        longitude: -122.34272,
        lattitude: 47.61149,
        location: "2008 First Ave Seattle WA 98121",
        image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQvEAJ",
        description: "Essentia's Seattle store is on the edge of the Belltown neighborhood in Seattle. At first glance it's part shopping district and part salons and night clubs. Take one look up and you'll see the other side of Belltown, the residences - condos and apartments - that fill this unique neighborhood. We're always looking for ways to connect with our city and give back. The Seattle store's employees also happen to read a lot of books. Adding a Little Free Library seemed a natural fit."
    },
    {
        longitude: -122.3117329,
        lattitude: 47.6084887,
        location: "713 16th Ave E.Seattle Seattle WA 98112",
        image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQbEAJ",
        description: "Everyone is welcome. Please help yourself, and please share your books in return"
    }

]


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            lat = position.coords.latitude,
                lng = position.coords.longitude
            console.log("my location", lat, lng);

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: new google.maps.LatLng(lat, lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            for (let i = 0; i < libraries.length; i++) {

                lat2 = libraries[i].lattitude
                long2 = libraries[i].longitude
                markerToMake = {
                    lat: lat2,
                    lng: long2
                }
                var marker = new google.maps.Marker({
                    position: markerToMake,
                    map: map,
                    title: "Little Library"
                });
            }
        })
    }
}






getLocation(libraries)