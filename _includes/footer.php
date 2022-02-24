<footer>
<?php
	function ewd_copyright($startYear) {
		$currentYear = date('Y');
		if ($startYear < $currentYear) {
			$currentYear = date('y');
			return "&copy; $startYear&ndash;$currentYear";
		} else {
			return "&copy; $startYear";
		}
	}
 ?>

	<div class="footer-wrap">
		<div class="left">
			<p>Christian Solomine<br>
			<!-- <a href="mailto:christian@fractional-cro.com" class="contact mail"><i class="far fa-envelope fa-fw"></i> christian@fractional-cro.com</a><br> -->
			<a href="tel:(303)%20522-4430" class="contact tel"><i class="fas fa-mobile-alt fa-fw"></i> (303) 522-4430</a></p>
		</div>
		<div class="right">
			<p class="copyright"><?= ewd_copyright(2021); ?> Fractional-CRO | <a href="http://www.evergreenwebdesign.com" target="_blank">EWD</a></p>
		</div>
	</div>
</footer>