<!DOCTYPE html>
<html lang="hr">
<head id="meta">
<meta charset="UTF-8">
<style>
	
	main {}
	
	
	img {
		height: 14px;
		width: auto;
		line-height: 42px;
		margin-top: 12px;	}
	span {
				margin-top: -12px !important;
				line-height: 42px;

	}
	
</style>
<title>
	<?php
		$files = glob('titles/*.txt');
		$random_file = $files[array_rand($files)];
		include($random_file);
	?>
</title>
</head>
<body>
<main>
	<h1>
	<?php
		$files = glob('titles/*.txt');
		$random_file = $files[array_rand($files)];
		include($random_file);
	?>
	</h1>
	<footer>
		<img src="mail.png"><span>Info majmun gsg hrvatska</span>	</footer>
	
</main>
</body>