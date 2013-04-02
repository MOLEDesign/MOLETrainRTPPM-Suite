$(window).load(function() {
	$.getJSON('http://development.moledesign.biz/node/output.json', function (data) {
		var placeholder_output = '<table cellspacing="0" width="99%">';
		placeholder_output += '<thead>';
		placeholder_output += '<tr>';
		placeholder_output += '<th>Region</th>';
		placeholder_output += '<th>PPM</th>';
		placeholder_output += '<th>PPM (2 hours)</th>';
		placeholder_output += '<th>Total Trains</th>';
		placeholder_output += '<th>Trains on Time</th>';
		placeholder_output += '<th>Late Trains</th>';
		placeholder_output += '<th>Cancelled or significantly late</th>';
		placeholder_output += '</tr>';
		placeholder_output += '</thead>';
		
		placeholder_output += '<tbody>';
		placeholder_output += '<tr class="highlight">';
		placeholder_output += '<td>National</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.NationalPPM.PPM.text + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.NationalPPM.RollingPPM.text + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.NationalPPM.Total + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.NationalPPM.OnTime + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.NationalPPM.Late + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.NationalPPM.CancelVeryLate + '</td>';
		placeholder_output += '</tr>';
		
		for (var i in data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector) {
		placeholder_output += '<tr>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector[i].sectorDesc + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector[i].SectorPPM.PPM.text + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector[i].SectorPPM.RollingPPM.text + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector[i].SectorPPM.Total + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector[i].SectorPPM.OnTime + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector[i].SectorPPM.Late + '</td>';
		placeholder_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector[i].SectorPPM.CancelVeryLate + '</td>';
		placeholder_output += '</tr>';
		}
		placeholder_output += '</tbody>';
		placeholder_output += '</table>';
		$("#placeholder1").html(placeholder_output);
	
		var placeholder1_output = '<table cellspacing="0" width="99%">';
		placeholder1_output += "<thead>";
		placeholder1_output += "<tr>";
		placeholder1_output += "<th>Operator</th>";
		placeholder1_output += "<th width='10%'>PPM</th>";
		placeholder1_output += "<th width='10%'>PPM (2 hours)</th>";
		placeholder1_output += "<th>Operator</th>";
		placeholder1_output += "<th width='10%'>PPM</th>";
		placeholder1_output += "<th width='10%'>PPM (2 hours)</th>";
		placeholder1_output += "</tr>";
		placeholder1_output += "</thead>";
		placeholder1_output += "<tbody>";
	
		// Start loop of operators, loopcount is used to allocate 2 operators per line //
		placeholder1_output += "<tr>";
		var loopcount = 0;
		
		for (var i in data.RTPPMDataMsgV1.RTPPMData.NationalPage.Operator) {
			loopcount ++; // increment loopcount by 1
			var operatorcolorppm = 'red';
			var operatorcolorrppm = 'red';
			
			if (data.RTPPMDataMsgV1.RTPPMData.NationalPage.Operator[i].PPM.rag == 'G') {
				operatorcolorppm = 'green';
			}
			
			if (data.RTPPMDataMsgV1.RTPPMData.NationalPage.Operator[i].PPM.rag == 'A') {
				operatorcolorppm = 'yellow';
			}
			
			if (data.RTPPMDataMsgV1.RTPPMData.NationalPage.Operator[i].RollingPPM.rag == 'G') {
				operatorcolorrppm = 'green';
			}
			
			if (data.RTPPMDataMsgV1.RTPPMData.NationalPage.Operator[i].RollingPPM.rag == 'A') {
				operatorcolorrppm = 'yellow';
			}
			
			
			placeholder1_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Operator[i].name + ' ' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Operator[i].keySymbol +'</td>';
			placeholder1_output += '<td class="cell' + operatorcolorppm + '">' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Operator[i].PPM.text + '</td>';
			placeholder1_output += '<td class="cell' + operatorcolorrppm + '">' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Operator[i].RollingPPM.text + '</td>';
			if (loopcount % 2 ==0) {
				placeholder1_output += '</tr>';
				placeholder1_output += '<tr>';
			}
		}
		placeholder1_output += "</tbody>";
		placeholder1_output += "</table>";
		
		// load the content into placeholder2 div
		$("#placeholder2").html(placeholder1_output);
		
		var placeholder3_output = '<table cellspacing="0" width="99%">';
		placeholder3_output += '<tr>';
		placeholder3_output += '<td colspan="3">' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.WebFixedMsg2 + '</td>';
		placeholder3_output += '</tr>';
		placeholder3_output += '<tr>';
		placeholder3_output += '<td colspan="3">' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.WebFixedMsg1 + '</td>';
		placeholder3_output += '</tr>';
		
		placeholder3_output += '</tbody>';
		placeholder3_output += '</table>';
		$("#placeholder3").html(placeholder3_output);	
		
		var placeholder4_output = '<table cellspacing="0" width="99%">';
		placeholder4_output += "<tr>";
		placeholder4_output += "<td colspan='3'>" + data.RTPPMDataMsgV1.RTPPMData.NationalPage.WebMsgOfMoment + "</td>";
		placeholder4_output += "</tr>";
		
		placeholder4_output += "</tbody>";
		placeholder4_output += "</table>";
		$("#placeholder4").html(placeholder4_output);	
		
		var opplaceholder1_output = '<table cellspacing="0" width="99%">';
		opplaceholder1_output += "<thead>";
		opplaceholder1_output += "<tr>";
		opplaceholder1_output += "<th>Operator</th>";
		opplaceholder1_output += "<th width='10%'>PPM</th>";
		opplaceholder1_output += "<th width='10%'>PPM (2 hours)</th>";
		opplaceholder1_output += "<th width='10%'>Total Trains</th>";
		opplaceholder1_output += "<th width='10%'>Trains on Time</th>";
		opplaceholder1_output += "<th width='10%'>Late Trains</th>";
		opplaceholder1_output += "<th width='10%'>Cancelled</th>";
		opplaceholder1_output += "</tr>";
		opplaceholder1_output += "</thead>";
		opplaceholder1_output += "<tbody>";
	
		// Start loop of operators, loopcount is used to allocate 2 operators per line //
		opplaceholder1_output += "<tr>";
		var loopcount = 0;
		
		for (var i in data.RTPPMDataMsgV1.RTPPMData.OperatorPage) {
			if (data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.code == '25') {
				var operatorcolorppm = 'red';
				var operatorcolorrppm = 'red';
				
				if (data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.PPM.rag == 'G') {
					operatorcolorppm = 'green';
				}
				
				if (data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.PPM.rag == 'A') {
					operatorcolorppm = 'yellow';
				}
				
				if (data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.RollingPPM.rag == 'G') {
					operatorcolorrppm = 'green';
				}
				
				if (data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.RollingPPM.rag == 'A') {
					operatorcolorrppm = 'yellow';
				}
				
				
				opplaceholder1_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.name + ' ' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.keySymbol +'</td>';
				opplaceholder1_output += '<td class="cell' + operatorcolorppm + '">' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.PPM.text + '</td>';
				opplaceholder1_output += '<td class="cell' + operatorcolorrppm + '">' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.RollingPPM.text + '</td>';
				opplaceholder1_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.Total + '</td>';
				opplaceholder1_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.OnTime + '</td>';
				opplaceholder1_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.Late + '</td>';
				opplaceholder1_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.CancelVeryLate + '</td>';
				opplaceholder1_output += "</tr>";
			}
		}
		
		opplaceholder1_output += "</tbody>";
		opplaceholder1_output += "</table>";
		
		// load the content into placeholder2 div
		$("#opplaceholder1").html(opplaceholder1_output);

		var opplaceholder2_output = '<table cellspacing="0" width="99%">';
		opplaceholder2_output += "<thead>";
		opplaceholder2_output += "<tr>";
		opplaceholder2_output += "<th>Operator</th>";
		opplaceholder2_output += "<th width='10%'>PPM</th>";
		opplaceholder2_output += "<th width='10%'>PPM (2 hours)</th>";
		opplaceholder2_output += "<th width='10%'>Total Trains</th>";
		opplaceholder2_output += "<th width='10%'>Trains on Time</th>";
		opplaceholder2_output += "<th width='10%'>Late Trains</th>";
		opplaceholder2_output += "<th width='10%'>Cancelled</th>";
		opplaceholder2_output += "</tr>";
		opplaceholder2_output += "</thead>";
		opplaceholder2_output += "<tbody>";
	
		// Start loop of operators, loopcount is used to allocate 2 operators per line //
		opplaceholder2_output += "<tr>";
		var loopcount = 0;
		
		for (var i in data.RTPPMDataMsgV1.RTPPMData.OperatorPage) {
			if (data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].Operator.code == '25') {
				for (var j in data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp) {
				var operatorcolorppm = 'red';
				var operatorcolorrppm = 'red';
				
				if (data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].PPM.rag == 'G') {
					operatorcolorppm = 'green';
				}
				
				if (data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].PPM.rag == 'A') {
					operatorcolorppm = 'yellow';
				}
				
				if (data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].RollingPPM.rag == 'G') {
					operatorcolorrppm = 'green';
				}
				
				if (data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].RollingPPM.rag == 'A') {
					operatorcolorrppm = 'yellow';
				}
				
				
				opplaceholder2_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].name +'</td>';
				opplaceholder2_output += '<td class="cell' + operatorcolorppm + '">' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].PPM.text + '</td>';
				opplaceholder2_output += '<td class="cell' + operatorcolorrppm + '">' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].RollingPPM.text + '</td>';
				opplaceholder2_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].Total + '</td>';
				opplaceholder2_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].OnTime + '</td>';
				opplaceholder2_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].Late + '</td>';
				opplaceholder2_output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.OperatorPage[i].OprServiceGrp[j].CancelVeryLate + '</td>';
				opplaceholder2_output += "</tr>";
				}
			}
		}
		opplaceholder2_output += "</tbody>";
		opplaceholder2_output += "</table>";

		
		// load the content into placeholder2 div
		$("#opplaceholder2").html(opplaceholder2_output);

		
	});
});