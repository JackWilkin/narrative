const categories = ["humor", "nature", "weather", "sunny", "cloudy", "storm", "snow",
"animals", "zoo", "water", "beach", "pool", "street", "boat", "games", "sports", 
"night", "day", "people", "friends", "family", "kids", "music", "events", "fair",
"weddings", "birthday", "concerts", "rally", "school", "play" ]

const videoStore =
[
    {
        videoId: 0,
        videoSource: "2001-Graduation.mp4",
        categories: ["school", "events", "kids"]
    },
    {
        videoId: 1,
        videoSource: "academy-sports.mp4",
        categories: ["school", "sports", "kids"]
    },
    {
        videoId: 2,
        videoSource: "animals.mov",
        categories: ["zoo", "animals", "nature"]
    },
    {
        videoId: 3,
        videoSource: "aquarium-scenes.mp4",
        categories: ["animals", "water", "zoo"]
    },
    {
        videoId: 4,
        videoSource: "aquarium.mov",
        categories: ["animals", "water", "zoo"]
    },
    {
        videoId: 5,
        videoSource: "baseball-autograph.mov",
        categories: ["sports", "people", "day"]
    },
    {
        videoId: 6,
        videoSource: "baseball-kids.mov",
        categories: ["sports", "kids", "sunny"]
    },
    {
        videoId: 7,
        videoSource: "Berkeley-Rally-9_11.mp4",
        categories: ["rally", "people", "events"]
    },
    {
        videoId: 8,
        videoSource: "bmx-intro.mp4",
        categories: ["sunny", "humor", "games"]
    },
    {
        videoId: 9,
        videoSource: "bmx-skatepark.mp4",
        categories: ["games", "friends", "sports"]
    },
    {
        videoId: 10,
        videoSource: "bmx-woods.mp4",
        categories: ["nature", "friends", "sports"]
    },
    {
        videoId: 11,
        videoSource: "boat.mov",
        categories: ["nature", "water", "boat"]
    },
    {
        videoId: 12,
        videoSource: "box-stacking.mp4",
        categories: ["humor", "games", "school"]
    },
    {
        videoId: 13,
        videoSource: "boys-tackle.mov",
        categories: ["humor", "kids", "day"]
    },
    {
        videoId: 14,
        videoSource: "chalkboard-art.mp4",
        categories: ["school", "kids", "day"]
    },
    {
        videoId: 15,
        videoSource: "cloudy.mov",
        categories: ["beach", "nature", "cloudy"]
    },
    {
        videoId: 16,
        videoSource: "clubhouse-game.mp4",
        categories: ["school", "kids", "games"]
    },
    {
        videoId: 17,
        videoSource: "clubhouse-kids.mp4",
        categories: ["school", "kids", "humor"]
    },
    {
        videoId: 18,
        videoSource: "day.mov",
        categories: ["day", "sunny", "fair"]
    },
    {
        videoId: 19,
        videoSource: "earth-gonna-die.mp4",
        categories: ["kids", "school", "humor"]
    },
    {
        videoId: 20,
        videoSource: "fair.mov",
        categories: ["sunny", "fair", "events"]
    },
    {
        videoId: 21,
        videoSource: "fieldtrip1.mp4",
        categories: ["school", "kids", "nature"]
    },
    {
        videoId: 22,
        videoSource: "flamingos.mp4",
        categories: ["animals", "zoo", "sunny"]
    },
    {
        videoId: 23,
        videoSource: "flowers.mov",
        categories: ["nature", "events", "night"]
    },
    {
        videoId: 24,
        videoSource: "flying.mov",
        categories: ["animals", "zoo", "cloudy"]
    },
    {
        videoId: 25,
        videoSource: "grandmas-and-guitars.mp4",
        categories: ["music", "people", "school"]
    },
    {
        videoId: 26,
        videoSource: "greenday1.mp4",
        categories: ["music", "concerts", "night"]
    },
    {
        videoId: 27,
        videoSource: "greenday2.mp4",
        categories: ["humor", "concerts", "night"]
    },
    {
        videoId: 28,
        videoSource: "greenday3.mp4",
        categories: ["night", "concerts", "events"]
    },
    {
        videoId: 29,
        videoSource: "halfpipe-wipeout.mp4",
        categories: ["kids", "humor", "sports"]
    },
    {
        videoId: 30,
        videoSource: "hang-loose.mp4",
        categories: ["snow", "humor", "sunny"]
    },
    {
        videoId: 31,
        videoSource: "hockey-women.mp4",
        categories: ["people", "sports", "events"]
    },
    {
        videoId: 32,
        videoSource: "horse.mov",
        categories: ["animals", "kids", "family"]
    },
    {
        videoId: 33,
        videoSource: "ice-rink.mp4",
        categories: ["sports", "humor", "games"]
    },
    {
        videoId: 34,
        videoSource: "juggling.mp4",
        categories: ["school", "humor", "kids"]
    },
    {
        videoId: 35,
        videoSource: "karate-kids.mov",
        categories: ["kids", "family", "friends"]
    },
    {
        videoId: 36,
        videoSource: "kids-street-convo.mp4",
        categories: ["kids", "freinds", "street"]
    },
    {
        videoId: 37,
        videoSource: "kissing-mascott.mp4",
        categories: ["humor", "night", "friends"]
    },
    {
        videoId: 38,
        videoSource: "ladder.mp4",
        categories: ["humor", "people", "friends"]
    },
    {
        videoId: 39,
        videoSource: "lantinx-protest.mp4",
        categories: ["rally", "people", "street"]
    },
    {
        videoId: 40,
        videoSource: "library.mp4",
        categories: ["kids", "school", "day"]
    },
    {
        videoId: 41,
        videoSource: "mammal.mov",
        categories: ["animals", "water", "zoo"]
    },
    {
        videoId: 42,
        videoSource: "night.mov",
        categories: ["fair", "night", "events"]
    },
    {
        videoId: 43,
        videoSource: "ninja.mp4",
        categories: ["friends", "humor", "day"]
    },
    {
        videoId: 44,
        videoSource: "otter.mov",
        categories: ["animals", "nature", "zoo"]
    },
    {
        videoId: 45,
        videoSource: "pizza-face.mp4",
        categories: ["friends", "humor", "night"]
    },
    {
        videoId: 46,
        videoSource: "playground-kids-run.mp4",
        categories: ["kids", "family", "day"]
    },
    {
        videoId: 47,
        videoSource: "playground-monkey-bars.mp4",
        categories: ["kids", "family", "school"]
    },
    {
        videoId: 48,
        videoSource: "playground1.mp4",
        categories: ["kids", "family", "humor"]
    },
    {
        videoId: 49,
        videoSource: "pool.mov",
        categories: ["kids", "pool", "events"]
    },
    {
        videoId: 50,
        videoSource: "pyramus_and_thisby.mp4",
        categories: ["school", "kids", "events"]
    },
    {
        videoId: 51,
        videoSource: "ride.mov",
        categories: ["fair", "sunny", "kids"]
    },
    {
        videoId: 52,
        videoSource: "sandcastle.mov",
        categories: ["kids", "beach", "water"]
    },
    {
        videoId: 53,
        videoSource: "school-bus.mp4",
        categories: ["school", "street", "sunny"]
    },
    {
        videoId: 54,
        videoSource: "schoolbus2.mp4",
        categories: ["school", "street", "nature"]
    },
    {
        videoId: 55,
        videoSource: "seagulls.mov",
        categories: ["water", "animals", "storm"]
    },
    {
        videoId: 56,
        videoSource: "show.mov",
        categories: ["concerts", "events", "people"]
    },
    {
        videoId: 57,
        videoSource: "ski-tricks.mp4",
        categories: ["snow", "people", "sports"]
    },
    {
        videoId: 58,
        videoSource: "snowball-ben.mp4",
        categories: ["snow", "friends", "humor"]
    },
    {
        videoId: 59,
        videoSource: "snowball-ben.mp4",
        categories: ["snow", "sports", "humor"]
    },
    {
        videoId: 60,
        videoSource: "stormy.mov",
        categories: ["storm", "cloudy", "beach"]
    },
    {
        videoId: 61,
        videoSource: "sunny.mov",
        categories: ["sunny", "beach", "water"]
    },
    {
        videoId: 62,
        videoSource: "swim.mov",
        categories: ["water", "beach", "boat"]
    },
    {
        videoId: 63,
        videoSource: "swimming.mov",
        categories: ["animals", "zoo", "water"]
    },
    {
        videoId: 64,
        videoSource: "swing.mov",
        categories: ["fair", "people", "sunny"]
    },
    {
        videoId: 65,
        videoSource: "Tijuana.mp4",
        categories: ["people", "street", "day"]
    },
    {
        videoId: 66,
        videoSource: "toy-train.mp4",
        categories: ["kids", "play", "day"]
    },
    {
        videoId: 67,
        videoSource: "tsunami_patong_beach.mp4",
        categories: ["weather", "events", "nature"]
    },
    {
        videoId: 68,
        videoSource: "tsunami1.mp4",
        categories: ["weather", "events", "beach"]
    },
    {
        videoId: 69,
        videoSource: "tunnel.mp4",
        categories: ["street", "day", "night"]
    },
    {
        videoId: 70,
        videoSource: "turntables.mp4",
        categories: ["music", "kids", "school"]
    },
    {
        videoId: 71,
        videoSource: "turntables.mp4",
        categories: ["music", "people", "school"]
    },
    {
        videoId: 72,
        videoSource: "water.mov",
        categories: ["water", "boat", "sunny"]
    },
    {
        videoId: 73,
        videoSource: "wrestling-long.mp4",
        categories: ["people", "sports", "games"]
    },
    {
        videoId: 74,
        videoSource: "wrestling1.mp4",
        categories: ["people", "sports", "games"]
    },
    {
        videoId: 75,
        videoSource: "wrestling2.mp4",
        categories: ["people", "sports", "games"]
    },
    {
        videoId: 76,
        videoSource: "wrestling3.mp4",
        categories: ["people", "sports", "games"]
    },
    {
        videoId: 77,
        videoSource: "yt-airhorn.mp4",
        categories: ["humor", "friends", "family"]
    },
    {
        videoId: 78,
        videoSource: "yt-apple-store.mp4",
        categories: ["night", "events", "people"]
    },
    {
        videoId: 79,
        videoSource: "yt-boat.mp4",
        categories: ["boat", "water", "people"]
    },
    {
        videoId: 80,
        videoSource: "yt-chase-brown.mp4",
        categories: ["night", "humor", "people"]
    },
    {
        videoId: 81,
        videoSource: "yt-chicken-choke.mp4",
        categories: ["night", "humor", "people"]
    },
    {
        videoId: 82,
        videoSource: "yt-cooking-fire.mp4",
        categories: ["friends", "humor", "people"]
    },
    {
        videoId: 83,
        videoSource: "yt-daily-life.mp4",
        categories: ["day", "street", "people"]
    },
    {
        videoId: 84,
        videoSource: "yt-guy-lighter.mp4",
        categories: ["night", "street", "people"]
    },
    {
        videoId: 85,
        videoSource: "yt-leave-cab.mp4",
        categories: ["night", "street", "people"]
    },
    {
        videoId: 86,
        videoSource: "yt-mall-ride.mp4",
        categories: ["humor", "friends", "people"]
    },
    {
        videoId: 87,
        videoSource: "yt-pandas.mp4",
        categories: ["animals", "zoo", "day"]
    },
    {
        videoId: 88,
        videoSource: "yt-robot-dance.mp4",
        categories: ["humor", "night", "people"]
    },
    {
        videoId: 89,
        videoSource: "yt-rockets-sing.mp4",
        categories: ["humor", "friends", "music"]
    },
    {
        videoId: 90,
        videoSource: "yt-sledding.mp4",
        categories: ["snow", "kids", "family"]
    },
    {
        videoId: 91,
        videoSource: "yt-smacks-ass.mp4",
        categories: ["humor", "friends", "school"]
    },
    {
        videoId: 92,
        videoSource: "yt-snowboard.mp4",
        categories: ["snow", "friends", "sports"]
    },
    {
        videoId: 93,
        videoSource: "yt-uk-drunk-dancing.mp4",
        categories: ["humor", "friends", "music"]
    },
    {
        videoId: 94,
        videoSource: "yt-wall-star.mp4",
        categories: ["humor", "friends", "school"]
    },
    {
        videoId: 95,
        videoSource: "yt-zoo.mp4",
        categories: ["zoo", "friends", "day"]
    },
    {
        videoId: 96,
        videoSource: "zamboni.mp4",
        categories: ["people", "sports", "games"]
    },
    {
        videoId: 97,
        videoSource: "zoo.mov",
        categories: ["zoo", "family", "day"]
    }
]

export default videoStore