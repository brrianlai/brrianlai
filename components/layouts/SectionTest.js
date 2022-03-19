import React from 'react'
import Button from '../Button'

const SectionTest = () => {
	return (
		<div>
			<section>
				<h5>export default SectionTest</h5>
				<h4>Simple stacked</h4>
				<p>Paragraph</p>
				<Button link='#' background='dark'>Button</Button>
			</section>
			<section data-background='tan'>
				<div data-layout='justified'>
					<h4>Simple justified</h4>
					<Button link='#' background='dark' size='large'>Button</Button>
				</div>
			</section>
			<section data-layout='center'>
				<h1>Simple center</h1>
				<h4>Paragraph</h4>
				<Button link='#' background='dark' size='large' shape='round'>Button</Button>
			</section>
			<section data-offset='left'>
				<h1>Simple offset</h1>
				<h3>We're strolling down the boulevard and dancing under streetlights. Every year we get older, and I'm still on your side~</h3>
				<Button link='#' shape='rounded'>Button</Button>
			</section>
			<section data-background='clay'>
				<div className='grid' data-columns='2-1'>
					<div className='column'>
						<h4>You want the world? Then I'll give it to ya</h4>
						<p>You want a soul? Yeah I'll steal it for ya</p>
					</div>
					<div className='column'>
						<h4>On and on and on</h4>
						<p>'Til we find where we belong</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default SectionTest