import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const container = {
	hidden: {
	},
	show: {
		transition: {
			staggerChildren: 0.1
		}
	}
}

const item = {
	hidden: {
		opacity: 0,
		y: 15
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.35,
			ease: [0.25, 0.1, 0.25, 1]
		}
	}
}

const bopList = [
	{
		artist: 'NIKI',
		title: 'Every Summertime',
		link: 'https://www.youtube.com/watch?v=a0OHkWX7B-E'
	},
	{
		artist: 'Seo actor, Dept, Ashley Alisha',
		title: 'Eternal Sunshine',
		link: 'https://www.youtube.com/watch?v=-Jhg8oPgcAM'
	},
	{
		artist: 'Kehlani, Ty Dolla $ign',
		title: 'Nights Like This',
		link: 'https://www.youtube.com/watch?v=I99qCuWx1mI'
	},
	{
		artist: 'Mac Miller',
		title: 'Self Care',
		link: 'https://www.youtube.com/watch?v=SsKT0s5J8ko'
	},
	{
		artist: 'Tia Ray',
		title: 'On the Clouds',
		link: 'https://www.youtube.com/watch?v=dWUUHloolgE'
	},
	{
		artist: 'Ren Ran',
		title: '雀跃',
		link: 'https://www.youtube.com/watch?v=3QOmooM3b8I'
	},
	{
		artist: 'Pink Sweat$',
		title: 'Would You',
		link: 'https://www.youtube.com/watch?v=UsXbuby-oU4'
	},
	{
		artist: 'WOODZ',
		title: 'DIFFERENT',
		link: 'https://www.youtube.com/watch?v=e8DfkZ0HDXE'
	},
	{
		artist: 'Hứa Kim Tuyền, Hoàng Duyên',
		title: 'Sài Gòn Đau Lòng Quá',
		link: 'https://www.youtube.com/watch?v=BdPk9ipvczM'
	},
	{
		artist: 'JON VINYL',
		title: 'Work',
		link: 'https://www.youtube.com/watch?v=aHu1HfVq36s'
	},
	{
		artist: 'Dept, Ashley Alisha',
		title: 'Waiting for You',
		link: 'https://www.youtube.com/watch?v=BZHlQR6DShc'
	},
	{
		artist: 'Nathania',
		title: 'Lost Treasure',
		link: 'https://www.youtube.com/watch?v=BtgwAoimotc'
	},
	{
		artist: 'Issues',
		title: 'Beautiful Oblivion',
		link: 'https://www.youtube.com/watch?v=AZ8VEstc5IM'
	},
	{
		artist: 'Ren Ran',
		title: '从小到大',
		link: 'https://www.youtube.com/watch?v=3cAbKahikj8'
	},
	{
		artist: 'DeVita',
		title: 'Show Me',
		link: 'https://www.youtube.com/watch?v=o97NRF_2KAY'
	},
	{
		artist: 'SEVENTEEN',
		title: 'MOONWALKER',
		link: 'https://www.youtube.com/watch?v=vyKB9C2SENY'
	},
	{
		artist: 'JSOL, Hoàng Duyên',
		title: 'Sài Gòn Hôm Nay Mưa',
		link: 'https://www.youtube.com/watch?v=mnBAZ-VkuEg'
	},
	{
		artist: 'JUNNY',
		title: 'MOVIE',
		link: 'https://www.youtube.com/watch?v=ZWYVrUrsvIA'
	},
	{
		artist: 'Nana Ou-Yang',
		title: 'Tell Me You Do Too',
		link: 'https://www.youtube.com/watch?v=4iAABDI2Y-c'
	},
	{
		artist: 'Tia Ray',
		title: 'Little Too Much',
		link: 'https://www.youtube.com/watch?v=wSwp1d4L934'
	},
	{
		artist: 'Khel Pangilinan',
		title: 'WEAK',
		link: 'https://www.youtube.com/watch?v=b9yJk4jP6-8'
	},
	{
		artist: 'SEVENTEEN',
		title: 'Chilli',
		link: 'https://www.youtube.com/watch?v=as2idY1BQuE'
	},
	{
		artist: 'NIKI',
		title: 'La La Lost You (Acoustic)',
		link: 'https://www.youtube.com/watch?v=5YlJt5EYrlM'
	},
	{
		artist: 'KATIE',
		title: 'Classic',
		link: 'https://www.youtube.com/watch?v=uRyXIBIxCeg'
	},
	{
		artist: 'IU',
		title: 'Dear Name',
		link: 'https://www.youtube.com/watch?v=JSOBF_WhqEM'
	},
	{
		artist: 'SEVENTEEN',
		title: 'Drift Away',
		link: 'https://www.youtube.com/watch?v=CLMLURrlgbo'
	},
	{
		artist: 'DeVita',
		title: 'Movies',
		link: 'https://www.youtube.com/watch?v=Ct-AZOM72mU'
	},
	{
		artist: 'SEVENTEEN',
		title: '_WORLD',
		link: 'https://www.youtube.com/watch?v=waSxahLWSAM'
	},
	{
		artist: 'BIBI',
		title: 'Kazino',
		link: 'https://www.youtube.com/watch?v=ObzvA8tx9aA'
	},
	{
		artist: 'Soul Dot',
		title: 'what are we?',
		link: 'https://www.youtube.com/watch?v=DX6Oj_dj3GE'
	},
	{
		artist: 'Issues',
		title: 'No Problem (Keep It Alive)',
		link: 'https://www.youtube.com/watch?v=AOLzJUEX6Ds'
	},
	{
		artist: 'softy, Jword, Hayne',
		title: 'time to be with you',
		link: 'https://www.youtube.com/watch?v=meUoeZ6MHM8'
	},
	{
		artist: 'Ren Ran',
		title: '空空如也',
		link: 'https://www.youtube.com/watch?v=G2jfo3ljyd4'
	},
	{
		artist: 'SEVENTEEN',
		title: 'Oh My!',
		link: 'https://www.youtube.com/watch?v=_5PELxP8Udg',
	},
	{
		artist: 'SLANDER, Dylan Matthew',
		title: 'Love Is Gone (Acoustic)',
		link: 'https://www.youtube.com/watch?v=hCrtcVDgCGw'
	}
]

const Bops = () => {
	return (
		<section data-background='mint'>
			<h4>Current Bops</h4>
			<AnimatePresence mode={false}>
				<motion.div
					className='row'
					variants={container}
					initial='hidden'
					whileInView='show'
				>
					{bopList.map((bop, index) => (
						<motion.div variants={item}>
							<a href={bop.link} key={index}>
								<div className='row' data-gap='smaller' data-align='center'>
									<p className='weight-500'>{bop.artist}</p>
									<p className='weight'>{bop.title}</p>
								</div>
							</a>
						</motion.div>
					))}
				</motion.div>
			</AnimatePresence>
		</section>
	)
}

export default Bops
