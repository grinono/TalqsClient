// import React, { Component } from 'react'
//
// import { Tracker } from 'meteor/tracker'
// import { Meteor } from 'meteor/meteor'
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
// // import '../style/quest.css'
//
// import Skills from '../components/quest/general/skills'
// import AddSkill from '../components/quest/general/addSkill'
// import Count from '../components/quest/general/count'
// import Share from '../components/quest/general/share'
// import Award from '../components/quest/general/award'
// import Comment from '../components/quest/general/comment'
// import WriteComment from '../components/quest/general/writeComment'
// import EditQuest from '../components/quest/editor'
// import Claim from '../components/quest/general/claim'
// import WriteReaction from '../components/quest/reaction'
// import MapReactions from '../components/quest/mapReactions'
// import {Quests} from '/both/collections'
//
//
// export default class quest extends TrackerReact(Component) {
//
//   render() {
// 	 let questData = Meteor.subscribe('quests', this.props.match.params.questID);
// 	 // console.log(questData.ready())
// 	 // if publication is not ready wait for it.......
// 	 if (!questData.ready() ){
// 	  	return (<p> Still Loading </p>)
// 	 }
// 	 Data = Quests.findOne()
// 	 // console.log(Data)
// 	 // console.log(this.props)
//      return (
//      	<div style={{position: 'static'}}>
// 	        <div className="container">
// 	        <div className="row">
// 	    {/* push static because of draftJS errors if not*/}
// 	          <div style={{position: 'static'}} className="col-xs-12">
// 	            <div style={{position: 'static'}} className="card">
// 	              <div style={{position: 'static'}} className="card-head">
// 	               	<EditQuest quest={this.props.match.params.questID} text={Data.main.text}/>
// 	              </div>
// 	              <div className="card-flexHrz">
// 	                <Count quest={this.props.match.params.questID} number={Data.main.count}/>
// 	                <Share />
// 	              </div>
// 	              <div className="card-flexHrz">
// 	               <Skills quest={this.props.match.params.questID} skillList={Data.main.skills} />
// 	               <AddSkill quest={this.props.match.params.questID} />
// 	              </div>
// 	           		<Award euro={Data.main.award.euro} points={Data.main.award.BitPoints}/>
// 	              <div className="card-users">
// 	                <Comment quest={this.props.match.params.questID} comments={Data.comments} />
// 	              </div>
// 	              <div className="card-newComment">
// 	                <div className="card-user_thumb"><img src="/images/quest/user-1.png" alt /></div>
// 	                <div className="card-comment">
// 	                 <WriteComment quest={this.props.match.params.questID}/>
// 	                </div>
// 	              </div>
// 	            </div>
// 	          </div>
// 	        </div>
// 	        <MapReactions reactions={Data.reactions}/>
//
// 		      <div className="row">
// 		    {/* push static because of draftJS errors if not*/}
// 		          <div style={{position: 'static'}} className="col-xs-12">
// 		            <div style={{position: 'static',  backgroundColor: '#F2FAFE'}} className="card">
// 		              <div style={{position: 'static'}} className="card-head">
// 		               <WriteReaction parentQuest={this.props.match.params.questID} />
// 		              </div>
//
// 		            </div>
// 		          </div>
// 		        </div>
//
// 	      </div>
// 	        <Claim />
//       </div>
//
//
//       );
//   }
// }
