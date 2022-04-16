/* Moralis init code */
const serverUrl = "https://gscrjn4kzgh8.usemoralis.com:2053/server";
const appId = "ELE2LjPziay8zZAU9jq0ilshe7sBT62adUEB483j";
Moralis.start({ serverUrl, appId });

async function loadnft(){
  
  const options = {
  address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
  chain: "eth",
  limit: "3",
  };
    
  const metaData = await Moralis.Web3API.token.getNFTOwners(options);
  console.log(metaData);

  buildTable(metaData.result);

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			
    var imgholder = JSON.parse(data[i].metadata);
    var tempimg = imgholder["image"];
    
    const img_width = ' width="40"';
    const img_height = ' height="40"';
    
    var fullcheckofimg = "<img src='" + tempimg + "'" + img_width + img_height +">";
    console.log(fullcheckofimg);
    
      var row = `<tr>
							<td>${[i+1]}</td>
              <td>${data[i].owner_of}</td>
							<td>${data[i].token_id}</td>
							<td>${fullcheckofimg}</td>
					  </tr>`
			table.innerHTML += row
		}
  
  }
}

async function loadpunks(){
  
  const options = {
  address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
  chain: "eth",
  limit: "50",
  };
    
  const metaData = await Moralis.Web3API.token.getNFTOwners(options);
  console.log(metaData);

  buildTable(metaData.result);

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			
    var imgholder = JSON.parse(data[i].metadata);
    var tempimg = imgholder["image"];
    
    const img_width = ' width="40"';
    const img_height = ' height="40"';
    
    var fullcheckofimg = "<img src='" + tempimg + "'" + img_width + img_height +">";
    console.log(fullcheckofimg);
    
      var row = `<tr>
							<td>${[i+1]}</td>
              <td>${data[i].owner_of}</td>
							<td>${data[i].token_id}</td>
							<td>${fullcheckofimg}</td>
					  </tr>`
			table.innerHTML += row
		}
  
  }
}

async function loadclonex(){
  
  const options = {
  address: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  chain: "eth",
  limit: "50",
  };
    
  const metaData = await Moralis.Web3API.token.getNFTOwners(options);
  console.log(metaData);

  buildTable(metaData.result);

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			
    var imgholder = JSON.parse(data[i].metadata);
    var tempimg = imgholder["image"];
    
    const img_width = ' width="40"';
    const img_height = ' height="40"';
    
    var fullcheckofimg = "<img src='" + tempimg + "'" + img_width + img_height +">";
    console.log(fullcheckofimg);
    
      var row = `<tr>
							<td>${[i+1]}</td>
              <td>${data[i].owner_of}</td>
							<td>${data[i].token_id}</td>
							<td>${fullcheckofimg}</td>
					  </tr>`
			table.innerHTML += row
		}
  
  }
}

async function loadazuki(){
  
  const options = {
  address: "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
  chain: "eth",
  limit: "50",
  };
    
  const metaData = await Moralis.Web3API.token.getNFTOwners(options);
  console.log(metaData);

  buildTable(metaData.result);

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			
    var imgholder = JSON.parse(data[i].metadata);
    var tempimg = imgholder["image"];
    
    const img_width = ' width="40"';
    const img_height = ' height="40"';
    
    var fullcheckofimg = "<img src='" + tempimg + "'" + img_width + img_height +">";
    console.log(fullcheckofimg);
    
      var row = `<tr>
							<td>${[i+1]}</td>
              <td>${data[i].owner_of}</td>
							<td>${data[i].token_id}</td>
							<td>${fullcheckofimg}</td>
					  </tr>`
			table.innerHTML += row
		}
  
  }
}

async function loadwow(){
  
  const options = {
  address: "0xe785E82358879F061BC3dcAC6f0444462D4b5330",
  chain: "eth",
  limit: "50",
  };
    
  const metaData = await Moralis.Web3API.token.getNFTOwners(options);
  console.log(metaData);

  buildTable(metaData.result);

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			
    var imgholder = JSON.parse(data[i].metadata);
    var tempimg = imgholder["image"];
    
    const img_width = ' width="40"';
    const img_height = ' height="40"';
    
    var fullcheckofimg = "<img src='" + tempimg + "'" + img_width + img_height +">";
    console.log(fullcheckofimg);
    
      var row = `<tr>
							<td>${[i+1]}</td>
              <td>${data[i].owner_of}</td>
							<td>${data[i].token_id}</td>
							<td>${fullcheckofimg}</td>
					  </tr>`
			table.innerHTML += row
		}
  
  }
}

