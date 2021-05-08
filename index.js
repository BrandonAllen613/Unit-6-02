<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
</head>
<body>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<a class="navbar-brand" href="https://sourcecodester.com">Sourcecodester</a>
		</div>
	</nav>
	<div class="col-md-3"></div>
	<div class="col-md-6 well">
		<h3 class="text-primary">JavaScript - Dynamically Solve Area Of Trapezoid</h3>
		<hr style="border-top:1px dotted #ccc;"/>
		<div class="col-md-4">
			<div class="form-group">
				<label>a</label>
				<input type="number" class="form-control" id="a"/>
			</div>
			<div class="form-group">
				<label>b</label>
				<input type="number" class="form-control" id="b" />
			</div><div class="form-group">
				<label>h</label>
				<input type="number" class="form-control" id="h" />
			</div>
			<center><button type="button" class="btn btn-primary" id="btn" onclick="calculateArea(this);">Calculate</button> <button  type="button" class="btn btn-success" onclick="reset();">Reset</button></center>
		</div>
		<div class="col-md-8">
    	<br />
			<div id="result"></div>
		</div>
	</div>
 
<script src="js/script.js"></script>
</body>
</html>