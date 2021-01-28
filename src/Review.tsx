import React, { useState, useEffect } from 'react'
import { FaGithubSquare, FaChevronRight, FaQuoteRight, FaChevronLeft } from 'react-icons/fa'


interface IPerson {
	id: number
	name: string
	job: string
	image: string
	text: string
}

interface IReview {
	data: IPerson[]
}


export const Review = ({ data }: IReview) => {
	const [person, setPerson] = useState(0)
	const { name, job, image, text } = data[person]
	const length = data.length


	const prevPerson = ( )=> {
		setPerson( person === 0 ? length - 1 : person - 1 )
	}

	const nextPerson = ()=> {
		setPerson( person === length - 1 ? 0 : person + 1 )
	}

	const randomPerson = () => {
		const randomPerson = Math.floor( Math.random( ) * length )
		setPerson( randomPerson )
	}

	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt="person" className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author"> {name}  </h4>
			<p className="job"> {job}  </p>
			<p className="info"> {text} </p>
			<div className="button-container">
				<button className="prev-btn" onClick={ prevPerson }>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={ nextPerson }>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn" onClick={ randomPerson }>
				suprise me
		</button>

		</article>
	)
}
