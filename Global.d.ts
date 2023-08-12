
/*
╔═╾┈╼1╾┈╼═   Info about d8 API     ═╾╼═══════════════════════════════════════════════════════════════════════════╗ 
║ https://v8.dev/docs/d8																						 ║
║ https://gist.github.com/kevincennis/0cd2138c78a07412ef21#d8-shell-examples									 ║
║ 																												 ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝*/



/*
╔╾┈╼2╾┈╼═   globalThis methods     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌─╗ 
│ Simple shell: https://source.chromium.org/chromium/chromium/src/+/main:v8/samples/shell.cc?q=shell.cc			 │
│ d8.h: 		https://source.chromium.org/chromium/chromium/src/+/main:v8/src/d8/d8.h										 │
│ d8.cc:		https://source.chromium.org/chromium/chromium/src/+/main:v8/src/d8/d8.cc						 │
╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/

{

	/*
	╔╾┈╼2.1╾┈╼globalThisMethods╾┈╼═   version     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄─╗
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Returns the version of V8   
	 * {@link https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/src/d8/d8.cc;drc=ba76382142a396cad2827eeb656191c96fc189f6;bpv=1;bpt=1;l=3016?q=version&ss=chromium%2Fchromium%2Fsrc:v8%2Fsrc%2Fd8%2F V8 source code}
	 * @return {string} version of current v8 runtime
	 * @example
	 * ```JavaScript
	 * console.log(version()); // 11.2.103
	 * ```
	 */
	declare function version (): string;



	/*
	╔╾┈╼2.2╾┈╼globalThisMethods╾┈╼═   quit     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Abort current runtime process     
	 * @param theExitCode the process exit code
	 * @example        
	 * ```javascript
	 * // evaluated code...
	 * quit(1); // Abort runtime process with exitcode: 1
	 * ```
	 */
	declare function quit ( theExitCode: number ): void;



	/*
	╔╾┈╼2.3╾┈╼globalThisMethods╾┈╼═   print     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Write any things to standart system output  
	 * add `\n` (new line)  at the end     
	 * @example
	 * ```javascript
	 * print("Hello"); // Hello
	 * print("my name is", "Murych"); // my name is Murych
	 * ```   
	 */
	declare function print ( ...data: any[] ): void;



	/*
	╔╾┈╼2.4╾┈╼globalThisMethods╾┈╼═   printErr     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Write any things to system Error output      
	 * add `\n` (new line)  at the end      
	 * @example
	 * ```bash
	 * # Example 1: no output. Becose std error pipening to dev null
	 * d8 -e 'printErr("Error")' 2>/dev/null; 
	 *   
	 * # Example 2: Only "Yo" outputing. 
	 * d8 -e 'print("Yo"); printErr("Error")' 2>/dev/null; # Only "Yo" outputing. 
	 *   
	 * # Example 3:  Only "Error" outputing. 
	 * d8 -e 'print("Yo"); printErr("Error")' 1>/dev/null; 
	 * 
	 * ```
	 */
	declare function printErr ( ...data: any[] ): void;



	/*
	╔╾┈╼2.5╾┈╼globalThisMethods╾┈╼═   write     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Write ant things to system output with NO new line at the end   
	 * @example
	 * ```bash
	 * d8 -e 'write("My name is "); write("Murych");' 
	 * # My name is Murych   
	 * ```
	 */
	declare function write ( ...data: any[] ): void;



	/*
	╔╾┈╼2.6╾┈╼globalThisMethods╾┈╼═   read     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Read data form file  
	 * @param theFilePath System File Path 
	 * @example 
	 * ```javascript
	 * var readMe = read('README.md');
	 * console.log( readMe ); // "This license applies to all parts of V8"
	 * ```
	 */
	declare function read ( theFilePath: string ): string;



	/*
	╔╾┈╼2.7╾┈╼globalThisMethods╾┈╼═   readline     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Read data from standart input   
	 * @example
	 * ```javascript
	 * var greeting = readline(); // Type "Welcome" and push "Enter"
	 * console.log(greeting); // Welcome
	 * ```
	 */
	declare function readline (): string;



	/*
	╔╾┈╼2.8╾┈╼globalThisMethods╾┈╼═   readbuffer     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Read file to array buffer  
	 * @example
	 * ```javascript
	 * var theData = readbuffer( "./path/someFile.bin" );
	 * var theInt8Data = new Int8Array( theData );
	 * console.log(theInt8Data); 
	 * ```
	 */
	declare function readbuffer ( pathName: string ): ArrayBuffer;



	/*
	╔╾┈╼2.9╾┈╼globalThisMethods╾┈╼═   load     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌──╗
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	* #### Load and execute JS file's   																				  
	* Each argument is a `String` that describes the path to a file.
	* @param {...strings} listOfFilePath the path to a file  		
	* @example													  
	*```javascript															  										  
	* // Load and execute 2 files. One by one.																								  
	* load("./f1.js", "./f2.js");																  
	* ```						
	*/
	declare function load ( ...listOfFilePath: string[] ): void;



	/*
	╔╾┈╼2.10╾┈╼globalThisMethods╾┈╼═   setTimeout     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Dummy setTimeout   
	 * No realy timeout - fired as soon as possible.  
	 * Additional arguments not used.   
	 * @param handler Function or String to evaluate
	 * @example
	 * ```JS
	 * ```
	 */
	declare function setTimeout ( handler: string | Function ): number;

}




