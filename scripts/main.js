// Load assets
Loader.addScenes([
	"scenes/act1.md"
]);
Loader.addImages([
	{ id:"act1_beebee", src:"sprites/act1/act1_beebee.png" },
	{ id:"act1_hong", src:"sprites/act1/act1_hong.png" }
]);
Loader.load().then(function(){
	Game.init();
	Game.start();
});