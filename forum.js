
		var num = 10;
		function show() {
			num = num - 1;
			new_post = document.getElementById("new_post").value;
			if (num === 9) {
				document.getElementById("9").textContent = new_post;
				}
			if (num === 9) {
				document.getElementById("9").textContent = new_post;
				}
			if (num === 8) {
				document.getElementById("8").textContent = new_post;
				}
			if (num === 7) {
				document.getElementById("7").textContent = new_post;
				}
			if (num === 6) {
				document.getElementById("6").textContent = new_post;
				}
			if (num === 5) {
				document.getElementById("5").textContent = new_post;
				}
			if (num === 4) {
				document.getElementById("4").textContent = new_post;
				}
			if (num === 3) {
				document.getElementById("3").textContent = new_post;
				}
			if (num === 2) {
				document.getElementById("2").textContent = new_post;
				}
			if (num === 1) {
				document.getElementById("1").textContent = new_post;
				}
			if (num === 0) {
				document.getElementById("0").textContent = new_post;
				}
		}
	
		

		var button = document.querySelector("#myfile + button");
        var input = document.getElementById("myfile");
        var display = document.getElementById("DisplayText");
        var text = null;
        input.addEventListener("change", addDoc);
        button.addEventListener("click", handleText)
        function addDoc(event) {
			var file = this.files[0]
			var reader = new FileReader();      
			reader.onload = function(e) {
				text = reader.result;
				button.removeAttribute("disabled");
				}
			reader.onerror = function(err) {
				console.log(err, err.loaded
                , err.loaded === 0
                , file);
				button.removeAttribute("disabled");
				}
			reader.readAsText(event.target.files[0]);
			}
        function handleText() {
			display.textContent = text;
			button.setAttribute("disabled", "disabled");
			text = null;
			}
    