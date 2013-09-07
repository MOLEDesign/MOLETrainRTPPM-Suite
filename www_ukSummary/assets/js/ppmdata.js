// JavaScript Document

$.getJSON('http://development.moledesign.biz/node/output.json', function (data) {
	var output = '<table cellspacing="0" width="99%">';
		output += '<thead>';
		output += '<tr>';
		output += '<th>Sector</th>';
		output += '<th>PPM</th>';
		output += '<th>PPM (2 hours)</th>';
		output += '</th>';
		output += '</thead>';
		
		output += '</tbody>';
		output += '<tr style="font-weight:bold;">';
		output += '<td>National</td>';
		output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.NationalPPM.PPM.text + '</td>';
		output += '<td>' + data.RTPPMDataMsgV1.RTPPMData.NationalPage.NationalPPM.RollingPPM.text + '</td>';
		output += '</tr>';

		for (var i in data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector) {
			output += "<tr>";
			output += "<td>" + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector[i].sectorDesc + "</td>";
			output += "<td>" + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector[i].SectorPPM.PPM.text + "</td>";
			output += "<td>" + data.RTPPMDataMsgV1.RTPPMData.NationalPage.Sector[i].SectorPPM.RollingPPM.text + "</td>";
			output += "</tr>";
	}
	output += "</tbody>";
	output += "</table>";
	document.getElementById("placeholder").innerHTML = output;
});						
