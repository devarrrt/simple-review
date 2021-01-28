import React from 'react'
import { Review } from './Review'
import data from './data'


interface Props {}


const App = ( props: Props ) => {
	return (
		<main>
				<section className="container">
				<div className="title">
					<h2> out rewiews </h2>  
					<div className="underline"></div>
				</div>
				<Review data={ data } />
			</section>
		</main>
	)
}



export default App
