import { useEffect, useState } from "react";
import "./AkashKalki.css";
import Card from "./Card";

function AkashKalki() {
	const [name, setName] = useState();

	useEffect(() => {
		var letters = [
			["ஆ", "आ", "ആ", "ఆ", "ಆ", "আ", "आ", "A•"],
			["கா", "का", "കാ", "కా", "ಕಾ", "কা", "का", "Ka•"],
			["ஷஂ", "शः", "ഷ്", "శ్", "ಶ್", "শ", "श", "Sh"],
		];
		let a = "",
			b = "",
			c = "",
			d = "";
		var arr = [];
		for (let i in letters[0]) {
			a = letters[0][i];
			arr.push(a + b + c);
			// arr.push(a);
		}
		for (let i in letters[1]) {
			b = letters[1][i];
			arr.push(a + b + c);
			// arr.push(b);
		}
		for (let i in letters[2]) {
			c = letters[2][i];
			arr.push(a + b + c);
			// arr.push(c);
		}

		arr.push("A•KA•SH");
		arr.push("•AKASH•");
		arr.push("AKASH");
		arr.push("akash");
		arr.push("Akash");
		arr.push("aKash");
		arr.push("akAsh");
		arr.push("akaSh");
		arr.push("akasH");
		arr.push("AKASH");
		arr.push("(AKASH)");
		arr.push("(:AKASH:)");
		arr.push("(: AKASH :)");
		arr.push("闩长闩丂廾");
		arr.push("🅐🅚🅐🅢🅗");
		arr.push("ⒶⓀⒶⓈⒽ");
		arr.push("AKASH");

		// for (let i of arr) {
		// 	console.log(i);
		// }

		function loopWithDelay(index) {
			setTimeout(() => {
				setName(arr[index]);
				if (index < arr.length - 1) {
					loopWithDelay(index + 1);
				}
			}, 250);
		}

		loopWithDelay(0);
	}, []);

	return (
		<Card className='kalkimain' id='home'>
			<center>
				<h1 className='kalkitext'>{name}</h1>
			</center>
		</Card>
	);
}

export default AkashKalki;