/*
╔╾┈╼3╾┈╼═   os     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄──╗
│ https://source.chromium.org/chromium/chromium/src/+/main:v8/src/d8/d8-posix.cc								 │ 
╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
/**
 * #### d8 special global property: os    
 * {@link https://source.chromium.org/chromium/chromium/src/+/main:v8/src/d8/d8-posix.cc chrome v8 src}
 */
declare var os: {

	/*
	╔╾┈╼3.1╾┈╼os╾┈╼═   chdir     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### change current directory to the given pathName
	 */
	chdir ( pathName: string ): void;




	/*
	╔╾┈╼3.2╾┈╼os╾┈╼═   theEnviromentName     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Bind the environment idendtifier.  
	 * Repeated calls to this method leak memory due to the API of setenv in the standard C library.    
	 * {@link https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/src/d8/d8-posix.cc;drc=ba76382142a396cad2827eeb656191c96fc189f6;bpv=1;bpt=1;l=605?q=setenv&ss=chromium%2Fchromium%2Fsrc:v8%2Fsrc%2Fd8%2F v8/src/d8/d8-posix.cc}
	 * @param theEnviromentIdentifierName The name of enviroment identifier for bind 
	 * @param theValue The value to bind    
	 * @example
	 * ```javascript
	 * os.setenv("KWIN_COMPOSE", "O2ES"); 
	 * ```
	 */
	setenv ( theEnviromentIdentifierName: string, theValue: string ): void;




	/*
	╔╾┈╼3.3╾┈╼os╾┈╼═   unsetenv     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Unset an environment identifier
	 * @param theEnviromentIdentifierName The name of enviroment identifier for unset 
	 * @example  
	 * ```
	 * os.unsetenv("KWIN_COMPOSE");
	 * ```
	 */
	unsetenv ( theEnviromentIdentifierName: string ): void;




	/*
	╔╾┈╼3.4╾┈╼os╾┈╼═   umask     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### calls the umask_system_call and returns the old umask    
	 * @param theMask `int32` the default file system rights for created files  
	 * @returns {number} the old umask 
	 * @see v8/src/d8/d8-posix.cc: {@link https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/src/d8/d8-posix.cc;drc=ba76382142a396cad2827eeb656191c96fc189f6;bpv=1;bpt=1;l=507?gsn=SetUMask&gs=KYTHE%3A%2F%2Fkythe%3A%2F%2Fchromium.googlesource.com%2Fcodesearch%2Fchromium%2Fsrc%2F%2Fmain%3Flang%3Dc%252B%252B%3Fpath%3Dv8%2Fsrc%2Fd8%2Fd8-posix.cc%23H8Y1VMjF4waGjLxaLXwHffI1gEYxJCZCWDTGbkka5HM  Shell::SetUMask}     
	 * @example
	 * ```javascript
	 * os.umask( 0o777 );
	 * ````
	 */
	umask ( theMask: number ): number




	/*
	╔╾┈╼3.5╾┈╼os╾┈╼═   mkdirp     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Create new directory and make parent directories as needed   
	 * Intermediate directories are created if necessary. 
	 * An exception is not thrown if the directory already exists.  
	 * Analogous to the "mkdir -p" command.  
	 * {@link https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/src/d8/d8-posix.cc;drc=ba76382142a396cad2827eeb656191c96fc189f6;l=565 v8 sources}   
	 *     
	 * __Somthing wrong with mask and return. Need more testing__
	 * @param nameParh Path for new directory
	 * @param mask file system rights for created directory  
	 * @return `true` for success
	 * @example 
	 * ```javascript
	 * // make v8 and tests directory with 777 access rights.
	 * os.mkdirp( "/tmp/v8/tests/", 0777 ); 
	 * ```` 
	 */
	mkdirp ( nameParh: string, mask?: number ): boolean;




	/*
	╔╾┈╼3.6╾┈╼os╾┈╼═   rmdir     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Remove directory 
	 * @param nameParh Path to deleted directory
	 * @return true for success
	 * @example
	 * ```javascript
	 * // remove /tmp/v8/tests/ directory
	 * os.rmdir( "/tmp/v8/tests/" ); 
	 * ````
	 */
	rmdir ( nameParh: string ): boolean;




	/*
	╔╾┈╼3.7╾┈╼os╾┈╼═   name     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### System V8_TARGET_OS_STRING 
	 * The user's operating system. his should be one of:
	 * - android
	 * - fuchsia 
	 * - ios
	 * - linux 
	 * - macos
	 * - windows
	 * - unknown   
	 * 
	 * {@link https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/include/v8config.h;l=233;drc=ba76382142a396cad2827eeb656191c96fc189f6 V8 source code}
	 * @example
	 * ```javascript
	 * console.log( os.name ); // linux
	 * ```
	 */
	name: string;




	/*
	╔╾┈╼3.8╾┈╼os╾┈╼═   d8Path     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### Absolute path to runtime  
	 * @example
	 * ```javascript
	 * console.log( os.d8Path ); // /home/murych/.jsvu/engines/v8-debug/v8-debug
	 * ```
	 * */
	d8Path: string;
};