async function loadmeebits(){
  
  const options = {
  address: "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7",
  chain: "eth",
  limit: "10",
  };
    
  const metaData = await Moralis.Web3API.token.getNFTOwners(options);
  console.log(metaData);

  buildTable(metaData.result);

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			
    var imgholder = JSON.parse(data[i].metadata);
    var tempimg = imgholder["image"];
    
    const img_width = ' width="40"';
    const img_height = ' height="40"';
    
    var fullcheckofimg = "<img src='" + tempimg + "'" + img_width + img_height +">";
    console.log(fullcheckofimg);
    
      var row = `<tr>
							<td>${[i+1]}</td>
              <td>${data[i].owner_of}</td>
							<td>${data[i].token_id}</td>
							<td>${fullcheckofimg}</td>
					  </tr>`
			table.innerHTML += row
		}
  
  }
}

async function loadcoolcats(){
  
  const options = {
  address: "0x1A92f7381B9F03921564a437210bB9396471050C",
  chain: "eth",
  limit: "10",
  };
    
  const metaData = await Moralis.Web3API.token.getNFTOwners(options);
  console.log(metaData);

  buildTable(metaData.result);

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			
    var imgholder = JSON.parse(data[i].metadata);
    var tempimg = imgholder["image"];
    
    const img_width = ' width="40"';
    const img_height = ' height="40"';
    
    var fullcheckofimg = "<img src='" + tempimg + "'" + img_width + img_height +">";
    console.log(fullcheckofimg);
    
      var row = `<tr>
							<td>${[i+1]}</td>
              <td>${data[i].owner_of}</td>
							<td>${data[i].token_id}</td>
							<td>${fullcheckofimg}</td>
					  </tr>`
			table.innerHTML += row
		}
  
  }
}

async function loadveefriends(){
  
  const options = {
  address: "0xa3AEe8BcE55BEeA1951EF834b99f3Ac60d1ABeeB",
  chain: "eth",
  limit: "10",
  };
    
  const metaData = await Moralis.Web3API.token.getNFTOwners(options);
  console.log(metaData);

  buildTable(metaData.result);

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			
    var imgholder = JSON.parse(data[i].metadata);
    var tempimg = imgholder["image"];
    
    const img_width = ' width="40"';
    const img_height = ' height="40"';
    
    var fullcheckofimg = "<img src='" + tempimg + "'" + img_width + img_height +">";
    console.log(fullcheckofimg);
    
      var row = `<tr>
							<td>${[i+1]}</td>
              <td>${data[i].owner_of}</td>
							<td>${data[i].token_id}</td>
							<td>${fullcheckofimg}</td>
					  </tr>`
			table.innerHTML += row
		}
  
  }
}

async function irene(){
  
  const options = {
  address: "0x13015585932752A8e6Dc24bE6c07c420381AF53d",
  chain: "eth",
  limit: "10",
  };
    
  const metaData = await Moralis.Web3API.token.getNFTOwners(options);
  console.log(metaData);

  buildTable(metaData.result);

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			
    var imgholder = JSON.parse(data[i].metadata);
    var tempimg = imgholder["image"];
    
    const img_width = ' width="40"';
    const img_height = ' height="40"';
    
    var fullcheckofimg = "<img src='" + tempimg + "'" + img_width + img_height +">";
    console.log(fullcheckofimg);
    
      var row = `<tr>
							<td>${[i+1]}</td>
              <td>${data[i].owner_of}</td>
							<td>${data[i].token_id}</td>
							<td>${fullcheckofimg}</td>
					  </tr>`
			table.innerHTML += row
		}
  
  }
}

async function zctdao(){
  
  const options = {
  address: "0x9c80777CAe192E5031c38A0d951C55730eCC3f5e",
  chain: "eth",
  limit: "10",
  };
    
  const metaData = await Moralis.Web3API.token.getNFTOwners(options);
  console.log(metaData);

  buildTable(metaData.result);

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			
    var imgholder = JSON.parse(data[i].metadata);
    var tempimg = imgholder["image"];
    
    const img_width = ' width="40"';
    const img_height = ' height="40"';
    
    var fullcheckofimg = "<img src='" + tempimg + "'" + img_width + img_height +">";
    console.log(fullcheckofimg);
    
      var row = `<tr>
							<td>${[i+1]}</td>
              <td>${data[i].owner_of}</td>
							<td>${data[i].token_id}</td>
							<td>${fullcheckofimg}</td>
					  </tr>`
			table.innerHTML += row
		}
  
  }
}


