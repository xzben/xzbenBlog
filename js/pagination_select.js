 <script type="text/javascript">
	function selectChange() {
		var options=document.getElementById("pagination_select");
		for (var i = 0; i < options.length; i++) {
			if (options[i].selected) {
			   window.location.href=options[i].value;
			}
		}
	}
  </script>