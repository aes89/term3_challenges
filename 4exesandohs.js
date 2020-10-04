const exesAndOhs = (string) => {
    var xCount = (string.match(/x/g) || []).length;
    var oCount = (string.match(/o/g) || []).length;

    if (xCount === oCount) {
		return true;
    } else {
        return false;
    }
}



// you need to return values you dumdum.