import React from 'react';
import './NotFound.css';

const ErrorPage = () => {

    return (<section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-12 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center "></h1>
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		OOPs!! Something went wrong.
		</h3>
		
		<p>We will tr to correct it as soon as possible.</p>
		
		<a href="/" class="link_404">Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>)


}

export default ErrorPage;