/*
╔╾┈╼4╾┈╼═   d8     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄──╗ 
│ Link to src: https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/src/d8/d8.cc;drc=ba76382142a396cad2827eeb656191c96fc189f6;bpv=1;bpt=1;l=3521?q=EventTarget&ss=chromium%2Fchromium%2Fsrc:v8%2Fsrc%2Fd8%2F
╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
/**
 * #### d8 special global property: d8    
 * ["file", "log", "dom", "test", "promise", "debugger", "serializer", "profiler"]    
 * {@link https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/src/d8/d8.cc;drc=ba76382142a396cad2827eeb656191c96fc189f6;bpv=1;bpt=1;l=3521?q=EventTarget&ss=chromium%2Fchromium%2Fsrc:v8%2Fsrc%2Fd8%2F chrome v8 src}
 */
declare var d8: {

	/*
	╔╾┈╼4.1╾┈╼d8╾┈╼═   file     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	file: {
		/*
		╔╾┈╼4.1.1╾┈╼d8╾┈╼file╾┈╼═   read     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌─╗ 
		╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
		/** Same as {@link read}    
		 * @see read    
		 * @param theFilePath System File Path   
		 * @return data from file
		 * @example
		 * ```javascript
		 * var readMe = d8.file.read('README.md');
		 * console.log( readMe ); // "This license applies to all parts of V8"
		 * ```
		 */
		read ( theFilePath: string ): string;


		/*
		╔╾┈╼4.1.2╾┈╼d8╾┈╼file╾┈╼═   execute     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌─╗ 
		╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
		/** Same as {@link load} */
		execute ( ...data: any[] ): void;
	},



	/*
	╔╾┈╼4.2╾┈╼d8╾┈╼═   log     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	log: {
		getAndStop ( ...data: any[] ): void;
	}



	/*
	╔╾┈╼4.3╾┈╼d8╾┈╼═   dom     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	dom: {
		Div ( ...data: any[] ): void;
	}



	/*
	╔╾┈╼4.4╾┈╼d8╾┈╼═   test     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	test: {
		verifySourcePositions ( ...data: any[] ): void;
		installConditionalFeatures ( ...data: any[] ): void;
	}



	/*
	╔╾┈╼4.5╾┈╼d8╾┈╼═   promise     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	promise: {
		setHooks ( ...data: any[] ): void;
	}

	/*
	╔╾┈╼4.6╾┈╼d8╾┈╼═   debugger     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * ["enable", "disable"]
	 */
	debugger: {

	}

	/*
	╔╾┈╼4.7╾┈╼d8╾┈╼═   serializer     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * ["serialize", "deserialize"]
	 */
	serializer: {

	}

	/*
	╔╾┈╼4.8╾┈╼d8╾┈╼═   profiler     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * ["setOnProfileEndListener", "triggerSample"]
	 */
	profiler: {

	}

}





/*
╔╾┈╼5╾┈╼═   Realm     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─╗ 
│ All in: 		https://source.chromium.org/chromium/chromium/src/+/main:v8/src/d8/d8.cc						 │
│ Realm srcs 	https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/src/d8/d8.cc;drc=ba76382142a396cad2827eeb656191c96fc189f6;bpv=1;bpt=1;l=3493?q=EventTarget&ss=chromium%2Fchromium%2Fsrc:v8%2Fsrc%2Fd8%2F
│ Signature:	Realm																							 │
╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
/**
 * ["shared", "current", "owner", "global", "create", "createAllowCrossRealmAccess", "navigate", "detachGlobal", "dispose", "switch", "eval"]
 * {@link https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/src/d8/d8.cc;drc=ba76382142a396cad2827eeb656191c96fc189f6;bpv=1;bpt=1;l=3493 v8 source code}
 */
