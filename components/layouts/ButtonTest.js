import React from 'react'
import Button from '../Button'

const ButtonTest = () => {
	return (
		<section>
			<div class='grid'>
				<h4 class='heading'>Button test</h4>
				<h5 class='heading'>Colours</h5>
				<div class='row'>
					<Button link='#'>Default</Button>
					<Button link='#' background='red'>
						Red
					</Button>
					<Button link='#' background='green'>
						Green
					</Button>
					<Button link='#' background='blue'>
						Blue
					</Button>
					<Button link='#' background='purple'>
						Purple
					</Button>
					<Button link='#' background='white'>
						White (static)
					</Button>
					<Button link='#' background='black'>
						Black (static)
					</Button>
					<Button link='#' background='light'>
						Light (dynamic)
					</Button>
					<Button link='#' background='dark'>
						Dark (dynamic)
					</Button>
				</div>
				<h5 class='heading'>Sizes</h5>
				<div class='row'>
					<Button link='#' size='large'>
						Large
					</Button>
					<Button link='#'>Normal</Button>
				</div>
				<h5 class='heading'>Shapes</h5>
				<div class='row'>
					<Button link='#'>Square</Button>
					<Button link='#' shape='rounded'>
						Rounded
					</Button>
					<Button link='#' shape='round'>
						Round
					</Button>
				</div>
				<h5 class='heading'>Icons</h5>
				<div class='row'>
					<Button link='#' iconLeft='ri-search-line'>
						Left
					</Button>
					<Button link='#' iconRight='ri-arrow-down-s-fill'>
						Right
					</Button>
					<Button link='#' iconLeft='ri-search-line' iconRight='ri-arrow-down-s-fill'>
						Combined
					</Button>
				</div>
			</div>
		</section>
	)
}

export default ButtonTest
