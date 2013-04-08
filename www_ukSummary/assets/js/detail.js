function getChosenOperator (opcode) {
	$(window).load(function() {
		$.getJSON('http://development.moledesign.biz/node/output.json', function (data) {
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
};