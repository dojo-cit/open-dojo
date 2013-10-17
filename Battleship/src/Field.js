var Field = function() {

	this.field = new Array(10);
	for (var i = 0; i < 10; i++) {
		this.field[i] = [0,0,0,0,0,0,0,0,0,0];
	}
	
	// 0 - Water;
	// > 0 - Ship;
	// X - Right Shot;

	this.validShip = function(ship) {
		if ( !(ship.length > 1 && ship.length < 6)) {
			return false;
		}
		return true;
	}

	this.validPlace = function(ship, posX, posY, dir){

		if(posX < 0 || posY < 0){
			return false;			
		}

		if(dir == undefined){
	        //Se uma parte do navio fica fora do campo.
			if((posX >= 10) || (posY + ship.length >= 10)){
	    		return false;
	    	}

			for(var i = posY; i < ship.length; i++){
				if(this.field[posX][posY + i] != 0){
					return false;
				}
			}
			return true;
		}else{
			//Se uma parte do navio fica fora do campo.
			if((posX + ship.length >= 10) || (posY >= 10)){
	    		return false;
	    	}

			for(var i = posX; i < ship.length; i++){
				if(this.field[posX + i][posY] != 0){
					return false;
				} 
			}
			return true;
		}
	}

	this.placeShip = function(ship, posX, posY, dir) {
		// TODO ... assumindo inicialmente que a orientação é horizontal

		var shipSize = ship.length;
		//var isValid = this.validShip(ship) && this.validPlace(ship, posX, posY);

		if (!this.validPlace(ship, posX, posY, dir))	{
			throw "Erro - Posição inválida!";
		}

		if (!this.validShip(ship)) {
			throw "Erro - Navio inválido!";
		}
		
		for(var i = 0; i < shipSize; i++){
			if (dir == undefined) {
				this.field[posX][posY+i] = 1;
			} else {
				this.field[posX+i][posY] = 1;
			}
			
			//dir == undefined ? posY++ : posX++;
		}

	}

	this.toString = function() {
		for(var i = 0; i < 10; i++){
			for (var j = 0; j < 10; j++) {
				document.write(this.field[i][j] + " ");
			}
			document.write("<br />");
		}
		document.write("<br /><br />");
	}
}