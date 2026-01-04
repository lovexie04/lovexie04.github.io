const container = document.querySelector(".container");

function generateParticles() {
	function newParticles() {
    console.log("Fall particles generated.");

		const FallParticles = document.createElement("div");
		FallParticles.style.width = `${Math.random() * 5}px`;
		FallParticles.style.height = `${Math.random() * 1000}px`;
		FallParticles.style.pointerEvents = "none";
		FallParticles.style.transform = "rotate(-30deg)";
		FallParticles.style.position = "absolute";
		FallParticles.style.left = `${Math.random() * 200 - 60}dvw`;
		FallParticles.style.background = "white";
		FallParticles.style.opacity = Math.random() * 1;
		FallParticles.style.animation = "destroy2 0.2s forwards";

		document.body.appendChild(FallParticles);

		setTimeout(() => {
			FallParticles.remove();
		}, 500);

		requestAnimationFrame(newParticles);
	}
  
	newParticles();
}

function generateFlames() {
	function newFlames() {
    console.log("Flame particles generated.");
    
		const Flame = document.createElement("div");
		Flame.style.position = "absolute";
		Flame.style.left = "40%";
		Flame.style.top = "50%";
		Flame.style.transform = "translate(-50%, -65%)";
		Flame.style.zIndex = "-10";
		Flame.style.width = `${Math.random() * 40 + 100}px`;
		Flame.style.height = `${Math.random() * 100 + 100 / 1.3}px`;
		Flame.style.animation = "destroy 0.5s forwards";
		Flame.style.background = `hsl(${Math.random() * 30}, 100%, 75%)`;
		Flame.style.pointerEvents = "none";
		Flame.style.borderRadius = "50%";
		Flame.style.filter = "brightness(150%) opacity(0.3)";
		Flame.style.boxShadow = `0 0 30px 10px hsl(${Math.random() * 30}, 100%, 75%)`;
		Flame.style.transform = "scale(1.4)";

		document.body.appendChild(Flame);

		setTimeout(() => {
			Flame.remove();
		}, 500);

		requestAnimationFrame(newFlames);
	}

	newFlames();
}

generateFlames();
generateParticles();