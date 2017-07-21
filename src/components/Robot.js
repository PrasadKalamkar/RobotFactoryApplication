import React from 'react';
import PropTypes from 'prop-types';

const Robot = (props) => {
	const {robots, startProcess, showActionColumn, actionName} = props;	
	return (
	<div>		
		<table style={{"width": "100%", "border": "2px solid black"}}>
			<thead style={{"border": "2px solid black", "textAlign": "center"}}>
				<td style={{"border": "2px solid black", "textAlign": "center"}}>Robot ID</td>
				<td style={{"border": "2px solid black", "textAlign": "center"}}>Robot Name</td>
				<td style={{"border": "2px solid black", "textAlign": "center"}}>Has Sentience</td>
				<td style={{"border": "2px solid black", "textAlign": "center"}}>Has Wheels</td>
				<td style={{"border": "2px solid black", "textAlign": "center"}}>Has Tracks</td>
				<td style={{"border": "2px solid black", "textAlign": "center"}}>Number of Rotors</td>
				<td style={{"border": "2px solid black", "textAlign": "center"}}>Color</td>
				<td style={{"border": "2px solid black", "textAlign": "center"}}>Quality Status</td>
				<td style={{"border": "2px solid black", "textAlign": "center"}}>Shipment Status</td>
				{
					showActionColumn === true ? 
					<td style={{"border": "2px solid black", "textAlign": "center"}}>Action</td> : ''
				}								
			</thead>
			<tbody style={{"border": "2px solid black"}}>
			{
				robots.map((robot) => 
					<tr key={robot.id}>
						<td style={{"border": "2px solid black", "textAlign": "center"}}>{robot.id}</td>
						<td style={{"border": "2px solid black", "textAlign": "center"}}>{robot.name}</td>
						<td style={{"border": "2px solid black", "textAlign": "center"}}><input type="checkbox" checked={robot.configuration.hasSentience} /></td>
						<td style={{"border": "2px solid black", "textAlign": "center"}}><input type="checkbox" checked={robot.configuration.hasWheels} /></td>
						<td style={{"border": "2px solid black", "textAlign": "center"}}><input type="checkbox" checked={robot.configuration.hasTracks} /></td>
						<td style={{"border": "2px solid black", "textAlign": "center"}}>{robot.configuration.numberOfRotors}</td>
						<td style={{"border": "2px solid black", "textAlign": "center"}}>{robot.configuration.colour}</td>
						<td style={{"border": "2px solid black", "textAlign": "center"}}>{robot.qualityStatus.join(', ')}</td>
						<td style={{"border": "2px solid black", "textAlign": "center"}}>{robot.shipmentStatus}</td>
						{
							showActionColumn === true ? 
							<td style={{"border": "2px solid black", "textAlign": "center"}}><input type="button" value={actionName} onClick={startProcess} id={robot.id} /></td> : ''
						}
					</tr>					
				)
			}
			</tbody></table>
    </div>
	);
};

Robot.propTypes= {
    robots: PropTypes.array,
    startProcess: PropTypes.func,
    showActionColumn: PropTypes.bool,
    actionName: PropTypes.string
};

export default Robot;