function sleep(ms) {
	ms += new Date().getTime();
	while (new Date() < ms){}
} 

sleep(20);