/**
 * @file doCompare.js
 * @author DemiMurych <demimurych@gmail.com>
 * @fileoverview Compare globalThis with oure local base
 * @version 0.0.1
 */

/// <reference path="./d8.d.ts" />

var theListAllReady = new Set();

var doProcessObject = (
	( theObj, theInterval ) => {

		// if ( theListAllReady.has( theObj ) ) {
		// 	return "";
		// }

		// theListAllReady.add( theObj );

		var theCurrentGlobalThisBase = (
			(
				Reflect
					.ownKeys( theObj )
					.filter(
						( theName ) => ( typeof theName === "string" )
					)
			)
		);

		// 				.reduce(
		// 					( theRes, theCur ) => {
		// 						var localType = typeof theObj[ theCur ];


		// 						return (
		// 							`${ theRes }${ theInterval }${ theCur }: {
		// ${ theInterval + "\t" }typeSpeca: 0,
		// ${ theInterval + "\t" }type: ${ localType === "object" ? doProcessObject( theObj[ theCur ], ( theInterval + "\t" ) ) : localType }
		// ${ theInterval + "\t" }descr: ""
		// }, \n`
		// 						);
		// 					}
		// 					, ""
		// 				)
		// );

		return theCurrentGlobalThisBase.join( "\n" );
		return `{\n${ theCurrentGlobalThisBase }\n}, `;
	}
);


var doMain = (
	( { theBase } ) => {

		console.log( doProcessObject( globalThis, "\t" ) )
	}
);




import(
	"./base/globalThis.js"
).then( doMain );






// import myJson from './example.json' assert {type: 'json'};


// ).then(
// 	(
// 		( theRes ) => {
// 			var theNames = Reflect.ownKeys( theRes ).reduce(
// 				( theStr, theName ) => {
// 					try {
// 						theStr += theName
// 					} catch ( e ) {

// 					}

// 					return theStr
// 				}
// 				, ""
// 			);
// 			// join( "; " )
// 			console.log( "Yo", theRes.default.name )
// 		}
// 	)
// );


// quit();
