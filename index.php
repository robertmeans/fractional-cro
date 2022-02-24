<?php
include_once 'error-reporting.php';
require '_includes/head.php'; 
?>
<body>
<a onclick="topFunction()" id="btt"><i class="fas fa-caret-up fa-fw"></i></a>

<?php require "_includes/navigation.php" ?>
<?php require "_includes/hero.php" ?>
<?php require "_includes/intro.php" ?>
<?php require "_includes/about.php" ?>
<?php require "_includes/services.php" ?>
<?php require "_includes/clients.php" ?>
<?php require "_includes/footer.php" ?>
<?php require "_includes/contact.php" ?>

<script src="js/aos.js"></script>
<script> 
	AOS.init({
		duration: 500,
		easing: 'ease-in-out-back'
	}); 
</script>
<script type="text/javascript" src="js/jquery.backstretch.min.js"></script>
<script src="js/scripts.js?<?php echo time(); ?>"></script>
<!-- <script src="http://localhost:35729/livereload.js"></script> -->	
</body>
</html>