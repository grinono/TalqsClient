import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
	ReactiveBase,
	DataSearch,
	ResultList,
	SelectedFilters,
} from '@appbaseio/reactivesearch';
import './styles.css';

export default class SearchComp extends Component {

	render() {
		return (
			<ReactiveBase
				app="coincheck"
				credentials="UEaquBPZj:4e0025c5-7661-4b74-b801-4308066463d4"
				type='projects'
			>
				<div className="row">
						<div className="col-12 searchHeader">
							<DataSearch
								// title="DataSearch"
								dataField={['name', 'description', 'fullname.raw', 'fullname', 'owner', 'topics']}
								// dataField={['original_title', 'original_title.search']}
								categoryField="name.raw"
								placeholder='Search crypto'
								componentId="BookSensor"
								autosuggest={false}
							/>
						</div>
					<div className="col-6">
						{/* <SelectedFilters componentId="BookSensor" /> */}
						<ResultList
							componentId="SearchResult"
							dataField="original_title"
							stream={true}
							from={0}
 							size={5}
							showResultStats={false}
							scrollOnTarget={window}
							loader="Loading Results.."
							noResults="No Matching Results Found!"
							onData={this.onData}
							className="result-list-container"
							pagination={false}
							react={{
								and: 'BookSensor',
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}

	onData(data) {
		return ({
			description: (
				<div className="">
					<div className='row'>
						<div className='col-1'>
							<img src={data.img} />
						</div>
						<div className='col'>
							{data.fullname}
						</div>
					</div>


					{/* <div>
						<div>by <span className="authors-list">{data.authors}</span></div>
						<div className="ratings-list flex align-center">
							<span className="stars">
								{
									Array(data.average_rating_rounded).fill('x')
										.map((item, index) => <i className="fas fa-star" key={index} />) // eslint-disable-line
								}
							</span>
							<span className="avg-rating">({data.average_rating} avg)</span>
						</div>
					</div> */}
					{/* <span className="pub-year">Pub {data.original_publication_year}</span> */}
				</div>
			),
		});
	}
}