declare var Realm: {
	/*
	╔╾┈╼5.1╾┈╼Realm╾┈╼═   shared     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	shared: undefined;



	/*
	╔╾┈╼5.2╾┈╼Realm╾┈╼═   current     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	current ( ...data: any[] ): void;



	/*
	╔╾┈╼5.3╾┈╼Realm╾┈╼═   owner     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### returns the index of the realm that created theO.
	 * Realm.owner( theO ) 
	 * @param theO  
	 */
	owner ( theO: any ): void;



	/*
	╔╾┈╼5.4╾┈╼Realm╾┈╼═   global     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### returns the global object of realm `theI` 
	 * (Note that properties of global objects cannot be read/written cross-realm.)  
	 * @param theI theI
	 */
	global ( theI: any ): void;




	/*
	╔╾┈╼5.5╾┈╼Realm╾┈╼═   create     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌──╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### creates a new realm with a distinct security token and returns its index.
	 */
	create (): void;




	/*
	╔╾┈╼5.6╾┈╼Realm╾┈╼═   createAllowCrossRealmAccess     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### creates a new realm with the same security token as the current realm.
	 */
	createAllowCrossRealmAccess (): void;




	/*
	╔╾┈╼5.7╾┈╼Realm╾┈╼═   navigate     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### creates a new realm with a distinct security token in place of realm `theRealmIndex`
	 * @param theRealmIndex  realm index
	 */
	navigate ( theRealmIndex: any ): void;




	/*
	╔╾┈╼5.8╾┈╼Realm╾┈╼═   detachGlobal     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### detaches the global objects of realm `theRealmIndex` from realm `theRealmIndex`
	 * @param theRealmIndex  realm index 
	 */
	detachGlobal ( theRealmIndex: any ): void;




	/*
	╔╾┈╼5.9╾┈╼Realm╾┈╼═   dispose     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### disposes the reference to the realm `theRealmIndex`
	 * @param theRealmIndex  realm index 
	 */
	dispose ( theRealmIndex: any ): void;




	/*
	╔╾┈╼5.10╾┈╼Realm╾┈╼═   switch     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### switches to the realm `theRealmIndex` for consecutive interactive inputs.
	 * @param theRealmIndex  realm index 
	 */
	switch ( theRealmIndex: any ): void;




	/*
	╔╾┈╼5.11╾┈╼Realm╾┈╼═   eval     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌─╗
	│ dunno what is this																							 │
	│ Search in:	https://source.chromium.org/chromium/chromium/src/+/main:v8/src/d8/d8.cc						 │
	│ for signature: void Shell::RealmEval																			 │
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	/**
	 * #### evaluates `theS` in realm `theRealmIndex` and returns the result.
	 * @param theRealmIndex  realm index 
	 * @param theS dunno what is it
	 */
	eval ( theRealmIndex: any, theS: any ): void;



}




/*
╔╾┈╼6╾┈╼═   performance     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╗ 
╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
/**
 * ["now", "mark", "measure", "measureMemory"]
 * {@link https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/src/d8/d8.cc;drc=ba76382142a396cad2827eeb656191c96fc189f6;bpv=1;bpt=1;l=3479 v8 source code}
 */
declare var performance: {
	/*
	╔╾┈╼6.1╾┈╼performance╾┈╼═   now     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	now ( ...data: any[] ): void;

	/*
	╔╾┈╼6.2╾┈╼performance╾┈╼═   mark     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	mark ( ...data: any[] ): void;

	/*
	╔╾┈╼6.3╾┈╼performance╾┈╼═   measure     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	measure ( ...data: any[] ): void;


	/*
	╔╾┈╼6.4╾┈╼performance╾┈╼═   measureMemory     ═╾┄┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄╌╌─┄─╌┄╌╌┄╌╌─╌┄─╌┄─╌┄┄─╗ 
	╚────────────────────────────────────────────────────────────────────────────────────────────────────────────────╝*/
	measureMemory ( ...data: any[] ): void;
}





/*
╔═╾┈╼7╾┈╼═   Worker     ═╾╼══════════════════════════════════════════════════════════════════════════════════════╗ 
║ !!! Обязательно посмотри в исходниках D8 появились новые штуки-дрюки											 ║
║  https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:v8/src/d8/d8.cc;drc=ba76382142a396cad2827eeb656191c96fc189f6;bpv=1;bpt=1;l=3428
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝*/
declare var Worker: {
}





/*
╔═╾┈╼8╾┈╼═   fuzzilli     ═╾╼════════════════════════════════════════════════════════════════════════════════════╗ 
║ ifdef V8_FUZZILLI																								 ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝*/
declare var fuzzilli: {

}





/*
╔═╾┈╼9╾┈╼═   async_hooks     ═╾╼═════════════════════════════════════════════════════════════════════════════════╗ 
║ if ( i:: v8_flags.expose_async_hooks) {																		 ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝*/
declare var async_hooks: {

}
